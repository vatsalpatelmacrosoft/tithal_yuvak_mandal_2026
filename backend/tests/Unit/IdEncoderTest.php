<?php
// backend/tests/Unit/IdEncoderTest.php
// Run: php vendor/bin/phpunit tests/
// Install: composer require --dev phpunit/phpunit

use PHPUnit\Framework\TestCase;

require_once __DIR__ . '/../../helpers/id_encoder.php';

class IdEncoderTest extends TestCase
{
    // ── encodeId / decodeId ──────────────────────────────────────

    public function test_encode_id_returns_string(): void
    {
        $this->assertIsString(encodeId(1));
    }

    public function test_encode_id_minimum_length(): void
    {
        $this->assertGreaterThanOrEqual(3, strlen(encodeId(1)));
        $this->assertGreaterThanOrEqual(3, strlen(encodeId(100)));
    }

    public function test_decode_reverses_encode(): void
    {
        foreach ([1, 42, 100, 999, 10000] as $id) {
            $this->assertSame($id, decodeId(encodeId($id)));
        }
    }

    public function test_different_ids_produce_different_codes(): void
    {
        $this->assertNotSame(encodeId(1), encodeId(2));
        $this->assertNotSame(encodeId(99), encodeId(100));
    }

    // ── buildYuvakId ───────────────────────────────────────────

    public function test_yuvak_id_starts_with_YUVAK(): void
    {
        $id = buildYuvakId(1, 'PUN');
        $this->assertStringStartsWith('YUVAK', $id);
    }

    public function test_yuvak_id_contains_xetra_code(): void
    {
        $id = buildYuvakId(1, 'PUN');
        $this->assertStringContainsString('PUN', $id);
    }

    public function test_yuvak_id_format(): void
    {
        // YUVAK + CODE + encoded
        $id = buildYuvakId(1, 'TI');
        $this->assertMatchesRegularExpression('/^YUVAKTI[A-Z0-9]+$/', $id);
    }

    // ── buildYuvatiId ──────────────────────────────────────────

    public function test_yuvati_id_starts_with_YUVATI(): void
    {
        $id = buildYuvatiId(1, 'MUM');
        $this->assertStringStartsWith('YUVATI', $id);
    }

    public function test_yuvati_id_different_from_yuvak_id_same_input(): void
    {
        $this->assertNotSame(buildYuvakId(1, 'TI'), buildYuvatiId(1, 'TI'));
    }
}
