export type PortfolioProject = {
  slug: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  homeSummary: string;
  roleSummary: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  featured: boolean;
  caseStudyStatus: "available" | "coming-soon" | "none";
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "gestock",
    number: "01",
    title: "GeStock",
    category: "Sistema de gestión",
    summary:
      "Un sistema de gestión nacido de problemas operativos reales relacionados con stock, pedidos y proveedores.",
    homeSummary: "De una operación manual de stock y pedidos a un sistema digital.",
    roleSummary: "Problema · lógica · flujos · arquitectura · interfaces · pruebas en contexto real",
    tags: ["Operaciones", "Sistemas", "Product Design"],
    featured: true,
    caseStudyStatus: "coming-soon",
  },
  {
    slug: "nodux",
    number: "02",
    title: "NODUX",
    category: "Producto SaaS",
    summary:
      "Un producto para la gestión y operación de comercios que conecta ventas, inventario, pedidos, proveedores y tienda online.",
    homeSummary: "Un producto SaaS para ordenar la operación de comercios.",
    roleSummary: "Producto · UX · arquitectura · workflows · tienda online · operaciones",
    tags: ["SaaS", "E-commerce", "UX"],
    featured: true,
    caseStudyStatus: "coming-soon",
  },
  {
    slug: "operacion-de-tienda",
    number: "03",
    title: "Sistemas de operación de tienda",
    category: "Herramientas internas",
    summary:
      "Sistemas y herramientas para organizar pedidos, proveedores, stock, vencimientos y tareas compartidas del equipo.",
    homeSummary: "Herramientas para organizar pedidos, stock y tareas de tienda.",
    roleSummary: "Procesos · información · coordinación · herramientas internas · mejora continua",
    tags: ["Internal Tools", "Procesos", "Dashboards"],
    featured: true,
    caseStudyStatus: "none",
  },
  {
    slug: "cosmic-studio",
    number: "04",
    title: "Cosmic Studio",
    category: "Sistema de marca",
    summary:
      "Un sistema que conecta posicionamiento, servicios, identidad visual y experiencia web para comunicar una propuesta digital con claridad.",
    homeSummary: "Un sistema de marca para comunicar una propuesta digital con claridad.",
    roleSummary: "Estrategia · identidad · arquitectura web",
    tags: ["Estrategia", "Identidad", "Web"],
    featured: false,
    caseStudyStatus: "none",
  },
];

export const featuredPortfolioProjects = portfolioProjects.filter((project) => project.featured);
export const secondaryPortfolioProjects = portfolioProjects.filter((project) => !project.featured);
