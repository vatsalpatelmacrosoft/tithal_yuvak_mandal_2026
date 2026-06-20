<?php
// backend/middleware/auth.php

function requireAuth(): array
{
    global $pdo;
    $authHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
    if (!preg_match('/^Bearer\s+(.+)$/i', $authHeader, $m)) {
        sendError(401, 'Unauthorized: No token provided');
    }
    $payload = jwtDecode($m[1]);
    if (!$payload) {
        sendError(401, 'Unauthorized: Invalid or expired token');
    }

    // Verify user still active
    $stmt = $pdo->prepare("SELECT u.*, r.code as role_code FROM users u JOIN roles r ON r.id = u.role_id WHERE u.id = ? AND u.status = 'active'");
    $stmt->execute([$payload['user_id']]);
    $user = $stmt->fetch();
    if (!$user) {
        sendError(401, 'Unauthorized: User inactive');
    }
    return $user;
}

function guard(array $user, string $menu, string $action, callable $fn): mixed
{
    requirePermission($user, $menu, $action);
    return $fn();
}

function requirePermission(array $user, string $menuSlug, string $action): void
{
    global $pdo;

    // Super admin bypasses permission check
    if ($user['role_code'] === 'SUPER_ADMIN') return;

    $stmt = $pdo->prepare("
        SELECT p.can_view, p.can_create, p.can_update, p.can_delete
        FROM permissions p
        JOIN menus m ON m.id = p.menu_id
        WHERE p.role_id = ? AND m.slug = ?
    ");
    $stmt->execute([$user['role_id'], $menuSlug]);
    $perm = $stmt->fetch();

    if (!$perm) sendError(403, 'Forbidden: No access to this module');

    $map = ['view' => 'can_view', 'create' => 'can_create', 'update' => 'can_update', 'delete' => 'can_delete'];
    $col = $map[$action] ?? null;
    if (!$col || !$perm[$col]) {
        sendError(403, "Forbidden: Cannot $action in $menuSlug");
    }
}
