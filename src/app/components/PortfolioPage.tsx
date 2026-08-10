import { useIsMobile } from "../hooks/useIsMobile";
import { featuredPortfolioProjects, secondaryPortfolioProjects } from "../data/portfolioProjects";
import { BrandButton } from "./brand/BrandButton";
import { SectionLabel } from "./brand/SectionLabel";
import { FooterSection } from "./FooterSection";
import { NavBar } from "./NavBar";
import { PortfolioProjectCard } from "./PortfolioProjectCard";

const processSteps = ["Comprender", "Investigar", "Organizar", "Diseñar", "Evolucionar"];
const capabilities = [
  "Product Design",
  "UX",
  "User Flows",
  "Information Architecture",
  "Systems Thinking",
  "Wireframing",
  "Prototyping",
  "SaaS",
  "Internal Tools",
  "E-commerce",
  "Dashboards",
  "Design Systems",
  "Product Discovery",
  "Figma",
];

export function PortfolioPage() {
  const isMobile = useIsMobile();
  const pagePadding = isMobile ? "24px" : "80px";
  const contentWidth = "1160px";

  return (
    <div className="pz-page">
      <NavBar />

      <main>
        <section
          className="pz-dark"
          style={{
            paddingTop: isMobile ? "112px" : "154px",
            paddingBottom: isMobile ? "76px" : "112px",
            paddingLeft: pagePadding,
            paddingRight: pagePadding,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: isMobile ? "-110px" : "4%",
              top: isMobile ? "96px" : "108px",
              width: isMobile ? "260px" : "430px",
              height: isMobile ? "260px" : "430px",
              borderRadius: "50%",
              border: "1px solid rgba(230, 215, 198, 0.18)",
              boxShadow: "0 0 0 44px rgba(240,127,168,0.035), 0 0 0 92px rgba(183,195,52,0.025)",
            }}
          />
          <div style={{ maxWidth: contentWidth, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <SectionLabel number="01" tone="light">
              Portfolio profesional
            </SectionLabel>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1fr) minmax(260px, 0.48fr)",
                gap: isMobile ? "30px" : "72px",
                alignItems: "end",
                marginTop: isMobile ? "24px" : "32px",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: isMobile ? "14px" : "16px",
                    color: "var(--citron-loto)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    margin: "0 0 18px",
                  }}
                >
                  Paola Zerpa
                </p>
                <h1
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 600,
                    fontSize: isMobile ? "48px" : "82px",
                    color: "var(--arena-clara)",
                    lineHeight: 0.96,
                    letterSpacing: "-0.04em",
                    margin: 0,
                    maxWidth: "780px",
                  }}
                >
                  Product Designer
                </h1>
              </div>
              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: isMobile ? "18px" : "22px",
                  lineHeight: 1.45,
                  color: "rgba(230, 215, 198, 0.9)",
                  margin: 0,
                }}
              >
                Diseño productos digitales y sistemas que convierten procesos complejos en
                experiencias claras y utilizables.
              </p>
            </div>
            <p
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: isMobile ? "11px" : "12px",
                lineHeight: 1.7,
                letterSpacing: "0.11em",
                textTransform: "uppercase",
                color: "rgba(230, 215, 198, 0.68)",
                margin: isMobile ? "32px 0 26px" : "42px 0 30px",
              }}
            >
              SaaS · Internal Tools · E-commerce · Sistemas de gestión
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <BrandButton variant="secondary" to="#selected-work">
                Ver proyectos ↘
              </BrandButton>
              <a
                className="pz-button pz-button--secondary"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
              <BrandButton variant="secondary" to="/contacto#email">
                Contacto ↗
              </BrandButton>
            </div>
          </div>
        </section>

        <section
          style={{
            backgroundColor: "var(--arena-clara)",
            padding: isMobile ? "74px 24px" : "104px 80px",
          }}
        >
          <div
            style={{
              maxWidth: contentWidth,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "0.8fr 1.2fr",
              gap: isMobile ? "26px" : "80px",
              alignItems: "start",
            }}
          >
            <SectionLabel number="02">Introducción</SectionLabel>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: isMobile ? "24px" : "34px",
                lineHeight: 1.28,
                color: "var(--mar-profundo)",
                margin: 0,
                maxWidth: "760px",
              }}
            >
              Trabajo entre producto, operaciones y experiencia de usuario. Antes de diseñar una
              interfaz, busco entender cómo funcionan las personas, los procesos, la información y
              las decisiones que sostienen el producto.
            </p>
          </div>
        </section>

        <section
          id="selected-work"
          className="pz-dark"
          style={{
            padding: isMobile ? "78px 24px 88px" : "112px 80px 124px",
            scrollMarginTop: "80px",
          }}
        >
          <div style={{ maxWidth: contentWidth, margin: "0 auto" }}>
            <SectionLabel number="03" tone="light">
              Selected work
            </SectionLabel>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1fr) minmax(260px, 0.56fr)",
                gap: isMobile ? "22px" : "70px",
                alignItems: "end",
                margin: "22px 0 42px",
              }}
            >
              <h2
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 600,
                  fontSize: isMobile ? "38px" : "60px",
                  lineHeight: 1.02,
                  color: "var(--arena-clara)",
                  margin: 0,
                  maxWidth: "680px",
                }}
              >
                De operaciones reales a productos digitales.
              </h2>
              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "17px",
                  lineHeight: 1.55,
                  color: "rgba(230, 215, 198, 0.76)",
                  margin: 0,
                }}
              >
                Identificar fricciones, organizar sistemas y diseñar experiencias que puedan
                sostenerse en el día a día.
              </p>
            </div>

            <div style={{ display: "grid", gap: "18px" }}>
              {featuredPortfolioProjects.map((project) => (
                <PortfolioProjectCard key={project.slug} project={project} />
              ))}
            </div>

            {secondaryPortfolioProjects.length > 0 && (
              <div style={{ marginTop: isMobile ? "56px" : "74px" }}>
                <p
                  style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: "11px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--citron-loto)",
                    margin: "0 0 18px",
                  }}
                >
                  Other work
                </p>
                <div style={{ display: "grid", gap: "18px" }}>
                  {secondaryPortfolioProjects.map((project) => (
                    <PortfolioProjectCard key={project.slug} project={project} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <section
          style={{
            backgroundColor: "var(--arena-clara)",
            padding: isMobile ? "78px 24px" : "110px 80px",
          }}
        >
          <div style={{ maxWidth: contentWidth, margin: "0 auto" }}>
            <SectionLabel number="04">Forma de trabajar</SectionLabel>
            <h2
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 600,
                fontSize: isMobile ? "38px" : "58px",
                lineHeight: 1.04,
                color: "var(--mar-profundo)",
                margin: "22px 0 42px",
                maxWidth: "760px",
              }}
            >
              El diseño empieza antes de elegir la solución.
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(5, minmax(0, 1fr))",
                borderTop: "1px solid rgba(23, 59, 68, 0.2)",
                borderBottom: "1px solid rgba(23, 59, 68, 0.2)",
              }}
            >
              {processSteps.map((step, index) => (
                <div
                  key={step}
                  style={{
                    padding: isMobile ? "20px 0" : "26px 18px 28px",
                    borderLeft: !isMobile && index > 0 ? "1px solid rgba(23, 59, 68, 0.2)" : "none",
                    borderTop: isMobile && index > 0 ? "1px solid rgba(23, 59, 68, 0.2)" : "none",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Space Mono, monospace",
                      fontSize: "11px",
                      color: "var(--mar-profundo)",
                      letterSpacing: "0.1em",
                      margin: "0 0 16px",
                      fontWeight: 700,
                    }}
                  >
                    0{index + 1}
                  </p>
                  <p
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: isMobile ? "23px" : "21px",
                      lineHeight: 1.12,
                      color: "var(--mar-profundo)",
                      margin: 0,
                    }}
                  >
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="pz-dark"
          style={{
            padding: isMobile ? "78px 24px 86px" : "108px 80px 118px",
          }}
        >
          <div
            style={{
              maxWidth: contentWidth,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "0.7fr 1.3fr",
              gap: isMobile ? "28px" : "78px",
              alignItems: "start",
            }}
          >
            <SectionLabel number="05" tone="light">
              Capacidades
            </SectionLabel>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {capabilities.map((capability, index) => (
                <span
                  key={capability}
                  style={{
                    border: `1px solid ${index % 3 === 0 ? "rgba(240,127,168,0.56)" : "rgba(230,215,198,0.26)"}`,
                    borderRadius: "999px",
                    padding: "11px 13px",
                    fontFamily: "Space Mono, monospace",
                    fontSize: isMobile ? "10px" : "11px",
                    letterSpacing: "0.04em",
                    color: index % 3 === 0 ? "var(--arena-clara)" : "rgba(230,215,198,0.78)",
                    background: index % 3 === 0 ? "rgba(240,127,168,0.12)" : "rgba(230,215,198,0.04)",
                  }}
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section
          style={{
            backgroundColor: "var(--magenta)",
            padding: isMobile ? "68px 24px 76px" : "88px 80px 96px",
          }}
        >
          <div style={{ maxWidth: contentWidth, margin: "0 auto" }}>
            <SectionLabel number="06">Hablemos</SectionLabel>
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "flex-start" : "end",
                justifyContent: "space-between",
                gap: "28px",
                marginTop: "24px",
              }}
            >
              <h2
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 600,
                  fontSize: isMobile ? "36px" : "58px",
                  lineHeight: 1.02,
                  color: "var(--mar-profundo)",
                  margin: 0,
                  maxWidth: "760px",
                }}
              >
                ¿Estás construyendo un producto o buscando una Product Designer para tu equipo?
              </h2>
              <BrandButton variant="secondary" to="/contacto#email">
                Hablemos ↗
              </BrandButton>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
