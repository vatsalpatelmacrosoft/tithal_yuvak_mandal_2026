<?php
// backend/controllers/CrudController.php
// Generic controller for Xetra, Mandal, Roles

class CrudController
{
    public function __construct(
        private PDO    $pdo,
        private string $table,
        private string $singular,
        private array  $uniqueFields = []
    ) {}

    public function index(): void
    {
        $search = $_GET['search'] ?? '';
        $where  = "WHERE status = 'active'";
        $params = [];
        if ($search) {
            $s = '%' . $search . '%';
            $where .= " AND (name LIKE ? OR code LIKE ?)";
            $params = [$s, $s];
        }
        $stmt = $this->pdo->prepare("SELECT * FROM {$this->table} $where ORDER BY name");
        $stmt->execute($params);
        sendSuccess($stmt->fetchAll());
    }

    public function show(string $id): void
    {
        $stmt = $this->pdo->prepare("SELECT * FROM {$this->table} WHERE uuid = ? AND status = 'active'");
        $stmt->execute([$id]);
        $row = $stmt->fetch();
        if (!$row) sendError(404, ucfirst($this->singular) . ' not found');
        sendSuccess($row);
    }

    public function store(array $body): void
    {
        $errors = $this->validate($body);
        if ($errors) sendValidationError($errors);

        foreach ($this->uniqueFields as $f) {
            $chk = $this->pdo->prepare("SELECT id FROM {$this->table} WHERE $f = ? AND status = 'active'");
            $chk->execute([$body[$f]]);
            if ($chk->fetch()) sendValidationError([$f => ucfirst($f) . ' already exists']);
        }

        $uuid = $this->uuid();
        $this->pdo->prepare("INSERT INTO {$this->table} (uuid, name, code) VALUES (?,?,?)")
            ->execute([$uuid, $body['name'], strtoupper($body['code'])]);

        $this->show($uuid);
    }

    public function update(string $id, array $body): void
    {
        $check = $this->pdo->prepare("SELECT * FROM {$this->table} WHERE uuid = ? AND status = 'active'");
        $check->execute([$id]);
        $existing = $check->fetch();
        if (!$existing) sendError(404, ucfirst($this->singular) . ' not found');

        $errors = $this->validate($body);
        if ($errors) sendValidationError($errors);

        foreach ($this->uniqueFields as $f) {
            $chk = $this->pdo->prepare("SELECT id FROM {$this->table} WHERE $f = ? AND status = 'active' AND id != ?");
            $chk->execute([$body[$f], $existing['id']]);
            if ($chk->fetch()) sendValidationError([$f => ucfirst($f) . ' already exists']);
        }

        $this->pdo->prepare("UPDATE {$this->table} SET name=?, code=? WHERE uuid=?")
            ->execute([$body['name'], strtoupper($body['code']), $id]);

        $this->show($id);
    }

    public function destroy(string $id): void
    {
        $stmt = $this->pdo->prepare("SELECT id FROM {$this->table} WHERE uuid = ? AND status = 'active'");
        $stmt->execute([$id]);
        if (!$stmt->fetch()) sendError(404, ucfirst($this->singular) . ' not found');
        $this->pdo->prepare("UPDATE {$this->table} SET status = 'archive' WHERE uuid = ?")->execute([$id]);
        sendSuccess([], ucfirst($this->singular) . ' archived successfully');
    }

    private function validate(array $body): array
    {
        $errors = [];
        if (empty($body['name'])) $errors['name'] = 'Name is required';
        if (empty($body['code'])) $errors['code'] = 'Code is required';
        if (!empty($body['code']) && !preg_match('/^[A-Z0-9]{2,10}$/i', $body['code'])) {
            $errors['code'] = 'Code must be 2-10 alphanumeric characters';
        }
        return $errors;
    }

    private function uuid(): string
    {
        return sprintf('%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
            mt_rand(0,0xffff),mt_rand(0,0xffff),mt_rand(0,0xffff),
            mt_rand(0,0x0fff)|0x4000, mt_rand(0,0x3fff)|0x8000,
            mt_rand(0,0xffff),mt_rand(0,0xffff),mt_rand(0,0xffff));
    }
}
