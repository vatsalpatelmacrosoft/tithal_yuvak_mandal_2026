-- ============================================================
-- MESSAGE CENTER (WhatsApp click-to-chat campaigns)
-- ============================================================
CREATE TABLE IF NOT EXISTS message_campaigns (
    id                 INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    uuid               CHAR(36)      NOT NULL,
    subject            VARCHAR(200)  NOT NULL,
    message_body       MEDIUMTEXT    NOT NULL,
    target_type        ENUM('yuvak','yuvati','both') NOT NULL,
    scope              ENUM('all','xetra','mandal','individual') NOT NULL,
    scope_filters      JSON          DEFAULT NULL,
    total_recipients   INT UNSIGNED  NOT NULL DEFAULT 0,
    sent_count         INT UNSIGNED  NOT NULL DEFAULT 0,
    yuvak_sent_count   INT UNSIGNED  NOT NULL DEFAULT 0,
    yuvati_sent_count  INT UNSIGNED  NOT NULL DEFAULT 0,
    skipped_count      INT UNSIGNED  NOT NULL DEFAULT 0,
    created_by         INT UNSIGNED  NOT NULL,
    created_at         TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uq_msgcamp_uuid (uuid),
    KEY idx_msgcamp_created (created_at),
    CONSTRAINT fk_msgcamp_user FOREIGN KEY (created_by) REFERENCES users(id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS message_recipients (
    id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    campaign_id   INT UNSIGNED NOT NULL,
    member_type   ENUM('yuvak','yuvati') NOT NULL,
    member_id     INT UNSIGNED NOT NULL,
    member_uuid   CHAR(36)     NOT NULL,
    full_name     VARCHAR(180) NOT NULL,
    used_number   VARCHAR(10)  DEFAULT NULL,
    number_source ENUM('whatsapp','mobile') DEFAULT NULL,
    status        ENUM('pending','sent','skipped','failed') NOT NULL DEFAULT 'pending',
    skip_reason   VARCHAR(100) DEFAULT NULL,
    sent_at       TIMESTAMP    NULL,
    created_at    TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    KEY idx_msgrec_campaign (campaign_id),
    CONSTRAINT fk_msgrec_campaign FOREIGN KEY (campaign_id) REFERENCES message_campaigns(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ============================================================
-- SEED: Send Message menu
-- ============================================================
INSERT IGNORE INTO menus (name, slug, icon, sort_order) VALUES
('Send Message', 'messages', 'pi-whatsapp', 11);
