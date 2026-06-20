<?php
// backend/tests/Unit/JwtTest.php

use PHPUnit\Framework\TestCase;

// Bootstrap minimal config for JWT
$_ENV['JWT_SECRET'] = 'test-secret-key-for-unit-tests-only';
putenv('JWT_SECRET=test-secret-key-for-unit-tests-only');

require_once __DIR__ . '/../../helpers/jwt.php';

class JwtTest extends TestCase
{
    public function test_encode_returns_three_part_string(): void
    {
        $token = jwtEncode(['user_id' => 1, 'role' => 'ADMIN']);
        $parts = explode('.', $token);
        $this->assertCount(3, $parts);
    }

    public function test_decode_returns_original_payload(): void
    {
        $payload = ['user_id' => 42, 'role_code' => 'SUPER_ADMIN'];
        $token   = jwtEncode($payload);
        $decoded = jwtDecode($token);

        $this->assertIsArray($decoded);
        $this->assertSame(42, $decoded['user_id']);
        $this->assertSame('SUPER_ADMIN', $decoded['role_code']);
    }

    public function test_decode_includes_iat_and_exp(): void
    {
        $token   = jwtEncode(['user_id' => 1]);
        $decoded = jwtDecode($token);

        $this->assertArrayHasKey('iat', $decoded);
        $this->assertArrayHasKey('exp', $decoded);
        $this->assertGreaterThan($decoded['iat'], $decoded['exp']);
    }

    public function test_tampered_token_returns_null(): void
    {
        $token  = jwtEncode(['user_id' => 1]);
        $parts  = explode('.', $token);
        $parts[1] = base64_encode('{"user_id":999}'); // tamper payload
        $tampered = implode('.', $parts);

        $this->assertNull(jwtDecode($tampered));
    }

    public function test_expired_token_returns_null(): void
    {
        // Manually build an expired token
        $header  = base64UrlEncode(json_encode(['alg' => 'HS256', 'typ' => 'JWT']));
        $payload = base64UrlEncode(json_encode(['user_id' => 1, 'iat' => time() - 3600, 'exp' => time() - 100]));
        $sig     = base64UrlEncode(hash_hmac('sha256', "$header.$payload", JWT_SECRET, true));
        $expired = "$header.$payload.$sig";

        $this->assertNull(jwtDecode($expired));
    }

    public function test_malformed_token_returns_null(): void
    {
        $this->assertNull(jwtDecode('not.a.valid.jwt.token'));
        $this->assertNull(jwtDecode(''));
        $this->assertNull(jwtDecode('onlyone'));
    }
}
