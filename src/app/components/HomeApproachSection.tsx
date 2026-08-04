import { useIsMobile } from "../hooks/useIsMobile";
import { SectionLabel } from "./brand/SectionLabel";

export function HomeApproachSection() {
  const isMobile = useIsMobile();
  const approachHeading = isMobile
    ? "Diseñemos el sistema que ordena y sostiene lo que estás construyendo."
    : "¿Por qué diseñar conmigo el sistema que ordena y sostiene tu negocio, tus proyectos o tu producto?";
  const approachTitle = isMobile
    ? [
        "No diseño piezas sueltas.",
        "Ordeno decisiones, procesos y personas.",
        "Mejoro cómo se vive la experiencia.",
      ]
    : [
        "No diseño piezas sueltas.",
        "Ordeno cómo se conectan las",
        "decisiones, los procesos y las personas",
        "para mejorar la experiencia.",
      ];
  const approachBody = isMobile
    ? [
        "Primero entiendo cómo funciona hoy.",
        "Después diseñamos una estructura que puedas sostener.",
      ]
    : "Antes de elegir una herramienta, diseñarla, sumar una función o usar una plantilla, miro el contexto, las personas, los procesos, la información y las decisiones que sostienen lo que quieres construir.";

  return (
    <section
      id="enfoque"
      style={{
        backgroundColor: "var(--arena-clara)",
        paddingTop: isMobile ? "86px" : "112px",
        paddingBottom: isMobile ? "86px" : "118px",
        paddingLeft: isMobile ? "24px" : "80px",
        paddingRight: isMobile ? "24px" : "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1160px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: isMobile ? "24px" : "32px",
            marginBottom: isMobile ? "28px" : "42px",
          }}
        >
          <div>
            <SectionLabel number="03">
              Mi enfoque
            </SectionLabel>
            <h2
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 600,
                fontSize: isMobile ? "36px" : "60px",
                color: "var(--mar-profundo)",
                lineHeight: 1.02,
                margin: "22px 0 0",
                maxWidth: "860px",
              }}
            >
              {isMobile ? (
                <>
                  <span className="pz-highlight">Diseñemos el sistema</span>{" "}
                  <span>
                    que ordena y sostiene {" "}
                    <span className="approach-emphasis">lo que estás construyendo.</span>
                  </span>
                </>
              ) : (
                <span className="pz-highlight">{approachHeading}</span>
              )}
            </h2>
          </div>
        </div>

        <div
          style={{
            border: "1px solid rgba(23, 59, 68, 0.2)",
            borderRadius: isMobile ? "18px" : "26px",
            minHeight: isMobile ? "440px" : "660px",
            backgroundColor: "var(--surface-paper)",
            position: "relative",
            overflow: "hidden",
            padding: isMobile ? "26px 22px" : "46px",
            display: "grid",
            alignItems: "end",
            boxShadow: "inset 0 1px 0 rgba(250,248,244,0.36)",
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
              filter: "blur(24px) saturate(0.86) contrast(0.9) brightness(1.08)",
              transform: "scale(1.12)",
              opacity: 0.9,
              display: isMobile ? "none" : "block",
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
              left: isMobile ? "-14%" : "18%",
              width: isMobile ? "128%" : "66%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
              filter: "saturate(0.92) contrast(0.94) brightness(1.02)",
              WebkitMaskImage: isMobile
                ? "linear-gradient(180deg, transparent 0%, #000 8%, #000 90%, transparent 100%)"
                : "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
              maskImage: isMobile
                ? "linear-gradient(180deg, transparent 0%, #000 8%, #000 90%, transparent 100%)"
                : "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background:
                isMobile
                  ? "linear-gradient(180deg, rgba(12,16,14,0.36) 0%, rgba(12,16,14,0.5) 40%, rgba(12,16,14,0.88) 100%)"
                  : "linear-gradient(180deg, rgba(12,16,14,0.06) 0%, rgba(12,16,14,0.18) 42%, rgba(12,16,14,0.78) 100%)",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: isMobile ? "22px" : "38px",
              border: "1px solid rgba(250, 248, 244, 0.28)",
              borderRadius: isMobile ? "14px" : "22px",
              backgroundImage:
                "linear-gradient(rgba(230,215,198,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(230,215,198,0.08) 1px, transparent 1px)",
              backgroundSize: "34px 34px",
              }}
            />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: "720px",
              backgroundColor: isMobile ? "rgba(12, 16, 14, 0.3)" : "transparent",
              border: isMobile ? "1px solid rgba(250, 248, 244, 0.18)" : "none",
              borderRadius: isMobile ? "14px" : "0",
              padding: isMobile ? "16px 14px" : "0",
              backdropFilter: isMobile ? "blur(4px)" : "none",
              WebkitBackdropFilter: isMobile ? "blur(4px)" : "none",
            }}
          >
            <h3
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 600,
                fontSize: isMobile ? "25px" : "42px",
                lineHeight: isMobile ? 1.02 : 1.04,
                color: "var(--arena-clara)",
                margin: "0 0 18px",
              }}
            >
              {Array.isArray(approachTitle)
                ? approachTitle.map((line) => (
                    <span key={line} style={{ display: "block" }}>
                      {line}
                    </span>
                  ))
                : approachTitle}
            </h3>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: isMobile ? "15px" : "17px",
                lineHeight: isMobile ? 1.45 : 1.7,
                color: "var(--arena-clara)",
                margin: 0,
              }}
            >
              {Array.isArray(approachBody)
                ? approachBody.map((line) => (
                    <span key={line} style={{ display: "block", marginBottom: isMobile ? "2px" : "0" }}>
                      {line}
                    </span>
                  ))
                : approachBody}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
