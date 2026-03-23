# Paola Zerpa — Sitio Web Personal

## Stack
- React 18 + TypeScript
- Vite 6
- React Router 7
- Tailwind CSS 4

## Páginas
- `/` — Home (Hero, Problema, Caminos, Enfoque, Blog preview, CTA, Contacto)
- `/guia` — Landing de la guía gratuita
- `/blog` — Blog con grid y categorías
- `/contacto` — Página de contacto
- `/programa` — Coming soon (equipos)

## Correr en local

```bash
npm install
npm run dev
```

## Deploy en Netlify (recomendado)

1. Subí la carpeta a un repo en GitHub
2. Conectá el repo en [app.netlify.com](https://app.netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. El archivo `public/_redirects` ya maneja el SPA routing ✓

## Deploy en Vercel

1. Subí la carpeta a un repo en GitHub
2. Importá en [vercel.com](https://vercel.com)
3. Framework: Vite (detecta automático)
4. El archivo `vercel.json` ya maneja el routing ✓

## PDF de la guía

Reemplazá el archivo placeholder:
`public/guia-ecosistema-personal.pdf`
con tu PDF real antes de deployar.

## WhatsApp

El número de contacto está hardcodeado como `5491133652899`.
Verificá que sea correcto en:
- `src/app/components/ContactoSection.tsx`
- `src/app/components/ContactoPage.tsx`

## Fuentes (Google Fonts)
- Fraunces (italic) — títulos principales
- MuseoModerno — subtítulos
- Space Grotesk — body text
- Space Mono — labels, etiquetas, CTAs
