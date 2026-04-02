# Content & Operations — paolazerpa.com

Documento vivo para contenido estructural, contacto, conversión, assets y deploy.

Última revisión manual: 2026-04-01

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

## 2. CTAs y conversiones

Punto de entrada principal:
- guía gratuita en `/guia`

Canales de acción:
- WhatsApp como CTA principal
- email como canal secundario

Exposición para indexación:
- las rutas públicas ahora se prerenderizan a HTML estático durante el build
- esto permite que bots lean copy visible sin depender de ejecutar JavaScript del cliente

Páginas y secciones que convierten:
- [`src/app/components/HeroSection.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/HeroSection.tsx)
- [`src/app/components/CaminosSection.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/CaminosSection.tsx)
- [`src/app/components/ContactoSection.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/ContactoSection.tsx)
- [`src/app/components/ContactoPage.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/ContactoPage.tsx)
- [`src/app/components/ProgramaPage.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/ProgramaPage.tsx)

Estado actual del hero:
- titular:
  `La forma en que vivimos y lo que construimos`
  `nace de la intención`
  `Yo le doy estructura`
- bajada:
  `Convierto ideas y procesos en sistemas que mejoran la experiencia y se sostienen en el tiempo.`
- énfasis en negrita dentro de la bajada:
  `sistemas que mejoran la experiencia`
- CTA principal:
  `Hablemos`
- CTA secundario:
  `Ver servicios`
- el hero ya no muestra el label `HOLA, SOY PAOLA`

Estado actual del home:
- beneficios:
  bloque directo sobre solución, claridad, estructura, funcionamiento y sostén
- servicios:
  `Para ti`
  `Para tu trabajo`
  `Para tu negocio`
- guía:
  integrada en home con formulario compacto reutilizando la misma lógica de captura de `/guia`
- app futura:
  visible como bloque corto dentro del home
- sobre mí:
  visible como bloque breve dentro del home
- CTA final:
  ubicado antes de notas e incluyendo la firma de marca

## 3. Datos hardcodeados que hay que vigilar

WhatsApp:
- `https://wa.me/5491133652899`

Email:
- `by.paolazerpa@gmail.com`

PDF de la guía:
- [`public/guia-ecosistema-personal.pdf`](/Users/paolazerpa/Desktop/apps/paola-web/public/guia-ecosistema-personal.pdf)

Endpoint de captura:
- [`src/app/data/guideCapture.ts`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/data/guideCapture.ts)
- hoy `GUIDE_CAPTURE_ENDPOINT` está vacío

## 4. Contenido editorial

Fuente de verdad de notas:
- [`src/app/data/blogPosts.ts`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/data/blogPosts.ts)

Estado actual:
- 3 notas publicadas
- 1 destacada
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
