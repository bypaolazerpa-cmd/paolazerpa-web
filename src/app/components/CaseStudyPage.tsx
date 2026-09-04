import { useEffect } from "react";
import { useIsMobile } from "../hooks/useIsMobile";
import { getPageMetadata } from "../data/pageMetadata";
import { portfolioCaseStudyOrder, portfolioData, type CaseStudyDecision, type CaseStudySection, type CaseStudyVisual } from "../data/portfolioData";
import { AppLink } from "./AppLink";
import { FooterSection } from "./FooterSection";
import { NavBar } from "./NavBar";
import { PortfolioVisualPlaceholder, type PortfolioVisualVariant } from "./PortfolioVisualPlaceholder";

function ConceptDiagram({ title }: { title: string }) {
  const items = title.startsWith("Productos")
    ? ["PRODUCTOS", "STOCK", "VENCIMIENTOS", "PROVEEDORES", "ACCIONES", "GESTIÓN MÁS CENTRALIZADA"]
    : ["NEGOCIO", "CATÁLOGO", "TIENDA ONLINE", "CLIENTE", "PEDIDO", "OPERACIÓN"];
  return (
    <div className="case-study-diagram" aria-label={`Esquema conceptual: ${title}`}>
      {items.map((item, index) => (
        <div key={item} className={index === items.length - 1 ? "case-study-diagram__last" : ""}>
          <span>{item}</span>
          {index < items.length - 1 && <i aria-hidden="true">↓</i>}
        </div>
      ))}
      <small>Esquema conceptual · no representa una arquitectura técnica exhaustiva</small>
    </div>
  );
}

function getVisualVariant(visual: CaseStudyVisual): PortfolioVisualVariant {
  const content = `${visual.type} ${visual.title}`.toLowerCase();
  if (content.includes("configuración de tienda")) return "store-config";
  if (content.includes("panel / storefront")) return "management-storefront";
  if (content.includes("activación de tienda")) return "activation";
  if (content.includes("pedido / tracking")) return "order-tracking";
  if (content.includes("mapa")) return "map";
  if (content.includes("catálogo")) return "catalog";
  if (content.includes("checkout") || content.includes("compra") || content.includes("tracking")) return "checkout";
  if (content.includes("dashboard") || content.includes("pedido") || content.includes("panel")) return "dashboard";
  if (content.includes("activación") || content.includes("progreso")) return "journey";
  if (content.includes("configuración") || content.includes("identidad")) return "wireframe";
  if (content.includes("estructura") || content.includes("relación") || content.includes("arquitectura") || content.includes("posicionamiento") || content.includes("servicios")) return "structure";
  if (content.includes("operación") || content.includes("contexto") || content.includes("tarea") || content.includes("seguimiento") || content.includes("vencimiento") || content.includes("proveedor") || content.includes("registro") || content.includes("control")) return "operations";
  if (content.includes("flujo") || content.includes("recorrido") || content.includes("prueba")) return "flow";
  return "system";
}

function getVisualTheme(variant: PortfolioVisualVariant) {
  if (variant === "nodux-ecosystem" || variant === "management-storefront") return "teal" as const;
  if (variant === "store-config" || variant === "activation") return "magenta" as const;
  if (variant === "order-tracking") return "lime" as const;
  if (variant === "map" || variant === "catalog") return "lime" as const;
  if (variant === "journey" || variant === "checkout") return "magenta" as const;
  if (variant === "operations" || variant === "dashboard") return "cream" as const;
  return "teal" as const;
}

function SectionVisual({ visual, showNoduxLabel = false }: { visual: CaseStudyVisual; showNoduxLabel?: boolean }) {
  if (visual.type === "Esquema conceptual" || visual.type === "Esquema") return <ConceptDiagram title={visual.title} />;
  const variant = getVisualVariant(visual);
  return <PortfolioVisualPlaceholder eyebrow={visual.type} title={visual.title} variant={variant} theme={getVisualTheme(variant)} visualLabel={showNoduxLabel ? visual.type : undefined} />;
}

function DecisionBlock({ decision, isNodux }: { decision: CaseStudyDecision; isNodux: boolean }) {
  return (
    <article className="case-study-decision">
      <span className="case-study-decision__number">DECISIÓN {decision.number}</span>
      <h3>{decision.title}</h3>
      {decision.situation && <p><b>Situación</b>{decision.situation}</p>}
      {decision.decision && <p><b>Decisión</b>{decision.decision}</p>}
      {decision.criterion && <p><b>Criterio</b>{decision.criterion}</p>}
      {decision.status && <p className="case-study-decision__status"><b>Estado</b>{decision.status}</p>}
      <SectionVisual visual={decision.visual} showNoduxLabel={isNodux} />
    </article>
  );
}

function CaseStudySection({ section, isNodux }: { section: CaseStudySection; isNodux: boolean }) {
  return (
    <section className="case-study-section" aria-labelledby={section.headline ? `case-section-${section.number}` : `case-section-label-${section.number}`}>
      <div className="case-study-section__intro">
        <span className="case-study-section__number">{section.number}</span>
        <p id={`case-section-label-${section.number}`} className="case-study-section__label">{section.label}</p>
      </div>
      <div className="case-study-section__body">
        {section.headline && <h2 id={`case-section-${section.number}`}>{section.headline}</h2>}
        {section.copy?.map((paragraph) => <p key={paragraph} className="case-study-copy">{paragraph}</p>)}
        {section.highlight && <blockquote>{section.highlight}</blockquote>}
        {section.visual && <SectionVisual visual={section.visual} showNoduxLabel={isNodux} />}
        {section.blocks && (
          <div className="case-study-blocks">
            {section.blocks.map((block) => (
              <article key={block.title} className="case-study-block">
                <h3>{block.title}</h3>
                {block.copy && <p>{block.copy}</p>}
                {block.visual && <SectionVisual visual={block.visual} showNoduxLabel={isNodux} />}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function CaseStudyNavigation({ currentSlug, nextSlug }: { currentSlug: string; nextSlug: string }) {
  const next = portfolioData[nextSlug];
  return (
    <nav className="case-study-navigation" aria-label="Navegación entre casos">
      <AppLink to="/portfolio" className="case-study-navigation__back">← Volver al portfolio</AppLink>
      <AppLink to={`/portfolio/${nextSlug}`} className="case-study-navigation__next">
        <span>Siguiente proyecto</span><strong>{next.title} →</strong>
      </AppLink>
      <span className="sr-only">Caso actual: {currentSlug}</span>
    </nav>
  );
}

export function CaseStudyPage({ slug }: { slug: string }) {
  const isMobile = useIsMobile();
  const study = portfolioData[slug] ?? portfolioData.nodux;
  const metadata = getPageMetadata(`/portfolio/${study.slug}`);
  const nextSlug = study.nextProject;

  useEffect(() => {
    document.title = metadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", metadata.description);
  }, [metadata.description, metadata.title]);

  return (
    <div className="pz-page case-study-page">
      <style>{`
        .case-study-page{background:var(--arena-clara);color:var(--mar-profundo)}
        .case-study-hero{background:var(--mar-profundo);color:var(--arena-clara);padding:${isMobile ? "104px 24px 64px" : "148px 80px 100px"};position:relative;overflow:hidden}
        .case-study-hero:after{content:"";position:absolute;width:${isMobile ? "230px" : "420px"};height:${isMobile ? "230px" : "420px"};border:1px solid rgba(230,215,198,.18);border-radius:50%;right:${isMobile ? "-100px" : "8%"};top:${isMobile ? "100px" : "90px"}}
        .case-study-container{max-width:1160px;margin:0 auto;position:relative;z-index:1}
        .case-study-eyebrow,.case-study-section__label,.case-study-section__number,.case-study-decision__number,.case-study-navigation__next span{font:700 10px/1.4 "Space Mono",monospace;letter-spacing:.12em;text-transform:uppercase}
        .case-study-eyebrow{color:var(--magenta);margin:0 0 22px}
        .case-study-hero h1{font:600 clamp(56px,10vw,142px)/.88 "Space Grotesk",sans-serif;letter-spacing:-.07em;margin:0 0 30px;color:var(--arena-clara)}
        .case-study-transformation{font:600 clamp(24px,3.3vw,42px)/1.08 "Space Grotesk",sans-serif;letter-spacing:-.025em;max-width:850px;margin:0 0 22px}
        .case-study-summary{font:18px/1.55 "Space Grotesk",sans-serif;color:rgba(230,215,198,.78);max-width:650px;margin:0}
        .case-study-meta{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px;margin-top:58px;padding-top:20px;border-top:1px solid rgba(230,215,198,.22)}
        .case-study-meta__item{min-width:0}.case-study-meta__item dt{font:700 10px/1.3 "Space Mono",monospace;color:var(--citron-loto);text-transform:uppercase;letter-spacing:.1em;margin-bottom:9px}.case-study-meta__item dd{font:14px/1.45 "Space Grotesk",sans-serif;color:var(--arena-clara);margin:0}
        .case-study-main{max-width:1160px;margin:0 auto;padding:${isMobile ? "56px 24px 72px" : "100px 80px 120px"}}
        .case-study-section{display:grid;grid-template-columns:150px minmax(0,820px);gap:clamp(26px,6vw,90px);padding:54px 0;border-top:1px solid rgba(23,59,68,.2)}.case-study-section__body,.case-study-blocks,.case-study-block,.case-study-decision{min-width:0}
        .case-study-section__intro{display:flex;align-items:flex-start;gap:10px}.case-study-section__number{color:var(--terracota-viva);font-size:12px}.case-study-section__label{color:var(--terracota-viva);margin:0;writing-mode:vertical-rl;transform:rotate(180deg)}
        .case-study-section__body h2{font:600 clamp(31px,4vw,56px)/1.02 "Space Grotesk",sans-serif;letter-spacing:-.045em;margin:0 0 25px;max-width:830px}.case-study-copy{font:17px/1.62 "Space Grotesk",sans-serif;max-width:720px;margin:0 0 18px;white-space:pre-line}.case-study-section blockquote{border-left:3px solid var(--magenta);font:italic 22px/1.35 "Fraunces",serif;margin:34px 0;padding:8px 0 8px 22px;max-width:680px}.case-study-blocks{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin-top:32px}.case-study-block{border-top:2px solid var(--citron-loto);padding:18px 0 0}.case-study-block h3,.case-study-decision h3{font:600 22px/1.12 "Space Grotesk",sans-serif;letter-spacing:-.025em;margin:0 0 11px}.case-study-block p{font:15px/1.5 "Space Grotesk",sans-serif;margin:0;color:rgba(23,59,68,.78)}
        .case-study-diagram{margin-top:30px;padding:25px 20px;border:1px solid rgba(23,59,68,.24);border-radius:8px;background:rgba(183,195,52,.12);display:grid;justify-items:center;gap:8px}.case-study-diagram div{display:grid;justify-items:center;gap:6px}.case-study-diagram span{font:700 11px/1.2 "Space Mono",monospace;letter-spacing:.1em}.case-study-diagram i{font:20px/1;color:var(--terracota-viva);font-style:normal}.case-study-diagram__last span{border:1px solid var(--mar-profundo);padding:12px 16px;border-radius:999px}.case-study-diagram small{font:12px/1.4 "Space Grotesk",sans-serif;color:rgba(23,59,68,.65);margin-top:14px;text-align:center}
        .case-study-decisions{max-width:1160px;margin:0 auto;padding:0 ${isMobile ? "24px" : "80px"} ${isMobile ? "60px" : "80px"}}.case-study-decisions h2{font:600 clamp(31px,4vw,56px)/1.02 "Space Grotesk",sans-serif;letter-spacing:-.045em;max-width:820px;margin:0 0 38px}.case-study-decision{display:grid;grid-template-columns:minmax(180px,.45fr) minmax(0,1fr);gap:14px 34px;padding:28px 0;border-top:1px solid rgba(23,59,68,.2)}.case-study-decision__number{color:var(--terracota-viva);grid-column:1}.case-study-decision h3{grid-column:1;grid-row:2 / span 5;font-size:28px}.case-study-decision p{font:15px/1.52 "Space Grotesk",sans-serif;margin:0;max-width:670px}.case-study-decision p b{display:block;font:700 10px/1.3 "Space Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:var(--terracota-viva);margin-bottom:5px}.case-study-decision__status{color:var(--terracota-viva)}
        .case-study-status{max-width:1160px;margin:0 auto;padding:0 ${isMobile ? "24px" : "80px"} 70px}.case-study-status h2{font:600 clamp(31px,4vw,56px)/1.02 "Space Grotesk",sans-serif;letter-spacing:-.045em;max-width:820px;margin:0 0 30px}.case-study-status__grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}.case-study-status__grid article{border-top:2px solid var(--magenta);padding-top:15px}.case-study-status__grid h3{font:700 11px/1.3 "Space Mono",monospace;letter-spacing:.1em;text-transform:uppercase;margin:0 0 12px}.case-study-status__grid ul{list-style:none;padding:0;margin:0}.case-study-status__grid li,.case-study-status__grid p{font:15px/1.5 "Space Grotesk",sans-serif;margin:0 0 7px}.case-study-learnings{background:var(--magenta);padding:70px ${isMobile ? "24px" : "80px"}}.case-study-learnings__inner{max-width:1160px;margin:0 auto}.case-study-learnings h2{font:600 clamp(31px,4vw,56px)/1.02 "Space Grotesk",sans-serif;letter-spacing:-.045em;margin:0 0 25px}.case-study-learnings ol{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:28px;list-style:none;padding:0;margin:0}.case-study-learnings li{border-top:1px solid rgba(23,59,68,.35);padding-top:14px;font:16px/1.48 "Space Grotesk",sans-serif}.case-study-learnings li::before{content:counter(list-item, decimal-leading-zero);display:block;font:700 11px/1 "Space Mono",monospace;margin-bottom:14px}
        .case-study-navigation{max-width:1160px;margin:0 auto;padding:${isMobile ? "38px 24px 58px" : "55px 80px 74px"};display:flex;align-items:flex-end;justify-content:space-between;gap:25px}.case-study-navigation a{color:var(--mar-profundo);text-decoration:none}.case-study-navigation__back{font:700 11px/1.3 "Space Mono",monospace;letter-spacing:.08em;text-transform:uppercase;border-bottom:1px solid rgba(23,59,68,.5);padding-bottom:8px}.case-study-navigation__next{text-align:right;display:grid;gap:9px}.case-study-navigation__next span{color:var(--terracota-viva)}.case-study-navigation__next strong{font:600 26px/1 "Space Grotesk",sans-serif}.case-study-navigation a:hover,.case-study-navigation a:focus-visible{color:var(--terracota-viva)}
        .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
        @media(max-width:767px){.case-study-meta{grid-template-columns:1fr 1fr;gap:22px 16px;margin-top:42px}.case-study-section{display:block;padding:42px 0}.case-study-section__intro{margin-bottom:26px}.case-study-section__label{writing-mode:initial;transform:none}.case-study-section__body h2{font-size:34px}.case-study-copy{font-size:16px}.case-study-blocks,.case-study-status__grid,.case-study-learnings ol{grid-template-columns:1fr;gap:26px}.case-study-decision{display:block;padding:24px 0}.case-study-decision__number{display:block;margin-bottom:14px}.case-study-decision h3{font-size:26px;margin-bottom:20px}.case-study-decision p{margin-bottom:17px}.case-study-navigation{align-items:flex-start;flex-direction:column}.case-study-navigation__next{text-align:left}}
        @media(prefers-reduced-motion:reduce){.case-study-page *{scroll-behavior:auto;transition:none!important}}
      `}</style>
      <NavBar />
      <main>
        <header className="case-study-hero">
          <div className="case-study-container">
            <p className="case-study-eyebrow">{study.eyebrow}</p>
            <h1>{study.title}</h1>
            <p className="case-study-transformation">{study.transformation}</p>
            <p className="case-study-summary">{study.summary}</p>
            <dl className="case-study-meta">{study.metadata.map((item) => <div className="case-study-meta__item" key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>
          </div>
        </header>
        <div className="case-study-main">{study.sections.map((section) => <CaseStudySection key={section.number} section={section} isNodux={study.slug === "nodux"} />)}</div>
        {study.decisions && <section className="case-study-decisions" aria-labelledby="case-decisions-title"><h2 id="case-decisions-title">Diseñar NODUX ha sido decidir cómo deben conectarse sus partes.</h2>{study.decisions.map((decision) => <DecisionBlock key={decision.number} decision={decision} isNodux={study.slug === "nodux"} />)}</section>}
        {study.statusBlocks && <section className="case-study-status" aria-labelledby="case-status-title"><h2 id="case-status-title">Dónde está hoy</h2><div className="case-study-status__grid">{study.statusBlocks.map((block) => <article key={block.title}><h3>{block.title}</h3>{block.items && <ul>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>}{block.copy && <p>{block.copy}</p>}</article>)}</div></section>}
        {study.learnings && <section className="case-study-learnings" aria-labelledby="case-learnings-title"><div className="case-study-learnings__inner"><h2 id="case-learnings-title">Lo que este producto me está enseñando.</h2><ol>{study.learnings.map((learning) => <li key={learning}>{learning}</li>)}</ol></div></section>}
        <CaseStudyNavigation currentSlug={slug} nextSlug={nextSlug} />
      </main>
      <FooterSection />
    </div>
  );
}

export function CaseStudyRoute({ slug }: { slug: string }) {
  return <CaseStudyPage slug={portfolioCaseStudyOrder.includes(slug) ? slug : "nodux"} />;
}
