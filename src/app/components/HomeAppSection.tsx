import { useIsMobile } from "../hooks/useIsMobile";

export function HomeAppSection() {
  const isMobile = useIsMobile();
  const px = isMobile ? "24px" : "80px";

  return (
    <section
      id="app-futura"
      style={{
        backgroundColor: "#FAF8F4",
        paddingTop: isMobile ? "52px" : "68px",
        paddingBottom: isMobile ? "52px" : "72px",
        paddingLeft: px,
        paddingRight: px,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1040px",
          margin: "0 auto",
          backgroundColor: "#F7F3FB",
          border: "1px solid rgba(155,143,176,0.22)",
          borderRadius: isMobile ? "18px" : "22px",
          padding: isMobile ? "24px 22px" : "34px 34px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 0.95fr) minmax(300px, 0.78fr)",
            gap: isMobile ? "28px" : "36px",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "9px",
                color: "#9B8FB0",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "16px",
                fontWeight: 400,
              }}
            >
              En construcción — app personal
            </p>

            <h2
              style={{
                fontFamily: "Fraunces, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: isMobile ? "30px" : "40px",
                color: "#1A1A2E",
                lineHeight: "1.15",
                marginBottom: "16px",
                maxWidth: "520px",
              }}
            >
              Una extensión natural de este trabajo
            </h2>

            <div style={{ display: "grid", gap: "14px", maxWidth: "590px" }}>
              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 400,
                  fontSize: isMobile ? "15px" : "16px",
                  color: "#666666",
                  lineHeight: "1.8",
                  margin: 0,
                }}
              >
                Estoy desarrollando una herramienta que nace del mismo principio: crear sistemas
                que ayuden a ordenar y dar forma a lo que vivimos y construimos.
              </p>
              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 400,
                  fontSize: isMobile ? "15px" : "16px",
                  color: "#666666",
                  lineHeight: "1.8",
                  margin: 0,
                }}
              >
                Una herramienta que sostiene lo que sientes, lo que estás procesando y lo que
                atraviesas a diario.
              </p>
              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 400,
                  fontSize: isMobile ? "15px" : "16px",
                  color: "#666666",
                  lineHeight: "1.8",
                  margin: 0,
                }}
              >
                Una forma más clara y organizada de acompañar nuestros propios procesos.
              </p>
              <p
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "10px",
                  color: "#9B8FB0",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  margin: "6px 0 0 0",
                  fontWeight: 400,
                }}
              >
                Pronto vas a poder usarla.
              </p>
            </div>
          </div>

          <div
            aria-hidden="true"
            style={{
              position: "relative",
              minHeight: isMobile ? "320px" : "390px",
              width: "100%",
              maxWidth: isMobile ? "320px" : "360px",
              justifySelf: isMobile ? "center" : "end",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: isMobile ? "14px" : "8px",
                left: isMobile ? "0" : "14px",
                width: isMobile ? "170px" : "190px",
                borderRadius: "22px",
                padding: "16px",
                border: "1px solid rgba(155,143,176,0.2)",
                backgroundColor: "rgba(255,255,255,0.58)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "8px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#9B8FB0",
                  marginBottom: "12px",
                }}
              >
                Estado interno
              </div>
              <div style={{ display: "grid", gap: "8px" }}>
                <div
                  style={{
                    height: "10px",
                    borderRadius: "999px",
                    backgroundColor: "rgba(155,143,176,0.24)",
                  }}
                />
                <div
                  style={{
                    height: "10px",
                    width: "68%",
                    borderRadius: "999px",
                    backgroundColor: "rgba(124,158,138,0.42)",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                right: isMobile ? "0" : "8px",
                bottom: 0,
                width: isMobile ? "220px" : "238px",
                height: isMobile ? "280px" : "330px",
                borderRadius: "32px",
                border: "1px solid rgba(155,143,176,0.24)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(232,224,242,0.9) 100%)",
                padding: "18px 16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  marginBottom: "18px",
                }}
              >
                {["#9B8FB0", "#F5C842", "#7C9E8A"].map((color) => (
                  <span
                    key={color}
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: color,
                    }}
                  />
                ))}
              </div>

              <div style={{ display: "grid", gap: "14px" }}>
                <div
                  style={{
                    borderRadius: "18px",
                    backgroundColor: "#FFFFFF",
                    padding: "14px",
                    border: "1px solid rgba(155,143,176,0.12)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Space Mono, monospace",
                      fontSize: "8px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "#9B8FB0",
                      marginBottom: "10px",
                    }}
                  >
                    Diario
                  </div>
                  <div style={{ display: "grid", gap: "8px" }}>
                    <div
                      style={{
                        height: "9px",
                        width: "86%",
                        borderRadius: "999px",
                        backgroundColor: "rgba(26,26,46,0.12)",
                      }}
                    />
                    <div
                      style={{
                        height: "9px",
                        width: "58%",
                        borderRadius: "999px",
                        backgroundColor: "rgba(155,143,176,0.24)",
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    borderRadius: "18px",
                    backgroundColor: "rgba(255,255,255,0.74)",
                    padding: "14px",
                    border: "1px solid rgba(155,143,176,0.12)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Space Mono, monospace",
                      fontSize: "8px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "#9B8FB0",
                      marginBottom: "10px",
                    }}
                  >
                    Procesos
                  </div>
                  <div
                    style={{
                      height: "74px",
                      borderRadius: "14px",
                      background:
                        "linear-gradient(180deg, rgba(124,158,138,0.24) 0%, rgba(155,143,176,0.14) 100%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
