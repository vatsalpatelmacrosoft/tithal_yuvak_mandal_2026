-- ============================================================
-- Auto-migration supported via migration runner
-- Database is configured via .env (DB_NAME)
-- ============================================================

-- ============================================================
-- XETRA (must exist before yuvak/yuvati)
-- ============================================================
CREATE TABLE IF NOT EXISTS xetras (
    id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    uuid        CHAR(36)     NOT NULL DEFAULT (UUID()),
    name        VARCHAR(100) NOT NULL,
    code        VARCHAR(20)  NOT NULL,
    status      ENUM('active','archive') NOT NULL DEFAULT 'active',
    created_at  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uq_xetra_name (name),
    UNIQUE KEY uq_xetra_code (code)
) ENGINE=InnoDB;

-- ============================================================
-- MANDAL
-- ============================================================
CREATE TABLE IF NOT EXISTS mandals (
    id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    uuid        CHAR(36)     NOT NULL DEFAULT (UUID()),
    name        VARCHAR(100) NOT NULL,
    code        VARCHAR(20)  NOT NULL,
    status      ENUM('active','archive') NOT NULL DEFAULT 'active',
    created_at  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uq_mandal_name (name),
    UNIQUE KEY uq_mandal_code (code)
) ENGINE=InnoDB;

-- ============================================================
-- YUVAK
-- ============================================================
CREATE TABLE IF NOT EXISTS yuvaks (
    id              INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    uuid            CHAR(36)      NOT NULL DEFAULT (UUID()),
    yuvak_id        VARCHAR(30)   NOT NULL COMMENT 'Format: YUVAK{XetraCode}{EncryptedId}',
    first_name      VARCHAR(60)   NOT NULL,
    middle_name     VARCHAR(60)   DEFAULT NULL,
    last_name       VARCHAR(60)   NOT NULL,
    mo_number       VARCHAR(15)   NOT NULL,
    whatsapp_number VARCHAR(15)   DEFAULT NULL,
    email           VARCHAR(120)  DEFAULT NULL,
    address         TEXT          DEFAULT NULL,
    xetra_id        INT UNSIGNED  NOT NULL,
    mandal_id       INT UNSIGNED  NOT NULL,
    is_karyakar     ENUM('no','bal','yuva','sanyukta') NOT NULL DEFAULT 'no',
    tags            JSON          DEFAULT NULL,
    status          ENUM('active','archive') NOT NULL DEFAULT 'active',
    created_at      TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uq_yuvak_mo    (mo_number),
    UNIQUE KEY uq_yuvak_yid   (yuvak_id),
    UNIQUE KEY uq_yuvak_uuid  (uuid),
    KEY idx_yuvak_xetra  (xetra_id),
    KEY idx_yuvak_mandal (mandal_id),
    KEY idx_yuvak_status (status),
    CONSTRAINT fk_yuvak_xetra  FOREIGN KEY (xetra_id)  REFERENCES xetras(id),
    CONSTRAINT fk_yuvak_mandal FOREIGN KEY (mandal_id) REFERENCES mandals(id)
) ENGINE=InnoDB;

-- ============================================================
-- YUVATI
-- ============================================================
CREATE TABLE IF NOT EXISTS yuvatis (
    id              INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    uuid            CHAR(36)      NOT NULL DEFAULT (UUID()),
    yuvati_id       VARCHAR(30)   NOT NULL COMMENT 'Format: YUVATI{XetraCode}{EncryptedId}',
    first_name      VARCHAR(60)   NOT NULL,
    middle_name     VARCHAR(60)   DEFAULT NULL,
    last_name       VARCHAR(60)   NOT NULL,
    mo_number       VARCHAR(15)   NOT NULL,
    whatsapp_number VARCHAR(15)   DEFAULT NULL,
    email           VARCHAR(120)  DEFAULT NULL,
    address         TEXT          DEFAULT NULL,
    xetra_id        INT UNSIGNED  NOT NULL,
    mandal_id       INT UNSIGNED  NOT NULL,
    is_karyakar     ENUM('no','bal','yuva','sanyukta') NOT NULL DEFAULT 'no',
    tags            JSON          DEFAULT NULL,
    status          ENUM('active','archive') NOT NULL DEFAULT 'active',
    created_at      TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uq_yuvati_mo   (mo_number),
    UNIQUE KEY uq_yuvati_yid  (yuvati_id),
    UNIQUE KEY uq_yuvati_uuid (uuid),
    KEY idx_yuvati_xetra  (xetra_id),
    KEY idx_yuvati_mandal (mandal_id),
    KEY idx_yuvati_status (status),
    CONSTRAINT fk_yuvati_xetra  FOREIGN KEY (xetra_id)  REFERENCES xetras(id),
    CONSTRAINT fk_yuvati_mandal FOREIGN KEY (mandal_id) REFERENCES mandals(id)
) ENGINE=InnoDB;

-- ============================================================
-- ROLES
-- ============================================================
CREATE TABLE IF NOT EXISTS roles (
    id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    uuid       CHAR(36)     NOT NULL DEFAULT (UUID()),
    name       VARCHAR(60)  NOT NULL,
    code       VARCHAR(30)  NOT NULL,
    status     ENUM('active','archive') NOT NULL DEFAULT 'active',
    created_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uq_role_name (name),
    UNIQUE KEY uq_role_code (code)
) ENGINE=InnoDB;

-- ============================================================
-- MENUS (seeded, not user-managed)
-- ============================================================
CREATE TABLE IF NOT EXISTS menus (
    id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name       VARCHAR(60)  NOT NULL,
    slug       VARCHAR(60)  NOT NULL,
    icon       VARCHAR(60)  DEFAULT NULL,
    sort_order TINYINT      NOT NULL DEFAULT 0,
    UNIQUE KEY uq_menu_slug (slug)
) ENGINE=InnoDB;

-- ============================================================
-- PERMISSIONS
-- ============================================================
CREATE TABLE IF NOT EXISTS permissions (
    id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    role_id    INT UNSIGNED NOT NULL,
    menu_id    INT UNSIGNED NOT NULL,
    can_view   TINYINT(1)   NOT NULL DEFAULT 0,
    can_create TINYINT(1)   NOT NULL DEFAULT 0,
    can_update TINYINT(1)   NOT NULL DEFAULT 0,
    can_delete TINYINT(1)   NOT NULL DEFAULT 0,
    UNIQUE KEY uq_perm_role_menu (role_id, menu_id),
    CONSTRAINT fk_perm_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
    CONSTRAINT fk_perm_menu FOREIGN KEY (menu_id) REFERENCES menus(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ============================================================
-- USERS (linked to yuvak)
-- ============================================================
CREATE TABLE IF NOT EXISTS users (
    id           INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    uuid         CHAR(36)     NOT NULL DEFAULT (UUID()),
    yuvak_id     INT UNSIGNED NOT NULL,
    role_id      INT UNSIGNED NOT NULL,
    mo_number    VARCHAR(15)  NOT NULL,
    password     VARCHAR(255) NOT NULL COMMENT 'bcrypt hash',
    status       ENUM('active','archive') NOT NULL DEFAULT 'active',
    last_login   TIMESTAMP    NULL,
    created_at   TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at   TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uq_user_mo   (mo_number),
    UNIQUE KEY uq_user_uuid (uuid),
    CONSTRAINT fk_user_yuvak FOREIGN KEY (yuvak_id) REFERENCES yuvaks(id),
    CONSTRAINT fk_user_role  FOREIGN KEY (role_id)  REFERENCES roles(id)
) ENGINE=InnoDB;

-- ============================================================
-- PASSWORD RESET TOKENS
-- ============================================================
CREATE TABLE IF NOT EXISTS password_resets (
    id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    mo_number  VARCHAR(15)  NOT NULL,
    token      VARCHAR(64)  NOT NULL,
    expires_at TIMESTAMP    NOT NULL,
    used       TINYINT(1)   NOT NULL DEFAULT 0,
    created_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    KEY idx_pr_token (token),
    KEY idx_pr_mo    (mo_number)
) ENGINE=InnoDB;

-- ============================================================
-- SHIBIR
-- ============================================================
CREATE TABLE IF NOT EXISTS shibirs (
    id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    uuid       CHAR(36)     NOT NULL DEFAULT (UUID()),
    name       VARCHAR(150) NOT NULL,
    date       DATE         NOT NULL,
    slug       VARCHAR(200) NOT NULL,
    status     ENUM('active','archive') NOT NULL DEFAULT 'active',
    created_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uq_shibir_slug (slug)
) ENGINE=InnoDB;

-- ============================================================
-- QUIZ
-- ============================================================
CREATE TABLE IF NOT EXISTS quizzes (
    id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    uuid        CHAR(36)     NOT NULL DEFAULT (UUID()),
    name        VARCHAR(150) NOT NULL,
    slug        VARCHAR(200) NOT NULL,
    quiz_status ENUM('draft','published','deleted') NOT NULL DEFAULT 'draft',
    status      ENUM('active','archive') NOT NULL DEFAULT 'active',
    created_at  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uq_quiz_slug (slug)
) ENGINE=InnoDB;

-- ============================================================
-- QUIZ QUESTIONS (dynamic form)
-- ============================================================
CREATE TABLE IF NOT EXISTS quiz_questions (
    id           INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    quiz_id      INT UNSIGNED NOT NULL,
    title        VARCHAR(300) NOT NULL,
    field_type   ENUM('text','number','radio','checkbox','select') NOT NULL,
    options      JSON         DEFAULT NULL COMMENT 'For radio/checkbox/select',
    is_required  TINYINT(1)   NOT NULL DEFAULT 0,
    sort_order   INT          NOT NULL DEFAULT 0,
    status       ENUM('active','archive') NOT NULL DEFAULT 'active',
    created_at   TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_qq_quiz FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ============================================================
-- QUIZ RESPONSES (public submissions)
-- ============================================================
CREATE TABLE IF NOT EXISTS quiz_responses (
    id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    quiz_id       INT UNSIGNED NOT NULL,
    respondent_type ENUM('yuvak','yuvati','guest') NOT NULL DEFAULT 'guest',
    respondent_id INT UNSIGNED DEFAULT NULL,
    answers       JSON         NOT NULL,
    submitted_at  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_qr_quiz FOREIGN KEY (quiz_id) REFERENCES quizzes(id)
) ENGINE=InnoDB;

-- ============================================================
-- ATTENDANCE
-- ============================================================
CREATE TABLE IF NOT EXISTS attendances (
    id             INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    attendance_date DATE         NOT NULL,
    member_type    ENUM('yuvak','yuvati') NOT NULL,
    member_id      INT UNSIGNED NOT NULL,
    shibir_id      INT UNSIGNED DEFAULT NULL,
    scanned_by     INT UNSIGNED DEFAULT NULL COMMENT 'user_id who scanned',
    created_at     TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uq_att_date_member (attendance_date, member_type, member_id),
    KEY idx_att_date   (attendance_date),
    KEY idx_att_type   (member_type),
    KEY idx_att_shibir (shibir_id),
    CONSTRAINT fk_att_shibir FOREIGN KEY (shibir_id) REFERENCES shibirs(id)
) ENGINE=InnoDB;

-- ============================================================
-- PUBLIC REGISTRATION FORMS (Yuvak/Yuvati public)
-- ============================================================
CREATE TABLE IF NOT EXISTS public_forms (
    id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    form_type  ENUM('yuvak','yuvati') NOT NULL,
    is_active  TINYINT(1)   NOT NULL DEFAULT 0,
    updated_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uq_pf_type (form_type)
) ENGINE=InnoDB;

-- ============================================================
-- MIGRATIONS TRACKING TABLE
-- ============================================================
CREATE TABLE IF NOT EXISTS migrations (
    id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    filename   VARCHAR(200) NOT NULL,
    ran_at     TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uq_migration_file (filename)
) ENGINE=InnoDB;

-- ============================================================
-- SEED: Menus
-- ============================================================
INSERT IGNORE INTO menus (name, slug, icon, sort_order) VALUES
('Dashboard',  'dashboard',  'dashboard',  1),
('Yuvak',      'yuvak',      'person',     2),
('Yuvati',     'yuvati',     'person',     3),
('Xetra',      'xetra',      'map',        4),
('Mandal',     'mandal',     'group',      5),
('Users',      'users',      'manage_accounts', 6),
('Roles',      'roles',      'badge',      7),
('Shibir',     'shibir',     'event',      8),
('Quiz',       'quiz',       'quiz',       9),
('Attendance', 'attendance', 'fact_check', 10);

-- ============================================================
-- SEED: Super Admin Role
-- ============================================================
INSERT IGNORE INTO roles (name, code) VALUES ('Super Admin', 'SUPER_ADMIN');

-- ============================================================
-- SEED: Public form defaults
-- ============================================================
INSERT IGNORE INTO public_forms (form_type, is_active) VALUES ('yuvak', 0), ('yuvati', 0);
