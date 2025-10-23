-- Enable UUID generation
create extension if not exists pgcrypto;

-- Enums
do $$ begin
  create type job_location_type as enum ('remote','hybrid','onsite');
exception when duplicate_object then null; end $$;

do $$ begin
  create type job_commitment as enum ('full_time','part_time','contract','internship');
exception when duplicate_object then null; end $$;

do $$ begin
  create type compensation_interval as enum ('year','month','week','day','hour');
exception when duplicate_object then null; end $$;

do $$ begin
  create type job_status as enum ('draft','published','archived');
exception when duplicate_object then null; end $$;

-- Jobs table
create table if not exists public.jobs (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  -- publication
  status job_status not null default 'draft',
  published_at timestamptz,

  -- identity
  title text not null,
  slug text unique not null,

  -- company
  company_name text,
  company_website text,

  -- role details
  location text,
  location_type job_location_type,
  commitment job_commitment,
  language text,

  -- compensation
  salary_currency text default 'USD',
  salary_min numeric,
  salary_max numeric,
  rate_interval compensation_interval,
  compensation_notes text,

  -- content
  description_md text,
  tags text[] not null default '{}',

  -- application
  apply_email text,
  apply_url text
);

-- keep updated_at fresh
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists jobs_set_updated_at on public.jobs;
create trigger jobs_set_updated_at
before update on public.jobs
for each row execute function public.set_updated_at();

-- RLS: allow public read of published jobs
alter table public.jobs enable row level security;

drop policy if exists "Public read published jobs" on public.jobs;
create policy "Public read published jobs" on public.jobs
for select to anon, authenticated
using (status = 'published');

-- Convenience view for public jobs
create or replace view public.public_jobs as
select id, title, slug, company_name, location, location_type, commitment, language,
       salary_currency, salary_min, salary_max, rate_interval, compensation_notes,
       description_md, tags, apply_email, apply_url, published_at, created_at
from public.jobs
where status = 'published';

