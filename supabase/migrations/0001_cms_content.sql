create table if not exists public.cms_content (
  key text primary key,
  data jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.cms_content enable row level security;

drop policy if exists "cms_content public read" on public.cms_content;
create policy "cms_content public read"
on public.cms_content
for select
using (true);

drop policy if exists "cms_content service role write" on public.cms_content;
create policy "cms_content service role write"
on public.cms_content
for all
using (auth.role() = 'service_role')
with check (auth.role() = 'service_role');

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists cms_content_set_updated_at on public.cms_content;
create trigger cms_content_set_updated_at
before update on public.cms_content
for each row
execute function public.set_updated_at();

