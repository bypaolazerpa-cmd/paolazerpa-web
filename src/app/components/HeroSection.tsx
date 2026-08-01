import { useIsMobile } from "../hooks/useIsMobile";
import { BrandButton } from "./brand/BrandButton";
import { PaperNote } from "./brand/PaperNote";

export function HeroSection() {
  const isMobile = useIsMobile();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="pz-dark"
      style={{
        paddingTop: isMobile ? "76px" : "96px",
        paddingBottom: isMobile ? "24px" : "30px",
        paddingLeft: isMobile ? "14px" : "28px",
        paddingRight: isMobile ? "14px" : "28px",
        position: "relative",
        overflow: "hidden",
        minHeight: "100svh",
        display: "flex",
        alignItems: "stretch",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1480px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          border: "1px solid rgba(230, 215, 198, 0.18)",
          borderRadius: isMobile ? "22px" : "28px",
          overflow: "hidden",
          minHeight: isMobile ? "calc(100svh - 100px)" : "calc(100svh - 126px)",
          backgroundColor: "#b2aaa0",
        }}
      >
        <video
          src="/paola-hero-video.mov"
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            filter: "blur(28px) saturate(0.86) contrast(0.84) brightness(1.2)",
            transform: "scale(1.12)",
            opacity: 0.98,
          }}
        />

        <video
          src="/paola-hero-video.mov"
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: isMobile ? "-18%" : "8%",
            width: isMobile ? "136%" : "90%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            filter: "saturate(0.92) contrast(0.94) brightness(1.04)",
            WebkitMaskImage: isMobile
              ? "linear-gradient(180deg, transparent 0%, #000 8%, #000 90%, transparent 100%)"
              : "linear-gradient(90deg, transparent 0%, #000 7%, #000 92%, transparent 100%)",
            maskImage: isMobile
              ? "linear-gradient(180deg, transparent 0%, #000 8%, #000 90%, transparent 100%)"
              : "linear-gradient(90deg, transparent 0%, #000 7%, #000 92%, transparent 100%)",
          }}
        />

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: isMobile ? "auto -18px -18px" : "auto -60px -26px",
            height: isMobile ? "34%" : "38%",
            background:
              "linear-gradient(180deg, rgba(12,16,14,0) 0%, rgba(12,16,14,0.4) 42%, rgba(12,16,14,0.72) 100%)",
            backdropFilter: "blur(8px)",
            WebkitMaskImage: "linear-gradient(180deg, transparent 0%, #000 20%, #000 100%)",
            maskImage: "linear-gradient(180deg, transparent 0%, #000 20%, #000 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: isMobile
              ? "linear-gradient(180deg, rgba(12,16,14,0.7) 0%, rgba(12,16,14,0.2) 42%, rgba(12,16,14,0.66) 100%)"
              : "linear-gradient(90deg, rgba(12,16,14,0.76) 0%, rgba(12,16,14,0.5) 25%, rgba(12,16,14,0.08) 50%, rgba(12,16,14,0.1) 78%, rgba(12,16,14,0.22) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            minHeight: "inherit",
            display: "grid",
            gridTemplateRows: "1fr auto",
            padding: isMobile ? "28px 18px 20px" : "56px 72px 44px",
          }}
        >
          <div
            style={{
              alignSelf: "center",
              display: "grid",
              gap: isMobile ? "150px" : "190px",
              maxWidth: "520px",
            }}
          >
            <p
              style={{
                justifySelf: "start",
                fontFamily: "Space Mono, monospace",
                fontSize: isMobile ? "11px" : "13px",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--citron-loto)",
                margin: 0,
                textDecorationLine: "underline",
                textDecorationColor: "rgba(240, 127, 168, 0.68)",
                textDecorationThickness: "1px",
                textUnderlineOffset: "6px",
              }}
            >
              Hola, soy Paola
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: "14px",
                alignItems: isMobile ? "stretch" : "center",
                maxWidth: isMobile ? "280px" : "none",
              }}
            >
              <BrandButton variant="secondary" onClick={() => scrollTo("proyectos")}>
                Ver proyectos ↗
              </BrandButton>
              <BrandButton variant="secondary" to="/contacto#email">
                Hablemos ↗
              </BrandButton>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1fr) auto",
              gap: isMobile ? "20px" : "30px",
              alignItems: "end",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? "14px" : "34px",
                alignItems: isMobile ? "flex-start" : "end",
              }}
            >
              <p
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: isMobile ? "10px" : "12px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(230, 215, 198, 0.92)",
                  margin: 0,
                }}
              >
                <span style={{ color: "var(--citron-loto)" }}>○</span> Diseño sistémico · Producto
                digital · Procesos · Personas
              </p>

              <button
                onClick={() => scrollTo("problema")}
                style={{
                  background:
                    "var(--cta-glass-bg)",
                  border: "1px solid var(--cta-glass-border)",
                  borderRadius: "999px",
                  width: isMobile ? "54px" : "64px",
                  height: isMobile ? "54px" : "64px",
                  color: "var(--mar-profundo)",
                  fontFamily: "Space Mono, monospace",
                  fontSize: "22px",
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "var(--cta-glass-shadow)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}
                aria-label="Scroll para explorar"
              >
                ↓
              </button>
            </div>

            <PaperNote
              style={{
                maxWidth: isMobile ? "238px" : "270px",
                justifySelf: isMobile ? "end" : "end",
                transform: "rotate(2.5deg)",
              }}
            >
              Diseño que ordena, conecta y transforma.
            </PaperNote>
          </div>
        </div>
      </div>
    </section>
  );
}
