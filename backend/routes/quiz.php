<?php
// backend/routes/quiz.php
if ($parts[0] !== 'api' || $resource !== 'quiz') return;
require_once __DIR__ . '/../controllers/QuizController.php';
$ctrl = new QuizController($pdo);

// Public slug endpoint (no auth)
if ($method === 'GET' && $id && $sub === 'public') {
    $ctrl->publicShow($id); // $id = slug
}

$user = requireAuth();
match (true) {
    // Quiz CRUD
    $method === 'GET'    && !$id               => guard($user, 'quiz', 'view',   fn() => $ctrl->index()),
    $method === 'GET'    && $id && !$sub        => guard($user, 'quiz', 'view',   fn() => $ctrl->show($id)),
    $method === 'POST'   && !$id               => guard($user, 'quiz', 'create', fn() => $ctrl->store($body, (int)$user['id'])),
    $method === 'PUT'    && $id && !$sub        => guard($user, 'quiz', 'update', fn() => $ctrl->update($id, $body)),
    $method === 'DELETE' && $id && !$sub        => guard($user, 'quiz', 'delete', fn() => $ctrl->destroy($id)),

    // Toggle active
    $method === 'PUT'  && $id && $sub === 'toggle'  => guard($user, 'quiz', 'update', fn() => $ctrl->toggle($id)),

    // Questions sub-resource
    $method === 'GET'  && $id && $sub === 'questions' => guard($user, 'quiz', 'view',   fn() => $ctrl->listQuestions($id)),
    $method === 'POST' && $id && $sub === 'questions' => guard($user, 'quiz', 'create', fn() => $ctrl->addQuestion($id, $body)),

    // Reorder questions
    $method === 'POST' && $id && $sub === 'reorder'   => guard($user, 'quiz', 'update', fn() => $ctrl->reorderQuestions($id, $body)),

    default => null
};
