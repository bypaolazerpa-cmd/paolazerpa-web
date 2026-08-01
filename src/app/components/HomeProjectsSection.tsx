import { useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";
import { BrandButton } from "./brand/BrandButton";
import { SectionLabel } from "./brand/SectionLabel";

const projects = [
  {
    number: "01",
    category: "Sistema de control",
    title: "Control de vencimientos",
    body:
      "Un sistema para organizar productos por fecha, ubicación y nivel de urgencia, y ayudar al equipo a decidir qué necesita atención y qué acción realizar.",
    tags: ["Operaciones", "Automatización", "Google Sheets"],
    accent: "var(--cielo-suave)",
  },
  {
    number: "02",
    category: "Producto digital",
    title: "Nodux",
    body:
      "Una plataforma para tiendas que conecta ventas, inventario, pedidos, proveedores y tienda online dentro de una misma experiencia de gestión.",
    tags: ["Product Design", "SaaS", "UX/UI"],
    accent: "var(--magenta)",
  },
  {
    number: "03",
    category: "Sistema de marca",
    title: "Cosmic Studio",
    body:
      "Un sistema que conecta posicionamiento, servicios, identidad visual y experiencia web para comunicar con claridad la propuesta de un estudio digital.",
    tags: ["Estrategia", "Identidad", "Arquitectura web"],
    accent: "var(--citron-loto)",
  },
  {
    number: "04",
    category: "Sistema de operaciones",
    title: "Operación de tienda",
    body:
      "Un sistema compartido para organizar las tareas de una tienda, coordinar el trabajo entre turnos y dar seguimiento a los pedidos realizados a proveedores.",
    tags: ["Operaciones", "Equipo", "Trello"],
    accent: "var(--musgo-oliva)",
  },
];

export function HomeProjectsSection() {
  const isMobile = useIsMobile();
  const [page, setPage] = useState(0);
  const visibleProjects = isMobile ? 1 : 2;
  const pageCount = Math.ceil(projects.length / visibleProjects);
  const activePage = Math.min(page, pageCount - 1);
  const activeProjects = projects.slice(
    activePage * visibleProjects,
    activePage * visibleProjects + visibleProjects,
  );

  const goToPrevious = () => {
    setPage((currentPage) => (currentPage - 1 + pageCount) % pageCount);
  };

  const goToNext = () => {
    setPage((currentPage) => (currentPage + 1) % pageCount);
  };

  return (
    <section
      id="proyectos"
      style={{
        backgroundColor: "var(--mar-profundo)",
        paddingTop: isMobile ? "86px" : "112px",
        paddingBottom: isMobile ? "88px" : "118px",
        paddingLeft: isMobile ? "24px" : "80px",
        paddingRight: isMobile ? "24px" : "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1160px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 0.88fr) minmax(320px, 0.62fr)",
            gap: isMobile ? "28px" : "58px",
            alignItems: "end",
            marginBottom: isMobile ? "34px" : "50px",
          }}
        >
          <div>
            <SectionLabel number="07" tone="light">
              Proyectos
            </SectionLabel>
            <h2
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 600,
                fontSize: isMobile ? "36px" : "60px",
                color: "var(--arena-clara)",
                lineHeight: 1.02,
                margin: "22px 0 0",
                maxWidth: "820px",
              }}
            >
              La prueba de cómo se ve un sistema cuando empieza a funcionar.
            </h2>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: isMobile ? "flex-start" : "flex-end",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <button
              onClick={goToPrevious}
              aria-label="Ver proyectos anteriores"
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "999px",
                border: "1px solid var(--cta-glass-border)",
                background: "var(--cta-glass-bg)",
                color: "var(--mar-profundo)",
                fontFamily: "Space Mono, monospace",
                fontSize: "20px",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "var(--cta-glass-shadow)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              ←
            </button>
            <p
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "11px",
                letterSpacing: "0.12em",
                color: "rgba(230, 215, 198, 0.9)",
                margin: 0,
                minWidth: "58px",
                textAlign: "center",
              }}
            >
              {String(activePage + 1).padStart(2, "0")} / {String(pageCount).padStart(2, "0")}
            </p>
            <button
              onClick={goToNext}
              aria-label="Ver siguientes proyectos"
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "999px",
                border: "1px solid var(--cta-glass-border)",
                background: "var(--cta-glass-bg)",
                color: "var(--mar-profundo)",
                fontFamily: "Space Mono, monospace",
                fontSize: "20px",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "var(--cta-glass-shadow)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              →
            </button>
          </div>
        </div>

        <div
          style={{
            border: "1px solid rgba(230, 215, 198, 0.28)",
            borderRadius: "10px",
            background:
              "linear-gradient(180deg, rgba(230,215,198,0.1) 0%, rgba(12,16,14,0.5) 100%)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "end",
              minHeight: "38px",
              padding: isMobile ? "14px 14px 0" : "18px 18px 0",
            }}
          >
            {projects.map((project, index) => {
              const isActive =
                index >= activePage * visibleProjects &&
                index < activePage * visibleProjects + visibleProjects;

              return (
                <button
                  key={project.number}
                  onClick={() => setPage(Math.floor(index / visibleProjects))}
                  aria-label={`Ver ${project.title}`}
                  style={{
                    border: "1px solid rgba(255, 203, 224, 0.36)",
                    borderBottomColor: isActive ? "rgba(255, 203, 224, 0.18)" : "rgba(255, 203, 224, 0.24)",
                    borderRadius: "8px 8px 0 0",
                    padding: isMobile ? "9px 10px" : "10px 16px",
                    background: isActive
                      ? "var(--cta-glass-bg)"
                      : "rgba(240,127,168,0.16)",
                    color: isActive ? "var(--mar-profundo)" : "rgba(255, 203, 224, 0.78)",
                    fontFamily: "Space Mono, monospace",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    cursor: "pointer",
                    textTransform: "uppercase",
                    boxShadow: isActive ? "0 12px 24px rgba(240,127,168,0.14)" : "none",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                  }}
                >
                  {project.number}
                </button>
              );
            })}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))",
              gap: isMobile ? "16px" : "18px",
              padding: isMobile ? "16px" : "22px",
            }}
          >
            {activeProjects.map((project) => (
              <article
                key={project.title}
                style={{
                  minHeight: isMobile ? "auto" : "410px",
                  padding: isMobile ? "24px 22px" : "32px 30px",
                  display: "grid",
                  gridTemplateRows: "auto 1fr auto",
                  gap: isMobile ? "28px" : "34px",
                  borderRadius: "8px",
                  border: "1px solid rgba(230, 215, 198, 0.28)",
                  borderTop: `3px solid ${project.accent}`,
                  background:
                    "linear-gradient(180deg, rgba(230,215,198,0.16) 0%, rgba(12,16,14,0.62) 100%)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "Space Mono, monospace",
                      fontSize: "11px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(230, 215, 198, 0.92)",
                      margin: "0 0 18px",
                      fontWeight: 700,
                    }}
                  >
                    {project.number} — {project.category}
                  </p>
                  <h3
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 600,
                      fontSize: isMobile ? "34px" : "46px",
                      color: "var(--arena-clara)",
                      lineHeight: 1.02,
                      margin: "0 0 20px",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: isMobile ? "17px" : "19px",
                      lineHeight: 1.55,
                      color: "rgba(230, 215, 198, 0.9)",
                      margin: 0,
                      maxWidth: "560px",
                    }}
                  >
                    {project.body}
                  </p>
                </div>

                <div aria-hidden="true" />

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        border: "1px solid rgba(230, 215, 198, 0.34)",
                        borderRadius: "999px",
                        padding: "10px 12px",
                        fontFamily: "Space Mono, monospace",
                        fontSize: "10px",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "rgba(230, 215, 198, 0.88)",
                        background: "rgba(12, 16, 14, 0.26)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: isMobile ? "30px" : "38px",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1fr) auto",
            gap: "22px",
            alignItems: "center",
            borderTop: "1px solid rgba(230, 215, 198, 0.18)",
            paddingTop: isMobile ? "24px" : "28px",
          }}
        >
          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: isMobile ? "18px" : "22px",
              lineHeight: 1.45,
              color: "rgba(230, 215, 198, 0.92)",
              margin: 0,
              maxWidth: "640px",
            }}
          >
            Tu proyecto también puede convertirse en un sistema claro.
          </p>
          <BrandButton variant="secondary" to="/contacto#email">
            Hablemos ↗
          </BrandButton>
        </div>
      </div>
    </section>
  );
}
