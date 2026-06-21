<?php
// backend/controllers/RoleController.php

class RoleController
{
    public function __construct(private PDO $pdo) {}

    public function index(): void
    {
        $stmt = $this->pdo->query("SELECT * FROM roles WHERE status='active' ORDER BY name");
        sendSuccess($stmt->fetchAll());
    }

    public function show(string $id): void
    {
        $stmt = $this->pdo->prepare("SELECT * FROM roles WHERE uuid=? AND status='active'");
        $stmt->execute([$id]);
        $role = $stmt->fetch();
        if (!$role) sendError(404, 'Role not found');

        $isSuperAdmin = ($role['code'] === 'SUPER_ADMIN');

        // Load permissions (super admin always gets 1 for everything)
        $pStmt = $this->pdo->prepare("
            SELECT m.id as menu_id, m.name as menu_name, m.slug,
                   COALESCE(p.can_view,0) can_view, COALESCE(p.can_create,0) can_create,
                   COALESCE(p.can_update,0) can_update, COALESCE(p.can_delete,0) can_delete
            FROM menus m
            LEFT JOIN permissions p ON p.menu_id=m.id AND p.role_id=?
            ORDER BY m.sort_order
        ");
        $pStmt->execute([$role['id']]);
        $permissions = $pStmt->fetchAll();

        // Super admin: ensure all permissions = 1 and upsert any missing rows
        if ($isSuperAdmin) {
            $upsert = $this->pdo->prepare("
                INSERT INTO permissions (role_id,menu_id,can_view,can_create,can_update,can_delete)
                VALUES (?,?,1,1,1,1)
                ON DUPLICATE KEY UPDATE can_view=1,can_create=1,can_update=1,can_delete=1
            ");
            foreach ($permissions as &$p) {
                $upsert->execute([$role['id'], $p['menu_id']]);
                $p['can_view'] = $p['can_create'] = $p['can_update'] = $p['can_delete'] = 1;
            }
        }

        $role['permissions'] = $permissions;
        sendSuccess($role);
    }

    public function store(array $body): void
    {
        $errors = [];
        if (empty($body['name'])) $errors['name'] = 'Name is required';
        if (empty($body['code'])) $errors['code'] = 'Code is required';
        if ($errors) sendValidationError($errors);

        $chk = $this->pdo->prepare("SELECT id FROM roles WHERE (name=? OR code=?) AND status='active'");
        $chk->execute([$body['name'], strtoupper($body['code'])]);
        if ($chk->fetch()) sendValidationError(['name' => 'Role name or code already exists']);

        $uuid = $this->uuid();
        $this->pdo->prepare("INSERT INTO roles (uuid,name,code) VALUES (?,?,?)")
            ->execute([$uuid, $body['name'], strtoupper($body['code'])]);
        $this->show($uuid);
    }

    public function update(string $id, array $body): void
    {
        $check = $this->pdo->prepare("SELECT * FROM roles WHERE uuid=? AND status='active'");
        $check->execute([$id]);
        $role = $check->fetch();
        if (!$role) sendError(404, 'Role not found');

        $this->pdo->prepare("UPDATE roles SET name=?, code=? WHERE uuid=?")
            ->execute([$body['name'], strtoupper($body['code']), $id]);
        $this->show($id);
    }

    public function updatePermissions(string $id, array $body): void
    {
        $check = $this->pdo->prepare("SELECT * FROM roles WHERE uuid=? AND status='active'");
        $check->execute([$id]);
        $role = $check->fetch();
        if (!$role) sendError(404, 'Role not found');

        // $body['permissions'] = [{menu_id, can_view, can_create, can_update, can_delete}]
        $this->pdo->prepare("DELETE FROM permissions WHERE role_id=?")->execute([$role['id']]);

        $stmt = $this->pdo->prepare("
            INSERT INTO permissions (role_id,menu_id,can_view,can_create,can_update,can_delete)
            VALUES (?,?,?,?,?,?)
        ");
        foreach ($body['permissions'] ?? [] as $p) {
            $stmt->execute([
                $role['id'], $p['menu_id'],
                (int)($p['can_view'] ?? 0), (int)($p['can_create'] ?? 0),
                (int)($p['can_update'] ?? 0), (int)($p['can_delete'] ?? 0),
            ]);
        }
        $this->show($id);
    }

    public function destroy(string $id): void
    {
        $check = $this->pdo->prepare("SELECT id FROM roles WHERE uuid=? AND status='active'");
        $check->execute([$id]);
        $role = $check->fetch();
        if (!$role) sendError(404, 'Role not found');

        // Archive users assigned to this role (they lose access)
        $this->pdo->prepare("UPDATE users SET status='archive' WHERE role_id=?")
            ->execute([$role['id']]);

        // Zero out all permissions for this role
        $this->pdo->prepare("UPDATE permissions SET can_view=0, can_create=0, can_update=0, can_delete=0 WHERE role_id=?")
            ->execute([$role['id']]);

        // Soft delete the role
        $this->pdo->prepare("UPDATE roles SET status='archive' WHERE id=?")
            ->execute([$role['id']]);

        sendSuccess([], 'Role and its users archived');
    }

    private function uuid(): string {
        return sprintf('%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
            mt_rand(0,0xffff),mt_rand(0,0xffff),mt_rand(0,0xffff),
            mt_rand(0,0x0fff)|0x4000,mt_rand(0,0x3fff)|0x8000,
            mt_rand(0,0xffff),mt_rand(0,0xffff),mt_rand(0,0xffff));
    }
}
