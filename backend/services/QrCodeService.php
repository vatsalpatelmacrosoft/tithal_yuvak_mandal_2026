<?php
// backend/services/QrCodeService.php
// Generates QR codes as PNG images using endroid/qr-code (or fallback API).
// Install: composer require endroid/qr-code
// OR uses free external API as fallback (no composer needed).

class QrCodeService
{
    private string $storageDir;
    private string $baseUrl;

    public function __construct()
    {
        $this->storageDir = __DIR__ . '/../storage/qr/';
        $this->baseUrl    = rtrim(getenv('APP_URL') ?: 'http://localhost:8000', '/') . '/storage/qr/';

        if (!is_dir($this->storageDir)) {
            mkdir($this->storageDir, 0755, true);
        }
    }

    /**
     * Generate QR code for a member UUID and save to storage.
     * Returns the public URL to the QR image.
     */
    public function generateForMember(string $uuid, string $memberId, string $type): string
    {
        $filename = "{$type}_{$uuid}.png";
        $filepath = $this->storageDir . $filename;

        // QR content: UUID for scanner lookup
        $content = $uuid;

        if (file_exists($filepath)) {
            return $this->baseUrl . $filename;
        }

        // Try composer library first, fallback to API
        if ($this->tryGenerateWithLibrary($content, $filepath)) {
            return $this->baseUrl . $filename;
        }

        return $this->generateViaApi($content);
    }

    /**
     * Regenerate (force overwrite) QR for a member.
     */
    public function regenerate(string $uuid, string $memberId, string $type): string
    {
        $filename = "{$type}_{$uuid}.png";
        $filepath = $this->storageDir . $filename;
        if (file_exists($filepath)) unlink($filepath);
        return $this->generateForMember($uuid, $memberId, $type);
    }

    // ── endroid/qr-code (composer) ─────────────────────────────
    private function tryGenerateWithLibrary(string $content, string $filepath): bool
    {
        if (!class_exists('\\Endroid\\QrCode\\QrCode')) return false;

        try {
            $qr = \Endroid\QrCode\QrCode::create($content)
                ->setSize(300)
                ->setMargin(10);

            $writer = new \Endroid\QrCode\Writer\PngWriter();
            $result = $writer->write($qr);
            $result->saveToFile($filepath);
            return true;
        } catch (\Throwable $e) {
            error_log("[QR] Library error: " . $e->getMessage());
            return false;
        }
    }

    // ── Free QR API fallback (no composer needed) ──────────────
    private function generateViaApi(string $content): string
    {
        $encoded = urlencode($content);
        // Returns direct URL to Google Charts QR API
        return "https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl={$encoded}&choe=UTF-8";
    }
}
