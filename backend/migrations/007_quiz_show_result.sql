-- 007_quiz_show_result.sql
-- Add show_result flag to quizzes: 1 = show full score after submit, 0 = show thank-you message only
ALTER TABLE quizzes
    ADD COLUMN show_result TINYINT(1) NOT NULL DEFAULT 1 COMMENT '1=show result, 0=show thank-you' AFTER is_active;
