<?php
// backend/routes/yuvak.php
if ($parts[0] !== 'api' || $resource !== 'yuvak') return;

require_once __DIR__ . '/../controllers/YuvakController.php';
$ctrl = new YuvakController($pdo);
$user = requireAuth();

match (true) {
    $method === 'GET'    && !$id                 => guard($user, 'yuvak', 'view',   fn() => $ctrl->index()),
    $method === 'GET'    && $id && $sub === 'qr' => guard($user, 'yuvak', 'view',   fn() => $ctrl->qrCode($id)),
    $method === 'GET'    && $id                  => guard($user, 'yuvak', 'view',   fn() => $ctrl->show($id)),
    $method === 'POST'   && !$id                 => guard($user, 'yuvak', 'create', fn() => $ctrl->store($body)),
    $method === 'PUT'    && $id                  => guard($user, 'yuvak', 'update', fn() => $ctrl->update($id, $body)),
    $method === 'DELETE' && $id                  => guard($user, 'yuvak', 'delete', fn() => $ctrl->destroy($id)),
    $method === 'POST'   && $id && $sub === 'notify' => guard($user, 'yuvak', 'view', fn() => $ctrl->sendNotification($id)),
    default => null
};
