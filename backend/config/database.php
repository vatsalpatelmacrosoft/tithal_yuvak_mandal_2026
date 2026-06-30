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

$host       = getenv('DB_HOST')            ?: 'localhost';
$port       = getenv('DB_PORT') ?: null;
$dbname     = getenv('DB_NAME')            ?: 'tdd_management';
$username   = getenv('DB_USER')            ?: 'root';
$password   = getenv('DB_PASS')            ?: '';
$charset    = 'utf8mb4';
$persistent = filter_var(getenv('DB_PERSISTENT') ?: 'true', FILTER_VALIDATE_BOOLEAN);
$timeout    = (int)(getenv('DB_CONNECT_TIMEOUT') ?: 10);

$dsn = "mysql:host=$host" . ($port ? ";port=$port" : "") . ";dbname=$dbname;charset=$charset";

// PHP 8.4+ introduced Pdo\Mysql::ATTR_INIT_COMMAND; PHP 8.5 deprecated the PDO:: alias.
$mysqlInitCmd = defined('Pdo\\Mysql::ATTR_INIT_COMMAND')
    ? \Pdo\Mysql::ATTR_INIT_COMMAND
    : PDO::MYSQL_ATTR_INIT_COMMAND;

$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
    // Reuse connections across PHP-FPM workers instead of opening a new socket per request
    PDO::ATTR_PERSISTENT         => $persistent,
    PDO::ATTR_TIMEOUT            => $timeout,
    // Reset charset + timezone on every reused persistent connection
    $mysqlInitCmd                => "SET NAMES utf8mb4, time_zone='+05:30'",
];

try {
    $pdo = new PDO($dsn, $username, $password, $options);
} catch (PDOException $e) {
    error_log(sprintf('[%s] DB connection failed: %s', date('Y-m-d H:i:s'), $e->getMessage()));
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database connection failed']);
    exit;
}
