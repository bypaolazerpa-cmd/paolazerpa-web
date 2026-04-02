import { useIsMobile } from "../hooks/useIsMobile";

const whatsappBaseUrl = "https://wa.me/5491133652899";

const createWhatsAppLink = (message: string) =>
  `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;

const services = [
  {
    id: "personal",
    tag: "PARA TI",
    title: "Ordenar tu tiempo y energía",
    body: "Para diseñar una estructura personal más clara: prioridades, decisiones, hábitos y formas de organizar tu vida con más intención y menos improvisación.",
    cta: "Ordenar esto contigo",
    href: createWhatsAppLink(
      "Hola, Paola. Quiero conversar sobre una estructura personal más clara para ordenar mi tiempo, prioridades y energía."
    ),
    backgroundColor: "#F6F0DE",
    borderColor: "rgba(245,200,66,0.22)",
    labelColor: "#8B6F47",
    titleColor: "#1A1A2E",
    bodyColor: "#5D5548",
    buttonBackground: "#1A1A2E",
    buttonBorder: "#1A1A2E",
    buttonColor: "#FAF8F4",
  },
  {
    id: "trabajo",
    tag: "PARA TU TRABAJO",
    title: "Tu trabajo también es un sistema",
    body: "Para revisar procesos, roles, dinámicas y decisiones de estructura que hoy generan fricción o te quitan claridad en el día a día.",
    cta: "Revisar mi forma de trabajo",
    href: createWhatsAppLink(
      "Hola, Paola. Quiero revisar mi forma de trabajo, mis procesos o algunas decisiones de estructura que hoy me generan fricción."
    ),
    backgroundColor: "#EEF3ED",
    borderColor: "rgba(124,158,138,0.22)",
    labelColor: "#5B7D69",
    titleColor: "#1A1A2E",
    bodyColor: "#4F665A",
    buttonBackground: "#1A1A2E",
    buttonBorder: "#1A1A2E",
    buttonColor: "#FAF8F4",
  },
  {
    id: "negocio",
    tag: "PARA TU NEGOCIO",
    title: "Diseñar mejor lo que sostiene tu negocio",
    body: "Para pensar con más criterio un producto, un servicio, una experiencia o una operación que necesita estructura para crecer con coherencia.",
    cta: "Pensar mi negocio contigo",
    href: createWhatsAppLink(
      "Hola, Paola. Quiero pensar mejor un producto, servicio, experiencia u operación de mi negocio para que crezca con más coherencia."
    ),
    backgroundColor: "#F4ECE8",
    borderColor: "rgba(201,123,90,0.22)",
    labelColor: "#A16044",
    titleColor: "#1A1A2E",
    bodyColor: "#64564F",
    buttonBackground: "#1A1A2E",
    buttonBorder: "#1A1A2E",
    buttonColor: "#FAF8F4",
  },
];

export function CaminosSection() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section
        id="servicios"
        style={{
          backgroundColor: "#1A1A2E",
          paddingTop: "92px",
          paddingBottom: "92px",
          paddingLeft: "24px",
          paddingRight: "24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "260px",
            height: "260px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #F5C842 0%, transparent 70%)",
            opacity: 0.05,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-40px",
            left: "-40px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #7C9E8A 0%, transparent 70%)",
            opacity: 0.06,
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "10px",
              color: "#555577",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "18px",
              fontWeight: 400,
            }}
          >
            SERVICIOS
          </p>

          <h2
            style={{
              fontFamily: "Fraunces, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "34px",
              color: "#FAF8F4",
              lineHeight: "1.18",
              marginBottom: "14px",
            }}
          >
            Formas de trabajar conmigo
          </h2>

          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              color: "#8F8AA5",
              lineHeight: "1.75",
              marginBottom: "34px",
            }}
          >
            Diseño sistemas aplicados a distintas capas de la vida, el trabajo y los negocios.
          </p>

          <div style={{ display: "grid", gap: "18px" }}>
            {services.map((service) => (
              <article
                key={service.id}
                style={{
                  backgroundColor: service.backgroundColor,
                  border: `1px solid ${service.borderColor}`,
                  borderRadius: "18px",
                  padding: "28px 24px",
                }}
              >
                <p
                  style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: "10px",
                    color: service.labelColor,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                    fontWeight: 400,
                  }}
                >
                  {service.tag}
                </p>
                <h3
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "28px",
                    color: service.titleColor,
                    lineHeight: "1.14",
                    marginBottom: "14px",
                    maxWidth: "260px",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 400,
                    fontSize: "15px",
                    color: service.bodyColor,
                    lineHeight: "1.7",
                    marginBottom: "26px",
                  }}
                >
                  {service.body}
                </p>
                <a
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    backgroundColor: service.buttonBackground,
                    color: service.buttonColor,
                    fontFamily: "Space Mono, monospace",
                    fontSize: "11px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    padding: "14px 22px",
                    borderRadius: "6px",
                    border: `1px solid ${service.buttonBorder}`,
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                >
                  {service.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="servicios"
      style={{
        backgroundColor: "#1A1A2E",
        paddingTop: "116px",
        paddingBottom: "118px",
        paddingLeft: "80px",
        paddingRight: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-80px",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #F5C842 0%, transparent 70%)",
          opacity: 0.05,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #7C9E8A 0%, transparent 70%)",
          opacity: 0.06,
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1160px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.95fr) minmax(0, 1.05fr)",
            gap: "48px",
            alignItems: "end",
            marginBottom: "42px",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "10px",
                color: "#555577",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "18px",
                fontWeight: 400,
              }}
            >
              SERVICIOS
            </p>
            <h2
              style={{
                fontFamily: "Fraunces, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "54px",
                color: "#FAF8F4",
                lineHeight: "1.08",
                marginBottom: "18px",
              }}
            >
              Formas de trabajar conmigo
            </h2>
          </div>

          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              color: "#8F8AA5",
              lineHeight: "1.8",
              margin: 0,
              maxWidth: "520px",
              justifySelf: "end",
            }}
          >
            Diseño sistemas aplicados a distintas capas de la vida, el trabajo y los negocios.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          {services.map((service) => (
            <article
              key={service.id}
              style={{
                backgroundColor: service.backgroundColor,
                border: `1px solid ${service.borderColor}`,
                borderRadius: "22px",
                padding: "40px 36px",
                display: "flex",
                flexDirection: "column",
                minHeight: "360px",
              }}
            >
              <p
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "10px",
                  color: service.labelColor,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                  fontWeight: 400,
                }}
              >
                {service.tag}
              </p>
              <h3
                style={{
                  fontFamily: "Fraunces, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "36px",
                  color: service.titleColor,
                  lineHeight: "1.06",
                  marginBottom: "18px",
                  maxWidth: "290px",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  color: service.bodyColor,
                  lineHeight: "1.8",
                  marginBottom: "34px",
                }}
              >
                {service.body}
              </p>
              <div style={{ marginTop: "auto" }}>
                <a
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    backgroundColor: service.buttonBackground,
                    color: service.buttonColor,
                    fontFamily: "Space Mono, monospace",
                    fontSize: "11px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    padding: "16px 28px",
                    borderRadius: "6px",
                    border: `1px solid ${service.buttonBorder}`,
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                >
                  {service.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
