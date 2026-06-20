<?php
// backend/controllers/SettingsController.php

class SettingsController
{
    public function __construct(private PDO $pdo) {}

    public function show(): void
    {
        $row = $this->pdo->query("SELECT * FROM global_settings ORDER BY id LIMIT 1")->fetch();
        if (!$row) {
            sendSuccess($this->defaultSettings());
            return;
        }
        $row['field_config'] = json_decode($row['field_config'], true);
        sendSuccess($row);
    }

    public function update(array $body, int $userId): void
    {
        $row = $this->pdo->query("SELECT id FROM global_settings ORDER BY id LIMIT 1")->fetch();

        $regOpen     = isset($body['reg_open']) ? (int)(bool)$body['reg_open'] : 0;
        $fieldConfig = isset($body['field_config']) ? json_encode($body['field_config']) : null;

        if ($row) {
            $stmt = $this->pdo->prepare(
                "UPDATE global_settings
                 SET reg_open=?, field_config=COALESCE(?,field_config), updated_by=?
                 WHERE id=?"
            );
            $stmt->execute([$regOpen, $fieldConfig, $userId, $row['id']]);
        } else {
            $defaults = json_encode($this->defaultSettings()['field_config']);
            $stmt = $this->pdo->prepare(
                "INSERT INTO global_settings (reg_open, field_config, created_by, updated_by)
                 VALUES (?,?,?,?)"
            );
            $stmt->execute([$regOpen, $fieldConfig ?? $defaults, $userId, $userId]);
        }

        $this->show();
    }

    private function defaultSettings(): array
    {
        return [
            'reg_open'     => 0,
            'field_config' => [
                'name'        => ['label' => 'Name',        'required' => true,  'max_length' => 100],
                'middle_name' => ['label' => 'Middle Name', 'required' => false, 'max_length' => 100],
                'last_name'   => ['label' => 'Last Name',   'required' => true,  'max_length' => 100],
                'xetra_name'  => ['label' => 'Xetra Name',  'required' => false, 'max_length' => 100],
                'mandal_name' => ['label' => 'Mandal Name', 'required' => false, 'max_length' => 100],
                'address'     => ['label' => 'Address',     'required' => false, 'max_length' => 500],
            ],
        ];
    }

    public function publicShow(): void
    {
        $row = $this->pdo->query("SELECT reg_open, field_config FROM global_settings LIMIT 1")->fetch();
        if (!$row) {
            sendSuccess(['reg_open' => 0, 'field_config' => $this->defaultSettings()['field_config']]);
            return;
        }
        $row['field_config'] = json_decode($row['field_config'], true);
        sendSuccess($row);
    }
}
