<?php
// backend/routes/xetra.php
if ($parts[0] !== 'api' || $resource !== 'xetra') return;
require_once __DIR__ . '/../controllers/CrudController.php';
$user = requireAuth();
$ctrl = new CrudController($pdo, 'xetras', 'xetra', ['name','code']);
match (true) {
    $method==='GET'    && !$id => guard($user, 'xetra', 'view', fn() => $ctrl->index()),
    $method==='GET'    && $id  => guard($user, 'xetra', 'view', fn() => $ctrl->show($id)),
    $method==='POST'   && !$id => guard($user, 'xetra', 'create', fn() => $ctrl->store($body)),
    $method==='PUT'    && $id  => guard($user, 'xetra', 'update', fn() => $ctrl->update($id,$body)),
    $method==='DELETE' && $id  => guard($user, 'xetra', 'delete', fn() => $ctrl->destroy($id)),
    default => null
};
