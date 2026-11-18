-- Ejecuta este script en Supabase > SQL Editor (después de schema.sql).
-- Agrega los textos editables de "La casa" y los platos del carrusel.

create table if not exists public.site_content (
  key        text primary key,
  value      text not null,
  updated_at timestamptz not null default now()
);

create table if not exists public.dishes (
  id           uuid primary key default gen_random_uuid(),
  name         text not null,
  description  text,
  image_url    text,
  position     int  not null default 0,
  is_published boolean not null default true,
  created_at   timestamptz not null default now()
);

alter table public.site_content enable row level security;
alter table public.dishes enable row level security;

drop policy if exists "public read content" on public.site_content;
create policy "public read content" on public.site_content for select using (true);
drop policy if exists "admin write content" on public.site_content;
create policy "admin write content" on public.site_content for all to authenticated using (true) with check (true);

drop policy if exists "public read dishes" on public.dishes;
create policy "public read dishes" on public.dishes for select using (is_published = true);
drop policy if exists "admin all dishes" on public.dishes;
create policy "admin all dishes" on public.dishes for all to authenticated using (true) with check (true);

-- Textos iniciales de "La casa" (se pueden cambiar desde el panel)
insert into public.site_content (key, value) values
  ('casa_title', 'La casa'),
  ('casa_text', 'Rinconcito Huayucachino es un restaurante familiar en Carapongo, Lurigancho - Chosica. Cocinamos la sazón de Huayucachi y el valle del Mantaro como en casa, con leña, y abrimos la tarima a artistas para que la sobremesa se vuelva fiesta.')
on conflict (key) do nothing;
