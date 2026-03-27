# Project Status — paolazerpa.com

Estado vivo del proyecto observado en el repositorio.

Última revisión manual: 2026-03-26

## 1. Línea de tiempo visible en git

Commits recientes:
- `d390fb6` `fix: add shared content data and contact section updates`
- `cd01b52` `feat: update site structure, notes flow, and content pages`
- `55389f1` `Add lint setup and fix build validation`
- `63912c4` `Initial commit`

Lectura de esa evolución:
- el sitio empezó como una base Vite/React
- luego cambió estructura del sitio, flujo de notas y páginas de contenido
- después se centralizaron ciertos datos y se ajustó contacto
- hoy hay trabajo local adicional todavía sin commit

## 2. Estado del worktree observado

Archivos modificados sin commit al momento de esta revisión:
- `src/app/components/BlogCards.tsx`
- `src/app/components/BlogNotePage.tsx`
- `src/app/components/CaminosSection.tsx`
- `src/app/components/ContactoPage.tsx`
- `src/app/components/ContactoSection.tsx`
- `src/app/components/GuiaPage.tsx`
- `src/app/components/HeroSection.tsx`
- `src/app/components/MiHistoriaPage.tsx`
- `src/app/components/NavBar.tsx`
- `src/app/components/NotasProcesoSection.tsx`
- `src/app/components/ProblemaQuienSoySection.tsx`
- `src/app/components/ProgramaPage.tsx`
- `src/app/routes.tsx`
- `src/styles/fonts.css`

Archivos nuevos sin commit al momento de esta revisión:
- `codex-instrucciones-v1.md`
- `src/app/components/AppLink.tsx`
- `src/app/utils/navigation.ts`

Interpretación:
- el repo no está en un estado "limpio"
- este documento captura una foto de trabajo útil para contexto
- antes de asumir regresiones, comparar siempre contra el worktree actual y no solo contra `origin/main`

## 3. Estado funcional actual inferido del código

Home:
- ya no usa el split legacy entre problema, quién soy y enfoque
- ahora usa `ProblemaQuienSoySection`

Notas:
- la ruta vigente es `/notas`
- existe archivo de datos centralizado para posts
- hay detalle dinámico por slug

Navegación:
- usa botones y navegación programática con scroll al inicio
- `AppLink` abstrae el comportamiento de enlaces internos

Conversión:
- WhatsApp sigue siendo canal principal
- la guía tiene formulario con estado local y captura opcional

## 4. Deudas o decisiones abiertas detectadas

- El repo quedó estabilizado para este entorno usando `--configLoader runner` en scripts de Vite y `lightningcss` para CSS.
- Tailwind y sus dependencias asociadas fueron retiradas del pipeline activo y del manifiesto del proyecto.
- Hay componentes con `boxShadow`, lo que merece una decisión explícita porque `AGENTS.md` indica filosofía de casi sin sombras.
- `package.json` incluye `motion` y `lucide-react`, pero su uso real en la UI visible es limitado o nulo en los archivos revisados.
- El footer muestra `2025`; conviene revisar si ese dato debe ser fijo de marca o dinámico.

## 5. Cómo usar este documento

Usarlo para:
- reconstruir rápidamente el estado del proyecto
- entender qué cambios ya pasaron por git y cuáles siguen en working tree
- evitar reintroducir rutas o patrones antiguos

Actualizar cuando cambie:
- el historial relevante del repo
- el estado del worktree en una entrega importante
- una decisión abierta que quede resuelta
