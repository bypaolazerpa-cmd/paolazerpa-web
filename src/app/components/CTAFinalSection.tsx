import { useIsMobile } from "../hooks/useIsMobile";

export function CTAFinalSection() {
  const isMobile = useIsMobile();

  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  /* ─── MOBILE ─── */
  if (isMobile) {
    return (
      <section
        style={{
          backgroundColor: "#1A1A2E",
          paddingTop: "80px",
          paddingBottom: "80px",
          paddingLeft: "24px",
          paddingRight: "24px",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <div style={{ position: "absolute", top: "-60px", left: "50%", transform: "translateX(-50%)", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, #9B8FB0 0%, transparent 65%)", opacity: 0.06, pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 400, fontSize: "30px", color: "#FAF8F4", lineHeight: "1.25", marginBottom: "8px" }}>
            Un sistema no cambia tu vida.
          </p>
          <p style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 400, fontSize: "30px", color: "#F5C842", lineHeight: "1.25", marginBottom: "40px" }}>
            Sostenerlo, sí.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <a
              href="/guia"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#F5C842", color: "#1A1A2E", fontFamily: "Space Mono, monospace", fontSize: "10px", letterSpacing: "2px", height: "52px", borderRadius: "6px", textTransform: "uppercase", fontWeight: 400, textDecoration: "none" }}
            >
              DESCARGAR GUÍA
            </a>
            <button
              onClick={scrollToContact}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "transparent", color: "#FAF8F4", fontFamily: "Space Mono, monospace", fontSize: "10px", letterSpacing: "2px", height: "52px", borderRadius: "6px", border: "1px solid rgba(250,248,244,0.2)", textTransform: "uppercase", fontWeight: 400, cursor: "pointer" }}
            >
              HABLEMOS
            </button>
          </div>
        </div>
      </section>
    );
  }

  /* ─── DESKTOP ─── */
  return (
    <section
      style={{
        backgroundColor: "#1A1A2E",
        paddingTop: "120px",
        paddingBottom: "120px",
        paddingLeft: "80px",
        paddingRight: "80px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, #9B8FB0 0%, transparent 60%)", opacity: 0.05, pointerEvents: "none" }} />

      <div style={{ maxWidth: "720px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <p style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 400, fontSize: "52px", color: "#FAF8F4", lineHeight: "1.2", marginBottom: "4px" }}>
          Un sistema no cambia tu vida.
        </p>
        <p style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 400, fontSize: "52px", color: "#F5C842", lineHeight: "1.2", marginBottom: "56px" }}>
          Sostenerlo, sí.
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", alignItems: "center" }}>
          <a
            href="/guia"
            style={{ display: "inline-flex", alignItems: "center", backgroundColor: "#F5C842", color: "#1A1A2E", fontFamily: "Space Mono, monospace", fontSize: "11px", letterSpacing: "2px", padding: "18px 36px", borderRadius: "6px", textTransform: "uppercase", fontWeight: 400, textDecoration: "none", transition: "opacity 0.2s ease" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            DESCARGAR GUÍA
          </a>
          <button
            onClick={scrollToContact}
            style={{ display: "inline-flex", alignItems: "center", backgroundColor: "transparent", color: "#FAF8F4", fontFamily: "Space Mono, monospace", fontSize: "11px", letterSpacing: "2px", padding: "17px 36px", borderRadius: "6px", border: "1px solid rgba(250,248,244,0.2)", textTransform: "uppercase", fontWeight: 400, cursor: "pointer", transition: "border-color 0.2s ease, color 0.2s ease" }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(250,248,244,0.5)";
              el.style.color = "#FAF8F4";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(250,248,244,0.2)";
              el.style.color = "#FAF8F4";
            }}
          >
            HABLEMOS
          </button>
        </div>
      </div>
    </section>
  );
}
