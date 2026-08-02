import { useIsMobile } from "../hooks/useIsMobile";
import { SectionLabel } from "./brand/SectionLabel";

export function HomeApproachSection() {
  const isMobile = useIsMobile();

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
              ¿Por qué <span className="pz-highlight">diseñar conmigo el sistema</span> que sostiene
              lo que construyes?
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
                "linear-gradient(180deg, rgba(12,16,14,0.06) 0%, rgba(12,16,14,0.18) 42%, rgba(12,16,14,0.78) 100%)",
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

          <div style={{ position: "relative", zIndex: 1, maxWidth: "720px" }}>
            <h3
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 600,
                fontSize: isMobile ? "29px" : "46px",
                lineHeight: 1.06,
                color: "var(--arena-clara)",
                margin: "0 0 18px",
              }}
            >
              No diseño piezas sueltas. Ordeno cómo se conectan las decisiones, los procesos y la
              experiencia para que el sistema pueda sostenerse.
            </h3>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: isMobile ? "15px" : "17px",
                lineHeight: 1.7,
                color: "rgba(230, 215, 198, 0.9)",
                margin: 0,
              }}
            >
              Antes de elegir una herramienta, diseñarla, sumar una función o usar una plantilla,
              miro el contexto, las personas, los procesos, la información y las decisiones que
              sostienen lo que quieres construir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
