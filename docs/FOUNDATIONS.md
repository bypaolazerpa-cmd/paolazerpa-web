# Fundaciones Vivas — paolazerpa.com

Este documento resume qué es el proyecto, qué problemas resuelve, qué decisiones no deben romperse y qué fuentes de verdad usar antes de tocar código.

Última revisión manual: 2026-04-02

## 1. Qué es este proyecto

Sitio web personal de Paola Zerpa.

Posicionamiento actual:
- Systems & Product Designer
- Diseño de sistemas personales, de trabajo y de operación
- Voz de marca directa, clara, sin relleno

Objetivo del sitio:
- presentar el enfoque de Paola
- abrir conversaciones concentrando la intención comercial en `/contacto`
- ofrecer la guía gratuita como punto de entrada
- alojar notas escritas sobre sistemas, vida y trabajo

Snapshot de mensaje visible en home:
- el hero abre con diagnóstico y solución: `Todo lo que construyes depende del sistema que hay detrás.` y una bajada sobre ordenar procesos, producto y decisiones
- el claim `Diseño que ordena y conecta.` vive como nota de papel en el hero
- el CTA principal del hero apunta a portfolio y el secundario dirige a contacto
- la dirección visual actual incorpora una capa más orgánica, cálida y editorial sobre el sistema existente

Snapshot de estructura visible en home:
- hero con salida directa a portfolio y contacto
- bloque de problema/señales para negocio, producto digital y proyectos personales, con intro breve y fondo de identidad sin fotografía
- bloque de enfoque sistémico con video provisional
- servicios segmentados en cuatro ofertas y presentados como cards reversibles con imágenes generadas
- método Paola con cinco pasos
- cómo empezamos con cuatro pasos
- portfolio como archivo/carrusel con cuatro casos: Control de vencimientos, Nodux, Cosmic Studio y Operación de tienda
- footer mínimo

Evolución aprobada de portfolio:
- `/` conserva la función de marca personal y servicios.
- `/portfolio` concentra la presentación profesional de Product Design.
- el home muestra un teaser de proyectos y deriva al portfolio completo.
- los proyectos viven en una fuente de datos compartida; los case studies individuales quedan fuera de esta fase.

No es este proyecto:
- una app con backend
- un CMS
- un sistema con auth o base de datos
- una plataforma editorial compleja

## 2. Stack real y alcance técnico

Stack confirmado en el repo:
- React 18
- TypeScript
- Vite 6
- React Router 7
- estilos inline como patrón dominante
- `lightningcss` como pipeline actual de CSS
- prerender estático por ruta durante el build para exponer HTML visible a bots y buscadores

Dependencias visibles en uso:
- `react`, `react-dom`, `react-router`
- `lucide-react`, `motion`

Estado del uso real:
- La mayoría del sitio usa estilos inline.
- No hay backend propio. La única integración externa contemplada es un endpoint opcional para captura en la guía.
- El build actual ya no depende del plugin de Tailwind.
- Las fuentes se cargan desde [`index.html`](/Users/paolazerpa/Desktop/apps/paola-web/index.html) y no desde CSS con `@import`.
- El deploy sigue siendo estático, pero `dist/` ahora incluye HTML prerenderizado para las rutas públicas.

## 3. Principios que hoy gobiernan el proyecto

- Mantener coherencia visual antes que introducir novedad.
- Mantener deploy simple antes que agregar infraestructura.
- Mantener copy real y alineado con la marca.
- Priorizar claridad de navegación y continuidad entre páginas.
- Resolver responsive con el patrón existente basado en `useIsMobile()`.

## 4. Decisiones de diseño vigentes

Paleta operativa actual:
- arena clara `#E6D7C6`
- beige lino `#D5BA9A`
- madera tostada `#7A543D`
- café corteza `#4D3428`
- musgo oliva `#5D6835`
- citron loto `#B7C334`
- magenta `#F07FA8`
- terracota viva `#B45B45`
- cielo suave `#A9CDE3`
- mar profundo `#173B44`

Tipografías:
- `Space Grotesk` para títulos y cuerpo
- `Space Mono` para labels, metadata y CTAs
- `Homemade Apple` para notas manuscritas puntuales
- `Fraunces` y `MuseoModerno` siguen cargadas porque páginas internas heredadas todavía las usan

Reglas visuales observadas en la implementación:
- círculos y radial gradients como recurso de fondo
- superficies tipo papel y notas manuscritas como acento editorial
- contraste alto entre secciones oscuras y claras
- bordes finos y radios contenidos
- sombras suaves solo en piezas de papel o superficies que necesitan separación
- CTAs y controles principales usan magenta sólido con acabado glass, texto azul profundo y peso alto para sostener contraste en fondos claros y oscuros

## 5. Snapshot funcional actual

Rutas activas:
- `/`
- `/portfolio`
- `/guia`
- `/notas`
- `/notas/:slug`
- `/mi-historia`
- `/contacto`
- `/programa`

Navegación visible:
- `Inicio`
- `Portfolio`
- `Sobre mí`
- `Notas`
- `Contacto`
- CTA diferenciado: `Hablemos`

Rutas públicas secundarias fuera de navegación principal:
- `/guia` sigue activa y accesible por URL directa
- `/programa` sigue activa y accesible por URL directa

Marca visible:
- `🌷 Paola`

Canales de contacto hardcodeados:
- WhatsApp: `https://wa.me/5491133652899`
- Email: `paolakzerpa@gmail.com`

## 6. Fuentes de verdad

Operación del repo:
- [`AGENTS.md`](/Users/paolazerpa/Desktop/apps/paola-web/AGENTS.md)

Rutas y composición principal:
- [`src/app/routes.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/routes.tsx)

Responsive:
- [`src/app/hooks/useIsMobile.ts`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/hooks/useIsMobile.ts)

Navegación con scroll controlado:
- [`src/app/components/AppLink.tsx`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/components/AppLink.tsx)
- [`src/app/utils/navigation.ts`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/utils/navigation.ts)

Notas y contenido editorial:
- [`src/app/data/blogPosts.ts`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/data/blogPosts.ts)

Guía y captura:
- [`src/app/data/guideCapture.ts`](/Users/paolazerpa/Desktop/apps/paola-web/src/app/data/guideCapture.ts)
- [`public/guia-ecosistema-personal.pdf`](/Users/paolazerpa/Desktop/apps/paola-web/public/guia-ecosistema-personal.pdf)

## 7. Cómo mantener este documento vivo

Actualizar este archivo cuando cambie cualquiera de estas capas:
- propuesta del sitio
- stack o dependencias relevantes
- reglas del sistema de diseño
- navegación principal
- canales de conversión o contacto
- decisiones base sobre alcance del producto

Si el cambio es más técnico o más detallado, actualizar también:
- [`docs/ARCHITECTURE_MAP.md`](/Users/paolazerpa/Desktop/apps/paola-web/docs/ARCHITECTURE_MAP.md)
- [`docs/CONTENT_OPERATIONS.md`](/Users/paolazerpa/Desktop/apps/paola-web/docs/CONTENT_OPERATIONS.md)
- [`docs/PROJECT_STATUS.md`](/Users/paolazerpa/Desktop/apps/paola-web/docs/PROJECT_STATUS.md)
