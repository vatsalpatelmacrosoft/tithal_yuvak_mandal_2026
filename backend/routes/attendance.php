<?php
// backend/routes/attendance.php
if ($parts[0] !== 'api' || $resource !== 'attendance') return;
require_once __DIR__ . '/../controllers/AttendanceController.php';
$user = requireAuth();
$ctrl = new AttendanceController($pdo);
match (true) {
    $method==='GET'  && !$id                => guard($user, 'attendance', 'view',   fn() => $ctrl->index()),
    $method==='POST' && $id==='scan'        => guard($user, 'attendance', 'create', fn() => $ctrl->scan($body, $user)),
    $method==='POST' && !$id                => guard($user, 'attendance', 'create', fn() => $ctrl->store($body, $user)),
    $method==='GET'  && $id==='today'       => guard($user, 'attendance', 'view',   fn() => $ctrl->today()),
    $method==='GET'  && $id==='date-wise'        => guard($user, 'attendance', 'view', fn() => $ctrl->dateWise()),
    $method==='GET'  && $id==='name-wise'        => guard($user, 'attendance', 'view', fn() => $ctrl->nameWise()),
    $method==='GET'  && $id==='export'           => guard($user, 'attendance', 'view', fn() => $ctrl->export()),
    $method==='GET'  && $id==='export-name-wise' => guard($user, 'attendance', 'view', fn() => $ctrl->exportNameWise()),
    default => null
};
