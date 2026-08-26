# Project Status — paolazerpa.com

Estado vivo del proyecto observado en el repositorio.

Última revisión manual: 2026-08-02

Actualización de esta iteración: 2026-08-26

## 1. Línea de tiempo visible en git

Commits recientes:
- `2c591d7` `feat: stabilize site polish and project docs`
- `d390fb6` `fix: add shared content data and contact section updates`
- `cd01b52` `feat: update site structure, notes flow, and content pages`
- `55389f1` `Add lint setup and fix build validation`

Lectura de esa evolución:
- el sitio empezó como una base Vite/React
- luego cambió estructura del sitio, flujo de notas y páginas de contenido
- después se centralizaron ciertos datos y se ajustó contacto
- después se estabilizó el build, se limpió el pipeline CSS, se corrigió seguridad y se ordenó la documentación viva
- el último bloque cerró consistencia visual, transición entre páginas y polish general del sitio

## 2. Estado del worktree observado

Estado actual:
- hay cambios locales sin commit
- los cambios visibles están concentrados en una nueva arquitectura del home, copy estructural actualizado y documentación viva al día
- no hay evidencia en esta revisión de rotura de build local

Interpretación:
- el repo sigue en un punto estable para continuar
- la documentación necesitaba ponerse al día con la iteración reciente de copy del hero
- el trabajo actual vuelve a ser acotado y temático, no de saneamiento general

## 3. Estado funcional actual inferido del código

Notas V2:
- `/notas` ahora presenta `01 — BITÁCORA` y una única nota real en una composición editorial horizontal en desktop y apilada en mobile
- la nota individual usa el slug `un-ano-intentando-entender-que-significa-disenar-un-producto`, lectura continua y no incluye sidebar, índice ni CTA comercial
- [`src/app/data/blogPosts.ts`](/Users/paolazerpa/Code/paola-web/src/app/data/blogPosts.ts) es la fuente de verdad y contiene una única nota publicada

Portfolio:
- existe la ruta `/portfolio` como página profesional independiente
- Home y `/portfolio` consumen `portfolioProjects.ts` mediante `PortfolioProjectCard`
- Home muestra `SelectedWorkSection` inmediatamente después del hero; `ProblemaQuienSoySection` y `HomeProjectsSection` quedaron fuera del flujo actual
- Home muestra `AreasOfWorkSection` como sección 03; `HomeApproachSection` se conserva como componente legacy fuera del flujo actual
- no existe todavía `/portfolio/:slug`
- los previews visuales son placeholders intencionales mientras se reúnen screenshots reales
- `/portfolio` cuenta con title, description y Open Graph básico en el HTML prerenderizado
- el Home muestra Selected Work con copy de transformación (`homeSummary`), contexto y descripción secundaria separados del summary profesional
- la navegación principal incluye `INICIO` y marca únicamente la ruta activa
- los previews usan una proporción horizontal estable de `16 / 10` en desktop y mobile

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
- la transición entre páginas se resuelve globalmente desde el layout raíz con CSS
- la navegación principal visible hoy expone `Inicio`, `Portfolio`, `Sobre mí`, `Notas` y `Contacto`; `Hablemos` funciona como CTA diferenciado hacia `/contacto`
- `/guia` y `/programa` siguen vivas por URL directa, pero fuera del menú principal

Conversión:
- WhatsApp sigue siendo canal principal
- la guía tiene formulario con estado local y captura opcional
- el home ya no duplica la sección de contacto y deriva el cierre de servicios a `/contacto`

## 4. Estado del bloque recién cerrado

- El repo quedó estabilizado para este entorno usando `--configLoader runner` en scripts de Vite y `lightningcss` para CSS.
- Tailwind y sus dependencias asociadas fueron retiradas del pipeline activo y del manifiesto del proyecto.
- La vulnerabilidad de `picomatch` fue corregida vía `overrides` en `package.json`.
- La transición entre páginas fue normalizada con una implementación CSS simple y uniforme.
- El tono visible quedó alineado con tuteo y el footer ahora usa año dinámico.

## 5. Estado del bloque actual en working tree

- El prerender quedó congelado antes de esta iteración en el commit `68c2a04`.
- El home fue reorganizado para priorizar solución, servicios, guía y contacto.
- El home quedó alineado al orden aprobado: hero, beneficios, servicios, guía, app futura, sobre mí, CTA final y notas.
- `ProblemaQuienSoySection` ya no abre desde el problema y hoy funciona como bloque de beneficios.
- `CaminosSection` fue reorientada como sección de servicios.
- Se agregó `HomeGuideSection` para integrar la guía dentro del home con formulario compacto.
- Se agregaron `HomeAppSection` y `HomeAboutSection` para reincorporar app futura y sobre mí sin volver a una versión extensa.
- `ContactoSection` queda fuera del home para evitar duplicación con `/contacto`.
- Las tres CTAs de `CaminosSection` ahora convergen en `/contacto#email`.
- El build local con prerender fue validado tras estos cambios con `npm run build`.
- La nueva capa de marca empezó a aplicarse sobre home y navegación: tokens de color orgánicos, `Homemade Apple`, clases `pz-*` y componentes compartidos `BrandButton`, `SectionLabel` y `PaperNote`.
- `HeroSection`, `ProblemaQuienSoySection` y `CaminosSection` quedaron migrados a la nueva dirección visual.
- La navegación visible volvió a incluir `Mi historia`.
- Las fuentes heredadas `Fraunces` y `MuseoModerno` siguen cargadas para no degradar páginas internas todavía no migradas.
- El build local con prerender fue validado otra vez después de esta capa con `npm run build`.
- La landing avanzó hacia el siguiente lote: hero con foto provisional, sección de señales/problema con fondo de identidad sin fotografía, `HomeApproachSection` con video provisional, servicios con imágenes generadas, `HomeMethodSection`, cómo empezamos, portfolio y footer mínimo.
- `npm run lint` y `npm run build` pasan después de este lote; persisten warnings conocidos de prerender por `useLayoutEffect`.
- El home fue reestructurado según el boceto/copy nuevo: se retiraron del recorrido principal las secciones heredadas de guía, app futura, sobre mí y notas.
- El orden actual de home es hero, problema, enfoque, servicios, método, cómo empezamos, portfolio y footer.
- El hero usa `paola-problema-scene.jpg` como foto provisional.
- La sección 02 usa un fondo de identidad sin fotografía, con textura de grilla y recursos de papel rasgado.
- La sección 03 usa `public/paola-hero-video.mov` como video provisional y quedó reducida a una sola idea principal.
- Servicios ahora usa tres cards de una sola estructura semántica, con imágenes, descripción principal, bloque `Para qué` y CTA de cierre hacia contacto.
- Portfolio quedó convertido en archivo/carrusel con cuatro casos reales: Control de vencimientos, Nodux, Cosmic Studio y Operación de tienda.
- `npm run lint` y `npm run build` pasan después de esta reestructura; persisten warnings conocidos de prerender por `useLayoutEffect`.
- `/mi-historia` V3 reemplazó la V2 por una versión más compacta, con cinco bloques editoriales y placeholders preparados para futuras imágenes.
- Se eliminaron la fotografía grande del hero, `PaperNote` y los gráficos SVG/CSS de `JourneyVisual`; el contenido visual ahora usa `EditorialPlaceholder`.
- El recorrido de cuatro momentos sigue en un único array y mantiene timeline responsive con reveal sutil y `prefers-reduced-motion`.
- Los CTAs activos de `/mi-historia` apuntan a `/portfolio` y `/contacto`; LinkedIn queda pendiente sin URL inventada. Home V2 y otras páginas no se modificaron.
- `/contacto` quedó consolidada en una composición compacta de dos columnas, con lista editorial de motivos y canales directos.
- `/contacto#email` se conserva como ancla de conversión; WhatsApp sigue como acción principal y email como alternativa secundaria.
- `npm run build` pasa después de la migración de `/contacto`; persisten warnings conocidos de prerender por `useLayoutEffect`.
- `/contacto` recibió una pasada de simplificación de copy para sostener una lectura breve, precisa y orientada a contacto.

## 6. Qué sigue después del deploy

## 6.0. Unificación responsive de contenido — 2026-08-10

- `HomeApproachSection` dejó de seleccionar copy distinto según `isMobile()` y ahora renderiza el H2, título visual y cuerpo canónicos en todos los breakpoints.
- `BlogCards.SecondaryCard` conserva una sola estructura semántica para categoría, título, excerpt, fecha y CTA; mobile y desktop solo adaptan imagen, distribución y escala.
- `HeroSection` mantiene un único H1 y ajusta el encuadre desktop de `paola-problema-scene.jpg` con `object-position: center top`; la columna desktop se amplió para mantener unido `Todo lo que construyes` cuando hay espacio.
- Se verificaron las rutas públicas en 390px y 1440px sin overflow ni overlays, y la home en 390, 430, 768, 1024, 1280 y 1440px.
- `npm run build` pasa; permanecen únicamente los warnings SSR conocidos de `useLayoutEffect`.

## 6.0.1. Pasada de contenido, estructura e interacción — 2026-08-10

- El hero explicita `Paola Zerpa · Product Designer` y usa el copy definitivo de productos digitales, manteniendo un único H1, bajada y CTA por breakpoint.
- La sección de problema ahora presenta tres problemas observables de operación, producto y crecimiento/estructura, con una explicación breve por card.
- Mi enfoque usa el headline `Primero entiendo cómo funciona. Después diseño cómo mejorarlo.` y un único bloque de copy sobre el video.
- Servicios muestra únicamente `Producto digital`, `Sistema de trabajo` y `Web o tienda online`; sistemas personales ya no aparece en Servicios de Home.
- Método y Cómo empezamos fueron ajustados al copy definitivo del brief.
- Home muestra únicamente GeStock, NODUX y Sistemas de operación de tienda; sus cards son clickeables hacia anchors estables de `/portfolio` y tienen hover/focus sutil con soporte para `prefers-reduced-motion`.
- Navbar desktop y mobile comparten labels y destinos; `INICIO` y `PORTFOLIO` son los únicos estados activos de ruta.
- Se validaron previews, overflow y anchors en 390px y 1440px, además de Home en 430, 768, 1024 y 1280px.

## 6.0.2. Refinamiento puntual de Home — 2026-08-10

- `ProblemaQuienSoySection` usa un headline más breve, elimina el subtítulo y mantiene tres situaciones observables con copy único.
- `HomeApproachSection` redujo el bloque sobre video a dos ideas: statement y explicación complementaria.
- La oferta de sistemas personales conserva su jerarquía secundaria, pero recupera identidad visual mediante label, acento rosa, grilla sutil y forma decorativa existentes.
- Las tres cards del portfolio en Home comparten altura en filas desktop/tablet, preview `16 / 10`, estructura interna y espacio reservado para el CTA de hover; mobile conserva el componente único sin forzar alturas artificiales.
- Se verificó que el hover mantenga las alturas `[463, 463, 463]` en desktop y no genere layout shift.

## 6.0.3. Alineación profesional de `/portfolio` — 2026-08-10

- Se eliminó la sección independiente `02 — Introducción` para llevar Selected Work antes en el recorrido.
- El mensaje profesional de productos digitales ahora vive en el hero de `/portfolio`, compartido con Home.
- Selected Work pasó a `02`, Otros proyectos usa español y el resto de secciones quedó numerado `03`, `04` y `05`.
- Se retiraron los estados visibles de las cards sin modificar datos, tags, previews ni anchors.
- Forma de trabajar y Capacidades redujeron moderadamente su padding vertical para conservar el protagonismo de los proyectos.
- Se validó `/portfolio` en 390, 430, 768, 1024, 1280 y 1440px, sin overflow y con contenido consistente.

## 6.1. Bloque responsive mobile iniciado — 2026-08-04

- El hero ahora fuerza una composición editorial de tres líneas, subraya `sistema` en magenta y conserva la escena completa de Paola junto a la computadora.
- El copy mobile del hero y de la sección 03 fue acortado y distribuido por líneas intencionales para facilitar el escaneo.
- La sección 02 concretó las señales de negocio, producto digital y proyectos personales, y reforzó el CTA con una franja de papel rasgado arriba y abajo.
- La sección 03 subraya únicamente `Diseñemos el sistema`, reserva Space Mono italic para `lo que estás construyendo` y usa un copy mobile más breve: `Ordeno decisiones, procesos y personas` / `Mejoro cómo se vive la experiencia`. El tratamiento mobile suma una capa oscura y un panel translúcido para asegurar contraste sobre el video.
- Los botones del Hero mobile dejaron de ocupar todo el ancho disponible.
- Las cards de servicios mantienen una sola estructura de contenido en todos los breakpoints; mobile adapta la disposición a una columna por servicio.
- En mobile, el frente conserva el número y nombre del servicio una sola vez; la explicación inferior ya no repite ese encabezado.
- Se eliminó del copy mobile la instrucción basada en mouse.
- La tarjeta de enfoque usa una versión de copy más breve en mobile para favorecer el escaneo.
- El video de enfoque evita cargar la segunda capa desenfocada en mobile para reducir trabajo y consumo sin cambiar la composición desktop.
- Las imágenes de servicios se cargan de forma diferida y asíncrona.
- `npm run build` pasa después de este bloque; persisten únicamente los warnings conocidos de `useLayoutEffect` durante prerender.

Siguiente bloque recomendado:
- QA manual corto en producción sobre Home, Contacto, Notas, Mi historia y Programa
- confirmar que el PDF final de la guía es el definitivo
- decidir si `/programa` seguirá como ruta secundaria oculta o si entrará a navegación
- revisar si `motion` sigue teniendo sentido como dependencia tras haber quedado fuera de la transición global

Orden sugerido:
1. revisar deploy real y enlaces de conversión
2. tomar decisión de producto sobre `/programa`
3. limpiar dependencias o código residual si ya no aportan

## 7. Cómo usar este documento

Usarlo para:
- reconstruir rápidamente el estado del proyecto
- entender qué cambios ya pasaron por git y cuáles siguen en working tree
- evitar reintroducir rutas o patrones antiguos

Actualizar cuando cambie:
- el historial relevante del repo
- el estado del worktree en una entrega importante
- una decisión abierta que quede resuelta
