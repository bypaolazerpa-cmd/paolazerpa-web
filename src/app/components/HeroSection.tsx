import { useIsMobile } from "../hooks/useIsMobile";
import { AppLink } from "./AppLink";

export function HeroSection() {
  const isMobile = useIsMobile();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const copy = (
    <>
      Convierto ideas y procesos en{" "}
      <strong style={{ fontWeight: 700, color: "#FAF8F4" }}>
        sistemas que mejoran la experiencia
      </strong>{" "}
      y se sostienen en el tiempo.
    </>
  );

  if (isMobile) {
    return (
      <section
        id="hero"
        style={{
          backgroundColor: "#1A1A2E",
          paddingTop: "124px",
          paddingBottom: "88px",
          paddingLeft: "24px",
          paddingRight: "24px",
          position: "relative",
          overflow: "hidden",
          minHeight: "92svh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #F5C842 0%, transparent 70%)",
            opacity: 0.07,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "-80px",
            width: "240px",
            height: "240px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #7C9E8A 0%, transparent 70%)",
            opacity: 0.09,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "40%",
            right: "-40px",
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #9B8FB0 0%, transparent 70%)",
            opacity: 0.08,
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ margin: "0 0 14px 0", textAlign: "left" }}>
            <span
              style={{
                fontFamily: "Fraunces, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "31px",
                color: "#FAF8F4",
                lineHeight: "1.15",
                display: "block",
                marginBottom: "4px",
              }}
            >
              La forma en que vivimos y lo que construimos
            </span>
            <span
              style={{
                fontFamily: "Space Mono, monospace",
                fontWeight: 400,
                fontSize: "12px",
                color: "#F5C842",
                letterSpacing: "2px",
                textTransform: "uppercase",
                lineHeight: "1.5",
                display: "block",
                marginBottom: "12px",
              }}
            >
              nace de la intención
            </span>
            <span
              style={{
                fontFamily: "Fraunces, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "31px",
                color: "#FAF8F4",
                lineHeight: "1.15",
                display: "block",
                marginBottom: "18px",
              }}
            >
              Yo le doy estructura
            </span>
          </h1>

          <div
            style={{
              borderLeft: "2px solid #F5C842",
              paddingLeft: "18px",
              marginTop: "24px",
              marginBottom: "36px",
              maxWidth: "440px",
            }}
          >
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 300,
                fontSize: "17px",
                color: "#B8B0A4",
                lineHeight: "1.75",
                margin: 0,
              }}
            >
              {copy}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <AppLink
              to="/guia"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#F5C842",
                color: "#1A1A2E",
                fontFamily: "Space Mono, monospace",
                fontSize: "10px",
                letterSpacing: "2px",
                height: "52px",
                borderRadius: "6px",
                cursor: "pointer",
                textTransform: "uppercase",
                fontWeight: 400,
                textDecoration: "none",
              }}
            >
              DESCARGA LA GUÍA GRATUITA
            </AppLink>
            <button
              onClick={() => scrollTo("caminos")}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                backgroundColor: "transparent",
                color: "#FAF8F4",
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                height: "52px",
                border: "none",
                cursor: "pointer",
                opacity: 0.76,
              }}
            >
              Cómo trabajo ↓
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="hero"
      style={{
        backgroundColor: "#1A1A2E",
        paddingTop: "156px",
        paddingBottom: "92px",
        paddingLeft: "80px",
        paddingRight: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-160px",
          right: "-120px",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #F5C842 0%, transparent 65%)",
          opacity: 0.05,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "220px",
          right: "80px",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #9B8FB0 0%, transparent 65%)",
          opacity: 0.07,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "40px",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #7C9E8A 0%, transparent 65%)",
          opacity: 0.06,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        <div style={{ maxWidth: "760px" }}>
          <h1 style={{ margin: 0, textAlign: "left" }}>
            <span
              style={{
                fontFamily: "Fraunces, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "68px",
                color: "#FAF8F4",
                lineHeight: "1.04",
                display: "block",
                marginBottom: "6px",
              }}
            >
              La forma en que vivimos y lo que construimos
            </span>
            <span
              style={{
                fontFamily: "Space Mono, monospace",
                fontWeight: 400,
                fontSize: "16px",
                color: "#F5C842",
                letterSpacing: "3px",
                textTransform: "uppercase",
                lineHeight: "1.5",
                display: "block",
                marginBottom: "14px",
              }}
            >
              nace de la intención
            </span>
            <span
              style={{
                fontFamily: "Fraunces, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "68px",
                color: "#FAF8F4",
                lineHeight: "1.04",
                display: "block",
                marginBottom: "24px",
              }}
            >
              Yo le doy estructura
            </span>
          </h1>

          <div
            style={{
              borderLeft: "2px solid #F5C842",
              paddingLeft: "24px",
              marginTop: "30px",
              marginBottom: "42px",
              maxWidth: "610px",
            }}
          >
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 300,
                fontSize: "18px",
                color: "#B8B0A4",
                lineHeight: "1.75",
                margin: 0,
              }}
            >
              {copy}
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
            <AppLink
              to="/guia"
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "#F5C842",
                color: "#1A1A2E",
                fontFamily: "Space Mono, monospace",
                fontSize: "11px",
                letterSpacing: "2px",
                padding: "17px 34px",
                borderRadius: "6px",
                cursor: "pointer",
                textTransform: "uppercase",
                fontWeight: 400,
                textDecoration: "none",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              DESCARGA LA GUÍA GRATUITA
            </AppLink>
            <button
              onClick={() => scrollTo("caminos")}
              style={{
                backgroundColor: "transparent",
                color: "#FAF8F4",
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "15px",
                fontWeight: 400,
                border: "none",
                cursor: "pointer",
                opacity: 0.78,
                transition: "opacity 0.2s ease",
                padding: 0,
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.68")}
            >
              Cómo trabajo ↓
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
