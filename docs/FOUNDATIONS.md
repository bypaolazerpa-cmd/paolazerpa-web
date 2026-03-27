# Fundaciones Vivas — paolazerpa.com

Este documento resume qué es el proyecto, qué problemas resuelve, qué decisiones no deben romperse y qué fuentes de verdad usar antes de tocar código.

Última revisión manual: 2026-03-26

## 1. Qué es este proyecto

Sitio web personal de Paola Zerpa.

Posicionamiento actual:
- Systems & Product Designer
- Diseño de sistemas personales, de trabajo y de operación
- Voz de marca directa, clara, sin relleno

Objetivo del sitio:
- presentar el enfoque de Paola
- abrir conversaciones por WhatsApp o email
- ofrecer la guía gratuita como punto de entrada
- alojar notas escritas sobre sistemas, vida y trabajo

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

Dependencias visibles en uso:
- `react`, `react-dom`, `react-router`
- `lucide-react`, `motion`

Estado del uso real:
- La mayoría del sitio usa estilos inline.
- No hay backend propio. La única integración externa contemplada es un endpoint opcional para captura en la guía.
- El build actual ya no depende del plugin de Tailwind.
- Las fuentes se cargan desde [`index.html`](/Users/paolazerpa/Desktop/apps/paola-web/index.html) y no desde CSS con `@import`.

## 3. Principios que hoy gobiernan el proyecto

- Mantener coherencia visual antes que introducir novedad.
- Mantener deploy simple antes que agregar infraestructura.
- Mantener copy real y alineado con la marca.
- Priorizar claridad de navegación y continuidad entre páginas.
- Resolver responsive con el patrón existente basado en `useIsMobile()`.

## 4. Decisiones de diseño vigentes

Paleta operativa:
- oscuro `#1A1A2E`
- claro `#FAF8F4`
- acento amarillo `#F5C842`
- terracota `#C97B5A`
- verde `#7C9E8A`
- lila `#9B8FB0`

Tipografías:
- `Fraunces` italic para títulos
- `MuseoModerno` para subtítulos y énfasis de nombre
- `Space Grotesk` para cuerpo
- `Space Mono` para labels, metadata y CTAs

Reglas visuales observadas en la implementación:
- círculos y radial gradients como recurso de fondo
- contraste alto entre secciones oscuras y claras
- bordes finos y redondeos suaves
- casi sin sombras por filosofía del sistema, aunque hoy existen excepciones en algunos componentes

## 5. Snapshot funcional actual

Rutas activas:
- `/`
- `/guia`
- `/notas`
- `/notas/:slug`
- `/mi-historia`
- `/contacto`
- `/programa`

Navegación visible:
- `Inicio`
- `Mi historia`
- `Notas`
- `Contacto`

Marca visible:
- `🌷 Paola`

Canales de contacto hardcodeados:
- WhatsApp: `https://wa.me/5491133652899`
- Email: `by.paolazerpa@gmail.com`

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
