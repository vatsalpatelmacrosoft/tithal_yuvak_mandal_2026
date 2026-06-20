<?php
// backend/services/NotificationService.php
// Orchestrates: Generate QR → Send WhatsApp message

require_once __DIR__ . '/QrCodeService.php';
require_once __DIR__ . '/SmsService.php';

class NotificationService
{
    private QrCodeService $qr;
    private SmsService    $sms;
    private string        $frontendUrl;

    public function __construct()
    {
        $this->qr          = new QrCodeService();
        $this->sms         = new SmsService();
        $this->frontendUrl = rtrim(getenv('FRONTEND_URL') ?: 'http://localhost:4200', '/');
    }

    private function welcomeLink(string $type, string $uuid): string
    {
        return "{$this->frontendUrl}/welcome/{$type}/{$uuid}";
    }

    /**
     * Called after successful Yuvak registration.
     */
    public function onYuvakRegistered(
        int    $id,
        string $uuid,
        string $yuvakId,
        string $firstName,
        string $lastName,
        string $moNumber,
        string $whatsappNumber = ''
    ): void {
        $sendTo      = $whatsappNumber ?: $moNumber;
        $welcomeLink = $this->welcomeLink('yuvak', $uuid);

        try {
            $this->sms->sendRegistrationMessage(
                $sendTo, "$firstName $lastName", $yuvakId, 'yuvak', $welcomeLink
            );
        } catch (\Throwable $e) {
            error_log("[Notify] WhatsApp send failed for Yuvak $yuvakId: " . $e->getMessage());
        }
    }

    /**
     * Called after successful Yuvati registration.
     */
    public function onYuvatiRegistered(
        int    $id,
        string $uuid,
        string $yuvatiId,
        string $firstName,
        string $lastName,
        string $moNumber,
        string $whatsappNumber = ''
    ): void {
        $sendTo      = $whatsappNumber ?: $moNumber;
        $welcomeLink = $this->welcomeLink('yuvati', $uuid);

        try {
            $this->sms->sendRegistrationMessage(
                $sendTo, "$firstName $lastName", $yuvatiId, 'yuvati', $welcomeLink
            );
        } catch (\Throwable $e) {
            error_log("[Notify] WhatsApp send failed for Yuvati $yuvatiId: " . $e->getMessage());
        }
    }

    /**
     * Re-send welcome message from the admin table. Accepts full member row.
     */
    public function resendWelcome(array $member, string $type): void
    {
        $idField    = $type === 'yuvak' ? 'yuvak_id' : 'yuvati_id';
        $memberId   = $member[$idField];
        $uuid       = $member['uuid'];
        $sendTo      = $member['whatsapp_number'] ?: $member['mo_number'];
        $name        = trim("{$member['first_name']} {$member['last_name']}");
        $welcomeLink = $this->welcomeLink($type, $uuid);

        try {
            $this->sms->sendRegistrationMessage($sendTo, $name, $memberId, $type, $welcomeLink);
        } catch (\Throwable $e) {
            error_log("[Notify] Resend failed for $type $memberId: " . $e->getMessage());
            throw $e;
        }
    }

    /**
     * Get QR URL for a member (used by API endpoint).
     */
    public function getQrUrl(string $uuid, string $memberId, string $type): string
    {
        return $this->qr->generateForMember($uuid, $memberId, $type);
    }
}
