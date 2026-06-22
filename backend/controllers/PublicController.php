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

        // Use a UUID-derived temp ID (30 hex chars) so concurrent registrations don't collide
        // on the UNIQUE yuvak_id column. 'TEMP' would serialize all 300 concurrent inserts.
        $tempId = substr(str_replace('-', '', $uuid), 0, 30);

        $this->pdo->beginTransaction();
        try {
            $this->pdo->prepare("
                INSERT INTO yuvaks (uuid,yuvak_id,first_name,middle_name,last_name,mo_number,
                    whatsapp_number,email,address,xetra_id,mandal_id,is_karyakar)
                VALUES (?,?,?,?,?,?,?,?,?,?,?,?)
            ")->execute([$uuid, $tempId, $body['first_name'], $body['middle_name'] ?? null,
                $body['last_name'], $body['mo_number'], $body['whatsapp_number'] ?? null,
                $body['email'] ?? null, $body['address'] ?? null,
                $body['xetra_id'], $body['mandal_id'], $karyakar]);

            $newId   = (int)$this->pdo->lastInsertId();
            $yuvakId = buildYuvakId($newId, $xetra['code']);
            $this->pdo->prepare("UPDATE yuvaks SET yuvak_id=? WHERE id=?")->execute([$yuvakId, $newId]);
            $this->pdo->commit();
        } catch (\PDOException $e) {
            $this->pdo->rollBack();
            if ($e->getCode() === '23000') {
                sendValidationError(['mo_number' => 'Mobile number already registered']);
            }
            sendError(500, 'Registration failed. Please try again.');
        }

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

        $tempId = substr(str_replace('-', '', $uuid), 0, 30);

        $this->pdo->beginTransaction();
        try {
            $this->pdo->prepare("
                INSERT INTO yuvatis (uuid,yuvati_id,first_name,middle_name,last_name,mo_number,
                    whatsapp_number,email,address,xetra_id,mandal_id,is_karyakar)
                VALUES (?,?,?,?,?,?,?,?,?,?,?,?)
            ")->execute([$uuid, $tempId, $body['first_name'], $body['middle_name'] ?? null,
                $body['last_name'], $body['mo_number'], $body['whatsapp_number'] ?? null,
                $body['email'] ?? null, $body['address'] ?? null,
                $body['xetra_id'], $body['mandal_id'], $karyakar]);

            $newId    = (int)$this->pdo->lastInsertId();
            $yuvatiId = buildYuvatiId($newId, $xetra['code']);
            $this->pdo->prepare("UPDATE yuvatis SET yuvati_id=? WHERE id=?")->execute([$yuvatiId, $newId]);
            $this->pdo->commit();
        } catch (\PDOException $e) {
            $this->pdo->rollBack();
            if ($e->getCode() === '23000') {
                sendValidationError(['mo_number' => 'Mobile number already registered']);
            }
            sendError(500, 'Registration failed. Please try again.');
        }

        sendSuccess(['yuvati_id' => $yuvatiId, 'uuid' => $uuid], 'Registration successful! Your Yuvati ID: ' . $yuvatiId);
    }

    // ── Yuvak Validation ─────────────────────────────────────────

    public function validateYuvak(array $body): void
    {
        $identifier = trim($body['identifier'] ?? $body['yuvak_id'] ?? '');
        if (empty($identifier)) sendValidationError(['identifier' => 'Yuvak ID or Mobile Number is required']);

        $isMobile  = (bool) preg_match('/^\d{10}$/', $identifier);
        $searchVal = $isMobile ? $identifier : strtoupper($identifier);

        // Search yuvaks first
        $field = $isMobile ? 'y.mo_number' : 'y.yuvak_id';
        $stmt  = $this->pdo->prepare("
            SELECT y.id, y.yuvak_id AS member_id,
                   TRIM(CONCAT(y.first_name,' ',COALESCE(y.middle_name,''),' ',y.last_name)) AS full_name,
                   x.name AS xetra_name, m.name AS mandal_name, 'yuvak' AS member_type
            FROM yuvaks y
            LEFT JOIN xetras  x ON x.id = y.xetra_id
            LEFT JOIN mandals m ON m.id = y.mandal_id
            WHERE {$field}=? AND y.status='active'
        ");
        $stmt->execute([$searchVal]);
        $member = $stmt->fetch();

        // If not in yuvaks, try yuvatis
        if (!$member) {
            $field2 = $isMobile ? 'y.mo_number' : 'y.yuvati_id';
            $stmt2  = $this->pdo->prepare("
                SELECT y.id, y.yuvati_id AS member_id,
                       TRIM(CONCAT(y.first_name,' ',COALESCE(y.middle_name,''),' ',y.last_name)) AS full_name,
                       x.name AS xetra_name, m.name AS mandal_name, 'yuvati' AS member_type
                FROM yuvatis y
                LEFT JOIN xetras  x ON x.id = y.xetra_id
                LEFT JOIN mandals m ON m.id = y.mandal_id
                WHERE {$field2}=? AND y.status='active'
            ");
            $stmt2->execute([$searchVal]);
            $member = $stmt2->fetch();
        }

        if (!$member) sendError(404, 'Not found. Please check your ID or Mobile Number.');

        // Expose yuvak_id for backward compat (frontend uses yuvakInfo.yuvak_id)
        $member['yuvak_id'] = $member['member_id'];
        sendSuccess($member, 'Member found');
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

        $memberDbId    = null;
        $storedMemberId = null;
        $storedName    = null;
        $memberType    = 'yuvak';

        $externalMobile = null;

        if ($type === 'registered') {
            $identifier = trim($body['identifier'] ?? $body['yuvak_id'] ?? '');
            if (empty($identifier)) sendValidationError(['identifier' => 'Yuvak ID or Mobile Number is required']);

            $isMobile  = (bool) preg_match('/^\d{10}$/', $identifier);
            $searchVal = $isMobile ? $identifier : strtoupper($identifier);

            // Search yuvaks first
            $wf    = $isMobile ? 'mo_number' : 'yuvak_id';
            $yStmt = $this->pdo->prepare("
                SELECT id, yuvak_id AS member_id,
                       TRIM(CONCAT(first_name,' ',COALESCE(middle_name,''),' ',last_name)) AS full_name
                FROM yuvaks WHERE {$wf}=? AND status='active'
            ");
            $yStmt->execute([$searchVal]);
            $member = $yStmt->fetch();

            // Fallback to yuvatis
            if (!$member) {
                $wf2    = $isMobile ? 'mo_number' : 'yuvati_id';
                $yStmt2 = $this->pdo->prepare("
                    SELECT id, yuvati_id AS member_id,
                           TRIM(CONCAT(first_name,' ',COALESCE(middle_name,''),' ',last_name)) AS full_name
                    FROM yuvatis WHERE {$wf2}=? AND status='active'
                ");
                $yStmt2->execute([$searchVal]);
                $member = $yStmt2->fetch();
                if ($member) $memberType = 'yuvati';
            }

            if (!$member) sendError(404, 'Member not found. Check ID or Mobile Number.');

            // ── 1-time submission check for registered members ──
            $dupCheck = $this->pdo->prepare("
                SELECT qp.id FROM quiz_participants qp
                JOIN quiz_submissions qs ON qs.participant_id = qp.id
                WHERE qp.quiz_id=? AND qp.yuvak_db_id=? AND qp.status='active'
            ");
            $dupCheck->execute([$quiz['id'], $member['id']]);
            if ($dupCheck->fetch()) {
                sendError(409, 'You have already submitted this quiz. Only one attempt is allowed.');
            }

            $memberDbId     = $member['id'];
            $storedMemberId = $member['member_id'];
            $storedName     = $member['full_name'];
        } else {
            // ── External participant validation ──
            if (empty($body['name']))     sendValidationError(['name'      => 'Full name is required']);
            if (empty($body['gender']))   sendValidationError(['gender'    => 'Gender is required']);
            if (empty($body['mo_number'])) sendValidationError(['mo_number' => 'Mobile number is required']);

            $mobile = trim($body['mo_number']);
            if (!preg_match('/^[6-9]\d{9}$/', $mobile)) {
                sendValidationError(['mo_number' => 'Enter a valid 10-digit Indian mobile number (starts with 6–9)']);
            }

            // Check if mobile belongs to a registered Yuvak/Yuvati
            $regCheck = $this->pdo->prepare("
                SELECT id FROM yuvaks  WHERE mo_number=? AND status='active'
                UNION
                SELECT id FROM yuvatis WHERE mo_number=? AND status='active'
            ");
            $regCheck->execute([$mobile, $mobile]);
            if ($regCheck->fetch()) {
                sendError(422, 'This mobile number is registered. Please use your Yuvak ID to participate.');
            }

            // ── 1-time submission check for external by mobile ──
            $extDup = $this->pdo->prepare("
                SELECT qp.id FROM quiz_participants qp
                JOIN quiz_submissions qs ON qs.participant_id = qp.id
                WHERE qp.quiz_id=? AND qp.mo_number=? AND qp.status='active'
            ");
            $extDup->execute([$quiz['id'], $mobile]);
            if ($extDup->fetch()) {
                sendError(409, 'You have already submitted this quiz. Only one attempt is allowed.');
            }

            $externalMobile = $mobile;
        }

        $this->pdo->prepare("
            INSERT INTO quiz_participants
                (uuid, quiz_id, participant_type, member_type, yuvak_id, yuvak_db_id, name, gender, mo_number)
            VALUES (?,?,?,?,?,?,?,?,?)
        ")->execute([
            $uuid, $quiz['id'],
            $type, $memberType,
            $storedMemberId,
            $memberDbId,
            $storedName ?? ($body['name'] ?? null),
            $body['gender'] ?? null,
            $externalMobile,
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
        $stmt = $this->pdo->prepare("SELECT id, show_result FROM quizzes WHERE slug=? AND quiz_status='published' AND status='active'");
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

        $answers        = $body['answers'] ?? [];
        $totalQuestions = count($qMap);
        $totalMarks     = array_sum(array_column($questionRows, 'marks'));
        $score          = 0;
        $correct        = 0;
        $incorrect      = 0;
        $attempted      = 0;

        // Score all answers in PHP first — no DB queries inside loop
        $batchValues      = [];
        $batchPlaceholders = [];
        foreach ($answers as $ans) {
            $qId = (int)($ans['question_id'] ?? 0);
            if (!isset($qMap[$qId])) continue;

            $selected   = $ans['selected_answer'] ?? null;
            $qType      = $qMap[$qId]['question_type'] ?? 'mcq';
            $isCorrect  = 0;
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

            // Collect for batch insert; submission_id placeholder (0) replaced after INSERT
            $batchValues[]      = [$qId, $selected, $isCorrect, $obtained];
            $batchPlaceholders[] = '(?,?,?,?,?)';
        }

        $percentage = $totalMarks > 0 ? round($score / $totalMarks * 100, 2) : 0;
        $subUuid    = $this->uuid();

        // Single transaction: submission row + all answers + totals update
        $this->pdo->beginTransaction();
        try {
            $this->pdo->prepare("
                INSERT INTO quiz_submissions
                    (uuid, quiz_id, participant_id, total_questions, total_marks,
                     attempted_questions, correct_answers, incorrect_answers, score, percentage)
                VALUES (?,?,?,?,?,?,?,?,?,?)
            ")->execute([
                $subUuid, $quiz['id'], $participant['id'],
                $totalQuestions, $totalMarks,
                $attempted, $correct, $incorrect, $score, $percentage,
            ]);
            $submissionId = (int)$this->pdo->lastInsertId();

            // Batch insert all answers in one query instead of one per answer
            if ($batchPlaceholders) {
                $flatParams = [];
                foreach ($batchValues as [$qId, $selected, $isCorrect, $obtained]) {
                    $flatParams[] = $submissionId;
                    $flatParams[] = $qId;
                    $flatParams[] = $selected;
                    $flatParams[] = $isCorrect;
                    $flatParams[] = $obtained;
                }
                $this->pdo->prepare(
                    "INSERT INTO quiz_answers (submission_id, question_id, selected_answer, is_correct, marks_obtained) VALUES "
                    . implode(',', $batchPlaceholders)
                )->execute($flatParams);
            }

            $this->pdo->commit();
        } catch (\Throwable $e) {
            $this->pdo->rollBack();
            error_log('[submitQuiz] transaction failed: ' . $e->getMessage());
            sendError(500, 'Failed to save quiz submission. Please try again.');
        }

        $cntStmt = $this->pdo->prepare(
            "SELECT COUNT(*) FROM quiz_submissions qs
             JOIN quiz_participants qp ON qp.id = qs.participant_id
             WHERE qp.quiz_id = ? AND qp.status = 'active'"
        );
        $cntStmt->execute([$quiz['id']]);
        $totalAttempts = (int)$cntStmt->fetchColumn();

        sendSuccess([
            'total_questions'     => $totalQuestions,
            'attempted_questions' => $attempted,
            'correct_answers'     => $correct,
            'incorrect_answers'   => $incorrect,
            'score'               => $score,
            'total_marks'         => $totalMarks,
            'percentage'          => $percentage,
            'show_result'         => (bool)$quiz['show_result'],
            'total_attempts'      => $totalAttempts,
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
