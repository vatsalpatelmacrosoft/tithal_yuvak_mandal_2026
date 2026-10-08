<?php
// backend/controllers/MessageController.php
// WhatsApp click-to-chat "Send Message" feature: resolves/validates recipients,
// logs campaigns + per-recipient send status. Actual sending happens client-side
// via wa.me links — there is no server-side WhatsApp send here.

class MessageController
{
    public function __construct(private PDO $pdo) {}

    // ── Recipient resolution (shared by preview + store) ───────────────

    private function queryMembers(string $memberType, array $criteria): array
    {
        $table = $memberType === 'yuvak' ? 'yuvaks' : 'yuvatis';
        $where = "WHERE status = 'active'";
        $params = [];

        switch ($criteria['scope']) {
            case 'xetra':
                $ids = array_filter(array_map('intval', $criteria['xetra_ids'] ?? []));
                if (!$ids) return [];
                $where .= ' AND xetra_id IN (' . implode(',', array_fill(0, count($ids), '?')) . ')';
                $params = array_merge($params, $ids);
                break;
            case 'mandal':
                $ids = array_filter(array_map('intval', $criteria['mandal_ids'] ?? []));
                if (!$ids) return [];
                $where .= ' AND mandal_id IN (' . implode(',', array_fill(0, count($ids), '?')) . ')';
                $params = array_merge($params, $ids);
                break;
            case 'individual':
                $key = $memberType === 'yuvak' ? 'yuvak_uuids' : 'yuvati_uuids';
                $uuids = array_filter($criteria[$key] ?? []);
                if (!$uuids) return [];
                $where .= ' AND uuid IN (' . implode(',', array_fill(0, count($uuids), '?')) . ')';
                $params = array_merge($params, $uuids);
                break;
            case 'all':
            default:
                break;
        }

        $stmt = $this->pdo->prepare("SELECT * FROM $table $where");
        $stmt->execute($params);
        return $stmt->fetchAll();
    }

    private function resolveRecipients(array $criteria): array
    {
        $targetType = $criteria['target_type'] ?? '';
        $types = $targetType === 'both' ? ['yuvak', 'yuvati'] : [$targetType];
        $types = array_intersect($types, ['yuvak', 'yuvati']);

        $recipients = [];
        foreach ($types as $memberType) {
            foreach ($this->queryMembers($memberType, $criteria) as $row) {
                [$used, $source] = resolveWhatsAppTarget($row['whatsapp_number'] ?? null, $row['mo_number'] ?? null);
                $fullName = trim($row['first_name'] . ' ' . ($row['middle_name'] ?? '') . ' ' . $row['last_name']);
                $fullName = preg_replace('/\s+/', ' ', $fullName);

                $recipients[] = [
                    'member_type'    => $memberType,
                    'member_id'      => (int)$row['id'],
                    'member_uuid'    => $row['uuid'],
                    'full_name'      => $fullName,
                    'mo_number'      => $row['mo_number'],
                    'whatsapp_number'=> $row['whatsapp_number'],
                    'used_number'    => $used,
                    'number_source'  => $source,
                    'is_valid'       => $used !== null,
                ];
            }
        }
        return $recipients;
    }

    // ── Actions ─────────────────────────────────────────────────────────

    public function previewRecipients(array $body): void
    {
        $errors = $this->validateCriteria($body);
        if ($errors) sendValidationError($errors);

        $recipients = $this->resolveRecipients($body);
        $valid = count(array_filter($recipients, fn($r) => $r['is_valid']));

        sendSuccess([
            'recipients' => $recipients,
            'total'      => count($recipients),
            'valid'      => $valid,
            'invalid'    => count($recipients) - $valid,
        ]);
    }

    public function storeCampaign(array $body, int $createdBy): void
    {
        $errors = $this->validateCriteria($body);
        if (empty($body['subject'])) $errors['subject'] = 'Subject is required';
        if (empty($body['message_body'])) $errors['message_body'] = 'Message is required';
        if ($errors) sendValidationError($errors);

        $excluded = array_flip($body['excluded_uuids'] ?? []);
        $recipients = array_values(array_filter(
            $this->resolveRecipients($body),
            fn($r) => !isset($excluded[$r['member_uuid']])
        ));

        if (!$recipients) sendValidationError(['recipients' => 'No recipients match the selected criteria']);

        $uuid = $this->uuid();
        $skippedCount = count(array_filter($recipients, fn($r) => !$r['is_valid']));

        $this->pdo->prepare("
            INSERT INTO message_campaigns
                (uuid, subject, message_body, target_type, scope, scope_filters, total_recipients, skipped_count, created_by)
            VALUES (?,?,?,?,?,?,?,?,?)
        ")->execute([
            $uuid,
            $body['subject'],
            $body['message_body'],
            $body['target_type'],
            $body['scope'],
            json_encode([
                'xetra_ids'  => $body['xetra_ids'] ?? [],
                'mandal_ids' => $body['mandal_ids'] ?? [],
            ]),
            count($recipients),
            $skippedCount,
            $createdBy,
        ]);

        $campaignId = (int)$this->pdo->lastInsertId();

        $insert = $this->pdo->prepare("
            INSERT INTO message_recipients
                (campaign_id, member_type, member_id, member_uuid, full_name, used_number, number_source, status, skip_reason)
            VALUES (?,?,?,?,?,?,?,?,?)
        ");
        foreach ($recipients as $r) {
            $insert->execute([
                $campaignId,
                $r['member_type'],
                $r['member_id'],
                $r['member_uuid'],
                $r['full_name'],
                $r['used_number'],
                $r['number_source'],
                $r['is_valid'] ? 'pending' : 'skipped',
                $r['is_valid'] ? null : 'invalid_number',
            ]);
        }

        $this->show($uuid);
    }

    public function markRecipient(string $campaignUuid, string $recipientId, array $body): void
    {
        $status = $body['status'] ?? '';
        if (!in_array($status, ['sent', 'skipped', 'failed'], true)) {
            sendValidationError(['status' => 'Invalid status']);
        }

        $campaign = $this->findCampaign($campaignUuid);
        if (!$campaign) sendError(404, 'Campaign not found');

        $stmt = $this->pdo->prepare("SELECT id FROM message_recipients WHERE id=? AND campaign_id=?");
        $stmt->execute([$recipientId, $campaign['id']]);
        if (!$stmt->fetch()) sendError(404, 'Recipient not found');

        $this->pdo->prepare("
            UPDATE message_recipients SET status=?, sent_at = IF(?='sent', NOW(), sent_at) WHERE id=?
        ")->execute([$status, $status, $recipientId]);

        $this->recalculateCounts((int)$campaign['id']);
        $this->show($campaignUuid);
    }

    public function index(): void
    {
        $page   = max(1, (int)($_GET['page'] ?? 1));
        $limit  = min(100, max(10, (int)($_GET['limit'] ?? 20)));
        $offset = ($page - 1) * $limit;
        $where  = 'WHERE 1=1';
        $params = [];

        if (!empty($_GET['search'])) {
            $where .= ' AND c.subject LIKE ?';
            $params[] = '%' . $_GET['search'] . '%';
        }
        if (!empty($_GET['date_from'])) { $where .= ' AND DATE(c.created_at) >= ?'; $params[] = $_GET['date_from']; }
        if (!empty($_GET['date_to']))   { $where .= ' AND DATE(c.created_at) <= ?'; $params[] = $_GET['date_to']; }

        $countStmt = $this->pdo->prepare("SELECT COUNT(*) FROM message_campaigns c $where");
        $countStmt->execute($params);
        $total = $countStmt->fetchColumn();

        $stmt = $this->pdo->prepare("
            SELECT c.*, u.mo_number as created_by_mo,
                   CONCAT(y.first_name, ' ', y.last_name) as created_by_name
            FROM message_campaigns c
            LEFT JOIN users u ON u.id = c.created_by
            LEFT JOIN yuvaks y ON y.id = u.yuvak_id
            $where
            ORDER BY c.created_at DESC
            LIMIT $limit OFFSET $offset
        ");
        $stmt->execute($params);

        sendSuccess([
            'data'      => $stmt->fetchAll(),
            'total'     => (int)$total,
            'page'      => $page,
            'per_page'  => $limit,
            'last_page' => (int)ceil($total / $limit),
        ]);
    }

    public function show(string $uuid): void
    {
        $campaign = $this->findCampaign($uuid);
        if (!$campaign) sendError(404, 'Campaign not found');

        $stmt = $this->pdo->prepare("SELECT * FROM message_recipients WHERE campaign_id=? ORDER BY id");
        $stmt->execute([$campaign['id']]);
        $campaign['recipients'] = $stmt->fetchAll();

        sendSuccess($campaign);
    }

    // ── Helpers ─────────────────────────────────────────────────────────

    private function findCampaign(string $uuid): array|false
    {
        $stmt = $this->pdo->prepare("SELECT * FROM message_campaigns WHERE uuid=?");
        $stmt->execute([$uuid]);
        return $stmt->fetch();
    }

    private function recalculateCounts(int $campaignId): void
    {
        $stmt = $this->pdo->prepare("
            SELECT
                SUM(status='sent') as sent_count,
                SUM(status='sent' AND member_type='yuvak') as yuvak_sent_count,
                SUM(status='sent' AND member_type='yuvati') as yuvati_sent_count,
                SUM(status IN ('skipped','failed')) as skipped_count
            FROM message_recipients WHERE campaign_id=?
        ");
        $stmt->execute([$campaignId]);
        $counts = $stmt->fetch();

        $this->pdo->prepare("
            UPDATE message_campaigns
            SET sent_count=?, yuvak_sent_count=?, yuvati_sent_count=?, skipped_count=?
            WHERE id=?
        ")->execute([
            (int)$counts['sent_count'],
            (int)$counts['yuvak_sent_count'],
            (int)$counts['yuvati_sent_count'],
            (int)$counts['skipped_count'],
            $campaignId,
        ]);
    }

    private function validateCriteria(array $body): array
    {
        $errors = [];
        if (!in_array($body['target_type'] ?? '', ['yuvak', 'yuvati', 'both'], true)) {
            $errors['target_type'] = 'Select Yuvak, Yuvati, or Both';
        }
        if (!in_array($body['scope'] ?? '', ['all', 'xetra', 'mandal', 'individual'], true)) {
            $errors['scope'] = 'Select a valid recipient scope';
        }
        return $errors;
    }

    private function uuid(): string
    {
        return sprintf('%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
            mt_rand(0, 0xffff), mt_rand(0, 0xffff), mt_rand(0, 0xffff),
            mt_rand(0, 0x0fff) | 0x4000, mt_rand(0, 0x3fff) | 0x8000,
            mt_rand(0, 0xffff), mt_rand(0, 0xffff), mt_rand(0, 0xffff));
    }
}
