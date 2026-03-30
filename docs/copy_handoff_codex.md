# Copy Handoff — paolazerpa.com
Revisión de textos web · Marzo 2026

Este archivo contiene todos los cambios de copy para la home y páginas internas.
**Solo modificar strings de texto.** No tocar estilos, lógica ni estructura de componentes.

---

## Reglas generales

- Tuteo consistente en todo el sitio — eliminar cualquier forma de voseo
- Segunda persona singular — la web habla a una persona, no a un grupo
- No agregar ni eliminar elementos JSX — solo reemplazar el contenido de texto

---

## 1. `src/app/components/HeroSection.tsx`

### Variable `copy` (bajada del hero)

```tsx
// ANTES
<strong style={{ fontWeight: 700, color: "#FAF8F4" }}>Diseño sistemas</strong> para sostener
lo que construimos, sin depender solo de nuestra energía.

// DESPUÉS
<strong style={{ fontWeight: 700, color: "#FAF8F4" }}>Diseño sistemas</strong> para dar forma a ideas, procesos y formas de trabajar — para que se sostengan sin depender todo el tiempo de tu energía.
```

### H1 — línea 1

```tsx
// ANTES
Nuestro sistema de vida se diseña.

// DESPUÉS
Tu sistema de vida se puede diseñar.
```

### H1 — línea 2

```tsx
// ANTES
Las ideas que importan se sostienen.

// DESPUÉS
Yo te ayudo a construirlo.
```

### CTA principal (AppLink a `/guia`) — aparece dos veces (mobile y desktop)

```tsx
// ANTES
DESCARGAR GUÍA

// DESPUÉS
DESCARGA LA GUÍA GRATUITA
```

### CTA secundario (button scroll) — aparece dos veces (mobile y desktop)

```tsx
// ANTES
Ver cómo funciona ↓

// DESPUÉS
Ver cómo trabajo ↓
```

---

## 2. `src/app/components/ProblemaQuienSoySection.tsx`

### Eyebrow principal — aparece dos veces (mobile y desktop)

```tsx
// ANTES
LA SOLUCIÓN ES TENER UN SISTEMA

// DESPUÉS
EL PROBLEMA QUE RECONOCES
```

### Variable `solutionBody`

```tsx
// ANTES
<strong>Diseño sistemas para dar forma a procesos,</strong> sostener ideas, proyectos y maneras
de trabajar sin que todo dependa de la energía personal ni de saturar la cabeza intentando
recordar todo.

// DESPUÉS
<strong>Diseño sistemas que le dan forma a lo que ya tienes</strong> — ideas, procesos, formas de trabajar — para que se sostengan sin depender todo el tiempo de tu energía.
```

### Sub-eyebrow (sobre los pillars) — aparece dos veces (mobile y desktop)

```tsx
// ANTES
CÓMO SE SOSTIENE

// DESPUÉS
LA SOLUCIÓN ES UN SISTEMA
```

### Intro de pillars — aparece dos veces (mobile y desktop)

```tsx
// ANTES
La solución es tener un sistema.

// DESPUÉS
Un sistema bien diseñado te da tres cosas:
```

### Array `pillars` — objeto con `id: "estructura"`, campo `detail`

```tsx
// ANTES
detail: "Sistemas que puedes usar hoy, diseñados para sostener lo real.",

// DESPUÉS
detail: "No necesitas reinventarlo cada semana. Está pensado para la vida real.",
```

---

## 3. `src/app/components/CaminosSection.tsx`

### H2 — aparece dos veces (mobile y desktop)

```tsx
// ANTES
Elegí por dónde empezar.

// DESPUÉS
Elige por dónde empezar.
```

### Subtítulo — aparece dos veces (mobile y desktop)

```tsx
// ANTES
Dos entradas según lo que hoy necesites ordenar.

// DESPUÉS
Dos entradas según lo que hoy necesitas ordenar.
```

### Array `primaryPaths` — objeto con `tag: "PARA TU EQUIPO DE TRABAJO"`, campo `body`

```tsx
// ANTES
body: "Si hay fricción, desorden o saturación en tu equipo o procesos, podemos empezar por una conversación.",

// DESPUÉS
body: "Si hay fricción, desorden o saturación en tu equipo o procesos, puedo ayudarte a verlo con claridad.",
```

### Card PRÓXIMAMENTE — campo `body` (buscar por texto exacto)

```tsx
// ANTES
Una app pensada para acompañar tu sistema personal en la vida real. En desarrollo.

// DESPUÉS
Una app para llevar tu sistema personal al día a día. Hoy en desarrollo — pronto disponible.
```

---

## 4. `src/app/components/ContactoSection.tsx`

Sin cambios.

---

## 5. `src/app/components/ContactoPage.tsx`

### H1

```tsx
// ANTES
Si quieres conversar, aquí puedes elegir la forma más simple de empezar.

// DESPUÉS
¿Hay algo que hoy necesita más claridad o estructura?
```

### Párrafo debajo del H1

```tsx
// ANTES
Si hay algo que hoy necesita más claridad, estructura o una mirada externa, este es un buen lugar para empezar la conversación.

// DESPUÉS
Este es un buen lugar para empezar — sin tener todo resuelto, sin un brief perfecto. Solo una conversación.
```

---

## 6. `src/app/components/GuiaPage.tsx`

### Bajada (párrafo debajo del H1)

```tsx
// ANTES
Una guía breve y gratuita para descargar muchas ideas y dar un primer paso con estructura.

// DESPUÉS
Una guía breve y gratuita para sacar las ideas de la cabeza y dar un primer paso con estructura.
```

### Footer de página — eliminar el primer párrafo y reemplazar el segundo

```tsx
// ELIMINAR este párrafo completo:
Un primer paso breve para empezar con un poco más de claridad.

// REEMPLAZAR el siguiente párrafo:
// ANTES
Si después quieres profundizar, puedes seguir desde contacto.

// DESPUÉS
Si después quieres ir más lejos, puedes escribirme desde contacto.
```

---

## 7. `src/app/components/MiHistoriaPage.tsx`

### H1

```tsx
// ANTES
Creativa con pensamiento sistémico.

// DESPUÉS
Aprendí a diseñar mi vida. Ahora ayudo a otros a hacer lo mismo.
```

---

## 8. `src/app/components/FooterSection.tsx`

Sin cambios.

---

## Resumen

| Archivo | Cambios |
|---|---|
| HeroSection.tsx | 5 strings (algunos aparecen 2 veces por mobile/desktop) |
| ProblemaQuienSoySection.tsx | 5 strings |
| CaminosSection.tsx | 4 strings |
| ContactoSection.tsx | 0 |
| ContactoPage.tsx | 2 strings |
| GuiaPage.tsx | 2 strings |
| MiHistoriaPage.tsx | 1 string |
| FooterSection.tsx | 0 |
