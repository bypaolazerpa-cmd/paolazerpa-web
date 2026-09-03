import { useIsMobile } from "../hooks/useIsMobile";
import { portfolioCaseStudyOrder, portfolioData } from "../data/portfolioData";
import { AppLink } from "./AppLink";
import { FooterSection } from "./FooterSection";
import { NavBar } from "./NavBar";

export function PortfolioPage() {
  const isMobile = useIsMobile();
  return (
    <div className="pz-page portfolio-page">
      <style>{`.portfolio-index{background:var(--mar-profundo);color:var(--arena-clara);padding:${isMobile ? "104px 24px 72px" : "148px 80px 110px"}}.portfolio-index__inner,.portfolio-index__projects{max-width:1160px;margin:0 auto}.portfolio-index__eyebrow{font:700 11px/1.3 "Space Mono",monospace;letter-spacing:.12em;text-transform:uppercase;color:var(--magenta);margin:0 0 22px}.portfolio-index h1{font:600 clamp(44px,7vw,84px)/.95 "Space Grotesk",sans-serif;letter-spacing:-.06em;max-width:850px;margin:0 0 22px}.portfolio-index__intro{font:18px/1.55 "Space Grotesk",sans-serif;color:rgba(230,215,198,.78);max-width:650px;margin:0}.portfolio-index__projects{padding:${isMobile ? "58px 24px 78px" : "92px 80px 110px"}}.portfolio-index__projects h2{font:600 clamp(32px,4vw,56px)/1 "Space Grotesk",sans-serif;letter-spacing:-.045em;margin:0 0 38px}.portfolio-index__project{display:grid;grid-template-columns:110px minmax(0,1fr) auto;gap:22px;align-items:start;border-top:1px solid rgba(23,59,68,.24);padding:28px 0}.portfolio-index__number{font:700 12px/1 "Space Mono",monospace;color:var(--terracota-viva)}.portfolio-index__project h3{font:600 clamp(26px,3vw,42px)/1 "Space Grotesk",sans-serif;letter-spacing:-.035em;margin:0 0 12px}.portfolio-index__project p{font:16px/1.5 "Space Grotesk",sans-serif;max-width:650px;margin:0;color:rgba(23,59,68,.78)}.portfolio-index__link{color:var(--mar-profundo);font:700 11px/1 "Space Mono",monospace;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;border-bottom:1px solid rgba(23,59,68,.5);padding-bottom:8px;white-space:nowrap}.portfolio-index__link:hover,.portfolio-index__link:focus-visible{color:var(--terracota-viva)}@media(max-width:767px){.portfolio-index__project{grid-template-columns:42px minmax(0,1fr);gap:12px 16px}.portfolio-index__project .portfolio-index__link{grid-column:2}.portfolio-index__project p{font-size:15px}}`}</style>
      <NavBar />
      <main>
        <header className="portfolio-index"><div className="portfolio-index__inner"><p className="portfolio-index__eyebrow">01 — Portfolio</p><h1>Productos y sistemas que he ayudado a construir.</h1><p className="portfolio-index__intro">Una selección de proyectos donde trabajé sobre problemas reales de operación, información y experiencia de usuario.</p></div></header>
        <section className="portfolio-index__projects" aria-labelledby="portfolio-projects-title"><h2 id="portfolio-projects-title">Trabajo seleccionado</h2>{portfolioCaseStudyOrder.map((slug, index) => { const project = portfolioData[slug]; return <article className="portfolio-index__project" key={slug}><span className="portfolio-index__number">{String(index + 1).padStart(2, "0")}</span><div><h3>{project.title}</h3><p>{project.transformation}</p></div><AppLink className="portfolio-index__link" to={`/portfolio/${slug}`}>Ver caso ↗</AppLink></article>; })}</section>
      </main>
      <FooterSection />
    </div>
  );
}
