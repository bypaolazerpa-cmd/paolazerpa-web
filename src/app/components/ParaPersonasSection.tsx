import { useIsMobile } from "../hooks/useIsMobile";

const B = ({ children }: { children: React.ReactNode }) => (
  <strong
    style={{
      fontFamily: "Space Grotesk, sans-serif",
      fontWeight: 700,
      color: "inherit",
    }}
  >
    {children}
  </strong>
);

export function ParaPersonasSection() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section
        id="recursos"
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
        {/* Decorative circle */}
        <div
          style={{
            position: "absolute",
            top: "-30px",
            right: "-50px",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            backgroundColor: "#F5C842",
            opacity: 0.07,
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Supertitle */}
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "9px",
              color: "#888888",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "16px",
              fontWeight: 400,
            }}
          >
            04 · PARA PERSONAS
          </p>

          {/* H2 */}
          <h2
            style={{
              fontFamily: "MuseoModerno, sans-serif",
              fontWeight: 700,
              fontSize: "28px",
              color: "#1A1A2E",
              lineHeight: "1.2",
              marginBottom: "24px",
            }}
          >
            Empieza por aquí.
          </h2>

          {/* Body */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginBottom: "32px",
            }}
          >
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                color: "#444444",
                lineHeight: "1.7",
                margin: 0,
              }}
            >
              Si tienes demasiadas ideas en la cabeza y muy poco tiempo para
              procesarlas — este es el primer paso.
            </p>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                color: "#444444",
                lineHeight: "1.7",
                margin: 0,
              }}
            >
              Diseñé una guía gratuita con el <B>sistema que uso yo misma</B>:
              vaciado mental y diseño semanal. En menos de una hora tienes la{" "}
              <B>mente más clara</B> y la <B>semana con dirección</B>.
            </p>
          </div>

          {/* Lead Magnet Card — full width */}
          <div
            style={{
              backgroundColor: "#FDF3D7",
              borderLeft: "3px solid #F5C842",
              borderRadius: "0 12px 12px 0",
              padding: "24px",
              marginBottom: "16px",
            }}
          >
            {/* Card Tag */}
            <p
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "9px",
                color: "#C97B5A",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "12px",
                fontWeight: 400,
              }}
            >
              ✦ RECURSO GRATUITO
            </p>

            {/* Card Title */}
            <h3
              style={{
                fontFamily: "MuseoModerno, sans-serif",
                fontWeight: 700,
                fontSize: "18px",
                color: "#1A1A2E",
                lineHeight: "1.3",
                marginBottom: "8px",
              }}
            >
              Mente clara, semana diseñada
            </h3>

            {/* Card Subtitle */}
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 400,
                fontSize: "13px",
                color: "#666666",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              Guía PDF + Plantilla Notion · Gratis
            </p>
          </div>

          {/* CTA Button — full width */}
          <button
            style={{
              backgroundColor: "#F5C842",
              color: "#1A1A2E",
              fontFamily: "Space Mono, monospace",
              fontSize: "10px",
              letterSpacing: "2px",
              height: "48px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              textTransform: "uppercase",
              fontWeight: 400,
              width: "100%",
            }}
          >
            QUIERO LA GUÍA GRATUITA
          </button>
        </div>
      </section>
    );
  }

  // Desktop
  return (
    <section
      id="recursos"
      style={{
        backgroundColor: "#FAF8F4",
        paddingTop: "120px",
        paddingBottom: "120px",
        paddingLeft: "80px",
        paddingRight: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circle */}
      <div
        style={{
          position: "absolute",
          top: "-40px",
          right: "-80px",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          backgroundColor: "#F5C842",
          opacity: 0.07,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "200px",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          backgroundColor: "#7C9E8A",
          opacity: 0.07,
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Supertitle */}
        <p
          style={{
            fontFamily: "Space Mono, monospace",
            fontSize: "11px",
            color: "#8B6F47",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "24px",
            fontWeight: 400,
          }}
        >
          04 · PARA PERSONAS
        </p>

        {/* H2 */}
        <h2
          style={{
            fontFamily: "MuseoModerno, sans-serif",
            fontWeight: 700,
            fontSize: "40px",
            color: "#1A1A2E",
            lineHeight: "1.2",
            marginBottom: "40px",
          }}
        >
          Empieza por aquí.
        </h2>

        {/* Body */}
        <div
          style={{
            maxWidth: "680px",
            marginBottom: "56px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 400,
              fontSize: "17px",
              color: "#444444",
              lineHeight: "1.8",
              margin: 0,
            }}
          >
            Si tienes demasiadas ideas en la cabeza y muy poco tiempo para
            procesarlas — este es el primer paso.
          </p>
          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 400,
              fontSize: "17px",
              color: "#444444",
              lineHeight: "1.8",
              margin: 0,
            }}
          >
            Diseñé una guía gratuita con el <B>sistema que uso yo misma</B>:
            vaciado mental y diseño semanal. En menos de una hora tienes la{" "}
            <B>mente más clara</B> y la <B>semana con dirección</B>.
          </p>
        </div>

        {/* Lead Magnet Card */}
        <div
          style={{
            backgroundColor: "#FDF3D7",
            borderLeft: "3px solid #F5C842",
            borderRadius: "0 12px 12px 0",
            padding: "40px 40px 40px 44px",
            maxWidth: "680px",
            marginBottom: "40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <div>
            {/* Card Tag */}
            <p
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "11px",
                color: "#C97B5A",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "14px",
                fontWeight: 400,
              }}
            >
              ✦ RECURSO GRATUITO
            </p>

            {/* Card Title */}
            <h3
              style={{
                fontFamily: "MuseoModerno, sans-serif",
                fontWeight: 700,
                fontSize: "22px",
                color: "#1A1A2E",
                lineHeight: "1.3",
                marginBottom: "10px",
              }}
            >
              Mente clara, semana diseñada
            </h3>

            {/* Card Subtitle */}
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                color: "#666666",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              Guía PDF + Plantilla Notion · Gratis
            </p>
          </div>

          {/* Decorative star icon */}
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "#F5C842",
              opacity: 0.25,
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: "32px" }}>✦</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          style={{
            backgroundColor: "#F5C842",
            color: "#1A1A2E",
            fontFamily: "Space Mono, monospace",
            fontSize: "11px",
            letterSpacing: "2px",
            padding: "16px 32px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            textTransform: "uppercase",
            fontWeight: 400,
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.opacity = "0.88")
          }
          onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
        >
          QUIERO LA GUÍA GRATUITA
        </button>
      </div>
    </section>
  );
}
