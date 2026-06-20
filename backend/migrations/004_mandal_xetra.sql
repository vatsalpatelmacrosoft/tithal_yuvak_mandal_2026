-- Migration 004: Add xetra_id to mandals

ALTER TABLE mandals
    ADD COLUMN xetra_id INT UNSIGNED NULL AFTER code,
    ADD CONSTRAINT fk_mandal_xetra FOREIGN KEY (xetra_id) REFERENCES xetras(id) ON DELETE SET NULL;
