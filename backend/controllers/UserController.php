<?php
// backend/controllers/UserController.php

class UserController
{
    public function __construct(private PDO $pdo) {}

    public function index(): void
    {
        $stmt = $this->pdo->query("
            SELECT u.id, u.uuid, u.mo_number, u.status, u.last_login, u.member_type,
                   COALESCE(y.first_name, yt.first_name) AS first_name,
                   COALESCE(y.last_name,  yt.last_name)  AS last_name,
                   COALESCE(y.yuvak_id,   yt.yuvati_id)  AS yuvak_id,
                   r.name AS role_name
            FROM users u
            LEFT JOIN yuvaks  y  ON y.id  = u.yuvak_id
            LEFT JOIN yuvatis yt ON yt.id = u.yuvati_id
            JOIN roles r ON r.id = u.role_id
            WHERE u.status = 'active'
            ORDER BY COALESCE(y.first_name, yt.first_name)
        ");
        sendSuccess($stmt->fetchAll());
    }

    public function show(string $id): void
    {
        $stmt = $this->pdo->prepare("
            SELECT u.uuid, u.mo_number, u.status, u.last_login, u.member_type,
                   COALESCE(y.first_name, yt.first_name) AS first_name,
                   COALESCE(y.last_name,  yt.last_name)  AS last_name,
                   COALESCE(y.yuvak_id,   yt.yuvati_id)  AS yuvak_id,
                   r.name AS role_name
            FROM users u
            LEFT JOIN yuvaks  y  ON y.id  = u.yuvak_id
            LEFT JOIN yuvatis yt ON yt.id = u.yuvati_id
            JOIN roles r ON r.id = u.role_id
            WHERE u.uuid=? AND u.status='active'
        ");
        $stmt->execute([$id]);
        $user = $stmt->fetch();
        if (!$user) sendError(404, 'User not found');
        sendSuccess($user);
    }

    public function store(array $body): void
    {
        $errors = [];
        $mType  = $body['member_type'] ?? 'yuvak';
        if (!in_array($mType, ['yuvak', 'yuvati'])) $mType = 'yuvak';

        $memberUuid = $body['member_uuid'] ?? $body['yuvak_uuid'] ?? null;
        if (empty($memberUuid))       $errors['member_uuid'] = 'Member selection is required';
        if (empty($body['role_uuid'])) $errors['role_uuid']  = 'Role is required';
        if (empty($body['password']))  $errors['password']   = 'Password is required';
        if (strlen($body['password'] ?? '') < 8) $errors['password'] = 'Password must be at least 8 characters';
        if ($errors) sendValidationError($errors);

        if ($mType === 'yuvati') {
            $mStmt = $this->pdo->prepare("SELECT id, mo_number FROM yuvatis WHERE uuid=? AND status='active'");
            $mStmt->execute([$memberUuid]);
            $member = $mStmt->fetch();
            if (!$member) sendError(422, 'Yuvati not found or inactive');

            $chk = $this->pdo->prepare("SELECT id FROM users WHERE yuvati_id=? AND status='active'");
            $chk->execute([$member['id']]);
            if ($chk->fetch()) sendValidationError(['member_uuid' => 'User already exists for this Yuvati']);

            $uuid = $this->uuid();
            $hash = password_hash($body['password'], PASSWORD_BCRYPT, ['cost' => 12]);
            $this->pdo->prepare("INSERT INTO users (uuid,yuvati_id,member_type,role_id,mo_number,password) VALUES (?,?,'yuvati',?,?,?)")
                ->execute([$uuid, $member['id'], $this->getRoleId($body['role_uuid']), $member['mo_number'], $hash]);
        } else {
            $mStmt = $this->pdo->prepare("SELECT id, mo_number FROM yuvaks WHERE uuid=? AND status='active'");
            $mStmt->execute([$memberUuid]);
            $member = $mStmt->fetch();
            if (!$member) sendError(422, 'Yuvak not found or inactive');

            $chk = $this->pdo->prepare("SELECT id FROM users WHERE yuvak_id=? AND status='active'");
            $chk->execute([$member['id']]);
            if ($chk->fetch()) sendValidationError(['member_uuid' => 'User already exists for this Yuvak']);

            $uuid = $this->uuid();
            $hash = password_hash($body['password'], PASSWORD_BCRYPT, ['cost' => 12]);
            $this->pdo->prepare("INSERT INTO users (uuid,yuvak_id,member_type,role_id,mo_number,password) VALUES (?,?,'yuvak',?,?,?)")
                ->execute([$uuid, $member['id'], $this->getRoleId($body['role_uuid']), $member['mo_number'], $hash]);
        }

        $this->show($uuid);
    }

    private function getRoleId(string $roleUuid): int {
        $r = $this->pdo->prepare("SELECT id FROM roles WHERE uuid=? AND status='active'");
        $r->execute([$roleUuid]);
        $role = $r->fetch();
        if (!$role) sendError(422, 'Role not found');
        return (int)$role['id'];
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
