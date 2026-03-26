import { useIsMobile } from "../hooks/useIsMobile";

const scrollToContact = () => {
  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
};

const primaryPaths = [
  {
    id: "personas",
    tag: "PARA TI",
    accentColor: "#F5C842",
    title: "Empieza por tu sistema personal.",
    body: "Descarga la guía gratuita y empieza a ordenar tu mente, tu tiempo y tu semana con más claridad.",
    cta: "Descargar guía gratuita",
    href: "/guia",
    style: "solid" as const,
  },
  {
    id: "equipos",
    tag: "PARA TU EQUIPO DE TRABAJO",
    accentColor: "#7C9E8A",
    title: "Diseñemos un sistema para tu trabajo.",
    body: "Si hay fricción, desorden o saturación en tu equipo o procesos, podemos empezar por una conversación.",
    cta: "Hablemos",
    href: null,
    style: "outline" as const,
  },
];

export function CaminosSection() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section
        id="caminos"
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
              fontSize: "9px",
              color: "#555577",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "18px",
              fontWeight: 400,
            }}
          >
            POR DÓNDE EMPEZAR
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
            Elegí por dónde empezar.
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
            Dos entradas según lo que hoy necesites ordenar.
          </p>

          <div style={{ display: "grid", gap: "18px", marginBottom: "18px" }}>
            {primaryPaths.map((path, index) => (
              <article
                key={path.id}
                style={{
                  backgroundColor: index === 0 ? "#F3EBD1" : "rgba(250,248,244,0.04)",
                  border: `1px solid ${index === 0 ? "rgba(245,200,66,0.24)" : "rgba(124,158,138,0.18)"}`,
                  borderRadius: "18px",
                  padding: "28px 24px",
                }}
              >
                <p
                  style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: "9px",
                    color: index === 0 ? "#8B6F47" : path.accentColor,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                    fontWeight: 400,
                  }}
                >
                  {path.tag}
                </p>
                <h3
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "30px",
                    color: index === 0 ? "#1A1A2E" : "#FAF8F4",
                    lineHeight: "1.18",
                    marginBottom: "14px",
                  }}
                >
                  {path.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 400,
                    fontSize: "15px",
                    color: index === 0 ? "#5D5548" : "#9A96AE",
                    lineHeight: "1.7",
                    marginBottom: "26px",
                  }}
                >
                  {path.body}
                </p>
                {path.style === "solid" ? (
                  <a
                    href={path.href!}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      backgroundColor: "#1A1A2E",
                      color: "#FAF8F4",
                      fontFamily: "Space Mono, monospace",
                      fontSize: "10px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      padding: "15px 22px",
                      borderRadius: "6px",
                      textDecoration: "none",
                      fontWeight: 400,
                    }}
                  >
                    {path.cta}
                  </a>
                ) : (
                  <button
                    onClick={scrollToContact}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      backgroundColor: "transparent",
                      color: path.accentColor,
                      fontFamily: "Space Mono, monospace",
                      fontSize: "10px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      padding: "14px 22px",
                      borderRadius: "6px",
                      border: `1px solid ${path.accentColor}`,
                      cursor: "pointer",
                      fontWeight: 400,
                    }}
                  >
                    {path.cta}
                  </button>
                )}
              </article>
            ))}
          </div>

          <article
            style={{
              backgroundColor: "rgba(250,248,244,0.02)",
              border: "1px solid rgba(250,248,244,0.12)",
              borderRadius: "14px",
              padding: "22px 20px",
              marginBottom: "18px",
            }}
          >
            <p
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "9px",
                color: "#D6D0C4",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "14px",
                fontWeight: 400,
              }}
            >
              PARA TU NEGOCIO
            </p>
            <p
              style={{
                fontFamily: "MuseoModerno, sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                color: "#FAF8F4",
                lineHeight: "1.3",
                marginBottom: "10px",
              }}
            >
              ¿Necesitas ordenar las operaciones de tu negocio?
            </p>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                color: "#B8B0A4",
                lineHeight: "1.7",
                marginBottom: "20px",
              }}
            >
              Si sientes que los procesos internos no acompañan el crecimiento, podemos empezar por
              ahí.
            </p>
            <button
              onClick={scrollToContact}
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "transparent",
                color: "#FAF8F4",
                fontFamily: "Space Mono, monospace",
                fontSize: "10px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                padding: "14px 20px",
                borderRadius: "6px",
                border: "1px solid rgba(250,248,244,0.18)",
                cursor: "pointer",
                fontWeight: 400,
              }}
            >
              Hablemos
            </button>
          </article>

          <article
            style={{
              backgroundColor: "rgba(250,248,244,0.03)",
              border: "1px solid rgba(155,143,176,0.18)",
              borderRadius: "14px",
              padding: "22px 20px",
              opacity: 0.84,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "12px",
                marginBottom: "14px",
              }}
            >
              <p
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "9px",
                  color: "#9B8FB0",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  margin: 0,
                  fontWeight: 400,
                }}
              >
                PRÓXIMAMENTE
              </p>
              <span
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "8px",
                  color: "#9B8FB0",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  opacity: 0.72,
                }}
              >
                Próximamente
              </span>
            </div>
            <p
              style={{
                fontFamily: "MuseoModerno, sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                color: "#E6E1F0",
                lineHeight: "1.3",
                marginBottom: "10px",
              }}
            >
              Una herramienta para sostener tu sistema.
            </p>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                color: "#8F8AA5",
                lineHeight: "1.7",
                margin: 0,
              }}
            >
              Una app pensada para acompañar tu sistema personal en la vida real. En desarrollo.
            </p>
          </article>
        </div>
      </section>
    );
  }

  return (
    <section
      id="caminos"
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
                fontSize: "9px",
                color: "#555577",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "18px",
                fontWeight: 400,
              }}
            >
              POR DÓNDE EMPEZAR
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
              Elegí por dónde empezar.
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
            Dos entradas según lo que hoy necesites ordenar.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr)) minmax(250px, 0.72fr)",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          <article
            style={{
              backgroundColor: "#F3EBD1",
              border: "1px solid rgba(245,200,66,0.22)",
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
                fontSize: "9px",
                color: "#8B6F47",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "20px",
                fontWeight: 400,
              }}
            >
              PARA TI
            </p>
            <h3
              style={{
                fontFamily: "Fraunces, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "42px",
                color: "#1A1A2E",
                lineHeight: "1.08",
                marginBottom: "18px",
                maxWidth: "380px",
              }}
            >
              Empieza por tu sistema personal.
            </h3>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#5D5548",
                lineHeight: "1.8",
                marginBottom: "34px",
                maxWidth: "390px",
              }}
            >
              Descarga la guía gratuita y empieza a ordenar tu mente, tu tiempo y tu semana con más
              claridad.
            </p>
            <div style={{ marginTop: "auto" }}>
              <a
                href="/guia"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  backgroundColor: "#1A1A2E",
                  color: "#FAF8F4",
                  fontFamily: "Space Mono, monospace",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  padding: "17px 28px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: 400,
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.86")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                Descargar guía gratuita
              </a>
            </div>
          </article>

          <article
            style={{
              backgroundColor: "rgba(250,248,244,0.04)",
              border: "1px solid rgba(124,158,138,0.18)",
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
                fontSize: "9px",
                color: "#7C9E8A",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "20px",
                fontWeight: 400,
              }}
            >
              PARA TU EQUIPO DE TRABAJO
            </p>
            <h3
              style={{
                fontFamily: "Fraunces, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "38px",
                color: "#FAF8F4",
                lineHeight: "1.12",
                marginBottom: "18px",
                maxWidth: "420px",
              }}
            >
              Diseñemos un sistema para tu trabajo.
            </h3>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#9A96AE",
                lineHeight: "1.8",
                marginBottom: "34px",
                maxWidth: "420px",
              }}
            >
              Si hay fricción, desorden o saturación en tu equipo o procesos, podemos empezar por
              una conversación.
            </p>
            <div style={{ marginTop: "auto" }}>
              <button
                onClick={scrollToContact}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  backgroundColor: "transparent",
                  color: "#7C9E8A",
                  fontFamily: "Space Mono, monospace",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  padding: "16px 28px",
                  borderRadius: "6px",
                  border: "1px solid #7C9E8A",
                  cursor: "pointer",
                  fontWeight: 400,
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "rgba(124,158,138,0.12)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "transparent")}
              >
                Hablemos
              </button>
            </div>
          </article>

          <div style={{ display: "grid", gap: "24px" }}>
            <article
              style={{
                backgroundColor: "rgba(250,248,244,0.02)",
                border: "1px solid rgba(250,248,244,0.12)",
                borderRadius: "18px",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                minHeight: "168px",
              }}
            >
              <p
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "9px",
                  color: "#D6D0C4",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                  fontWeight: 400,
                }}
              >
                PARA TU NEGOCIO
              </p>
              <p
                style={{
                  fontFamily: "MuseoModerno, sans-serif",
                  fontWeight: 700,
                  fontSize: "22px",
                  color: "#FAF8F4",
                  lineHeight: "1.28",
                  marginBottom: "12px",
                }}
              >
                ¿Necesitas ordenar las operaciones de tu negocio?
              </p>
              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "#B8B0A4",
                  lineHeight: "1.75",
                  marginBottom: "18px",
                }}
              >
                Si sientes que los procesos internos no acompañan el crecimiento, podemos empezar
                por ahí.
              </p>
              <div style={{ marginTop: "auto" }}>
                <button
                  onClick={scrollToContact}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    backgroundColor: "transparent",
                    color: "#FAF8F4",
                    fontFamily: "Space Mono, monospace",
                    fontSize: "10px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    padding: "14px 20px",
                    borderRadius: "6px",
                    border: "1px solid rgba(250,248,244,0.18)",
                    cursor: "pointer",
                    fontWeight: 400,
                  }}
                >
                  Hablemos
                </button>
              </div>
            </article>

            <article
              style={{
                backgroundColor: "rgba(250,248,244,0.03)",
                border: "1px solid rgba(155,143,176,0.16)",
                borderRadius: "18px",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "168px",
                opacity: 0.82,
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "18px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Space Mono, monospace",
                      fontSize: "9px",
                      color: "#9B8FB0",
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      margin: 0,
                      fontWeight: 400,
                    }}
                  >
                    PRÓXIMAMENTE
                  </p>
                  <span
                    style={{
                      fontFamily: "Space Mono, monospace",
                      fontSize: "8px",
                      color: "#9B8FB0",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      opacity: 0.72,
                    }}
                  >
                    Próximamente
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "MuseoModerno, sans-serif",
                    fontWeight: 700,
                    fontSize: "24px",
                    color: "#E6E1F0",
                    lineHeight: "1.28",
                    marginBottom: "14px",
                  }}
                >
                  Una herramienta para sostener tu sistema.
                </p>
                <p
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "#8F8AA5",
                    lineHeight: "1.75",
                    margin: 0,
                  }}
                >
                  Una app pensada para acompañar tu sistema personal en la vida real. En desarrollo.
                </p>
              </div>
              <div style={{ marginTop: "28px", paddingTop: "20px", borderTop: "1px solid rgba(155,143,176,0.18)" }}>
                <span
                  style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: "10px",
                    color: "#9B8FB0",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    opacity: 0.7,
                  }}
                >
                  Próximamente
                </span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
