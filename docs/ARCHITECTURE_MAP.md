# Architecture Map — paolazerpa.com

Mapa técnico vivo del proyecto.

Última revisión manual: 2026-08-02

## 1. Entrada de la aplicación

Boot:
- [`src/main.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/main.tsx) monta `App`
- [`src/app/App.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/App.tsx) monta `RouterProvider`
- [`src/app/routes.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/routes.tsx) declara todas las rutas
- [`src/entry-prerender.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/entry-prerender.tsx) expone el render de rutas para prerender estático
- [`scripts/prerender.mjs`](/Users/paolazerpa/Desktop/apps/paola-web/scripts/prerender.mjs) inyecta HTML renderizado en cada `index.html` generado

## 2. Estructura de rutas

Home:
- `/` compone `NavBar`, `HeroSection`, `ProblemaQuienSoySection`, `HomeApproachSection`, `CaminosSection`, `HomeMethodSection`, `HomeStartSection`, `HomeProjectsSection`, `FooterSection`
- `/` hoy renderiza en este orden: `NavBar`, `HeroSection`, `ProblemaQuienSoySection`, `HomeApproachSection`, `CaminosSection`, `HomeMethodSection`, `HomeStartSection`, `HomeProjectsSection`, `FooterSection`

Portfolio profesional:
- `/portfolio` → `PortfolioPage`
- `PortfolioPage` compone hero profesional, selected work, proceso, capacidades, CTA y `FooterSection`
- `PortfolioProjectCard` se reutiliza en Home y `/portfolio`
- `PortfolioProjectCard` usa la variante `home` para el teaser breve y `portfolio` para el contexto profesional completo
- [`src/app/data/portfolioProjects.ts`](/Users/paolazerpa/Code/paola-web/src/app/data/portfolioProjects.ts) es la fuente compartida para los proyectos
- no existe todavía `/portfolio/:slug`; la estructura queda preparada para incorporarla cuando exista el primer case study completo

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
- hoy la navegación principal visible expone `Inicio`, `Mi historia`, `Notas` y `Contacto`
- `/guia` y `/programa` siguen como rutas públicas directas, pero quedan fuera del menú principal

Home:
- [`src/app/components/HeroSection.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/HeroSection.tsx)
- [`src/app/components/ProblemaQuienSoySection.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/ProblemaQuienSoySection.tsx)
- [`src/app/components/HomeApproachSection.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/HomeApproachSection.tsx)
- [`src/app/components/CaminosSection.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/CaminosSection.tsx)
- [`src/app/components/HomeMethodSection.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/HomeMethodSection.tsx)
- [`src/app/components/HomeStartSection.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/HomeStartSection.tsx)
- [`src/app/components/HomeProjectsSection.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/HomeProjectsSection.tsx)

Portfolio:
- [`src/app/components/PortfolioPage.tsx`](/Users/paolazerpa/Code/paola-web/src/app/components/PortfolioPage.tsx)
- [`src/app/components/PortfolioProjectCard.tsx`](/Users/paolazerpa/Code/paola-web/src/app/components/PortfolioProjectCard.tsx)
- [`src/app/data/portfolioProjects.ts`](/Users/paolazerpa/Code/paola-web/src/app/data/portfolioProjects.ts)
- [`src/app/data/pageMetadata.ts`](/Users/paolazerpa/Code/paola-web/src/app/data/pageMetadata.ts)

Soporte compartido:
- [`src/app/components/GuideCaptureForm.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/GuideCaptureForm.tsx) centraliza la captura de guía en versión completa y compacta
- [`src/app/components/brand/BrandButton.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/brand/BrandButton.tsx) centraliza botones de marca sobre `AppLink`
- [`src/app/components/brand/SectionLabel.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/brand/SectionLabel.tsx) centraliza labels numerados de sección
- [`src/app/components/brand/PaperNote.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/brand/PaperNote.tsx) centraliza notas manuscritas tipo papel

Detalle relevante del hero:
- `HeroSection` usa `useIsMobile()` para ajustar spacing, grilla y escala tipográfica
- el eyebrow visible es `Hola, soy Paola`
- el título visible abre con `Todo lo que construyes depende del sistema que hay detrás.`
- la bajada conecta el problema con la solución: diseñar una estructura clara para ordenar procesos, producto y decisiones
- el claim vive en una nota de papel: `Diseño que ordena y conecta.`
- usa `paola-problema-scene.jpg` como foto provisional del hero
- los CTAs visibles hoy son `Ver portfolio` y `Hablemos`
- las CTAs de servicios resuelven navegación interna hacia `/contacto#email`

Páginas:
- [`src/app/components/GuiaPage.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/GuiaPage.tsx)
- [`src/app/components/BlogPage.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/BlogPage.tsx)
- [`src/app/components/BlogNotePage.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/BlogNotePage.tsx)
- [`src/app/components/BlogCards.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/BlogCards.tsx)
- [`src/app/components/ContactoPage.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/ContactoPage.tsx)
- [`src/app/components/MiHistoriaPage.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/MiHistoriaPage.tsx)
- [`src/app/components/ProgramaPage.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/ProgramaPage.tsx)
- [`src/app/components/FooterSection.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/FooterSection.tsx)

Detalle relevante de `/mi-historia`:
- usa la nueva capa visual compartida (`pz-page`, `pz-dark`, `BrandButton`, `SectionLabel`, `PaperNote`)
- mantiene el relato en tres momentos: `Antes`, `Giro` y `Hoy`
- el hero usa `paola-mi-historia-portrait.png` como foto principal de Paola, con fondo suavemente desenfocado y persona enfocada
- los CTAs principales apuntan a `/contacto#email`, `/#servicios` y `/`
- el copy y las CTAs usan lenguaje neutral, sin asumir que la audiencia es solo femenina

Detalle relevante de `/contacto`:
- usa la nueva capa visual compartida (`pz-page`, `pz-dark`, `BrandButton`, `SectionLabel`, `PaperNote`)
- organiza la página en tres bloques numerados: `Contacto`, `Para qué escribirme` y `Cómo empezar`
- mantiene WhatsApp como CTA principal y email como canal secundario visible
- conserva el ancla `id="email"` para las CTAs internas que navegan a `/contacto#email`

## 4. Patrón responsive vigente

Fuente de verdad:
- [`src/app/hooks/useIsMobile.ts`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/hooks/useIsMobile.ts)

Regla aplicada:
- breakpoint por defecto `< 768`
- los componentes responsive adaptan layout y estilos con `useIsMobile()` sin duplicar el contenido semántico por viewport
- en prerender del lado servidor, el fallback actual renderiza variante desktop porque `window` no existe
- en mobile, `CaminosSection` evita depender del flip por hover y presenta el frente y el detalle de cada servicio en flujo continuo
- en mobile, el detalle de cada servicio omite el número y título repetidos para mantener una sola jerarquía visible
- en mobile, `HomeApproachSection` conserva una sola capa de video visible y omite la capa desenfocada duplicada
- `HeroSection` mantiene una capa nítida a ancho completo para mostrar en la misma escena a Paola y la computadora; el titular usa saltos de línea intencionales
- `ProblemaQuienSoySection` presenta tres problemas concretos de producto y operación desde un único array de contenido y usa `problem-cta-paper` para el CTA con textura y bordes rasgados
- `HomeApproachSection` comparte un único H2 y un único bloque visual de copy entre breakpoints; solo cambia composición, escala, contraste y video decorativo
- `HeroSection` comparte un único H1, bajada, CTAs y tags; en desktop usa `object-position: center top` para recuperar la parte superior de la fotografía y una columna más ancha para mantener unido `Todo lo que construyes`

Patrón esperado:

```tsx
const isMobile = useIsMobile();
return <section style={{ padding: isMobile ? "24px" : "80px" }}>...contenido único...</section>;
```

## 5. Datos centralizados

Notas:
- [`src/app/data/blogPosts.ts`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/data/blogPosts.ts)
- contiene tipos, tonos de portada, lista de posts, post destacado y selector por slug

Guía:
- [`src/app/data/guideCapture.ts`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/data/guideCapture.ts)
- `GUIDE_PDF_URL` apunta al PDF estático
- `GUIDE_CAPTURE_ENDPOINT` está vacío por defecto
- [`src/app/data/pageMetadata.ts`](/Users/paolazerpa/Code/paola-web/src/app/data/pageMetadata.ts) centraliza title y description de rutas con metadata específica

## 6. Estilos y assets

Entrada de estilos:
- [`src/main.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/main.tsx) importa `fonts.css` y `theme.css` directamente

Fuentes:
- [`src/styles/fonts.css`](/Users/paolazerpa/Desktop/apps/paola-web/src/styles/fonts.css)
- [`index.html`](/Users/paolazerpa/Desktop/apps/paola-web/index.html) carga Google Fonts

Theme base heredado:
- [`src/styles/theme.css`](/Users/paolazerpa/Desktop/apps/paola-web/src/styles/theme.css)
- define tokens de la nueva capa visual (`arena-clara`, `mar-profundo`, `magenta`, `citron-loto`, etc.) y clases compartidas `pz-*`

Assets visuales:
- [`src/assets/paola-portrait.jpg`](/Users/paolazerpa/Desktop/apps/paola-web/src/assets/paola-portrait.jpg)
- [`src/assets/paola-full.jpg`](/Users/paolazerpa/Desktop/apps/paola-web/src/assets/paola-full.jpg)
- [`src/assets/paola-photo2.jpg`](/Users/paolazerpa/Desktop/apps/paola-web/src/assets/paola-photo2.jpg)
- [`src/assets/paola-photo3.jpg`](/Users/paolazerpa/Desktop/apps/paola-web/src/assets/paola-photo3.jpg)
- [`src/assets/paola-mi-historia.jpg`](/Users/paolazerpa/Code/paola-web/src/assets/paola-mi-historia.jpg) — foto principal de `/mi-historia`
- [`src/assets/paola-mi-historia-portrait.png`](/Users/paolazerpa/Code/paola-web/src/assets/paola-mi-historia-portrait.png) — versión retrato con fondo desenfocado para hero de `/mi-historia`
- [`src/assets/paola-problema-scene.jpg`](/Users/paolazerpa/Code/paola-web/src/assets/paola-problema-scene.jpg) — foto provisional de hero
- [`src/assets/paola-enfoque.jpg`](/Users/paolazerpa/Code/paola-web/src/assets/paola-enfoque.jpg) — imagen disponible, no conectada al home actual
- [`public/paola-hero-video.mov`](/Users/paolazerpa/Code/paola-web/public/paola-hero-video.mov) — video provisional de sección 03 / enfoque
- [`src/assets/service-sistema-medida.jpg`](/Users/paolazerpa/Code/paola-web/src/assets/service-sistema-medida.jpg)
- [`src/assets/service-espacio-digital.jpg`](/Users/paolazerpa/Code/paola-web/src/assets/service-espacio-digital.jpg)
- [`src/assets/service-hecho-sistema.jpg`](/Users/paolazerpa/Code/paola-web/src/assets/service-hecho-sistema.jpg)
- [`src/assets/service-vida-sistema.jpg`](/Users/paolazerpa/Code/paola-web/src/assets/service-vida-sistema.jpg)

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
- `scripts/prerender.mjs` reemplaza title, description y Open Graph básico por ruta antes de escribir cada HTML

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
