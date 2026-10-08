<?php
// backend/helpers/phone.php
// Shared Indian-mobile validation for the Send Message (WhatsApp) feature.

function normalizeIndianMobile(?string $raw): ?string
{
    if (!$raw) return null;
    $digits = preg_replace('/\D/', '', $raw);
    if (strlen($digits) === 12 && str_starts_with($digits, '91'))
        $digits = substr($digits, 2);
    elseif (strlen($digits) === 13 && str_starts_with($digits, '091'))
        $digits = substr($digits, 3);

    if (strlen($digits) !== 10 || !preg_match('/^[6-9]\d{9}$/', $digits))
        return null;

    return $digits;
}

/**
 * Prefer the member's WhatsApp number; fall back to their mobile number.
 * @return array{0: ?string, 1: ?string} [used number (10 digits) or null, source 'whatsapp'|'mobile' or null]
 */
function resolveWhatsAppTarget(?string $whatsapp, ?string $mobile): array
{
    $wa = normalizeIndianMobile($whatsapp);
    if ($wa) return [$wa, 'whatsapp'];

    $mo = normalizeIndianMobile($mobile);
    if ($mo) return [$mo, 'mobile'];

    return [null, null];
}
