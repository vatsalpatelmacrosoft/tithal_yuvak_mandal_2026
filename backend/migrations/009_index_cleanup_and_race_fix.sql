-- ── Dedup existing quiz_participants before adding unique constraints ─────────
-- Remove participant rows with NO submission where a duplicate exists for the same member+quiz.
-- Safe: FK on quiz_submissions prevents deleting any participant that has a submission.

DELETE qp FROM quiz_participants qp
LEFT JOIN quiz_submissions qs ON qs.participant_id = qp.id
WHERE qp.yuvak_db_id IS NOT NULL
  AND qs.id IS NULL
  AND EXISTS (
      SELECT 1 FROM (
          SELECT id FROM quiz_participants qp2
          WHERE qp2.quiz_id     = qp.quiz_id
            AND qp2.yuvak_db_id = qp.yuvak_db_id
            AND qp2.id         <> qp.id
      ) AS dup_check
  );

DELETE qp FROM quiz_participants qp
LEFT JOIN quiz_submissions qs ON qs.participant_id = qp.id
WHERE qp.mo_number IS NOT NULL
  AND qs.id IS NULL
  AND EXISTS (
      SELECT 1 FROM (
          SELECT id FROM quiz_participants qp2
          WHERE qp2.quiz_id   = qp.quiz_id
            AND qp2.mo_number = qp.mo_number
            AND qp2.id       <> qp.id
      ) AS dup_check
  );

-- ── Upgrade regular indexes to UNIQUE constraints ────────────────────────────
-- Drop the regular (non-unique) versions added by migration 008, then re-add as UNIQUE.
-- This gives DB-level race-condition protection when 400+ users hit startQuiz simultaneously.

DROP INDEX idx_qp_quiz_member ON quiz_participants;
ALTER TABLE quiz_participants ADD UNIQUE KEY uq_qp_quiz_member (quiz_id, yuvak_db_id);

DROP INDEX idx_qp_quiz_mobile ON quiz_participants;
ALTER TABLE quiz_participants ADD UNIQUE KEY uq_qp_quiz_mobile (quiz_id, mo_number);
