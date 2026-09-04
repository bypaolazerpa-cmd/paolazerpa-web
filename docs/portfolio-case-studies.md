# Sistema de case studies del portfolio

## Rutas

- `/portfolio`
- `/portfolio/nodux`
- `/portfolio/gestock`
- `/portfolio/operacion-de-tienda`
- `/portfolio/cosmic-studio`

## Arquitectura

`src/app/data/portfolioData.ts` es la única fuente de copy, metadata editorial, decisiones, aprendizajes, visuales y orden circular.

`CaseStudyPage.tsx` renderiza todos los casos con componentes reutilizables: `PortfolioVisualPlaceholder`, `CaseStudySection`, `DecisionBlock`, `ConceptDiagram` y `CaseStudyNavigation`. Cada caso puede omitir decisiones, estado o aprendizajes según corresponda.

El índice usa la misma fuente y sus enlaces apuntan a la ruta de cada caso. El orden de navegación es NODUX → GeStock → Sistemas de operación de tienda → Cosmic Studio → NODUX.

## Cómo editar

Editar el objeto correspondiente en `portfolioData`. No crear copias por breakpoint: el mismo contenido se apila mediante CSS responsive. Cada visual abstracto puede reemplazarse por evidencia real conservando el contenedor, el `alt`, las dimensiones reservadas y el lazy loading cuando corresponda.

## Próximos reemplazos

Los visuales actuales ofrecen una representación editorial de screenshots, diagramas, flujos, fotografías, prototipos y arquitectura. Más adelante pueden sustituirse por evidencia validada de cada proyecto; no se incluyen métricas, testimonios ni resultados cuantitativos inventados.
