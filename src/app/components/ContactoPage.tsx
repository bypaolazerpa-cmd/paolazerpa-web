import { useNavigate } from "react-router";
import { NavBar } from "./NavBar";
import { FooterSection } from "./FooterSection";
import { useIsMobile } from "../hooks/useIsMobile";
import { navigateWithScroll } from "../utils/navigation";

const startingPoints = [
  "Ordenar una idea que hoy está dispersa",
  "Revisar una necesidad, un proceso o una forma de trabajar",
  "Empezar por una pregunta simple, sin tener todo resuelto",
];

export function ContactoPage() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const px = isMobile ? "24px" : "80px";

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
              fontSize: isMobile ? "9px" : "10px",
              color: "#F5C842",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "18px",
              fontWeight: 400,
            }}
          >
            Conectemos
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
            Si quieres conversar, aquí puedes elegir la forma más simple de empezar.
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
            Si hay algo que hoy necesita más claridad, estructura o una mirada externa, este es un
            buen lugar para empezar la conversación.
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
                fontSize: "9px",
                color: "#AAAAAA",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "18px",
                fontWeight: 400,
              }}
            >
              Para qué sirve escribir
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
              Para abrir una conversación concreta, no para llenar un formulario eterno.
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
              Suele funcionar mejor cuando todavía no tienes todo ordenado, pero sí una intuición
              clara de que algo necesita mejor diseño.
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
        style={{
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

        <div style={{ maxWidth: "620px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "9px",
              color: "#F5C842",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "14px",
              fontWeight: 400,
            }}
          >
            Qué esperar
          </p>
          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              color: "#D6D0C4",
              lineHeight: "1.75",
              marginBottom: "24px",
            }}
          >
            No hace falta llegar con todo resuelto. Puedes empezar por una consulta breve y ver qué
            forma conviene darle.
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
              fontSize: isMobile ? "10px" : "11px",
              letterSpacing: "2px",
              padding: isMobile ? "16px 28px" : "18px 34px",
              borderRadius: "6px",
              textTransform: "uppercase",
              fontWeight: 400,
              textDecoration: "none",
            }}
          >
            Hablemos por WhatsApp
          </a>
          <div style={{ marginTop: "18px" }}>
            <button
              onClick={() => navigateWithScroll(navigate, "/")}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "14px",
                color: "#D6D0C4",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                cursor: "pointer",
              }}
            >
              → Volver al inicio
            </button>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "#FAF8F4",
          paddingTop: isMobile ? "64px" : "76px",
          paddingBottom: isMobile ? "64px" : "76px",
          paddingLeft: px,
          paddingRight: px,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "620px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "Fraunces, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: isMobile ? "30px" : "40px",
              color: "#1A1A2E",
              lineHeight: "1.2",
              marginBottom: "14px",
            }}
          >
            Si te resulta más fácil, también puedes escribirme por mail.
          </p>
          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              color: "#666666",
              lineHeight: "1.75",
              marginBottom: "22px",
            }}
          >
            WhatsApp es el canal principal, pero si prefieres un primer contacto por correo, está
            bien empezar por ahí.
          </p>
          <a
            href="mailto:by.paolazerpa@gmail.com"
            style={{
              fontFamily: "Fraunces, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: isMobile ? "24px" : "34px",
              color: "#1A1A2E",
              textDecoration: "none",
              display: "block",
              marginBottom: "18px",
            }}
          >
            by.paolazerpa@gmail.com
          </a>
          <a
            href="https://wa.me/5491133652899"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 500,
              fontSize: "14px",
              color: "#C97B5A",
              textDecoration: "none",
            }}
          >
            O abrir WhatsApp directamente →
          </a>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
