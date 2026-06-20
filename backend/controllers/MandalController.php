<?php
// backend/controllers/MandalController.php

class MandalController
{
    public function __construct(private PDO $pdo) {}

    public function index(): void
    {
        $where  = "WHERE m.status = 'active'";
        $params = [];

        if (!empty($_GET['xetra_id'])) {
            $where .= ' AND m.xetra_id = ?';
            $params[] = $_GET['xetra_id'];
        }
        if (!empty($_GET['search'])) {
            $s = '%' . $_GET['search'] . '%';
            $where .= ' AND (m.name LIKE ? OR m.code LIKE ?)';
            $params[] = $s; $params[] = $s;
        }

        $stmt = $this->pdo->prepare("
            SELECT m.*, x.name AS xetra_name, x.id AS xetra_id
            FROM mandals m
            LEFT JOIN xetras x ON x.id = m.xetra_id
            $where ORDER BY m.name
        ");
        $stmt->execute($params);
        sendSuccess($stmt->fetchAll());
    }

    public function show(string $uuid): void
    {
        $stmt = $this->pdo->prepare("
            SELECT m.*, x.name AS xetra_name
            FROM mandals m
            LEFT JOIN xetras x ON x.id = m.xetra_id
            WHERE m.uuid = ? AND m.status = 'active'
        ");
        $stmt->execute([$uuid]);
        $row = $stmt->fetch();
        if (!$row) sendError(404, 'Mandal not found');
        sendSuccess($row);
    }

    public function store(array $body): void
    {
        $errors = $this->validate($body);
        if ($errors) sendValidationError($errors);

        foreach (['name','code'] as $f) {
            $chk = $this->pdo->prepare("SELECT id FROM mandals WHERE $f = ? AND status = 'active'");
            $chk->execute([$body[$f]]);
            if ($chk->fetch()) sendValidationError([$f => ucfirst($f) . ' already exists']);
        }

        $uuid = $this->uuid();
        $this->pdo->prepare("INSERT INTO mandals (uuid, name, code, xetra_id) VALUES (?,?,?,?)")
            ->execute([$uuid, $body['name'], strtoupper($body['code']), $body['xetra_id'] ?: null]);

        $this->show($uuid);
    }

    public function update(string $uuid, array $body): void
    {
        $check = $this->pdo->prepare("SELECT * FROM mandals WHERE uuid = ? AND status = 'active'");
        $check->execute([$uuid]);
        $existing = $check->fetch();
        if (!$existing) sendError(404, 'Mandal not found');

        $errors = $this->validate($body);
        if ($errors) sendValidationError($errors);

        foreach (['name','code'] as $f) {
            $chk = $this->pdo->prepare("SELECT id FROM mandals WHERE $f = ? AND status = 'active' AND id != ?");
            $chk->execute([$body[$f], $existing['id']]);
            if ($chk->fetch()) sendValidationError([$f => ucfirst($f) . ' already exists']);
        }

        $this->pdo->prepare("UPDATE mandals SET name=?, code=?, xetra_id=? WHERE uuid=?")
            ->execute([$body['name'], strtoupper($body['code']), $body['xetra_id'] ?: null, $uuid]);

        $this->show($uuid);
    }

    public function destroy(string $uuid): void
    {
        $stmt = $this->pdo->prepare("SELECT id FROM mandals WHERE uuid = ? AND status = 'active'");
        $stmt->execute([$uuid]);
        if (!$stmt->fetch()) sendError(404, 'Mandal not found');
        $this->pdo->prepare("UPDATE mandals SET status = 'archive' WHERE uuid = ?")->execute([$uuid]);
        sendSuccess([], 'Mandal archived successfully');
    }

    private function validate(array $body): array
    {
        $errors = [];
        if (empty($body['name']))     $errors['name']     = 'Name is required';
        if (empty($body['code']))     $errors['code']     = 'Code is required';
        if (empty($body['xetra_id'])) $errors['xetra_id'] = 'Xetra is required';
        if (!empty($body['code']) && !preg_match('/^[A-Z0-9]{2,10}$/i', $body['code'])) {
            $errors['code'] = 'Code must be 2-10 alphanumeric characters';
        }
        return $errors;
    }

    private function uuid(): string {
        return sprintf('%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
            mt_rand(0,0xffff),mt_rand(0,0xffff),mt_rand(0,0xffff),
            mt_rand(0,0x0fff)|0x4000,mt_rand(0,0x3fff)|0x8000,
            mt_rand(0,0xffff),mt_rand(0,0xffff),mt_rand(0,0xffff));
    }
}
