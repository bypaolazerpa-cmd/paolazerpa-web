# Paola Zerpa — Sitio Web Personal

Sitio personal de Paola Zerpa para presentar su enfoque, abrir conversaciones de trabajo y ofrecer una guía gratuita como punto de entrada.

## Stack

- React 18 + TypeScript
- Vite 6
- React Router 7
- estilos inline como patrón principal
- `lightningcss` vía Vite para el pipeline actual de CSS

## Rutas actuales

- `/` — Home
- `/guia` — Landing de la guía gratuita
- `/notas` — Archivo de notas
- `/notas/:slug` — Detalle de nota
- `/mi-historia` — Historia y posicionamiento personal
- `/contacto` — Página de contacto
- `/programa` — Coming soon para equipos

## Desarrollo local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Nota:
- los scripts de Vite usan `--configLoader runner` para evitar fallos de resolución observados en este entorno
- Tailwind quedó removido del pipeline y de las dependencias activas

## Deploy

Netlify:
- usa [`public/_redirects`](/Users/paolazerpa/Desktop/apps/paola-web/public/_redirects)

Vercel:
- usa [`vercel.json`](/Users/paolazerpa/Desktop/apps/paola-web/vercel.json)

Antes de deployar:
- validar `npm run build`
- revisar links de navegación
- revisar WhatsApp y email
- reemplazar [`public/guia-ecosistema-personal.pdf`](/Users/paolazerpa/Desktop/apps/paola-web/public/guia-ecosistema-personal.pdf) si corresponde

## Documentación viva

La documentación base del proyecto vive en:

- [`AGENTS.md`](/Users/paolazerpa/Desktop/apps/paola-web/AGENTS.md)
- [`docs/FOUNDATIONS.md`](/Users/paolazerpa/Desktop/apps/paola-web/docs/FOUNDATIONS.md)
- [`docs/ARCHITECTURE_MAP.md`](/Users/paolazerpa/Desktop/apps/paola-web/docs/ARCHITECTURE_MAP.md)
- [`docs/CONTENT_OPERATIONS.md`](/Users/paolazerpa/Desktop/apps/paola-web/docs/CONTENT_OPERATIONS.md)
- [`docs/PROJECT_STATUS.md`](/Users/paolazerpa/Desktop/apps/paola-web/docs/PROJECT_STATUS.md)

Regla práctica:
- si cambian rutas, arquitectura, contenido estructural, contacto, deploy o decisiones base, actualizar estos documentos en el mismo cambio

## Contacto hardcodeado actual

- WhatsApp: `https://wa.me/5491133652899`
- Email: `by.paolazerpa@gmail.com`

## Tipografías

- Fraunces italic
- MuseoModerno
- Space Grotesk
- Space Mono

Se cargan desde Google Fonts en [`index.html`](/Users/paolazerpa/Desktop/apps/paola-web/index.html).
