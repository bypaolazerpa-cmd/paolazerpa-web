import { useIsMobile } from "../hooks/useIsMobile";

const scrollToContact = () => {
  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
};

const cards = [
  {
    id: "personas",
    tag: "PERSONAS",
    tagColor: "#F5C842",
    headline: "Empezá hoy,\na tu ritmo.",
    body: "Descargá la guía gratuita y empezá a ordenar tu mente y tu semana.",
    cta: "Descargar guía",
    ctaHref: "/guia",
    ctaStyle: "solid" as const,
    accentColor: "#F5C842",
    disabled: false,
  },
  {
    id: "equipos",
    tag: "PROCESOS / EQUIPOS",
    tagColor: "#7C9E8A",
    headline: "Diseñemos\nun sistema claro.",
    body: "Diseñamos un sistema para tu trabajo o equipo. Empezamos con una conversación.",
    cta: "Hablemos",
    ctaHref: null,
    ctaStyle: "outline" as const,
    accentColor: "#7C9E8A",
    disabled: false,
  },
  {
    id: "app",
    tag: "APP",
    tagColor: "#9B8FB0",
    headline: "Una app para\ntu sistema personal.",
    body: "Gestión de tu sistema personal sin fricción. Sin depender de tu estado de ánimo.",
    cta: "Próximamente",
    ctaHref: null,
    ctaStyle: "muted" as const,
    accentColor: "#9B8FB0",
    disabled: true,
  },
];

export function CaminosSection() {
  const isMobile = useIsMobile();

  /* ─── MOBILE ─── */
  if (isMobile) {
    return (
      <section
        id="caminos"
        style={{
          backgroundColor: "#1A1A2E",
          paddingTop: "80px",
          paddingBottom: "80px",
          paddingLeft: "24px",
          paddingRight: "24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "260px", height: "260px", borderRadius: "50%", background: "radial-gradient(circle, #F5C842 0%, transparent 70%)", opacity: 0.05, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-40px", left: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, #7C9E8A 0%, transparent 70%)", opacity: 0.06, pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "Space Mono, monospace", fontSize: "9px", color: "#555577", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "20px", fontWeight: 400 }}>
            POR DÓNDE EMPEZAR
          </p>
          <h2 style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 400, fontSize: "34px", color: "#FAF8F4", lineHeight: "1.15", marginBottom: "48px" }}>
            Elegí por dónde empezar.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {cards.map((card) => (
              <div
                key={card.id}
                style={{
                  backgroundColor: "#1E1E36",
                  borderRadius: "12px",
                  padding: "28px 24px",
                  borderTop: `3px solid ${card.accentColor}`,
                  opacity: card.disabled ? 0.55 : 1,
                }}
              >
                <p style={{ fontFamily: "Space Mono, monospace", fontSize: "8px", color: card.accentColor, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "14px", fontWeight: 400 }}>
                  {card.tag}
                </p>
                <p style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 400, fontSize: "22px", color: "#FAF8F4", lineHeight: "1.2", marginBottom: "10px", whiteSpace: "pre-line" }}>
                  {card.headline}
                </p>
                <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 400, fontSize: "14px", color: "#8888AA", lineHeight: "1.65", marginBottom: "24px" }}>
                  {card.body}
                </p>
                {card.ctaStyle === "solid" && !card.disabled && (
                  <a
                    href={card.ctaHref!}
                    style={{ display: "inline-flex", alignItems: "center", backgroundColor: card.accentColor, color: "#1A1A2E", fontFamily: "Space Mono, monospace", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", padding: "14px 24px", borderRadius: "6px", textDecoration: "none", fontWeight: 400 }}
                  >
                    {card.cta}
                  </a>
                )}
                {card.ctaStyle === "outline" && !card.disabled && (
                  <button
                    onClick={scrollToContact}
                    style={{ display: "inline-flex", alignItems: "center", backgroundColor: "transparent", color: card.accentColor, fontFamily: "Space Mono, monospace", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", padding: "13px 24px", borderRadius: "6px", border: `1px solid ${card.accentColor}`, cursor: "pointer", fontWeight: 400 }}
                  >
                    {card.cta}
                  </button>
                )}
                {card.disabled && (
                  <span style={{ fontFamily: "Space Mono, monospace", fontSize: "9px", color: card.accentColor, letterSpacing: "2px", textTransform: "uppercase", opacity: 0.6 }}>
                    {card.cta}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ─── DESKTOP ─── */
  return (
    <section
      id="caminos"
      style={{
        backgroundColor: "#1A1A2E",
        paddingTop: "120px",
        paddingBottom: "120px",
        paddingLeft: "80px",
        paddingRight: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, #F5C842 0%, transparent 65%)", opacity: 0.04, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "360px", height: "360px", borderRadius: "50%", background: "radial-gradient(circle, #7C9E8A 0%, transparent 65%)", opacity: 0.05, pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <p style={{ fontFamily: "Space Mono, monospace", fontSize: "10px", color: "#555577", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "24px", fontWeight: 400 }}>
          POR DÓNDE EMPEZAR
        </p>
        <h2 style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 400, fontSize: "54px", color: "#FAF8F4", lineHeight: "1.1", marginBottom: "72px" }}>
          Elegí por dónde empezar.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", alignItems: "stretch" }}>
          {cards.map((card) => (
            <div
              key={card.id}
              style={{
                backgroundColor: "#1E1E36",
                borderRadius: "14px",
                padding: "40px 32px",
                borderTop: `3px solid ${card.accentColor}`,
                display: "flex",
                flexDirection: "column",
                opacity: card.disabled ? 0.5 : 1,
                transition: "opacity 0.2s ease",
              }}
            >
              <p style={{ fontFamily: "Space Mono, monospace", fontSize: "9px", color: card.accentColor, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "20px", fontWeight: 400 }}>
                {card.tag}
              </p>
              <p style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 400, fontSize: "28px", color: "#FAF8F4", lineHeight: "1.2", marginBottom: "16px", whiteSpace: "pre-line" }}>
                {card.headline}
              </p>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 400, fontSize: "15px", color: "#8888AA", lineHeight: "1.65", marginBottom: "auto", paddingBottom: "32px" }}>
                {card.body}
              </p>

              {card.ctaStyle === "solid" && !card.disabled && (
                <a
                  href={card.ctaHref!}
                  style={{ display: "inline-flex", alignItems: "center", backgroundColor: card.accentColor, color: "#1A1A2E", fontFamily: "Space Mono, monospace", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", padding: "16px 28px", borderRadius: "6px", textDecoration: "none", fontWeight: 400, transition: "opacity 0.2s ease", alignSelf: "flex-start" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                >
                  {card.cta}
                </a>
              )}
              {card.ctaStyle === "outline" && !card.disabled && (
                <button
                  onClick={scrollToContact}
                  style={{ display: "inline-flex", alignItems: "center", backgroundColor: "transparent", color: card.accentColor, fontFamily: "Space Mono, monospace", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", padding: "15px 28px", borderRadius: "6px", border: `1px solid ${card.accentColor}`, cursor: "pointer", fontWeight: 400, transition: "background 0.2s ease", alignSelf: "flex-start" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = `${card.accentColor}18`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
                >
                  {card.cta}
                </button>
              )}
              {card.disabled && (
                <span style={{ fontFamily: "Space Mono, monospace", fontSize: "10px", color: card.accentColor, letterSpacing: "2px", textTransform: "uppercase", opacity: 0.5 }}>
                  {card.cta}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
