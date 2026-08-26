import { useIsMobile } from "../hooks/useIsMobile";
import { BrandButton } from "./brand/BrandButton";
import { SectionLabel } from "./brand/SectionLabel";

export function HomeStartSection() {
  const isMobile = useIsMobile();

  return (
    <section
      id="empezamos"
      className="pz-dark"
      style={{
        paddingTop: isMobile ? "58px" : "82px",
        paddingBottom: isMobile ? "62px" : "86px",
        paddingLeft: isMobile ? "24px" : "80px",
        paddingRight: isMobile ? "24px" : "80px",
        position: "relative",
        overflow: "hidden",
        background: "var(--mar-profundo)",
      }}
    >
      <div style={{ maxWidth: "1160px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: isMobile ? "28px" : "54px",
            alignItems: "end",
            marginBottom: isMobile ? "26px" : "34px",
          }}
        >
          <div>
            <SectionLabel number="06" tone="light">
              Hablemos
            </SectionLabel>
            <h2
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 600,
                fontSize: isMobile ? "36px" : "58px",
                color: "var(--arena-clara)",
                lineHeight: 1.04,
                margin: "22px 0 0",
                maxWidth: "860px",
              }}
            >
              Si hay algo que quieres ordenar, revisar o diseñar, podemos empezar por ahí.
            </h2>
          </div>
        </div>

        <p
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: isMobile ? "18px" : "22px",
            lineHeight: 1.4,
            color: "rgba(230, 215, 198, 0.88)",
            margin: 0,
          }}
        >
          Cuéntame qué estás intentando resolver.
        </p>

        <div className="home-start-cta">
          <BrandButton to="/contacto">Hablemos ↗</BrandButton>
        </div>
      </div>
    </section>
  );
}
