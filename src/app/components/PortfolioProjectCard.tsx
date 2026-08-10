import { BrandButton } from "./brand/BrandButton";
import type { PortfolioProject } from "../data/portfolioProjects";

type PortfolioProjectCardProps = {
  project: PortfolioProject;
  variant?: "home" | "portfolio";
};

function ProjectPreview({ project, compact }: { project: PortfolioProject; compact: boolean }) {
  return (
    <div
      role="img"
      aria-label={project.imageAlt ?? `Preview provisional de ${project.title}`}
      style={{
        width: "100%",
        aspectRatio: "16 / 10",
        position: "relative",
        overflow: "hidden",
        borderRadius: "8px",
        border: "1px solid rgba(230, 215, 198, 0.2)",
        background:
          "radial-gradient(circle at 76% 24%, rgba(240,127,168,0.54), transparent 20%), linear-gradient(135deg, rgba(169,205,227,0.2), rgba(23,59,68,0.92) 58%, rgba(12,16,14,0.98))",
      }}
    >
      {project.image && (
        <img
          src={project.image}
          alt={project.imageAlt ?? `Preview de ${project.title}`}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
      )}
        <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: compact ? "18px" : "28px",
          border: "1px solid rgba(230, 215, 198, 0.34)",
          borderRadius: "5px",
          background:
            "linear-gradient(180deg, rgba(230,215,198,0.12) 0 18%, transparent 18% 100%), linear-gradient(90deg, rgba(183,195,52,0.72) 0 22%, transparent 22% 100%)",
          opacity: project.image ? 0.18 : 0.78,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: compact ? "30px" : "46px",
          right: compact ? "30px" : "46px",
          bottom: compact ? "28px" : "42px",
          display: "grid",
          gap: "6px",
        }}
      >
        {["38%", "68%", "52%"].map((width, index) => (
          <span
            key={index}
            aria-hidden="true"
            style={{
              display: "block",
              height: "5px",
              width,
              borderRadius: "999px",
              background: index === 1 ? "var(--magenta)" : "rgba(230,215,198,0.58)",
            }}
          />
        ))}
      </div>
      <span
        style={{
          position: "absolute",
          right: compact ? "12px" : "18px",
          bottom: compact ? "10px" : "16px",
          fontFamily: "Space Mono, monospace",
          fontSize: "9px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "rgba(230,215,198,0.68)",
        }}
      >
        Preview provisional
      </span>
    </div>
  );
}

export function PortfolioProjectCard({ project, variant = "portfolio" }: PortfolioProjectCardProps) {
  const compact = variant === "home";
  const statusLabel =
    project.caseStudyStatus === "coming-soon" ? "Caso en preparación" : "Proyecto seleccionado";

  return (
    <article
      style={{
        display: "grid",
        gridTemplateColumns: compact ? "1fr" : "minmax(220px, 0.72fr) minmax(0, 1fr)",
        gap: compact ? "22px" : "34px",
        padding: compact ? "22px" : "28px",
        border: "1px solid rgba(230, 215, 198, 0.22)",
        borderTop: `3px solid ${project.featured ? "var(--magenta)" : "var(--citron-loto)"}`,
        borderRadius: "8px",
        background:
          "linear-gradient(180deg, rgba(250,248,244,0.1) 0%, rgba(23,59,68,0.58) 46%, rgba(9,20,24,0.86) 100%)",
        boxShadow: "inset 0 1px 0 rgba(250,248,244,0.1)",
      }}
    >
      <ProjectPreview project={project} compact={compact} />

      <div style={{ display: "grid", gap: compact ? "18px" : "22px", alignContent: "start" }}>
        <div>
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "10px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: project.featured ? "var(--magenta)" : "var(--citron-loto)",
              margin: "0 0 14px",
              fontWeight: 700,
            }}
          >
            {project.number} — {project.category}
          </p>
          <h3
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 600,
              fontSize: compact ? "30px" : "42px",
              color: "var(--arena-clara)",
              lineHeight: 1.02,
              margin: "0 0 14px",
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: compact ? "16px" : "18px",
              lineHeight: 1.55,
              color: "rgba(230, 215, 198, 0.9)",
              margin: 0,
            }}
          >
            {compact ? project.homeSummary : project.summary}
          </p>
        </div>

        {!compact && (
          <>
            <p
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "11px",
                lineHeight: 1.65,
                color: "rgba(230, 215, 198, 0.7)",
                margin: 0,
              }}
            >
              <span style={{ color: "var(--arena-clara)", fontWeight: 700 }}>Mi trabajo:</span>{" "}
              {project.roleSummary}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    border: "1px solid rgba(255, 203, 224, 0.28)",
                    borderRadius: "999px",
                    padding: "8px 10px",
                    fontFamily: "Space Mono, monospace",
                    fontSize: "9px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(250, 248, 244, 0.86)",
                    background: "rgba(12, 16, 14, 0.28)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
            {project.caseStudyStatus === "available" ? (
              <BrandButton variant="secondary" to={`/portfolio/${project.slug}`}>
                Ver caso ↗
              </BrandButton>
            ) : (
              <span
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "10px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--arena-clara)",
                }}
              >
                {statusLabel}
              </span>
            )}
          </div>
          </>
        )}
      </div>
    </article>
  );
}
