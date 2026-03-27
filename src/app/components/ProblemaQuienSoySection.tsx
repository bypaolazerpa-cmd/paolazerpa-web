import image_92a090bf23d02cde3e07b38a242a9cf87315ffb1 from "../../assets/paola-portrait.jpg";
import { useIsMobile } from "../hooks/useIsMobile";
import { AppLink } from "./AppLink";

const pillars = [
  {
    id: "claridad",
    color: "#7C9E8A",
    name: "Claridad mental",
    line: "Menos ruido. Más dirección.",
    detail: "Entiendes qué es esencial y tomas decisiones sin agotarte.",
  },
  {
    id: "estructura",
    color: "#C97B5A",
    name: "Estructura simple",
    line: "Sistemas que puedas usar hoy.",
    detail: "Sistemas que puedes usar hoy, diseñados para sostener lo real.",
  },
  {
    id: "sostenibilidad",
    color: "#9B8FB0",
    name: "Sostenibilidad en el tiempo",
    line: "Que no todo dependa de tu energía.",
    detail: "Lo que construyes te sostiene aunque no estés al 100%.",
  },
];

const solutionBody = (
  <>
    <strong>Diseño sistemas para dar forma a procesos,</strong> sostener ideas, proyectos y maneras
    de trabajar sin que todo dependa de la energía personal ni de saturar la cabeza intentando
    recordar todo.
  </>
);

export function ProblemaQuienSoySection() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section
        id="enfoque"
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
              marginBottom: "24px",
              fontWeight: 400,
            }}
          >
            LA SOLUCIÓN ES TENER UN SISTEMA
          </p>

          <h2
            style={{
              fontFamily: "Fraunces, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "32px",
              color: "#1A1A2E",
              lineHeight: "1.25",
              marginBottom: "20px",
            }}
          >
            No "eres" desordenada.
            <br />
            Estás saturada, y nadie te enseñó cómo organizar tu vida.
          </h2>

          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              color: "#555555",
              lineHeight: "1.75",
              marginBottom: "44px",
            }}
          >
            Pensar en todo al mismo tiempo, anotar mensajes infinitos en un chat contigo misma o
            escribirlo en papel y perderlo de vista, no es tener claridad.
            <br />
            <strong>Es ruido.</strong>
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "36px" }}>
            <div style={{ flex: 1, height: "1px", backgroundColor: "#D6D0C4" }} />
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#C97B5A" }} />
            <div style={{ flex: 1, height: "1px", backgroundColor: "#D6D0C4" }} />
          </div>

          <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", marginBottom: "40px" }}>
            <div
              style={{
                flexShrink: 0,
                width: "80px",
                height: "80px",
                borderRadius: "55% 45% 60% 40% / 45% 60% 40% 55%",
                backgroundColor: "#D4E4DA",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={image_92a090bf23d02cde3e07b38a242a9cf87315ffb1}
                alt="Paola Zerpa"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "MuseoModerno, sans-serif",
                  fontWeight: 700,
                  fontSize: "22px",
                  color: "#1A1A2E",
                  lineHeight: "1.2",
                  marginBottom: "10px",
                }}
              >
                Soy Paola.
              </p>
              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 400,
                  fontSize: "15px",
                  color: "#555555",
                  lineHeight: "1.7",
                  marginBottom: "14px",
                }}
              >
                {solutionBody}
              </p>
              <AppLink
                to="/mi-historia"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "#C97B5A",
                  textDecoration: "none",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                Conoce mi historia →
              </AppLink>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid #E8E2DA",
              paddingTop: "28px",
            }}
          >
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "9px",
              color: "#AAAAAA",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "18px",
              fontWeight: 400,
            }}
          >
            CÓMO SE SOSTIENE
          </p>
          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              color: "#777777",
              lineHeight: "1.7",
              marginBottom: "22px",
            }}
          >
            La solución es tener un sistema.
          </p>
          <div style={{ display: "grid", gap: "18px" }}>
              {pillars.map((pillar) => (
                <div
                  key={pillar.id}
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E8E2DA",
                    borderRadius: "12px",
                    padding: "20px 18px",
                  }}
                >
                  <div style={{ width: "28px", height: "2px", backgroundColor: pillar.color, marginBottom: "16px" }} />
                  <p
                    style={{
                      fontFamily: "Space Mono, monospace",
                      fontSize: "9px",
                      color: pillar.color,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      marginBottom: "10px",
                      fontWeight: 400,
                    }}
                  >
                    {pillar.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "MuseoModerno, sans-serif",
                      fontWeight: 700,
                      fontSize: "19px",
                      color: "#1A1A2E",
                      lineHeight: "1.3",
                      marginBottom: "10px",
                    }}
                  >
                    {pillar.line}
                  </p>
                  <p
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      color: "#666666",
                      lineHeight: "1.65",
                      margin: 0,
                    }}
                  >
                    {pillar.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="enfoque"
      style={{
        backgroundColor: "#FAF8F4",
        paddingTop: "110px",
        paddingBottom: "120px",
        paddingLeft: "80px",
        paddingRight: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1160px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.2fr) minmax(320px, 0.8fr)",
            gap: "72px",
            alignItems: "start",
            marginBottom: "56px",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "9px",
                color: "#AAAAAA",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "24px",
                fontWeight: 400,
              }}
            >
              LA SOLUCIÓN ES TENER UN SISTEMA
            </p>

            <h2
              style={{
                fontFamily: "Fraunces, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "50px",
                color: "#1A1A2E",
                lineHeight: "1.12",
                marginBottom: "24px",
                maxWidth: "720px",
              }}
            >
              No "eres" desordenada.
              <br />
              Estás saturada, y nadie te enseñó cómo organizar tu vida.
            </h2>

            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 400,
                fontSize: "17px",
                color: "#555555",
                lineHeight: "1.8",
                margin: 0,
                maxWidth: "760px",
              }}
            >
              Pensar en todo al mismo tiempo, anotar mensajes infinitos en un chat contigo misma o
              escribirlo en papel y perderlo de vista, no es tener claridad.
              <br />
              <strong>Es ruido.</strong>
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "100%",
                maxWidth: "360px",
                aspectRatio: "4/5",
                backgroundColor: "#D4E4DA",
                borderRadius: "65% 35% 55% 45% / 40% 65% 35% 60%",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={image_92a090bf23d02cde3e07b38a242a9cf87315ffb1}
                alt="Paola Zerpa"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            <p
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "9px",
                color: "#C8C2BA",
                letterSpacing: "2px",
                textTransform: "uppercase",
                margin: 0,
                fontWeight: 400,
              }}
            >
              Paola
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.95fr) minmax(0, 1.05fr)",
            gap: "40px",
            alignItems: "start",
            borderTop: "1px solid #E8E2DA",
            paddingTop: "40px",
            marginBottom: "56px",
          }}
        >
          <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
            <div
              style={{
                flexShrink: 0,
                width: "72px",
                height: "72px",
                borderRadius: "55% 45% 60% 40% / 45% 60% 40% 55%",
                backgroundColor: "#D4E4DA",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={image_92a090bf23d02cde3e07b38a242a9cf87315ffb1}
                alt="Paola Zerpa"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "MuseoModerno, sans-serif",
                  fontWeight: 700,
                  fontSize: "22px",
                  color: "#1A1A2E",
                  lineHeight: "1.2",
                  marginBottom: "10px",
                }}
              >
                Soy Paola.
              </p>
              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  color: "#555555",
                  lineHeight: "1.75",
                  marginBottom: "14px",
                  maxWidth: "420px",
                }}
              >
                {solutionBody}
              </p>
              <AppLink
                to="/mi-historia"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 500,
                  fontSize: "15px",
                  color: "#C97B5A",
                  textDecoration: "none",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                Conoce mi historia →
              </AppLink>
            </div>
          </div>

          <div>
            <p
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "9px",
                color: "#AAAAAA",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "16px",
                fontWeight: 400,
              }}
            >
              CÓMO SE SOSTIENE
            </p>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                color: "#777777",
                lineHeight: "1.7",
                margin: 0,
                maxWidth: "420px",
              }}
            >
              La solución es tener un sistema.
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0" }}>
          {pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              style={{
                paddingTop: "36px",
                paddingBottom: "36px",
                paddingLeft: index === 0 ? 0 : "40px",
                paddingRight: index === pillars.length - 1 ? 0 : "40px",
                borderLeft: index > 0 ? "1px solid #E8E2DA" : "none",
              }}
            >
              <div style={{ width: "32px", height: "2px", backgroundColor: pillar.color, marginBottom: "24px" }} />
              <p
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "9px",
                  color: pillar.color,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                  fontWeight: 400,
                }}
              >
                {pillar.name}
              </p>
              <p
                style={{
                  fontFamily: "MuseoModerno, sans-serif",
                  fontWeight: 700,
                  fontSize: "20px",
                  color: "#1A1A2E",
                  lineHeight: "1.25",
                  marginBottom: "12px",
                }}
              >
                {pillar.line}
              </p>
              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "#777777",
                  lineHeight: "1.65",
                  margin: 0,
                }}
              >
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
