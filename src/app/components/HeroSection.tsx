import { useIsMobile } from "../hooks/useIsMobile";

export function HeroSection() {
  const isMobile = useIsMobile();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  /* ─── MOBILE ─── */
  if (isMobile) {
    return (
      <section
        id="hero"
        style={{
          backgroundColor: "#1A1A2E",
          paddingTop: "130px",
          paddingBottom: "96px",
          paddingLeft: "24px",
          paddingRight: "24px",
          position: "relative",
          overflow: "hidden",
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "280px", height: "280px", borderRadius: "50%", background: "radial-gradient(circle, #F5C842 0%, transparent 70%)", opacity: 0.07, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "40px", left: "-80px", width: "240px", height: "240px", borderRadius: "50%", background: "radial-gradient(circle, #7C9E8A 0%, transparent 70%)", opacity: 0.09, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "40%", right: "-40px", width: "160px", height: "160px", borderRadius: "50%", background: "radial-gradient(circle, #9B8FB0 0%, transparent 70%)", opacity: 0.08, pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Supertitle */}
          <p style={{ fontFamily: "Space Mono, monospace", fontSize: "9px", color: "#C97B5A", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "28px", fontWeight: 400 }}>
            DISEÑO · SISTEMAS · CLARIDAD
          </p>

          {/* Headline block */}
          <h1 style={{ margin: "0 0 20px 0" }}>
            <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 400, fontSize: "38px", color: "#FAF8F4", lineHeight: "1.15", display: "block", marginBottom: "4px" }}>
              Nadie nos enseñó a diseñar
            </span>
            <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 400, fontSize: "38px", color: "#FAF8F4", lineHeight: "1.15", display: "block", marginBottom: "24px" }}>
              nuestro sistema de vida.
            </span>
            <span style={{ fontFamily: "Space Grotesk, sans-serif", fontStyle: "normal", fontWeight: 600, fontSize: "22px", color: "#F5C842", display: "block", letterSpacing: "0.2px" }}>
              Yo sí lo hago.
            </span>
          </h1>

          {/* Subtext */}
          <div style={{ borderLeft: "2px solid #F5C842", paddingLeft: "16px", marginBottom: "44px", marginTop: "28px" }}>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 300, fontSize: "15px", color: "#B8B0A4", lineHeight: "1.75", margin: 0 }}>
              Diseño sistemas de vida y trabajo para que sostengas lo que estás construyendo sin depender solo de tu energía.
            </p>
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <a
              href="/guia"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#F5C842", color: "#1A1A2E", fontFamily: "Space Mono, monospace", fontSize: "10px", letterSpacing: "2px", height: "52px", borderRadius: "6px", cursor: "pointer", textTransform: "uppercase", fontWeight: 400, textDecoration: "none" }}
            >
              DESCARGAR GUÍA
            </a>
            <button
              onClick={() => scrollTo("caminos")}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", backgroundColor: "transparent", color: "#FAF8F4", fontFamily: "Space Grotesk, sans-serif", fontSize: "14px", fontWeight: 400, height: "52px", border: "none", cursor: "pointer", opacity: 0.7 }}
            >
              Ver cómo funciona ↓
            </button>
          </div>
        </div>
      </section>
    );
  }

  /* ─── DESKTOP ─── */
  return (
    <section
      id="hero"
      style={{
        backgroundColor: "#1A1A2E",
        paddingTop: "200px",
        paddingBottom: "140px",
        paddingLeft: "80px",
        paddingRight: "80px",
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Decorative circles — soft radial gradients */}
      <div style={{ position: "absolute", top: "-160px", right: "-120px", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, #F5C842 0%, transparent 65%)", opacity: 0.05, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "220px", right: "80px", width: "380px", height: "380px", borderRadius: "50%", background: "radial-gradient(circle, #9B8FB0 0%, transparent 65%)", opacity: 0.07, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "60px", left: "40px", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, #7C9E8A 0%, transparent 65%)", opacity: 0.07, pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1, width: "100%" }}>
        {/* Supertitle */}
        <p style={{ fontFamily: "Space Mono, monospace", fontSize: "11px", color: "#C97B5A", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "40px", fontWeight: 400 }}>
          DISEÑO · SISTEMAS · CLARIDAD
        </p>

        {/* Headline */}
        <h1 style={{ margin: "0 0 20px 0", maxWidth: "860px" }}>
          <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 400, fontSize: "72px", color: "#FAF8F4", lineHeight: "1.05", display: "block" }}>
            Nadie nos enseñó a diseñar
          </span>
          <span style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 400, fontSize: "72px", color: "#FAF8F4", lineHeight: "1.05", display: "block", marginBottom: "32px" }}>
            nuestro sistema de vida.
          </span>
          <span style={{ fontFamily: "Space Grotesk, sans-serif", fontStyle: "normal", fontWeight: 600, fontSize: "32px", color: "#F5C842", display: "block", letterSpacing: "0.2px" }}>
            Yo sí lo hago.
          </span>
        </h1>

        {/* Subtext */}
        <div style={{ borderLeft: "2px solid #F5C842", paddingLeft: "24px", marginBottom: "60px", marginTop: "40px", maxWidth: "540px" }}>
          <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 300, fontSize: "18px", color: "#B8B0A4", lineHeight: "1.75", margin: 0 }}>
            Diseño sistemas de vida y trabajo para que sostengas lo que estás construyendo sin depender solo de tu energía.
          </p>
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <a
            href="/guia"
            style={{ display: "inline-flex", alignItems: "center", backgroundColor: "#F5C842", color: "#1A1A2E", fontFamily: "Space Mono, monospace", fontSize: "11px", letterSpacing: "2px", padding: "18px 36px", borderRadius: "6px", cursor: "pointer", textTransform: "uppercase", fontWeight: 400, textDecoration: "none", transition: "opacity 0.2s ease" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            DESCARGAR GUÍA
          </a>
          <button
            onClick={() => scrollTo("caminos")}
            style={{ backgroundColor: "transparent", color: "#FAF8F4", fontFamily: "Space Grotesk, sans-serif", fontSize: "15px", fontWeight: 400, border: "none", cursor: "pointer", opacity: 0.6, transition: "opacity 0.2s ease", padding: 0 }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.6")}
          >
            Ver cómo funciona ↓
          </button>
        </div>
      </div>
    </section>
  );
}
