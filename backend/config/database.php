<?php
// backend/config/database.php

// Load .env file
if (file_exists(__DIR__ . '/../.env')) {
    $lines = file(__DIR__ . '/../.env', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        $line = trim($line);
        if ($line === '' || str_starts_with($line, '#')) {
            continue;
        }
        
        $parts = explode('=', $line, 2);
        if (count($parts) !== 2) {
            continue;
        }
        
        $name = trim($parts[0]);
        $value = trim($parts[1]);
        
        if (str_contains($value, '#')) {
            $firstChar = $value[0] ?? '';
            if ($firstChar === '"' || $firstChar === "'") {
                $quote = $firstChar;
                $closingPos = strpos($value, $quote, 1);
                if ($closingPos !== false) {
                    $value = substr($value, 1, $closingPos - 1);
                }
            } else {
                $valParts = explode('#', $value, 2);
                $value = trim($valParts[0]);
            }
        } else {
            $firstChar = $value[0] ?? '';
            $lastChar = substr($value, -1);
            if (($firstChar === '"' || $firstChar === "'") && $firstChar === $lastChar && strlen($value) >= 2) {
                $value = substr($value, 1, -1);
            }
        }
        
        if (!getenv($name)) {
            putenv("{$name}={$value}");
            $_ENV[$name] = $value;
            $_SERVER[$name] = $value;
        }
    }
}

$host     = getenv('DB_HOST')     ?: 'localhost';
$dbname   = getenv('DB_NAME')     ?: 'tdd_management';
$username = getenv('DB_USER')     ?: 'root';
$password = getenv('DB_PASS')     ?: '';
$charset  = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$dbname;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $username, $password, $options);
} catch (PDOException $e) {
    error_log(sprintf('[%s] DB connection failed: %s', date('Y-m-d H:i:s'), $e->getMessage()));
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database connection failed']);
    exit;
}
