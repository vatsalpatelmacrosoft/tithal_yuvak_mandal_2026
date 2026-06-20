<?php
// backend/routes/auth.php

if ($parts[0] !== 'api' || $resource !== 'auth') return;

require_once __DIR__ . '/../controllers/AuthController.php';
$ctrl = new AuthController($pdo);

match (true) {
    $method === 'POST' && $id === 'login'          => $ctrl->login($body),
    $method === 'POST' && $id === 'logout'         => $ctrl->logout(),
    $method === 'POST' && $id === 'forgot-password'=> $ctrl->forgotPassword($body),
    $method === 'POST' && $id === 'reset-password' => $ctrl->resetPassword($body),
    $method === 'GET'  && $id === 'me'             => $ctrl->me(),
    default => null
};
