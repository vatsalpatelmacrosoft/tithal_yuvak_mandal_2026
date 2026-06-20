<?php
// backend/controllers/ShibirController.php

class ShibirController
{
    public function __construct(private PDO $pdo) {}

    public function index(): void
    {
        $stmt = $this->pdo->query("SELECT * FROM shibirs WHERE status='active' ORDER BY date DESC");
        sendSuccess($stmt->fetchAll());
    }

    public function show(string $id): void
    {
        $stmt = $this->pdo->prepare("SELECT * FROM shibirs WHERE uuid=? AND status='active'");
        $stmt->execute([$id]);
        $row = $stmt->fetch();
        if (!$row) sendError(404, 'Shibir not found');
        sendSuccess($row);
    }

    public function store(array $body): void
    {
        $errors = [];
        if (empty($body['name'])) $errors['name'] = 'Name is required';
        if (empty($body['date'])) $errors['date'] = 'Date is required';
        if (!empty($body['date']) && !strtotime($body['date'])) $errors['date'] = 'Invalid date';
        if ($errors) sendValidationError($errors);

        $slug = strtolower(preg_replace('/[^a-z0-9]+/i', '-', $body['name']))
              . '-' . date('Ymd', strtotime($body['date']))
              . '-' . substr(uniqid(), -4);
        $uuid = $this->uuid();

        $this->pdo->prepare("INSERT INTO shibirs (uuid,name,date,slug) VALUES (?,?,?,?)")
            ->execute([$uuid, $body['name'], $body['date'], $slug]);
        $this->show($uuid);
    }

    public function update(string $id, array $body): void
    {
        $check = $this->pdo->prepare("SELECT id FROM shibirs WHERE uuid=? AND status='active'");
        $check->execute([$id]);
        if (!$check->fetch()) sendError(404, 'Shibir not found');

        $this->pdo->prepare("UPDATE shibirs SET name=?, date=? WHERE uuid=?")
            ->execute([$body['name'], $body['date'], $id]);
        $this->show($id);
    }

    public function destroy(string $id): void
    {
        $this->pdo->prepare("UPDATE shibirs SET status='archive' WHERE uuid=?")->execute([$id]);
        sendSuccess([], 'Shibir archived');
    }

    private function uuid(): string {
        return sprintf('%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
            mt_rand(0,0xffff),mt_rand(0,0xffff),mt_rand(0,0xffff),
            mt_rand(0,0x0fff)|0x4000,mt_rand(0,0x3fff)|0x8000,
            mt_rand(0,0xffff),mt_rand(0,0xffff),mt_rand(0,0xffff));
    }
}
