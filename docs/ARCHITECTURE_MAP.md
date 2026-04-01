# Architecture Map — paolazerpa.com

Mapa técnico vivo del proyecto.

Última revisión manual: 2026-03-30

## 1. Entrada de la aplicación

Boot:
- [`src/main.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/main.tsx) monta `App`
- [`src/app/App.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/App.tsx) monta `RouterProvider`
- [`src/app/routes.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/routes.tsx) declara todas las rutas
- [`src/entry-prerender.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/entry-prerender.tsx) expone el render de rutas para prerender estático
- [`scripts/prerender.mjs`](/Users/paolazerpa/Desktop/apps/paola-web/scripts/prerender.mjs) inyecta HTML renderizado en cada `index.html` generado

## 2. Estructura de rutas

Home:
- `/` compone `NavBar`, `HeroSection`, `ProblemaQuienSoySection`, `CaminosSection`, `NotasProcesoSection`, `ContactoSection`, `FooterSection`

Páginas independientes:
- `/guia` → `GuiaPage`
- `/programa` → `ProgramaPage`
- `/notas` → `BlogPage`
- `/notas/:slug` → `BlogNotePage`
- `/contacto` → `ContactoPage`
- `/mi-historia` → `MiHistoriaPage`

## 3. Componentes clave por responsabilidad

Navegación:
- [`src/app/components/NavBar.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/NavBar.tsx)
- [`src/app/components/AppLink.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/AppLink.tsx)
- [`src/app/utils/navigation.ts`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/utils/navigation.ts)

Home:
- [`src/app/components/HeroSection.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/HeroSection.tsx)
- [`src/app/components/ProblemaQuienSoySection.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/ProblemaQuienSoySection.tsx)
- [`src/app/components/CaminosSection.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/CaminosSection.tsx)
- [`src/app/components/NotasProcesoSection.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/NotasProcesoSection.tsx)
- [`src/app/components/ContactoSection.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/ContactoSection.tsx)

Detalle relevante del hero:
- `HeroSection` mantiene ramas separadas para mobile y desktop con `useIsMobile()`
- el titular visible hoy se resuelve en tres líneas alineadas a la izquierda
- el eyebrow `HOLA, SOY PAOLA` ya no forma parte del hero
- la bajada usa un fragmento con énfasis en negrita dentro del texto

Páginas:
- [`src/app/components/GuiaPage.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/GuiaPage.tsx)
- [`src/app/components/BlogPage.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/BlogPage.tsx)
- [`src/app/components/BlogNotePage.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/BlogNotePage.tsx)
- [`src/app/components/BlogCards.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/BlogCards.tsx)
- [`src/app/components/ContactoPage.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/ContactoPage.tsx)
- [`src/app/components/MiHistoriaPage.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/MiHistoriaPage.tsx)
- [`src/app/components/ProgramaPage.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/ProgramaPage.tsx)
- [`src/app/components/FooterSection.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/FooterSection.tsx)

## 4. Patrón responsive vigente

Fuente de verdad:
- [`src/app/hooks/useIsMobile.ts`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/hooks/useIsMobile.ts)

Regla aplicada:
- breakpoint por defecto `< 768`
- cada componente responsive suele tener una rama mobile y otra desktop
- en prerender del lado servidor, el fallback actual renderiza variante desktop porque `window` no existe

Patrón esperado:

```tsx
const isMobile = useIsMobile();
if (isMobile) return <section>...mobile...</section>;
return <section>...desktop...</section>;
```

## 5. Datos centralizados

Notas:
- [`src/app/data/blogPosts.ts`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/data/blogPosts.ts)
- contiene tipos, tonos de portada, lista de posts, post destacado y selector por slug

Guía:
- [`src/app/data/guideCapture.ts`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/data/guideCapture.ts)
- `GUIDE_PDF_URL` apunta al PDF estático
- `GUIDE_CAPTURE_ENDPOINT` está vacío por defecto

## 6. Estilos y assets

Entrada de estilos:
- [`src/main.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/main.tsx) importa `fonts.css` y `theme.css` directamente

Fuentes:
- [`src/styles/fonts.css`](/Users/paolazerpa/Desktop/apps/paola-web/src/styles/fonts.css)
- [`index.html`](/Users/paolazerpa/Desktop/apps/paola-web/index.html) carga Google Fonts

Theme base heredado:
- [`src/styles/theme.css`](/Users/paolazerpa/Desktop/apps/paola-web/src/styles/theme.css)

Assets visuales:
- [`src/assets/paola-portrait.jpg`](/Users/paolazerpa/Desktop/apps/paola-web/src/assets/paola-portrait.jpg)
- [`src/assets/paola-full.jpg`](/Users/paolazerpa/Desktop/apps/paola-web/src/assets/paola-full.jpg)
- [`src/assets/paola-photo2.jpg`](/Users/paolazerpa/Desktop/apps/paola-web/src/assets/paola-photo2.jpg)
- [`src/assets/paola-photo3.jpg`](/Users/paolazerpa/Desktop/apps/paola-web/src/assets/paola-photo3.jpg)

## 7. Deploy y routing de SPA

Netlify:
- [`public/_redirects`](/Users/paolazerpa/Desktop/apps/paola-web/public/_redirects)

Vercel:
- [`vercel.json`](/Users/paolazerpa/Desktop/apps/paola-web/vercel.json)

Build:
- [`vite.config.ts`](/Users/paolazerpa/Desktop/apps/paola-web/vite.config.ts)
- script `npm run build`
- scripts de Vite usando `--configLoader runner`
- CSS usando `lightningcss`
- `npm run build` ahora ejecuta build cliente, build SSR y prerender estático por ruta

## 8. Riesgos y particularidades actuales

- El sistema hoy funciona sin depender del plugin de Tailwind; cualquier reintroducción debe validarse con build.
- `theme.css` fue simplificado para no depender de directivas de Tailwind/PostCSS.
- `AppLink` y `navigateWithScroll` existen para mantener navegación interna con scroll al tope; si se cambia navegación, hay que revisar ambos.
- Hay cambios locales sin commit en el worktree; ver [`docs/PROJECT_STATUS.md`](/Users/paolazerpa/Desktop/apps/paola-web/docs/PROJECT_STATUS.md).
- El prerender actual expone HTML visible para indexación, pero emite warnings de `useLayoutEffect` en build SSR; hoy no bloquean el build.

## 9. Cuándo actualizar este documento

Actualizar cuando cambie:
- el árbol de rutas
- la composición del home
- la responsabilidad de componentes clave
- la forma de resolver responsive
- la ubicación de fuentes de verdad o utilidades compartidas
