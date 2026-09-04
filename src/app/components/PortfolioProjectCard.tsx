import { BrandButton } from "./brand/BrandButton";
import { AppLink } from "./AppLink";
import type { PortfolioProject } from "../data/portfolioProjects";
import { PortfolioProjectVisual } from "./PortfolioProjectVisual";

type PortfolioProjectCardProps = {
  project: PortfolioProject;
  variant?: "home" | "home-selected" | "portfolio" | "portfolio-v2";
  portfolioContent?: {
    eyebrow: string;
    change: string;
    description: string;
    participation: string;
  };
};

function PortfolioIndexCard({
  project,
  content,
}: {
  project: PortfolioProject;
  content: NonNullable<PortfolioProjectCardProps["portfolioContent"]>;
}) {
  return (
    <article id={project.slug} className="portfolio-v2-card">
      <div className="portfolio-v2-card__identity">
        <p className="portfolio-v2-card__eyebrow">{content.eyebrow}</p>
        <h3 className="portfolio-v2-card__title">{project.title}</h3>
        <p className="portfolio-v2-card__change">{content.change}</p>
      </div>
      <div className="portfolio-v2-card__preview">
        <PortfolioProjectVisual project={project} emphasis />
      </div>
      <div className="portfolio-v2-card__details">
        <p className="portfolio-v2-card__description">{content.description}</p>
        <div className="portfolio-v2-card__participation">
          <p className="portfolio-v2-card__participation-label">Mi participación</p>
          <p className="portfolio-v2-card__participation-copy">{content.participation}</p>
        </div>
        <AppLink to={`/portfolio/${project.slug}`} className="portfolio-v2-card__link">
          VER CASO ↗
        </AppLink>
      </div>
    </article>
  );
}

export function PortfolioProjectCard({ project, variant = "portfolio", portfolioContent }: PortfolioProjectCardProps) {
  if (variant === "portfolio-v2" && portfolioContent) {
    return <PortfolioIndexCard project={project} content={portfolioContent} />;
  }

  const selectedHome = variant === "home-selected";
  const compact = variant === "home";

  const card = (
    <article
      id={compact ? undefined : project.slug}
      className={compact ? "portfolio-home-card" : selectedHome ? "portfolio-home-card portfolio-home-card--selected" : undefined}
      style={{
        display: "grid",
        height: compact ? "100%" : undefined,
        boxSizing: "border-box",
        gridTemplateColumns: compact || selectedHome ? "1fr" : "minmax(220px, 0.72fr) minmax(0, 1fr)",
        gridTemplateRows: selectedHome ? "auto auto auto" : undefined,
        gap: compact ? "22px" : selectedHome ? "14px" : "34px",
        padding: compact ? "22px" : selectedHome ? "20px" : "28px",
        border: "1px solid rgba(230, 215, 198, 0.22)",
        borderTop: `3px solid ${project.featured ? "var(--magenta)" : "var(--citron-loto)"}`,
        borderRadius: "8px",
        background:
          "linear-gradient(180deg, rgba(250,248,244,0.1) 0%, rgba(23,59,68,0.58) 46%, rgba(9,20,24,0.86) 100%)",
        boxShadow: "inset 0 1px 0 rgba(250,248,244,0.1)",
      }}
    >
      {selectedHome ? null : <PortfolioProjectVisual project={project} mode={compact ? "home" : "index"} />}

      <div
        style={{
          display: "grid",
          gridTemplateRows: compact ? "minmax(0, 1fr) auto" : undefined,
          gap: compact ? "18px" : selectedHome ? "0" : "22px",
          alignContent: "start",
          minHeight: 0,
          minWidth: 0,
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "10px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: project.featured ? "var(--magenta)" : "var(--citron-loto)",
              margin: "0 0 10px",
              fontWeight: 700,
            }}
          >
              {selectedHome ? project.homeContext : `${project.number} — ${project.category}`}
          </p>
          <h3
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 600,
              fontSize: compact ? "30px" : selectedHome ? "34px" : "42px",
              color: "var(--arena-clara)",
              lineHeight: 1.02,
              margin: "0 0 12px",
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
            {compact || selectedHome ? project.homeSummary : project.summary}
          </p>

        </div>

        {!compact && !selectedHome && (
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
            ) : null}
          </div>
          </>
        )}

        {compact && <span className="portfolio-home-card-action">Ver en portfolio ↗</span>}
      </div>
      {selectedHome && <PortfolioProjectVisual project={project} emphasis mode="home" />}
      {selectedHome && (
        <BrandButton variant="secondary" className="portfolio-home-card-case-link" to={`/portfolio/${project.slug}`}>
          VER CASO ↗
        </BrandButton>
      )}
    </article>
  );

  if (selectedHome) {
    return <div className="portfolio-home-card-link">{card}</div>;
  }

  if (compact) {
    return (
      <AppLink
        to={`/portfolio#${project.slug}`}
        className="portfolio-home-card-link"
        aria-label={`Ver ${project.title} en portfolio`}
      >
        {card}
      </AppLink>
    );
  }

  return card;
}
