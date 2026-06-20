<?php
// backend/services/SmsService.php
// Sends plain SMS via Fast2SMS (India) or logs to error_log for dev.
// Set SMS_PROVIDER=fast2sms and FAST2SMS_API_KEY=<key> in .env

class SmsService
{
    private string $provider;
    private string $fast2smsKey;

    public function __construct()
    {
        $this->provider     = getenv('SMS_PROVIDER') ?: 'log';
        $this->fast2smsKey  = getenv('FAST2SMS_API_KEY') ?: '';
    }

    public function sendRegistrationMessage(
        string $to,
        string $memberName,
        string $memberId,
        string $memberType,
        string $welcomeLink = ''
    ): bool {
        $to   = $this->normalizePhone($to);
        $text = $this->buildText($memberName, $memberId, $memberType, $welcomeLink);

        return match ($this->provider) {
            'fast2sms' => $this->sendViaFast2Sms($to, $text),
            default    => $this->logFallback($to, $text),
        };
    }

    // ── Fast2SMS ──────────────────────────────────────────────
    private function sendViaFast2Sms(string $to, string $text): bool
    {
        $url  = 'https://www.fast2sms.com/dev/bulkV2';
        $body = json_encode([
            'route'   => 'q',
            'message' => $text,
            'flash'   => 0,
            'numbers' => $to,
        ]);

        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_POST           => true,
            CURLOPT_POSTFIELDS     => $body,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HTTPHEADER     => [
                'authorization: ' . $this->fast2smsKey,
                'Content-Type: application/json',
            ],
        ]);
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

        if ($httpCode >= 400) {
            error_log("[SMS/Fast2SMS] Error $httpCode: $response");
            return false;
        }

        $json = json_decode($response, true);
        if (empty($json['return'])) {
            error_log("[SMS/Fast2SMS] Failed: $response");
            return false;
        }

        return true;
    }

    // ── Dev fallback ──────────────────────────────────────────
    private function logFallback(string $to, string $text): bool
    {
        error_log("[SMS/DEV] To: $to | Message: $text");
        return true;
    }

    private function buildText(string $name, string $id, string $type, string $welcomeLink = ''): string
    {
        $label    = strtoupper($type);
        $linkLine = $welcomeLink ? " Profile & QR: $welcomeLink" : '';
        return "Tithal Yuvak Mandal: Jai Swaminarayan $name! Registration successful. "
             . "$label ID: $id.$linkLine Show ID at gate for attendance.";
    }

    private function normalizePhone(string $phone): string
    {
        $phone = preg_replace('/\D/', '', $phone);
        // Strip country code — Fast2SMS expects 10-digit Indian numbers
        if (strlen($phone) === 12 && str_starts_with($phone, '91'))
            $phone = substr($phone, 2);
        elseif (strlen($phone) === 13 && str_starts_with($phone, '091'))
            $phone = substr($phone, 3);
        return $phone;
    }
}
