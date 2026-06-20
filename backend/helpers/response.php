<?php
// backend/helpers/response.php

function sendSuccess($data = [], string $message = 'Success', int $code = 200): void
{
    http_response_code($code);
    echo json_encode([
        'success' => true,
        'message' => $message,
        'data'    => $data,
    ]);
    exit;
}

function sendError(int $code, string $message, array $errors = []): void
{
    http_response_code($code);
    $res = ['success' => false, 'message' => $message];
    if (!empty($errors)) {
        $res['errors'] = $errors;
    }
    echo json_encode($res);
    exit;
}

function sendValidationError(array $errors): void
{
    sendError(422, 'Validation failed', $errors);
}
