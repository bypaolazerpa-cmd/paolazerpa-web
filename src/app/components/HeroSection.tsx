import { useIsMobile } from "../hooks/useIsMobile";
import imageHero from "../../assets/paola-problema-scene.jpg";
import { BrandButton } from "./brand/BrandButton";

export function HeroSection() {
  const isMobile = useIsMobile();
  const isCompactMobile = useIsMobile(400);
  const isTablet = useIsMobile(1100) && !isMobile;

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
          minHeight: isMobile ? "calc(100svh + 110px)" : "calc(100svh - 126px)",
          backgroundColor: "#d8c9b8",
        }}
      >
        <img
          src={imageHero}
          aria-hidden="true"
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: isMobile ? "16% top" : "center center",
            filter: "blur(18px) saturate(0.88) contrast(0.86) brightness(1.08)",
            transform: "scale(1.08)",
            opacity: 0.9,
          }}
        />

        <img
          src={imageHero}
          aria-hidden="true"
          alt=""
          style={{
            position: "absolute",
            top: 0,
            bottom: isMobile ? "auto" : 0,
            left: 0,
            width: isMobile || isTablet ? "100%" : "75%",
            height: isMobile ? "58%" : "100%",
            objectFit: isMobile ? "cover" : "contain",
            objectPosition: isMobile ? "16% center" : "left center",
            filter: "saturate(0.94) contrast(0.94) brightness(1.02)",
            WebkitMaskImage: isMobile
              ? "linear-gradient(180deg, transparent 0%, #000 8%, #000 92%, transparent 100%)"
              : "linear-gradient(90deg, #000 0%, #000 44%, rgba(0,0,0,0.72) 58%, rgba(0,0,0,0.16) 76%, transparent 88%)",
            maskImage: isMobile
              ? "linear-gradient(180deg, transparent 0%, #000 8%, #000 92%, transparent 100%)"
              : "linear-gradient(90deg, #000 0%, #000 44%, rgba(0,0,0,0.72) 58%, rgba(0,0,0,0.16) 76%, transparent 88%)",
          }}
        />

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: isMobile
              ? "radial-gradient(ellipse at 52% 62%, rgba(12,16,14,0.5) 0%, rgba(12,16,14,0.3) 38%, rgba(12,16,14,0.1) 66%, transparent 86%)"
              : "radial-gradient(ellipse at 66% 43%, rgba(12,16,14,0.48) 0%, rgba(12,16,14,0.3) 38%, rgba(12,16,14,0.1) 66%, transparent 86%)",
            pointerEvents: "none",
          }}
        />

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: isMobile ? "auto -18px -18px" : "auto -60px -26px",
            height: isMobile ? "46%" : "18%",
            background: isMobile
              ? "linear-gradient(180deg, rgba(12,16,14,0) 0%, rgba(12,16,14,0.18) 34%, rgba(12,16,14,0.7) 72%, rgba(12,16,14,0.9) 100%)"
              : "linear-gradient(180deg, rgba(12,16,14,0) 0%, rgba(12,16,14,0.32) 54%, rgba(12,16,14,0.68) 100%)",
            WebkitMaskImage: "linear-gradient(180deg, transparent 0%, #000 20%, #000 100%)",
            maskImage: "linear-gradient(180deg, transparent 0%, #000 20%, #000 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: isMobile
              ? "linear-gradient(90deg, rgba(12,16,14,0.02) 0%, rgba(12,16,14,0.08) 42%, rgba(12,16,14,0.6) 100%), linear-gradient(180deg, rgba(12,16,14,0.02) 0%, rgba(12,16,14,0.1) 24%, rgba(12,16,14,0.42) 40%, rgba(12,16,14,0.84) 68%, rgba(12,16,14,0.96) 100%)"
              : "linear-gradient(90deg, rgba(12,16,14,0.28) 0%, rgba(12,16,14,0.18) 28%, rgba(12,16,14,0.16) 46%, rgba(12,16,14,0.42) 65%, rgba(12,16,14,0.72) 100%)",
          }}
        />

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: isMobile ? "18px" : "16%",
            top: isMobile ? "92px" : "132px",
            width: isMobile ? "92px" : "170px",
            height: isMobile ? "92px" : "170px",
            border: "1px solid rgba(250, 248, 244, 0.22)",
            borderRadius: "999px",
            opacity: 0.58,
          }}
        />

        {[
          { top: isMobile ? "15%" : "21%", right: isMobile ? "16%" : "22%", size: isMobile ? 5 : 7 },
          { top: isMobile ? "31%" : "33%", right: isMobile ? "8%" : "12%", size: isMobile ? 4 : 5 },
          { top: isMobile ? "58%" : "18%", right: isMobile ? "20%" : "35%", size: isMobile ? 3 : 4 },
        ].map((sparkle, index) => (
          <span
            key={index}
            aria-hidden="true"
            style={{
              position: "absolute",
              top: sparkle.top,
              right: sparkle.right,
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
              borderRadius: "999px",
              background: "rgba(250, 248, 244, 0.92)",
              boxShadow:
                "0 0 0 4px rgba(240,127,168,0.12), 0 0 18px rgba(250,248,244,0.34)",
              opacity: 0.78,
            }}
          />
        ))}

          <div
            style={{
              position: "relative",
              zIndex: 1,
              minHeight: "inherit",
            display: isMobile ? "flex" : "grid",
            flexDirection: isMobile ? "column" : undefined,
            gridTemplateRows: isMobile ? undefined : "1fr auto",
            padding: isMobile ? "0 24px 18px" : "56px 72px 44px",
          }}
        >
          <div
            style={{
              alignSelf: isMobile ? "auto" : "center",
              display: "grid",
              gap: isMobile ? "24px" : "42px",
              width: "100%",
              maxWidth: isMobile ? "100%" : isTablet ? "500px" : "760px",
              justifySelf: isMobile ? "start" : "end",
              marginTop: isMobile ? "40svh" : "-34px",
              marginRight: isMobile ? "0" : isTablet ? "3%" : "6%",
              marginBottom: isMobile ? "24px" : "0",
            }}
          >
            <div style={{ display: "grid", gap: isMobile ? "18px" : "26px" }}>
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
                  textAlign: "left",
                  textDecorationLine: "underline",
                  textDecorationColor: "rgba(240, 127, 168, 0.68)",
                  textDecorationThickness: "1px",
                  textUnderlineOffset: "6px",
                }}
              >
                Paola Zerpa · Product Designer
              </p>

              <h1
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: isMobile ? (isCompactMobile ? "21px" : "24px") : isTablet ? "32px" : "50px",
                  fontWeight: 600,
                  lineHeight: isMobile ? 1.08 : 1.02,
                  color: "var(--arena-clara)",
                  margin: 0,
                  letterSpacing: 0,
                  maxWidth: isMobile ? "100%" : isTablet ? "500px" : "760px",
                  textAlign: "left",
                  textShadow: "0 12px 32px rgba(12,16,14,0.3)",
                }}
              >
                <span
                  style={{
                    display: "block",
                    whiteSpace: isMobile ? "normal" : "nowrap",
                    fontSize: "inherit",
                    fontWeight: "inherit",
                    lineHeight: "inherit",
                  }}
                >
                  Diseño experiencias digitales
                </span>
                <span
                  style={{
                    display: "block",
                    marginTop: isMobile ? "4px" : "8px",
                    fontSize: "inherit",
                    fontWeight: "inherit",
                    lineHeight: "inherit",
                  }}
                >
                  que acompañan procesos
                </span>
                <span
                  style={{
                    display: "block",
                    fontSize: "inherit",
                    fontWeight: "inherit",
                    lineHeight: "inherit",
                  }}
                >
                  y permiten tomar decisiones.
                </span>
              </h1>

              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: isMobile ? "15px" : "17px",
                  fontWeight: 400,
                  lineHeight: isMobile ? 1.48 : 1.56,
                  color: "rgba(250, 248, 244, 0.96)",
                  margin: 0,
                  maxWidth: isMobile ? "100%" : isTablet ? "430px" : "620px",
                  textAlign: "left",
                  textShadow: "0 2px 18px rgba(12,16,14,0.72)",
                  background: "transparent",
                  padding: 0,
                }}
              >
                Trabajo el producto como un todo: quién lo usa, qué necesita lograr con él, qué
                información necesita para avanzar y cómo todo eso define el recorrido, las
                interacciones y la interfaz.
              </p>
            </div>

            <div
              className="hero-cta-buttons"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: isMobile ? "wrap" : "nowrap",
                gap: isMobile ? "10px" : "14px",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
                maxWidth: isMobile ? "100%" : "none",
                justifySelf: "start",
              }}
            >
              <BrandButton variant="secondary" to="/portfolio">
                Ver portfolio ↗
              </BrandButton>
              <BrandButton variant="secondary" to="/contacto">
                Hablemos ↗
              </BrandButton>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              left: "50%",
              bottom: isMobile ? "56px" : "32px",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: isMobile ? "flex-start" : "flex-end",
              }}
            >
              <button
                onClick={() => scrollTo("selected-work")}
                style={{
                  background:
                    "linear-gradient(180deg, rgba(250,248,244,0.82) 0%, rgba(230,215,198,0.94) 100%)",
                  border: "1px solid rgba(250, 248, 244, 0.72)",
                  borderRadius: "999px",
                  width: isMobile ? "44px" : "64px",
                  height: isMobile ? "44px" : "64px",
                  color: "var(--mar-profundo)",
                  fontFamily: "Space Mono, monospace",
                  fontSize: "0",
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.42), 0 12px 24px rgba(12,16,14,0.18)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}
                aria-label="Scroll para explorar"
              >
                <span className="pz-scroll-mouse" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
