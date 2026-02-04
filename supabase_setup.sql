-- ================================================
-- HARVESTER SUPABASE SCHEMA v2.1 (с Дедупликацией)
-- ================================================
-- ВНИМАНИЕ: Перед запуском удалите старые таблицы!

-- ================================================
-- УДАЛЕНИЕ СТАРЫХ ТАБЛИЦ (если существуют)
-- ================================================
DROP TABLE IF EXISTS casting_candidates CASCADE;
DROP TABLE IF EXISTS fingerprint_harvest CASCADE;

-- ================================================
-- 1. Таблица для "Цифровых Двойников" (Фингерпринты)
-- ================================================
CREATE TABLE fingerprint_harvest (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  
  -- Метаданные устройства
  os text,
  browser_version text,
  
  -- Полный фингерпринт (Canvas, Audio, WebGL, Fonts)
  fingerprint_data jsonb NOT NULL,

  -- SHA-256 хеш для дедупликации (UNIQUE!)
  fingerprint_hash text UNIQUE NOT NULL,
  
  -- Счетчик использования ботом (0 = свежий)
  usage_count int DEFAULT 0
);

-- ================================================
-- 2. Таблица для "Кандидатов" (Данные с формы)
-- ================================================
CREATE TABLE casting_candidates (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  
  -- Личные данные
  full_name text NOT NULL,
  email text UNIQUE NOT NULL,  -- UNIQUE! Один email = один кандидат
  phone text NOT NULL,
  
  -- Дата рождения (полная)
  dob_day int,
  dob_month int,
  dob_year int,
  
  -- Адрес (полный)
  house_number text,
  street text,
  city text,
  postcode text,
  
  -- Социальные сети
  instagram text,
  
  -- Мотивация
  why_you text,
  
  -- NDA согласие
  nda_agreed boolean DEFAULT false,
  
  -- Связь с фингерпринтом
  fingerprint_id uuid REFERENCES fingerprint_harvest(id)
);

-- ================================================
-- RLS (Row Level Security)
-- ================================================
ALTER TABLE fingerprint_harvest ENABLE ROW LEVEL SECURITY;
ALTER TABLE casting_candidates ENABLE ROW LEVEL SECURITY;

-- ================================================
-- ПОЛИТИКИ ДОСТУПА
-- ================================================

-- Разрешаем анонимную ВСТАВКУ (сайт отправляет данные)
CREATE POLICY "anon_insert_fingerprints" 
ON fingerprint_harvest FOR INSERT 
TO anon 
WITH CHECK (true);

CREATE POLICY "anon_insert_candidates" 
ON casting_candidates FOR INSERT 
TO anon 
WITH CHECK (true);

-- Разрешаем ЧТЕНИЕ только для service_role (бекенд/бот)
CREATE POLICY "service_select_fingerprints" 
ON fingerprint_harvest FOR SELECT 
TO service_role 
USING (true);

CREATE POLICY "service_select_candidates" 
ON casting_candidates FOR SELECT 
TO service_role 
USING (true);

-- Разрешаем ОБНОВЛЕНИЕ только для service_role
CREATE POLICY "service_update_fingerprints" 
ON fingerprint_harvest FOR UPDATE
TO service_role 
USING (true);

-- ================================================
-- ИНДЕКСЫ ДЛЯ ПРОИЗВОДИТЕЛЬНОСТИ
-- ================================================
CREATE INDEX idx_fingerprint_hash ON fingerprint_harvest(fingerprint_hash);
CREATE INDEX idx_fingerprint_os ON fingerprint_harvest(os);
CREATE INDEX idx_fingerprint_usage ON fingerprint_harvest(usage_count);
CREATE INDEX idx_candidates_email ON casting_candidates(email);
CREATE INDEX idx_candidates_created ON casting_candidates(created_at DESC);

-- ================================================
-- ПРИМЕЧАНИЯ
-- ================================================
-- • fingerprint_hash UNIQUE: Один фингерпринт записывается ОДИН раз
-- • email UNIQUE: Одна заявка на email
-- • Код сайта использует UPSERT с onConflict для обработки дубликатов
-- • usage_count = 0 означает свежий фингерпринт, 1+ = использован ботом
