<?php
// backend/routes/messages.php
if ($parts[0] !== 'api' || $resource !== 'messages') return;
require_once __DIR__ . '/../controllers/MessageController.php';
$user = requireAuth();
$ctrl = new MessageController($pdo);
match (true) {
    $method==='GET'  && !$id                                       => guard($user, 'messages', 'view',   fn() => $ctrl->index()),
    $method==='GET'  && $id                                        => guard($user, 'messages', 'view',   fn() => $ctrl->show($id)),
    $method==='POST' && $id==='preview'                            => guard($user, 'messages', 'create', fn() => $ctrl->previewRecipients($body)),
    $method==='POST' && !$id                                       => guard($user, 'messages', 'create', fn() => $ctrl->storeCampaign($body, (int)$user['id'])),
    $method==='PUT'  && $id && $sub==='recipients' && $parts[4]    => guard($user, 'messages', 'create', fn() => $ctrl->markRecipient($id, $parts[4], $body)),
    default => null
};
