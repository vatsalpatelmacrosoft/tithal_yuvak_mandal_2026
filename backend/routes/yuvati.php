<?php
// backend/routes/yuvati.php
if ($parts[0] !== 'api' || $resource !== 'yuvati') return;

require_once __DIR__ . '/../controllers/YuvatiController.php';
$ctrl = new YuvatiController($pdo);
$user = requireAuth();

match (true) {
    $method === 'GET'  && !$id                    => guard($user, 'yuvati', 'view', fn() => $ctrl->index()),
    $method === 'GET'  && $id && $sub === 'qr'    => guard($user, 'yuvati', 'view', fn() => $ctrl->qrCode($id)),
    $method === 'GET'  && $id                     => guard($user, 'yuvati', 'view', fn() => $ctrl->show($id)),
    $method === 'POST' && !$id                    => guard($user, 'yuvati', 'create', fn() => $ctrl->store($body)),
    $method === 'PUT'  && $id                     => guard($user, 'yuvati', 'update', fn() => $ctrl->update($id,$body)),
    $method === 'DELETE' && $id                   => guard($user, 'yuvati', 'delete', fn() => $ctrl->destroy($id)),
    $method === 'POST'   && $id && $sub === 'notify' => guard($user, 'yuvati', 'view', fn() => $ctrl->sendNotification($id)),
    default => null
};
