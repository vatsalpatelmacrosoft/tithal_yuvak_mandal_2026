-- ── Dedup existing quiz_participants before adding unique constraints ─────────
-- Remove participant rows with NO submission where a duplicate exists for the same member+quiz.
-- Safe: FK on quiz_submissions prevents deleting any participant that has a submission.

DELETE qp FROM quiz_participants qp
LEFT JOIN quiz_submissions qs ON qs.participant_id = qp.id
INNER JOIN (
    SELECT MIN(id) AS keep_id, quiz_id, yuvak_db_id
    FROM quiz_participants
    WHERE yuvak_db_id IS NOT NULL
    GROUP BY quiz_id, yuvak_db_id
    HAVING COUNT(*) > 1
) AS dupes ON qp.quiz_id = dupes.quiz_id
         AND qp.yuvak_db_id = dupes.yuvak_db_id
         AND qp.id <> dupes.keep_id
WHERE qs.id IS NULL;

DELETE qp FROM quiz_participants qp
LEFT JOIN quiz_submissions qs ON qs.participant_id = qp.id
INNER JOIN (
    SELECT MIN(id) AS keep_id, quiz_id, mo_number
    FROM quiz_participants
    WHERE mo_number IS NOT NULL
    GROUP BY quiz_id, mo_number
    HAVING COUNT(*) > 1
) AS dupes ON qp.quiz_id = dupes.quiz_id
         AND qp.mo_number = dupes.mo_number
         AND qp.id <> dupes.keep_id
WHERE qs.id IS NULL;

-- ── Upgrade regular indexes to UNIQUE constraints ────────────────────────────
-- Drop the regular (non-unique) versions added by migration 008, then re-add as UNIQUE.
-- This gives DB-level race-condition protection when 400+ users hit startQuiz simultaneously.

DROP INDEX idx_qp_quiz_member ON quiz_participants;
ALTER TABLE quiz_participants ADD UNIQUE KEY uq_qp_quiz_member (quiz_id, yuvak_db_id);

DROP INDEX idx_qp_quiz_mobile ON quiz_participants;
ALTER TABLE quiz_participants ADD UNIQUE KEY uq_qp_quiz_mobile (quiz_id, mo_number);
