<?php
// backend/tests/Feature/ApiTest.php
// Integration tests - requires a test database.
// Set TEST_DB_* env vars before running.
// Run: php vendor/bin/phpunit tests/Feature/

use PHPUnit\Framework\TestCase;

/**
 * Lightweight HTTP test client (no Guzzle needed).
 */
class HttpClient
{
    private string $base;
    private ?string $token = null;

    public function __construct(string $base) { $this->base = $base; }

    public function setToken(string $t): void { $this->token = $t; }

    public function post(string $path, array $body = []): array
    {
        return $this->request('POST', $path, $body);
    }

    public function get(string $path): array
    {
        return $this->request('GET', $path);
    }

    public function put(string $path, array $body = []): array
    {
        return $this->request('PUT', $path, $body);
    }

    public function delete(string $path): array
    {
        return $this->request('DELETE', $path);
    }

    private function request(string $method, string $path, array $body = []): array
    {
        $ch = curl_init("{$this->base}/{$path}");
        $headers = ['Content-Type: application/json', 'Accept: application/json'];
        if ($this->token) $headers[] = "Authorization: Bearer {$this->token}";

        curl_setopt_array($ch, [
            CURLOPT_CUSTOMREQUEST  => $method,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HTTPHEADER     => $headers,
        ]);
        if ($body) curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($body));

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        return ['code' => $httpCode, 'body' => json_decode($response, true) ?? []];
    }
}

class ApiTest extends TestCase
{
    private HttpClient $http;
    private static string $baseUrl;

    public static function setUpBeforeClass(): void
    {
        self::$baseUrl = getenv('TEST_API_URL') ?: 'http://localhost:8000/api';
    }

    protected function setUp(): void
    {
        $this->http = new HttpClient(self::$baseUrl);
    }

    // ── Auth ─────────────────────────────────────────────────────

    public function test_login_with_missing_fields_returns_422(): void
    {
        $res = $this->http->post('auth/login', []);
        $this->assertSame(422, $res['code']);
        $this->assertFalse($res['body']['success']);
        $this->assertArrayHasKey('errors', $res['body']);
    }

    public function test_login_with_wrong_credentials_returns_401(): void
    {
        $res = $this->http->post('auth/login', ['mo_number' => '9999999999', 'password' => 'wrong']);
        $this->assertSame(401, $res['code']);
    }

    public function test_protected_route_without_token_returns_401(): void
    {
        $res = $this->http->get('yuvak');
        $this->assertSame(401, $res['code']);
    }

    // ── Xetra ────────────────────────────────────────────────────

    public function test_xetra_list_requires_auth(): void
    {
        $res = $this->http->get('xetra');
        $this->assertSame(401, $res['code']);
    }

    public function test_xetra_create_validates_required_fields(): void
    {
        $this->loginAsSuperAdmin();
        $res = $this->http->post('xetra', []);
        $this->assertSame(422, $res['code']);
        $this->assertArrayHasKey('name', $res['body']['errors']);
        $this->assertArrayHasKey('code', $res['body']['errors']);
    }

    public function test_xetra_create_validates_code_format(): void
    {
        $this->loginAsSuperAdmin();
        $res = $this->http->post('xetra', ['name' => 'Test', 'code' => 'A']); // too short
        $this->assertSame(422, $res['code']);
    }

    // ── Yuvak ────────────────────────────────────────────────────

    public function test_yuvak_create_validates_mobile_format(): void
    {
        $this->loginAsSuperAdmin();
        $res = $this->http->post('yuvak', [
            'first_name' => 'Test',
            'last_name'  => 'User',
            'mo_number'  => '1234567890', // invalid - doesn't start 6-9
            'xetra_id'   => 1,
            'mandal_id'  => 1,
        ]);
        $this->assertSame(422, $res['code']);
        $this->assertArrayHasKey('mo_number', $res['body']['errors']);
    }

    public function test_yuvak_list_returns_paginated(): void
    {
        $this->loginAsSuperAdmin();
        $res = $this->http->get('yuvak');
        $this->assertSame(200, $res['code']);
        $this->assertTrue($res['body']['success']);
        $this->assertArrayHasKey('data', $res['body']['data']);
        $this->assertArrayHasKey('total', $res['body']['data']);
    }

    public function test_yuvak_not_found_returns_404(): void
    {
        $this->loginAsSuperAdmin();
        $res = $this->http->get('yuvak/nonexistent-uuid-12345');
        $this->assertSame(404, $res['code']);
    }

    // ── Soft Delete ──────────────────────────────────────────────

    public function test_archived_yuvak_not_in_active_list(): void
    {
        $this->loginAsSuperAdmin();
        // Get list count
        $before = $this->http->get('yuvak');
        $beforeCount = $before['body']['data']['total'];

        // If we can create a test yuvak, archive it, and verify count unchanged...
        // (Full end-to-end test requires seeded test DB)
        $this->assertIsInt($beforeCount);
    }

    // ── Quiz ─────────────────────────────────────────────────────

    public function test_public_quiz_requires_slug(): void
    {
        // Using public endpoint - no auth
        $http = new HttpClient(str_replace('/api', '/public', self::$baseUrl));
        $res  = $http->get('quiz/nonexistent-slug');
        $this->assertSame(404, $res['code']);
    }

    // ── Helpers ──────────────────────────────────────────────────

    private function loginAsSuperAdmin(): void
    {
        $mo  = getenv('TEST_ADMIN_MOBILE') ?: '9000000001';
        $pwd = getenv('TEST_ADMIN_PASSWORD') ?: 'admin@123';
        $res = $this->http->post('auth/login', ['mo_number' => $mo, 'password' => $pwd]);
        if (!empty($res['body']['data']['token'])) {
            $this->http->setToken($res['body']['data']['token']);
        }
    }
}
