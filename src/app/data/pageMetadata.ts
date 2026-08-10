export type PageMetadata = {
  title: string;
  description: string;
  image?: string;
};

export const defaultMetadata: PageMetadata = {
  title: "Paola Zerpa — Product Designer",
  description:
    "Paola Zerpa diseña productos digitales y sistemas que convierten procesos complejos en experiencias claras y utilizables.",
};

export const routeMetadata: Record<string, PageMetadata> = {
  "/": {
    title: "Paola Zerpa — Diseño y Sistemas",
    description:
      "Paola Zerpa diseña sistemas, productos digitales y experiencias que ordenan procesos, información y decisiones.",
  },
  "/portfolio": {
    title: "Portfolio — Paola Zerpa, Product Designer",
    description:
      "Portfolio profesional de Paola Zerpa: Product Design, sistemas, SaaS, herramientas internas, e-commerce y operaciones complejas.",
  },
};

export function getPageMetadata(pathname: string): PageMetadata {
  return routeMetadata[pathname] ?? defaultMetadata;
}
