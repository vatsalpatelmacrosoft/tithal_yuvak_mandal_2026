<?php
// backend/routes/settings.php
if ($parts[0] !== 'api' || $resource !== 'settings') return;
require_once __DIR__ . '/../controllers/SettingsController.php';
$ctrl = new SettingsController($pdo);

$user = requireAuth();
match (true) {
    $method === 'GET'  && !$id => guard($user, 'settings', 'view',   fn() => $ctrl->show()),
    $method === 'POST' && !$id => guard($user, 'settings', 'update', fn() => $ctrl->update($body, (int)$user['id'])),
    $method === 'PUT'  && !$id => guard($user, 'settings', 'update', fn() => $ctrl->update($body, (int)$user['id'])),
    default => null
};
