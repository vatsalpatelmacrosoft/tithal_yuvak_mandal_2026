<?php
// backend/controllers/YuvakController.php

require_once __DIR__ . '/../services/NotificationService.php';

class YuvakController
{
    public function __construct(private PDO $pdo) {}

    public function index(): void
    {
        $page   = max(1, (int)($_GET['page'] ?? 1));
        $limit  = min(100, max(10, (int)($_GET['limit'] ?? 20)));
        $offset = ($page - 1) * $limit;
        $where  = "WHERE y.status = 'active'";
        $params = [];

        if (!empty($_GET['search'])) {
            $s = '%' . $_GET['search'] . '%';
            $where .= " AND (y.first_name LIKE ? OR y.last_name LIKE ? OR y.mo_number LIKE ? OR y.yuvak_id LIKE ?)";
            $params = [$s, $s, $s, $s];
        }
        if (!empty($_GET['xetra_id']))  { $where .= ' AND y.xetra_id = ?';  $params[] = $_GET['xetra_id']; }
        if (!empty($_GET['mandal_id'])) { $where .= ' AND y.mandal_id = ?'; $params[] = $_GET['mandal_id']; }

        $countStmt = $this->pdo->prepare("SELECT COUNT(*) FROM yuvaks y $where");
        $countStmt->execute($params);
        $total = $countStmt->fetchColumn();

        $stmt = $this->pdo->prepare("
            SELECT y.*, x.name as xetra_name, x.code as xetra_code, m.name as mandal_name
            FROM yuvaks y
            JOIN xetras  x ON x.id = y.xetra_id
            JOIN mandals m ON m.id = y.mandal_id
            $where ORDER BY y.created_at DESC LIMIT $limit OFFSET $offset
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

    public function show(string $id): void
    {
        $stmt = $this->pdo->prepare("
            SELECT y.*, x.name as xetra_name, x.code as xetra_code, m.name as mandal_name
            FROM yuvaks y
            JOIN xetras  x ON x.id = y.xetra_id
            JOIN mandals m ON m.id = y.mandal_id
            WHERE y.uuid = ? AND y.status = 'active'
        ");
        $stmt->execute([$id]);
        $row = $stmt->fetch();
        if (!$row) sendError(404, 'Yuvak not found');
        sendSuccess($row);
    }

    public function store(array $body): void
    {
        $errors = $this->validate($body);
        if ($errors) sendValidationError($errors);

        // Active-only uniqueness check
        $chk = $this->pdo->prepare("SELECT id FROM yuvaks WHERE mo_number = ? AND status = 'active'");
        $chk->execute([$body['mo_number']]);
        if ($chk->fetch()) sendValidationError(['mo_number' => 'Mobile number already registered']);

        $xStmt = $this->pdo->prepare("SELECT code FROM xetras WHERE id = ? AND status = 'active'");
        $xStmt->execute([$body['xetra_id']]);
        $xetra = $xStmt->fetch();
        if (!$xetra) sendError(422, 'Invalid Xetra');

        $uuid = $this->generateUuid();

        $stmt = $this->pdo->prepare("
            INSERT INTO yuvaks
                (uuid, yuvak_id, first_name, middle_name, last_name, mo_number, whatsapp_number,
                 email, address, xetra_id, mandal_id, is_karyakar, tags)
            VALUES (?, 'TEMP', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ");
        $stmt->execute([
            $uuid,
            $body['first_name'],
            $body['middle_name'] ?? null,
            $body['last_name'],
            $body['mo_number'],
            $body['whatsapp_number'] ?? null,
            $body['email'] ?? null,
            $body['address'] ?? null,
            $body['xetra_id'],
            $body['mandal_id'],
            $body['is_karyakar'] ?? 'no',
            isset($body['tags']) ? json_encode($body['tags']) : null,
        ]);

        $newId   = (int)$this->pdo->lastInsertId();
        $yuvakId = buildYuvakId($newId, $xetra['code']);
        $this->pdo->prepare("UPDATE yuvaks SET yuvak_id = ? WHERE id = ?")->execute([$yuvakId, $newId]);

        // Async-style: fire notification (non-blocking)
        $notify = new NotificationService();
        $notify->onYuvakRegistered(
            $newId, $uuid, $yuvakId,
            $body['first_name'], $body['last_name'],
            $body['mo_number'], $body['whatsapp_number'] ?? ''
        );

        $this->show($uuid);
    }

    public function update(string $id, array $body): void
    {
        $stmt = $this->pdo->prepare("SELECT * FROM yuvaks WHERE uuid = ? AND status = 'active'");
        $stmt->execute([$id]);
        $existing = $stmt->fetch();
        if (!$existing) sendError(404, 'Yuvak not found');

        $errors = $this->validate($body, $existing['id']);
        if ($errors) sendValidationError($errors);

        $chk = $this->pdo->prepare("SELECT id FROM yuvaks WHERE mo_number = ? AND status = 'active' AND id != ?");
        $chk->execute([$body['mo_number'], $existing['id']]);
        if ($chk->fetch()) sendValidationError(['mo_number' => 'Mobile number already registered']);

        $this->pdo->prepare("
            UPDATE yuvaks SET
                first_name=?, middle_name=?, last_name=?, mo_number=?,
                whatsapp_number=?, email=?, address=?,
                xetra_id=?, mandal_id=?, is_karyakar=?, tags=?
            WHERE uuid=?
        ")->execute([
            $body['first_name'], $body['middle_name'] ?? null, $body['last_name'],
            $body['mo_number'], $body['whatsapp_number'] ?? null, $body['email'] ?? null,
            $body['address'] ?? null, $body['xetra_id'], $body['mandal_id'],
            $body['is_karyakar'] ?? 'no',
            isset($body['tags']) ? json_encode($body['tags']) : null,
            $id,
        ]);

        $this->show($id);
    }

    public function destroy(string $id): void
    {
        $stmt = $this->pdo->prepare("SELECT id FROM yuvaks WHERE uuid = ? AND status = 'active'");
        $stmt->execute([$id]);
        if (!$stmt->fetch()) sendError(404, 'Yuvak not found');
        $this->pdo->prepare("UPDATE yuvaks SET status = 'archive' WHERE uuid = ?")->execute([$id]);
        sendSuccess([], 'Yuvak archived successfully');
    }

    public function exportCsv(): void
    {
        $where = "WHERE y.status = 'active'";
        $params = [];

        if (!empty($_GET['search'])) {
            $s = '%' . $_GET['search'] . '%';
            $where .= " AND (y.first_name LIKE ? OR y.last_name LIKE ? OR y.mo_number LIKE ? OR y.yuvak_id LIKE ?)";
            $params = [$s, $s, $s, $s];
        }
        if (!empty($_GET['xetra_id']))  { $where .= ' AND y.xetra_id = ?';  $params[] = (int)$_GET['xetra_id']; }
        if (!empty($_GET['mandal_id'])) { $where .= ' AND y.mandal_id = ?'; $params[] = (int)$_GET['mandal_id']; }

        $stmt = $this->pdo->prepare("
            SELECT y.yuvak_id, y.first_name, y.middle_name, y.last_name,
                   y.mo_number, y.whatsapp_number, y.email, y.address,
                   y.is_karyakar, x.name AS xetra_name, m.name AS mandal_name,
                   DATE(y.created_at) AS joined_on
            FROM yuvaks y
            JOIN xetras  x ON x.id = y.xetra_id
            JOIN mandals m ON m.id = y.mandal_id
            $where ORDER BY y.first_name, y.last_name
        ");
        $stmt->execute($params);
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

        header('Content-Type: text/csv; charset=utf-8');
        header('Content-Disposition: attachment; filename="yuvak_export_' . date('Ymd_His') . '.csv"');
        header('Cache-Control: no-store, no-cache');
        header('Pragma: no-cache');

        $out = fopen('php://output', 'w');
        fputcsv($out, ['Yuvak ID','First Name','Middle Name','Last Name','Mobile','WhatsApp','Email','Address','Karyakar','Xetra','Mandal','Joined On'], ',', '"', '\\');
        foreach ($rows as $r) {
            fputcsv($out, [
                $r['yuvak_id'], $r['first_name'], $r['middle_name'] ?? '',
                $r['last_name'], $r['mo_number'], $r['whatsapp_number'] ?? '',
                $r['email'] ?? '', $r['address'] ?? '', $r['is_karyakar'],
                $r['xetra_name'], $r['mandal_name'], $r['joined_on'],
            ], ',', '"', '\\');
        }
        fclose($out);
        exit;
    }

    public function qrCode(string $id): void
    {
        $stmt = $this->pdo->prepare("SELECT uuid, yuvak_id FROM yuvaks WHERE uuid = ? AND status = 'active'");
        $stmt->execute([$id]);
        $row = $stmt->fetch();
        if (!$row) sendError(404, 'Yuvak not found');
        $notify = new NotificationService();
        $url = $notify->getQrUrl($row['uuid'], $row['yuvak_id'], 'yuvak');
        sendSuccess(['qr_url' => $url]);
    }

    public function sendNotification(string $id): void
    {
        $stmt = $this->pdo->prepare("
            SELECT y.*, x.name as xetra_name, m.name as mandal_name
            FROM yuvaks y
            JOIN xetras  x ON x.id = y.xetra_id
            JOIN mandals m ON m.id = y.mandal_id
            WHERE y.uuid = ? AND y.status = 'active'
        ");
        $stmt->execute([$id]);
        $row = $stmt->fetch();
        if (!$row) sendError(404, 'Yuvak not found');

        $notify = new NotificationService();
        $notify->resendWelcome($row, 'yuvak');
        sendSuccess([], 'Welcome message sent successfully');
    }

    private function validate(array $body, ?int $excludeId = null): array
    {
        $errors = [];
        if (empty($body['first_name']))  $errors['first_name']  = 'First name is required';
        if (empty($body['last_name']))   $errors['last_name']   = 'Last name is required';
        if (empty($body['mo_number']))   $errors['mo_number']   = 'Mobile number is required';
        if (!empty($body['mo_number']) && !preg_match('/^[6-9]\d{9}$/', $body['mo_number'])) {
            $errors['mo_number'] = 'Invalid Indian mobile number (10 digits, starts 6-9)';
        }
        if (empty($body['xetra_id']))  $errors['xetra_id']  = 'Xetra is required';
        if (empty($body['mandal_id'])) $errors['mandal_id'] = 'Mandal is required';
        if (!empty($body['email']) && !filter_var($body['email'], FILTER_VALIDATE_EMAIL)) {
            $errors['email'] = 'Invalid email address';
        }
        $validKaryakar = ['no', 'bal', 'yuva', 'sanyukta'];
        if (!empty($body['is_karyakar']) && !in_array($body['is_karyakar'], $validKaryakar)) {
            $errors['is_karyakar'] = 'Invalid value. Allowed: no, bal, yuva, sanyukta';
        }
        return $errors;
    }

    private function generateUuid(): string
    {
        return sprintf('%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
            mt_rand(0,0xffff), mt_rand(0,0xffff), mt_rand(0,0xffff),
            mt_rand(0,0x0fff)|0x4000, mt_rand(0,0x3fff)|0x8000,
            mt_rand(0,0xffff), mt_rand(0,0xffff), mt_rand(0,0xffff));
    }
}
