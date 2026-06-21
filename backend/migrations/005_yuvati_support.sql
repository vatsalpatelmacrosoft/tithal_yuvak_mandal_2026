-- Migration 005: Yuvati support for users and quiz participants

-- Add member_type to quiz_participants
ALTER TABLE quiz_participants
    ADD COLUMN member_type ENUM('yuvak','yuvati') NOT NULL DEFAULT 'yuvak'
    AFTER participant_type;

-- Allow users to be linked to either yuvak or yuvati
ALTER TABLE users
    MODIFY COLUMN yuvak_id INT UNSIGNED NULL DEFAULT NULL,
    ADD COLUMN yuvati_id INT UNSIGNED NULL DEFAULT NULL AFTER yuvak_id,
    ADD COLUMN member_type ENUM('yuvak','yuvati') NOT NULL DEFAULT 'yuvak' AFTER yuvati_id,
    ADD CONSTRAINT fk_user_yuvati FOREIGN KEY (yuvati_id) REFERENCES yuvatis(id);
