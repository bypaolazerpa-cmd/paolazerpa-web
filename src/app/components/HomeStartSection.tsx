import { useIsMobile } from "../hooks/useIsMobile";
import { BrandButton } from "./brand/BrandButton";
import { SectionLabel } from "./brand/SectionLabel";

const startSteps = [
  ["Me cuentas el contexto", "Qué estás haciendo, qué está pasando y qué necesitas resolver."],
  ["Lo conversamos", "Revisamos el proyecto, las necesidades y qué tendría sentido trabajar."],
  ["Defino una propuesta", "Te comparto alcance, forma de trabajo, tiempos y próximos pasos."],
  ["Empezamos a trabajar", "Diseñamos, construimos y vamos tomando decisiones sobre el producto o proyecto."],
];

export function HomeStartSection() {
  const isMobile = useIsMobile();

  return (
    <section
      id="empezamos"
      className="pz-dark"
      style={{
        paddingTop: isMobile ? "86px" : "108px",
        paddingBottom: isMobile ? "86px" : "112px",
        paddingLeft: isMobile ? "24px" : "80px",
        paddingRight: isMobile ? "24px" : "80px",
        position: "relative",
        overflow: "hidden",
        background: "var(--mar-profundo)",
      }}
    >
      <div style={{ maxWidth: "1160px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: isMobile ? "28px" : "54px",
            alignItems: "end",
            marginBottom: isMobile ? "34px" : "48px",
          }}
        >
          <div>
            <SectionLabel number="06" tone="light">
              Cómo empezamos
            </SectionLabel>
            <h2
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 600,
                fontSize: isMobile ? "36px" : "58px",
                color: "var(--arena-clara)",
                lineHeight: 1.04,
                margin: "22px 0 0",
                maxWidth: "860px",
              }}
            >
              Si tienes algo que quieres diseñar o mejorar, podemos empezar por ahí.
            </h2>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(4, minmax(0, 1fr))",
            gap: isMobile ? "14px" : "0",
            border: isMobile ? "none" : "1px solid rgba(230, 215, 198, 0.18)",
            borderRadius: isMobile ? 0 : "8px",
            overflow: "hidden",
          }}
        >
          {startSteps.map(([title, body], index) => (
            <article
              key={title}
              className="pz-glass-card"
              style={{
                borderRadius: isMobile ? "8px" : 0,
                border: isMobile ? "1px solid rgba(230, 215, 198, 0.22)" : "none",
                borderLeft: !isMobile && index > 0 ? "1px solid rgba(230, 215, 198, 0.18)" : "none",
                padding: isMobile ? "22px 20px" : "28px 24px 30px",
                minHeight: isMobile ? "auto" : "230px",
              }}
            >
              <p
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "11px",
                  color: "var(--citron-loto)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  margin: "0 0 18px",
                  fontWeight: 700,
                }}
              >
                0{index + 1}
              </p>
              <h3
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: 1.12,
                  color: "var(--arena-clara)",
                  margin: "0 0 12px",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.66,
                  color: "rgba(230, 215, 198, 0.88)",
                  margin: 0,
                }}
              >
                {body}
              </p>
            </article>
          ))}
        </div>

        <div className="home-start-cta">
          <BrandButton to="/contacto">Cuéntame qué quieres resolver ↗</BrandButton>
        </div>
      </div>
    </section>
  );
}
