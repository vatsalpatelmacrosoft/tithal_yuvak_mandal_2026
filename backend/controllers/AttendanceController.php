<?php
// backend/controllers/AttendanceController.php

class AttendanceController
{
    public function __construct(private PDO $pdo) {}

    /** List attendance with date-range filter */
    public function index(): void
    {
        $fromDate   = $_GET['from_date']   ?? date('Y-m-d');
        $toDate     = $_GET['to_date']     ?? $fromDate;
        $memberType = $_GET['member_type'] ?? null;

        $where  = "WHERE a.attendance_date BETWEEN ? AND ?";
        $params = [$fromDate, $toDate];

        if ($memberType) { $where .= ' AND a.member_type = ?'; $params[] = $memberType; }

        $stmt = $this->pdo->prepare("
            SELECT a.*,
                CASE WHEN a.member_type='yuvak'
                    THEN CONCAT(y.first_name,' ',y.last_name)
                    ELSE CONCAT(yt.first_name,' ',yt.last_name)
                END AS member_name,
                CASE WHEN a.member_type='yuvak' THEN y.yuvak_id ELSE yt.yuvati_id END AS member_code
            FROM attendances a
            LEFT JOIN yuvaks  y  ON y.id  = a.member_id AND a.member_type = 'yuvak'
            LEFT JOIN yuvatis yt ON yt.id = a.member_id AND a.member_type = 'yuvati'
            $where ORDER BY a.attendance_date DESC, a.created_at DESC
        ");
        $stmt->execute($params);
        $rows = $stmt->fetchAll();

        $yuvakCount  = count(array_filter($rows, fn($r) => $r['member_type'] === 'yuvak'));
        $yuvatiCount = count(array_filter($rows, fn($r) => $r['member_type'] === 'yuvati'));

        sendSuccess([
            'data'         => $rows,
            'yuvak_count'  => $yuvakCount,
            'yuvati_count' => $yuvatiCount,
            'total'        => count($rows),
        ]);
    }

    /** Date-wise attendance summary for a range */
    public function dateWise(): void
    {
        $fromDate = $_GET['from_date'] ?? date('Y-m-d', strtotime('-30 days'));
        $toDate   = $_GET['to_date']   ?? date('Y-m-d');

        $stmt = $this->pdo->prepare("
            SELECT
                attendance_date,
                SUM(member_type = 'yuvak')  AS yuvak_count,
                SUM(member_type = 'yuvati') AS yuvati_count,
                COUNT(*)                    AS total
            FROM attendances
            WHERE attendance_date BETWEEN ? AND ?
            GROUP BY attendance_date
            ORDER BY attendance_date DESC
        ");
        $stmt->execute([$fromDate, $toDate]);
        sendSuccess($stmt->fetchAll());
    }

    /** Name-wise attendance count in date range */
    public function nameWise(): void
    {
        $fromDate   = $_GET['from_date']   ?? date('Y-m-d');
        $toDate     = $_GET['to_date']     ?? $fromDate;
        $memberType = $_GET['member_type'] ?? null;

        $where  = "WHERE a.attendance_date BETWEEN ? AND ?";
        $params = [$fromDate, $toDate];
        if ($memberType) { $where .= ' AND a.member_type = ?'; $params[] = $memberType; }

        $stmt = $this->pdo->prepare("
            SELECT
                a.member_type,
                a.member_id,
                CASE WHEN a.member_type='yuvak' THEN y.yuvak_id ELSE yt.yuvati_id END AS member_code,
                CASE WHEN a.member_type='yuvak'
                    THEN CONCAT(y.first_name,' ',y.last_name)
                    ELSE CONCAT(yt.first_name,' ',yt.last_name)
                END AS member_name,
                COUNT(*) AS total_present
            FROM attendances a
            LEFT JOIN yuvaks  y  ON y.id  = a.member_id AND a.member_type = 'yuvak'
            LEFT JOIN yuvatis yt ON yt.id = a.member_id AND a.member_type = 'yuvati'
            $where
            GROUP BY a.member_type, a.member_id
            ORDER BY total_present DESC, member_name ASC
        ");
        $stmt->execute($params);
        sendSuccess($stmt->fetchAll());
    }

    /** Export name-wise CSV */
    public function exportNameWise(): void
    {
        $fromDate   = $_GET['from_date']   ?? date('Y-m-d');
        $toDate     = $_GET['to_date']     ?? $fromDate;
        $memberType = $_GET['member_type'] ?? null;

        $where  = "WHERE a.attendance_date BETWEEN ? AND ?";
        $params = [$fromDate, $toDate];
        if ($memberType) { $where .= ' AND a.member_type = ?'; $params[] = $memberType; }

        $stmt = $this->pdo->prepare("
            SELECT
                a.member_type,
                CASE WHEN a.member_type='yuvak' THEN y.yuvak_id ELSE yt.yuvati_id END AS member_code,
                CASE WHEN a.member_type='yuvak'
                    THEN CONCAT(y.first_name,' ',y.last_name)
                    ELSE CONCAT(yt.first_name,' ',yt.last_name)
                END AS member_name,
                COUNT(*) AS total_present
            FROM attendances a
            LEFT JOIN yuvaks  y  ON y.id  = a.member_id AND a.member_type = 'yuvak'
            LEFT JOIN yuvatis yt ON yt.id = a.member_id AND a.member_type = 'yuvati'
            $where
            GROUP BY a.member_type, a.member_id
            ORDER BY total_present DESC, member_name ASC
        ");
        $stmt->execute($params);
        $rows = $stmt->fetchAll();

        header('Content-Type: text/csv; charset=UTF-8');
        header('Content-Disposition: attachment; filename="name-wise-attendance-' . $fromDate . '-to-' . $toDate . '.csv"');
        header('Cache-Control: no-store, no-cache');
        header('Pragma: no-cache');
        $out = fopen('php://output', 'w');
        fputcsv($out, ['Member Type', 'Member Code', 'Member Name', 'Total Present'], ',', '"', '\\');
        foreach ($rows as $r) {
            fputcsv($out, [ucfirst($r['member_type']), $r['member_code'], $r['member_name'], $r['total_present']], ',', '"', '\\');
        }
        fclose($out);
        exit;
    }

    /** Export attendance CSV */
    public function export(): void
    {
        $fromDate   = $_GET['from_date']   ?? date('Y-m-d');
        $toDate     = $_GET['to_date']     ?? $fromDate;
        $memberType = $_GET['member_type'] ?? null;

        $where  = "WHERE a.attendance_date BETWEEN ? AND ?";
        $params = [$fromDate, $toDate];
        if ($memberType) { $where .= ' AND a.member_type = ?'; $params[] = $memberType; }

        $stmt = $this->pdo->prepare("
            SELECT
                a.attendance_date,
                a.member_type,
                CASE WHEN a.member_type='yuvak' THEN y.yuvak_id ELSE yt.yuvati_id END AS member_code,
                CASE WHEN a.member_type='yuvak'
                    THEN CONCAT(y.first_name,' ',y.last_name)
                    ELSE CONCAT(yt.first_name,' ',yt.last_name)
                END AS member_name
            FROM attendances a
            LEFT JOIN yuvaks  y  ON y.id  = a.member_id AND a.member_type = 'yuvak'
            LEFT JOIN yuvatis yt ON yt.id = a.member_id AND a.member_type = 'yuvati'
            $where ORDER BY a.attendance_date DESC, a.created_at DESC
        ");
        $stmt->execute($params);
        $rows = $stmt->fetchAll();

        header('Content-Type: text/csv; charset=UTF-8');
        header('Content-Disposition: attachment; filename="attendance-' . $fromDate . '-to-' . $toDate . '.csv"');
        header('Cache-Control: no-store, no-cache');
        header('Pragma: no-cache');
        $out = fopen('php://output', 'w');
        fputcsv($out, ['Date', 'Member Type', 'Member Code', 'Member Name'], ',', '"', '\\');
        foreach ($rows as $r) {
            fputcsv($out, [$r['attendance_date'], ucfirst($r['member_type']), $r['member_code'], $r['member_name']], ',', '"', '\\');
        }
        fclose($out);
        exit;
    }

    /** Scan QR or manual entry — always returns HTTP 200, type field indicates result */
    public function scan(array $body, array $user): void
    {
        $identifier = trim($body['uuid'] ?? $body['qrCode'] ?? $body['identifier'] ?? '');
        if (empty($identifier)) {
            $this->scanResult(false, 'invalid', 'Invalid QR Code');
        }

        $isUuid = (bool) preg_match('/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i', $identifier);
        $member = null; $memberType = null;

        if ($isUuid) {
            $stmt = $this->pdo->prepare("SELECT id, yuvak_id AS member_code, CONCAT(first_name,' ',last_name) AS member_name FROM yuvaks WHERE uuid=? AND status='active'");
            $stmt->execute([$identifier]);
            if ($row = $stmt->fetch()) { $member = $row; $memberType = 'yuvak'; }

            if (!$member) {
                $stmt = $this->pdo->prepare("SELECT id, yuvati_id AS member_code, CONCAT(first_name,' ',last_name) AS member_name FROM yuvatis WHERE uuid=? AND status='active'");
                $stmt->execute([$identifier]);
                if ($row = $stmt->fetch()) { $member = $row; $memberType = 'yuvati'; }
            }
        } else {
            $stmt = $this->pdo->prepare("SELECT id, yuvak_id AS member_code, CONCAT(first_name,' ',last_name) AS member_name FROM yuvaks WHERE yuvak_id=? AND status='active'");
            $stmt->execute([$identifier]);
            if ($row = $stmt->fetch()) { $member = $row; $memberType = 'yuvak'; }

            if (!$member) {
                $stmt = $this->pdo->prepare("SELECT id, yuvati_id AS member_code, CONCAT(first_name,' ',last_name) AS member_name FROM yuvatis WHERE yuvati_id=? AND status='active'");
                $stmt->execute([$identifier]);
                if ($row = $stmt->fetch()) { $member = $row; $memberType = 'yuvati'; }
            }
        }

        if (!$member) {
            $this->scanResult(false, 'invalid', 'Invalid QR Code');
        }

        $date = $body['date'] ?? date('Y-m-d');

        // Check duplicate
        $chk = $this->pdo->prepare("SELECT created_at FROM attendances WHERE attendance_date=? AND member_type=? AND member_id=?");
        $chk->execute([$date, $memberType, (int)$member['id']]);
        if ($existing = $chk->fetch()) {
            $this->scanResult(false, 'duplicate', 'Attendance Already Marked', [
                'name'            => $member['member_name'],
                'member_code'     => $member['member_code'],
                'member_type'     => $memberType,
                'attendance_time' => date('h:i A', strtotime($existing['created_at'])),
            ]);
        }

        // Mark attendance
        $this->pdo->prepare("INSERT INTO attendances (attendance_date,member_type,member_id,shibir_id,scanned_by) VALUES (?,?,?,?,?)")
            ->execute([$date, $memberType, (int)$member['id'], $body['shibir_id'] ?? null, $user['id']]);

        $this->scanResult(true, 'success', 'Attendance Marked Successfully', [
            'name'            => $member['member_name'],
            'member_code'     => $member['member_code'],
            'member_type'     => $memberType,
            'attendance_time' => date('h:i A'),
        ]);
    }

    private function scanResult(bool $success, string $type, string $message, array $data = []): never
    {
        http_response_code(200);
        echo json_encode(['success' => $success, 'type' => $type, 'message' => $message, 'data' => $data]);
        exit;
    }

    public function store(array $body, array $user): void
    {
        $errors = [];
        if (empty($body['member_id']))   $errors['member_id']   = 'Member ID is required';
        if (empty($body['member_type'])) $errors['member_type'] = 'Member type is required';
        if ($errors) sendValidationError($errors);

        $date = $body['date'] ?? date('Y-m-d');
        $type = $body['member_type'];
        $mid  = (int)$body['member_id'];

        $chk = $this->pdo->prepare("SELECT id FROM attendances WHERE attendance_date=? AND member_type=? AND member_id=?");
        $chk->execute([$date, $type, $mid]);
        if ($chk->fetch()) sendError(409, 'Attendance already marked for today');

        $this->pdo->prepare("INSERT INTO attendances (attendance_date,member_type,member_id,shibir_id,scanned_by) VALUES (?,?,?,?,?)")
            ->execute([$date, $type, $mid, $body['shibir_id'] ?? null, $user['id']]);

        sendSuccess(['marked' => true, 'date' => $date]);
    }

    public function today(): void
    {
        $date = date('Y-m-d');
        $stmt = $this->pdo->prepare("SELECT member_type, COUNT(*) as cnt FROM attendances WHERE attendance_date=? GROUP BY member_type");
        $stmt->execute([$date]);
        $counts = ['yuvak' => 0, 'yuvati' => 0];
        foreach ($stmt->fetchAll() as $r) $counts[$r['member_type']] = (int)$r['cnt'];
        sendSuccess(['date' => $date, 'yuvak' => $counts['yuvak'], 'yuvati' => $counts['yuvati'], 'total' => array_sum($counts)]);
    }
}
