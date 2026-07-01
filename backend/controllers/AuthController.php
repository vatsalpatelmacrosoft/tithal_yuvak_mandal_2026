<?php
// backend/controllers/AuthController.php

class AuthController
{
    public function __construct(private PDO $pdo)
    {
    }

    public function login(array $body): void
    {
        $errors = [];
        if (empty($body['mo_number']))
            $errors['mo_number'] = 'Mobile number is required';
        if (empty($body['password']))
            $errors['password'] = 'Password is required';
        if ($errors)
            sendValidationError($errors);

        $stmt = $this->pdo->prepare("
            SELECT u.*,
                   COALESCE(y.first_name,  yt.first_name)  AS first_name,
                   COALESCE(y.last_name,   yt.last_name)   AS last_name,
                   r.name AS role_name, r.code AS role_code
            FROM users u
            LEFT JOIN yuvaks  y  ON y.id  = u.yuvak_id
            LEFT JOIN yuvatis yt ON yt.id = u.yuvati_id
            JOIN roles r ON r.id = u.role_id
            WHERE u.mo_number = ? AND u.status = 'active'
        ");
        $stmt->execute([trim($body['mo_number'])]);
        $user = $stmt->fetch();

        if (!$user || !password_verify($body['password'], $user['password'])) {
            sendError(401, 'Invalid mobile number or password');
        }

        // Load permissions
        $pStmt = $this->pdo->prepare("
            SELECT m.slug, p.can_view, p.can_create, p.can_update, p.can_delete
            FROM permissions p JOIN menus m ON m.id = p.menu_id
            WHERE p.role_id = ?
        ");
        $pStmt->execute([$user['role_id']]);
        $permissions = $pStmt->fetchAll();

        // Update last login
        $this->pdo->prepare("UPDATE users SET last_login = NOW() WHERE id = ?")->execute([$user['id']]);

        $token = jwtEncode([
            'user_id' => $user['id'],
            'role_code' => $user['role_code'],
        ]);

        sendSuccess([
            'token' => $token,
            'user' => [
                'id' => $user['id'],
                'name' => $user['first_name'] . ' ' . $user['last_name'],
                'mo_number' => $user['mo_number'],
                'role' => $user['role_name'],
                'role_code' => $user['role_code'],
                'permissions' => $permissions,
            ],
        ], 'Login successful');
    }

    public function logout(): void
    {
        // JWT is stateless; client discards token
        sendSuccess([], 'Logged out');
    }

    public function me(): void
    {
        $user = requireAuth();
        sendSuccess($user);
    }

    public function forgotPassword(array $body): void
    {
        if (empty($body['mo_number']))
            sendValidationError(['mo_number' => 'Mobile number is required']);

        $stmt = $this->pdo->prepare("SELECT id FROM users WHERE mo_number = ? AND status = 'active'");
        $stmt->execute([$body['mo_number']]);
        $user = $stmt->fetch();

        // Always return success to prevent enumeration
        if ($user) {
            $token = bin2hex(random_bytes(32));
            $this->pdo->prepare("INSERT INTO password_resets (mo_number, token, expires_at) VALUES (?, ?, DATE_ADD(NOW(), INTERVAL 30 MINUTE))")
                ->execute([$body['mo_number'], $token]);
            // TODO: Send SMS/OTP with $token
        }

        sendSuccess([], 'If account exists, reset instructions will be sent');
    }

    public function resetPassword(array $body): void
    {
        $errors = [];
        if (empty($body['token']))
            $errors['token'] = 'Token is required';
        if (empty($body['new_password']))
            $errors['password'] = 'New password is required';
        if (strlen($body['new_password'] ?? '') < 8)
            $errors['password'] = 'Password must be at least 8 characters';
        if ($errors)
            sendValidationError($errors);

        $stmt = $this->pdo->prepare("SELECT * FROM password_resets WHERE token = ? AND used = 0 AND expires_at > NOW()");
        $stmt->execute([$body['token']]);
        $reset = $stmt->fetch();

        if (!$reset)
            sendError(400, 'Invalid or expired reset token');

        $hash = password_hash($body['new_password'], PASSWORD_BCRYPT, ['cost' => 12]);
        $this->pdo->prepare("UPDATE users SET password = ? WHERE mo_number = ?")->execute([$hash, $reset['mo_number']]);
        $this->pdo->prepare("UPDATE password_resets SET used = 1 WHERE token = ?")->execute([$body['token']]);

        sendSuccess([], 'Password reset successfully');
    }
}
