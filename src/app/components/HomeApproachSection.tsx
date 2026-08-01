import imageEnfoque from "../../assets/paola-enfoque.jpg";
import { useIsMobile } from "../hooks/useIsMobile";
import { SectionLabel } from "./brand/SectionLabel";

export function HomeApproachSection() {
  const isMobile = useIsMobile();

  return (
    <section
      id="enfoque"
      className="pz-dark"
      style={{
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
            <SectionLabel number="03" tone="light">
              Mi enfoque
            </SectionLabel>
            <h2
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 600,
                fontSize: isMobile ? "36px" : "60px",
                color: "var(--arena-clara)",
                lineHeight: 1.02,
                margin: "22px 0 0",
                maxWidth: "860px",
              }}
            >
              ¿Por qué diseñar conmigo el sistema que sostiene lo que construyes?
            </h2>
          </div>
        </div>

        <div
          style={{
            border: "1px solid rgba(230, 215, 198, 0.22)",
            borderRadius: isMobile ? "18px" : "26px",
            minHeight: isMobile ? "440px" : "660px",
            backgroundImage: `linear-gradient(180deg, rgba(12,16,14,0.06) 0%, rgba(12,16,14,0.2) 42%, rgba(12,16,14,0.82) 100%), url(${imageEnfoque})`,
            backgroundSize: "cover",
            backgroundPosition: isMobile ? "42% center" : "center 42%",
            position: "relative",
            overflow: "hidden",
            padding: isMobile ? "26px 22px" : "46px",
            display: "grid",
            alignItems: "end",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: isMobile ? "22px" : "38px",
              border: "1px solid rgba(230, 215, 198, 0.22)",
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
              No diseño partes aisladas. Diseño las relaciones que permiten que todo funcione como
              un sistema.
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
              Antes de elegir una herramienta, una función o una plantilla, miro el contexto, las
              personas, los procesos, la información y las decisiones que sostienen lo que quieres
              construir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
