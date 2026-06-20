<?php
// backend/routes/dashboard.php
if ($parts[0] !== 'api' || $resource !== 'dashboard') return;
$user = requireAuth();
requirePermission($user, 'dashboard', 'view');

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
