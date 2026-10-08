-- ============================================================
-- Optional BAPS ID for Yuvak / Yuvati members
-- e.g. VP1997947 / VP19979741 — alphanumeric, max 10 chars.
-- ============================================================
ALTER TABLE yuvaks  ADD COLUMN baps_id VARCHAR(10) DEFAULT NULL AFTER birth_date;
ALTER TABLE yuvatis ADD COLUMN baps_id VARCHAR(10) DEFAULT NULL AFTER birth_date;
