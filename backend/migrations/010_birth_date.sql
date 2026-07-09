-- ============================================================
-- Birth date for Yuvak / Yuvati members
-- Nullable at DB level (existing rows have no value); required
-- going forward via application-level validation.
-- ============================================================
ALTER TABLE yuvaks  ADD COLUMN birth_date DATE DEFAULT NULL AFTER last_name;
ALTER TABLE yuvatis ADD COLUMN birth_date DATE DEFAULT NULL AFTER last_name;
