# TDD — Technical Design Document
## TDD Management System (Yuvak & Yuvati Samaj Portal)

**Stack:** Angular 17 (Frontend) · PHP 8.1 (Backend) · MySQL 8 (Database)  
**Version:** 1.0.0 · **Date:** 2025

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Architecture](#2-architecture)
3. [Database Design](#3-database-design)
4. [API Design](#4-api-design)
5. [Auto-Migration System](#5-auto-migration-system)
6. [Authentication & Authorization](#6-authentication--authorization)
7. [Module Breakdown](#7-module-breakdown)
8. [WhatsApp & QR Code Integration](#8-whatsapp--qr-code-integration)
9. [Public Pages](#9-public-pages)
10. [Validation Rules](#10-validation-rules)
11. [Soft Delete Policy](#11-soft-delete-policy)
12. [Error Handling](#12-error-handling)
13. [Test Strategy](#13-test-strategy)
14. [File & Folder Structure](#14-file--folder-structure)
15. [Environment Setup](#15-environment-setup)
16. [Deployment Checklist](#16-deployment-checklist)

---

## 1. Project Overview

The TDD Management System manages members (Yuvak/Yuvati) of a Swaminarayan Samaj organization. It provides:

- **Admin Portal** — authenticated CRUD for all entities
- **Public Portal** — unauthenticated registration & quiz forms (controlled by admin)
- **Attendance Tracking** — QR scan-based daily attendance
- **WhatsApp Notifications** — auto-sends QR code to member on registration
- **Role-Based Permissions** — menu-wise View/Create/Update/Delete control

---

## 2. Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     BROWSER CLIENT                           │
│  ┌──────────────────────────┐  ┌──────────────────────────┐ │
│  │   Admin SPA (Angular)    │  │  Public Pages (Angular)  │ │
│  │   /admin/*  (auth guard) │  │  /register/:type         │ │
│  │                          │  │  /quiz/:slug             │ │
│  └──────────┬───────────────┘  └──────────┬───────────────┘ │
└─────────────┼────────────────────────────┼─────────────────┘
              │ HTTP (JWT Bearer)           │ HTTP (no auth)
              ▼                             ▼
┌─────────────────────────────────────────────────────────────┐
│                   PHP BACKEND (Apache/Nginx)                  │
│                                                               │
│  index.php ─► Router ─► Middleware ─► Controller ─► Service  │
│                            (Auth)       (CRUD)      (QR/WA)  │
│                                                               │
│  /api/*     → Admin API (JWT required)                        │
│  /public/*  → Public API (no auth)                            │
│  /storage/  → Static QR images                                │
└──────────────────────────┬──────────────────────────────────┘
                           │ PDO
                           ▼
                    ┌─────────────┐
                    │   MySQL 8   │
                    └─────────────┘
```

### Request Lifecycle
```
Request → CORS Headers → Route Match → JWT Validation →
Permission Check → Controller → Validation → DB Query →
Response JSON
```

---

## 3. Database Design

### 3.1 Entity Relationship Summary

```
xetras ──┬── yuvaks ──── attendances
         │         └──── users ──── roles ──── permissions ──── menus
         └── yuvatis ─── attendances

shibirs ──── attendances
quizzes ──── quiz_questions
         └── quiz_responses
```

### 3.2 Tables

#### `xetras`
| Column     | Type         | Constraints              |
|------------|--------------|--------------------------|
| id         | INT UNSIGNED | PK, AUTO_INCREMENT       |
| uuid       | CHAR(36)     | UNIQUE                   |
| name       | VARCHAR(100) | NOT NULL, UNIQUE (active)|
| code       | VARCHAR(20)  | NOT NULL, UNIQUE (active)|
| status     | ENUM         | active \| archive        |
| created_at | TIMESTAMP    | DEFAULT NOW()            |
| updated_at | TIMESTAMP    | ON UPDATE NOW()          |

#### `mandals`
Same structure as `xetras`. Independent table.

#### `yuvaks`
| Column          | Type         | Constraints                        |
|-----------------|--------------|------------------------------------|
| id              | INT UNSIGNED | PK, AUTO_INCREMENT                 |
| uuid            | CHAR(36)     | UNIQUE                             |
| yuvak_id        | VARCHAR(30)  | UNIQUE — format: `YUVAK{CODE}{ENC}`|
| first_name      | VARCHAR(60)  | NOT NULL                           |
| middle_name     | VARCHAR(60)  | NULL                               |
| last_name       | VARCHAR(60)  | NOT NULL                           |
| mo_number       | VARCHAR(15)  | UNIQUE (active only)               |
| whatsapp_number | VARCHAR(15)  | NULL                               |
| email           | VARCHAR(120) | NULL, valid email if present       |
| address         | TEXT         | NULL                               |
| xetra_id        | INT UNSIGNED | FK → xetras.id                     |
| mandal_id       | INT UNSIGNED | FK → mandals.id                    |
| is_karyakar     | ENUM         | no \| bal \| yuva \| sanyukta      |
| tags            | JSON         | NULL                               |
| status          | ENUM         | active \| archive                  |

#### `yuvatis`
Identical structure to `yuvaks` but `yuvati_id` column with `YUVATI{CODE}{ENC}` format. **Separate table.**

#### `users`
| Column     | Type         | Notes                           |
|------------|--------------|---------------------------------|
| id         | INT UNSIGNED | PK                              |
| yuvak_id   | INT UNSIGNED | FK → yuvaks.id (1:1 per yuvak)  |
| role_id    | INT UNSIGNED | FK → roles.id                   |
| mo_number  | VARCHAR(15)  | Copied from yuvak, UNIQUE       |
| password   | VARCHAR(255) | bcrypt hash                     |
| last_login | TIMESTAMP    | NULL                            |

#### `roles`
| Column | Type        | Notes           |
|--------|-------------|-----------------|
| name   | VARCHAR(60) | UNIQUE (active) |
| code   | VARCHAR(30) | UNIQUE (active) |

#### `menus` (seeded, not user-managed)
Seeded entries: dashboard, yuvak, yuvati, xetra, mandal, attendance, shibir, quiz, users, roles

#### `permissions`
| Column     | Type        | Notes                        |
|------------|-------------|------------------------------|
| role_id    | INT UNSIGNED| FK → roles.id               |
| menu_id    | INT UNSIGNED| FK → menus.id               |
| can_view   | TINYINT(1)  | 0/1                          |
| can_create | TINYINT(1)  | 0/1                          |
| can_update | TINYINT(1)  | 0/1                          |
| can_delete | TINYINT(1)  | 0/1                          |
| UNIQUE     |             | (role_id, menu_id)           |

#### `shibirs`
| Column | Type         | Notes                         |
|--------|--------------|-------------------------------|
| name   | VARCHAR(150) | NOT NULL                      |
| date   | DATE         | NOT NULL                      |
| slug   | VARCHAR(200) | UNIQUE, auto-generated        |

#### `quizzes`
| Column      | Type         | Notes                              |
|-------------|--------------|------------------------------------|
| name        | VARCHAR(150) | NOT NULL                           |
| slug        | VARCHAR(200) | UNIQUE, auto-generated             |
| quiz_status | ENUM         | draft \| published \| deleted      |

#### `quiz_questions`
| Column     | Type    | Notes                                       |
|------------|---------|---------------------------------------------|
| quiz_id    | INT     | FK → quizzes.id (CASCADE DELETE)            |
| title      | VARCHAR | Question text                               |
| field_type | ENUM    | text \| number \| radio \| checkbox \| select|
| options    | JSON    | For radio/checkbox/select                   |
| is_required| TINYINT | 0/1                                         |
| sort_order | INT     | For drag-and-drop ordering                  |

#### `attendances`
| Column          | Type   | Notes                                   |
|-----------------|--------|-----------------------------------------|
| attendance_date | DATE   | NOT NULL                                |
| member_type     | ENUM   | yuvak \| yuvati                         |
| member_id       | INT    | FK to respective table                  |
| shibir_id       | INT    | NULL → general attendance               |
| scanned_by      | INT    | user_id of scanner                      |
| UNIQUE          |        | (attendance_date, member_type, member_id)|

#### `public_forms`
| Column    | Type | Notes                      |
|-----------|------|----------------------------|
| form_type | ENUM | yuvak \| yuvati            |
| is_active | TINYINT(1) | 0 = closed, 1 = open|

#### `migrations`
Tracks which SQL migration files have been applied.

---

## 4. API Design

### Base URLs
| Environment | Admin API            | Public API            |
|-------------|----------------------|-----------------------|
| Development | `localhost:8000/api` | `localhost:8000/public` |
| Production  | `yourdomain.com/api` | `yourdomain.com/public` |

### Standard Response Envelope
```json
// Success
{ "success": true, "message": "...", "data": { ... } }

// Error
{ "success": false, "message": "...", "errors": { "field": "message" } }

// Paginated
{ "success": true, "data": { "data": [...], "total": 100, "page": 1, "per_page": 20, "last_page": 5 } }
```

### HTTP Status Codes
| Code | Meaning                     |
|------|-----------------------------|
| 200  | OK                          |
| 201  | Created (also uses 200)     |
| 204  | No content (OPTIONS)        |
| 401  | Unauthorized (no/bad token) |
| 403  | Forbidden (no permission)   |
| 404  | Not found                   |
| 409  | Conflict (duplicate)        |
| 422  | Validation failed           |
| 500  | Server error                |

---

### 4.1 Auth Endpoints

| Method | Endpoint                  | Auth | Description            |
|--------|---------------------------|------|------------------------|
| POST   | `/api/auth/login`         | ❌   | Login with mo+password |
| POST   | `/api/auth/logout`        | ✅   | Clear token (client)   |
| GET    | `/api/auth/me`            | ✅   | Get current user       |
| POST   | `/api/auth/forgot-password` | ❌ | Request reset          |
| POST   | `/api/auth/reset-password`  | ❌ | Set new password       |

**Login request:**
```json
{ "mo_number": "9876543210", "password": "mypassword" }
```
**Login response:**
```json
{
  "token": "eyJ...",
  "user": {
    "id": 1, "name": "Ram Patel", "role": "Super Admin",
    "role_code": "SUPER_ADMIN",
    "permissions": [{ "slug": "yuvak", "can_view": 1, "can_create": 1, ... }]
  }
}
```

---

### 4.2 Yuvak Endpoints

| Method | Endpoint              | Permission     | Description         |
|--------|-----------------------|----------------|---------------------|
| GET    | `/api/yuvak`          | yuvak:view     | List (paginated)    |
| GET    | `/api/yuvak/:uuid`    | yuvak:view     | Get single          |
| GET    | `/api/yuvak/:uuid/qr` | yuvak:view     | Get QR code URL     |
| POST   | `/api/yuvak`          | yuvak:create   | Create + send WA    |
| PUT    | `/api/yuvak/:uuid`    | yuvak:update   | Update              |
| DELETE | `/api/yuvak/:uuid`    | yuvak:delete   | Soft delete         |

**Query params for GET list:** `?page=1&limit=20&search=ram&xetra_id=1&mandal_id=2`

**Yuvak ID format:** `YUVAK` + `{XETRACODE}` + `{BASE32_ENCODED_ID}`
- Example: ID=1, Xetra=`TI` → `YUVAKTIAAAB`

---

### 4.3 Yuvati Endpoints

Same as Yuvak but `/api/yuvati` and permission `yuvati:*`.  
ID format: `YUVATI` + `{XETRACODE}` + `{BASE32_ENCODED_ID}`

---

### 4.4 Xetra Endpoints

| Method | Endpoint           | Permission    |
|--------|--------------------|---------------|
| GET    | `/api/xetra`       | xetra:view    |
| POST   | `/api/xetra`       | xetra:create  |
| PUT    | `/api/xetra/:uuid` | xetra:update  |
| DELETE | `/api/xetra/:uuid` | xetra:delete  |

---

### 4.5 Mandal Endpoints

Same pattern as Xetra at `/api/mandal`.

---

### 4.6 Users Endpoints

| Method | Endpoint          | Description              |
|--------|-------------------|--------------------------|
| GET    | `/api/users`      | List all users           |
| POST   | `/api/users`      | Create (from yuvak list) |
| PUT    | `/api/users/:uuid`| Update role/password     |
| DELETE | `/api/users/:uuid`| Archive                  |

**Create user request:**
```json
{ "yuvak_uuid": "abc-123", "role_uuid": "def-456", "password": "min8chars" }
```

---

### 4.7 Roles & Permissions Endpoints

| Method | Endpoint                         | Description          |
|--------|----------------------------------|----------------------|
| GET    | `/api/roles`                     | List roles           |
| GET    | `/api/roles/:uuid`               | Role + permissions   |
| POST   | `/api/roles`                     | Create role          |
| PUT    | `/api/roles/:uuid`               | Update role          |
| PUT    | `/api/roles/:uuid/permissions`   | Save permissions     |
| DELETE | `/api/roles/:uuid`               | Archive role         |

**Permissions payload:**
```json
{
  "permissions": [
    { "menu_id": 1, "can_view": 1, "can_create": 1, "can_update": 1, "can_delete": 0 },
    { "menu_id": 2, "can_view": 1, "can_create": 0, "can_update": 0, "can_delete": 0 }
  ]
}
```

---

### 4.8 Shibir Endpoints

`/api/shibir` — GET list, POST create, PUT update, DELETE archive  
Slug is auto-generated: `{kebab-name}-{YYYYMMDD}-{random}`

---

### 4.9 Quiz Endpoints

| Method | Endpoint           | Auth | Description          |
|--------|--------------------|------|----------------------|
| GET    | `/api/quiz`        | ✅   | Admin list           |
| GET    | `/api/quiz/:uuid`  | ✅   | Admin detail         |
| POST   | `/api/quiz`        | ✅   | Create with questions|
| PUT    | `/api/quiz/:uuid`  | ✅   | Update               |
| DELETE | `/api/quiz/:uuid`  | ✅   | Archive              |
| GET    | `/api/quiz/:slug/public` | ❌ | Public view by slug|

**Create/Update quiz payload:**
```json
{
  "name": "Samaj Quiz 2025",
  "quiz_status": "draft",
  "questions": [
    { "title": "Your name?", "field_type": "text", "is_required": true },
    { "title": "Karyakar?", "field_type": "radio", "options": ["Yes","No"], "is_required": true },
    { "title": "Interests", "field_type": "checkbox", "options": ["Seva","Music","Sports"] }
  ]
}
```

---

### 4.10 Attendance Endpoints

| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| GET    | `/api/attendance`     | List (filter by date/type)|
| GET    | `/api/attendance/today` | Today's counts          |
| POST   | `/api/attendance`     | Manual mark              |
| POST   | `/api/attendance/scan`| QR scan mark             |

**Scan request:**
```json
{ "uuid": "member-uuid-here", "member_type": "yuvak", "date": "2025-01-15" }
```

**List query params:** `?date=2025-01-15&member_type=yuvak&shibir_id=1`

---

### 4.11 Dashboard Endpoint

| Method | Endpoint        | Description              |
|--------|-----------------|--------------------------|
| GET    | `/api/dashboard`| Counts + today attendance|

---

### 4.12 Public Endpoints

| Method | Endpoint                         | Description                     |
|--------|----------------------------------|---------------------------------|
| GET    | `/public/register/:type`         | Check if form active + dropdowns|
| POST   | `/public/register/yuvak`         | Submit yuvak registration       |
| POST   | `/public/register/yuvati`        | Submit yuvati registration      |
| GET    | `/public/quiz/:slug`             | View published quiz             |
| POST   | `/public/quiz/:slug/submit`      | Submit quiz answers             |

---

## 5. Auto-Migration System

When you change the database schema:

### Step 1 — Create a new migration file
```
backend/migrations/002_add_column_example.sql
```
Files are named with a numeric prefix to control order: `001_`, `002_`, etc.

### Step 2 — Write your ALTER statement
```sql
-- backend/migrations/002_add_photo_to_yuvaks.sql
ALTER TABLE yuvaks ADD COLUMN photo_url VARCHAR(255) DEFAULT NULL AFTER address;
```

### Step 3 — Run the migrator
```bash
php migrate.php
```

The runner:
1. Reads all `*.sql` files from `/migrations/` sorted by filename
2. Checks `migrations` table — skips already-applied files
3. Executes new files in order
4. Records them in `migrations` table

**Never** modify an already-applied migration file. Always create a new one.

### Migration examples
```sql
-- Add column
ALTER TABLE yuvaks ADD COLUMN blood_group VARCHAR(5) DEFAULT NULL;

-- Add index
ALTER TABLE attendances ADD INDEX idx_member (member_type, member_id);

-- Add table
CREATE TABLE IF NOT EXISTS sms_logs (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  mobile VARCHAR(15) NOT NULL,
  message TEXT NOT NULL,
  status ENUM('sent','failed') DEFAULT 'sent',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;
```

---

## 6. Authentication & Authorization

### JWT Token Flow
```
Login → Server returns JWT (8hr expiry)
       → Client stores in localStorage
       → Every request: Authorization: Bearer {token}
       → Server verifies signature + expiry
       → Loads user + role from DB
       → Permission check for protected actions
```

### JWT Payload
```json
{ "user_id": 1, "role_code": "SUPER_ADMIN", "iat": 1700000000, "exp": 1700028800 }
```

### Permission Matrix
- **SUPER_ADMIN** bypasses all permission checks
- All other roles: checked against `permissions` table per menu/action
- Frontend: `auth.hasPermission('yuvak', 'can_create')` hides/shows buttons
- Backend: `requirePermission($user, 'yuvak', 'create')` enforces at API level

### Password Security
- bcrypt with cost factor 12
- Minimum 8 characters enforced on both frontend and backend
- Reset tokens expire in 30 minutes, single-use

---

## 7. Module Breakdown

### Admin Modules

| Module     | List | Add | Edit | Delete | Special                          |
|------------|------|-----|------|--------|----------------------------------|
| Dashboard  | ✅   | ❌  | ❌   | ❌     | Live counts                      |
| Yuvak      | ✅   | ✅  | ✅   | ✅     | QR view, WhatsApp on add         |
| Yuvati     | ✅   | ✅  | ✅   | ✅     | QR view, WhatsApp on add         |
| Xetra      | ✅   | ✅  | ✅   | ✅     | —                                |
| Mandal     | ✅   | ✅  | ✅   | ✅     | —                                |
| Users      | ✅   | ✅  | ✅   | ✅     | Add from Yuvak list only         |
| Roles      | ✅   | ✅  | ❌   | ✅     | Permission matrix per menu       |
| Shibir     | ✅   | ✅  | ✅   | ✅     | Auto-slug                        |
| Quiz       | ✅   | ✅  | ✅   | ✅     | Dynamic questions, public link   |
| Attendance | ✅   | ✅  | ❌   | ❌     | QR scan, date filter, Yuvak/Yuvati|

### Yuvak ID Generation Algorithm
```
Input:  DB id=42, Xetra code="TI"
Step 1: encodeId(42) using base-32 alphabet (no confusable chars)
        42 in base 32 = "1A" → padded to 3 chars = "A1A"
Step 2: yuvakId = "YUVAK" + "TI" + "A1A"
Output: "YUVAKTIA1A"

Reverse: Strip "YUVAK", extract code (known length), decode rest → DB id
```

---

## 8. WhatsApp & QR Code Integration

### Flow
```
Member Registered → QrCodeService::generateForMember()
                 → Saves PNG to /storage/qr/{type}_{uuid}.png
                 → Returns public URL
                 → WhatsAppService::sendRegistrationMessage()
                 → Sends image + text to member's WhatsApp
```

### WhatsApp Providers

| Provider | Config                            | Best For       |
|----------|-----------------------------------|----------------|
| `meta`   | META_WHATSAPP_TOKEN + PHONE_ID    | Production      |
| `twilio` | TWILIO_ACCOUNT_SID + AUTH_TOKEN   | Sandbox/testing |
| `log`    | No config needed                  | Local dev       |

Set `WHATSAPP_PROVIDER=log` in development — messages are logged, not sent.

### QR Code Generation
1. **Primary:** `endroid/qr-code` composer library (local PNG generation)
2. **Fallback:** Google Charts QR API (no install needed)

Install primary:
```bash
composer require endroid/qr-code
```

### WhatsApp Message Template
```
🕉️ *TDD Samaj - Registration Successful!*

Jai Swaminarayan, *{Name}*!

Your *YUVAK ID* is:
📛 `YUVAKTIA1A`

Please save this ID for future reference.
Your personal QR code is attached — show it at the gate for attendance.

_TDD Management System_
```

---

## 9. Public Pages

### Registration Form
- **URL:** `/register/yuvak` or `/register/yuvati`
- **Controlled by:** `public_forms` table (`is_active` flag per type)
- **If inactive:** Shows "Registration Closed" message, returns 403
- **On success:** Shows member ID + "QR sent to WhatsApp" message

Admin can toggle via DB: `UPDATE public_forms SET is_active=1 WHERE form_type='yuvak';`  
*(Admin UI toggle for this can be added in a future sprint)*

### Public Quiz
- **URL:** `/quiz/{slug}`
- **Available only if:** `quiz_status = 'published'`
- **Supports all field types:** text, number, radio, checkbox, select
- **Anonymous submission** (respondent_type = 'guest')

---

## 10. Validation Rules

### Mobile Number
- Required for all members
- Pattern: `^[6-9]\d{9}$` (Indian 10-digit, starts 6-9)
- Unique among **active** records only (archived duplicates allowed)

### Uniqueness — Active-Only Rule
When adding a new Yuvak/Yuvati/Xetra/Mandal:
```sql
-- Check active only, not archived
SELECT id FROM yuvaks WHERE mo_number = ? AND status = 'active'
```
This means: if a Yuvak was archived and re-registers, they get a new record.

### Email
- Optional
- Must be valid format if provided

### Code (Xetra, Mandal, Role)
- Pattern: `^[A-Z0-9]{2,10}$` (case-insensitive input, stored UPPERCASE)
- Unique among active records

### Password
- Minimum 8 characters
- bcrypt-hashed (never stored plain)

### Karyakar
- Allowed values: `no`, `bal`, `yuva`, `sanyukta`

### Quiz Questions
- `title` is required for each question
- `options` required for field_type: radio, checkbox, select

---

## 11. Soft Delete Policy

All deletions are **archival**, not permanent:

```sql
-- Archive
UPDATE {table} SET status = 'archive' WHERE uuid = ?

-- All active queries filter:
WHERE status = 'active'
```

### Consequences
- Archived records never appear in lists or dropdowns
- Uniqueness is checked against active records only
- Foreign key constraints still hold (can't archive Xetra if active Yuvaks reference it — to be enforced in future)
- Attendance records referencing archived members are kept for historical data

### Archive Cascade (Manual)
When archiving a Yuvak, their `users` record is also archived:
```php
$pdo->prepare("UPDATE users SET status='archive' WHERE yuvak_id=?")->execute([$yuvakId]);
```

---

## 12. Error Handling

### Backend Error Response Format
```json
// Validation
{ "success": false, "message": "Validation failed", "errors": { "mo_number": "Invalid mobile number" } }

// Not found
{ "success": false, "message": "Yuvak not found" }

// Auth
{ "success": false, "message": "Unauthorized: Invalid or expired token" }
```

### Frontend Error Handling
1. **422 Validation** → Field-level error messages shown below each input
2. **401 Unauthorized** → Auto-logout + redirect to login
3. **403 Forbidden** → Toast: "Access denied"
4. **404 Not Found** → Toast: "Record not found"
5. **500 Server Error** → Toast: "Server error. Please try again."
6. **Network Error** → Toast: "Unable to connect to server."

### Toast System
- Auto-dismiss after 4 seconds
- Color-coded: green (success), red (error), yellow (warning), blue (info)
- Positioned bottom-right
- Multiple toasts stack vertically

---

## 13. Test Strategy

### Backend Tests (PHPUnit)

#### Unit Tests (`tests/Unit/`)
| Test File         | What It Tests                              |
|-------------------|--------------------------------------------|
| `IdEncoderTest`   | encodeId, decodeId, buildYuvakId, buildYuvatiId |
| `ValidationTest`  | Mobile, email, karyakar, code, password rules |
| `JwtTest`         | Token encode/decode, expiry, tampering      |

#### Feature Tests (`tests/Feature/`)
| Test File  | What It Tests                                        |
|------------|------------------------------------------------------|
| `ApiTest`  | Login, auth protection, CRUD validation, 404 handling|

**Run tests:**
```bash
cd backend
composer install
php vendor/bin/phpunit              # all
php vendor/bin/phpunit --testsuite Unit    # unit only
php vendor/bin/phpunit --testsuite Feature # feature (needs test DB)
```

**Feature test setup:**
```bash
export TEST_API_URL=http://localhost:8000/api
export TEST_ADMIN_MOBILE=9000000001
export TEST_ADMIN_PASSWORD=admin@123
php vendor/bin/phpunit --testsuite Feature
```

### Frontend Tests (Karma + Jasmine)

```bash
cd frontend
npm install
ng test          # unit tests (watch mode)
ng test --no-watch --code-coverage  # CI mode
```

Key test areas:
- `AuthService` — login, logout, token storage, permission checks
- `authInterceptor` — token injection, 401 auto-logout
- `ToastService` — add/remove/auto-dismiss
- Login component — form validation, API call, error display

### TDD Flow for New Features
```
1. Write test (describe expected behavior)
2. Run → test FAILS (red)
3. Write minimum code to pass
4. Run → test PASSES (green)
5. Refactor → test still PASSES
```

---

## 14. File & Folder Structure

```
project/
├── backend/
│   ├── config/
│   │   ├── app.php              # JWT secret, CORS, env
│   │   └── database.php         # PDO connection
│   ├── controllers/
│   │   ├── AuthController.php
│   │   ├── YuvakController.php
│   │   ├── YuvatiController.php
│   │   ├── CrudController.php   # Generic: Xetra, Mandal
│   │   ├── RoleController.php
│   │   ├── UserController.php
│   │   ├── ShibirController.php
│   │   ├── QuizController.php
│   │   ├── AttendanceController.php
│   │   └── PublicController.php
│   ├── helpers/
│   │   ├── response.php         # sendSuccess(), sendError()
│   │   ├── jwt.php              # jwtEncode(), jwtDecode()
│   │   └── id_encoder.php       # buildYuvakId(), encodeId()
│   ├── middleware/
│   │   └── auth.php             # requireAuth(), requirePermission()
│   ├── migrations/
│   │   └── 001_initial_schema.sql
│   ├── routes/
│   │   ├── auth.php
│   │   ├── yuvak.php
│   │   ├── yuvati.php
│   │   ├── xetra.php
│   │   ├── mandal.php
│   │   ├── users.php
│   │   ├── roles.php
│   │   ├── shibir.php
│   │   ├── quiz.php
│   │   ├── attendance.php
│   │   ├── dashboard.php
│   │   └── public.php
│   ├── services/
│   │   ├── NotificationService.php  # Orchestrator
│   │   ├── QrCodeService.php        # QR PNG generation
│   │   └── WhatsAppService.php      # Meta/Twilio/Log
│   ├── storage/
│   │   └── qr/                      # Generated QR PNGs
│   ├── tests/
│   │   ├── Unit/
│   │   │   ├── IdEncoderTest.php
│   │   │   ├── ValidationTest.php
│   │   │   └── JwtTest.php
│   │   └── Feature/
│   │       └── ApiTest.php
│   ├── .env.example
│   ├── composer.json
│   ├── index.php               # Front controller
│   ├── migrate.php             # Migration runner
│   └── phpunit.xml
│
└── frontend/
    ├── src/
    │   ├── app/
    │   │   ├── admin/
    │   │   │   ├── auth/
    │   │   │   │   ├── login/
    │   │   │   │   ├── forgot-password/
    │   │   │   │   └── reset-password/
    │   │   │   ├── layout/
    │   │   │   ├── dashboard/
    │   │   │   ├── yuvak/
    │   │   │   │   ├── yuvak-list/
    │   │   │   │   └── yuvak-form/
    │   │   │   ├── yuvati/
    │   │   │   │   ├── yuvati-list/
    │   │   │   │   └── yuvati-form/
    │   │   │   ├── xetra/
    │   │   │   ├── mandal/
    │   │   │   ├── users/
    │   │   │   ├── roles/
    │   │   │   ├── shibir/
    │   │   │   ├── quiz/
    │   │   │   │   ├── quiz-list/
    │   │   │   │   └── quiz-form/
    │   │   │   └── attendance/
    │   │   ├── public/
    │   │   │   ├── register/
    │   │   │   └── quiz/
    │   │   ├── core/
    │   │   │   ├── guards/
    │   │   │   │   └── auth.guard.ts
    │   │   │   ├── interceptors/
    │   │   │   │   └── auth.interceptor.ts
    │   │   │   ├── models/
    │   │   │   │   └── index.ts
    │   │   │   └── services/
    │   │   │       ├── api.service.ts
    │   │   │       ├── auth.service.ts
    │   │   │       └── toast.service.ts
    │   │   ├── shared/
    │   │   │   └── components/
    │   │   │       └── toast/
    │   │   ├── app.routes.ts
    │   │   └── app.config.ts
    │   ├── environments/
    │   │   └── environment.ts
    │   └── styles.scss
    └── package.json
```

---

## 15. Environment Setup

### Prerequisites
- PHP 8.1+
- MySQL 8.0+
- Node.js 18+
- Composer

### Backend Setup
```bash
cd backend
cp .env.example .env
# Edit .env with your DB credentials and secrets

# Install dependencies
composer install

# Run migrations (creates all tables)
php migrate.php

# Start dev server
php -S localhost:8000

# Seed first admin user (run once)
php seed_admin.php
```

### Create First Admin (one-time)
```php
// Run: php seed_admin.php
<?php
require_once 'config/database.php';
require_once 'helpers/id_encoder.php';

// 1. Create Xetra
$pdo->exec("INSERT IGNORE INTO xetras (uuid,name,code) VALUES (UUID(),'Head Office','HO')");
$xetraId = $pdo->query("SELECT id FROM xetras WHERE code='HO'")->fetchColumn();

// 2. Create Mandal  
$pdo->exec("INSERT IGNORE INTO mandals (uuid,name,code) VALUES (UUID(),'Main','MAIN')");
$mandalId = $pdo->query("SELECT id FROM mandals WHERE code='MAIN'")->fetchColumn();

// 3. Create Yuvak
$uuid = 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee';
$pdo->prepare("INSERT IGNORE INTO yuvaks (uuid,yuvak_id,first_name,last_name,mo_number,xetra_id,mandal_id) VALUES (?,?,?,?,?,?,?)")
    ->execute([$uuid,'YUVAK_ADMIN','Admin','User','9000000001',$xetraId,$mandalId]);
$yuvakId = $pdo->query("SELECT id FROM yuvaks WHERE uuid='$uuid'")->fetchColumn();

// 4. Get Super Admin role
$roleId = $pdo->query("SELECT id FROM roles WHERE code='SUPER_ADMIN'")->fetchColumn();

// 5. Create User
$hash = password_hash('admin@123', PASSWORD_BCRYPT, ['cost'=>12]);
$pdo->prepare("INSERT IGNORE INTO users (uuid,yuvak_id,role_id,mo_number,password) VALUES (UUID(),?,?,?,?)")
    ->execute([$yuvakId,$roleId,'9000000001',$hash]);

echo "Admin created: mobile=9000000001 password=admin@123\n";
```

### Frontend Setup
```bash
cd frontend
npm install
ng serve          # Development: http://localhost:4200
ng build          # Production build
```

### Apache/Nginx Config for Backend
```apache
# Apache .htaccess (put in backend/)
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ index.php [QSA,L]

# Add MIME type for JSON
AddType application/json .json
```

```nginx
# Nginx server block
location /api/ { try_files $uri /api/index.php?$query_string; }
location /public/ { try_files $uri /public/index.php?$query_string; }
```

---

## 16. Deployment Checklist

### Backend
- [ ] Set `APP_ENV=production` in `.env`
- [ ] Set strong `JWT_SECRET` (32+ random chars)
- [ ] Set `ALLOWED_ORIGINS` to production frontend URL
- [ ] Set `WHATSAPP_PROVIDER=meta` (or `twilio`) and fill credentials
- [ ] Run `php migrate.php` on production DB
- [ ] Set `storage/qr/` directory writable: `chmod 755 storage/qr/`
- [ ] Configure web server to serve `storage/qr/` as static files
- [ ] Enable PHP error logging (not display in production)
- [ ] Set up HTTPS

### Frontend
- [ ] Update `environment.ts` → `environment.prod.ts` with production API URLs
- [ ] Run `ng build --configuration production`
- [ ] Deploy `dist/` to web server
- [ ] Configure Angular router fallback (all routes → `index.html`)

### WhatsApp (Meta Cloud API) Setup
1. Create Meta Business account
2. Set up WhatsApp Business Platform
3. Get Phone Number ID and Access Token
4. Add to `.env`: `META_WHATSAPP_TOKEN` and `META_PHONE_NUMBER_ID`
5. Test with sandbox number before going live

---

## Appendix — ID Encoding Reference

| DB ID | Encoded | Yuvak ID (Xetra=TI) |
|-------|---------|----------------------|
| 1     | AAB     | YUVAKTIAAAB          |
| 42    | ABK     | YUVAKTIABK           |
| 100   | ADC     | YUVAKTIADC           |
| 1000  | AZ8     | YUVAKTIAZ8           |
| 9999  | 9PP     | YUVAKTI9PP           |

Alphabet used: `ABCDEFGHJKLMNPQRSTUVWXYZ23456789`  
(Excludes: I, O, 0, 1 to avoid visual confusion)

---

*Document maintained by TDD Samaj Tech Team. Update this file with every schema or API change.*
