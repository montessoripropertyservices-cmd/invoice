create extension if not exists pgcrypto;

create table if not exists public.day_entries (
  id uuid primary key default gen_random_uuid(),
  work_date date not null,
  location text not null,
  comments text not null default '',
  related_reference text not null default '',
  attachments jsonb not null default '[]'::jsonb,
  archived_at timestamptz,
  created_by uuid not null default auth.uid(),
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.day_entry_employees (
  id uuid primary key default gen_random_uuid(),
  day_entry_id uuid not null references public.day_entries(id) on delete cascade,
  employee_name text not null,
  hours numeric(6,2) not null check (hours >= 0),
  created_by uuid not null default auth.uid(),
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.purchase_entries (
  id uuid primary key default gen_random_uuid(),
  purchase_date date not null,
  related_reference text not null default '',
  receipt_total numeric(10,2) not null check (receipt_total >= 0),
  receipt_files jsonb not null default '[]'::jsonb,
  receipt_text text not null default '',
  created_by uuid not null default auth.uid(),
  created_at timestamptz not null default timezone('utc', now())
);

alter table public.day_entries
add column if not exists created_by uuid default auth.uid();

alter table public.day_entries
add column if not exists comments text default '';

alter table public.day_entries
add column if not exists related_reference text default '';

alter table public.day_entries
add column if not exists attachments jsonb default '[]'::jsonb;

alter table public.day_entries
add column if not exists archived_at timestamptz;

alter table public.day_entry_employees
add column if not exists created_by uuid default auth.uid();

alter table public.purchase_entries
add column if not exists created_by uuid default auth.uid();

alter table public.purchase_entries
add column if not exists related_reference text default '';

alter table public.purchase_entries
add column if not exists receipt_total numeric(10,2) default 0;

alter table public.purchase_entries
add column if not exists receipt_files jsonb default '[]'::jsonb;

alter table public.purchase_entries
add column if not exists receipt_text text default '';

create unique index if not exists day_entries_created_by_work_date_idx
on public.day_entries (created_by, work_date);

alter table public.day_entries enable row level security;
alter table public.day_entry_employees enable row level security;
alter table public.purchase_entries enable row level security;

drop policy if exists "Allow public insert day_entries" on public.day_entries;
drop policy if exists "Allow public select day_entries" on public.day_entries;
drop policy if exists "Allow public insert day_entry_employees" on public.day_entry_employees;
drop policy if exists "Allow public select day_entry_employees" on public.day_entry_employees;
drop policy if exists "Allow public insert purchase_entries" on public.purchase_entries;
drop policy if exists "Allow public select purchase_entries" on public.purchase_entries;

create policy "Allow authenticated insert day_entries"
on public.day_entries
for insert
to authenticated
with check (auth.uid() = created_by);

create policy "Allow authenticated select own day_entries"
on public.day_entries
for select
to authenticated
using (auth.uid() = created_by);

create policy "Allow authenticated update own day_entries"
on public.day_entries
for update
to authenticated
using (auth.uid() = created_by)
with check (auth.uid() = created_by);

create policy "Allow authenticated insert day_entry_employees"
on public.day_entry_employees
for insert
to authenticated
with check (auth.uid() = created_by);

create policy "Allow authenticated select own day_entry_employees"
on public.day_entry_employees
for select
to authenticated
using (auth.uid() = created_by);

create policy "Allow authenticated insert purchase_entries"
on public.purchase_entries
for insert
to authenticated
with check (auth.uid() = created_by);

create policy "Allow authenticated select own purchase_entries"
on public.purchase_entries
for select
to authenticated
using (auth.uid() = created_by);

insert into storage.buckets (id, name, public)
values ('day-attachments', 'day-attachments', true)
on conflict (id) do nothing;

drop policy if exists "Allow authenticated upload day attachments" on storage.objects;
drop policy if exists "Allow public read day attachments" on storage.objects;

create policy "Allow authenticated upload day attachments"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'day-attachments');

create policy "Allow public read day attachments"
on storage.objects
for select
to public
using (bucket_id = 'day-attachments');
