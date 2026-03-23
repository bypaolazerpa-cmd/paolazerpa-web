import { useIsMobile } from "../hooks/useIsMobile";

export function ContactoSection() {
  const isMobile = useIsMobile();

  /* ─── MOBILE ─── */
  if (isMobile) {
    return (
      <section
        id="contacto"
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
        <div style={{ position: "absolute", bottom: "-40px", right: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, #7C9E8A 0%, transparent 70%)", opacity: 0.1, pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "Space Mono, monospace", fontSize: "9px", color: "#AAAAAA", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "20px", fontWeight: 400 }}>
            CONECTEMOS
          </p>
          <h2 style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 400, fontSize: "30px", color: "#1A1A2E", lineHeight: "1.2", marginBottom: "40px" }}>
            ¿Por dónde empezamos?
          </h2>

          {/* Card: Juntas */}
          <div style={{ backgroundColor: "#FFFFFF", borderRadius: "12px", padding: "28px 24px", border: "1px solid #E8E2DA", borderTop: "3px solid #7C9E8A", marginBottom: "16px" }}>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 400, fontSize: "13px", color: "#888888", marginBottom: "10px" }}>
              Servicios · Consultoría
            </p>
            <p style={{ fontFamily: "MuseoModerno, sans-serif", fontWeight: 700, fontSize: "20px", color: "#1A1A2E", lineHeight: "1.2", marginBottom: "10px" }}>
              ¿Trabajamos juntas?
            </p>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 400, fontSize: "14px", color: "#666666", lineHeight: "1.6", marginBottom: "24px" }}>
              Diseñamos un sistema para tu trabajo o equipo. Empezamos con una conversación.
            </p>
            <a
              href="https://wa.me/5491133652899"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", backgroundColor: "#1A1A2E", color: "#FAF8F4", fontFamily: "Space Mono, monospace", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", padding: "14px 24px", borderRadius: "6px", textDecoration: "none", fontWeight: 400 }}
            >
              HABLEMOS
            </a>
          </div>

          {/* Card: Sola */}
          <div style={{ backgroundColor: "#FFFFFF", borderRadius: "12px", padding: "28px 24px", border: "1px solid #E8E2DA", borderTop: "3px solid #F5C842" }}>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 400, fontSize: "13px", color: "#888888", marginBottom: "10px" }}>
              Entrada libre · Gratis
            </p>
            <p style={{ fontFamily: "MuseoModerno, sans-serif", fontWeight: 700, fontSize: "20px", color: "#1A1A2E", lineHeight: "1.2", marginBottom: "10px" }}>
              ¿Preferís empezar sola?
            </p>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 400, fontSize: "14px", color: "#666666", lineHeight: "1.6", marginBottom: "24px" }}>
              Descargá la guía gratuita y empezá a entender cómo funciona tu sistema.
            </p>
            <a
              href="/guia"
              style={{ display: "inline-flex", alignItems: "center", backgroundColor: "transparent", color: "#1A1A2E", fontFamily: "Space Mono, monospace", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", padding: "13px 24px", borderRadius: "6px", border: "1px solid #1A1A2E", textDecoration: "none", fontWeight: 400 }}
            >
              DESCARGAR GUÍA
            </a>
          </div>
        </div>
      </section>
    );
  }

  /* ─── DESKTOP ─── */
  return (
    <section
      id="contacto"
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
      <div style={{ position: "absolute", bottom: "-60px", right: "-60px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, #7C9E8A 0%, transparent 65%)", opacity: 0.07, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "-40px", left: "-40px", width: "260px", height: "260px", borderRadius: "50%", background: "radial-gradient(circle, #F5C842 0%, transparent 65%)", opacity: 0.06, pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <p style={{ fontFamily: "Space Mono, monospace", fontSize: "10px", color: "#AAAAAA", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "20px", fontWeight: 400 }}>
          CONECTEMOS
        </p>
        <h2 style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 400, fontSize: "48px", color: "#1A1A2E", lineHeight: "1.1", marginBottom: "64px" }}>
          ¿Por dónde empezamos?
        </h2>

        {/* Two equal panels */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", alignItems: "stretch" }}>
          {/* Left: Juntas */}
          <div
            style={{ backgroundColor: "#FFFFFF", borderRadius: "14px", padding: "48px 44px", border: "1px solid #E8E2DA", borderTop: "3px solid #7C9E8A", display: "flex", flexDirection: "column", transition: "box-shadow 0.2s ease" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(26,26,46,0.07)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}
          >
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 400, fontSize: "13px", color: "#999999", marginBottom: "16px" }}>
              Servicios · Consultoría
            </p>
            <p style={{ fontFamily: "MuseoModerno, sans-serif", fontWeight: 700, fontSize: "28px", color: "#1A1A2E", lineHeight: "1.15", marginBottom: "16px" }}>
              ¿Trabajamos juntas?
            </p>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 400, fontSize: "16px", color: "#666666", lineHeight: "1.65", marginBottom: "40px", maxWidth: "380px" }}>
              Diseñamos un sistema para tu trabajo o equipo. Empezamos con una conversación sin compromiso.
            </p>
            <div style={{ marginTop: "auto" }}>
              <a
                href="https://wa.me/5491133652899"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", backgroundColor: "#1A1A2E", color: "#FAF8F4", fontFamily: "Space Mono, monospace", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", padding: "18px 36px", borderRadius: "6px", textDecoration: "none", fontWeight: 400, transition: "opacity 0.2s ease" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                HABLEMOS →
              </a>
            </div>
          </div>

          {/* Right: Sola */}
          <div
            style={{ backgroundColor: "#FFFFFF", borderRadius: "14px", padding: "48px 44px", border: "1px solid #E8E2DA", borderTop: "3px solid #F5C842", display: "flex", flexDirection: "column", transition: "box-shadow 0.2s ease" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(26,26,46,0.07)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}
          >
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 400, fontSize: "13px", color: "#999999", marginBottom: "16px" }}>
              Entrada libre · Gratis
            </p>
            <p style={{ fontFamily: "MuseoModerno, sans-serif", fontWeight: 700, fontSize: "28px", color: "#1A1A2E", lineHeight: "1.15", marginBottom: "16px" }}>
              ¿Preferís empezar sola?
            </p>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 400, fontSize: "16px", color: "#666666", lineHeight: "1.65", marginBottom: "40px", maxWidth: "380px" }}>
              Descargá la guía gratuita y empezá a entender cómo funciona tu sistema — tu mente, tu tiempo, tu entorno.
            </p>
            <div style={{ marginTop: "auto" }}>
              <a
                href="/guia"
                style={{ display: "inline-flex", alignItems: "center", backgroundColor: "transparent", color: "#1A1A2E", fontFamily: "Space Mono, monospace", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", padding: "17px 36px", borderRadius: "6px", border: "1px solid #1A1A2E", textDecoration: "none", fontWeight: 400, transition: "background 0.2s ease, color 0.2s ease" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.backgroundColor = "#1A1A2E";
                  el.style.color = "#FAF8F4";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.backgroundColor = "transparent";
                  el.style.color = "#1A1A2E";
                }}
              >
                DESCARGAR GUÍA →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
