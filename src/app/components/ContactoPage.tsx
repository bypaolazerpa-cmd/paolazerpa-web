import { NavBar } from "./NavBar";
import { FooterSection } from "./FooterSection";
import { useIsMobile } from "../hooks/useIsMobile";

const startingPoints = [
  "Ordenar una idea, una necesidad o un problema concreto antes de convertirlo en algo más grande",
  "Revisar un proceso, una forma de trabajar o una decisión de estructura que hoy no termina de cerrar",
  "Conversar una necesidad de producto, servicio, experiencia, equipo o negocio con más criterio",
  "Empezar por una pregunta concreta, sin tener todo definido ni escrito en formato proyecto",
];

export function ContactoPage() {
  const isMobile = useIsMobile();
  const px = isMobile ? "24px" : "80px";
  const scrollToEmail = () => {
    document.getElementById("email")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ backgroundColor: "#FAF8F4", overflowX: "hidden" }}>
      <NavBar />

      <section
        style={{
          backgroundColor: "#1A1A2E",
          paddingTop: isMobile ? "120px" : "156px",
          paddingBottom: isMobile ? "72px" : "88px",
          paddingLeft: px,
          paddingRight: px,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: isMobile ? "220px" : "440px",
            height: isMobile ? "220px" : "440px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #7C9E8A 0%, transparent 65%)",
            opacity: 0.06,
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1040px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: isMobile ? "10px" : "11px",
              color: "#F5C842",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "18px",
              fontWeight: 400,
            }}
          >
            Contacto
          </p>
          <h1
            style={{
              fontFamily: "Fraunces, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: isMobile ? "40px" : "62px",
              color: "#FAF8F4",
              lineHeight: "1.08",
              marginBottom: "18px",
              maxWidth: "760px",
            }}
          >
            Empecemos por una conversación clara.
          </h1>
          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 400,
              fontSize: isMobile ? "16px" : "18px",
              color: "#C8C2BA",
              lineHeight: "1.8",
              maxWidth: "640px",
              margin: 0,
            }}
          >
            Trabajo ordenando ideas, procesos, experiencias y estructuras. Si hay algo que quieres
            revisar mejor antes de convertirlo en proyecto, esta es una buena forma de empezar.
          </p>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "#FAF8F4",
          paddingTop: isMobile ? "72px" : "92px",
          paddingBottom: isMobile ? "56px" : "64px",
          paddingLeft: px,
          paddingRight: px,
        }}
      >
        <div
          style={{
            maxWidth: "980px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 0.85fr) minmax(320px, 0.9fr)",
            gap: isMobile ? "24px" : "44px",
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: isMobile ? "10px" : "11px",
                color: "#AAAAAA",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "18px",
                fontWeight: 400,
              }}
            >
              Para qué escribirme
            </p>
            <h2
              style={{
                fontFamily: "Fraunces, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: isMobile ? "32px" : "42px",
                color: "#1A1A2E",
                lineHeight: "1.15",
                marginBottom: "14px",
                maxWidth: "520px",
            }}
          >
            Para abrir una conversación útil, no para llegar con todo resuelto.
          </h2>
          <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#666666",
                lineHeight: "1.8",
                margin: 0,
                maxWidth: "480px",
            }}
          >
            Puedes escribirme si necesitas perspectiva para ordenar una decisión, revisar una forma
            de trabajar, pensar una experiencia o darle mejor forma a una necesidad concreta.
          </p>
        </div>

          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E8E2DA",
              borderRadius: "16px",
              padding: isMobile ? "24px 22px" : "28px 28px",
            }}
          >
            <div style={{ display: "grid", gap: "14px" }}>
              {startingPoints.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#7C9E8A",
                      marginTop: "8px",
                      flexShrink: 0,
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 400,
                      fontSize: "15px",
                      color: "#555555",
                      lineHeight: "1.75",
                      margin: 0,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="email"
        style={{
          scrollMarginTop: isMobile ? "84px" : "98px",
          backgroundColor: "#1A1A2E",
          paddingTop: isMobile ? "56px" : "64px",
          paddingBottom: isMobile ? "56px" : "64px",
          paddingLeft: px,
          paddingRight: px,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #9B8FB0 0%, transparent 60%)",
            opacity: 0.05,
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: isMobile ? "620px" : "980px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: isMobile ? "10px" : "11px",
              color: "#F5C842",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "14px",
              fontWeight: 400,
            }}
          >
            Cómo empezar
          </p>
          <h2
            style={{
              fontFamily: "Fraunces, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: isMobile ? "30px" : "38px",
              color: "#FAF8F4",
              lineHeight: "1.15",
              marginBottom: "14px",
            }}
          >
            WhatsApp es la forma más directa de abrir la conversación.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))",
              gap: isMobile ? "14px" : "18px",
              textAlign: "left",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(250,248,244,0.05)",
                border: "1px solid rgba(250,248,244,0.12)",
                borderRadius: "18px",
                padding: isMobile ? "22px 20px" : "26px 24px",
              }}
            >
              <p
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "10px",
                  color: "#F5C842",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  margin: "0 0 12px 0",
                  fontWeight: 400,
                }}
              >
                WhatsApp
              </p>
              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 400,
                  fontSize: "15px",
                  color: "#D6D0C4",
                  lineHeight: "1.75",
                  margin: "0 0 18px 0",
                }}
              >
                Ideal para una primera conversación breve sobre una idea, un proceso o una
                necesidad que quieres revisar conmigo.
              </p>
              <a
                href="https://wa.me/5491133652899"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#F5C842",
                  color: "#1A1A2E",
                  fontFamily: "Space Mono, monospace",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  padding: "16px 24px",
                  borderRadius: "6px",
                  textTransform: "uppercase",
                  fontWeight: 400,
                  textDecoration: "none",
                }}
              >
                Hablemos por WhatsApp
              </a>
            </div>
            <div
              style={{
                backgroundColor: "rgba(250,248,244,0.03)",
                border: "1px solid rgba(250,248,244,0.1)",
                borderRadius: "18px",
                padding: isMobile ? "22px 20px" : "26px 24px",
              }}
            >
              <p
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "10px",
                  color: "#C8C2BA",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  margin: "0 0 12px 0",
                  fontWeight: 400,
                }}
              >
                Email
              </p>
              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 400,
                  fontSize: "15px",
                  color: "#D6D0C4",
                  lineHeight: "1.75",
                  margin: "0 0 18px 0",
                }}
              >
                Si prefieres explicar mejor el contexto antes de hablar, puedes escribirme por
                correo y seguimos desde ahí.
              </p>
              <a
                href="mailto:paolakzerpa@gmail.com"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 500,
                  fontSize: isMobile ? "20px" : "24px",
                  color: "#FAF8F4",
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "14px",
                  lineHeight: "1.35",
                  letterSpacing: "-0.01em",
                  overflowWrap: "anywhere",
                  wordBreak: "break-word",
                  maxWidth: "100%",
                }}
              >
                paolakzerpa@gmail.com
              </a>
              <a
                href="mailto:paolakzerpa@gmail.com"
                style={{
                  display: "inline-block",
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "14px",
                  color: "#D6D0C4",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  cursor: "pointer",
                }}
              >
                Abrir mail
              </a>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
