<?php
// backend/services/WhatsAppService.php
// Sends WhatsApp messages via Meta Cloud API (or Twilio as fallback).
// Configure provider in .env: WHATSAPP_PROVIDER=meta|twilio

class WhatsAppService
{
    private string $provider;
    private string $token;
    private string $phoneId;      // Meta: Phone-Number-ID
    private string $accountSid;   // Twilio
    private string $authToken;    // Twilio
    private string $fromNumber;   // Twilio

    public function __construct()
    {
        $this->provider = getenv('WHATSAPP_PROVIDER') ?: 'meta';
        $this->token = getenv('META_WHATSAPP_TOKEN') ?: '';
        $this->phoneId = getenv('META_PHONE_NUMBER_ID') ?: '';
        $this->accountSid = getenv('TWILIO_ACCOUNT_SID') ?: '';
        $this->authToken = getenv('TWILIO_AUTH_TOKEN') ?: '';
        $this->fromNumber = getenv('TWILIO_WHATSAPP_FROM') ?: '';
    }

    /**
     * Send registration success message with QR attachment URL.
     *
     * @param string $to          E.164 mobile, e.g. 919876543210
     * @param string $memberName  Full name
     * @param string $memberId    YUVAK/YUVATI ID string
     * @param string $memberType  'yuvak' | 'yuvati'
     * @param string $qrUrl       Publicly accessible URL to the QR code image
     */
    public function sendRegistrationMessage(
        string $to,
        string $memberName,
        string $memberId,
        string $memberType,
        string $qrUrl,
        string $welcomeLink = ''
    ): bool {
        $to   = $this->normalizePhone($to);
        $text = $this->buildRegistrationText($memberName, $memberId, $memberType, $welcomeLink);

        return match ($this->provider) {
            'meta'   => $this->sendViaMeta($to, $text, $qrUrl),
            'twilio' => $this->sendViaTwilio($to, $text, $qrUrl),
            default  => $this->logFallback($to, $text),
        };
    }

    // ── Meta Cloud API ─────────────────────────────────────────
    private function sendViaMeta(string $to, string $text, string $qrUrl): bool
    {
        $url = "https://graph.facebook.com/v19.0/{$this->phoneId}/messages";
        $body = [
            'messaging_product' => 'whatsapp',
            'to' => $to,
            'type' => 'image',
            'image' => ['link' => $qrUrl, 'caption' => $text],
        ];

        return $this->httpPost($url, $body, [
            "Authorization: Bearer {$this->token}",
            'Content-Type: application/json',
        ]);
    }

    // ── Twilio ─────────────────────────────────────────────────
    private function sendViaTwilio(string $to, string $text, string $qrUrl): bool
    {
        $url = "https://api.twilio.com/2010-04-01/Accounts/{$this->accountSid}/Messages.json";
        $body = http_build_query([
            'From' => "whatsapp:{$this->fromNumber}",
            'To' => "whatsapp:+{$to}",
            'Body' => $text,
            'MediaUrl' => $qrUrl,
        ]);

        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $body,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_USERPWD => "{$this->accountSid}:{$this->authToken}",
        ]);
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($httpCode >= 400) {
            error_log("[WhatsApp/Twilio] Error $httpCode: $response");
            return false;
        }
        return true;
    }

    // ── Dev fallback (log only) ────────────────────────────────
    private function logFallback(string $to, string $text): bool
    {
        error_log("[WhatsApp/DEV] To: $to | Message: $text");
        return true; // return true so registration still succeeds
    }

    private function httpPost(string $url, array $body, array $headers): bool
    {
        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => json_encode($body),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HTTPHEADER => $headers,
        ]);
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($httpCode >= 400) {
            error_log("[WhatsApp/Meta] Error $httpCode: $response");
            return false;
        }
        return true;
    }

    private function buildRegistrationText(string $name, string $id, string $type, string $welcomeLink = ''): string
    {
        $label   = strtoupper($type);
        $linkLine = $welcomeLink
            ? "\n🔗 *Your profile & QR code:*\n{$welcomeLink}\n"
            : '';
        return <<<TEXT
🕉️ *TDD Samaj – Registration Successful!*

Jai Swaminarayan, *{$name}*!

Your *{$label} ID* is:
📛 `{$id}`
{$linkLine}
Please save this ID for future reference.
Your personal QR code is attached – show it at the gate for attendance.

_Tithal Mandir System_
TEXT;
    }

    private function normalizePhone(string $phone): string
    {
        $phone = preg_replace('/\D/', '', $phone);
        // If 10 digits assume India (+91)
        if (strlen($phone) === 10)
            $phone = '91' . $phone;
        return $phone;
    }
}
