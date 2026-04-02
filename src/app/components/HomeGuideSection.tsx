import { useIsMobile } from "../hooks/useIsMobile";
import { GuideCaptureForm } from "./GuideCaptureForm";

export function HomeGuideSection() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section
        id="guia-home"
        style={{
          backgroundColor: "#FAF8F4",
          paddingTop: "80px",
          paddingBottom: "80px",
          paddingLeft: "24px",
          paddingRight: "24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "-40px",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #F5C842 0%, transparent 70%)",
            opacity: 0.08,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
          maxWidth: "1040px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E8E2DA",
            borderRadius: "18px",
            padding: "28px 24px",
          }}
        >
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "9px",
              color: "#8B6F47",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "16px",
              fontWeight: 400,
            }}
          >
            Empieza acá
          </p>
          <h2
            style={{
              fontFamily: "Fraunces, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "32px",
              color: "#1A1A2E",
              lineHeight: "1.2",
              marginBottom: "14px",
            }}
          >
            Ordena tu sistema personal
          </h2>
          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              color: "#5D5548",
              lineHeight: "1.75",
              marginBottom: "24px",
            }}
          >
            Una guía breve y gratuita para sacar ideas de la cabeza, bajar ruido y dar un primer
            paso con estructura.
          </p>

          <GuideCaptureForm variant="compact" theme="light" source="home-guide" />
        </div>
      </div>
    </section>
  );
  }

  return (
    <section
      id="guia-home"
      style={{
        backgroundColor: "#FAF8F4",
        paddingTop: "92px",
        paddingBottom: "100px",
        paddingLeft: "80px",
        paddingRight: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          backgroundColor: "#FFFFFF",
          border: "1px solid #E8E2DA",
          borderRadius: "24px",
          padding: "42px 40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.9fr) minmax(360px, 0.82fr)",
            gap: "44px",
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "9px",
                color: "#8B6F47",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "18px",
                fontWeight: 400,
              }}
            >
              Empieza acá
            </p>
            <h2
              style={{
                fontFamily: "Fraunces, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "48px",
                color: "#1A1A2E",
                lineHeight: "1.1",
                marginBottom: "16px",
              }}
            >
              Ordena tu sistema personal
            </h2>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#5D5548",
                lineHeight: "1.8",
                margin: 0,
                maxWidth: "520px",
              }}
            >
              Una guía breve y gratuita para sacar ideas de la cabeza, bajar ruido y dar un primer
              paso con estructura.
            </p>
          </div>

          <GuideCaptureForm variant="compact" theme="light" source="home-guide" />
        </div>
      </div>
    </section>
  );
}
