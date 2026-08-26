export type BlogPostRecord = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
  featuredQuote?: string;
  coverTone: "sage" | "clay" | "gold";
  content: string[];
};

export const coverToneStyles: Record<
  BlogPostRecord["coverTone"],
  { background: string; accent: string; soft: string }
> = {
  sage: {
    background: "#D4E4DA",
    accent: "#7C9E8A",
    soft: "#EEF4F0",
  },
  clay: {
    background: "#EDE0D4",
    accent: "#C97B5A",
    soft: "#F7F0EA",
  },
  gold: {
    background: "#F5EFD0",
    accent: "#8B6F47",
    soft: "#FBF7E8",
  },
};

export const blogPosts: BlogPostRecord[] = [
  {
    slug: "un-ano-intentando-entender-que-significa-disenar-un-producto",
    title: "Un año intentando entender qué significa realmente diseñar un producto",
    category: "PRODUCT DESIGN",
    date: "AGO 2026",
    readingTime: "5 MIN",
    excerpt:
      "GeStock empezó resolviendo problemas muy concretos. NODUX me obligó a empezar a mirar algo más grande: no solo las pantallas que diseñaba, sino el producto que las conectaba.",
    coverTone: "sage",
    content: [
      "Hace poco más de un año yo estaba empezando a aprender UX/UI y muchas de las cosas que hoy puedo nombrar todavía eran bastante nuevas para mí.",
      "Sabía que me gustaba entender cómo funcionaban las cosas, ordenar información, representar ideas y buscar maneras más claras de hacer algo. Lo había hecho antes en contextos completamente distintos, pero todavía no lo entendía como parte de una profesión.",
      "Después apareció GeStock.",
      "No nació porque un día nos sentáramos a pensar qué software podíamos crear. Nació de problemas bastante cotidianos: productos, stock, vencimientos, información repartida, tareas que dependían demasiado de recordar qué había que hacer.",
      "La primera pregunta era muy concreta:",
      "¿cómo hacemos esto más fácil de gestionar?",
      "Y empezamos a construir.",
      "Al principio mi atención estaba mucho más cerca de la solución visible. Qué pantalla hacía falta, qué información debía mostrar, dónde poner una acción, cómo ordenar un flujo, qué necesitaba entender la persona que estaba usando el sistema.",
      "Eso ya era diseño. Pero todavía estaba mirando el producto bastante cerca.",
      "GeStock fue creciendo, cambiando y eventualmente convirtiéndose en NODUX.",
      "Y ahí empezaron a aparecer preguntas distintas.",
      "Ya no era solamente:",
      "¿Cómo debería funcionar esta pantalla?",
      "También era:",
      "¿Qué pasa antes de que una persona llegue acá?",
      "¿Qué necesita haber entendido previamente?",
      "¿Qué ocurre después?",
      "¿Cómo se conecta esta función con las demás?",
      "¿Quién está usando el producto y qué vino realmente a conseguir?",
      "Un catálogo no existe aislado de los pedidos. Un pedido no existe aislado del cliente. Una tienda online no funciona solamente porque tenga productos publicados. Y una función puede estar perfectamente construida y aun así no ayudar demasiado si el recorrido completo no tiene sentido.",
      "Empecé a entender algo que ahora parece bastante obvio:",
      "el producto no es la suma de sus pantallas.",
      "Las pantallas son una de las formas en las que el producto se vuelve visible.",
      "Con NODUX también empecé a prestar más atención a quién iba a usar lo que estábamos construyendo.",
      "No solamente a lo que una persona decía necesitar, sino a cómo trabajaba hoy, qué información ya tenía, qué sabía hacer, qué no tendría por qué aprender y qué complejidad podía absorber el producto en su lugar.",
      "Por ejemplo, si alguien tiene su catálogo escrito en un cuaderno, la respuesta no necesariamente tiene que ser pedirle que primero aprenda cómo estructuramos nosotros una base de datos.",
      "Tal vez el producto puede encontrarse con esa persona un poco más cerca de donde ya está.",
      "Ese tipo de preguntas fueron cambiando mi manera de mirar el diseño.",
      "Empecé a pensar más en personas, información, decisiones, recorridos, reglas, estados, dependencias y en cómo todo eso termina convirtiéndose en una interfaz que alguien puede usar sin necesitar conocer todo lo que existe detrás.",
      "Y también empecé a entender por qué Product Design me interesa tanto.",
      "No porque reúna una lista de tareas que me gustan, sino porque me permite trabajar sobre algo completo: entender un problema, mirar a las personas que lo viven, organizar lo que interviene, tomar decisiones y darle una forma que pueda ponerse en uso.",
      "Hay muchas partes de Product Design que todavía estoy desarrollando.",
      "Quiero hacer más investigación con personas reales. Mejorar cómo valido decisiones. Entender mejor datos, accesibilidad, comportamiento complejo, tecnología y todo lo que ocurre cuando un producto deja de ser una idea y empieza a convivir con usuarios de verdad.",
      "Pero también hay algo que ya cambió.",
      "Antes podía mirar una pantalla y preguntarme cómo mejorarla.",
      "Ahora me resulta difícil no preguntarme primero:",
      "qué lugar ocupa esa pantalla dentro de todo lo demás.",
      "Qué vino a hacer la persona. Qué necesita saber. Qué decisiones está tomando. Qué ocurrió antes. Qué debería pasar después. Y qué otras partes del producto pueden verse afectadas si cambiamos algo ahí.",
      "Supongo que parte de aprender una profesión consiste justamente en eso: empezar a ver cosas que antes estaban ahí, pero todavía no sabías mirar.",
      "Y quizás por eso quiero que exista esta bitácora.",
      "No para escribir conclusiones definitivas sobre diseño, tecnología o productos, sino para ir dejando registro de lo que voy entendiendo mientras los construyo.",
    ],
  },
];

export const featuredBlogPost = blogPosts[0];

export const otherBlogPosts: BlogPostRecord[] = [];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
