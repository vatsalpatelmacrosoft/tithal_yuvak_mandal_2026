<?php
// backend/routes/users.php
if ($parts[0] !== 'api' || $resource !== 'users') return;
require_once __DIR__ . '/../controllers/UserController.php';
$user = requireAuth();
$ctrl = new UserController($pdo);
match (true) {
    $method==='GET'    && !$id => guard($user, 'users', 'view', fn() => $ctrl->index()),
    $method==='GET'    && $id  => guard($user, 'users', 'view', fn() => $ctrl->show($id)),
    $method==='POST'   && !$id => guard($user, 'users', 'create', fn() => $ctrl->store($body)),
    $method==='PUT'    && $id  => guard($user, 'users', 'update', fn() => $ctrl->update($id,$body)),
    $method==='DELETE' && $id  => guard($user, 'users', 'delete', fn() => $ctrl->destroy($id)),
    default => null
};
