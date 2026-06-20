<?php
// backend/tests/Unit/ValidationTest.php

use PHPUnit\Framework\TestCase;

/**
 * Tests the validation rules used across controllers.
 * Extracted as a standalone validator for easy unit-testing.
 */
class MemberValidator
{
    public static function validateMobile(string $mo): ?string
    {
        if (empty($mo))                             return 'Mobile number is required';
        if (!preg_match('/^[6-9]\d{9}$/', $mo))    return 'Invalid Indian mobile number';
        return null;
    }

    public static function validateEmail(string $email): ?string
    {
        if (empty($email)) return null; // optional
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) return 'Invalid email address';
        return null;
    }

    public static function validateKaryakar(string $val): ?string
    {
        if (!in_array($val, ['no', 'bal', 'yuva', 'sanyukta'])) return 'Invalid karyakar value';
        return null;
    }

    public static function validateCode(string $code): ?string
    {
        if (empty($code)) return 'Code is required';
        if (!preg_match('/^[A-Z0-9]{2,10}$/i', $code)) return 'Code must be 2-10 alphanumeric characters';
        return null;
    }

    public static function validatePassword(string $pwd): ?string
    {
        if (strlen($pwd) < 8) return 'Password must be at least 8 characters';
        return null;
    }
}

class ValidationTest extends TestCase
{
    // ── Mobile ───────────────────────────────────────────────────

    /** @dataProvider validMobiles */
    public function test_valid_mobile(string $mobile): void
    {
        $this->assertNull(MemberValidator::validateMobile($mobile));
    }

    public static function validMobiles(): array
    {
        return [['9876543210'], ['8123456789'], ['7012345678'], ['6098765432']];
    }

    /** @dataProvider invalidMobiles */
    public function test_invalid_mobile(string $mobile): void
    {
        $this->assertNotNull(MemberValidator::validateMobile($mobile));
    }

    public static function invalidMobiles(): array
    {
        return [[''], ['1234567890'], ['98765432'], ['9876543210123'], ['abcdefghij']];
    }

    // ── Email ────────────────────────────────────────────────────

    public function test_empty_email_is_valid(): void
    {
        $this->assertNull(MemberValidator::validateEmail(''));
    }

    public function test_valid_email(): void
    {
        $this->assertNull(MemberValidator::validateEmail('test@example.com'));
    }

    public function test_invalid_email(): void
    {
        $this->assertNotNull(MemberValidator::validateEmail('not-an-email'));
    }

    // ── Karyakar ─────────────────────────────────────────────────

    /** @dataProvider validKaryakar */
    public function test_valid_karyakar(string $val): void
    {
        $this->assertNull(MemberValidator::validateKaryakar($val));
    }

    public static function validKaryakar(): array
    {
        return [['no'], ['bal'], ['yuva'], ['sanyukta']];
    }

    public function test_invalid_karyakar(): void
    {
        $this->assertNotNull(MemberValidator::validateKaryakar('other'));
    }

    // ── Code ─────────────────────────────────────────────────────

    public function test_valid_code(): void
    {
        $this->assertNull(MemberValidator::validateCode('TI'));
        $this->assertNull(MemberValidator::validateCode('PUN123'));
    }

    public function test_code_too_short(): void
    {
        $this->assertNotNull(MemberValidator::validateCode('A'));
    }

    public function test_code_too_long(): void
    {
        $this->assertNotNull(MemberValidator::validateCode('ABCDEFGHIJK'));
    }

    // ── Password ─────────────────────────────────────────────────

    public function test_valid_password(): void
    {
        $this->assertNull(MemberValidator::validatePassword('password123'));
    }

    public function test_short_password(): void
    {
        $this->assertNotNull(MemberValidator::validatePassword('abc'));
    }
}
