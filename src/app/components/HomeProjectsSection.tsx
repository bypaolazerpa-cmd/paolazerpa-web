import { useIsMobile } from "../hooks/useIsMobile";
import { featuredPortfolioProjects } from "../data/portfolioProjects";
import { BrandButton } from "./brand/BrandButton";
import { SectionLabel } from "./brand/SectionLabel";
import { PortfolioProjectCard } from "./PortfolioProjectCard";

export function HomeProjectsSection() {
  const isMobile = useIsMobile();

  return (
    <section
      id="proyectos"
      className="pz-dark"
      style={{
        paddingTop: isMobile ? "86px" : "112px",
        paddingBottom: isMobile ? "88px" : "118px",
        paddingLeft: isMobile ? "24px" : "80px",
        paddingRight: isMobile ? "24px" : "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1160px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <SectionLabel number="07" tone="light">
          Mi portfolio
        </SectionLabel>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1fr) minmax(280px, 0.54fr)",
            gap: isMobile ? "24px" : "56px",
            alignItems: "end",
            margin: "22px 0 40px",
          }}
        >
          <h2
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 600,
              fontSize: isMobile ? "36px" : "58px",
              color: "var(--arena-clara)",
              lineHeight: 1.02,
              margin: 0,
              maxWidth: "760px",
            }}
          >
            La prueba de cómo se ve un sistema cuando empieza a funcionar.
          </h2>
          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: isMobile ? "17px" : "19px",
              lineHeight: 1.55,
              color: "rgba(230, 215, 198, 0.82)",
              margin: 0,
            }}
          >
            Una selección de proyectos donde operaciones, información y producto empiezan a
            encontrar una forma más clara.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
            gap: "16px",
          }}
        >
          {featuredPortfolioProjects.map((project) => (
            <PortfolioProjectCard key={project.slug} project={project} variant="home" />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            justifyContent: "space-between",
            gap: "20px",
            borderTop: "1px solid rgba(230, 215, 198, 0.18)",
            paddingTop: isMobile ? "26px" : "30px",
            marginTop: isMobile ? "28px" : "34px",
          }}
        >
          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: isMobile ? "18px" : "22px",
              lineHeight: 1.45,
              color: "rgba(230, 215, 198, 0.9)",
              margin: 0,
              maxWidth: "650px",
            }}
          >
            Mira el recorrido completo, el contexto y la evidencia detrás de cada proyecto.
          </p>
          <BrandButton variant="secondary" to="/portfolio">
            Ver portfolio completo ↗
          </BrandButton>
        </div>
      </div>
    </section>
  );
}
