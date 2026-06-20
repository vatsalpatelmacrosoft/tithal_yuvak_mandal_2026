<?php
// backend/routes/questions.php  — Individual question CRUD
if ($parts[0] !== 'api' || $resource !== 'questions') return;
require_once __DIR__ . '/../controllers/QuizController.php';
$ctrl = new QuizController($pdo);

$user = requireAuth();
match (true) {
    $method === 'PUT'    && $id => guard($user, 'quiz', 'update', fn() => $ctrl->updateQuestion($id, $body)),
    $method === 'DELETE' && $id => guard($user, 'quiz', 'delete', fn() => $ctrl->deleteQuestion($id)),
    default => null
};
