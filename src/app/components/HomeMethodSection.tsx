import { useIsMobile } from "../hooks/useIsMobile";
import { SectionLabel } from "./brand/SectionLabel";

const methodSteps = [
  {
    title: "Comprender",
    body: "Entiendo qué necesitamos resolver, para quién, qué ocurre hoy y qué resultado buscamos.",
  },
  {
    title: "Investigar",
    body: "Busco evidencia, referencias y contexto para reducir incertidumbre antes de tomar decisiones.",
  },
  {
    title: "Organizar",
    body: "Defino prioridades, relaciones, información, recorridos y qué necesita contemplar la solución.",
  },
  {
    title: "Diseñar",
    body: "Llevo esas decisiones a flujos, interacciones, pantallas, componentes o herramientas concretas.",
  },
  {
    title: "Evolucionar",
    body: "Observo cómo funciona lo diseñado, incorporo nueva evidencia y vuelvo sobre decisiones cuando hace falta.",
  },
];

export function HomeMethodSection() {
  const isMobile = useIsMobile();
  const isTablet = useIsMobile(1100) && !isMobile;

  return (
    <section
      id="metodo"
      style={{
        backgroundColor: "var(--arena-clara)",
        paddingTop: isMobile ? "86px" : "112px",
        paddingBottom: isMobile ? "86px" : "116px",
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
            gridTemplateColumns: "1fr",
            gap: isMobile ? "28px" : "54px",
            alignItems: "end",
            marginBottom: isMobile ? "36px" : "54px",
          }}
        >
          <div>
            <SectionLabel number="04">Cómo trabajo</SectionLabel>
            <h2
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 600,
                fontSize: isMobile ? "36px" : isTablet ? "48px" : "58px",
                color: "var(--mar-profundo)",
                lineHeight: 1.04,
                margin: "22px 0 0",
                maxWidth: "860px",
              }}
            >
              Cinco momentos que uso para pasar del problema a una solución y seguir mejorándola.
            </h2>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(5, minmax(0, 1fr))",
            gap: isMobile ? "14px" : "0",
            borderTop: isMobile ? "none" : "1px solid rgba(23, 59, 68, 0.2)",
            borderBottom: isMobile ? "none" : "1px solid rgba(23, 59, 68, 0.2)",
          }}
        >
          {methodSteps.map((step, index) => (
            <article
              key={step.title}
              style={{
                padding: isMobile ? "20px 18px" : isTablet ? "26px 14px 28px" : "30px 22px 32px",
                border: isMobile ? "1px solid rgba(23, 59, 68, 0.14)" : "none",
                borderLeft: !isMobile && index > 0 ? "1px solid rgba(23, 59, 68, 0.2)" : "none",
                borderRadius: isMobile ? "8px" : 0,
                backgroundColor: isMobile ? "rgba(234, 223, 206, 0.72)" : "transparent",
              }}
            >
              <p
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "11px",
                  color: "var(--mar-profundo)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  margin: "0 0 16px",
                  fontWeight: 700,
                }}
              >
                0{index + 1}
              </p>
              <h3
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 600,
                  fontSize: isMobile ? "23px" : isTablet ? "21px" : "24px",
                  color: "var(--mar-profundo)",
                  lineHeight: 1.12,
                  margin: "0 0 12px",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: isTablet ? "14px" : "15px",
                  lineHeight: isMobile ? 1.58 : 1.55,
                  color: "rgba(23, 59, 68, 0.84)",
                  margin: 0,
                }}
              >
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
