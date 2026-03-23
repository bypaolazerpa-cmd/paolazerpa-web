import { useIsMobile } from "../hooks/useIsMobile";

export function ServiciosSection() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section
        id="servicios"
        style={{
          backgroundColor: "#FAF8F4",
          paddingTop: "80px",
          paddingBottom: "80px",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
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
          05 · ELIGE TU CAMINO
        </p>

        {/* H2 — Fraunces Italic */}
        <h2
          style={{
            fontFamily: "Fraunces, serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "32px",
            color: "#1A1A2E",
            lineHeight: "1.15",
            marginBottom: "56px",
          }}
        >
          Tres formas de empezar.
        </h2>

        {/* Three main sections stacked vertically */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* 1. Para individuos */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(26, 26, 46, 0.08)",
              borderRadius: "12px",
              padding: "32px 24px",
            }}
          >
            <h3
              style={{
                fontFamily: "MuseoModerno, sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                color: "#1A1A2E",
                lineHeight: "1.3",
                marginBottom: "16px",
              }}
            >
              Empieza por ordenar tu mente
            </h3>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                color: "#444444",
                lineHeight: "1.7",
                marginBottom: "28px",
              }}
            >
              Si tienes muchas ideas y poca claridad,
              <br />
              comienza con el sistema base.
            </p>
            <button
              style={{
                backgroundColor: "#F5C842",
                color: "#1A1A2E",
                fontFamily: "Space Mono, monospace",
                fontSize: "10px",
                letterSpacing: "2px",
                height: "48px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                textTransform: "uppercase",
                fontWeight: 400,
                width: "100%",
              }}
              onClick={() => window.location.href = "/guia"}
            >
              DESCARGAR GUÍA
            </button>
          </div>

          {/* 2. Para equipos */}
          <div
            style={{
              backgroundColor: "#1A1A2E",
              border: "1px solid rgba(250, 248, 244, 0.12)",
              borderRadius: "12px",
              padding: "32px 24px",
            }}
          >
            <h3
              style={{
                fontFamily: "MuseoModerno, sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                color: "#FAF8F4",
                lineHeight: "1.3",
                marginBottom: "16px",
              }}
            >
              Orden para equipos y negocios
            </h3>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                color: "#D6D0C4",
                lineHeight: "1.7",
                marginBottom: "28px",
              }}
            >
              Diseñamos sistemas claros para operar mejor,
              <br />
              con menos fricción y más estructura.
            </p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "#F5C842",
                fontFamily: "Space Mono, monospace",
                fontSize: "10px",
                letterSpacing: "2px",
                height: "48px",
                border: "1px solid #F5C842",
                borderRadius: "6px",
                cursor: "pointer",
                textTransform: "uppercase",
                fontWeight: 400,
                width: "100%",
              }}
              onClick={() => {
                const contactSection = document.getElementById("contacto");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              HABLEMOS
            </button>
          </div>

          {/* 3. Próximamente */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(26, 26, 46, 0.08)",
              borderRadius: "12px",
              padding: "32px 24px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* "Próximamente" badge */}
            <div
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                backgroundColor: "#9B8FB0",
                color: "#FAF8F4",
                fontFamily: "Space Mono, monospace",
                fontSize: "8px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                padding: "6px 12px",
                borderRadius: "4px",
                fontWeight: 400,
              }}
            >
              PRÓXIMAMENTE
            </div>
            <h3
              style={{
                fontFamily: "MuseoModerno, sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                color: "#1A1A2E",
                lineHeight: "1.3",
                marginBottom: "16px",
                paddingRight: "120px",
              }}
            >
              Próximamente
            </h3>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                color: "#444444",
                lineHeight: "1.7",
                marginBottom: "28px",
              }}
            >
              Una app para diseñar y sostener tu sistema personal en el día a día.
            </p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "#9B8FB0",
                fontFamily: "Space Mono, monospace",
                fontSize: "10px",
                letterSpacing: "2px",
                height: "48px",
                border: "1px solid #9B8FB0",
                borderRadius: "6px",
                cursor: "pointer",
                textTransform: "uppercase",
                fontWeight: 400,
                width: "100%",
              }}
            >
              QUIERO SABER MÁS
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Desktop
  return (
    <section
      id="servicios"
      style={{
        backgroundColor: "#FAF8F4",
        paddingTop: "140px",
        paddingBottom: "140px",
        paddingLeft: "80px",
        paddingRight: "80px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
          05 · ELIGE TU CAMINO
        </p>

        {/* H2 — Fraunces Italic */}
        <h2
          style={{
            fontFamily: "Fraunces, serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "56px",
            color: "#1A1A2E",
            lineHeight: "1.15",
            marginBottom: "80px",
            maxWidth: "700px",
          }}
        >
          Tres formas de empezar.
        </h2>

        {/* Three main cards side by side */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px",
          }}
        >
          {/* 1. Para individuos */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(26, 26, 46, 0.08)",
              borderRadius: "12px",
              padding: "40px 32px",
              display: "flex",
              flexDirection: "column",
              transition: "box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 8px 24px rgba(26, 26, 46, 0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <h3
              style={{
                fontFamily: "MuseoModerno, sans-serif",
                fontWeight: 700,
                fontSize: "24px",
                color: "#1A1A2E",
                lineHeight: "1.3",
                marginBottom: "20px",
              }}
            >
              Empieza por ordenar tu mente
            </h3>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 400,
                fontSize: "17px",
                color: "#444444",
                lineHeight: "1.7",
                marginBottom: "auto",
                paddingBottom: "32px",
              }}
            >
              Si tienes muchas ideas y poca claridad, comienza con el sistema
              base.
            </p>
            <button
              style={{
                backgroundColor: "#F5C842",
                color: "#1A1A2E",
                fontFamily: "Space Mono, monospace",
                fontSize: "11px",
                letterSpacing: "2px",
                padding: "16px 32px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                textTransform: "uppercase",
                fontWeight: 400,
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.opacity = "0.88")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.opacity = "1")
              }
              onClick={() => window.location.href = "/guia"}
            >
              DESCARGAR GUÍA
            </button>
          </div>

          {/* 2. Para equipos */}
          <div
            style={{
              backgroundColor: "#1A1A2E",
              border: "1px solid rgba(250, 248, 244, 0.12)",
              borderRadius: "12px",
              padding: "40px 32px",
              display: "flex",
              flexDirection: "column",
              transition: "box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 8px 24px rgba(26, 26, 46, 0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <h3
              style={{
                fontFamily: "MuseoModerno, sans-serif",
                fontWeight: 700,
                fontSize: "24px",
                color: "#FAF8F4",
                lineHeight: "1.3",
                marginBottom: "20px",
              }}
            >
              Orden para equipos y negocios
            </h3>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 400,
                fontSize: "17px",
                color: "#D6D0C4",
                lineHeight: "1.7",
                marginBottom: "auto",
                paddingBottom: "32px",
              }}
            >
              Diseñamos sistemas claros para operar mejor, con menos fricción y
              más estructura.
            </p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "#F5C842",
                fontFamily: "Space Mono, monospace",
                fontSize: "11px",
                letterSpacing: "2px",
                padding: "16px 32px",
                border: "1px solid #F5C842",
                borderRadius: "6px",
                cursor: "pointer",
                textTransform: "uppercase",
                fontWeight: 400,
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor =
                  "rgba(245, 200, 66, 0.1)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "transparent";
              }}
              onClick={() => {
                const contactSection = document.getElementById("contacto");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              HABLEMOS
            </button>
          </div>

          {/* 3. Próximamente */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(26, 26, 46, 0.08)",
              borderRadius: "12px",
              padding: "40px 32px",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden",
              transition: "box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 8px 24px rgba(26, 26, 46, 0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            {/* "Próximamente" badge */}
            <div
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                backgroundColor: "#9B8FB0",
                color: "#FAF8F4",
                fontFamily: "Space Mono, monospace",
                fontSize: "9px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                padding: "8px 14px",
                borderRadius: "4px",
                fontWeight: 400,
              }}
            >
              PRÓXIMAMENTE
            </div>
            <h3
              style={{
                fontFamily: "MuseoModerno, sans-serif",
                fontWeight: 700,
                fontSize: "24px",
                color: "#1A1A2E",
                lineHeight: "1.3",
                marginBottom: "20px",
                paddingRight: "60px",
              }}
            >
              Próximamente
            </h3>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 400,
                fontSize: "17px",
                color: "#444444",
                lineHeight: "1.7",
                marginBottom: "auto",
                paddingBottom: "32px",
              }}
            >
              Una app para diseñar y sostener tu sistema personal en el día a
              día.
            </p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "#9B8FB0",
                fontFamily: "Space Mono, monospace",
                fontSize: "11px",
                letterSpacing: "2px",
                padding: "16px 32px",
                border: "1px solid #9B8FB0",
                borderRadius: "6px",
                cursor: "pointer",
                textTransform: "uppercase",
                fontWeight: 400,
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor =
                  "rgba(155, 143, 176, 0.08)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "transparent";
              }}
            >
              QUIERO SABER MÁS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}