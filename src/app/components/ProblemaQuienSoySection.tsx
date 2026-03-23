import image_92a090bf23d02cde3e07b38a242a9cf87315ffb1 from "../../assets/paola-portrait.jpg";
import { useIsMobile } from "../hooks/useIsMobile";

export function ProblemaQuienSoySection() {
  const isMobile = useIsMobile();

  /* ─── MOBILE ─── */
  if (isMobile) {
    return (
      <section
        id="problema"
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
        <div style={{ position: "relative", zIndex: 1 }}>

          {/* ── PROBLEM ── */}
          <p style={{ fontFamily: "Space Mono, monospace", fontSize: "9px", color: "#AAAAAA", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "24px", fontWeight: 400 }}>
            EL PROBLEMA
          </p>

          <h2 style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 400, fontSize: "32px", color: "#1A1A2E", lineHeight: "1.2", marginBottom: "20px" }}>
            No estás desordenada.
            <br />
            Estás saturada.
          </h2>

          <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 400, fontSize: "15px", color: "#555555", lineHeight: "1.7", marginBottom: "48px" }}>
            Pensar en todo al mismo tiempo no es claridad.
            <br />
            Es ruido.
          </p>

          {/* ── DIVIDER ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
            <div style={{ flex: 1, height: "1px", backgroundColor: "#D6D0C4" }} />
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#C97B5A" }} />
            <div style={{ flex: 1, height: "1px", backgroundColor: "#D6D0C4" }} />
          </div>

          {/* ── IDENTITY — inline photo ── */}
          <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <div style={{ flexShrink: 0, width: "80px", height: "80px", borderRadius: "55% 45% 60% 40% / 45% 60% 40% 55%", backgroundColor: "#D4E4DA", overflow: "hidden", position: "relative" }}>
              <img
                src={image_92a090bf23d02cde3e07b38a242a9cf87315ffb1}
                alt="Paola Zerpa"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: "MuseoModerno, sans-serif", fontWeight: 700, fontSize: "20px", color: "#1A1A2E", lineHeight: "1.15", marginBottom: "10px" }}>
                Soy Paola.
              </p>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 400, fontSize: "14px", color: "#555555", lineHeight: "1.65", margin: "0 0 16px 0" }}>
                Diseño sistemas para que puedas sostener lo que construyes sin que todo dependa de tu cabeza.
              </p>
              <a
                href="#enfoque"
                style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 500, fontSize: "13px", color: "#C97B5A", textDecoration: "none" }}
              >
                Conoce mi enfoque →
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ─── DESKTOP ─── */
  return (
    <section
      id="problema"
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
      <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "360px", height: "360px", borderRadius: "50%", background: "radial-gradient(circle, #C97B5A 0%, transparent 70%)", opacity: 0.05, pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 360px", gap: "100px", alignItems: "center", position: "relative", zIndex: 1 }}>

        {/* Left: Problem + Identity */}
        <div>
          <p style={{ fontFamily: "Space Mono, monospace", fontSize: "10px", color: "#AAAAAA", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "32px", fontWeight: 400 }}>
            EL PROBLEMA
          </p>

          <h2 style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 400, fontSize: "52px", color: "#1A1A2E", lineHeight: "1.1", marginBottom: "28px" }}>
            No estás desordenada.
            <br />
            Estás saturada.
          </h2>

          <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 400, fontSize: "18px", color: "#555555", lineHeight: "1.6", marginBottom: "64px", maxWidth: "480px" }}>
            Pensar en todo al mismo tiempo no es claridad.
            <br />
            Es ruido.
          </p>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "48px" }}>
            <div style={{ width: "60px", height: "1px", backgroundColor: "#D6D0C4" }} />
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#C97B5A" }} />
            <div style={{ flex: 1, height: "1px", backgroundColor: "#D6D0C4" }} />
          </div>

          {/* Identity */}
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <div style={{ flexShrink: 0, width: "72px", height: "72px", borderRadius: "55% 45% 60% 40% / 45% 60% 40% 55%", backgroundColor: "#D4E4DA", overflow: "hidden", position: "relative" }}>
              <img
                src={image_92a090bf23d02cde3e07b38a242a9cf87315ffb1}
                alt="Paola Zerpa"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            <div>
              <p style={{ fontFamily: "MuseoModerno, sans-serif", fontWeight: 700, fontSize: "22px", color: "#1A1A2E", lineHeight: "1.2", marginBottom: "8px" }}>
                Soy Paola.
              </p>
              <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 400, fontSize: "15px", color: "#555555", lineHeight: "1.6", marginBottom: "12px", maxWidth: "420px" }}>
                Diseño sistemas para que puedas sostener lo que construyes sin que todo dependa de tu cabeza.
              </p>
              <a
                href="#enfoque"
                style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 500, fontSize: "14px", color: "#C97B5A", textDecoration: "none", transition: "opacity 0.2s ease" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                Conoce mi enfoque →
              </a>
            </div>
          </div>
        </div>

        {/* Right: Photo blob */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
          <div style={{ width: "100%", aspectRatio: "4/5", backgroundColor: "#D4E4DA", borderRadius: "65% 35% 55% 45% / 40% 65% 35% 60%", overflow: "hidden", position: "relative" }}>
            <img
              src={image_92a090bf23d02cde3e07b38a242a9cf87315ffb1}
              alt="Paola Zerpa"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
          <p style={{ fontFamily: "Space Mono, monospace", fontSize: "9px", color: "#C8C2BA", letterSpacing: "2px", textTransform: "uppercase", margin: 0, fontWeight: 400 }}>
            Paola Zerpa · System Designer
          </p>
        </div>
      </div>
    </section>
  );
}
