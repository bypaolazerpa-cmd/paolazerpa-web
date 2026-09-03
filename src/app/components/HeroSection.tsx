import { useIsMobile } from "../hooks/useIsMobile";
import imageHero from "../../assets/paola-problema-scene.jpg";
import { BrandButton } from "./brand/BrandButton";

export function HeroSection() {
  const isMobile = useIsMobile();
  const isCompactMobile = useIsMobile(400);
  const isTablet = useIsMobile(1100) && !isMobile;

  const handleScrollToSelectedWork = () => {
    const target = document.getElementById("selected-work");

    if (!target) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
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
        minHeight: isMobile ? "auto" : "100svh",
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
          minHeight: isMobile ? "auto" : "calc(100svh - 126px)",
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
            filter: "blur(18px) saturate(0.82) contrast(0.9) brightness(0.92)",
            transform: "scaleX(-1) scale(1.08)",
            opacity: 0.48,
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
            left: isMobile || isTablet ? 0 : "auto",
            right: isMobile || isTablet ? "auto" : 0,
            width: "100%",
            height: isMobile ? "58%" : "100%",
            objectFit: isMobile ? "cover" : "contain",
            objectPosition: isMobile ? "16% center" : "left center",
            filter: "saturate(0.94) contrast(0.94) brightness(1.02)",
            transform: "scaleX(-1)",
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
              ? "linear-gradient(90deg, rgba(12,16,14,0.28) 0%, rgba(12,16,14,0.34) 42%, rgba(12,16,14,0.68) 100%), linear-gradient(180deg, rgba(12,16,14,0.06) 0%, rgba(12,16,14,0.22) 24%, rgba(12,16,14,0.68) 40%, rgba(12,16,14,0.9) 68%, rgba(12,16,14,0.97) 100%)"
              : isTablet
                ? "linear-gradient(90deg, rgba(12,16,14,0.9) 0%, rgba(12,16,14,0.82) 35%, rgba(12,16,14,0.58) 62%, rgba(12,16,14,0.12) 100%), linear-gradient(180deg, rgba(12,16,14,0.05) 0%, rgba(12,16,14,0.22) 100%)"
                : "linear-gradient(90deg, rgba(12,16,14,0.82) 0%, rgba(12,16,14,0.68) 35%, rgba(12,16,14,0.34) 62%, rgba(12,16,14,0.07) 100%), linear-gradient(180deg, rgba(12,16,14,0.04) 0%, rgba(12,16,14,0.18) 100%)",
          }}
        />

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: isMobile ? "18px" : "3%",
            top: isMobile ? "92px" : "132px",
            width: isMobile ? "92px" : "170px",
            height: isMobile ? "92px" : "170px",
            border: "1px solid rgba(250, 248, 244, 0.22)",
            borderRadius: "999px",
            opacity: 0.58,
          }}
        />

        {[
          { top: isMobile ? "15%" : "21%", right: isMobile ? "16%" : "5%", size: isMobile ? 5 : 7 },
          { top: isMobile ? "31%" : "33%", right: isMobile ? "8%" : "9%", size: isMobile ? 4 : 5 },
          { top: isMobile ? "58%" : "18%", right: isMobile ? "20%" : "14%", size: isMobile ? 3 : 4 },
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
              padding: isMobile ? "0 24px 24px" : "56px 72px 44px",
          }}
        >
          <div
            style={{
              alignSelf: isMobile ? "auto" : "center",
              display: "grid",
              gap: isMobile ? "24px" : "42px",
              width: "100%",
              maxWidth: isMobile ? "100%" : isTablet ? "500px" : "820px",
              justifySelf: isMobile ? "start" : isTablet ? "end" : "start",
              marginTop: isMobile ? "40svh" : "-34px",
              marginRight: isMobile ? "0" : isTablet ? "3%" : "0",
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
                  fontSize: isMobile ? (isCompactMobile ? "22px" : "24px") : isTablet ? "33px" : "42px",
                  fontWeight: 700,
                  lineHeight: isMobile ? 1.08 : 1.05,
                  color: "var(--arena-clara)",
                  margin: 0,
                  letterSpacing: 0,
                  maxWidth: isMobile ? "100%" : isTablet ? "500px" : "860px",
                  textAlign: "left",
                  textShadow: "0 12px 32px rgba(12,16,14,0.3)",
                }}
              >
                {[
                  "Diseño productos digitales",
                  "para que las personas encuentren",
                  "la información que necesitan,",
                  "entiendan cómo funciona el proceso",
                  "y sepan cómo avanzar.",
                ].map((phrase) => (
                  <span
                    key={phrase}
                    style={{
                      display: isMobile || isTablet ? "inline-block" : "block",
                      fontSize: "inherit",
                      fontWeight: "inherit",
                      lineHeight: "inherit",
                      marginRight: isMobile || isTablet ? "0.25em" : 0,
                    }}
                  >
                    {phrase}
                  </span>
                ))}
              </h1>

              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: isMobile ? "16px" : "18px",
                  fontWeight: 400,
                  lineHeight: isMobile ? 1.45 : 1.5,
                  color: "rgba(250, 248, 244, 0.96)",
                  margin: 0,
                  maxWidth: isMobile ? "100%" : isTablet ? "440px" : "590px",
                  textAlign: "left",
                  textShadow: "0 2px 18px rgba(12,16,14,0.72)",
                  background: "transparent",
                  padding: 0,
                }}
              >
                Trabajo sobre la estrategia, la lógica, la información y la experiencia que hacen
                que un producto funcione bien más allá de la pantalla.
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
              position: isMobile ? "relative" : "absolute",
              left: isMobile ? "auto" : "50%",
              bottom: isMobile ? "auto" : "32px",
              transform: isMobile ? "none" : "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                onClick={handleScrollToSelectedWork}
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
                aria-label="Ir a proyectos seleccionados"
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
