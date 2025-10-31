create table if not exists public.musclepilot_logs (id text primary key, data jsonb);
alter table public.musclepilot_logs enable row level security;
do $$ begin
  if not exists (select 1 from pg_policies where schemaname='public' and tablename='musclepilot_logs' and policyname='allow_anon_all') then
    create policy allow_anon_all on public.musclepilot_logs for all using (true) with check (true);
  end if;
end $$;