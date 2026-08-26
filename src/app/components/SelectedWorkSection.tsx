import { useIsMobile } from "../hooks/useIsMobile";
import { selectedHomeProjects } from "../data/portfolioProjects";
import { BrandButton } from "./brand/BrandButton";
import { SectionLabel } from "./brand/SectionLabel";
import { PortfolioProjectCard } from "./PortfolioProjectCard";

export function SelectedWorkSection() {
  const isMobile = useIsMobile();
  const isTablet = useIsMobile(1100) && !isMobile;

  return (
    <section
      id="selected-work"
      className="pz-dark"
      style={{
        padding: isMobile ? "48px 24px 64px" : isTablet ? "92px 48px 78px" : "112px 80px 88px",
        scrollMarginTop: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1160px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <SectionLabel number="02" tone="light">
          Proyectos seleccionados
        </SectionLabel>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
            gap: isMobile ? "16px" : "18px",
            marginTop: isMobile ? "28px" : "42px",
          }}
        >
          {selectedHomeProjects.map((project) => (
            <PortfolioProjectCard key={project.slug} project={project} variant="home-selected" />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: isMobile ? "22px" : "26px",
          }}
        >
          <BrandButton variant="secondary" to="/portfolio">
            Ver portfolio completo ↗
          </BrandButton>
        </div>
      </div>
    </section>
  );
}
