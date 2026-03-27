# INSTRUCCIONES DE CAMBIOS — paolazerpa.com
## Para: Codex / Antigravity
## Stack: React + Vite + TypeScript · Componentes separados por sección
## Alcance: Copy + estructura de secciones + indicaciones de diseño

---

> **Cómo leer este documento**
> Cada bloque indica: (1) el componente o sección afectada, (2) qué cambiar exactamente, y (3) notas de diseño cuando aplica.
> Los textos entre comillas `" "` son el copy final aprobado — copiar literalmente.
> Las notas entre corchetes `[ ]` son indicaciones de comportamiento o diseño, no van al DOM como texto visible.

---

## 1. NAVEGACIÓN

**Componente:** `Navbar` / `Header`

### 1.1 Logo / Nombre
- **Cambiar** el texto del logo/nombre por: `🌷 Paola`
- [Solo nombre de pila, sin apellido. El emoji de tulipán va antes del nombre.]

### 1.2 Links de navegación
Actualizar el array de links a:
```
Inicio
Mi historia
Notas        ← era "Blog"
Contacto
```

### 1.3 Eliminar botón del menú
- **Eliminar** el botón amarillo `"IR A CONTACTO"` del menú móvil.
- [El botón amarillo queda reservado para CTAs dentro de páginas — guía, newsletter, lead magnet. No vive en la navegación.]

---

## 2. HOME

---

### 2.1 Sección: HERO
**Componente:** `Hero` o equivalente

**Tagline:**
```
HOLA, SOY PAOLA
```
[Era: "DISEÑO · SISTEMAS · CLARIDAD"]

**Headline** (dos líneas):
```
Nuestro sistema de vida se diseña.
Las ideas que importan — se sostienen.
```
[Mantener como dos líneas separadas visualmente.]

**Subtítulo:**
```
Diseño sistemas para sostener lo que construimos — sin depender solo de nuestra energía.
```
[Diseño tipográfico: "Diseño sistemas" en negrita / font-weight alto. El resto en peso normal.]

**CTA primario** — sin cambios:
```
Descargar guía gratuita
```

**CTA secundario** — sin cambios:
```
Ver cómo funciona ↓
```

---

### 2.2 Sección: EL DOLOR
**Componente:** `PainSection` o equivalente

**Headline** — sin cambios:
```
No "eres" desordenada.
Estás saturada — y nadie te enseñó cómo organizar tu vida.
```

**Cuerpo** — actualizar:
```
Pensar en todo al mismo tiempo, anotar mensajes infinitos en un chat contigo misma
o escribirlo en papel y perderlo de vista, no es tener claridad.

Es ruido.
```
["Es ruido." va en negrita / font-weight alto.]

---

### 2.3 Sección: QUIÉN SOY
**Componente:** `AboutPreview` o equivalente

**Texto:**
```
Soy Paola.

Diseño sistemas para dar forma a procesos, sostener ideas, proyectos
y maneras de trabajar — sin que todo dependa de la energía personal
ni de saturar la cabeza intentando recordar todo.
```
[Diseño tipográfico:
- "Diseño sistemas para dar forma a procesos," → en negrita
- "sin que todo dependa de la energía personal" → en negrita
- El resto en peso normal.]

**Link:**
```
→ Conoce mi historia
```

---

### 2.4 Sección: CÓMO SE SOSTIENE
**Componente:** `PillarsSection` o equivalente

**Headline** — sin cambios:
```
La solución es tener un sistema.
```

**Pilar 1:**
- Título: `Claridad mental`
- Descripción: `Entiendes qué es esencial y tomas decisiones sin agotarte.`

**Pilar 2:**
- Título: `Estructura simple`
- Descripción: `Sistemas que puedes usar hoy, diseñados para sostener lo real.`

**Pilar 3:**
- Título: `Sostenibilidad en el tiempo`
- Descripción: `Lo que construyes te sostiene aunque no estés al 100%.`

---

### 2.5 Sección: POR DÓNDE EMPEZAR
**Componente:** `StartSection` / `CardsSection` o equivalente

**Headline** — sin cambios:
```
Elige por dónde empezar.
```

**Subtítulo** — actualizar:
```
Dos entradas según lo que hoy necesites ordenar.
```

---

**Tarjeta 1 — PARA TI** [tarjeta primaria / mayor peso visual — sin cambios de jerarquía]
- Label: `PARA TI`
- Headline: `Empieza por tu sistema personal.`
- Texto: `Descarga la guía gratuita y empieza a ordenar tu mente, tu tiempo y tu semana con más claridad.`
- CTA (botón primario): `Descargar guía gratuita`

---

**Tarjeta 2 — PARA TU EQUIPO DE TRABAJO** [tarjeta secundaria]
- Label: `PARA TU EQUIPO DE TRABAJO` ← actualizar, era "PARA TU TRABAJO"
- Headline: `Diseñemos un sistema para tu trabajo.`
- Texto: `Si hay fricción, desorden o saturación en tu equipo o procesos, podemos empezar por una conversación.`
- CTA (botón secundario): `Hablemos`

---

**Tarjeta 3 — PARA TU NEGOCIO** [NUEVA — terciaria / tono discreto pero visible]
[Agregar esta tarjeta entre la Tarjeta 2 y la tarjeta de la App. Misma estructura de componente que las anteriores, pero con menor peso visual — puede ser variante de estilo `outlined` o ligeramente más pequeña.]

- Label: `PARA TU NEGOCIO`
- Headline: `¿Necesitas ordenar las operaciones de tu negocio?`
- Texto: `Si sientes que los procesos internos no acompañan el crecimiento, podemos empezar por ahí.`
- CTA (botón discreto): `Hablemos`

---

**Tarjeta 4 — APP** [sin botón — era la Tarjeta 3, ahora pasa a ser la 4]
- Label: `PRÓXIMAMENTE`
- Headline: `Una herramienta para sostener tu sistema.`
- Texto: `Una app pensada para acompañar tu sistema personal en la vida real. En desarrollo.`
- [Sin CTA. Solo mostrar estado "Próximamente".]

---

### 2.6 Sección: NOTAS
**Componente:** `ContentSection` o equivalente

**Cambio de label de sección:**
```
NOTAS   ← era "CONTENIDO"
```

**Headline** — sin cambios:
```
Procesos, no fórmulas.
```

**Subtítulo** — actualizar:
```
Escribo estas notas para pensar con más criterio la relación entre sistemas, vida y trabajo.
```

[Las tres notas y el CTA "Ver todas las notas" permanecen sin cambios.]

---

### 2.7 Sección: CIERRE / CONTACTO
[Sin cambios de copy. Todo aprobado.]

### 2.8 Footer
[Sin cambios.]

---

## 3. PÁGINA: NOTAS (antes "Blog")

**Ruta:** `/notas` ← renombrar desde `/blog` si es posible

---

### 3.1 Hero de página

**Label** — actualizar:
```
MI BLOG PERSONAL
```
[Era: "ARCHIVO"]

**Headline** — sin cambios:
```
Notas sobre sistemas, vida y trabajo.
```

**Subtítulo** — actualizar:
```
Pienso en voz alta sobre claridad, procesos y lo que aprendo diseñando sistemas.
No son fórmulas — son reflexiones convertidas en criterio.
```

**Eliminar** el link `← Volver al inicio` de esta posición.
[Interrumpe el flujo antes de que el usuario explore el contenido.]

---

### 3.2 Nota destacada, más notas y footer
[Sin cambios de copy.]

---

## 4. PÁGINA: MI HISTORIA

**Ruta:** `/mi-historia` o `/about`

---

### 4.1 Hero de página

**Label** — actualizar:
```
HOLA, SOY PAOLA
```
[Era: "HISTORIA · PROCESOS · CLARIDAD"]

**Agregar foto de Paola** después del subtítulo (o integrada al hero si el layout lo permite).

**Headline** — actualizar:
```
Creativa con pensamiento sistémico.
```
[Era: "Mi historia"]

**Subtítulo** — actualizar + cambio de estilo:
```
Descubrí el diseño como forma de expresar el orden y la estructura
que sostienen nuestras ideas, proyectos y vida.
```
[Diseño tipográfico: este subtítulo va en color amarillo (accent color del sistema), negrita, tamaño intermedio — más grande que el subtítulo estándar actual, más pequeño que el headline. Aproximadamente 1–2 tamaños de fuente por encima del subtítulo estándar.]

---

### 4.2 Bloque 01 — ANTES

**Headline** — actualizar:
```
Durante mucho tiempo tuve muchas cosas en la cabeza y pocas formas de sostenerlas.
```

**Cuerpo** — reemplazar completamente:
```
Cuando emigré con 19 años tenía expectativas más altas de lo que podía sostener
en la vida real. Trabajando en un país y una cultura diferentes, con amigas como
familia y cuentas que pagar — era la mejor manera de empezar a explorar mi yo adulta.
A mi riesgo, claro.

Quería sostener mi vida cotidiana, el trabajo, la carrera, ahorrar dinero, tener tiempo
para disfrutar… pero también sentía que debía tener todo resuelto porque ya
"vivía sola y era joven". Un caos personal, básicamente.
```

---

### 4.3 Bloque 02 — GIRO

**Headline** — sin cambios:
```
Empecé a entender que el problema no era hacer más, sino diseñar mejor.
```

**Cuerpo** — reemplazar completamente:
```
Haberme puesto en esa situación preparó las bases para entender que la vida no
se sostiene sola, y que tampoco cae del cielo una solución que lo resuelve todo.

Aprendí que anotar las cosas más importantes para hacer en la semana baja el ruido.
Eso se llama diseño con intención: que lo importante no quede al azar ni a la energía
del momento.

Aunque aún no le ponía nombre, empecé a notar más claridad, más estructura en
ciertos procesos. Ahí apareció una forma distinta de pensar.
```

---

### 4.4 Bloque 03 — HOY

**Headline** — actualizar:
```
Hoy diseño sistemas, procesos y comunico con claridad para sostener mejor lo que hago.
```

**Cuerpo** — reemplazar completamente:
```
Hoy sigo construyendo estructuras, poniéndome a prueba y descubriendo que vale
la pena construir ideas, proyectos y la vida misma con sistemas coherentes.

Ese proceso puede ser mi vida, mi rutina, mis hábitos. Puede ser un proyecto
personal o externo, un producto o un equipo de trabajo.

De cualquier manera, hoy acompaño a través del diseño y de los sistemas.
```

---

### 4.5 Cierre

**Headline** — actualizar:
```
Si quieres seguir la conversación, puedes escribirme.
Y si no, también está bien volver al inicio.
```

**CTAs** — sin cambios:
- Botón primario: `Ir a contacto`
- Botón secundario: `Volver al inicio`

---

## 5. PÁGINA: CONTACTO

**Ruta:** `/contacto`

---

### 5.1 Cambio de orden de secciones [ESTRUCTURAL]

Reorganizar el orden de los bloques dentro de la página:

```
ORDEN ACTUAL:
1. Hero con CTA de WhatsApp
2. Para qué sirve escribir
3. Opción de mail

ORDEN NUEVO:
1. Hero (headline + subtítulo, sin CTA todavía)
2. Para qué sirve escribir + lista de tres puntos
3. CTA principal (WhatsApp)
4. Opción de mail
```

[El argumento debe ir antes de la llamada a la acción.]

---

### 5.2 Hero

**Label** — sin cambios: `CONECTEMOS`

**Headline** — actualizar:
```
Si quieres conversar, podemos empezar por WhatsApp.
```

**Subtítulo** — sin cambios:
```
Si hay algo que hoy necesita más claridad, estructura o una mirada externa,
este es un buen lugar para empezar la conversación.
```

---

### 5.3 Para qué sirve escribir

**Headline** — sin cambios:
```
Para abrir una conversación concreta, no para llenar un formulario eterno.
```

**Subtítulo** — actualizar:
```
Suele funcionar mejor cuando todavía no tienes todo ordenado, pero sí una
intuición clara de que algo necesita mejor diseño.
```

**Lista** — sin cambios:
```
· Ordenar una idea que hoy está dispersa
· Revisar una necesidad, un proceso o una forma de trabajar
· Empezar por una pregunta simple, sin tener todo resuelto
```

---

### 5.4 CTA principal

**Label:** `QUÉ ESPERAR` — sin cambios

**Texto** — sin cambios:
```
No hace falta llegar con todo resuelto. Podemos empezar por una consulta
breve y ver qué forma conviene darle.
```

**CTA principal (botón):** `Hablemos por WhatsApp` — sin cambios

**CTA secundario (texto)** — actualizar:
```
→ Volver al inicio
```
[Era "→ Ir a contacto" — corregido.]

---

### 5.5 Opción de mail

**Headline** — actualizar:
```
Si te resulta más fácil, también puedes escribirme por mail.
```

**Texto** — actualizar:
```
WhatsApp es el canal principal, pero si prefieres un primer contacto
por correo, está bien empezar por ahí.
```

[Sin cambios en email ni link de WhatsApp.]

---

## 6. VISTA INDIVIDUAL DE NOTA

**Componente:** `BlogPost` / `NoteDetail` o equivalente

---

### 6.1 Header de nota

**Eliminar** el label de categoría `SISTEMAS REALES` del header.
[Solo hay una categoría activa — el label no aporta valor todavía. Retomar cuando haya más de una.]

[El resto del header — link de vuelta, headline, subtítulo, fecha y tiempo de lectura — sin cambios.]

---

### 6.2 Cierre de nota

**Headline** — actualizar:
```
Si quieres seguir pensando este tema, hay más notas en el archivo.
```

**Texto** — actualizar:
```
Y si prefieres llevar la conversación a un caso concreto,
también puedes ir a contacto.
```

**CTAs** — sin cambios:
- Botón primario: `Volver al blog`
- Botón secundario: `Ir a contacto`

---

## 7. PÁGINA: GUÍA GRATUITA

**Ruta:** `/guia`

---

### 7.1 Hero de página

**Label** — actualizar:
```
GUÍA GRATUITA + PLANTILLA DE NOTION
```

**Headline** — sin cambios:
```
Empieza a ordenar tu sistema personal.
```

**Subtítulo** — actualizar:
```
Una guía breve y gratuita para descargar muchas ideas y dar un primer paso con estructura.
```

---

### 7.2 Beneficios
[Sin cambios — aprobados.]

---

### 7.3 Formulario

**Texto sobre el formulario** — sin cambios:
```
Deja tu email y recibe la guía al instante.
```

**Campos** — sin cambios:
- Campo 1: NOMBRE / placeholder: `Tu nombre`
- Campo 2: EMAIL / placeholder: `tu@email.com`

**Agregar casilla de consentimiento (opt-in)** [NUEVA]
[Agregar un checkbox antes del botón de envío. Debe ser requerido para habilitar el botón.]

```
☐ Acepto recibir la guía y comunicaciones ocasionales de Paola Zerpa.
  Puedes darte de baja cuando quieras.
```
[Estilo: texto pequeño, color secundario/muted. El botón de envío permanece deshabilitado hasta que el checkbox esté marcado.]

**Botón** — sin cambios: `RECIBIR GUÍA`

**Texto de apoyo** — sin cambios:
```
Es un recurso breve para empezar con claridad, sin tener que ordenar todo de una vez.
```

---

### 7.4 Cierre

**Headline** — sin cambios:
```
Un primer paso breve para empezar con un poco más de claridad.
```

**Texto** — actualizar:
```
Si después quieres profundizar, puedes seguir desde contacto.
```

**Link** — sin cambios: `→ Ir a contacto`

---

## RESUMEN DE CAMBIOS

| # | Página / Componente | Tipo | Descripción |
|---|---|---|---|
| 1 | Navegación | Texto + estructura | Logo → `🌷 Paola`, renombrar Blog → Notas, eliminar botón IR A CONTACTO |
| 2 | Home · Hero | Texto + tipografía | Nuevo tagline, nuevo headline (2 líneas), subtítulo con negrita parcial |
| 3 | Home · El dolor | Texto | Cuerpo actualizado, "Es ruido." en negrita |
| 4 | Home · Quién soy | Texto + tipografía | Texto actualizado con negritas parciales |
| 5 | Home · Pilares | Texto | Tres descripciones actualizadas |
| 6 | Home · Por dónde empezar | Texto + estructura | Label Tarjeta 2 actualizado, Tarjeta 3 nueva (negocio), App pasa a ser Tarjeta 4 |
| 7 | Home · Notas | Texto | Label de sección y subtítulo actualizados |
| 8 | Página Notas | Texto + estructura | Label y subtítulo del hero, eliminar link "Volver al inicio" |
| 9 | Mi historia · Hero | Texto + diseño | Label, headline y subtítulo nuevos; subtítulo en amarillo+negrita; agregar foto |
| 10 | Mi historia · Bloques 01-03 | Texto | Los tres cuerpos reemplazados completamente |
| 11 | Mi historia · Cierre | Texto | Headline actualizado (quitar voseo) |
| 12 | Contacto | Estructura | Reordenar bloques: argumento antes del CTA |
| 13 | Contacto | Texto | Headline hero y textos de mail actualizados (quitar voseo) |
| 14 | Vista de nota · Header | Estructura | Eliminar label de categoría |
| 15 | Vista de nota · Cierre | Texto | Headline y texto actualizados (quitar voseo) |
| 16 | Guía · Hero | Texto | Label y subtítulo actualizados |
| 17 | Guía · Formulario | Estructura | Agregar checkbox de consentimiento (opt-in) requerido |
| 18 | Guía · Cierre | Texto | Texto actualizado (quitar voseo) |

---

*Fin del documento · codex-instrucciones-v1 · paolazerpa.com*
