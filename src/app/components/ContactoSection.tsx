import { useNavigate } from "react-router";
import { useIsMobile } from "../hooks/useIsMobile";
import { navigateWithScroll } from "../utils/navigation";

export function ContactoSection() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  if (isMobile) {
    return (
      <section
        id="contacto"
        style={{
          backgroundColor: "#FAF8F4",
          paddingTop: "74px",
          paddingBottom: "76px",
          paddingLeft: "24px",
          paddingRight: "24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "-40px",
            right: "-40px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #7C9E8A 0%, transparent 70%)",
            opacity: 0.1,
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "10px",
              color: "#AAAAAA",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "18px",
              fontWeight: 400,
            }}
          >
            CONECTEMOS
          </p>
          <h2
            style={{
              fontFamily: "Fraunces, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "31px",
              color: "#1A1A2E",
              lineHeight: "1.2",
              marginBottom: "16px",
            }}
          >
            Hablemos de lo que quieres diseñar mejor.
          </h2>
          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              color: "#666666",
              lineHeight: "1.75",
              marginBottom: "24px",
            }}
          >
            Trabajo ordenando sistemas personales, formas de trabajo, productos, experiencias y
            estructuras de negocio. Si quieres conversar una necesidad antes de convertirla en
            proyecto, este es un buen lugar para empezar.
          </p>

          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              padding: "24px 20px",
              border: "1px solid #E8E2DA",
              borderTop: "3px solid #7C9E8A",
            }}
          >
            <p
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "10px",
                color: "#7C9E8A",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "14px",
                fontWeight: 400,
              }}
            >
              Conversemos
            </p>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                color: "#777777",
                lineHeight: "1.7",
                marginBottom: "20px",
              }}
            >
              Puedes escribirme por WhatsApp si ya quieres abrir la conversación, o ir por mail si
              prefieres escribir con más contexto.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href="https://wa.me/5491133652899"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#1A1A2E",
                  color: "#FAF8F4",
                  fontFamily: "Space Mono, monospace",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  height: "48px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: 400,
                }}
              >
                Hablemos por WhatsApp
              </a>
              <button
                onClick={() => navigateWithScroll(navigate, "/contacto#email")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "transparent",
                  color: "#1A1A2E",
                  fontFamily: "Space Mono, monospace",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  height: "48px",
                  borderRadius: "6px",
                  border: "1px solid #1A1A2E",
                  cursor: "pointer",
                  fontWeight: 400,
                }}
              >
                Escribir por mail
              </button>
            </div>
          </div>

          <div
            style={{
              marginTop: "16px",
              paddingTop: "16px",
              borderTop: "1px solid rgba(139,111,71,0.18)",
              maxWidth: "300px",
            }}
          >
            <p
              style={{
                fontFamily: "Fraunces, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "18px",
                color: "#8B6F47",
                lineHeight: "1.42",
                margin: 0,
              }}
            >
              Sistemas para sostener lo que construimos sin depender solo de nuestra energía.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contacto"
      style={{
        backgroundColor: "#FAF8F4",
        paddingTop: "92px",
        paddingBottom: "110px",
        paddingLeft: "80px",
        paddingRight: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          right: "-60px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #7C9E8A 0%, transparent 70%)",
          opacity: 0.08,
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1080px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.9fr) minmax(320px, 0.85fr)",
            gap: "56px",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "10px",
                color: "#AAAAAA",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "18px",
                fontWeight: 400,
              }}
          >
            CONECTEMOS
            </p>
            <h2
              style={{
                fontFamily: "Fraunces, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "46px",
                color: "#1A1A2E",
                lineHeight: "1.12",
                marginBottom: "18px",
                maxWidth: "640px",
              }}
            >
              Hablemos de lo que quieres diseñar mejor.
            </h2>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#666666",
                lineHeight: "1.8",
                margin: 0,
                maxWidth: "560px",
              }}
            >
              Trabajo ordenando sistemas personales, formas de trabajo, productos, experiencias y
              estructuras de negocio. Si quieres conversar una necesidad antes de convertirla en
              proyecto, este es un buen lugar para empezar.
            </p>
          </div>

          <div style={{ display: "grid", gap: "22px" }}>
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "18px",
                padding: "38px 34px",
                border: "1px solid #E8E2DA",
                borderTop: "3px solid #7C9E8A",
              }}
            >
              <p
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "10px",
                  color: "#7C9E8A",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                  fontWeight: 400,
                }}
              >
                  Conversemos
              </p>
              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 400,
                  fontSize: "15px",
                  color: "#777777",
                  lineHeight: "1.75",
                  marginBottom: "30px",
                }}
              >
                Puedes escribirme por WhatsApp si ya quieres abrir la conversación, o ir por mail
                si prefieres escribir con más contexto.
              </p>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href="https://wa.me/5491133652899"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#1A1A2E",
                    color: "#FAF8F4",
                    fontFamily: "Space Mono, monospace",
                    fontSize: "11px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    padding: "16px 24px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontWeight: 400,
                    transition: "opacity 0.2s ease",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                >
                  Hablemos por WhatsApp
                </a>
                <button
                  onClick={() => navigateWithScroll(navigate, "/contacto#email")}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "transparent",
                    color: "#1A1A2E",
                    fontFamily: "Space Mono, monospace",
                    fontSize: "11px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    padding: "15px 24px",
                    borderRadius: "6px",
                    border: "1px solid #1A1A2E",
                    cursor: "pointer",
                    fontWeight: 400,
                    transition: "background 0.2s ease, color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.backgroundColor = "#1A1A2E";
                    el.style.color = "#FAF8F4";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.backgroundColor = "transparent";
                    el.style.color = "#1A1A2E";
                  }}
                >
                  Escribir por mail
                </button>
              </div>
            </div>

            <div
              style={{
                maxWidth: "520px",
                paddingTop: "18px",
                borderTop: "1px solid rgba(139,111,71,0.18)",
              }}
            >
              <p
                style={{
                  fontFamily: "Fraunces, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "24px",
                  color: "#8B6F47",
                  lineHeight: "1.45",
                  margin: 0,
                }}
              >
                Sistemas para sostener lo que construimos sin depender solo de nuestra energía.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
