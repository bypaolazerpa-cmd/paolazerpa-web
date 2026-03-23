import { useIsMobile } from "../hooks/useIsMobile";

export function TestimoniosSection() {
  const isMobile = useIsMobile();
  const cards = [1, 2, 3];

  if (isMobile) {
    return (
      <section
        id="testimonios"
        style={{
          backgroundColor: "#FAF8F4",
          paddingTop: "80px",
          paddingBottom: "80px",
          paddingLeft: "24px",
          paddingRight: "24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circle */}
        <div
          style={{
            position: "absolute",
            top: "-50px",
            right: "-40px",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            backgroundColor: "#9B8FB0",
            opacity: 0.07,
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Supertitle */}
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "9px",
              color: "#888888",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "16px",
              fontWeight: 400,
            }}
          >
            06 · TESTIMONIOS
          </p>

          {/* H2 — Fraunces Italic */}
          <h2
            style={{
              fontFamily: "Fraunces, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "32px",
              color: "#1A1A2E",
              lineHeight: "1.2",
              marginBottom: "40px",
            }}
          >
            Lo que dicen quienes ya trabajaron
            <br />
            con este sistema.
          </h2>

          {/* Three placeholder cards — stacked vertically */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginBottom: "32px",
            }}
          >
            {cards.map((i) => (
              <div
                key={i}
                style={{
                  border: "1px dashed #D6D0C4",
                  borderRadius: "16px",
                  padding: "32px",
                  minHeight: "140px",
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontFamily: "Fraunces, serif",
                      fontStyle: "italic",
                      fontSize: "32px",
                      color: "#D6D0C4",
                      marginBottom: "8px",
                      lineHeight: 1,
                      opacity: 0.5,
                    }}
                  >
                    "
                  </p>
                  <p
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 400,
                      fontStyle: "italic",
                      fontSize: "13px",
                      color: "#D6D0C4",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    Testimonio próximamente
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "9px",
              color: "#D6D0C4",
              letterSpacing: "2px",
              textTransform: "uppercase",
              textAlign: "center",
              margin: 0,
              fontWeight: 400,
            }}
          >
            Esta sección se activa con los primeros testimonios.
          </p>
        </div>
      </section>
    );
  }

  // Desktop
  return (
    <section
      id="testimonios"
      style={{
        backgroundColor: "#FAF8F4",
        paddingTop: "120px",
        paddingBottom: "120px",
        paddingLeft: "80px",
        paddingRight: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-60px",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          backgroundColor: "#9B8FB0",
          opacity: 0.07,
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Supertitle */}
        <p
          style={{
            fontFamily: "Space Mono, monospace",
            fontSize: "11px",
            color: "#8B6F47",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "24px",
            fontWeight: 400,
          }}
        >
          06 · TESTIMONIOS
        </p>

        {/* H2 — Fraunces Italic */}
        <h2
          style={{
            fontFamily: "Fraunces, serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "48px",
            color: "#1A1A2E",
            lineHeight: "1.2",
            marginBottom: "64px",
            maxWidth: "720px",
          }}
        >
          Lo que dicen quienes ya trabajaron
          <br />
          con este sistema.
        </h2>

        {/* Three placeholder cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "24px",
            marginBottom: "48px",
          }}
        >
          {cards.map((i) => (
            <div
              key={i}
              style={{
                border: "1px dashed #D6D0C4",
                borderRadius: "16px",
                padding: "40px",
                minHeight: "200px",
                backgroundColor: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Quote mark decoration */}
              <div style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontStyle: "italic",
                    fontSize: "40px",
                    color: "#D6D0C4",
                    marginBottom: "12px",
                    lineHeight: 1,
                    opacity: 0.5,
                  }}
                >
                  "
                </p>
                <p
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: "15px",
                    color: "#D6D0C4",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  Testimonio próximamente
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p
          style={{
            fontFamily: "Space Mono, monospace",
            fontSize: "10px",
            color: "#D6D0C4",
            letterSpacing: "2px",
            textTransform: "uppercase",
            textAlign: "center",
            margin: 0,
            fontWeight: 400,
          }}
        >
          Esta sección se activa con los primeros testimonios.
        </p>
      </div>
    </section>
  );
}
