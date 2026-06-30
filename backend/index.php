<?php
// backend/index.php  — Front Controller

require_once __DIR__ . '/config/database.php';
$config = require __DIR__ . '/config/app.php';

date_default_timezone_set(getenv('APP_TIMEZONE') ?: 'Asia/Kolkata');

// ── Error / Exception handlers ───────────────────────────────
ini_set('display_errors', '0');
error_reporting(E_ALL);

set_exception_handler(function (Throwable $e) use ($config): void {
    $isDev = ($config['app_env'] ?? 'production') === 'development';
    $logMsg = sprintf(
        '[%s] Uncaught %s: %s in %s:%d',
        date('Y-m-d H:i:s'),
        get_class($e),
        $e->getMessage(),
        $e->getFile(),
        $e->getLine()
    );
    error_log($logMsg);
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Internal server error',
        'detail'  => $isDev ? $e->getMessage() : null,
    ]);
    exit;
});

set_error_handler(function (int $severity, string $message, string $file, int $line): bool {
    if (!($severity & error_reporting())) {
        return false;
    }
    throw new ErrorException($message, 0, $severity, $file, $line);
});

// ── CORS ────────────────────────────────────────────────────
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $config['allowed_origins'])) {
    header("Access-Control-Allow-Origin: $origin");
}
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// ── Helpers ──────────────────────────────────────────────────
require_once __DIR__ . '/helpers/response.php';
require_once __DIR__ . '/helpers/jwt.php';
require_once __DIR__ . '/helpers/id_encoder.php';
require_once __DIR__ . '/middleware/auth.php';

// ── Route parsing ─────────────────────────────────────────────
$rawPath  = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$basePath = rtrim(dirname($_SERVER['SCRIPT_NAME']), '/');
$uri      = trim(substr($rawPath, strlen($basePath)), '/');
$method   = $_SERVER['REQUEST_METHOD'];
$parts    = explode('/', $uri);

// parts[0] = 'api', parts[1] = resource, parts[2] = id, parts[3] = sub
$resource = $parts[1] ?? '';
$id       = $parts[2] ?? null;
$sub      = $parts[3] ?? null;

$body = json_decode(file_get_contents('php://input'), true) ?? [];

// ── API Docs (Swagger UI) ─────────────────────────────────────
if ($uri === 'docs') {
    header('Content-Type: text/html; charset=UTF-8');
    readfile(__DIR__ . '/api-docs.html');
    exit;
}

// ── Route Map ─────────────────────────────────────────────────
require_once __DIR__ . '/routes/auth.php';
require_once __DIR__ . '/routes/yuvak.php';
require_once __DIR__ . '/routes/yuvati.php';
require_once __DIR__ . '/routes/xetra.php';
require_once __DIR__ . '/routes/mandal.php';
require_once __DIR__ . '/routes/users.php';
require_once __DIR__ . '/routes/roles.php';
require_once __DIR__ . '/routes/shibir.php';
require_once __DIR__ . '/routes/quiz.php';
require_once __DIR__ . '/routes/questions.php';
require_once __DIR__ . '/routes/settings.php';
require_once __DIR__ . '/routes/reports.php';
require_once __DIR__ . '/routes/attendance.php';
require_once __DIR__ . '/routes/dashboard.php';
require_once __DIR__ . '/routes/public.php';

sendError(404, 'Route not found');
