# Sistema de case studies del portfolio

## Rutas

- `/portfolio`
- `/portfolio/nodux`
- `/portfolio/gestock`
- `/portfolio/operacion-de-tienda`
- `/portfolio/cosmic-studio`

## Arquitectura

`src/app/data/portfolioData.ts` es la única fuente de copy, metadata editorial, decisiones, aprendizajes, placeholders y orden circular.

`CaseStudyPage.tsx` renderiza todos los casos con componentes reutilizables: `CaseStudyPlaceholder`, `CaseStudySection`, `DecisionBlock`, `ConceptDiagram` y `CaseStudyNavigation`. Cada caso puede omitir decisiones, estado o aprendizajes según corresponda.

El índice usa la misma fuente y sus enlaces apuntan a la ruta de cada caso. El orden de navegación es NODUX → GeStock → Sistemas de operación de tienda → Cosmic Studio → NODUX.

## Cómo editar

Editar el objeto correspondiente en `portfolioData`. No crear copias por breakpoint: el mismo contenido se apila mediante CSS responsive. Para sumar evidencia, reemplazar un `CaseStudyPlaceholder` en el dato por un visual real con `alt`, dimensiones reservadas y lazy loading cuando corresponda.

## Pendiente

Los placeholders marcan dónde incorporar screenshots, diagramas, flujos, fotografías, prototipos y arquitectura real. Falta añadir evidencia validada de cada proyecto; no se incluyen métricas, testimonios ni resultados cuantitativos inventados.
