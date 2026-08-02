import { useIsMobile } from "../hooks/useIsMobile";
import { SectionLabel } from "./brand/SectionLabel";

const methodSteps = [
  {
    title: "Comprender",
    body:
      "Antes de pensar en una solución, vamos a entender qué quieres lograr y cómo funciona actualmente lo que estás construyendo.",
  },
  {
    title: "Investigar",
    body:
      "Busco información, referencias y casos similares para ampliar el criterio y tomar mejores decisiones para tu proyecto.",
  },
  {
    title: "Organizar",
    body:
      "Definimos qué necesita resolverse, qué es prioritario y qué elementos debe incluir la solución.",
  },
  {
    title: "Diseñar",
    body:
      "Esa estructura se convierte en una solución concreta: sistema personal, sistema de trabajo, web, tienda online, plataforma o herramienta digital.",
  },
  {
    title: "Evolucionar",
    body:
      "Observamos cómo funciona en la práctica para simplificar, mejorar o replantear lo necesario.",
  },
];

export function HomeMethodSection() {
  const isMobile = useIsMobile();

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
            <SectionLabel number="05">Mi método</SectionLabel>
            <h2
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 600,
                fontSize: isMobile ? "36px" : "58px",
                color: "var(--mar-profundo)",
                lineHeight: 1.04,
                margin: "22px 0 0",
                maxWidth: "780px",
              }}
            >
              Una forma de <span className="pz-highlight">diseñar</span> que comienza mucho antes
              de elegir la solución.
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
                padding: isMobile ? "22px 20px" : "30px 22px 32px",
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
                  fontSize: isMobile ? "23px" : "24px",
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
                  fontSize: "15px",
                  lineHeight: 1.66,
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
