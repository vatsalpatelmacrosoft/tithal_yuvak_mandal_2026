<?php
// backend/controllers/QuizController.php

class QuizController
{
    public function __construct(private PDO $pdo) {}

    // ── Admin: Quiz CRUD ─────────────────────────────────────────

    public function index(): void
    {
        $stmt = $this->pdo->query("
            SELECT q.*,
                   (SELECT COUNT(*) FROM quiz_questions qq WHERE qq.quiz_id=q.id AND qq.status='active') AS question_count,
                   (SELECT COUNT(*) FROM quiz_participants qp WHERE qp.quiz_id=q.id AND qp.status='active') AS participant_count
            FROM quizzes q
            WHERE q.status='active'
            ORDER BY q.created_at DESC
        ");
        sendSuccess($stmt->fetchAll());
    }

    public function show(string $uuid): void
    {
        $stmt = $this->pdo->prepare("SELECT * FROM quizzes WHERE uuid=? AND status='active'");
        $stmt->execute([$uuid]);
        $quiz = $stmt->fetch();
        if (!$quiz) sendError(404, 'Quiz not found');

        $quiz['questions']        = $this->fetchQuestions((int)$quiz['id'], false);
        $quiz['question_count']   = count($quiz['questions']);
        sendSuccess($quiz);
    }

    public function store(array $body, int $userId): void
    {
        $errors = [];
        if (empty($body['title'])) $errors['title'] = 'Quiz title is required';
        if ($errors) sendValidationError($errors);

        $slug = $this->generateSlug($body['title']);
        $uuid = $this->uuid();

        $this->pdo->prepare("
            INSERT INTO quizzes
                (uuid, name, title, slug, description, instructions,
                 start_datetime, end_datetime, quiz_status, is_active)
            VALUES (?,?,?,?,?,?,?,?,?,?)
        ")->execute([
            $uuid,
            $body['title'],
            $body['title'],
            $slug,
            $body['description']  ?? null,
            $body['instructions'] ?? null,
            $body['start_datetime'] ?? null,
            $body['end_datetime']   ?? null,
            $body['quiz_status']    ?? 'draft',
            isset($body['is_active']) ? (int)(bool)$body['is_active'] : 1,
        ]);

        $this->show($uuid);
    }

    public function update(string $uuid, array $body): void
    {
        $stmt = $this->pdo->prepare("SELECT * FROM quizzes WHERE uuid=? AND status='active'");
        $stmt->execute([$uuid]);
        $quiz = $stmt->fetch();
        if (!$quiz) sendError(404, 'Quiz not found');

        $this->pdo->prepare("
            UPDATE quizzes SET
                name=?, title=?, description=?, instructions=?,
                start_datetime=?, end_datetime=?, quiz_status=?, is_active=?
            WHERE uuid=?
        ")->execute([
            $body['title']        ?? $quiz['title'] ?? $quiz['name'],
            $body['title']        ?? $quiz['title'] ?? $quiz['name'],
            $body['description']  ?? $quiz['description'],
            $body['instructions'] ?? $quiz['instructions'],
            $body['start_datetime'] ?? $quiz['start_datetime'],
            $body['end_datetime']   ?? $quiz['end_datetime'],
            $body['quiz_status']    ?? $quiz['quiz_status'],
            isset($body['is_active']) ? (int)(bool)$body['is_active'] : $quiz['is_active'],
            $uuid,
        ]);

        $this->show($uuid);
    }

    public function destroy(string $uuid): void
    {
        $this->pdo->prepare("UPDATE quizzes SET status='archive', quiz_status='deleted' WHERE uuid=?")
            ->execute([$uuid]);
        sendSuccess([], 'Quiz archived');
    }

    public function toggle(string $uuid): void
    {
        $stmt = $this->pdo->prepare("SELECT id, is_active FROM quizzes WHERE uuid=? AND status='active'");
        $stmt->execute([$uuid]);
        $quiz = $stmt->fetch();
        if (!$quiz) sendError(404, 'Quiz not found');

        $newState = $quiz['is_active'] ? 0 : 1;
        $this->pdo->prepare("UPDATE quizzes SET is_active=? WHERE uuid=?")->execute([$newState, $uuid]);
        sendSuccess(['is_active' => $newState], $newState ? 'Quiz activated' : 'Quiz deactivated');
    }

    // ── Admin: Question Management ───────────────────────────────

    public function listQuestions(string $quizUuid): void
    {
        $quiz = $this->findQuiz($quizUuid);
        sendSuccess($this->fetchQuestions((int)$quiz['id'], false));
    }

    public function addQuestion(string $quizUuid, array $body): void
    {
        $quiz  = $this->findQuiz($quizUuid);
        $qType = $body['question_type'] ?? 'mcq';

        $errors = [];
        if (empty($body['title'])) $errors['title'] = 'Question title is required';
        if (empty($body['correct_answer'])) $errors['correct_answer'] = 'Correct answer is required';
        if ($qType === 'mcq') {
            if (empty($body['option_a'])) $errors['option_a'] = 'Option A is required';
            if (empty($body['option_b'])) $errors['option_b'] = 'Option B is required';
        } elseif (in_array($qType, ['select','radio'])) {
            $opts = $body['options'] ?? [];
            if (!is_array($opts) || count(array_filter($opts, fn($o) => !empty($o['value']))) < 2) {
                $errors['options'] = 'At least 2 options are required';
            }
        }
        if ($errors) sendValidationError($errors);

        $quizId = (int)$quiz['id'];
        $uuid   = $this->uuid();

        $maxOrder = $this->pdo->prepare("SELECT COALESCE(MAX(display_order),0) FROM quiz_questions WHERE quiz_id=? AND status='active'");
        $maxOrder->execute([$quizId]);
        $nextOrder = (int)$maxOrder->fetchColumn() + 1;

        // Only MCQ uses option_a/b/c/d; select/radio store in options JSON
        $optA    = $qType === 'mcq' ? ($body['option_a'] ?? null) : null;
        $optB    = $qType === 'mcq' ? ($body['option_b'] ?? null) : null;
        $optC    = $qType === 'mcq' ? ($body['option_c'] ?? null) : null;
        $optD    = $qType === 'mcq' ? ($body['option_d'] ?? null) : null;
        $options = in_array($qType, ['select','radio']) ? json_encode($body['options']) : null;

        $this->pdo->prepare("
            INSERT INTO quiz_questions
                (uuid, quiz_id, title, question_type, option_a, option_b, option_c, option_d,
                 options, correct_answer, marks, display_order, field_type)
            VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)
        ")->execute([
            $uuid, $quizId,
            $body['title'],
            $qType,
            $optA, $optB, $optC, $optD,
            $options,
            $body['correct_answer'],
            (float)($body['marks'] ?? 1),
            (int)($body['display_order'] ?? $nextOrder),
            $qType,   // reuse as field_type for legacy compat
        ]);

        $this->listQuestions($quizUuid);
    }

    public function updateQuestion(string $questionUuid, array $body): void
    {
        $stmt = $this->pdo->prepare("SELECT * FROM quiz_questions WHERE uuid=? AND status='active'");
        $stmt->execute([$questionUuid]);
        $q = $stmt->fetch();
        if (!$q) sendError(404, 'Question not found');

        $qType = $body['question_type'] ?? $q['question_type'] ?? 'mcq';

        $optA    = $qType === 'mcq' ? ($body['option_a'] ?? $q['option_a']) : null;
        $optB    = $qType === 'mcq' ? ($body['option_b'] ?? $q['option_b']) : null;
        $optC    = $qType === 'mcq' ? ($body['option_c'] ?? $q['option_c']) : null;
        $optD    = $qType === 'mcq' ? ($body['option_d'] ?? $q['option_d']) : null;

        if (in_array($qType, ['select','radio']) && isset($body['options'])) {
            $options = json_encode($body['options']);
        } elseif (in_array($qType, ['mcq','input'])) {
            $options = null;
        } else {
            $options = $q['options'];
        }

        $this->pdo->prepare("
            UPDATE quiz_questions SET
                title=?, question_type=?,
                option_a=?, option_b=?, option_c=?, option_d=?,
                options=?, correct_answer=?, marks=?, display_order=?,
                field_type=?
            WHERE uuid=?
        ")->execute([
            $body['title']          ?? $q['title'],
            $qType,
            $optA, $optB, $optC, $optD,
            $options,
            $body['correct_answer'] ?? $q['correct_answer'],
            (float)($body['marks'] ?? $q['marks']),
            (int)($body['display_order'] ?? $q['display_order']),
            $qType,
            $questionUuid,
        ]);

        sendSuccess($this->fetchQuestion($questionUuid));
    }

    public function deleteQuestion(string $questionUuid): void
    {
        $this->pdo->prepare("UPDATE quiz_questions SET status='archive' WHERE uuid=?")
            ->execute([$questionUuid]);
        sendSuccess([], 'Question deleted');
    }

    public function reorderQuestions(string $quizUuid, array $body): void
    {
        $this->findQuiz($quizUuid);
        $order = $body['order'] ?? [];

        $stmt = $this->pdo->prepare("UPDATE quiz_questions SET display_order=? WHERE uuid=?");
        foreach ($order as $i => $qUuid) {
            $stmt->execute([$i + 1, $qUuid]);
        }

        $this->listQuestions($quizUuid);
    }

    // ── Public: Quiz Access ──────────────────────────────────────

    public function publicShow(string $slug): void
    {
        $stmt = $this->pdo->prepare("
            SELECT * FROM quizzes
            WHERE slug=? AND quiz_status='published' AND is_active=1 AND status='active'
        ");
        $stmt->execute([$slug]);
        $quiz = $stmt->fetch();
        if (!$quiz) sendError(404, 'Quiz not found or not available');

        // Return questions without correct_answer for public
        $quiz['questions'] = $this->fetchQuestions((int)$quiz['id'], true);
        sendSuccess($quiz);
    }

    // ── Helpers ──────────────────────────────────────────────────

    private function findQuiz(string $uuid): array
    {
        $stmt = $this->pdo->prepare("SELECT * FROM quizzes WHERE uuid=? AND status='active'");
        $stmt->execute([$uuid]);
        $quiz = $stmt->fetch();
        if (!$quiz) sendError(404, 'Quiz not found');
        return $quiz;
    }

    private function fetchQuestions(int $quizId, bool $stripAnswers = false): array
    {
        $stmt = $this->pdo->prepare("
            SELECT id, uuid, title, question_type,
                   option_a, option_b, option_c, option_d, options,
                   correct_answer, marks, display_order
            FROM quiz_questions
            WHERE quiz_id=? AND status='active'
            ORDER BY display_order ASC, id ASC
        ");
        $stmt->execute([$quizId]);
        $rows = $stmt->fetchAll();

        foreach ($rows as &$r) {
            if ($r['options'] !== null) {
                $r['options'] = json_decode($r['options'], true);
            }
            if ($stripAnswers) unset($r['correct_answer']);
        }
        return $rows;
    }

    private function fetchQuestion(string $uuid): array
    {
        $stmt = $this->pdo->prepare("
            SELECT id, uuid, title, question_type,
                   option_a, option_b, option_c, option_d, options,
                   correct_answer, marks, display_order
            FROM quiz_questions WHERE uuid=?
        ");
        $stmt->execute([$uuid]);
        $row = $stmt->fetch();
        if ($row && $row['options'] !== null) {
            $row['options'] = json_decode($row['options'], true);
        }
        return $row ?: [];
    }

    private function generateSlug(string $name): string
    {
        $slug = strtolower(preg_replace('/[^a-z0-9]+/i', '-', $name));
        return trim($slug, '-') . '-' . substr(uniqid(), -6);
    }

    private function uuid(): string {
        return sprintf('%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
            mt_rand(0,0xffff), mt_rand(0,0xffff), mt_rand(0,0xffff),
            mt_rand(0,0x0fff)|0x4000, mt_rand(0,0x3fff)|0x8000,
            mt_rand(0,0xffff), mt_rand(0,0xffff), mt_rand(0,0xffff));
    }
}
