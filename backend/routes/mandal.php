<?php
// backend/routes/mandal.php
if ($parts[0] !== 'api' || $resource !== 'mandal') return;
require_once __DIR__ . '/../controllers/MandalController.php';
$user = requireAuth();
$ctrl = new MandalController($pdo);
match (true) {
    $method==='GET'    && !$id => guard($user, 'mandal', 'view',   fn() => $ctrl->index()),
    $method==='GET'    && $id  => guard($user, 'mandal', 'view',   fn() => $ctrl->show($id)),
    $method==='POST'   && !$id => guard($user, 'mandal', 'create', fn() => $ctrl->store($body)),
    $method==='PUT'    && $id  => guard($user, 'mandal', 'update', fn() => $ctrl->update($id, $body)),
    $method==='DELETE' && $id  => guard($user, 'mandal', 'delete', fn() => $ctrl->destroy($id)),
    default => null
};
