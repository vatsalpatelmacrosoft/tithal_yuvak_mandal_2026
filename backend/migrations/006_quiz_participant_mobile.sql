-- Migration 006: Add mobile number to quiz_participants for external users
ALTER TABLE quiz_participants
    ADD COLUMN mo_number VARCHAR(15) DEFAULT NULL COMMENT 'Mobile for external participants'
    AFTER gender;
