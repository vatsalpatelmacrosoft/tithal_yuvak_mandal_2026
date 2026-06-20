-- ============================================================
-- Migration 003 — Question Types: MCQ, Input, Select, Radio
-- options column already exists from 001; only add question_type
-- and widen correct_answer + selected_answer for text answers
-- ============================================================

ALTER TABLE quiz_questions
    ADD COLUMN question_type ENUM('mcq','input','select','radio') NOT NULL DEFAULT 'mcq'
                             AFTER uuid;

-- Widen correct_answer so it can hold arbitrary text (input type)
ALTER TABLE quiz_questions
    MODIFY COLUMN correct_answer VARCHAR(500) DEFAULT NULL;

-- Widen stored selected answer to match
ALTER TABLE quiz_answers
    MODIFY COLUMN selected_answer VARCHAR(500) DEFAULT NULL;
