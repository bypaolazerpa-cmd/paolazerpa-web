export type BlogPostSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPostRecord = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
  featuredQuote?: string;
  coverTone: "sage" | "clay" | "gold";
  content: BlogPostSection[];
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
    slug: "lo-que-aprendi-al-intentar-sostener-todo-al-mismo-tiempo",
    title: "Lo que aprendí al intentar sostener todo al mismo tiempo",
    category: "Sistemas reales",
    date: "Mar 2025",
    readingTime: "4 min",
    excerpt: "No era falta de disciplina. Era falta de arquitectura.",
    featuredQuote: "No era falta de disciplina. Era falta de arquitectura.",
    coverTone: "sage",
    content: [
      {
        heading: "Cuando todo parecía importante",
        paragraphs: [
          "Durante bastante tiempo confundí responsabilidad con capacidad infinita. Si algo me importaba, sentía que tenía que poder sostenerlo entero: trabajo, ideas, vínculos, pendientes domésticos, decisiones pequeñas, decisiones grandes.",
          "Lo que pasaba en la práctica era otra cosa. Llegaba al final del día con la sensación de haber estado ocupada todo el tiempo y, al mismo tiempo, de no haber tocado lo verdaderamente importante.",
        ],
      },
      {
        heading: "No era un problema de carácter",
        paragraphs: [
          "En un momento entendí que no estaba fallando por falta de disciplina. Estaba tratando de administrar demasiadas capas de la vida sin una estructura que las organizara con criterio.",
          "Sostener todo al mismo tiempo no era una prueba de compromiso. Era una manera bastante eficaz de saturar la cabeza y perder dirección.",
        ],
      },
      {
        heading: "Lo que cambió cuando empecé a diseñar",
        paragraphs: [
          "La diferencia apareció cuando dejé de pedirme heroicidad y empecé a diseñar apoyos. Menos listas dispersas, menos decisiones repetidas, menos asuntos viviendo sólo en la memoria.",
          "No resolví todo de golpe. Pero empecé a notar algo más importante: una sensación de arquitectura. Un sistema mínimo que me devolvía espacio para pensar mejor.",
        ],
      },
      {
        heading: "Cierre",
        paragraphs: [
          "Desde entonces, cada vez que siento que todo depende de mi cabeza, vuelvo a la misma pregunta: qué parte de esto necesita más esfuerzo y qué parte necesita mejor diseño.",
        ],
      },
    ],
  },
  {
    slug: "como-redisene-mi-ritual-de-manana-sin-que-dependiera-de-mi-estado-de-animo",
    title: "Cómo rediseñé mi ritual de mañana sin que dependiera de mi estado de ánimo",
    category: "Reflexiones",
    date: "Feb 2025",
    readingTime: "3 min",
    excerpt: "A veces no hace falta más motivación, sino menos fricción.",
    coverTone: "clay",
    content: [
      {
        heading: "La fantasía de la mañana perfecta",
        paragraphs: [
          "Durante mucho tiempo pensé el ritual de mañana como una escena ideal: silencio, claridad, energía disponible y una secuencia impecable de hábitos.",
          "La realidad era bastante menos cinematográfica. Algunos días funcionaba. Otros, simplemente no. Y cuando no funcionaba, aparecía la sensación de haber empezado mal.",
        ],
      },
      {
        heading: "Cambiar el criterio",
        paragraphs: [
          "Lo que me ayudó no fue exigirme constancia emocional. Fue rediseñar el punto de entrada. Si una mañana dependía de mi estado de ánimo para empezar bien, en verdad no tenía un ritual: tenía una expectativa frágil.",
          "Empecé a dejar menos decisiones abiertas y a reducir fricción. Agua lista, cuaderno visible, una primera acción pequeña y suficiente.",
        ],
      },
      {
        heading: "Un sistema más amable",
        paragraphs: [
          "El cambio no volvió mis mañanas perfectas. Las volvió utilizables. Y eso, para mí, fue mucho más valioso.",
          "A veces no hace falta más motivación. Hace falta una estructura menos ambiciosa y más compatible con la vida real.",
        ],
      },
      {
        heading: "Cierre",
        paragraphs: [
          "Hoy pienso los rituales como apoyos, no como pruebas. Si una práctica sólo funciona en mis mejores días, todavía necesita rediseño.",
        ],
      },
    ],
  },
  {
    slug: "por-que-deje-de-optimizar-mi-agenda-y-empece-a-disenar-mi-energia",
    title: "Por qué dejé de optimizar mi agenda y empecé a diseñar mi energía",
    category: "Decisiones de diseño",
    date: "Ene 2025",
    readingTime: "5 min",
    excerpt: "No todo se resuelve organizando más. Algunas cosas piden otro ritmo.",
    coverTone: "gold",
    content: [
      {
        heading: "El límite de la agenda",
        paragraphs: [
          "Hubo un momento en que mi agenda estaba impecable y, aun así, yo seguía llegando cansada a casi todo. Tenía bloques, colores, prioridades y una sensación persistente de no estar realmente sostenida.",
          "Ahí empecé a notar una diferencia clave: una agenda puede ordenar tiempo, pero no necesariamente energía.",
        ],
      },
      {
        heading: "Diseñar desde la capacidad real",
        paragraphs: [
          "En lugar de seguir optimizando horas, empecé a mirar ritmos. Cuándo pienso mejor, cuándo necesito tareas livianas, cuánto esfuerzo invisible me cuesta una semana aparentemente bien armada.",
          "Ese movimiento fue pequeño, pero cambió bastante. Dejó de tratarse de meter más cosas y empezó a tratarse de darle mejor forma a lo que sí importa.",
        ],
      },
      {
        heading: "Menos control, más criterio",
        paragraphs: [
          "Diseñar energía no significa vivir improvisando. Significa reconocer que no todo momento tiene la misma densidad y que un sistema útil necesita contemplar eso.",
          "No todo se resuelve organizando más. Algunas cosas piden otro ritmo, otra secuencia y un poco más de honestidad sobre cómo estamos realmente.",
        ],
      },
      {
        heading: "Cierre",
        paragraphs: [
          "Desde entonces, cuando algo no se sostiene, no miro primero la agenda. Miro si el sistema que la rodea acompaña de verdad la forma en que vivo y trabajo.",
        ],
      },
    ],
  },
];

export const featuredBlogPost = blogPosts[0];

export const otherBlogPosts = blogPosts.slice(1);

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
