import type { PortfolioProject } from "../data/portfolioProjects";
import { PortfolioVisualPlaceholder, type PortfolioVisualVariant } from "./PortfolioVisualPlaceholder";

const projectVisuals = {
  nodux: { eyebrow: "Producto conectado", variant: "nodux-ecosystem", theme: "teal" },
  gestock: { eyebrow: "Gestión operativa", variant: "dashboard", theme: "cream" },
  "operacion-de-tienda": { eyebrow: "Sistema de trabajo", variant: "operations", theme: "lime" },
  "cosmic-studio": { eyebrow: "Sistema de marca", variant: "structure", theme: "magenta" },
} as const satisfies Record<string, { eyebrow: string; variant: PortfolioVisualVariant; theme: "teal" | "cream" | "magenta" | "lime" }>;

export function PortfolioProjectVisual({
  project,
  emphasis = false,
  mode = "index",
}: {
  project: PortfolioProject;
  emphasis?: boolean;
  mode?: "index" | "home";
}) {
  const config = projectVisuals[project.slug] ?? { eyebrow: project.category, variant: "system" as const, theme: "teal" as const };
  const variant: PortfolioVisualVariant = mode === "home" && project.slug === "gestock" ? "dashboard-compact" : config.variant;

  return (
    <PortfolioVisualPlaceholder
      eyebrow={config.eyebrow}
      title={project.title}
      variant={variant}
      theme={config.theme}
      density="compact"
      aspectRatio={emphasis ? "15 / 10" : "16 / 10"}
      showCaption={false}
      marginTop={0}
      compactVisual={mode === "home"}
    />
  );
}
