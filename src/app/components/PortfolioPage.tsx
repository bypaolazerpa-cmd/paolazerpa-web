import { useIsMobile } from "../hooks/useIsMobile";
import { portfolioProjects } from "../data/portfolioProjects";
import { AppLink } from "./AppLink";
import { BrandButton } from "./brand/BrandButton";
import { SectionLabel } from "./brand/SectionLabel";
import { FooterSection } from "./FooterSection";
import { NavBar } from "./NavBar";
import { PortfolioProjectCard } from "./PortfolioProjectCard";
import { PortfolioProjectVisual } from "./PortfolioProjectVisual";

const selectedProjectContent = {
  nodux: {
    eyebrow: "SaaS · Product Design",
    change: "De gestionar catálogo, pedidos y tienda en partes separadas a conectarlos dentro de un mismo producto.",
    description: "Producto digital para gestionar parte de la operación comercial y la tienda online de un negocio.",
    participation: "Product Design · arquitectura de información · recorridos · interacción · interfaz · implementación asistida con IA · iteración",
  },
  gestock: {
    eyebrow: "Producto digital · Operaciones",
    change: "De controlar stock, vencimientos e información de productos de forma manual y dispersa a gestionarlos desde un solo sistema.",
    description: "Sistema de gestión nacido de necesidades reales de operación en tienda y que más adelante dio origen a parte de lo que hoy es NODUX.",
    participation: "Definición del problema · estructura de información · flujos operativos · interfaz · pruebas en operación real",
  },
  "operacion-de-tienda": {
    eyebrow: "Operaciones · Sistemas de trabajo",
    change: "De depender de memoria, mensajes y seguimiento informal a tener tareas, información y responsabilidades visibles.",
    description: "Procesos y herramientas creados para ordenar necesidades concretas de la operación cotidiana de una tienda.",
    participation: "Organización de información · definición de procesos · responsabilidades · herramientas de seguimiento · mejora de la operación",
  },
  "cosmic-studio": {
    eyebrow: "Marca · Experiencia digital",
    change: "De tener piezas de comunicación dispersas a contar con un sistema de marca y una experiencia web más claros.",
    description: "Un sistema que conecta posicionamiento, servicios, identidad visual y experiencia web.",
    participation: "Estrategia · identidad · arquitectura web",
  },
} as const;

const projectBySlug = Object.fromEntries(portfolioProjects.map((project) => [project.slug, project]));
const selectedProjects = ["nodux", "gestock", "operacion-de-tienda"].map((slug, index) => ({
  ...projectBySlug[slug],
  number: `0${index + 1}`,
}));
const cosmicStudio = { ...projectBySlug["cosmic-studio"], number: "01" };

export function PortfolioPage() {
  const isMobile = useIsMobile();
  const isTablet = useIsMobile(1100) && !isMobile;

  return (
    <div className="pz-page portfolio-page">
      <style>{`
        .portfolio-v2-card{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);grid-template-areas:"preview identity" "preview details";column-gap:clamp(28px,5vw,72px);row-gap:24px;align-items:start;padding:clamp(28px,4vw,52px) 0;border-top:1px solid rgba(230,215,198,.2)}
        .portfolio-v2-card:last-child{border-bottom:1px solid rgba(230,215,198,.2)}
        .portfolio-v2-card__preview{grid-area:preview;min-width:0;align-self:center}
        .portfolio-v2-card__identity{grid-area:identity;min-width:0}
        .portfolio-v2-card__details{grid-area:details;min-width:0}
        .portfolio-v2-card__eyebrow,.portfolio-v2-card__participation-label{font:700 10px/1.3 "Space Mono",monospace;letter-spacing:.12em;text-transform:uppercase;color:var(--magenta);margin:0 0 14px}
        .portfolio-v2-card__title{font:600 clamp(34px,4vw,58px)/.98 "Space Grotesk",sans-serif;color:var(--arena-clara);margin:0 0 18px;letter-spacing:-.035em}
        .portfolio-v2-card__change{font:600 clamp(19px,2vw,27px)/1.2 "Space Grotesk",sans-serif;color:var(--arena-clara);margin:0 0 14px;max-width:620px}
        .portfolio-v2-card__description{font:16px/1.55 "Space Grotesk",sans-serif;color:rgba(230,215,198,.78);margin:0;max-width:560px}
        .portfolio-v2-card__participation{margin-top:26px;padding-top:16px;border-top:1px solid rgba(230,215,198,.2)}
        .portfolio-v2-card__participation-label{color:var(--citron-loto);margin-bottom:8px}
        .portfolio-v2-card__participation-copy{font:11px/1.65 "Space Mono",monospace;color:rgba(230,215,198,.72);margin:0;max-width:600px}
        .portfolio-v2-card__link,.portfolio-secondary-card__link{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;width:max-content;max-width:100%;min-height:44px;padding:13px 18px;border:1px solid var(--magenta);border-radius:999px;background:var(--magenta);color:var(--mar-profundo);font:700 11px/1 "Space Mono",monospace;letter-spacing:.08em;text-transform:uppercase;text-decoration:none}
        .portfolio-v2-card__link:hover,.portfolio-secondary-card__link:hover,.portfolio-v2-card__link:focus-visible,.portfolio-secondary-card__link:focus-visible{background:var(--arena-clara);border-color:var(--arena-clara);color:var(--mar-profundo)}
        .portfolio-v2-card__link:focus-visible,.portfolio-secondary-card__link:focus-visible{outline:3px solid var(--citron-loto);outline-offset:3px}
        .portfolio-secondary-card{display:grid;grid-template-columns:minmax(220px,.6fr) minmax(0,1fr);gap:32px;align-items:center;padding:26px 0;border-top:1px solid rgba(23,59,68,.2)}.portfolio-secondary-card>div{min-width:0}
        .portfolio-secondary-card__eyebrow{font:700 10px/1.3 "Space Mono",monospace;letter-spacing:.12em;text-transform:uppercase;color:var(--terracota-viva);margin:0 0 10px}
        .portfolio-secondary-card h3{font:600 30px/1 "Space Grotesk",sans-serif;color:var(--mar-profundo);margin:0 0 12px}
        .portfolio-secondary-card__change{font:600 19px/1.25 "Space Grotesk",sans-serif;color:var(--mar-profundo);margin:0 0 8px}
        .portfolio-secondary-card__description{font:15px/1.5 "Space Grotesk",sans-serif;color:rgba(23,59,68,.78);margin:0}
        .portfolio-secondary-card__link{margin-top:18px}
        @media(max-width:1099px){.portfolio-v2-card{column-gap:34px}.portfolio-v2-card__change{font-size:23px}}
        @media(max-width:767px){.portfolio-v2-card{grid-template-columns:1fr;grid-template-areas:"identity" "preview" "details";gap:24px;padding:28px 0}.portfolio-v2-card__title{font-size:38px}.portfolio-v2-card__change{font-size:21px}.portfolio-v2-card__description{font-size:15px}.portfolio-v2-card__participation{margin-top:22px}.portfolio-v2-card__link{margin-top:20px}.portfolio-secondary-card{grid-template-columns:1fr;gap:22px;padding:24px 0}.portfolio-secondary-card h3{font-size:28px}}
        @media(prefers-reduced-motion:reduce){.portfolio-page *{scroll-behavior:auto}}
      `}</style>

      <NavBar />
      <main>
        <section className="pz-dark" style={{ padding: isMobile ? "104px 24px 72px" : isTablet ? "128px 48px 88px" : "138px 80px 96px", position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" style={{ position: "absolute", right: isMobile ? "-140px" : "5%", top: isMobile ? "70px" : "88px", width: isMobile ? 270 : 390, height: isMobile ? 270 : 390, border: "1px solid rgba(230,215,198,.14)", borderRadius: "50%" }} />
          <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <SectionLabel number="01" tone="light">Portfolio</SectionLabel>
            <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, fontSize: isMobile ? 46 : isTablet ? 64 : 76, lineHeight: .98, letterSpacing: "-.045em", color: "var(--arena-clara)", maxWidth: 820, margin: "24px 0 20px" }}>Productos y sistemas que he ayudado a construir.</h1>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: isMobile ? 17 : 21, lineHeight: 1.45, color: "rgba(230,215,198,.82)", maxWidth: 650, margin: 0 }}>Una selección de proyectos donde trabajé sobre problemas reales de operación, información y experiencia de usuario.</p>
            <div style={{ marginTop: isMobile ? 28 : 34 }}><BrandButton variant="secondary" to="#selected-work">Ver proyectos ↓</BrandButton></div>
          </div>
        </section>

        <section id="selected-work" className="pz-dark" style={{ padding: isMobile ? "66px 24px 76px" : isTablet ? "84px 48px 96px" : "100px 80px 110px", scrollMarginTop: 80 }}>
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <SectionLabel number="02" tone="light">Trabajo seleccionado</SectionLabel>
            <div style={{ maxWidth: 820, margin: "22px 0 38px" }}>
              <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, fontSize: isMobile ? 36 : isTablet ? 48 : 58, lineHeight: 1.02, letterSpacing: "-.035em", color: "var(--arena-clara)", margin: "0 0 16px" }}>Productos y sistemas que nacieron de problemas reales.</h2>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: isMobile ? 16 : 18, lineHeight: 1.5, color: "rgba(230,215,198,.76)", maxWidth: 760, margin: 0 }}>Proyectos donde trabajé sobre cómo se organiza la información, cómo funciona una operación y cómo las personas avanzan dentro de un producto.</p>
            </div>
            <div>{selectedProjects.map((project) => <PortfolioProjectCard key={project.slug} project={project} variant="portfolio-v2" portfolioContent={selectedProjectContent[project.slug as keyof typeof selectedProjectContent]} />)}</div>
          </div>
        </section>

        <section style={{ backgroundColor: "var(--arena-clara)", padding: isMobile ? "56px 24px 64px" : isTablet ? "72px 48px 78px" : "82px 80px 90px" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <SectionLabel number="03">Otros proyectos</SectionLabel>
            <div className="portfolio-secondary-card">
              <div style={{ opacity: .82 }}><PortfolioProjectVisual project={cosmicStudio} /></div>
              <div><p className="portfolio-secondary-card__eyebrow">Cosmic Studio</p><h3>Cosmic Studio</h3><p className="portfolio-secondary-card__change">Un sistema de marca para comunicar una propuesta digital con claridad.</p><p className="portfolio-secondary-card__description">Estrategia, identidad y arquitectura web reunidas en una experiencia más consistente.</p><AppLink className="portfolio-secondary-card__link" to="/portfolio/cosmic-studio">VER CASO ↗</AppLink></div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: "var(--magenta)", padding: isMobile ? "58px 24px 68px" : isTablet ? "72px 48px 80px" : "84px 80px 92px" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <SectionLabel number="04">Hablemos</SectionLabel>
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "end", justifyContent: "space-between", gap: 28, marginTop: 22 }}>
              <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, fontSize: isMobile ? 35 : isTablet ? 48 : 58, lineHeight: 1.02, letterSpacing: "-.035em", color: "var(--mar-profundo)", maxWidth: 780, margin: 0 }}>¿Estás construyendo un producto o buscando una Product Designer para tu equipo?</h2>
              <BrandButton variant="secondary" to="/contacto#email">Hablemos ↗</BrandButton>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}
