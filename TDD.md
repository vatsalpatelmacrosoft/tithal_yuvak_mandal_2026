# TDD — Technical Design Document
## Yuvak Sabha Management System (Yuvak & Yuvati Samaj Portal)

**Stack:** Angular 17 (Frontend) · PHP 8.1+ (Backend) · MySQL 8 (Database)  
**Version:** 1.1.0 · **Date:** 2026-06-22

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Architecture](#2-architecture)
3. [Database Design](#3-database-design)
4. [API Design](#4-api-design)
5. [Auto-Migration System](#5-auto-migration-system)
6. [Authentication & Authorization](#6-authentication--authorization)
7. [Module Breakdown](#7-module-breakdown)
8. [SMS & QR Code Integration](#8-sms--qr-code-integration)
9. [Public Pages](#9-public-pages)
10. [Validation Rules](#10-validation-rules)
11. [Soft Delete Policy](#11-soft-delete-policy)
12. [Error Handling](#12-error-handling)
13. [Test Strategy](#13-test-strategy)
14. [File & Folder Structure](#14-file--folder-structure)
15. [Environment Setup](#15-environment-setup)
16. [Deployment Checklist](#16-deployment-checklist)
17. [Implementation Patterns](#17-implementation-patterns)

---

## 1. Project Overview

The Yuvak Sabha Management System manages members (Yuvak/Yuvati) of a Swaminarayan Samaj organization. It provides:

- **Admin Portal** — authenticated CRUD for all entities
- **Public Portal** — unauthenticated registration, quiz forms, and welcome card (controlled by admin)
- **Attendance Tracking** — QR scan-based or Member ID manual attendance
- **SMS Notifications** — auto-sends welcome SMS (Fast2SMS) to member on registration; admin can resend manually
- **Welcome Card** — public QR-based member identity card accessible without login
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
│  │                          │  │  /welcome/:type/:uuid    │ │
│  └──────────┬───────────────┘  └──────────┬───────────────┘ │
└─────────────┼────────────────────────────┼─────────────────┘
              │ HTTP (JWT Bearer)           │ HTTP (no auth)
              ▼                             ▼
┌─────────────────────────────────────────────────────────────┐
│                   PHP BACKEND (Apache/Nginx)                  │
│                                                               │
│  index.php ─► Router ─► Middleware ─► Controller ─► Service  │
│                            (Auth)       (CRUD)      (SMS)    │
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
xetras ──┬── mandals ──── yuvaks ──── attendances
         │           └─── yuvatis ─── attendances
         │
         └── users ──── roles ──── permissions ──── menus

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
Same structure as `xetras`, **plus** `xetra_id` FK (added in migration 004):

| Column   | Type         | Constraints          |
|----------|--------------|----------------------|
| xetra_id | INT UNSIGNED | FK → xetras.id, NULL |

Mandals are now scoped per Xetra. All forms and public dropdowns filter mandals by selected xetra.

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

| Method | Endpoint                   | Permission     | Description                  |
|--------|----------------------------|----------------|------------------------------|
| GET    | `/api/yuvak`               | yuvak:view     | List (paginated)             |
| GET    | `/api/yuvak/:uuid`         | yuvak:view     | Get single                   |
| GET    | `/api/yuvak/:uuid/qr`      | yuvak:view     | Get QR code URL              |
| POST   | `/api/yuvak`               | yuvak:create   | Create + send SMS            |
| PUT    | `/api/yuvak/:uuid`         | yuvak:update   | Update                       |
| DELETE | `/api/yuvak/:uuid`         | yuvak:delete   | Soft delete                  |
| POST   | `/api/yuvak/:uuid/notify`  | yuvak:view     | Resend welcome SMS           |

**Query params for GET list:** `?page=1&limit=20&search=ram&xetra_id=1&mandal_id=2`

**Yuvak ID format:** `YUVAK` + `{XETRACODE}` + `{BASE32_ENCODED_ID}`
- Example: ID=1, Xetra=`TI` → `YUVAKTIAAAB`

---

### 4.3 Yuvati Endpoints

Same as Yuvak but `/api/yuvati` and permission `yuvati:*`, including:

| Method | Endpoint                    | Permission    | Description        |
|--------|-----------------------------|---------------|--------------------|
| POST   | `/api/yuvati/:uuid/notify`  | yuvati:view   | Resend welcome SMS |

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

| Method | Endpoint           | Permission     | Notes                              |
|--------|--------------------|----------------|------------------------------------|
| GET    | `/api/mandal`      | mandal:view    | Supports `?xetra_id=` filter       |
| POST   | `/api/mandal`      | mandal:create  | Requires `xetra_id` in body        |
| PUT    | `/api/mandal/:uuid`| mandal:update  | Requires `xetra_id` in body        |
| DELETE | `/api/mandal/:uuid`| mandal:delete  |                                    |

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

| Method | Endpoint              | Description               |
|--------|-----------------------|---------------------------|
| GET    | `/api/attendance`     | List (filter by date/type)|
| GET    | `/api/attendance/today` | Today's counts           |
| POST   | `/api/attendance`     | Manual mark               |
| POST   | `/api/attendance/scan`| QR scan or Member ID mark |

**Scan request** — accepts UUID (from QR camera) or plain Member ID (manual entry):
```json
{ "identifier": "YUVAKTIAAAB", "member_type": "yuvak", "date": "2025-01-15" }
```
The backend auto-detects by regex: UUID pattern → lookup by uuid; otherwise → lookup by member_id.

**List query params:** `?date=2025-01-15&member_type=yuvak&shibir_id=1`

---

### 4.11 Dashboard Endpoint

| Method | Endpoint        | Description              |
|--------|-----------------|--------------------------|
| GET    | `/api/dashboard`| Counts + today attendance|

---

### 4.12 Public Endpoints

| Method | Endpoint                         | Description                          |
|--------|----------------------------------|--------------------------------------|
| GET    | `/public/register/:type`         | Check if form active + dropdowns     |
| POST   | `/public/register/yuvak`         | Submit yuvak registration            |
| POST   | `/public/register/yuvati`        | Submit yuvati registration           |
| GET    | `/public/quiz/:slug`             | View published quiz                  |
| POST   | `/public/quiz/:slug/submit`      | Submit quiz answers                  |
| GET    | `/public/welcome/:type/:uuid`    | Welcome card data (member_id, name, xetra, mandal) |
| GET    | `/public/mandal`                 | Mandals list; supports `?xetra_id=` filter |

**Welcome card response:**
```json
{
  "success": true,
  "data": {
    "member_id": "YUVAKTIAAAB",
    "full_name": "Ram Patel",
    "xetra_name": "Tithal Xetra",
    "mandal_name": "Main Mandal"
  }
}
```

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

### Applied Migrations
| File | Description |
|------|-------------|
| `001_initial_schema.sql`         | All core tables |
| `002_quiz_extended_schema.sql`   | Quiz participants, submissions, answers |
| `003_question_types.sql`         | Extended question type fields |
| `004_mandal_xetra.sql`           | Adds `xetra_id FK` to `mandals` table |
| `005_yuvati_support.sql`         | Yuvati table support |
| `006_quiz_participant_mobile.sql` | Mobile column on quiz_participants |
| `007_quiz_show_result.sql`       | `show_result` flag on quizzes |
| `008_performance_indexes.sql`    | Composite indexes for quiz & attendance high-load |
| `009_index_cleanup_and_race_fix.sql` | Deduplicate quiz_participants; upgrade to UNIQUE for race protection; compound pagination indexes |

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
- Backend: `guard($user, 'yuvak', 'create', fn() => ...)` enforces at API level

### Password Security
- bcrypt with cost factor 12
- Minimum 8 characters enforced on both frontend and backend
- Reset tokens expire in 30 minutes, single-use

---

## 7. Module Breakdown

### Admin Modules

| Module     | List | Add | Edit | Delete | Special                                      |
|------------|------|-----|------|--------|----------------------------------------------|
| Dashboard  | ✅   | ❌  | ❌   | ❌     | Live counts                                  |
| Yuvak      | ✅   | ✅  | ✅   | ✅     | QR view, SMS on add, Welcome link copy       |
| Yuvati     | ✅   | ✅  | ✅   | ✅     | QR view, SMS on add, Welcome link copy       |
| Xetra      | ✅   | ✅  | ✅   | ✅     | —                                            |
| Mandal     | ✅   | ✅  | ✅   | ✅     | Scoped to Xetra                              |
| Users      | ✅   | ✅  | ✅   | ✅     | Add from Yuvak list only                     |
| Roles      | ✅   | ✅  | ❌   | ✅     | Permission matrix per menu                   |
| Shibir     | ✅   | ✅  | ✅   | ✅     | Auto-slug                                    |
| Quiz       | ✅   | ✅  | ✅   | ✅     | Dynamic questions, public link, IST timezone |
| Attendance | ✅   | ✅  | ❌   | ❌     | QR camera scan or Member ID entry            |

### Toolbar UI Pattern (all list pages)
All list modules use a unified two-part toolbar layout:
- **Hero section**: icon + title + subtitle + badge — no Add button
- **`.toolbar` strip** inside `.table-card`:
  - `.toolbar-left` — search input + filter dropdowns
  - `.toolbar-right` — Add button (saffron orange, matches hero button style)

Defined globally in `frontend/src/styles.scss`.

### Welcome Link (Yuvak/Yuvati list)
Each row in Yuvak and Yuvati list tables has a **Welcome** column with a QR icon button.  
Click copies `window.location.origin + /welcome/yuvak/{uuid}` to clipboard via `navigator.clipboard.writeText`.  
Method: `copyWelcomeLink(member)` in both `yuvak-list.component.ts` and `yuvati-list.component.ts`.

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

## 8. SMS & QR Code Integration

WhatsApp has been replaced with **Fast2SMS** (plain SMS, India). The `WhatsAppService.php` is retained but unused.

### SMS Flow
```
Member Registered → NotificationService::onYuvakRegistered()
                 → SmsService::send(mo_number, message)
                 → Fast2SMS API (route=q, Quick SMS)
                 → SMS sent with Member ID + Welcome link

Admin Resend     → POST /api/yuvak/:uuid/notify
                 → NotificationService::resendWelcome()
                 → SmsService::send()
```

### SMS Providers

| Provider    | Config                        | Best For       |
|-------------|-------------------------------|----------------|
| `fast2sms`  | `FAST2SMS_API_KEY` in `.env`  | Production (India SMS) |
| `log`       | No config needed              | Local dev (logs to file) |

Set `SMS_PROVIDER=fast2sms` in `.env`. If `FAST2SMS_API_KEY` is missing, falls back to log.

### Welcome Link in SMS
```
FRONTEND_URL/welcome/{type}/{uuid}
```
Built from `FRONTEND_URL` in `.env`. On the Angular side built from `window.location.origin`.

### SMS Message Template
```
Jai Swaminarayan!

Your TDD Samaj registration is confirmed.

Member ID: YUVAKTIAAAB
Welcome Card: https://yourdomain.com/welcome/yuvak/{uuid}

Show this link at the gate for attendance.
- Yuvak Sabha Management System
```

### QR Code Generation (attendance)
- Backend still generates QR PNG for member cards via `QrCodeService.php`
- Stored in `storage/qr/{type}_{uuid}.png`
- Angular Welcome Card renders a fresh QR using `angularx-qrcode` (client-side, encodes UUID)

---

## 9. Public Pages

### Registration Form
- **URL:** `/register/yuvak` or `/register/yuvati`
- **Controlled by:** `public_forms` table (`is_active` flag per type)
- **If inactive:** Shows "Registration Closed" message, returns 403
- **On success:** Shows member ID + "SMS sent" message
- **Mandal dropdown:** Disabled until Xetra is selected; fetches `GET /public/mandal?xetra_id=` on xetra change

Admin can toggle via DB: `UPDATE public_forms SET is_active=1 WHERE form_type='yuvak';`

### Welcome Card (public, no auth)
- **URL:** `/welcome/:type/:uuid` — e.g. `/welcome/yuvak/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
- **Data:** `member_id`, `full_name`, `xetra_name`, `mandal_name`
- **QR:** Client-side QR code rendered via `QRCodeModule` from `angularx-qrcode@17.0.1` — encodes the UUID
- **Logo:** BAPS logo image (`assets/Baps_logo.svg.png`)
- **Route:** `{ path: 'welcome/:type/:uuid', loadComponent: () => import('./public/welcome/welcome.component') }`
- **Backend:** `GET /public/welcome/:type/:uuid` → `PublicController::welcomeCard()`

> **Important:** Import `QRCodeModule` (not `QRCodeComponent`) from `angularx-qrcode`. The standalone component export does not exist in v17.

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
│   │   └── PublicController.php # welcomeCard(), getMandalsForXetra()
│   ├── helpers/
│   │   ├── response.php         # sendSuccess(), sendError()
│   │   ├── jwt.php              # jwtEncode(), jwtDecode()
│   │   └── id_encoder.php       # buildYuvakId(), encodeId()
│   ├── middleware/
│   │   └── auth.php             # requireAuth(), requirePermission(), guard()
│   ├── migrations/
│   │   ├── 001_initial_schema.sql
│   │   └── 004_mandal_xetra.sql # adds xetra_id FK to mandals
│   ├── routes/
│   │   ├── auth.php
│   │   ├── yuvak.php            # includes /notify endpoint
│   │   ├── yuvati.php           # includes /notify endpoint
│   │   ├── xetra.php
│   │   ├── mandal.php
│   │   ├── users.php
│   │   ├── roles.php
│   │   ├── shibir.php
│   │   ├── quiz.php
│   │   ├── attendance.php
│   │   ├── dashboard.php
│   │   └── public.php           # welcome card, mandal filter, register, quiz
│   ├── services/
│   │   ├── NotificationService.php  # Orchestrator — uses SmsService
│   │   ├── SmsService.php           # Fast2SMS / log fallback
│   │   ├── QrCodeService.php        # QR PNG generation
│   │   └── WhatsAppService.php      # Kept but unused
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
│   ├── index.php               # Front controller; sets Asia/Kolkata timezone
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
    │   │   │   │   ├── yuvak-list/  # copyWelcomeLink(), Welcome column
    │   │   │   │   └── yuvak-form/  # xetra→mandal cascade filter
    │   │   │   ├── yuvati/
    │   │   │   │   ├── yuvati-list/ # copyWelcomeLink(), Welcome column
    │   │   │   │   └── yuvati-form/ # xetra→mandal cascade filter
    │   │   │   ├── xetra/
    │   │   │   ├── mandal/
    │   │   │   ├── users/
    │   │   │   ├── roles/
    │   │   │   ├── shibir/
    │   │   │   ├── quiz/
    │   │   │   │   ├── quiz-list/
    │   │   │   │   └── quiz-form/
    │   │   │   └── attendance/      # QR camera + Member ID entry
    │   │   ├── public/
    │   │   │   ├── register/        # xetra→mandal cascade filter
    │   │   │   ├── quiz/
    │   │   │   └── welcome/         # welcome.component.* — QR + member info
    │   │   ├── core/
    │   │   │   ├── guards/
    │   │   │   │   └── auth.guard.ts
    │   │   │   ├── interceptors/
    │   │   │   │   └── auth.interceptor.ts
    │   │   │   ├── models/
    │   │   │   │   └── index.ts
    │   │   │   └── services/
    │   │   │       ├── api.service.ts   # get/post/put/delete + publicGet/publicPost
    │   │   │       ├── auth.service.ts
    │   │   │       └── toast.service.ts
    │   │   ├── shared/
    │   │   │   └── components/
    │   │   │       └── toast/
    │   │   ├── app.routes.ts        # welcome/:type/:uuid route added
    │   │   └── app.config.ts
    │   ├── assets/
    │   │   └── Baps_logo.svg.png    # BAPS logo (replaces 🕉️ emoji everywhere)
    │   ├── environments/
    │   │   └── environment.ts       # apiUrl + publicUrl
    │   └── styles.scss              # .toolbar, .toolbar-left, .toolbar-right
    └── package.json                 # angularx-qrcode@17.0.1
```

---

## 15. Environment Setup

### Prerequisites
- PHP 8.1+ (tested up to PHP 8.5)
- MySQL 8.0+
- Node.js 18+
- Composer

### Backend `.env` Variables
```dotenv
# App
APP_ENV=local
APP_TIMEZONE=Asia/Kolkata
FRONTEND_URL=http://localhost:4200
ALLOWED_ORIGINS=http://localhost:4200

# Database
DB_HOST=127.0.0.1
DB_NAME=tdd_samaj
DB_USER=root
DB_PASS=

# JWT
JWT_SECRET=your-32-char-secret-here

# SMS (Fast2SMS)
SMS_PROVIDER=fast2sms
FAST2SMS_API_KEY=your-fast2sms-api-key

# Legacy — kept but unused
WHATSAPP_PROVIDER=log
```

### Backend Setup
```bash
cd backend
cp .env.example .env
# Edit .env with your DB credentials and secrets

composer install
php migrate.php      # creates all tables
php -S localhost:8000
php seed_admin.php   # first admin user (run once)
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
$pdo->exec("INSERT IGNORE INTO mandals (uuid,name,code,xetra_id) VALUES (UUID(),'Main','MAIN',$xetraId)");
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

### Mobile Testing (Cloudflare Tunnel)
```bash
cloudflared tunnel --url http://localhost:8000
```
Free, no account needed. Gives a temporary public HTTPS URL.  
After each restart update `.env`: `APP_URL`, `FRONTEND_URL`, `ALLOWED_ORIGINS`.

### Apache/Nginx Config for Backend
```apache
# Apache .htaccess (put in backend/)
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ index.php [QSA,L]
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
- [ ] Set `APP_TIMEZONE=Asia/Kolkata`
- [ ] Set strong `JWT_SECRET` (32+ random chars)
- [ ] Set `ALLOWED_ORIGINS` to production frontend URL
- [ ] Set `FRONTEND_URL` to production frontend URL (used in SMS welcome links)
- [ ] Set `SMS_PROVIDER=fast2sms` and `FAST2SMS_API_KEY`
- [ ] Run `php migrate.php` on production DB
- [ ] Set `storage/qr/` directory writable: `chmod 755 storage/qr/`
- [ ] Configure web server to serve `storage/qr/` as static files
- [ ] Enable PHP error logging (not display in production)
- [ ] Set up HTTPS

### Frontend
- [ ] Update `environment.ts` → `environment.prod.ts` with production API URLs
- [ ] Confirm `publicUrl` points to `https://yourdomain.com/public`
- [ ] Run `ng build --configuration production`
- [ ] Deploy `dist/` to web server
- [ ] Configure Angular router fallback (all routes → `index.html`)
- [ ] Ensure `/welcome/*` routes are included in the fallback (no auth guard)

### Fast2SMS Setup
1. Register at fast2sms.com (India SMS provider)
2. Get API key from dashboard
3. Add to `.env`: `FAST2SMS_API_KEY=<key>`
4. Uses `route=q` (Quick SMS), 10-digit Indian numbers only
5. Test with a real mobile number before go-live

---

## 17. Implementation Patterns

### PHP Route `guard()` Helper

All routes use the `guard()` helper from `backend/middleware/auth.php`.  
PHP's `match()` does **not** support comma-separated conditions — each arm must be a single expression:

```php
// backend/routes/yuvak.php
match (true) {
    $method === 'GET'    && !$id       => guard($user, 'yuvak', 'view',   fn() => $ctrl->index()),
    $method === 'GET'    && $id        => guard($user, 'yuvak', 'view',   fn() => $ctrl->show($id)),
    $method === 'POST'   && !$id       => guard($user, 'yuvak', 'create', fn() => $ctrl->store()),
    $method === 'PUT'    && $id        => guard($user, 'yuvak', 'update', fn() => $ctrl->update($id)),
    $method === 'DELETE' && $id        => guard($user, 'yuvak', 'delete', fn() => $ctrl->destroy($id)),
    $method === 'POST'   && $sub==='notify' => guard($user, 'yuvak', 'view', fn() => $ctrl->notify($id)),
    default => sendError('Not found', 404),
};
```

### Xetra → Mandal Cascade Filter

Yuvak/Yuvati forms and the public registration form all filter mandals by the selected xetra:

```typescript
// In form components
this.form.get('xetra_id')!.valueChanges.subscribe(xetraId => {
  if (!xetraId) return;
  if (!this.isEdit) this.form.get('mandal_id')!.reset();
  this.api.get(`/mandal?xetra_id=${xetraId}`).subscribe(res => {
    this.mandals = res.data;
  });
});
```

Public register uses `publicGet('/mandal?xetra_id=...')`. Mandal dropdown is disabled until xetra is chosen.

### BAPS Logo

All instances of the `🕉️` emoji are replaced with the BAPS logo image:

```html
<img src="assets/Baps_logo.svg.png" class="logo-img" alt="BAPS">
```

| Location    | CSS classes                              | Size          |
|-------------|------------------------------------------|---------------|
| Login page  | `.logo-ring` (white bg, orange border)  | 74×74px       |
| Sidebar     | `.brand-icon-wrap` (white circle, shadow)| 28×28px      |
| Welcome card| inline in template                       | as designed   |

### Quiz Timezone Fix

PHP defaults to UTC. Quiz `start_time`/`end_time` are stored in IST, so comparison must also be in IST:

```php
// backend/index.php — top of file
date_default_timezone_set('Asia/Kolkata');
```

Also set `APP_TIMEZONE=Asia/Kolkata` in `.env`. Without this, quizzes show "Not Started Yet" even when they have started.

### PHP 8.5 Compatibility

`curl_close()` is deprecated in PHP 8.5 and throws an `ErrorException` (because `set_error_handler` promotes PHP errors). Removed from `WhatsAppService.php` in both `sendViaTwilio()` and `httpPost()` — curl handles are automatically freed when they go out of scope.

### Attendance Scan — UUID vs Member ID

`AttendanceController::scan()` accepts either format:

```php
$identifier = $body['identifier'];
$isUuid = preg_match('/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i', $identifier);
if ($isUuid) {
    // lookup by uuid
} else {
    // lookup by member_id (e.g. YUVAKTIAAAB)
}
```

Angular camera scanner uses `html5-qrcode` library (`Html5Qrcode('qr-scan-region')`, `facingMode: 'environment'`). On scan: stops camera, closes dialog, sets identifier in input, calls `markAttendance()`.

### Angular `QRCodeModule` Import

Use `QRCodeModule` (not `QRCodeComponent`) from `angularx-qrcode@17.0.1`:

```typescript
// welcome.component.ts
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  standalone: true,
  imports: [CommonModule, QRCodeModule],
  ...
})
```

```html
<!-- welcome.component.html -->
<qrcode [qrdata]="memberUuid" [width]="200" [errorCorrectionLevel]="'M'"></qrcode>
```

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
