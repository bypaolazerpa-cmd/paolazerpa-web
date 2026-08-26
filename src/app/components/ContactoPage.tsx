import { FooterSection } from "./FooterSection";
import { NavBar } from "./NavBar";
import { SectionLabel } from "./brand/SectionLabel";
import { useIsMobile } from "../hooks/useIsMobile";

const contactReasons = [
  {
    number: "01",
    label: "Ordenar una idea",
    text: "Darle forma antes de convertirla en proyecto.",
  },
  {
    number: "02",
    label: "Revisar un proceso",
    text: "Entender qué está trabado y qué conviene ajustar.",
  },
  {
    number: "03",
    label: "Diseñar o mejorar una experiencia digital",
    text: "Revisar una web, producto, servicio o flujo para que sea más claro y usable.",
  },
];

const whatsappUrl = "https://wa.me/5491133652899";
const email = "paolakzerpa@gmail.com";

const directLinkStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "48px",
  padding: "0 22px",
  borderRadius: "999px",
  border: "1px solid var(--cta-glass-border)",
  background: "var(--cta-glass-bg)",
  color: "var(--mar-profundo)",
  fontFamily: "Space Mono, monospace",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  textDecoration: "none",
  cursor: "pointer",
  boxShadow: "var(--cta-glass-shadow)",
};

export function ContactoPage() {
  const isMobile = useIsMobile();

  return (
    <div className="pz-page" style={{ overflowX: "hidden" }}>
      <NavBar />

      <main>
        <section
          className="pz-dark"
          style={{
            padding: isMobile ? "80px 24px 24px" : "112px 80px 72px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(rgba(230,215,198,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(230,215,198,0.04) 1px, transparent 1px)",
              backgroundSize: isMobile ? "28px 28px" : "42px 42px",
              opacity: 0.42,
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: isMobile ? "-100px" : "3%",
              top: isMobile ? "-80px" : "-150px",
              width: isMobile ? "230px" : "390px",
              height: isMobile ? "230px" : "390px",
              border: "1px solid rgba(230,215,198,0.2)",
              borderRadius: "50%",
            }}
          />

          <div
            style={{
              maxWidth: "1160px",
              margin: "0 auto",
              position: "relative",
              zIndex: 1,
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1.15fr) minmax(340px, 0.85fr)",
              gap: isMobile ? "24px" : "72px",
              alignItems: "start",
            }}
          >
            <div style={{ marginTop: isMobile ? 0 : "-8px" }}>
              <SectionLabel number="01" tone="light">
                Contacto
              </SectionLabel>

              <h1
                style={{
                  fontFamily: "Fraunces, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: isMobile ? "38px" : "56px",
                  lineHeight: 1.03,
                  color: "var(--arena-clara)",
                  maxWidth: "700px",
                  margin: isMobile ? "24px 0 18px" : "28px 0 22px",
                }}
              >
                Empecemos por una conversación clara.
              </h1>

              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: isMobile ? "16px" : "19px",
                  lineHeight: 1.62,
                  color: "rgba(230,215,198,0.9)",
                  maxWidth: "680px",
                  margin: 0,
                }}
              >
                Si tienes una idea, producto, proceso o forma de trabajo que quieres ordenar, revisar o diseñar mejor, cuéntame qué está pasando y vemos cuál puede ser el siguiente paso.
              </p>

              <div style={{ marginTop: isMobile ? "28px" : "32px" }}>
                <a className="pz-button pz-button--primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  HABLEMOS POR WHATSAPP ↗
                </a>
              </div>
            </div>

            <div style={{ display: "grid", gap: isMobile ? "24px" : "38px" }}>
              <div>
                <p
                  style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--citron-loto)",
                    margin: "0 0 14px",
                  }}
                >
                  PUNTO DE PARTIDA
                </p>
                <p
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontStyle: "italic",
                    fontSize: isMobile ? "28px" : "34px",
                    lineHeight: 1.2,
                    color: "var(--arena-clara)",
                    margin: 0,
                  }}
                >
                  Cuéntame qué estás intentando resolver.
                </p>
              </div>

              <div style={{ display: "grid" }}>
                {contactReasons.map((reason) => (
                  <div
                    key={reason.number}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "32px minmax(0, 1fr)",
                      gap: "14px",
                      padding: isMobile ? "9px 0" : "13px 0",
                      borderTop: "1px solid rgba(230,215,198,0.2)",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        fontFamily: "Space Mono, monospace",
                        fontSize: "11px",
                        color: "var(--citron-loto)",
                        paddingTop: "3px",
                      }}
                    >
                      {reason.number}
                    </span>
                    <div>
                      <h2
                        style={{
                          fontFamily: "MuseoModerno, sans-serif",
                          fontWeight: 700,
                          fontSize: isMobile ? "17px" : "18px",
                          lineHeight: 1.3,
                          color: "var(--arena-clara)",
                          margin: 0,
                        }}
                      >
                        {reason.label}
                      </h2>
                      <p
                        style={{
                          fontFamily: "Space Grotesk, sans-serif",
                          fontSize: isMobile ? "14px" : "15px",
                          lineHeight: 1.55,
                          color: "rgba(230,215,198,0.72)",
                          margin: "5px 0 0",
                        }}
                      >
                        {reason.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            <div
              id="email"
              style={{
                gridColumn: isMobile ? "auto" : "1 / -1",
                borderTop: "1px solid rgba(230,215,198,0.2)",
                borderBottom: "1px solid rgba(230,215,198,0.2)",
                padding: isMobile ? "22px 0 24px" : "24px 0 26px",
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1.2fr) minmax(360px, 0.8fr)",
                gap: isMobile ? "12px" : "40px",
                alignItems: "center",
                scrollMarginTop: isMobile ? "84px" : "98px",
              }}
            >
              <div style={{ display: "grid", gap: isMobile ? "8px" : "10px" }}>
                <p
                  style={{
                    fontFamily: "MuseoModerno, sans-serif",
                    fontWeight: 700,
                    fontSize: isMobile ? "19px" : "22px",
                    color: "var(--arena-clara)",
                    margin: 0,
                  }}
                >
                  WhatsApp es la forma más directa.
                </p>
                <p
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: isMobile ? "15px" : "16px",
                    lineHeight: 1.6,
                    color: "rgba(230,215,198,0.76)",
                    margin: 0,
                    maxWidth: "650px",
                  }}
                >
                  Envíame una síntesis breve de lo que estás intentando resolver. No hace falta que llegues con todo definido.
                </p>
                <a
                  href={`mailto:${email}`}
                  style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: "12px",
                    color: "var(--arena-clara)",
                    textDecorationColor: "rgba(230,215,198,0.55)",
                    textUnderlineOffset: "4px",
                    overflowWrap: "anywhere",
                    width: "fit-content",
                  }}
                >
                  {email}
                </a>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                  justifyContent: isMobile ? "flex-start" : "flex-end",
                }}
              >
                <a className="pz-button pz-button--primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  HABLEMOS POR WHATSAPP ↗
                </a>
                <a href={`mailto:${email}`} style={directLinkStyle}>
                  ESCRIBIR POR EMAIL ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
