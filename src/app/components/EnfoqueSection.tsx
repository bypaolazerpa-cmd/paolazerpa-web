import { useIsMobile } from "../hooks/useIsMobile";

const pillars = [
  {
    id: "claridad",
    color: "#7C9E8A",
    emoji: "○",
    name: "Claridad mental",
    line: "Menos ruido. Más dirección.",
    detail: "Entender qué importa y qué no. Tomar decisiones sin agotarte.",
  },
  {
    id: "estructura",
    color: "#C97B5A",
    emoji: "△",
    name: "Estructura simple",
    line: "Sistemas que puedas usar hoy.",
    detail: "Nada complejo. Diseñado para que funcione en tu realidad real.",
  },
  {
    id: "sostenibilidad",
    color: "#9B8FB0",
    emoji: "□",
    name: "Sostenibilidad en el tiempo",
    line: "Que no todo dependa de tu energía.",
    detail: "Lo que construyes debería sostenerse aunque no estés al 100%.",
  },
];

export function EnfoqueSection() {
  const isMobile = useIsMobile();

  /* ─── MOBILE ─── */
  if (isMobile) {
    return (
      <section
        id="enfoque"
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
        <div style={{ position: "absolute", top: "-50px", right: "-40px", width: "180px", height: "180px", borderRadius: "50%", background: "radial-gradient(circle, #C97B5A 0%, transparent 70%)", opacity: 0.07, pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "Space Mono, monospace", fontSize: "9px", color: "#AAAAAA", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "20px", fontWeight: 400 }}>
            ENFOQUE
          </p>

          <h2 style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 400, fontSize: "30px", color: "#1A1A2E", lineHeight: "1.2", marginBottom: "48px" }}>
            Tres pilares.
            <br />
            Un ecosistema.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {pillars.map((p, i) => (
              <div
                key={p.id}
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                  paddingTop: i === 0 ? 0 : "24px",
                  paddingBottom: "24px",
                  borderBottom: i < pillars.length - 1 ? "1px solid #E8E2DA" : "none",
                }}
              >
                {/* Left accent */}
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "4px" }}>
                  <span style={{ fontFamily: "Space Mono, monospace", fontSize: "14px", color: p.color, lineHeight: 1 }}>{p.emoji}</span>
                </div>
                {/* Content */}
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: "Space Mono, monospace", fontSize: "8px", color: p.color, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "6px", fontWeight: 400 }}>
                    {p.name}
                  </p>
                  <p style={{ fontFamily: "MuseoModerno, sans-serif", fontWeight: 700, fontSize: "17px", color: "#1A1A2E", lineHeight: "1.25", marginBottom: "6px" }}>
                    {p.line}
                  </p>
                  <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 400, fontSize: "13px", color: "#777777", lineHeight: "1.6", margin: 0 }}>
                    {p.detail}
                  </p>
                </div>
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
      id="enfoque"
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
      <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, #C97B5A 0%, transparent 70%)", opacity: 0.05, pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "72px" }}>
          <div>
            <p style={{ fontFamily: "Space Mono, monospace", fontSize: "10px", color: "#AAAAAA", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "20px", fontWeight: 400 }}>
              ENFOQUE
            </p>
            <h2 style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 400, fontSize: "48px", color: "#1A1A2E", lineHeight: "1.1", margin: 0 }}>
              Tres pilares.
              <br />
              Un ecosistema.
            </h2>
          </div>
          <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 400, fontSize: "15px", color: "#888888", lineHeight: "1.6", maxWidth: "320px", textAlign: "right", margin: 0 }}>
            Todo en tu vida está conectado.
            <br />
            Diseñamos desde ahí.
          </p>
        </div>

        {/* Three pillars — horizontal list */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0" }}>
          {pillars.map((p, i) => (
            <div
              key={p.id}
              style={{
                paddingTop: "36px",
                paddingBottom: "36px",
                paddingLeft: i === 0 ? 0 : "48px",
                paddingRight: i === pillars.length - 1 ? 0 : "48px",
                borderLeft: i > 0 ? "1px solid #E8E2DA" : "none",
              }}
            >
              {/* Top color line */}
              <div style={{ width: "32px", height: "2px", backgroundColor: p.color, marginBottom: "24px" }} />

              <p style={{ fontFamily: "Space Mono, monospace", fontSize: "9px", color: p.color, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px", fontWeight: 400 }}>
                {p.name}
              </p>

              <p style={{ fontFamily: "MuseoModerno, sans-serif", fontWeight: 700, fontSize: "20px", color: "#1A1A2E", lineHeight: "1.25", marginBottom: "12px" }}>
                {p.line}
              </p>

              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 400, fontSize: "14px", color: "#777777", lineHeight: "1.65", margin: 0 }}>
                {p.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
