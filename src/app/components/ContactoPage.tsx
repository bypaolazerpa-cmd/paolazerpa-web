import { FooterSection } from "./FooterSection";
import { NavBar } from "./NavBar";
import { BrandButton } from "./brand/BrandButton";
import { PaperNote } from "./brand/PaperNote";
import { SectionLabel } from "./brand/SectionLabel";
import { useIsMobile } from "../hooks/useIsMobile";

const contactReasons = [
  {
    label: "Ordenar una idea",
    text: "Para darle forma antes de convertirla en proyecto.",
  },
  {
    label: "Revisar un proceso",
    text: "Para detectar qué está trabado y qué conviene ajustar.",
  },
  {
    label: "Diseñar una experiencia",
    text: "Para pensar mejor una web, servicio, producto o flujo de trabajo.",
  },
];

const firstMessageIdeas = [
  "qué estás construyendo",
  "qué hoy se siente desordenado",
  "qué quieres revisar o mejorar",
];

export function ContactoPage() {
  const isMobile = useIsMobile();
  const pagePadding = isMobile ? "18px" : "28px";
  const sectionPadding = isMobile ? "56px 22px" : "86px 80px";

  return (
    <div className="pz-page">
      <NavBar />

      <section
        className="pz-dark"
        style={{
          paddingTop: isMobile ? "84px" : "112px",
          paddingBottom: isMobile ? "34px" : "44px",
          paddingLeft: pagePadding,
          paddingRight: pagePadding,
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
            opacity: 0.45,
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: isMobile ? "-88px" : "7%",
            top: isMobile ? "92px" : "118px",
            width: isMobile ? "210px" : "340px",
            height: isMobile ? "210px" : "340px",
            borderRadius: "50%",
            border: "1px solid rgba(230, 215, 198, 0.2)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1260px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 0.95fr) minmax(330px, 0.7fr)",
            gap: isMobile ? "30px" : "60px",
            alignItems: "center",
            minHeight: isMobile ? "auto" : "calc(100svh - 156px)",
          }}
        >
          <div>
            <SectionLabel number="01" tone="light">
              Contacto
            </SectionLabel>

            <h1
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 600,
                fontSize: isMobile ? "34px" : "64px",
                color: "var(--arena-clara)",
                lineHeight: isMobile ? 1.04 : 0.98,
                letterSpacing: 0,
                margin: isMobile ? "22px 0 18px" : "28px 0 24px",
                maxWidth: "720px",
              }}
            >
              Empecemos por una conversación clara.
            </h1>

            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 400,
                fontSize: isMobile ? "16px" : "19px",
                color: "rgba(230, 215, 198, 0.92)",
                lineHeight: "1.58",
                maxWidth: "640px",
                margin: 0,
              }}
            >
              Si tienes una idea, proceso, servicio o sistema que necesita más orden, escríbeme. No
              hace falta llegar con todo definido: podemos empezar por ubicar qué está pasando.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: "14px",
                alignItems: isMobile ? "stretch" : "center",
                marginTop: isMobile ? "28px" : "34px",
              }}
            >
              <a
                className="pz-button pz-button--primary"
                href="https://wa.me/5491133652899"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hablemos por WhatsApp
              </a>
              <BrandButton variant="secondary" to="/#servicios">
                Ver servicios
              </BrandButton>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gap: "18px",
              justifyItems: isMobile ? "start" : "end",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: isMobile ? "360px" : "440px",
                border: "1px solid rgba(230, 215, 198, 0.22)",
                borderRadius: "14px",
                background: "rgba(230, 215, 198, 0.1)",
                padding: isMobile ? "24px 22px" : "30px",
                boxShadow: "inset 0 1px 0 rgba(230, 215, 198, 0.12)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              <p
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.13em",
                  textTransform: "uppercase",
                  color: "var(--citron-loto)",
                  margin: "0 0 16px",
                }}
              >
                Punto de partida
              </p>
              <div style={{ display: "grid", gap: "14px" }}>
                {firstMessageIdeas.map((idea, index) => (
                  <div
                    key={idea}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "42px minmax(0, 1fr)",
                      gap: "14px",
                      alignItems: "start",
                      paddingTop: index === 0 ? 0 : "14px",
                      borderTop:
                        index === 0 ? "none" : "1px solid rgba(230, 215, 198, 0.14)",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "999px",
                        border: "1px solid rgba(230, 215, 198, 0.24)",
                        display: "grid",
                        placeItems: "center",
                        fontFamily: "Space Mono, monospace",
                        fontSize: "11px",
                        color: "var(--arena-clara)",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: isMobile ? "15px" : "16px",
                        lineHeight: 1.55,
                        color: "rgba(230, 215, 198, 0.86)",
                        margin: 0,
                      }}
                    >
                      Cuéntame {idea}.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <PaperNote
              style={{
                justifySelf: isMobile ? "center" : "start",
                marginTop: isMobile ? "-6px" : "-10px",
                marginLeft: isMobile ? "42px" : "-46px",
                maxWidth: isMobile ? "230px" : "280px",
              }}
            >
              Una conversación clara también es una forma de empezar a diseñar.
            </PaperNote>
          </div>
        </div>
      </section>

      <section style={{ padding: sectionPadding }}>
        <div
          style={{
            maxWidth: "1160px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "320px minmax(0, 1fr)",
            gap: isMobile ? "28px" : "72px",
            alignItems: "start",
          }}
        >
          <div
            style={{
              position: isMobile ? "relative" : "sticky",
              top: isMobile ? "auto" : "112px",
              display: "grid",
              gap: "18px",
            }}
          >
            <SectionLabel number="02">Para qué escribirme</SectionLabel>
            <h2
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: isMobile ? "30px" : "42px",
                fontWeight: 600,
                lineHeight: 1.05,
                color: "var(--mar-profundo)",
                margin: 0,
                letterSpacing: 0,
              }}
            >
              Escríbeme si necesitas mirar algo con más claridad.
            </h2>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: isMobile ? "15px" : "17px",
                lineHeight: 1.7,
                color: "rgba(23, 59, 68, 0.76)",
                margin: 0,
              }}
            >
              Una primera conversación sirve para entender si el siguiente paso es ordenar, revisar
              o diseñar mejor.
            </p>
          </div>

          <div style={{ display: "grid", gap: isMobile ? "18px" : "22px" }}>
            {contactReasons.map((reason, index) => (
              <article
                key={reason.label}
                style={{
                  position: "relative",
                  background:
                    "linear-gradient(rgba(23, 59, 68, 0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(23, 59, 68, 0.025) 1px, transparent 1px), rgba(234, 223, 206, 0.76)",
                  backgroundSize: "22px 22px",
                  border: "1px solid rgba(23, 59, 68, 0.16)",
                  borderRadius: "10px",
                  padding: isMobile ? "24px 20px" : "30px 32px",
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    marginBottom: "14px",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: isMobile ? "24px" : "30px",
                      fontWeight: 700,
                      lineHeight: 1.1,
                      color: "var(--mar-profundo)",
                      margin: 0,
                      letterSpacing: 0,
                    }}
                  >
                    {reason.label}
                  </h3>
                  <span
                    aria-hidden="true"
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "999px",
                      border: "1px solid rgba(23, 59, 68, 0.2)",
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0,
                      fontFamily: "Space Mono, monospace",
                      fontSize: "12px",
                      color: "var(--mar-profundo)",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 400,
                    fontSize: isMobile ? "15px" : "16px",
                    color: "rgba(23, 59, 68, 0.76)",
                    lineHeight: "1.72",
                    margin: 0,
                    maxWidth: "720px",
                  }}
                >
                  {reason.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="email"
        style={{
          scrollMarginTop: isMobile ? "84px" : "98px",
          padding: isMobile ? "8px 22px 72px" : "0 80px 104px",
        }}
      >
        <div
          className="pz-dark"
          style={{
            maxWidth: "1160px",
            margin: "0 auto",
            borderRadius: "14px",
            padding: isMobile ? "30px 22px" : "42px",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 0.92fr) minmax(300px, 0.62fr)",
            gap: isMobile ? "26px" : "44px",
            alignItems: "center",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "-74px",
              bottom: "-74px",
              width: isMobile ? "180px" : "270px",
              height: isMobile ? "180px" : "270px",
              borderRadius: "999px",
              border: "1px solid rgba(230, 215, 198, 0.18)",
            }}
          />
          <div style={{ position: "relative", zIndex: 1, display: "grid", gap: "18px" }}>
            <SectionLabel number="03" tone="light">
              Cómo empezar
            </SectionLabel>
            <h2
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: isMobile ? "30px" : "44px",
                fontWeight: 600,
                lineHeight: 1.05,
                color: "var(--arena-clara)",
                margin: 0,
                letterSpacing: 0,
                maxWidth: "720px",
              }}
            >
              WhatsApp es la forma más directa.
            </h2>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: isMobile ? "15px" : "17px",
                lineHeight: 1.65,
                color: "rgba(230, 215, 198, 0.86)",
                margin: 0,
                maxWidth: "650px",
              }}
            >
              Envíame una síntesis breve de lo que quieres ordenar. Si tiene sentido, definimos el
              siguiente paso.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: "14px",
                alignItems: isMobile ? "stretch" : "center",
              }}
            >
              <a
                className="pz-button pz-button--primary"
                href="https://wa.me/5491133652899"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hablemos por WhatsApp
              </a>
              <a className="pz-button pz-button--secondary" href="mailto:paolakzerpa@gmail.com">
                Abrir email
              </a>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              zIndex: 1,
              backgroundColor: "rgba(230, 215, 198, 0.1)",
              border: "1px solid rgba(230, 215, 198, 0.2)",
              borderRadius: "10px",
              padding: isMobile ? "22px 20px" : "28px",
              display: "grid",
              gap: "16px",
            }}
          >
            <p
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                color: "var(--citron-loto)",
                margin: 0,
              }}
            >
              Canal secundario
            </p>
            <a
              href="mailto:paolakzerpa@gmail.com"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 700,
                fontSize: isMobile ? "22px" : "27px",
                color: "var(--arena-clara)",
                textDecoration: "none",
                lineHeight: 1.2,
                overflowWrap: "anywhere",
                wordBreak: "break-word",
              }}
            >
              paolakzerpa@gmail.com
            </a>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "15px",
                lineHeight: 1.65,
                color: "rgba(230, 215, 198, 0.78)",
                margin: 0,
              }}
            >
              Si prefieres mandar más contexto, también puedes escribirme por email.
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
