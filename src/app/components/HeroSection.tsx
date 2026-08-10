import { useIsMobile } from "../hooks/useIsMobile";
import imageHero from "../../assets/paola-problema-scene.jpg";
import { BrandButton } from "./brand/BrandButton";
import { PaperNote } from "./brand/PaperNote";

export function HeroSection() {
  const isMobile = useIsMobile();

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
            objectPosition: "center center",
            filter: "blur(24px) saturate(0.9) contrast(0.86) brightness(1.12)",
            transform: "scale(1.12)",
            opacity: 0.92,
          }}
        />

        <img
          src={imageHero}
          aria-hidden="true"
          alt=""
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            filter: "saturate(0.94) contrast(0.94) brightness(1.02)",
            WebkitMaskImage: "linear-gradient(180deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
            maskImage: "linear-gradient(180deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
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
              ? "linear-gradient(90deg, rgba(12,16,14,0.08) 0%, rgba(12,16,14,0.28) 34%, rgba(12,16,14,0.62) 72%, rgba(12,16,14,0.72) 100%), linear-gradient(180deg, rgba(12,16,14,0.28) 0%, rgba(12,16,14,0.06) 42%, rgba(12,16,14,0.62) 100%)"
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
            display: "grid",
            gridTemplateRows: "1fr auto",
            padding: isMobile ? "28px 18px 20px" : "56px 72px 44px",
          }}
        >
          <div
            style={{
              alignSelf: "center",
              display: "grid",
              gap: isMobile ? "24px" : "34px",
              width: "100%",
              maxWidth: isMobile ? "calc(100vw - 48px)" : "560px",
              justifySelf: isMobile ? "end" : "end",
              marginTop: isMobile ? "-26px" : "-34px",
              marginRight: isMobile ? "0" : "6%",
            }}
          >
            <div style={{ display: "grid", gap: isMobile ? "14px" : "18px" }}>
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
                  textAlign: isMobile ? "right" : "left",
                  textDecorationLine: "underline",
                  textDecorationColor: "rgba(240, 127, 168, 0.68)",
                  textDecorationThickness: "1px",
                  textUnderlineOffset: "6px",
                }}
              >
                Hola, soy Paola
              </p>

              <h1
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: isMobile ? "26px" : "50px",
                  fontWeight: 600,
                  lineHeight: isMobile ? 1.02 : 0.98,
                  color: "var(--arena-clara)",
                  margin: 0,
                  letterSpacing: 0,
                  maxWidth: isMobile ? "calc(100vw - 48px)" : "560px",
                  textAlign: isMobile ? "right" : "left",
                  textShadow: "0 12px 32px rgba(12,16,14,0.3)",
                }}
              >
                <span style={{ display: "block" }}>Todo lo que construyes</span>
                <span style={{ display: "block" }}>
                  depende del <span className="hero-system-word">sistema</span>
                </span>
                <span style={{ display: "block" }}>que hay detrás.</span>
              </h1>

              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: isMobile ? "15px" : "18px",
                  fontWeight: 400,
                  lineHeight: isMobile ? 1.48 : 1.5,
                  color: "rgba(250, 248, 244, 0.96)",
                  margin: 0,
                  maxWidth: isMobile ? "calc(100vw - 48px)" : "500px",
                  textAlign: isMobile ? "right" : "left",
                  textShadow: "0 2px 18px rgba(12,16,14,0.72)",
                  background: "rgba(12, 16, 14, 0.16)",
                  borderRadius: "8px",
                  padding: isMobile ? "0" : "8px 10px",
                  backdropFilter: isMobile ? "none" : "blur(6px)",
                  WebkitBackdropFilter: isMobile ? "none" : "blur(6px)",
                }}
              >
                Diseño contigo un sistema que pueda acompañarte. Ordeno procesos, datos y
                decisiones en un producto más claro y estructurado.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: "14px",
                alignItems: isMobile ? "flex-end" : "center",
                justifyContent: isMobile ? "stretch" : "flex-start",
                width: isMobile ? "270px" : "auto",
                maxWidth: isMobile ? "calc(100vw - 48px)" : "none",
                justifySelf: isMobile ? "end" : "auto",
              }}
            >
              <BrandButton variant="secondary" to="/portfolio">
                Ver portfolio ↗
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
                    "linear-gradient(180deg, rgba(250,248,244,0.82) 0%, rgba(230,215,198,0.94) 100%)",
                  border: "1px solid rgba(250, 248, 244, 0.72)",
                  borderRadius: "999px",
                  width: isMobile ? "54px" : "64px",
                  height: isMobile ? "54px" : "64px",
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

            <PaperNote
              style={{
                maxWidth: isMobile ? "238px" : "270px",
                justifySelf: isMobile ? "end" : "end",
                transform: "rotate(2.5deg)",
              }}
            >
              Diseño que ordena y conecta.
            </PaperNote>
          </div>
        </div>
      </div>
    </section>
  );
}
