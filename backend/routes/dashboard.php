<?php
// backend/routes/dashboard.php
if ($parts[0] !== 'api' || $resource !== 'dashboard') return;
$user = requireAuth();
requirePermission($user, 'dashboard', 'view');

if ($id === 'birthdays') {
    // Preset ranges expressed as day offsets relative to today (inclusive).
    $ranges = [
        'today'  => [0, 0],
        'last7'  => [-6, 0],
        'last10' => [-9, 0],
        'last30' => [-29, 0],
        'next7'  => [0, 6],
    ];
    $range = $_GET['range'] ?? 'last7';
    if (!isset($ranges[$range])) $range = 'last7';
    [$fromOffset, $toOffset] = $ranges[$range];

    // Walk real calendar dates (not raw month/day math) so the window
    // wraps correctly across a year boundary (e.g. Dec 29 .. Jan 4).
    $today = new DateTime('today');
    $offsetByMmdd = [];
    for ($i = $fromOffset; $i <= $toOffset; $i++) {
        $d = (clone $today)->modify(sprintf('%+d days', $i));
        $offsetByMmdd[$d->format('m-d')] = $i;
    }
    $mmdds = array_keys($offsetByMmdd);
    $placeholders = implode(',', array_fill(0, count($mmdds), '?'));

    $fetchBirthdays = function (string $table, string $idField) use ($pdo, $placeholders, $mmdds, $offsetByMmdd, $today) {
        $stmt = $pdo->prepare("
            SELECT y.uuid, y.$idField AS member_id,
                   TRIM(CONCAT(y.first_name,' ',COALESCE(y.middle_name,''),' ',y.last_name)) AS full_name,
                   y.birth_date, x.name AS xetra_name, m.name AS mandal_name
            FROM $table y
            JOIN xetras  x ON x.id = y.xetra_id
            JOIN mandals m ON m.id = y.mandal_id
            WHERE y.status = 'active' AND y.birth_date IS NOT NULL
              AND DATE_FORMAT(y.birth_date, '%m-%d') IN ($placeholders)
        ");
        $stmt->execute($mmdds);
        $rows = $stmt->fetchAll();
        foreach ($rows as &$r) {
            $mmdd   = date('m-d', strtotime($r['birth_date']));
            $offset = $offsetByMmdd[$mmdd];
            $r['days_offset'] = $offset;
            $r['occurs_on']   = (clone $today)->modify(sprintf('%+d days', $offset))->format('Y-m-d');
            $r['full_name']   = trim(preg_replace('/\s+/', ' ', $r['full_name']));
        }
        unset($r);
        usort($rows, fn($a, $b) => $a['days_offset'] <=> $b['days_offset']);
        return array_values($rows);
    };

    $data = ['range' => $range];
    if (hasPermission($user, 'yuvak', 'view'))  $data['yuvak']  = $fetchBirthdays('yuvaks', 'yuvak_id');
    if (hasPermission($user, 'yuvati', 'view')) $data['yuvati'] = $fetchBirthdays('yuvatis', 'yuvati_id');

    sendSuccess($data);
}

$yuvakCount  = $pdo->query("SELECT COUNT(*) FROM yuvaks  WHERE status='active'")->fetchColumn();
$yuvatiCount = $pdo->query("SELECT COUNT(*) FROM yuvatis WHERE status='active'")->fetchColumn();
$today       = date('Y-m-d');
$todayYuvak  = $pdo->prepare("SELECT COUNT(*) FROM attendances WHERE attendance_date=? AND member_type='yuvak'");
$todayYuvak->execute([$today]);
$todayYuvati = $pdo->prepare("SELECT COUNT(*) FROM attendances WHERE attendance_date=? AND member_type='yuvati'");
$todayYuvati->execute([$today]);

sendSuccess([
    'yuvak_total'          => (int)$yuvakCount,
    'yuvati_total'         => (int)$yuvatiCount,
    'today_attendance'     => [
        'yuvak'  => (int)$todayYuvak->fetchColumn(),
        'yuvati' => (int)$todayYuvati->fetchColumn(),
        'date'   => $today,
    ],
]);
