<?php
// backend/routes/roles.php
if ($parts[0] !== 'api' || $resource !== 'roles') return;
require_once __DIR__ . '/../controllers/RoleController.php';
$user = requireAuth();
$ctrl = new RoleController($pdo);
match (true) {
    $method==='GET'    && !$id             => guard($user, 'roles', 'view', fn() => $ctrl->index()),
    $method==='GET'    && $id              => guard($user, 'roles', 'view', fn() => $ctrl->show($id)),
    $method==='POST'   && !$id             => guard($user, 'roles', 'create', fn() => $ctrl->store($body)),
    $method==='PUT'    && $id && !$sub     => guard($user, 'roles', 'update', fn() => $ctrl->update($id,$body)),
    $method==='PUT'    && $id && $sub==='permissions' => guard($user, 'roles', 'update', fn() => $ctrl->updatePermissions($id,$body)),
    $method==='DELETE' && $id              => guard($user, 'roles', 'delete', fn() => $ctrl->destroy($id)),
    default => null
};
