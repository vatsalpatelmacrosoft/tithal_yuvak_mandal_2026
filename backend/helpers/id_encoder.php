<?php
// backend/helpers/id_encoder.php
// Converts numeric ID to/from alphanumeric encoded string for YUVAK IDs

define('ID_ALPHABET', 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'); // 32 chars, no confusables
define('ID_MIN_LEN', 3);

function encodeId(int $id): string
{
    $base   = strlen(ID_ALPHABET);
    $result = '';
    while ($id > 0) {
        $result = ID_ALPHABET[$id % $base] . $result;
        $id     = intdiv($id, $base);
    }
    // Pad to minimum length
    while (strlen($result) < ID_MIN_LEN) {
        $result = ID_ALPHABET[0] . $result;
    }
    return $result;
}

function decodeId(string $encoded): int
{
    $base   = strlen(ID_ALPHABET);
    $id     = 0;
    $alphaFlipped = array_flip(str_split(ID_ALPHABET));
    foreach (str_split($encoded) as $char) {
        $id = $id * $base + ($alphaFlipped[$char] ?? 0);
    }
    return $id;
}

/**
 * Build YUVAK ID: YUVAK + XetraCode + EncryptedId
 * Example: YUVAKPUN001 -> YUVAK (static) + PUN (xetra code) + 001 (encoded id)
 */
function buildYuvakId(int $id, string $xetraCode): string
{
    return 'YUVAK' . strtoupper($xetraCode) . encodeId($id);
}

function buildYuvatiId(int $id, string $xetraCode): string
{
    return 'YUVATI' . strtoupper($xetraCode) . encodeId($id);
}
