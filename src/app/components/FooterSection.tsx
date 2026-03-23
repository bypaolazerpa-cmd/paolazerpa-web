import { useIsMobile } from "../hooks/useIsMobile";

export function FooterSection() {
  const isMobile = useIsMobile();

  return (
    <footer
      style={{
        backgroundColor: "#1A1A2E",
        borderTop: "1px solid rgba(214, 208, 196, 0.2)",
        paddingTop: "48px",
        paddingBottom: "48px",
        paddingLeft: isMobile ? "24px" : "80px",
        paddingRight: isMobile ? "24px" : "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative subtle circle */}
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          right: "-80px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          backgroundColor: "#8B6F47",
          opacity: 0.06,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Tagline — Fraunces Italic */}
        <p
          style={{
            fontFamily: "Fraunces, serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: isMobile ? "22px" : "28px",
            color: "#8B6F47",
            lineHeight: "1.4",
            margin: 0,
            maxWidth: isMobile ? "100%" : "640px",
          }}
        >
          Sistema para sostener lo que construyes —
          <br />
          sin depender solo de tu energía.
        </p>

        {/* Attribution */}
        <p
          style={{
            fontFamily: "Space Mono, monospace",
            fontSize: "9px",
            color: "#D6D0C4",
            letterSpacing: "2px",
            textTransform: "uppercase",
            margin: 0,
            fontWeight: 400,
          }}
        >
          — PAOLA ZERPA · DISEÑO &amp; SISTEMAS · 2025
        </p>

        {/* Three pillar dots */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#7C9E8A",
            }}
          />
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#C97B5A",
            }}
          />
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#9B8FB0",
            }}
          />
        </div>
      </div>
    </footer>
  );
}
