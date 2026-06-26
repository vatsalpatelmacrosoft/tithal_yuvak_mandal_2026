<?php
// backend/routes/reports.php
if ($parts[0] !== 'api' || $resource !== 'reports') return;
require_once __DIR__ . '/../controllers/ReportController.php';
$ctrl = new ReportController($pdo);

$user = requireAuth();

// Export: GET /api/reports/export?type=X&quiz_uuid=Y
if ($method === 'GET' && $id === 'export') {
    guard($user, 'reports', 'view', function() use ($ctrl) {
        $ctrl->export($_GET['type'] ?? '', $_GET['quiz_uuid'] ?? '');
    });
}

guard($user, 'reports', 'view', function() use ($method, $id, $ctrl) {
    match (true) {
        $method === 'GET' && $id === 'quiz-wise'       => $ctrl->quizWise(),
        $method === 'GET' && $id === 'participant-wise' => $ctrl->participantWise($_GET['quiz_uuid'] ?? ''),
        $method === 'GET' && $id === 'question-wise'   => $ctrl->questionWise($_GET['quiz_uuid'] ?? ''),
        $method === 'GET' && $id === 'gender-wise'     => $ctrl->genderWise($_GET['quiz_uuid'] ?? ''),
        default => null
    };
});
