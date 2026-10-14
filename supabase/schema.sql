-- Run in Supabase → SQL Editor
create extension if not exists "pgcrypto";

create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null check (char_length(name) between 2 and 80),
  email       text not null check (char_length(email) <= 120),
  phone       text not null check (phone ~ '^[6-9][0-9]{9}$'),
  company     text,
  service     text not null,
  budget      text not null,
  message     text not null check (char_length(message) between 10 and 2000),
  status      text not null default 'new' check (status in ('new','contacted','qualified','won','lost')),
  notes       text,
  ip_hash     text,
  user_agent  text
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_ip_hash_idx on public.leads (ip_hash, created_at desc);

-- RLS on with NO policies: the anon/public key can never read or write leads.
-- All access goes through server routes using the service-role key.
alter table public.leads enable row level security;
