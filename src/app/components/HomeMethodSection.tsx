import { useIsMobile } from "../hooks/useIsMobile";
import { SectionLabel } from "./brand/SectionLabel";

const methodSteps = [
  {
    title: "COMPRENDER",
    body: "Empiezo por entender qué está pasando, para quién y qué necesitamos resolver.",
  },
  {
    title: "INVESTIGAR",
    body: "Busco contexto, referencias y señales que me ayuden a decidir mejor.",
  },
  {
    title: "ORGANIZAR",
    body: "Ordeno prioridades, información y recorridos para darle estructura a la solución.",
  },
  {
    title: "DISEÑAR",
    body: "Convierto esa estructura en flujos, interacciones e interfaces concretas.",
  },
  {
    title: "EVOLUCIONAR",
    body: "Veo cómo funciona en la práctica y ajusto lo necesario a medida que aprendo.",
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
        paddingBottom: isMobile ? "68px" : "116px",
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
            marginBottom: isMobile ? "28px" : "54px",
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
                padding: isMobile ? "14px 16px 16px" : isTablet ? "26px 14px 28px" : "30px 22px 32px",
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
                  margin: "0 0 10px",
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
                  margin: "0 0 7px",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: isTablet ? "14px" : "15px",
                  lineHeight: isMobile ? 1.35 : 1.55,
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
