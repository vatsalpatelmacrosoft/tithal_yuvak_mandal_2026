<?php
// backend/routes/shibir.php
if ($parts[0] !== 'api' || $resource !== 'shibir') return;
require_once __DIR__ . '/../controllers/ShibirController.php';
$user = requireAuth();
$ctrl = new ShibirController($pdo);
match (true) {
    $method==='GET'    && !$id => guard($user, 'shibir', 'view', fn() => $ctrl->index()),
    $method==='GET'    && $id  => guard($user, 'shibir', 'view', fn() => $ctrl->show($id)),
    $method==='POST'   && !$id => guard($user, 'shibir', 'create', fn() => $ctrl->store($body)),
    $method==='PUT'    && $id  => guard($user, 'shibir', 'update', fn() => $ctrl->update($id,$body)),
    $method==='DELETE' && $id  => guard($user, 'shibir', 'delete', fn() => $ctrl->destroy($id)),
    default => null
};
