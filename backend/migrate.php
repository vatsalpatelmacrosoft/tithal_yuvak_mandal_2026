<?php
// backend/migrate.php
// Usage: php migrate.php
// Auto-detects and runs only new migration SQL files.

require_once __DIR__ . '/config/database.php';

function runMigrations(PDO $pdo): void
{
    // Ensure migrations table exists
    $pdo->exec("CREATE TABLE IF NOT EXISTS migrations (
        id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        filename   VARCHAR(200) NOT NULL,
        ran_at     TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
        UNIQUE KEY uq_migration_file (filename)
    ) ENGINE=InnoDB");

    $migrationsDir = __DIR__ . '/migrations';
    $files = glob($migrationsDir . '/*.sql');
    sort($files);

    foreach ($files as $file) {
        $filename = basename($file);

        // Check if already ran
        $stmt = $pdo->prepare("SELECT id FROM migrations WHERE filename = ?");
        $stmt->execute([$filename]);
        if ($stmt->fetch()) {
            echo "[SKIP]  $filename (already applied)\n";
            continue;
        }

        // Run the migration
        $sql = file_get_contents($file);
        try {
            $pdo->exec($sql);
            $pdo->prepare("INSERT INTO migrations (filename) VALUES (?)")->execute([$filename]);
            echo "[OK]    $filename applied\n";
        } catch (PDOException $e) {
            echo "[ERROR] $filename: " . $e->getMessage() . "\n";
            exit(1);
        }
    }

    echo "\nAll migrations applied.\n";
}

runMigrations($pdo);
