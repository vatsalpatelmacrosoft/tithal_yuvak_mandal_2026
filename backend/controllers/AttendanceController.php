<?php
// backend/controllers/AttendanceController.php

class AttendanceController
{
    public function __construct(private PDO $pdo) {}

    /**
     * List attendance with date filter
     */
    public function index(): void
    {
        $date       = $_GET['date']        ?? date('Y-m-d');
        $memberType = $_GET['member_type'] ?? null;
        $shibirId   = $_GET['shibir_id']   ?? null;

        $where  = "WHERE a.attendance_date = ?";
        $params = [$date];

        if ($memberType) { $where .= ' AND a.member_type = ?'; $params[] = $memberType; }
        if ($shibirId)   { $where .= ' AND a.shibir_id = ?';   $params[] = $shibirId; }

        $stmt = $this->pdo->prepare("
            SELECT a.*,
                CASE WHEN a.member_type='yuvak'
                    THEN (SELECT CONCAT(first_name,' ',last_name) FROM yuvaks WHERE id=a.member_id)
                    ELSE (SELECT CONCAT(first_name,' ',last_name) FROM yuvatis WHERE id=a.member_id)
                END as member_name,
                CASE WHEN a.member_type='yuvak'
                    THEN (SELECT yuvak_id FROM yuvaks WHERE id=a.member_id)
                    ELSE (SELECT yuvati_id FROM yuvatis WHERE id=a.member_id)
                END as member_code
            FROM attendances a $where ORDER BY a.created_at DESC
        ");
        $stmt->execute($params);

        $rows = $stmt->fetchAll();

        // Summary counts
        $yuvakCount  = count(array_filter($rows, fn($r) => $r['member_type'] === 'yuvak'));
        $yuvatiCount = count(array_filter($rows, fn($r) => $r['member_type'] === 'yuvati'));

        sendSuccess(['data' => $rows, 'yuvak_count' => $yuvakCount, 'yuvati_count' => $yuvatiCount]);
    }

    /**
     * Scan QR or manual entry — accepts UUID or Yuvak/Yuvati ID, auto-detects member type.
     */
    public function scan(array $body, array $user): void
    {
        $identifier = trim($body['uuid'] ?? $body['identifier'] ?? '');
        if (empty($identifier)) sendValidationError(['identifier' => 'UUID or Member ID is required']);

        $isUuid = (bool) preg_match('/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i', $identifier);
        $member = null; $memberType = null;

        if ($isUuid) {
            // QR scan — search by uuid in both tables
            $stmt = $this->pdo->prepare("SELECT id FROM yuvaks WHERE uuid=? AND status='active'");
            $stmt->execute([$identifier]);
            if ($row = $stmt->fetch()) { $member = $row; $memberType = 'yuvak'; }

            if (!$member) {
                $stmt = $this->pdo->prepare("SELECT id FROM yuvatis WHERE uuid=? AND status='active'");
                $stmt->execute([$identifier]);
                if ($row = $stmt->fetch()) { $member = $row; $memberType = 'yuvati'; }
            }
        } else {
            // Manual ID entry — search by yuvak_id / yuvati_id
            $stmt = $this->pdo->prepare("SELECT id FROM yuvaks WHERE yuvak_id=? AND status='active'");
            $stmt->execute([$identifier]);
            if ($row = $stmt->fetch()) { $member = $row; $memberType = 'yuvak'; }

            if (!$member) {
                $stmt = $this->pdo->prepare("SELECT id FROM yuvatis WHERE yuvati_id=? AND status='active'");
                $stmt->execute([$identifier]);
                if ($row = $stmt->fetch()) { $member = $row; $memberType = 'yuvati'; }
            }
        }

        if (!$member) sendError(404, 'Member not found. Check the UUID or Member ID.');

        $date = $body['date'] ?? date('Y-m-d');
        $this->markAttendance((int)$member['id'], $memberType, $date, $body['shibir_id'] ?? null, $user['id']);
    }

    public function store(array $body, array $user): void
    {
        $errors = [];
        if (empty($body['member_id']))   $errors['member_id']   = 'Member ID is required';
        if (empty($body['member_type'])) $errors['member_type'] = 'Member type is required';
        if ($errors) sendValidationError($errors);

        $date = $body['date'] ?? date('Y-m-d');
        $this->markAttendance((int)$body['member_id'], $body['member_type'], $date, $body['shibir_id'] ?? null, $user['id']);
    }

    public function today(): void
    {
        $date  = date('Y-m-d');
        $yStmt = $this->pdo->prepare("SELECT COUNT(*) FROM attendances WHERE attendance_date=? AND member_type='yuvak'");
        $yStmt->execute([$date]);
        $ytiStmt = $this->pdo->prepare("SELECT COUNT(*) FROM attendances WHERE attendance_date=? AND member_type='yuvati'");
        $ytiStmt->execute([$date]);
        sendSuccess(['date' => $date, 'yuvak' => (int)$yStmt->fetchColumn(), 'yuvati' => (int)$ytiStmt->fetchColumn()]);
    }

    private function markAttendance(int $memberId, string $type, string $date, ?int $shibirId, int $scannedBy): void
    {
        // Check duplicate
        $chk = $this->pdo->prepare("SELECT id FROM attendances WHERE attendance_date=? AND member_type=? AND member_id=?");
        $chk->execute([$date, $type, $memberId]);
        if ($chk->fetch()) {
            sendError(409, 'Attendance already marked for today');
        }

        $this->pdo->prepare("INSERT INTO attendances (attendance_date,member_type,member_id,shibir_id,scanned_by) VALUES (?,?,?,?,?)")
            ->execute([$date, $type, $memberId, $shibirId, $scannedBy]);

        sendSuccess(['marked' => true, 'date' => $date, 'type' => $type], 'Attendance marked');
    }
}
