<?php
// backend/helpers/jwt.php

$config = require __DIR__ . '/../config/app.php';
define('JWT_SECRET', $config['jwt_secret']);
define('JWT_EXPIRY', $config['jwt_expiry']);

function jwtEncode(array $payload): string
{
    $header  = base64UrlEncode(json_encode(['alg' => 'HS256', 'typ' => 'JWT']));
    $payload['iat'] = time();
    $payload['exp'] = time() + JWT_EXPIRY;
    $payloadEnc = base64UrlEncode(json_encode($payload));
    $sig = base64UrlEncode(hash_hmac('sha256', "$header.$payloadEnc", JWT_SECRET, true));
    return "$header.$payloadEnc.$sig";
}

function jwtDecode(string $token): ?array
{
    $parts = explode('.', $token);
    if (count($parts) !== 3) return null;

    [$header, $payload, $sig] = $parts;
    $expected = base64UrlEncode(hash_hmac('sha256', "$header.$payload", JWT_SECRET, true));

    if (!hash_equals($expected, $sig)) return null;

    $data = json_decode(base64UrlDecode($payload), true);
    if (!$data || $data['exp'] < time()) return null;

    return $data;
}

function base64UrlEncode(string $data): string
{
    return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
}

function base64UrlDecode(string $data): string
{
    return base64_decode(strtr($data, '-_', '+/'));
}
