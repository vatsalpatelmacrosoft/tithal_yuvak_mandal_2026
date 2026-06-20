<?php
// backend/routes/public.php
if ($parts[0] !== 'public') return;

require_once __DIR__ . '/../controllers/PublicController.php';
$ctrl = new PublicController($pdo);

match (true) {
    // GET  /public/quiz/{slug}         — quiz info for landing
    $method === 'GET'  && $resource === 'quiz' && $id && !$sub
        => $ctrl->quizBySlug($id),

    // POST /public/quiz/{slug}/start   — register participant + get questions
    $method === 'POST' && $resource === 'quiz' && $id && $sub === 'start'
        => $ctrl->startQuiz($id, $body),

    // POST /public/quiz/{slug}/submit  — save answers + calculate score
    $method === 'POST' && $resource === 'quiz' && $id && $sub === 'submit'
        => $ctrl->submitQuiz($id, $body),

    // POST /public/validate-yuvak      — validate Yuvak ID
    $method === 'POST' && $resource === 'validate-yuvak'
        => $ctrl->validateYuvak($body),

    // GET  /public/register/{type}
    $method === 'GET'  && $resource === 'register' && $id
        => $ctrl->getRegistrationForm($id),

    // GET  /public/mandal?xetra_id=  — mandals for registration form
    $method === 'GET'  && $resource === 'mandal'
        => $ctrl->getMandalsForXetra(),

    // POST /public/register/yuvak
    $method === 'POST' && $resource === 'register' && $id === 'yuvak'
        => $ctrl->registerYuvak($body),

    // POST /public/register/yuvati
    $method === 'POST' && $resource === 'register' && $id === 'yuvati'
        => $ctrl->registerYuvati($body),

    // GET  /public/welcome/{type}/{uuid}  — welcome card (no auth)
    $method === 'GET'  && $resource === 'welcome' && $id && $sub
        => $ctrl->welcomeCard($id, $sub),

    default => sendError(404, 'Not found')
};
