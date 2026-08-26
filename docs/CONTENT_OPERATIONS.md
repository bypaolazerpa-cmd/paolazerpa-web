# Content & Operations — paolazerpa.com

Documento vivo para contenido estructural, contacto, conversión, assets y deploy.

Última revisión manual: 2026-08-02

## 1. Mensaje del sitio

Eje actual:
- sistemas
- claridad
- estructura
- sostenibilidad
- intención

Voz:
- español neutro
- directa
- sin placeholder
- sin tono corporativo genérico
- no asumir audiencia exclusivamente femenina; Paola trabaja con mujeres, hombres, profesionales,
  dueños de negocio, emprendimientos, startups y equipos mixtos

## 2. CTAs y conversiones

Punto de entrada principal:
- guía gratuita en `/guia`

Portfolio profesional:
- `/portfolio` es la página de presentación profesional de Paola como Product Designer.
- el home usa `SelectedWorkSection` inmediatamente después del hero y deriva a `/portfolio`.
- `AreasOfWorkSection` ocupa la sección 03 del home y presenta cuatro áreas de intervención de Product Design con imágenes editoriales compartidas.
- `/portfolio` prioriza el recorrido `01 — Portfolio`, `02 — Trabajo seleccionado`, `03 — Otros proyectos` y `04 — Hablemos`.
- El hero funciona como entrada compacta de escaneo y su CTA principal lleva a `#selected-work`.
- Trabajo seleccionado muestra preview, tipo, transformación principal, descripción breve, participación y CTA por proyecto.
- El orden editorial es NODUX, GeStock y Sistemas de operación de tienda; Cosmic Studio queda como proyecto secundario.
- Cosmic Studio aparece como trabajo secundario.
- los previews visuales actuales son placeholders intencionales y deben reemplazarse por screenshots reales antes de presentar casos completos.

Canales de acción:
- WhatsApp como CTA principal
- email como canal secundario
- las cards de servicios del home concentran la conversión en `/contacto`

Exposición para indexación:
- las rutas públicas ahora se prerenderizan a HTML estático durante el build
- esto permite que bots lean copy visible sin depender de ejecutar JavaScript del cliente

Páginas y secciones que convierten:
- [`src/app/components/HeroSection.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/HeroSection.tsx)
- [`src/app/components/CaminosSection.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/CaminosSection.tsx)
- [`src/app/components/ContactoPage.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/ContactoPage.tsx)
- [`src/app/components/ProgramaPage.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/ProgramaPage.tsx)
- [`src/app/components/PortfolioPage.tsx`](/Users/paolazerpa/Code/paola-web/src/app/components/PortfolioPage.tsx)

Estado actual de `/contacto`:
- WhatsApp se mantiene como acción principal de inicio de conversación
- email se presenta como alternativa secundaria, visible y clara
- la página quedó migrada a una composición compacta de dos columnas sobre la capa visual compartida (`pz-page`, `pz-dark`, `SectionLabel`)
- el copy organiza en un mismo bloque la conversación inicial, tres motivos editoriales y los canales directos
- el mensaje quedó simplificado para reducir carga de lectura y priorizar acción directa
- el bloque de correo expone `id="email"` y margen de scroll para navegación con hash

Estado actual de `/guia`:
- la promesa se presenta como primer paso concreto para revisar prioridades, fricciones y forma de organización
- el formulario prioriza una sola acción principal: dejar el email para recibir la guía
- el CTA secundario hacia `/` quedó orientado a entender mejor el enfoque
- la salida inferior hacia `/contacto` quedó resuelta como siguiente paso posterior a la guía

Estado actual de `/mi-historia`:
- la V3 organiza la página en cinco bloques editoriales compactos: `Mi historia`, `Recorrido`, `Lo que ese camino me dejó`, `Dónde lo aplico` y `Conectemos`
- el recorrido mantiene una única timeline y una única fuente de contenido (`journeyMoments`), con placeholders editoriales `VISUAL 01`–`VISUAL 04`
- el hero usa tres placeholders circulares para presente, migración/Buenos Aires y distintos caminos; no genera ni incorpora imágenes nuevas
- el cierre usa `FOTO FINAL` como espacio preparado para un retrato real y deja LinkedIn como CTA pendiente sin URL inventada
- el diseño reduce paddings, escala tipográfica y alturas visuales para acortar especialmente el scroll mobile
- la página mantiene un único árbol semántico y adapta la presentación con `useIsMobile()`

Estado actual del hero:
- eyebrow:
  `Paola Zerpa · Product Designer`
- texto principal:
  `Todo lo que construyes depende del sistema que hay detrás.`
- bajada:
  `Diseño productos digitales que ordenan procesos, información y decisiones para hacerlos más claros y fáciles de usar.`
- línea inferior:
  `Diseño sistémico · Producto digital · Procesos · Personas`
- CTA principal:
  `Ver portfolio`
- CTA secundario:
  `Hablemos`
- el hero muestra el label `Hola, soy Paola`
- el hero incorpora una nota manuscrita como pieza de marca:
  `Diseño que ordena y conecta.`
- el hero usa `paola-problema-scene.jpg` como foto provisional

Estado actual del home:
- problema:
  headline breve y directo sobre recordar, saber qué hacer y revisar cambios; tres problemas concretos de operación, producto y crecimiento/estructura con explicaciones breves, fondo de identidad sin fotografía y recursos de papel rasgado
- enfoque:
  bloque con `public/paola-hero-video.mov` como video provisional. El bloque sobre video contiene únicamente `No diseño piezas sueltas.` y `Ordeno procesos, información y decisiones para mejorar la experiencia.`
- servicios:
  tres servicios principales: `Producto digital`, `Sistema de trabajo` y `Web o tienda online`; cada uno se presenta con una única descripción breve, sin la división interna `Para qué`
- método:
  recorrido compacto `Comprender`, `Investigar`, `Organizar`, `Diseñar`, `Evolucionar`, con microcopy de metadata
- cierre:
  sección `Hablemos` con una bajada breve y CTA hacia `/contacto`; no incluye el recorrido anterior de cuatro pasos
- portfolio:
  teaser Home con tres proyectos destacados y cards clickeables hacia `/portfolio#gestock`, `/portfolio#nodux` y `/portfolio#operacion-de-tienda`; `/portfolio` conserva la evidencia profesional completa
- footer:
  base mínima con copyright y descriptor

## 3. Datos hardcodeados que hay que vigilar

WhatsApp:
- `https://wa.me/5491133652899`

Email:
- `paolakzerpa@gmail.com`

PDF de la guía:
- [`public/guia-ecosistema-personal.pdf`](/Users/paolazerpa/Desktop/apps/paola-web/public/guia-ecosistema-personal.pdf)

Endpoint de captura:
- [`src/app/data/guideCapture.ts`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/data/guideCapture.ts)
- hoy `GUIDE_CAPTURE_ENDPOINT` está vacío

## 4. Contenido editorial

Fuente de verdad de notas:
- [`src/app/data/blogPosts.ts`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/data/blogPosts.ts)

Estado actual:
- 1 nota publicada y destacada
- el archivo conserva una única entrada real mientras la bitácora crece
- datos embebidos en código, sin CMS

Si cambia el contenido editorial, revisar:
- archivo de datos
- preview de home
- cards de archivo
- detalle por slug

## 5. Assets y medios

Fotos de Paola usadas en el sitio:
- [`src/assets/paola-portrait.jpg`](/Users/paolazerpa/Desktop/apps/paola-web/src/assets/paola-portrait.jpg)
- [`src/assets/paola-photo2.jpg`](/Users/paolazerpa/Desktop/apps/paola-web/src/assets/paola-photo2.jpg)
- [`src/assets/paola-photo3.jpg`](/Users/paolazerpa/Desktop/apps/paola-web/src/assets/paola-photo3.jpg)
- [`src/assets/paola-mi-historia.jpg`](/Users/paolazerpa/Code/paola-web/src/assets/paola-mi-historia.jpg)
- [`src/assets/paola-mi-historia-portrait.png`](/Users/paolazerpa/Code/paola-web/src/assets/paola-mi-historia-portrait.png)
- [`src/assets/paola-hero-fallback.jpg`](/Users/paolazerpa/Desktop/apps/paola-web/src/assets/paola-hero-fallback.jpg)
- [`src/assets/paola-problema-scene.jpg`](/Users/paolazerpa/Code/paola-web/src/assets/paola-problema-scene.jpg) — foto provisional de hero
- [`src/assets/paola-enfoque.jpg`](/Users/paolazerpa/Code/paola-web/src/assets/paola-enfoque.jpg) — disponible, no conectada al home actual

Video provisional:
- [`public/paola-hero-video.mov`](/Users/paolazerpa/Code/paola-web/public/paola-hero-video.mov)

Imágenes generadas de servicios:
- [`src/assets/service-sistema-medida.jpg`](/Users/paolazerpa/Code/paola-web/src/assets/service-sistema-medida.jpg)
- [`src/assets/service-espacio-digital.jpg`](/Users/paolazerpa/Code/paola-web/src/assets/service-espacio-digital.jpg)
- [`src/assets/service-hecho-sistema.jpg`](/Users/paolazerpa/Code/paola-web/src/assets/service-hecho-sistema.jpg)
- [`src/assets/service-vida-sistema.jpg`](/Users/paolazerpa/Code/paola-web/src/assets/service-vida-sistema.jpg)

Fuentes:
- se cargan desde Google Fonts en [`index.html`](/Users/paolazerpa/Desktop/apps/paola-web/index.html)

Regla de import:
- usar rutas relativas reales desde `src/assets/`
- no usar imports `figma:asset/...`

## 6. Deploy y checklist operativo

Build local obligatorio:
- `npm run build`
- el script usa `vite build --configLoader runner`

Deploy compatibles:
- Netlify
- Vercel

Archivos de soporte:
- [`public/_redirects`](/Users/paolazerpa/Desktop/apps/paola-web/public/_redirects)
- [`vercel.json`](/Users/paolazerpa/Desktop/apps/paola-web/vercel.json)

Checklist antes de deploy:
- validar build
- validar links de navegación
- validar CTA de WhatsApp y mail
- validar navegación a `/contacto` desde el cierre de servicios
- validar que el PDF correcto esté en `public/`
- validar que las rutas SPA sigan cubiertas
- validar que `dist/` incluya `index.html` prerenderizados para `/`, `/guia`, `/contacto`, `/mi-historia`, `/programa`, `/notas` y notas por slug

## 7. Observaciones reales del repo

- El README histórico quedó desactualizado respecto del estado actual y fue corregido en este cambio.
- Existe un documento previo de instrucciones de copy, [`codex-instrucciones-v1.md`](/Users/paolazerpa/Desktop/apps/paola-web/codex-instrucciones-v1.md), útil como antecedente pero no como fuente operativa principal.
- Existe además un handoff puntual de copy en [`docs/copy_handoff_codex.md`](/Users/paolazerpa/Desktop/apps/paola-web/docs/copy_handoff_codex.md); sirve como antecedente de una ronda de cambios, no como fuente de verdad permanente.
- Algunas implementaciones actuales se apartan levemente de la regla "sin sombras"; antes de normalizar eso, conviene decidir si son excepciones permitidas o deuda visual.

## 8. Cuándo actualizar este documento

Actualizar cuando cambie:
- copy estructural de páginas o secciones
- canales de contacto
- PDF o flujo de la guía
- número o estructura de notas
- deploy o checklist operativo
