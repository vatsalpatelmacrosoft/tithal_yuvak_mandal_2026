<?php
// backend/controllers/ReportController.php

class ReportController
{
    public function __construct(private PDO $pdo) {}

    // GET /api/reports/quiz-wise
    public function quizWise(): void
    {
        $stmt = $this->pdo->query("
            SELECT
                q.uuid, q.title, q.name, q.is_active, q.quiz_status,
                q.start_datetime, q.end_datetime,
                COUNT(DISTINCT qp.id)                                          AS total_participants,
                COUNT(DISTINCT qs.id)                                          AS total_completed,
                COUNT(DISTINCT qp.id) - COUNT(DISTINCT qs.id)                 AS total_incomplete,
                COALESCE(MAX(qs.percentage), 0)                                AS highest_score,
                COALESCE(MIN(qs.percentage), 0)                                AS lowest_score,
                COALESCE(ROUND(AVG(qs.percentage), 2), 0)                     AS average_score,
                COALESCE(
                    ROUND(SUM(qs.percentage >= 40) / NULLIF(COUNT(qs.id),0) * 100, 2),
                    0
                )                                                               AS pass_percentage,
                (SELECT COUNT(*) FROM quiz_questions qq
                 WHERE qq.quiz_id=q.id AND qq.status='active')                 AS question_count
            FROM quizzes q
            LEFT JOIN quiz_participants qp ON qp.quiz_id = q.id AND qp.status='active'
            LEFT JOIN quiz_submissions  qs ON qs.participant_id = qp.id
            WHERE q.status='active'
            GROUP BY q.id
            ORDER BY q.created_at DESC
        ");
        sendSuccess($stmt->fetchAll());
    }

    // GET /api/reports/participant-wise?quiz_uuid=X
    public function participantWise(string $quizUuid): void
    {
        $quiz = $this->findQuiz($quizUuid);

        $stmt = $this->pdo->prepare("
            SELECT
                qp.uuid AS participant_uuid,
                qp.participant_type,
                qp.yuvak_id,
                qp.name,
                qp.gender,
                qs.score,
                qs.total_marks,
                qs.percentage,
                qs.total_questions,
                qs.attempted_questions,
                qs.correct_answers,
                qs.incorrect_answers,
                qs.submitted_at,
                q.title AS quiz_title
            FROM quiz_participants qp
            JOIN quizzes q ON q.id = qp.quiz_id
            LEFT JOIN quiz_submissions qs ON qs.participant_id = qp.id
            WHERE qp.quiz_id=? AND qp.status='active'
            ORDER BY qs.percentage DESC, qp.created_at DESC
        ");
        $stmt->execute([$quiz['id']]);
        sendSuccess($stmt->fetchAll());
    }

    // GET /api/reports/question-wise?quiz_uuid=X
    public function questionWise(string $quizUuid): void
    {
        $quiz = $this->findQuiz($quizUuid);

        $stmt = $this->pdo->prepare("
            SELECT
                qq.uuid,
                qq.title,
                qq.option_a, qq.option_b, qq.option_c, qq.option_d,
                qq.correct_answer,
                qq.marks,
                qq.display_order,
                COUNT(qa.id)                                         AS total_responses,
                SUM(qa.is_correct)                                   AS correct_responses,
                COUNT(qa.id) - SUM(qa.is_correct)                   AS incorrect_responses,
                COALESCE(
                    ROUND(SUM(qa.is_correct)/NULLIF(COUNT(qa.id),0)*100, 2),
                    0
                )                                                     AS accuracy_percentage
            FROM quiz_questions qq
            LEFT JOIN quiz_answers qa ON qa.question_id = qq.id
            WHERE qq.quiz_id=? AND qq.status='active'
            GROUP BY qq.id
            ORDER BY qq.display_order ASC
        ");
        $stmt->execute([$quiz['id']]);
        sendSuccess($stmt->fetchAll());
    }

    // GET /api/reports/gender-wise?quiz_uuid=X
    public function genderWise(string $quizUuid): void
    {
        $quiz = $this->findQuiz($quizUuid);

        $stmt = $this->pdo->prepare("
            SELECT
                qp.gender,
                COUNT(qp.id)                       AS total_participants,
                COALESCE(MAX(qs.percentage),  0)   AS highest_score,
                COALESCE(AVG(qs.percentage),  0)   AS average_score,
                COALESCE(MIN(qs.percentage),  0)   AS lowest_score
            FROM quiz_participants qp
            LEFT JOIN quiz_submissions qs ON qs.participant_id = qp.id
            WHERE qp.quiz_id=? AND qp.status='active'
            GROUP BY qp.gender
        ");
        $stmt->execute([$quiz['id']]);
        $summary = $stmt->fetchAll();

        $details = $this->pdo->prepare("
            SELECT
                qp.uuid AS participant_uuid,
                qp.participant_type,
                qp.yuvak_id,
                qp.name,
                qp.gender,
                qs.score,
                qs.total_marks,
                qs.percentage
            FROM quiz_participants qp
            LEFT JOIN quiz_submissions qs ON qs.participant_id = qp.id
            WHERE qp.quiz_id=? AND qp.status='active'
            ORDER BY qp.gender, qs.percentage DESC
        ");
        $details->execute([$quiz['id']]);
        $rows = $details->fetchAll();

        $byGender = ['male' => [], 'female' => [], 'other' => [], 'unknown' => []];
        foreach ($rows as $r) {
            $g = $r['gender'] ?? 'unknown';
            $byGender[$g][] = $r;
        }

        sendSuccess(['summary' => $summary, 'details' => $byGender]);
    }

    // GET /api/reports/export?type=X&quiz_uuid=Y&format=csv
    public function export(string $type, string $quizUuid, string $format = 'csv'): void
    {
        switch ($type) {
            case 'quiz-wise':
                $this->exportQuizWise();
                break;
            case 'participant-wise':
                $this->exportParticipantWise($quizUuid);
                break;
            case 'question-wise':
                $this->exportQuestionWise($quizUuid);
                break;
            case 'gender-wise':
                $this->exportGenderWise($quizUuid);
                break;
            default:
                sendError(400, 'Invalid export type');
        }
    }

    private function exportQuizWise(): void
    {
        $stmt = $this->pdo->query("
            SELECT q.title, q.quiz_status,
                   IF(q.is_active,1,0) AS is_active,
                   COUNT(DISTINCT qp.id) AS total_participants,
                   COUNT(DISTINCT qs.id) AS total_completed,
                   COALESCE(MAX(qs.percentage),0) AS highest_score,
                   COALESCE(MIN(qs.percentage),0) AS lowest_score,
                   COALESCE(ROUND(AVG(qs.percentage),2),0) AS average_score
            FROM quizzes q
            LEFT JOIN quiz_participants qp ON qp.quiz_id=q.id AND qp.status='active'
            LEFT JOIN quiz_submissions qs ON qs.participant_id=qp.id
            WHERE q.status='active'
            GROUP BY q.id ORDER BY q.created_at DESC
        ");
        $rows = $stmt->fetchAll();
        $headers = ['Quiz Title','Status','Active','Total Participants','Completed','Highest %','Lowest %','Average %'];
        $this->outputCsv('quiz-wise-report', $headers, $rows);
    }

    private function exportParticipantWise(string $quizUuid): void
    {
        $quiz = $this->findQuiz($quizUuid);
        $stmt = $this->pdo->prepare("
            SELECT qp.participant_type, qp.yuvak_id, qp.name, qp.gender,
                   qs.score, qs.total_marks, qs.percentage,
                   qs.correct_answers, qs.incorrect_answers, qs.submitted_at
            FROM quiz_participants qp
            LEFT JOIN quiz_submissions qs ON qs.participant_id=qp.id
            WHERE qp.quiz_id=? AND qp.status='active'
            ORDER BY qs.percentage DESC
        ");
        $stmt->execute([$quiz['id']]);
        $headers = ['Type','Yuvak ID','Name','Gender','Score','Total Marks','Percentage %','Correct','Incorrect','Submitted At'];
        $this->outputCsv('participant-report', $headers, $stmt->fetchAll());
    }

    private function exportQuestionWise(string $quizUuid): void
    {
        $quiz = $this->findQuiz($quizUuid);
        $stmt = $this->pdo->prepare("
            SELECT qq.title, qq.correct_answer, qq.marks,
                   COUNT(qa.id) AS total_responses,
                   SUM(qa.is_correct) AS correct_responses,
                   COALESCE(ROUND(SUM(qa.is_correct)/NULLIF(COUNT(qa.id),0)*100,2),0) AS accuracy_pct
            FROM quiz_questions qq
            LEFT JOIN quiz_answers qa ON qa.question_id=qq.id
            WHERE qq.quiz_id=? AND qq.status='active'
            GROUP BY qq.id ORDER BY qq.display_order
        ");
        $stmt->execute([$quiz['id']]);
        $headers = ['Question','Correct Answer','Marks','Total Responses','Correct','Accuracy %'];
        $this->outputCsv('question-analysis', $headers, $stmt->fetchAll());
    }

    private function exportGenderWise(string $quizUuid): void
    {
        $quiz = $this->findQuiz($quizUuid);
        $stmt = $this->pdo->prepare("
            SELECT qp.gender, qp.name, qp.yuvak_id,
                   qs.score, qs.total_marks, qs.percentage
            FROM quiz_participants qp
            LEFT JOIN quiz_submissions qs ON qs.participant_id=qp.id
            WHERE qp.quiz_id=? AND qp.status='active'
            ORDER BY qp.gender, qs.percentage DESC
        ");
        $stmt->execute([$quiz['id']]);
        $headers = ['Gender','Name','Yuvak ID','Score','Total Marks','Percentage %'];
        $this->outputCsv('gender-wise-report', $headers, $stmt->fetchAll());
    }

    private function outputCsv(string $filename, array $headers, array $rows): void
    {
        header('Content-Type: text/csv; charset=UTF-8');
        header('Content-Disposition: attachment; filename="' . $filename . '.csv"');
        header('Cache-Control: no-cache');

        $out = fopen('php://output', 'w');
        fputcsv($out, $headers, ',', '"', '\\');
        foreach ($rows as $row) {
            fputcsv($out, array_values($row), ',', '"', '\\');
        }
        fclose($out);
        exit;
    }

    private function findQuiz(string $uuid): array
    {
        $stmt = $this->pdo->prepare("SELECT * FROM quizzes WHERE uuid=? AND status='active'");
        $stmt->execute([$uuid]);
        $quiz = $stmt->fetch();
        if (!$quiz) sendError(404, 'Quiz not found');
        return $quiz;
    }
}
