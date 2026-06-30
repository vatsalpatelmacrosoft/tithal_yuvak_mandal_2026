<?php
// backend/seed_admin.php
// Usage: php seed_admin.php
// Creates the first Super Admin user. Safe to run multiple times (idempotent).

function seedError(string $message): never
{
    fprintf(STDERR, "[ERROR] %s\n", $message);
    exit(1);
}

function genUuid(): string
{
    return sprintf(
        '%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
        mt_rand(0, 0xffff), mt_rand(0, 0xffff),
        mt_rand(0, 0xffff),
        mt_rand(0, 0x0fff) | 0x4000,
        mt_rand(0, 0x3fff) | 0x8000,
        mt_rand(0, 0xffff), mt_rand(0, 0xffff), mt_rand(0, 0xffff)
    );
}

require_once __DIR__ . '/config/database.php';

// ── Configurable defaults ─────────────────────────────────────────────────────
$adminFirstName = 'Vatsal';
$adminLastName = 'Patel';
$adminMobile = '9999999999';
$adminPassword = 'Admin@100';
$xetraName = 'Tithal';
$xetraCode = 'TTH';
$mandalName = 'Tithal';
$mandalCode = 'TTH01';
// ─────────────────────────────────────────────────────────────────────────────

echo "Seeding Super Admin...\n\n";

try {

    // 1. Ensure a default xetra exists
    $stmt = $pdo->prepare("SELECT id FROM xetras WHERE code = ? LIMIT 1");
    $stmt->execute([$xetraCode]);
    $xetra = $stmt->fetch();
    if (!$xetra) {
        $pdo->prepare("INSERT INTO xetras (uuid, name, code) VALUES (?, ?, ?)")->execute([genUuid(), $xetraName, $xetraCode]);
        $xetraId = (int) $pdo->lastInsertId();
        echo "[OK]    Created xetra: $xetraName ($xetraCode)\n";
    } else {
        $xetraId = (int) $xetra['id'];
        echo "[SKIP]  Xetra already exists: $xetraName\n";
    }

    // 2. Ensure a default mandal exists
    $stmt = $pdo->prepare("SELECT id FROM mandals WHERE code = ? LIMIT 1");
    $stmt->execute([$mandalCode]);
    $mandal = $stmt->fetch();
    if (!$mandal) {
        $pdo->prepare("INSERT INTO mandals (uuid, name, code) VALUES (?, ?, ?)")->execute([genUuid(), $mandalName, $mandalCode]);
        $mandalId = (int) $pdo->lastInsertId();
        echo "[OK]    Created mandal: $mandalName ($mandalCode)\n";
    } else {
        $mandalId = (int) $mandal['id'];
        echo "[SKIP]  Mandal already exists: $mandalName\n";
    }

    // 3. Ensure admin yuvak record exists
    $stmt = $pdo->prepare("SELECT id FROM yuvaks WHERE mo_number = ? LIMIT 1");
    $stmt->execute([$adminMobile]);
    $yuvak = $stmt->fetch();
    if (!$yuvak) {
        $yuvakId = strtoupper($xetraCode) . '00001';
        $pdo->prepare("
        INSERT INTO yuvaks (uuid, yuvak_id, first_name, last_name, mo_number, xetra_id, mandal_id)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    ")->execute([genUuid(), $yuvakId, $adminFirstName, $adminLastName, $adminMobile, $xetraId, $mandalId]);
        $yuvakDbId = (int) $pdo->lastInsertId();
        echo "[OK]    Created yuvak: $adminFirstName $adminLastName ($adminMobile)\n";
    } else {
        $yuvakDbId = (int) $yuvak['id'];
        echo "[SKIP]  Yuvak already exists for mobile: $adminMobile\n";
    }

    // 4. Get Super Admin role
    $stmt = $pdo->prepare("SELECT id FROM roles WHERE code = 'SUPER_ADMIN' LIMIT 1");
    $stmt->execute();
    $role = $stmt->fetch();
    if (!$role) {
        seedError('Super Admin role not found. Run migrate.php first.');
    }
    $roleId = (int) $role['id'];

    // 5. Create user account
    $stmt = $pdo->prepare("SELECT id FROM users WHERE mo_number = ? LIMIT 1");
    $stmt->execute([$adminMobile]);
    $user = $stmt->fetch();
    if (!$user) {
        $hash = password_hash($adminPassword, PASSWORD_BCRYPT, ['cost' => 12]);
        $pdo->prepare("
        INSERT INTO users (uuid, yuvak_id, role_id, mo_number, password)
        VALUES (?, ?, ?, ?, ?)
    ")->execute([genUuid(), $yuvakDbId, $roleId, $adminMobile, $hash]);
        echo "[OK]    Created user account\n";
    } else {
        echo "[SKIP]  User account already exists for mobile: $adminMobile\n";
    }

    // 6. Grant Super Admin full permissions on all menus
    $menus = $pdo->query("SELECT id FROM menus")->fetchAll();
    foreach ($menus as $menu) {
        $pdo->prepare("
        INSERT IGNORE INTO permissions (role_id, menu_id, can_view, can_create, can_update, can_delete)
        VALUES (?, ?, 1, 1, 1, 1)
    ")->execute([$roleId, $menu['id']]);
    }
    echo "[OK]    Full permissions set for Super Admin role\n";

    echo "\n─────────────────────────────────────────\n";
    echo "Admin credentials:\n";
    echo "  Mobile:   $adminMobile\n";
    echo "  Password: $adminPassword\n";
    echo "─────────────────────────────────────────\n";
    echo "Change the password after first login!\n\n";

} catch (PDOException $e) {
    seedError('Database error: ' . $e->getMessage());
} catch (Throwable $e) {
    seedError($e->getMessage());
}
