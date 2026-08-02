import { useIsMobile } from "../hooks/useIsMobile";
import { BrandButton } from "./brand/BrandButton";
import { SectionLabel } from "./brand/SectionLabel";

const startSteps = [
  ["Me cuentas el contexto", "Reviso qué estás construyendo, qué te está trabando y qué necesitas resolver."],
  ["Tenemos una reunión", "Aterrizamos objetivos, alcance, dudas y prioridades."],
  ["Defino una propuesta", "Te comparto etapas, tiempos, entregables e inversión."],
  ["Construimos la solución", "Diseño, reviso contigo y ajusto lo necesario para ponerla en marcha."],
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
            gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 0.86fr) minmax(320px, 0.72fr)",
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
              }}
            >
              Del primer diagnóstico a un plan claro de trabajo.
            </h2>
          </div>
          <BrandButton to="/contacto#email">Cuéntame qué estás construyendo</BrandButton>
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
      </div>
    </section>
  );
}
