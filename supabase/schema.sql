-- Ejecuta este script en Supabase > SQL Editor (una sola vez).

create table if not exists public.events (
  id           uuid primary key default gen_random_uuid(),
  title        text not null,
  artist       text not null,
  description  text,
  event_date   timestamptz not null,
  image_url    text,
  is_featured  boolean not null default false,
  is_published boolean not null default true,
  created_at   timestamptz not null default now()
);

alter table public.events enable row level security;

-- Cualquiera puede ver los eventos publicados
drop policy if exists "public read published" on public.events;
create policy "public read published" on public.events
  for select using (is_published = true);

-- Solo usuarios autenticados (el admin) pueden ver todo y modificar
drop policy if exists "admin read all" on public.events;
create policy "admin read all" on public.events
  for select to authenticated using (true);

drop policy if exists "admin insert" on public.events;
create policy "admin insert" on public.events
  for insert to authenticated with check (true);

drop policy if exists "admin update" on public.events;
create policy "admin update" on public.events
  for update to authenticated using (true) with check (true);

drop policy if exists "admin delete" on public.events;
create policy "admin delete" on public.events
  for delete to authenticated using (true);

-- Bucket público para las imágenes de los eventos
insert into storage.buckets (id, name, public)
values ('event-images', 'event-images', true)
on conflict (id) do nothing;

drop policy if exists "admin upload images" on storage.objects;
create policy "admin upload images" on storage.objects
  for insert to authenticated with check (bucket_id = 'event-images');

drop policy if exists "admin update images" on storage.objects;
create policy "admin update images" on storage.objects
  for update to authenticated using (bucket_id = 'event-images');

drop policy if exists "admin delete images" on storage.objects;
create policy "admin delete images" on storage.objects
  for delete to authenticated using (bucket_id = 'event-images');
