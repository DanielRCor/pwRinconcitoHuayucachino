# Rinconcito Huayucachino

Web del restaurante (Astro, estática) con panel `/admin` para publicar eventos y artistas.
Los eventos viven en **Supabase**, así que los cambios del panel aparecen al instante, sin redesplegar.

## 1. Supabase (una sola vez)
1. Crea un proyecto gratis en https://supabase.com.
2. **SQL Editor** → pega y ejecuta `supabase/schema.sql` (eventos, imágenes y seguridad). Luego, en otra consulta, ejecuta `supabase/002_casa_platos.sql` (texto de "La casa" y platos del carrusel).
3. **Authentication → Users → Add user**: crea el usuario admin (correo + contraseña, marca *Auto confirm*).
4. **Authentication → Sign In / Providers → Email**: desactiva **Allow new users to sign up**. Así nadie más puede registrarse.
5. **Project Settings → API**: copia `Project URL` y la `anon public key`.

> La anon key es pública por diseño (va en el navegador). Lo que protege los datos son las políticas RLS: solo usuarios autenticados pueden crear, editar o borrar. Nunca subas la `service_role` key.

## 2. Local
```bash
cp .env.example .env   # pega URL y anon key
npm install
npm run dev            # http://localhost:4321  y  /admin
```

## 3. Netlify
1. *Add new site → Import from GitHub* → este repo. El build ya está en `netlify.toml`.
2. *Site configuration → Environment variables*: agrega `PUBLIC_SUPABASE_URL` y `PUBLIC_SUPABASE_ANON_KEY`.
3. Despliega. El panel queda en `https://TU-SITIO.netlify.app/admin`.

## Personalizar
- Teléfono/WhatsApp, dirección, horarios y redes: `src/config.ts`.
- Textos y platos: `src/pages/index.astro`.
- Colores y tipografías: `src/styles/global.css`.

## Uso del panel
- Sube el afiche, completa artista, nombre, fecha y marca **Mostrar en grande al inicio** para que ocupe la portada. Solo un evento a la vez puede estar en portada.
- Los eventos pasados se ocultan solos de la web.

## Posicionamiento en Google (SEO)
Lo que ya trae la web:
- Un solo `<h1>` con el nombre "Rinconcito Huayucachino", `<title>` y meta description con el nombre y la zona (Carapongo, Chosica).
- Datos estructurados `Restaurant` (JSON-LD) para la ficha de Google, URL canónica, Open Graph (`public/og.png`) para WhatsApp y Facebook.
- `sitemap-index.xml` y `robots.txt` automáticos; `/admin` queda fuera de Google.

Lo que tienes que hacer tú (es lo que más pesa):
1. **Pon la URL real** en `site.url` de `src/config.ts` (por ejemplo `https://rinconcitohuayucachino.netlify.app`). En Netlify, el nombre del sitio define el subdominio: usa `huayucachino` si está libre.
2. **Pon los enlaces reales** de Facebook, Instagram y TikTok en `src/config.ts`. Así Google entiende que la web y el Facebook son del mismo negocio.
3. **Google Search Console** (https://search.google.com/search-console): agrega la propiedad con prefijo de URL, verifica con la etiqueta HTML (pégala en `src/layouts/Base.astro`), envía `sitemap-index.xml` y pide la indexación de la portada.
4. **Perfil de Empresa de Google** (Google Maps): crea o reclama la ficha del restaurante y pon el enlace a la web. Para búsquedas locales es lo que más ayuda.
5. **Enlaza la web desde tus redes**: en la bio de Facebook, Instagram y TikTok, y en las publicaciones de cada evento.
6. Opcional: un dominio propio (`huayucachino.pe` o `.com`) da más confianza y es más fácil de recordar.

Google suele tardar entre unos días y unas semanas en indexar una web nueva.
