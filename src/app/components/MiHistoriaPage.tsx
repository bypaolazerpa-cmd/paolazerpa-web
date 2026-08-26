import heroPresent from "../../assets/mi-historia/01_mi_historia/optimized/visual_00.jpg";
import heroMigration from "../../assets/mi-historia/01_mi_historia/optimized/visual_01.jpg";
import heroPaths from "../../assets/mi-historia/01_mi_historia/optimized/visual_02.jpg";
import journeyMigration from "../../assets/mi-historia/02_recorrido/visual_01.png";
import journeyPaths from "../../assets/mi-historia/02_recorrido/visual_02.png";
import journeyStructure from "../../assets/mi-historia/02_recorrido/visual_03.png";
import journeyProduct from "../../assets/mi-historia/02_recorrido/visual_04.png";
import finalPortrait from "../../assets/mi-historia/foto_final.png";
import { FooterSection } from "./FooterSection";
import { NavBar } from "./NavBar";
import { useIsMobile } from "../hooks/useIsMobile";
import { BrandButton } from "./brand/BrandButton";
import { SectionLabel } from "./brand/SectionLabel";

type JourneyMoment = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  visualSrc: string;
  visualAlt: string;
  visualFit: "cover" | "contain";
  visualPosition?: string;
};

const journeyMoments: JourneyMoment[] = [
  {
    eyebrow: "19 AÑOS · BUENOS AIRES",
    title: "Aprender a sostener mi propia vida. La que elegí yo.",
    paragraphs: [
      "Emigrar a los 19 me puso muy rápido frente a decisiones, responsabilidades, trabajo, dinero, tiempo y una vida que tenía que aprender a sostener lejos de lo conocido.",
    ],
    visualSrc: journeyMigration,
    visualAlt: "Migración y comienzo de una vida propia",
    visualFit: "contain",
  },
  {
    eyebrow: "DISTINTOS CAMINOS",
    title: "Durante años fui probando dónde encajaban mis intereses.",
    paragraphs: [
      "Estudié, trabajé y exploré contextos distintos. Salud, marketing y comunicación, operaciones, negocios digitales y proyectos propios fueron mostrando habilidades e intereses que todavía no sabía reunir bajo una misma profesión.",
    ],
    visualSrc: journeyPaths,
    visualAlt: "Exploración de distintos intereses y caminos",
    visualFit: "contain",
  },
  {
    eyebrow: "ANTES DE PONERLE NOMBRE",
    title: "Había cosas que hacía mucho antes de conocer el término: Product Design.",
    paragraphs: [
      "Organizar información, hacer visible lo importante, entender cómo funcionaba un proceso, representar ideas y buscar una forma más útil de hacer y entender las cosas aparecían una y otra vez en lo que hacía.",
    ],
    visualSrc: journeyStructure,
    visualAlt: "Organización de información, relaciones y estructura",
    visualFit: "contain",
  },
  {
    eyebrow: "HOY",
    title: "Encontré una profesión donde muchas de esas partes pueden convivir.",
    paragraphs: [
      "Product Design me dio un lugar donde reunir cosas que antes aparecían por separado: entender un problema, mirar a las personas que lo viven, ordenar información, definir recorridos, diseñar cómo se usa algo y llevar todo eso a un producto real.",
      "Y también me dio algo que todavía sigo construyendo: una forma más consciente de mirar, decidir y mejorar lo que diseño.",
    ],
    visualSrc: journeyProduct,
    visualAlt: "Integración de distintas capacidades en Product Design",
    visualFit: "contain",
  },
];

const learnings = [
  {
    title: "Ver relaciones, no piezas sueltas.",
    text: "Tiendo a mirar qué elementos intervienen, cómo se relacionan y qué puede cambiar si movemos una parte del conjunto.",
  },
  {
    title: "Construir mi propia dirección.",
    text: "Aprendí a tomar decisiones sobre mi camino, buscar lo que necesito aprender y ajustar la dirección cuando aparece nueva información.",
  },
  {
    title: "Darle forma a lo que todavía está disperso.",
    text: "Me gusta convertir lo que pienso, observo o necesito resolver en algo concreto: una idea, una comunicación, una estructura, un proyecto o un producto.",
  },
];

const territories = [
  "Plataformas, herramientas, SaaS, webs y experiencias donde personas, información e interacción necesitan funcionar juntas.",
  "Responsabilidades, procesos, herramientas e información que necesitan una estructura más clara para sostenerse en el día a día.",
  "Proyectos, ideas y cosas propias que pruebo, registro, ajusto y sigo entendiendo mientras las desarrollo.",
];

function StoryImage({ src, alt, className = "", fit = "cover", position = "center" }: { src: string; alt: string; className?: string; fit?: "cover" | "contain"; position?: string }) {
  const isHeroImage = className.includes("story-hero");
  const isPrimaryHeroImage = className.includes("story-hero-image--present");

  return <div className={`story-image ${className}`}><img src={src} alt={alt} loading={isHeroImage ? "eager" : "lazy"} fetchPriority={isPrimaryHeroImage ? "high" : "auto"} decoding="async" style={{ objectFit: fit, objectPosition: position }} /></div>;
}

function HeroImages() {
  return <div className="story-hero-visual">
    <StoryImage src={heroPresent} alt="Paola trabajando en un entorno creativo" className="story-hero-image story-hero-image--present" position="center 44%" />
    <StoryImage src={heroMigration} alt="Paola en una escena de viaje hacia Buenos Aires" className="story-hero-image story-hero-image--migration" position="center 38%" />
    <StoryImage src={heroPaths} alt="Paola explorando distintos intereses y caminos profesionales" className="story-hero-image story-hero-image--paths" position="center 38%" />
  </div>;
}

export function MiHistoriaPage() {
  const isMobile = useIsMobile();
  const horizontalPadding = isMobile ? "22px" : "clamp(40px, 7vw, 112px)";

  return <div className="pz-page story-page" style={{ overflowX: "hidden" }}>
    <style>{`
      .story-page{--story-line:rgba(23,59,68,.24);--story-paper:rgba(234,223,206,.68)}
      .story-page h1,.story-page h2,.story-page h3,.story-page p{margin-top:0}
      .story-reveal{animation:story-reveal 600ms both;animation-timeline:view();animation-range:entry 0% cover 20%}
      .story-image{position:relative;overflow:hidden;border:1px solid rgba(23,59,68,.24);background:var(--story-paper)}
      .story-hero-image{background:var(--mar-profundo)}
      .story-image img{display:block;width:100%;height:100%}
      .story-hero-image::before,.story-hero-image::after{content:"";position:absolute;z-index:1;pointer-events:none;border:1px solid rgba(180,91,69,.3);border-radius:50%}
      .story-hero-image::before{width:56%;aspect-ratio:1}.story-hero-image::after{width:20%;aspect-ratio:1;background:rgba(240,127,168,.24);border-color:rgba(240,127,168,.5)}
      .story-hero-visual{position:relative;width:min(100%,470px);height:300px;justify-self:end}
      .story-hero-image{position:absolute;border-radius:50%;aspect-ratio:1}
      .story-hero-image--present{width:206px;right:36px;top:6px;z-index:1;border-color:rgba(230,215,198,.85)}
      .story-hero-image--migration{width:142px;left:28px;bottom:18px;z-index:2}
      .story-hero-image--paths{width:116px;right:0;bottom:4px;z-index:3}
      .story-visual{min-height:164px;aspect-ratio:16 / 9;border-radius:var(--radius-sm)}
      .story-visual--final{width:min(100%,330px);aspect-ratio:4 / 3;margin-left:auto;border-radius:var(--radius-md);background:#d5ba9a}
      .story-timeline{position:relative}
      .story-timeline::before{content:"";position:absolute;left:50%;top:12px;bottom:12px;width:1px;background:rgba(180,91,69,.34)}
      .story-moment{position:relative;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(28px,5vw,68px);align-items:center;padding:22px 0}
      .story-moment:nth-child(even) .story-moment-copy{order:2}.story-moment:nth-child(even) .story-visual{order:1}
      .story-moment::before{content:"";position:absolute;left:calc(50% - 7px);top:38px;width:14px;height:14px;border:3px solid var(--arena-clara);border-radius:50%;background:var(--terracota-viva);z-index:2}
      .story-moment:last-child::before{background:var(--magenta)}
      .story-eyebrow{margin-bottom:12px;font:700 10px/1.2 "Space Mono",monospace;letter-spacing:.1em;color:var(--terracota-viva)}
      .story-pending-cta{display:inline-flex;min-height:48px;align-items:center;gap:8px;padding:0 20px;border:1px dashed rgba(230,215,198,.48);border-radius:999px;color:rgba(230,215,198,.76);font:700 11px "Space Mono",monospace;letter-spacing:.06em;text-transform:uppercase}
      .story-pending-cta small{font-size:9px;color:var(--magenta)}
      @keyframes story-reveal{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.story-reveal{animation:none}}
      @media(max-width:768px){.story-hero-visual{height:220px;width:100%;max-width:330px;margin:8px auto 0}.story-hero-image--present{width:154px;right:34px}.story-hero-image--migration{width:108px;left:14px;bottom:12px}.story-hero-image--paths{width:92px;right:0;bottom:0}.story-timeline::before{left:9px;top:10px;bottom:10px}.story-moment{display:grid;grid-template-columns:1fr;gap:16px;padding:18px 0 20px;padding-left:30px}.story-moment:nth-child(even) .story-moment-copy,.story-moment:nth-child(even) .story-visual{order:initial}.story-moment::before{left:2px;top:22px;width:14px;height:14px}.story-visual{width:100%;min-height:0;aspect-ratio:16 / 8.5}.story-visual--final{width:100%;max-width:330px;margin:0}.story-pending-cta{min-height:44px;padding:0 14px;font-size:10px}}
    `}</style>

    <NavBar />

    <section className="pz-dark" style={{ padding: isMobile ? "82px 22px 36px" : `104px ${horizontalPadding} 48px`, position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", right: isMobile ? "-120px" : "5%", top: 72, width: isMobile ? 220 : 320, height: isMobile ? 220 : 320, border: "1px solid rgba(230,215,198,.16)", borderRadius: "50%" }} />
      <div className="story-reveal" style={{ maxWidth: 1160, margin: "0 auto", position: "relative", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "minmax(0,1fr) minmax(340px,.7fr)", gap: isMobile ? 26 : 54, alignItems: "center" }}>
        <div>
          <SectionLabel number="01" tone="light">Mi historia</SectionLabel>
          <h1 style={{ fontFamily: "Fraunces,serif", fontStyle: "italic", fontWeight: 500, fontSize: isMobile ? 36 : "clamp(48px,5vw,68px)", lineHeight: 1, color: "var(--arena-clara)", maxWidth: 650, margin: "20px 0 18px" }}>Mi forma de trabajar se fue construyendo en el camino.</h1>
          <p style={{ color: "rgba(230,215,198,.86)", fontSize: isMobile ? 15 : 17, lineHeight: 1.58, maxWidth: 590 }}>Lo que hoy aplico en productos, procesos y comunicación empezó mucho antes: en la necesidad de encontrar maneras más organizadas de sostener mi propia vida, mis proyectos y las metas que me planteaba.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 24 }}><BrandButton to="/portfolio">Ver portfolio ↗</BrandButton><BrandButton variant="secondary" to="/contacto">Hablemos ↗</BrandButton></div>
        </div>
        <HeroImages />
      </div>
    </section>

    <section style={{ padding: isMobile ? "54px 22px 58px" : `76px ${horizontalPadding} 82px` }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div style={{ maxWidth: 760, marginBottom: isMobile ? 28 : 38 }}><SectionLabel number="02">Recorrido</SectionLabel><p style={{ fontFamily: "Fraunces,serif", fontStyle: "italic", fontSize: isMobile ? 28 : 40, lineHeight: 1.08, margin: "18px 0 0", color: "var(--mar-profundo)" }}>Me fui moviendo por la vida mientras construía una vida. Distintas etapas, intereses y decisiones fueron sumando algo a mi manera de diseñar y de ver las cosas.</p></div>
        <div className="story-timeline">{journeyMoments.map((moment) => <article className="story-moment story-reveal" key={moment.eyebrow}><div className="story-moment-copy"><p className="story-eyebrow">{moment.eyebrow}</p><h2 style={{ fontSize: isMobile ? 24 : 31, lineHeight: 1.08, marginBottom: 12 }}>{moment.title}</h2>{moment.paragraphs.map((paragraph) => <p key={paragraph} style={{ fontSize: isMobile ? 15 : 16, lineHeight: 1.58, marginBottom: 8, maxWidth: 510 }}>{paragraph}</p>)}</div><StoryImage src={moment.visualSrc} alt={moment.visualAlt} fit={moment.visualFit} position={moment.visualPosition} className="story-visual" /></article>)}</div>
      </div>
    </section>

    <section className="pz-dark" style={{ padding: isMobile ? "56px 22px 62px" : `78px ${horizontalPadding} 84px` }}><div style={{ maxWidth: 1160, margin: "0 auto" }}><SectionLabel number="03" tone="light">Lo que ese camino me dejó</SectionLabel><h2 style={{ fontFamily: "Fraunces,serif", fontStyle: "italic", fontWeight: 500, fontSize: isMobile ? 34 : 48, lineHeight: 1.02, maxWidth: 700, margin: "18px 0 14px", color: "var(--arena-clara)" }}>Hay cosas que cambiaron de nombre. Otras siguen estando ahí.</h2><p style={{ color: "rgba(230,215,198,.78)", fontSize: isMobile ? 15 : 17, lineHeight: 1.55, maxWidth: 680, marginBottom: 34 }}>Con los años fui reconociendo algunas formas de pensar y hacer que se repiten, incluso cuando cambia el contexto.</p><div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: isMobile ? 0 : 30 }}>{learnings.map((learning, index) => <article key={learning.title} style={{ padding: "20px 0", borderTop: "1px solid rgba(230,215,198,.28)", borderBottom: isMobile ? "1px solid rgba(230,215,198,.28)" : 0 }}><span style={{ font: "700 11px Space Mono,monospace", color: "var(--magenta)" }}>0{index + 1}</span><h3 style={{ color: "var(--arena-clara)", fontSize: isMobile ? 22 : 25, lineHeight: 1.12, margin: "18px 0 10px" }}>{learning.title}</h3><p style={{ color: "rgba(230,215,198,.84)", fontSize: isMobile ? 15 : 16, lineHeight: 1.55, margin: 0 }}>{learning.text}</p></article>)}</div></div></section>

    <section style={{ padding: isMobile ? "56px 22px 62px" : `82px ${horizontalPadding} 88px` }}><div style={{ maxWidth: 1160, margin: "0 auto" }}><SectionLabel number="04">Dónde lo aplico</SectionLabel><h2 style={{ fontFamily: "Fraunces,serif", fontStyle: "italic", fontWeight: 500, fontSize: isMobile ? 35 : 49, lineHeight: 1.02, maxWidth: 760, margin: "18px 0 36px" }}>Hoy esa mirada aparece en distintos espacios de mi vida y mi trabajo.</h2><div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: 1, background: "rgba(23,59,68,.18)" }}>{territories.map((territory, index) => <article key={territory} style={{ padding: isMobile ? "22px 18px" : "26px 24px", background: "var(--surface-paper)" }}><span style={{ font: "700 11px Space Mono,monospace", color: "var(--terracota-viva)" }}>0{index + 1}</span><p style={{ fontSize: isMobile ? 15 : 16, lineHeight: 1.55, margin: "18px 0 0" }}>{territory}</p></article>)}</div></div></section>

    <section className="pz-dark" style={{ padding: isMobile ? "58px 22px 70px" : `80px ${horizontalPadding} 88px` }}><div style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "minmax(0,.9fr) minmax(260px,.5fr)", gap: isMobile ? 28 : 60, alignItems: "center" }}><div><SectionLabel number="05" tone="light">Conectemos</SectionLabel><h2 style={{ fontFamily: "Fraunces,serif", fontStyle: "italic", fontWeight: 500, fontSize: isMobile ? 37 : 52, lineHeight: 1.02, color: "var(--arena-clara)", margin: "18px 0" }}>Todo ese recorrido forma parte de la diseñadora que soy hoy.</h2><p style={{ color: "rgba(230,215,198,.84)", fontSize: isMobile ? 15 : 17, lineHeight: 1.58, maxWidth: 620 }}>Sigo aprendiendo, construyendo y ajustando mi dirección. Product Design es hoy mi oficio, pero mi manera de mirar también viene de todo lo que ocurrió antes de encontrar ese nombre.</p><div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 22 }}><BrandButton to="/portfolio">Ver mi trabajo ↗</BrandButton><a className="story-pending-cta" href="https://www.linkedin.com/in/paolazerpa" target="_blank" rel="noreferrer" aria-label="Conectar en LinkedIn (abre en una nueva pestaña)">Conectar en LinkedIn ↗</a></div></div><div><StoryImage src={finalPortrait} alt="Retrato profesional de Paola Zerpa" fit="cover" position="center 42%" className="story-visual--final" /><p style={{ color: "rgba(230,215,198,.65)", font: "10px/1.55 Space Mono,monospace", letterSpacing: ".08em", textTransform: "uppercase", margin: "14px 0 0", textAlign: "right" }}>Product Design<br />personas · información · recorridos<br />productos reales</p></div></div></section>
    <FooterSection />
  </div>;
}
