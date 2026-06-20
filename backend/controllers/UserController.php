<?php
// backend/controllers/UserController.php

class UserController
{
    public function __construct(private PDO $pdo) {}

    public function index(): void
    {
        $stmt = $this->pdo->query("
            SELECT u.id, u.uuid, u.mo_number, u.status, u.last_login,
                   y.first_name, y.last_name, y.yuvak_id,
                   r.name as role_name
            FROM users u
            JOIN yuvaks y ON y.id = u.yuvak_id
            JOIN roles  r ON r.id = u.role_id
            WHERE u.status = 'active'
            ORDER BY y.first_name
        ");
        sendSuccess($stmt->fetchAll());
    }

    public function show(string $id): void
    {
        $stmt = $this->pdo->prepare("
            SELECT u.*, y.first_name, y.last_name, y.yuvak_id, r.name as role_name
            FROM users u JOIN yuvaks y ON y.id=u.yuvak_id JOIN roles r ON r.id=u.role_id
            WHERE u.uuid=? AND u.status='active'
        ");
        $stmt->execute([$id]);
        $user = $stmt->fetch();
        if (!$user) sendError(404, 'User not found');
        unset($user['password']);
        sendSuccess($user);
    }

    public function store(array $body): void
    {
        $errors = [];
        if (empty($body['yuvak_uuid'])) $errors['yuvak_uuid'] = 'Yuvak is required';
        if (empty($body['role_uuid']))  $errors['role_uuid']  = 'Role is required';
        if (empty($body['password']))   $errors['password']   = 'Password is required';
        if (strlen($body['password'] ?? '') < 8) $errors['password'] = 'Password must be at least 8 characters';
        if ($errors) sendValidationError($errors);

        // Get yuvak
        $yStmt = $this->pdo->prepare("SELECT id, mo_number FROM yuvaks WHERE uuid=? AND status='active'");
        $yStmt->execute([$body['yuvak_uuid']]);
        $yuvak = $yStmt->fetch();
        if (!$yuvak) sendError(422, 'Yuvak not found or inactive');

        // Get role
        $rStmt = $this->pdo->prepare("SELECT id FROM roles WHERE uuid=? AND status='active'");
        $rStmt->execute([$body['role_uuid']]);
        $role = $rStmt->fetch();
        if (!$role) sendError(422, 'Role not found');

        // Check if user already exists for this yuvak
        $chk = $this->pdo->prepare("SELECT id FROM users WHERE yuvak_id=? AND status='active'");
        $chk->execute([$yuvak['id']]);
        if ($chk->fetch()) sendValidationError(['yuvak_uuid' => 'User already exists for this Yuvak']);

        $uuid = $this->uuid();
        $hash = password_hash($body['password'], PASSWORD_BCRYPT, ['cost' => 12]);

        $this->pdo->prepare("INSERT INTO users (uuid,yuvak_id,role_id,mo_number,password) VALUES (?,?,?,?,?)")
            ->execute([$uuid, $yuvak['id'], $role['id'], $yuvak['mo_number'], $hash]);

        $this->show($uuid);
    }

    public function update(string $id, array $body): void
    {
        $check = $this->pdo->prepare("SELECT * FROM users WHERE uuid=? AND status='active'");
        $check->execute([$id]);
        $user = $check->fetch();
        if (!$user) sendError(404, 'User not found');

        if (!empty($body['role_uuid'])) {
            $rStmt = $this->pdo->prepare("SELECT id FROM roles WHERE uuid=? AND status='active'");
            $rStmt->execute([$body['role_uuid']]);
            $role = $rStmt->fetch();
            if (!$role) sendError(422, 'Role not found');
            $this->pdo->prepare("UPDATE users SET role_id=? WHERE uuid=?")->execute([$role['id'], $id]);
        }

        if (!empty($body['password'])) {
            if (strlen($body['password']) < 8) sendValidationError(['password' => 'Password must be 8+ characters']);
            $hash = password_hash($body['password'], PASSWORD_BCRYPT, ['cost' => 12]);
            $this->pdo->prepare("UPDATE users SET password=? WHERE uuid=?")->execute([$hash, $id]);
        }

        $this->show($id);
    }

    public function destroy(string $id): void
    {
        $this->pdo->prepare("UPDATE users SET status='archive' WHERE uuid=?")->execute([$id]);
        sendSuccess([], 'User archived');
    }

    private function uuid(): string {
        return sprintf('%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
            mt_rand(0,0xffff),mt_rand(0,0xffff),mt_rand(0,0xffff),
            mt_rand(0,0x0fff)|0x4000,mt_rand(0,0x3fff)|0x8000,
            mt_rand(0,0xffff),mt_rand(0,0xffff),mt_rand(0,0xffff));
    }
}
