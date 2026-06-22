-- Performance indexes for high-concurrency quiz and attendance load

-- attendances: JOINs on (member_type, member_id) used in list, nameWise, export
ALTER TABLE attendances ADD INDEX idx_att_member_type (member_type, member_id);

-- attendances: date-range filter used in every query
ALTER TABLE attendances ADD INDEX idx_att_date_type (attendance_date, member_type);

-- quiz_questions: fetching questions for a quiz (quiz_id + status + order)
ALTER TABLE quiz_questions ADD INDEX idx_qq_quiz_status_order (quiz_id, status, display_order);

-- quiz_participants: duplicate check for registered member (startQuiz)
ALTER TABLE quiz_participants ADD INDEX idx_qp_quiz_member (quiz_id, yuvak_db_id);

-- quiz_participants: duplicate check for external participant by mobile (startQuiz)
ALTER TABLE quiz_participants ADD INDEX idx_qp_quiz_mobile (quiz_id, mo_number);

-- quiz_submissions: duplicate-submission check + count queries
ALTER TABLE quiz_submissions ADD INDEX idx_qs_participant (participant_id);

-- quiz_answers: lookup answers by submission (report queries)
ALTER TABLE quiz_answers ADD INDEX idx_qa_submission (submission_id);
