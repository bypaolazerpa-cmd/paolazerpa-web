# Project Status — paolazerpa.com

Estado vivo del proyecto observado en el repositorio.

Última revisión manual: 2026-08-02

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
- la navegación principal visible hoy expone `Inicio`, `Mi historia`, `Notas` y `Contacto`
- `/guia` y `/programa` siguen vivas por URL directa, pero fuera del menú principal

Conversión:
- WhatsApp sigue siendo canal principal
- la guía tiene formulario con estado local y captura opcional
- el home ya no duplica la sección de contacto y deriva las cards de servicios a `/contacto#email`

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
- Servicios ahora usa cards reversibles con imágenes generadas al frente, copy alineado arriba y CTA de contacto antes de las cards.
- Portfolio quedó convertido en archivo/carrusel con cuatro casos reales: Control de vencimientos, Nodux, Cosmic Studio y Operación de tienda.
- `npm run lint` y `npm run build` pasan después de esta reestructura; persisten warnings conocidos de prerender por `useLayoutEffect`.
- `/mi-historia` quedó migrada a la nueva capa visual del sitio con `pz-page`, `pz-dark`, componentes compartidos de marca, foto principal y CTAs hacia contacto, servicios e inicio.
- `npm run build` pasa después de la migración de `/mi-historia`; persisten warnings conocidos de prerender por `useLayoutEffect`.
- `/mi-historia` recibió una segunda pasada de contenido: foto principal nueva, CTA neutral `Trabajemos`, relato más concreto con énfasis tipográfico y cierre orientado a territorios de trabajo.
- `/contacto` quedó migrada a la nueva capa visual del sitio con hero oscuro editorial, nota manuscrita, tarjetas tipo papel y cierre de canales.
- `/contacto#email` se conserva como ancla de conversión; WhatsApp sigue como acción principal y email como alternativa secundaria.
- `npm run build` pasa después de la migración de `/contacto`; persisten warnings conocidos de prerender por `useLayoutEffect`.
- `/contacto` recibió una pasada de simplificación de copy para sostener una lectura breve, precisa y orientada a contacto.

## 6. Qué sigue después del deploy

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
