import { useNavigate } from "react-router";
import { NavBar } from "./NavBar";
import { FooterSection } from "./FooterSection";
import { useIsMobile } from "../hooks/useIsMobile";
import { GuideCaptureForm } from "./GuideCaptureForm";
import { navigateWithScroll } from "../utils/navigation";

const benefits = [
  "te ayuda a detectar qué sí vale ordenar primero y qué puede esperar",
  "te propone una forma simple de revisar tiempo, energía y prioridades",
  "te da un punto de partida concreto sin convertirlo en un sistema pesado",
];

export function GuiaPage() {
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
          paddingBottom: isMobile ? "74px" : "88px",
          paddingLeft: px,
          paddingRight: px,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-90px",
            right: isMobile ? "-70px" : "-120px",
            width: isMobile ? "260px" : "420px",
            height: isMobile ? "260px" : "420px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #F5C842 0%, transparent 68%)",
            opacity: 0.07,
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "1080px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 0.92fr) minmax(320px, 0.78fr)",
              gap: isMobile ? "30px" : "42px",
              alignItems: "start",
            }}
          >
            <div>
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
                GUÍA GRATUITA
              </p>

              <h1
                style={{
                  fontFamily: "Fraunces, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: isMobile ? "40px" : "60px",
                  color: "#FAF8F4",
                  lineHeight: "1.08",
                  marginBottom: "18px",
                  maxWidth: "700px",
                }}
              >
                Un primer paso para ordenar tu sistema personal.
              </h1>

              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 400,
                  fontSize: isMobile ? "16px" : "18px",
                  color: "#C8C2BA",
                  lineHeight: "1.8",
                  marginBottom: "26px",
                  maxWidth: "620px",
                }}
              >
                Una guía breve y gratuita para revisar prioridades, detectar fricciones y empezar a
                organizar mejor tu forma de sostener lo que haces.
              </p>

              <div style={{ display: "grid", gap: "12px", maxWidth: "560px", marginBottom: isMobile ? "0" : "6px" }}>
                {benefits.map((item) => (
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
                        color: "#D6D0C4",
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

            <div
              style={{
                backgroundColor: "rgba(250,248,244,0.05)",
                border: "1px solid rgba(250,248,244,0.1)",
                borderRadius: "18px",
                padding: isMobile ? "24px 22px" : "28px 28px",
                backdropFilter: "blur(4px)",
              }}
            >
              <GuideCaptureForm variant="full" theme="dark" source="guia-page" />
              <div style={{ marginTop: "16px", display: "grid", gap: "10px" }}>
                <p
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 400,
                    fontSize: "13px",
                    color: "#8F8AA5",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  Si quieres entender mejor mi enfoque antes de descargarla, puedes recorrer el
                  sitio primero.
                </p>
                <button
                  onClick={() => navigateWithScroll(navigate, "/")}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "transparent",
                    color: "#FAF8F4",
                    fontFamily: "Space Mono, monospace",
                    fontSize: "11px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    padding: "15px 24px",
                    borderRadius: "6px",
                    border: "1px solid rgba(250,248,244,0.2)",
                    cursor: "pointer",
                  }}
                >
                  Conocer cómo trabajo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "#FAF8F4",
          paddingTop: isMobile ? "52px" : "64px",
          paddingBottom: isMobile ? "88px" : "96px",
          paddingLeft: px,
          paddingRight: px,
        }}
      >
        <div
          style={{
            maxWidth: "920px",
            margin: "0 auto",
            border: "1px solid #E8E2DA",
            borderRadius: "18px",
            padding: isMobile ? "28px 22px" : "34px 36px",
            display: "grid",
            gap: "14px",
            textAlign: isMobile ? "left" : "center",
            backgroundColor: "#FFFFFF",
          }}
        >
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "9px",
              color: "#8888AA",
              letterSpacing: "3px",
              textTransform: "uppercase",
              margin: 0,
              fontWeight: 400,
            }}
          >
            Siguiente paso
          </p>
          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              color: "#666666",
              lineHeight: "1.75",
              margin: 0,
            }}
          >
            Si después de la guía ves una decisión, un proceso o una experiencia que quieres
            diseñar mejor, la página de contacto es el siguiente paso natural.
          </p>
          <div style={{ display: "flex", justifyContent: isMobile ? "flex-start" : "center", marginTop: "6px" }}>
            <button
              onClick={() => navigateWithScroll(navigate, "/contacto")}
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
              }}
            >
              Ir a contacto
            </button>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
