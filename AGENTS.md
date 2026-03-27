# AGENTS.md — paolazerpa.com

## 0) Propósito

Este archivo define las reglas operativas para cualquier agente de IA que trabaje en este repositorio.

AGENTS.md es la fuente de verdad operativa del proyecto.
Toda acción relevante debe alinearse con este documento.

---

## 1) Contexto del proyecto

Sitio web personal de Paola Zerpa — Systems & Product Designer.
URL: paolazerpa.com

**Stack:**
- React 18 + TypeScript
- Vite 6
- React Router 7
- Estilos inline como patrón principal
- `lightningcss` en el pipeline de CSS de Vite
- Sin backend propio. Sin base de datos. Sin auth.

**Deploy:**
- Netlify (recomendado) o Vercel
- `public/_redirects` maneja SPA routing en Netlify
- `vercel.json` maneja SPA routing en Vercel

---

## 2) Rol del agente

El agente actúa como:

- Senior Frontend Engineer (React / TypeScript / Vite)
- Product Designer de soporte (respeta el sistema de diseño establecido)

El agente no modifica el sistema de diseño sin instrucción explícita.
El agente no agrega dependencias sin justificación clara.

---

## 3) Reglas fundamentales (NO negociables)

### 3.1) Design system — no romper

Paleta, tipografía y tokens definidos. No alterar sin instrucción explícita.

**Colores:**
- Fondo oscuro: `#1A1A2E`
- Fondo claro: `#FAF8F4`
- Amarillo acento: `#F5C842`
- Terracota: `#C97B5A`
- Verde: `#7C9E8A`
- Lila: `#9B8FB0`
- Texto oscuro: `#1A1A2E`
- Texto claro: `#FAF8F4`
- Texto muted: `#8888AA` / `#B8B0A4`

**Tipografía:**
- `Fraunces` italic — títulos principales
- `MuseoModerno` bold — subtítulos y nombres
- `Space Grotesk` — body text
- `Space Mono` — labels, etiquetas, CTAs, código

**Sin sombras** en la mayoría de los componentes (filosofía del diseño original).
**Circles decorativos** como únicos elementos de fondo (radial-gradient, opacity baja).

### 3.2) Responsive — patrón existente

Todos los componentes usan el hook `useIsMobile()` (breakpoint ≤768px).
El patrón es: un bloque JSX para mobile, otro para desktop. No cambiar este patrón.

```tsx
const isMobile = useIsMobile();
if (isMobile) return <section>...mobile...</section>;
return <section>...desktop...</section>;
```

### 3.3) Sin backend

No existe base de datos, autenticación ni servidor propio en este proyecto.
Los CTAs principales apuntan a WhatsApp, email o a recursos estáticos.
La guía descargable es un PDF estático en `/public/`.
`GuiaPage` puede enviar datos a un endpoint externo de captura si `GUIDE_CAPTURE_ENDPOINT` está configurado, pero ese servicio no vive en este repo.

### 3.4) Contenido real — no placeholders

No generar texto de relleno (Lorem ipsum, etc.).
Todo el copy debe ser coherente con la voz de marca: directa, sin relleno, en español neutro.

---

## 4) Mapa del repositorio

```
src/
├── app/
│   ├── App.tsx                        # Entry: monta RouterProvider
│   ├── routes.tsx                     # Todas las rutas declaradas aquí
│   ├── hooks/
│   │   └── useIsMobile.ts             # Hook responsive único
│   └── components/
│       ├── NavBar.tsx                 # Navegación fija (desktop + mobile)
│       ├── FooterSection.tsx          # Footer compartido
│       │
│       │   — Secciones de Home —
│       ├── HeroSection.tsx
│       ├── ProblemaQuienSoySection.tsx
│       ├── CaminosSection.tsx         # Cards: para ti / equipo / negocio / app
│       ├── NotasProcesoSection.tsx    # Preview de notas en home
│       ├── ContactoSection.tsx        # Sección contacto inline en home
│       │
│       │   — Páginas independientes —
│       ├── GuiaPage.tsx               # /guia — landing de la guía gratuita
│       ├── BlogPage.tsx               # /notas — usa BlogCards
│       ├── BlogNotePage.tsx           # /notas/:slug
│       ├── BlogCards.tsx              # FeaturedCard + SecondaryCard + datos
│       ├── ContactoPage.tsx           # /contacto
│       ├── MiHistoriaPage.tsx         # /mi-historia
│       └── ProgramaPage.tsx           # /programa — coming soon
│
├── assets/
│   ├── paola-portrait.jpg             # Foto principal (usada en hero/about)
│   ├── paola-full.jpg
│   ├── paola-photo2.jpg
│   └── paola-photo3.jpg
│
└── styles/
    ├── fonts.css                      # Reset base mínimo
    └── theme.css                      # Variables CSS y base global

public/
├── _redirects                         # Netlify SPA routing
└── guia-ecosistema-personal.pdf       # ← reemplazar con PDF real
```

### 4.1) Documentación viva del proyecto

Además de este `AGENTS.md`, el proyecto mantiene documentación viva en `docs/`.

Archivos base:
- `docs/FOUNDATIONS.md` — visión, alcance, decisiones vigentes y snapshot del proyecto
- `docs/ARCHITECTURE_MAP.md` — mapa técnico, rutas, componentes y fuentes de verdad
- `docs/CONTENT_OPERATIONS.md` — copy estructural, datos compartidos, assets, deploy y validaciones
- `docs/PROJECT_STATUS.md` — evolución del repo, estado actual y worktree observado

Regla:
- Si un cambio modifica arquitectura, rutas, contenido estructural, contacto, deploy, dependencias o decisiones operativas, estos documentos deben actualizarse en el mismo cambio.
- `AGENTS.md` sigue siendo la fuente de verdad operativa. Los documentos en `docs/` funcionan como contexto vivo y mapa del proyecto.

---

## 5) Rutas del sitio

| Ruta | Componente | Estado |
|---|---|---|
| `/` | Home (secciones apiladas) | ✅ activa |
| `/guia` | GuiaPage | ✅ activa |
| `/notas` | BlogPage | ✅ activa |
| `/notas/:slug` | BlogNotePage | ✅ activa |
| `/mi-historia` | MiHistoriaPage | ✅ activa |
| `/contacto` | ContactoPage | ✅ activa |
| `/programa` | ProgramaPage | ⏳ coming soon |

Todas las rutas están declaradas en `src/app/routes.tsx`.

---

## 6) Datos de contacto (hardcodeados)

- WhatsApp: `https://wa.me/5491133652899`
- Email: `by.paolazerpa@gmail.com`
- Instagram: pendiente de agregar URL real

Verificar que estén actualizados antes de deployar.
Aparecen en: `ContactoSection.tsx`, `ContactoPage.tsx`, `FooterSection.tsx`.

---

## 7) Convenciones de código

### Estilos
- Estilos **inline** en la mayoría de los componentes (origen Figma Make).
- No reintroducir Tailwind en el pipeline sin una razón concreta y validación de build.
- El pipeline actual de estilos no depende de Tailwind ni PostCSS para funcionar.

### Componentes
- Un archivo por componente/sección.
- Nombres en PascalCase. Archivos nombrados igual que el componente.
- Sin archivos de índice barrel (`index.ts`) salvo que ya existan.
- Tipos simples inline. Interfaces exportadas solo si se comparten entre archivos.
- Si un componente responsive ya existe, mantener el patrón mobile/desktop con `useIsMobile()`.

### Imports de assets
```tsx
// Correcto
import paolaPortrait from "../../assets/paola-portrait.jpg";

// Incorrecto — formato Figma Make que no sirve en producción
import img from "figma:asset/92a090bf...png";
```

---

## 8) Pipeline de trabajo

Todo cambio sigue este orden:

### 9.1) PLAN
- Leer los archivos afectados antes de proponer cambios.
- Confirmar nombres reales de componentes, rutas y props. Nunca asumir.
- Si falta contexto → pedir antes de actuar.

### 9.2) IMPLEMENT
- Preferir cambio atómico: UI **o** docs. Si se mezclan, debe ser para mantener coherencia inmediata del repo.
- Mantener el patrón `useIsMobile()` en todo componente con responsive.
- No introducir rutas nuevas sin actualizar `src/app/routes.tsx`, la navegación y la documentación afectada.
- Si cambian rutas, estructura, contenido base, fuentes de verdad o dependencias: actualizar `docs/FOUNDATIONS.md`, `docs/ARCHITECTURE_MAP.md`, `docs/CONTENT_OPERATIONS.md` y/o `docs/PROJECT_STATUS.md` según corresponda.

### 9.3) VERIFY
- Ejecutar `npm run build` y confirmar que no hay errores de TypeScript ni de Vite.
- Si el cambio toca routing o NavBar: verificar manualmente los links.

### 9.4) COMMIT
- Solo con confirmación explícita.
- Prefijos: `feat:` / `fix:` / `docs:` / `chore:` / `refactor:`
- Rama única: `main`. Si se requiere rama temporal: prefijo `web/`.

---

## 9) Validaciones obligatorias

| Tipo de cambio | Validación requerida |
|---|---|
| Cualquier cambio UI | `npm run build` sin errores |
| Nuevo componente | verificar import en `routes.tsx` o componente padre |
| Nuevo asset | import con ruta relativa desde `../../assets/` |
| Cambio en NavBar o Footer | verificar links en todas las rutas |
| Cambio en GuiaPage | verificar que el botón de descarga apunte al PDF correcto y que el checkbox requerido no bloquee el flujo por error |
| Deploy | reemplazar `public/guia-ecosistema-personal.pdf` con PDF real |
| Cambio estructural o de contenido base | actualizar documentación viva en `docs/` |

---

## 10) Qué NO hacer

- ❌ Agregar base de datos, auth o backend de ningún tipo.
- ❌ Cambiar la paleta de colores o tipografías sin instrucción.
- ❌ Usar `figma:asset/...` en imports — no funciona fuera de Figma Make.
- ❌ Agregar dependencias pesadas (MUI, Framer Motion standalone, etc.) sin justificación.
- ❌ Crear archivos `index.ts` barrel innecesarios.
- ❌ Generar copy de relleno o en inglés donde debe ir español.
- ❌ Reactivar componentes legacy sin verificar primero si siguen conectados al flujo actual.

---

## 11) Estado actual a respetar

- La navegación visible usa `Inicio`, `Mi historia`, `Notas`, `Contacto`.
- La marca visible en navbar es `🌷 Paola`.
- El home actual usa `ProblemaQuienSoySection` en lugar del split antiguo entre `ElProblemaSection`, `QuienSoySection` y `EnfoqueSection`.
- Las rutas legacy `/blog` y `/mihistoria` ya no deben reintroducirse.
- Existen archivos legacy todavía en el repo, como `CTAFinalSection.tsx`, que pueden no estar conectados. Verificar referencias antes de editarlos o reinsertarlos.

---

## 12) Respuesta estándar ante bloqueos

Cuando algo no funciona o falta contexto, responder con:

- **Estado:** OK | BLOQUEADO | NECESITA INPUT
- **Causa:** 1 línea
- **Acción:** 1 comando o 1 decisión concreta
- **Qué pegar a continuación:** exacto

Sin explicaciones largas innecesarias.

---

## 13) Regla de oro

El objetivo no es agregar features.
Es mantener el sitio **coherente**, **deployable** y **fiel a la marca**.

Ante duda: cortar scope, mantener lo que funciona, pedir confirmación.

---

## Estado del documento

**ACTIVO** — documento vivo.
Actualizar cuando cambie: estructura de rutas, stack, datos de contacto, o reglas del sistema.
