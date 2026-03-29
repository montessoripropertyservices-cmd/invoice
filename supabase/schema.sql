create extension if not exists pgcrypto;

create table if not exists public.day_entries (
  id uuid primary key default gen_random_uuid(),
  work_date date not null,
  location text not null,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.day_entry_employees (
  id uuid primary key default gen_random_uuid(),
  day_entry_id uuid not null references public.day_entries(id) on delete cascade,
  employee_name text not null,
  hours numeric(6,2) not null check (hours >= 0),
  created_at timestamptz not null default timezone('utc', now())
);

alter table public.day_entries enable row level security;
alter table public.day_entry_employees enable row level security;

create policy "Allow public insert day_entries"
on public.day_entries
for insert
to anon
with check (true);

create policy "Allow public select day_entries"
on public.day_entries
for select
to anon
using (true);

create policy "Allow public insert day_entry_employees"
on public.day_entry_employees
for insert
to anon
with check (true);

create policy "Allow public select day_entry_employees"
on public.day_entry_employees
for select
to anon
using (true);
