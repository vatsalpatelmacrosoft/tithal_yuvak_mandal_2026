-- ============================================================
-- Migration 002 — Quiz Extended Schema + Global Settings
-- ============================================================

-- ============================================================
-- GLOBAL SETTINGS
-- ============================================================
CREATE TABLE IF NOT EXISTS global_settings (
    id           INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    uuid         CHAR(36)     NOT NULL DEFAULT (UUID()),
    reg_open     TINYINT(1)   NOT NULL DEFAULT 0
                              COMMENT 'Is public registration open?',
    field_config JSON         NOT NULL
                              COMMENT 'Per-field config: {label, required, max_length}',
    created_by   INT UNSIGNED DEFAULT NULL,
    updated_by   INT UNSIGNED DEFAULT NULL,
    created_at   TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at   TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uq_gs_uuid (uuid)
) ENGINE=InnoDB;

INSERT IGNORE INTO global_settings (id, reg_open, field_config) VALUES (
    1,
    0,
    JSON_OBJECT(
        'name',        JSON_OBJECT('label','Name',        'required',TRUE,  'max_length',100),
        'middle_name', JSON_OBJECT('label','Middle Name', 'required',FALSE, 'max_length',100),
        'last_name',   JSON_OBJECT('label','Last Name',   'required',TRUE,  'max_length',100),
        'xetra_name',  JSON_OBJECT('label','Xetra Name',  'required',FALSE, 'max_length',100),
        'mandal_name', JSON_OBJECT('label','Mandal Name', 'required',FALSE, 'max_length',100),
        'address',     JSON_OBJECT('label','Address',     'required',FALSE, 'max_length',500)
    )
);

-- ============================================================
-- QUIZ: Extended columns
-- ============================================================
ALTER TABLE quizzes
    ADD COLUMN title          VARCHAR(300) DEFAULT NULL        AFTER name,
    ADD COLUMN description    TEXT         DEFAULT NULL        AFTER title,
    ADD COLUMN instructions   TEXT         DEFAULT NULL        AFTER description,
    ADD COLUMN start_datetime DATETIME     DEFAULT NULL        AFTER instructions,
    ADD COLUMN end_datetime   DATETIME     DEFAULT NULL        AFTER start_datetime,
    ADD COLUMN is_active      TINYINT(1)   NOT NULL DEFAULT 1  AFTER end_datetime;

-- ============================================================
-- QUIZ QUESTIONS: Add UUID + MCQ columns
-- ============================================================
ALTER TABLE quiz_questions
    ADD COLUMN uuid           VARCHAR(36)  DEFAULT NULL        AFTER id,
    ADD COLUMN option_a       TEXT         DEFAULT NULL        AFTER title,
    ADD COLUMN option_b       TEXT         DEFAULT NULL        AFTER option_a,
    ADD COLUMN option_c       TEXT         DEFAULT NULL        AFTER option_b,
    ADD COLUMN option_d       TEXT         DEFAULT NULL        AFTER option_c,
    ADD COLUMN correct_answer ENUM('a','b','c','d') DEFAULT NULL AFTER option_d,
    ADD COLUMN marks          DECIMAL(6,2) NOT NULL DEFAULT 1.00 AFTER correct_answer,
    ADD COLUMN display_order  INT          NOT NULL DEFAULT 0  AFTER marks;

UPDATE quiz_questions SET uuid = UUID() WHERE uuid IS NULL OR uuid = '';
ALTER TABLE quiz_questions
    MODIFY COLUMN uuid VARCHAR(36) NOT NULL,
    ADD UNIQUE KEY uq_qq_uuid (uuid);

-- ============================================================
-- QUIZ PARTICIPANTS
-- ============================================================
CREATE TABLE IF NOT EXISTS quiz_participants (
    id               INT UNSIGNED  AUTO_INCREMENT PRIMARY KEY,
    uuid             CHAR(36)      NOT NULL DEFAULT (UUID()),
    quiz_id          INT UNSIGNED  NOT NULL,
    participant_type ENUM('registered','external') NOT NULL DEFAULT 'external',
    yuvak_id         VARCHAR(30)   DEFAULT NULL COMMENT 'Yuvak ID for registered type',
    yuvak_db_id      INT UNSIGNED  DEFAULT NULL COMMENT 'FK to yuvaks.id',
    name             VARCHAR(200)  DEFAULT NULL COMMENT 'Full name for external type',
    gender           ENUM('male','female','other') DEFAULT NULL,
    status           ENUM('active','archive') NOT NULL DEFAULT 'active',
    created_at       TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at       TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uq_qpart_uuid  (uuid),
    KEY idx_qpart_quiz        (quiz_id),
    KEY idx_qpart_yuvak_id    (yuvak_id),
    CONSTRAINT fk_qpart_quiz  FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ============================================================
-- QUIZ SUBMISSIONS
-- ============================================================
CREATE TABLE IF NOT EXISTS quiz_submissions (
    id                  INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    uuid                CHAR(36)     NOT NULL DEFAULT (UUID()),
    quiz_id             INT UNSIGNED NOT NULL,
    participant_id      INT UNSIGNED NOT NULL,
    total_questions     INT          NOT NULL DEFAULT 0,
    attempted_questions INT          NOT NULL DEFAULT 0,
    correct_answers     INT          NOT NULL DEFAULT 0,
    incorrect_answers   INT          NOT NULL DEFAULT 0,
    score               DECIMAL(8,2) NOT NULL DEFAULT 0.00,
    total_marks         DECIMAL(8,2) NOT NULL DEFAULT 0.00,
    percentage          DECIMAL(5,2) NOT NULL DEFAULT 0.00,
    submitted_at        TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uq_qsub_uuid        (uuid),
    UNIQUE KEY uq_qsub_participant (participant_id),
    KEY idx_qsub_quiz              (quiz_id),
    CONSTRAINT fk_qsub_quiz        FOREIGN KEY (quiz_id)        REFERENCES quizzes(id),
    CONSTRAINT fk_qsub_participant FOREIGN KEY (participant_id) REFERENCES quiz_participants(id)
) ENGINE=InnoDB;

-- ============================================================
-- QUIZ ANSWERS
-- ============================================================
CREATE TABLE IF NOT EXISTS quiz_answers (
    id              INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    submission_id   INT UNSIGNED NOT NULL,
    question_id     INT UNSIGNED NOT NULL,
    selected_answer VARCHAR(10)  DEFAULT NULL COMMENT 'a, b, c, or d',
    is_correct      TINYINT(1)   NOT NULL DEFAULT 0,
    marks_obtained  DECIMAL(6,2) NOT NULL DEFAULT 0.00,
    KEY idx_qans_submission (submission_id),
    KEY idx_qans_question   (question_id),
    CONSTRAINT fk_qans_submission FOREIGN KEY (submission_id) REFERENCES quiz_submissions(id) ON DELETE CASCADE,
    CONSTRAINT fk_qans_question   FOREIGN KEY (question_id)   REFERENCES quiz_questions(id)
) ENGINE=InnoDB;

-- ============================================================
-- SEED: Settings + Reports menus
-- ============================================================
INSERT IGNORE INTO menus (name, slug, icon, sort_order) VALUES
('Settings', 'settings', 'pi-cog',        11),
('Reports',  'reports',  'pi-chart-bar',  12);
