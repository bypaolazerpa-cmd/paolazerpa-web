import { useIsMobile } from "../hooks/useIsMobile";

const benefits = [
  {
    id: "claridad",
    color: "#7C9E8A",
    name: "Claridad mental",
    detail: "Ordena ideas, prioridades y decisiones para que no todo dependa de tu cabeza.",
  },
  {
    id: "estructura",
    color: "#C97B5A",
    name: "Estructura simple",
    detail: "Le da forma a lo que ya existe para que funcione con más naturalidad y menos esfuerzo.",
  },
  {
    id: "funcionamiento",
    color: "#F5C842",
    name: "Mejor funcionamiento",
    detail:
      "Convierte procesos, dinámicas y formas de trabajar en algo más claro, conectado y usable.",
  },
  {
    id: "sosten",
    color: "#9B8FB0",
    name: "Sostén en el tiempo",
    detail:
      "Crea una base que acompaña lo que construyes sin depender solo de tu energía.",
  },
];

export function ProblemaQuienSoySection() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section
        id="beneficios"
        style={{
          backgroundColor: "#FAF8F4",
          paddingTop: "80px",
          paddingBottom: "80px",
          paddingLeft: "24px",
          paddingRight: "24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "9px",
              color: "#AAAAAA",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "20px",
              fontWeight: 400,
            }}
          >
            SOLUCIÓN
          </p>

          <h2
            style={{
              fontFamily: "Fraunces, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "32px",
              color: "#1A1A2E",
              lineHeight: "1.22",
              marginBottom: "18px",
            }}
          >
            Un sistema bien diseñado mejora la manera en que piensas, trabajas y sostienes lo que
            construyes.
          </h2>

          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              color: "#666666",
              lineHeight: "1.75",
              marginBottom: "32px",
            }}
          >
            Hace más claro lo importante, baja fricción y le da una forma más usable a lo que hoy
            ya existe.
          </p>

          <div style={{ display: "grid", gap: "18px" }}>
            {benefits.map((benefit) => (
              <article
                key={benefit.id}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E8E2DA",
                  borderRadius: "14px",
                  padding: "22px 20px",
                }}
              >
                <div
                  style={{
                    width: "30px",
                    height: "2px",
                    backgroundColor: benefit.color,
                    marginBottom: "16px",
                  }}
                />
                <p
                  style={{
                    fontFamily: "MuseoModerno, sans-serif",
                    fontWeight: 700,
                    fontSize: "21px",
                    color: "#1A1A2E",
                    lineHeight: "1.25",
                    marginBottom: "10px",
                  }}
                >
                  {benefit.name}
                </p>
                <p
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "#666666",
                    lineHeight: "1.7",
                    margin: 0,
                  }}
                >
                  {benefit.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="beneficios"
      style={{
        backgroundColor: "#FAF8F4",
        paddingTop: "108px",
        paddingBottom: "116px",
        paddingLeft: "80px",
        paddingRight: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1160px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "860px", marginBottom: "44px" }}>
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "9px",
              color: "#AAAAAA",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "20px",
              fontWeight: 400,
            }}
          >
            SOLUCIÓN
          </p>

          <h2
            style={{
              fontFamily: "Fraunces, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "50px",
              color: "#1A1A2E",
              lineHeight: "1.12",
              marginBottom: "18px",
            }}
          >
            Un sistema bien diseñado mejora la manera en que piensas, trabajas y sostienes lo que
            construyes.
          </h2>

          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 400,
              fontSize: "17px",
              color: "#666666",
              lineHeight: "1.8",
              margin: 0,
              maxWidth: "720px",
            }}
          >
            Hace más claro lo importante, baja fricción y le da una forma más usable a lo que hoy
            ya existe.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "0" }}>
          {benefits.map((benefit, index) => (
            <article
              key={benefit.id}
              style={{
                paddingTop: "34px",
                paddingBottom: "34px",
                paddingLeft: index === 0 ? 0 : "28px",
                paddingRight: index === benefits.length - 1 ? 0 : "28px",
                borderLeft: index > 0 ? "1px solid #E8E2DA" : "none",
              }}
            >
              <div
                style={{
                  width: "34px",
                  height: "2px",
                  backgroundColor: benefit.color,
                  marginBottom: "20px",
                }}
              />
              <p
                style={{
                  fontFamily: "MuseoModerno, sans-serif",
                  fontWeight: 700,
                  fontSize: "22px",
                  color: "#1A1A2E",
                  lineHeight: "1.25",
                  marginBottom: "12px",
                }}
              >
                {benefit.name}
              </p>
              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 400,
                  fontSize: "15px",
                  color: "#666666",
                  lineHeight: "1.72",
                  margin: 0,
                }}
              >
                {benefit.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
