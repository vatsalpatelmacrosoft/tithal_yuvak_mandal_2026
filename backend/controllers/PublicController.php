<?php
// backend/controllers/PublicController.php

require_once __DIR__ . '/../services/NotificationService.php';

class PublicController
{
    public function __construct(private PDO $pdo) {}

    // ── Registration Forms ───────────────────────────────────────

    public function getRegistrationForm(string $type): void
    {
        if (!in_array($type, ['yuvak', 'yuvati'])) sendError(400, 'Invalid form type');

        $gSettings = $this->pdo->query("SELECT reg_open FROM global_settings LIMIT 1")->fetch();
        if (!$gSettings || !$gSettings['reg_open']) {
            sendError(403, 'Registration is currently closed');
        }

        $xetras = $this->pdo->query("SELECT id,name,code FROM xetras WHERE status='active' ORDER BY name")->fetchAll();

        sendSuccess(['form_type' => $type, 'xetras' => $xetras]);
    }

    public function getMandalsForXetra(): void
    {
        $xetraId = $_GET['xetra_id'] ?? null;
        if (!$xetraId) sendError(400, 'xetra_id is required');

        $stmt = $this->pdo->prepare("SELECT id,name,code FROM mandals WHERE xetra_id=? AND status='active' ORDER BY name");
        $stmt->execute([$xetraId]);
        sendSuccess($stmt->fetchAll());
    }

    public function registerYuvak(array $body): void
    {
        $this->checkRegOpen();
        $errors = $this->validateMember($body);
        if ($errors) sendValidationError($errors);

        $chk = $this->pdo->prepare("SELECT id FROM yuvaks WHERE mo_number=? AND status='active'");
        $chk->execute([$body['mo_number']]);
        if ($chk->fetch()) sendValidationError(['mo_number' => 'Mobile number already registered']);

        $xStmt = $this->pdo->prepare("SELECT code FROM xetras WHERE id=? AND status='active'");
        $xStmt->execute([$body['xetra_id']]);
        $xetra = $xStmt->fetch();
        if (!$xetra) sendError(422, 'Invalid Xetra selected');

        require_once __DIR__ . '/../helpers/id_encoder.php';
        $uuid = $this->uuid();

        $karyakar = in_array($body['is_karyakar'] ?? '', ['no','bal','yuva','sanyukta'])
                    ? $body['is_karyakar'] : 'no';

        $this->pdo->prepare("
            INSERT INTO yuvaks (uuid,yuvak_id,first_name,middle_name,last_name,mo_number,
                whatsapp_number,email,address,xetra_id,mandal_id,is_karyakar)
            VALUES (?, 'TEMP', ?,?,?,?,?,?,?,?,?,?)
        ")->execute([$uuid, $body['first_name'], $body['middle_name'] ?? null,
            $body['last_name'], $body['mo_number'], $body['whatsapp_number'] ?? null,
            $body['email'] ?? null, $body['address'] ?? null,
            $body['xetra_id'], $body['mandal_id'], $karyakar]);

        $newId   = (int)$this->pdo->lastInsertId();
        $yuvakId = buildYuvakId($newId, $xetra['code']);
        $this->pdo->prepare("UPDATE yuvaks SET yuvak_id=? WHERE id=?")->execute([$yuvakId, $newId]);

        sendSuccess(['yuvak_id' => $yuvakId, 'uuid' => $uuid], 'Registration successful! Your Yuvak ID: ' . $yuvakId);
    }

    public function registerYuvati(array $body): void
    {
        $this->checkRegOpen();
        $errors = $this->validateMember($body);
        if ($errors) sendValidationError($errors);

        $chk = $this->pdo->prepare("SELECT id FROM yuvatis WHERE mo_number=? AND status='active'");
        $chk->execute([$body['mo_number']]);
        if ($chk->fetch()) sendValidationError(['mo_number' => 'Mobile number already registered']);

        $xStmt = $this->pdo->prepare("SELECT code FROM xetras WHERE id=? AND status='active'");
        $xStmt->execute([$body['xetra_id']]);
        $xetra = $xStmt->fetch();
        if (!$xetra) sendError(422, 'Invalid Xetra selected');

        require_once __DIR__ . '/../helpers/id_encoder.php';
        $uuid = $this->uuid();

        $karyakar = in_array($body['is_karyakar'] ?? '', ['no','bal','yuva','sanyukta'])
                    ? $body['is_karyakar'] : 'no';

        $this->pdo->prepare("
            INSERT INTO yuvatis (uuid,yuvati_id,first_name,middle_name,last_name,mo_number,
                whatsapp_number,email,address,xetra_id,mandal_id,is_karyakar)
            VALUES (?, 'TEMP', ?,?,?,?,?,?,?,?,?,?)
        ")->execute([$uuid, $body['first_name'], $body['middle_name'] ?? null,
            $body['last_name'], $body['mo_number'], $body['whatsapp_number'] ?? null,
            $body['email'] ?? null, $body['address'] ?? null,
            $body['xetra_id'], $body['mandal_id'], $karyakar]);

        $newId    = (int)$this->pdo->lastInsertId();
        $yuvatiId = buildYuvatiId($newId, $xetra['code']);
        $this->pdo->prepare("UPDATE yuvatis SET yuvati_id=? WHERE id=?")->execute([$yuvatiId, $newId]);

        sendSuccess(['yuvati_id' => $yuvatiId, 'uuid' => $uuid], 'Registration successful! Your Yuvati ID: ' . $yuvatiId);
    }

    // ── Yuvak Validation ─────────────────────────────────────────

    public function validateYuvak(array $body): void
    {
        if (empty($body['yuvak_id'])) sendValidationError(['yuvak_id' => 'Yuvak ID is required']);

        $stmt = $this->pdo->prepare("
            SELECT y.yuvak_id,
                   CONCAT(y.first_name,' ',COALESCE(y.middle_name,''),' ',y.last_name) AS full_name,
                   x.name AS xetra_name, m.name AS mandal_name
            FROM yuvaks y
            LEFT JOIN xetras x ON x.id = y.xetra_id
            LEFT JOIN mandals m ON m.id = y.mandal_id
            WHERE y.yuvak_id=? AND y.status='active'
        ");
        $stmt->execute([trim($body['yuvak_id'])]);
        $yuvak = $stmt->fetch();

        if (!$yuvak) sendError(404, 'Yuvak ID not found. Please check and try again.');
        sendSuccess($yuvak, 'Yuvak found');
    }

    // ── Quiz Public Flow ─────────────────────────────────────────

    public function quizBySlug(string $slug): void
    {
        $stmt = $this->pdo->prepare("
            SELECT * FROM quizzes
            WHERE slug=? AND quiz_status='published' AND is_active=1 AND status='active'
        ");
        $stmt->execute([$slug]);
        $quiz = $stmt->fetch();
        if (!$quiz) sendError(404, 'Quiz not found or not available');

        $qStmt = $this->pdo->prepare("
            SELECT id, uuid, title, question_type,
                   option_a, option_b, option_c, option_d, options, marks, display_order
            FROM quiz_questions
            WHERE quiz_id=? AND status='active'
            ORDER BY display_order ASC, id ASC
        ");
        $qStmt->execute([$quiz['id']]);
        $rows = $qStmt->fetchAll();
        foreach ($rows as &$r) {
            if ($r['options'] !== null) $r['options'] = json_decode($r['options'], true);
        }
        $quiz['questions'] = $rows;
        sendSuccess($quiz);
    }

    public function startQuiz(string $slug, array $body): void
    {
        $stmt = $this->pdo->prepare("
            SELECT * FROM quizzes
            WHERE slug=? AND quiz_status='published' AND is_active=1 AND status='active'
        ");
        $stmt->execute([$slug]);
        $quiz = $stmt->fetch();
        if (!$quiz) sendError(404, 'Quiz not found or not active');

        // Check datetime window
        $now = date('Y-m-d H:i:s');
        if ($quiz['start_datetime'] && $now < $quiz['start_datetime']) {
            sendError(403, 'Quiz has not started yet');
        }
        if ($quiz['end_datetime'] && $now > $quiz['end_datetime']) {
            sendError(403, 'Quiz has already ended');
        }

        $type = $body['participant_type'] ?? 'external';
        $uuid = $this->uuid();

        $yuvakDbId = null;
        if ($type === 'registered') {
            if (empty($body['yuvak_id'])) sendValidationError(['yuvak_id' => 'Yuvak ID is required']);
            $yStmt = $this->pdo->prepare("SELECT id FROM yuvaks WHERE yuvak_id=? AND status='active'");
            $yStmt->execute([$body['yuvak_id']]);
            $yuvak = $yStmt->fetch();
            if (!$yuvak) sendError(404, 'Yuvak ID not found');
            $yuvakDbId = $yuvak['id'];
        } else {
            if (empty($body['name'])) sendValidationError(['name' => 'Name is required']);
            if (empty($body['gender'])) sendValidationError(['gender' => 'Gender is required']);
        }

        $this->pdo->prepare("
            INSERT INTO quiz_participants
                (uuid, quiz_id, participant_type, yuvak_id, yuvak_db_id, name, gender)
            VALUES (?,?,?,?,?,?,?)
        ")->execute([
            $uuid, $quiz['id'],
            $type,
            $body['yuvak_id'] ?? null,
            $yuvakDbId,
            $body['name'] ?? null,
            $body['gender'] ?? null,
        ]);

        // Return questions without correct_answer
        $qStmt = $this->pdo->prepare("
            SELECT id, uuid, title, question_type,
                   option_a, option_b, option_c, option_d, options, marks, display_order
            FROM quiz_questions
            WHERE quiz_id=? AND status='active'
            ORDER BY display_order ASC, id ASC
        ");
        $qStmt->execute([$quiz['id']]);
        $qRows = $qStmt->fetchAll();
        foreach ($qRows as &$r) {
            if ($r['options'] !== null) $r['options'] = json_decode($r['options'], true);
        }

        sendSuccess([
            'participant_uuid' => $uuid,
            'quiz'             => $quiz,
            'questions'        => $qRows,
        ], 'Quiz started');
    }

    public function submitQuiz(string $slug, array $body): void
    {
        $stmt = $this->pdo->prepare("SELECT id FROM quizzes WHERE slug=? AND quiz_status='published' AND status='active'");
        $stmt->execute([$slug]);
        $quiz = $stmt->fetch();
        if (!$quiz) sendError(404, 'Quiz not found or closed');

        $participantUuid = $body['participant_uuid'] ?? null;
        if (!$participantUuid) sendValidationError(['participant_uuid' => 'Participant reference is required']);

        $pStmt = $this->pdo->prepare("SELECT * FROM quiz_participants WHERE uuid=? AND quiz_id=?");
        $pStmt->execute([$participantUuid, $quiz['id']]);
        $participant = $pStmt->fetch();
        if (!$participant) sendError(403, 'Invalid participant reference');

        // Check not already submitted
        $subCheck = $this->pdo->prepare("SELECT id FROM quiz_submissions WHERE participant_id=?");
        $subCheck->execute([$participant['id']]);
        if ($subCheck->fetch()) sendError(409, 'Quiz already submitted');

        // Get all questions with correct answers
        $qStmt = $this->pdo->prepare("
            SELECT id, question_type, correct_answer, marks FROM quiz_questions
            WHERE quiz_id=? AND status='active'
        ");
        $qStmt->execute([$quiz['id']]);
        $questionRows = $qStmt->fetchAll();
        $qMap = [];
        foreach ($questionRows as $q) {
            $qMap[$q['id']] = $q;
        }

        $answers         = $body['answers'] ?? [];
        $totalQuestions  = count($qMap);
        $totalMarks      = array_sum(array_column($questionRows, 'marks'));
        $score           = 0;
        $correct         = 0;
        $incorrect       = 0;
        $attempted       = 0;

        // Create submission
        $subUuid = $this->uuid();
        $this->pdo->prepare("
            INSERT INTO quiz_submissions
                (uuid, quiz_id, participant_id, total_questions, total_marks)
            VALUES (?,?,?,?,?)
        ")->execute([$subUuid, $quiz['id'], $participant['id'], $totalQuestions, $totalMarks]);
        $submissionId = (int)$this->pdo->lastInsertId();

        // Save answers + calculate
        $ansStmt = $this->pdo->prepare("
            INSERT INTO quiz_answers (submission_id, question_id, selected_answer, is_correct, marks_obtained)
            VALUES (?,?,?,?,?)
        ");

        foreach ($answers as $ans) {
            $qId = (int)($ans['question_id'] ?? 0);
            if (!isset($qMap[$qId])) continue;

            $selected  = $ans['selected_answer'] ?? null;
            $qType     = $qMap[$qId]['question_type'] ?? 'mcq';
            $isCorrect = 0;
            if ($selected !== null && $selected !== '') {
                $correctAns = $qMap[$qId]['correct_answer'];
                $isCorrect  = ($qType === 'input')
                    ? (strtolower(trim($selected)) === strtolower(trim($correctAns)) ? 1 : 0)
                    : ($selected === $correctAns ? 1 : 0);
            }
            $obtained = $isCorrect ? (float)$qMap[$qId]['marks'] : 0;

            if ($selected) $attempted++;
            if ($isCorrect) { $correct++; $score += $obtained; }
            elseif ($selected) $incorrect++;

            $ansStmt->execute([$submissionId, $qId, $selected, $isCorrect, $obtained]);
        }

        $percentage = $totalMarks > 0 ? round($score / $totalMarks * 100, 2) : 0;

        $this->pdo->prepare("
            UPDATE quiz_submissions SET
                attempted_questions=?, correct_answers=?, incorrect_answers=?,
                score=?, percentage=?
            WHERE id=?
        ")->execute([$attempted, $correct, $incorrect, $score, $percentage, $submissionId]);

        sendSuccess([
            'total_questions'     => $totalQuestions,
            'attempted_questions' => $attempted,
            'correct_answers'     => $correct,
            'incorrect_answers'   => $incorrect,
            'score'               => $score,
            'total_marks'         => $totalMarks,
            'percentage'          => $percentage,
        ], 'Quiz submitted successfully');
    }

    // ── Welcome Card ────────────────────────────────────────────

    public function welcomeCard(string $type, string $uuid): void
    {
        if (!in_array($type, ['yuvak', 'yuvati'])) sendError(400, 'Invalid member type');

        $table   = $type === 'yuvak' ? 'yuvaks' : 'yuvatis';
        $idField = $type === 'yuvak' ? 'yuvak_id' : 'yuvati_id';

        $stmt = $this->pdo->prepare("
            SELECT y.uuid, y.$idField AS member_id,
                   CONCAT(y.first_name, ' ', COALESCE(NULLIF(y.middle_name,''), ''), ' ', y.last_name) AS full_name,
                   y.first_name, y.last_name,
                   x.name AS xetra_name, m.name AS mandal_name
            FROM $table y
            JOIN xetras  x ON x.id = y.xetra_id
            JOIN mandals m ON m.id = y.mandal_id
            WHERE y.uuid = ? AND y.status = 'active'
        ");
        $stmt->execute([$uuid]);
        $row = $stmt->fetch();
        if (!$row) sendError(404, 'Member not found');

        sendSuccess([
            'type'        => $type,
            'member_id'   => $row['member_id'],
            'full_name'   => trim(preg_replace('/\s+/', ' ', $row['full_name'])),
            'xetra_name'  => $row['xetra_name'],
            'mandal_name' => $row['mandal_name'],
        ]);
    }

    // ── Helpers ──────────────────────────────────────────────────

    private function checkRegOpen(): void
    {
        $row = $this->pdo->query("SELECT reg_open FROM global_settings LIMIT 1")->fetch();
        if (!$row || !$row['reg_open']) sendError(403, 'Registration is currently closed');
    }

    private function validateMember(array $body): array
    {
        $errors = [];
        if (empty($body['first_name'])) $errors['first_name'] = 'First name is required';
        if (empty($body['last_name']))  $errors['last_name']  = 'Last name is required';
        if (empty($body['mo_number']))  $errors['mo_number']  = 'Mobile number is required';
        if (!empty($body['mo_number']) && !preg_match('/^[6-9]\d{9}$/', $body['mo_number'])) {
            $errors['mo_number'] = 'Invalid Indian mobile number (10 digits starting with 6–9)';
        }
        if (empty($body['xetra_id']))  $errors['xetra_id']  = 'Xetra is required';
        if (empty($body['mandal_id'])) $errors['mandal_id'] = 'Mandal is required';
        return $errors;
    }

    private function uuid(): string {
        return sprintf('%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
            mt_rand(0,0xffff), mt_rand(0,0xffff), mt_rand(0,0xffff),
            mt_rand(0,0x0fff)|0x4000, mt_rand(0,0x3fff)|0x8000,
            mt_rand(0,0xffff), mt_rand(0,0xffff), mt_rand(0,0xffff));
    }
}
