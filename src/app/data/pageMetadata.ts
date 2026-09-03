export type PageMetadata = { title: string; description: string };

export const defaultMetadata: PageMetadata = { title: "Paola Zerpa - Diseño y Sistemas", description: "Paola Zerpa diseña productos digitales y sistemas que ordenan procesos, información y decisiones." };

export const routeMetadata: Record<string, PageMetadata> = {
  "/portfolio": { title: "Portfolio — Paola Zerpa, Product Designer", description: "Portfolio profesional de Paola Zerpa: Product Design, sistemas, SaaS, herramientas internas, e-commerce y operaciones complejas." },
  "/portfolio/nodux": { title: "NODUX — Case Study | Paola Zerpa", description: "Case study de Product Design sobre la evolución de NODUX, un producto digital que conecta gestión comercial y tienda online." },
  "/portfolio/gestock": { title: "GeStock — Case Study | Paola Zerpa", description: "Case study sobre cómo problemas reales de operación se transformaron en un sistema digital de gestión." },
  "/portfolio/operacion-de-tienda": { title: "Sistemas de operación de tienda | Paola Zerpa", description: "Caso sobre diseño de sistemas de trabajo para organizar información, procesos y responsabilidades en una operación real." },
  "/portfolio/cosmic-studio": { title: "Cosmic Studio — Proyecto | Paola Zerpa", description: "Proyecto de identidad, estructura y experiencia digital para Cosmic Studio." },
};

export function getPageMetadata(pathname: string) { return routeMetadata[pathname] ?? defaultMetadata; }
