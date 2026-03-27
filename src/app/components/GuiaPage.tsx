import { FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import { NavBar } from "./NavBar";
import { FooterSection } from "./FooterSection";
import { useIsMobile } from "../hooks/useIsMobile";
import { GUIDE_CAPTURE_ENDPOINT, GUIDE_PDF_URL } from "../data/guideCapture";
import { navigateWithScroll } from "../utils/navigation";

const benefits = [
  "te ayuda a bajar ruido y ordenar lo que hoy está disperso",
  "te da una forma simple de mirar tu tiempo, energía y prioridades",
  "funciona como primer paso sin volverse una solución complicada",
];

export function GuiaPage() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [hasConsent, setHasConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const px = isMobile ? "24px" : "80px";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);

    try {
      if (GUIDE_CAPTURE_ENDPOINT) {
        const response = await fetch(GUIDE_CAPTURE_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name.trim() || undefined,
            email: email.trim(),
            consent: hasConsent,
            source: "guia-page",
          }),
        });

        if (!response.ok) {
          throw new Error("No se pudo enviar el formulario.");
        }
      }

      setIsSuccess(true);
    } catch {
      setSubmitError("No pudimos procesar tu solicitud ahora. Probá de nuevo en unos minutos.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  fontSize: isMobile ? "9px" : "10px",
                  color: "#F5C842",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  marginBottom: "18px",
                  fontWeight: 400,
                }}
              >
                GUÍA GRATUITA + PLANTILLA DE NOTION
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
                Empieza a ordenar tu sistema personal.
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
                Una guía breve y gratuita para descargar muchas ideas y dar un primer paso con
                estructura.
              </p>

              <div style={{ display: "grid", gap: "12px", maxWidth: "560px" }}>
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
              {!isSuccess ? (
                <>
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
                    Recibir guía
                  </p>

                  <p
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 400,
                      fontSize: "15px",
                      color: "#D6D0C4",
                      lineHeight: "1.75",
                      marginBottom: "22px",
                    }}
                  >
                    Deja tu email y recibe la guía al instante.
                  </p>

                  <form onSubmit={handleSubmit} style={{ display: "grid", gap: "14px" }}>
                    <label style={{ display: "grid", gap: "8px" }}>
                      <span
                        style={{
                          fontFamily: "Space Mono, monospace",
                          fontSize: "9px",
                          color: "#C8C2BA",
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                        }}
                      >
                        Nombre
                      </span>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Tu nombre"
                        style={{
                          height: "50px",
                          borderRadius: "8px",
                          border: "1px solid rgba(250,248,244,0.16)",
                          backgroundColor: "rgba(250,248,244,0.04)",
                          color: "#FAF8F4",
                          padding: "0 14px",
                          fontFamily: "Space Grotesk, sans-serif",
                          fontSize: "15px",
                          outline: "none",
                        }}
                      />
                    </label>

                    <label style={{ display: "grid", gap: "8px" }}>
                      <span
                        style={{
                          fontFamily: "Space Mono, monospace",
                          fontSize: "9px",
                          color: "#C8C2BA",
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                        }}
                      >
                        Email
                      </span>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@email.com"
                        required
                        style={{
                          height: "50px",
                          borderRadius: "8px",
                          border: "1px solid rgba(250,248,244,0.16)",
                          backgroundColor: "rgba(250,248,244,0.04)",
                          color: "#FAF8F4",
                          padding: "0 14px",
                          fontFamily: "Space Grotesk, sans-serif",
                          fontSize: "15px",
                          outline: "none",
                        }}
                      />
                    </label>

                    <label
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        marginTop: "2px",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={hasConsent}
                        onChange={(e) => setHasConsent(e.target.checked)}
                        style={{
                          marginTop: "3px",
                          accentColor: "#F5C842",
                          width: "16px",
                          height: "16px",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "Space Grotesk, sans-serif",
                          fontSize: "13px",
                          color: "#8F8AA5",
                          lineHeight: "1.6",
                        }}
                      >
                        Acepto recibir la guía y comunicaciones ocasionales de Paola Zerpa. Puedes
                        darte de baja cuando quieras.
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={isSubmitting || !hasConsent}
                      style={{
                        marginTop: "4px",
                        height: "52px",
                        borderRadius: "6px",
                        border: "none",
                        backgroundColor: "#F5C842",
                        color: "#1A1A2E",
                        fontFamily: "Space Mono, monospace",
                        fontSize: "11px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        cursor: isSubmitting ? "wait" : hasConsent ? "pointer" : "not-allowed",
                        opacity: isSubmitting ? 0.72 : hasConsent ? 1 : 0.48,
                      }}
                    >
                      {isSubmitting ? "Enviando..." : "Recibir guía"}
                    </button>

                    {submitError ? (
                      <p
                        style={{
                          fontFamily: "Space Grotesk, sans-serif",
                          fontSize: "14px",
                          color: "#F3B2A0",
                          lineHeight: "1.6",
                          margin: 0,
                        }}
                      >
                        {submitError}
                      </p>
                    ) : null}

                    <p
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: "13px",
                        color: "#8F8AA5",
                        lineHeight: "1.6",
                        margin: 0,
                      }}
                    >
                      Es un recurso breve para empezar con claridad, sin tener que ordenar todo de
                      una vez.
                    </p>
                  </form>
                </>
              ) : (
                <div style={{ display: "grid", gap: "16px" }}>
                  <p
                    style={{
                      fontFamily: "Space Mono, monospace",
                      fontSize: "9px",
                      color: "#F5C842",
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      marginBottom: "2px",
                      fontWeight: 400,
                    }}
                  >
                    Listo
                  </p>

                  <h2
                    style={{
                      fontFamily: "Fraunces, serif",
                      fontStyle: "italic",
                      fontWeight: 400,
                      fontSize: isMobile ? "30px" : "34px",
                      color: "#FAF8F4",
                      lineHeight: "1.15",
                      margin: 0,
                    }}
                  >
                    Ya puedes acceder a la guía.
                  </h2>

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
                    Ya puedes abrir la guía y recorrerla a tu ritmo.
                  </p>

                  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "6px" }}>
                    <a
                      href={GUIDE_PDF_URL}
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
                        textTransform: "uppercase",
                        padding: "16px 24px",
                        borderRadius: "6px",
                        textDecoration: "none",
                      }}
                    >
                      Acceder a la guía
                    </a>
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
                      Volver al inicio
                    </button>
                  </div>
                </div>
              )}
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
            borderTop: "1px solid #E8E2DA",
            paddingTop: isMobile ? "28px" : "34px",
            display: "grid",
            gap: "14px",
            textAlign: isMobile ? "left" : "center",
          }}
        >
          <p
            style={{
              fontFamily: "Fraunces, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: isMobile ? "28px" : "36px",
              color: "#1A1A2E",
              lineHeight: "1.2",
              margin: 0,
            }}
          >
            Un primer paso breve para empezar con un poco más de claridad.
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
            Si después quieres profundizar, puedes seguir desde contacto.
          </p>
          <div style={{ display: "flex", justifyContent: isMobile ? "flex-start" : "center", marginTop: "4px" }}>
            <button
              onClick={() => navigateWithScroll(navigate, "/contacto")}
              style={{
                background: "none",
                border: "none",
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "14px",
                color: "#777777",
                cursor: "pointer",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                padding: 0,
              }}
            >
              Ir a contacto →
            </button>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
