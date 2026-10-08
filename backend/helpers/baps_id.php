<?php
// backend/helpers/baps_id.php
// Optional BAPS ID on Yuvak / Yuvati (e.g. VP1997947, VP19979741).

/** Trim + uppercase; empty → null. */
function normalizeBapsId(mixed $raw): ?string
{
    if ($raw === null) return null;
    $v = strtoupper(trim((string)$raw));
    return $v === '' ? null : $v;
}

/** Returns an error message, or null if the (normalized) value is valid. */
function bapsIdError(?string $bapsId): ?string
{
    if ($bapsId === null) return null;
    if (!preg_match('/^[A-Z0-9]{1,10}$/', $bapsId)) {
        return 'BAPS ID must be letters and digits only, max 10 characters';
    }
    return null;
}
