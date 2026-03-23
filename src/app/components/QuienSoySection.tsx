import image_92a090bf23d02cde3e07b38a242a9cf87315ffb1 from "../../assets/paola-portrait.jpg"
import image_684063a89a11901c664da0cd9a0d77a64ae77c45 from "../../assets/paola-full.jpg"
import image_d2894c10fd184bee616dda3f47427d08b8926774 from "../../assets/paola-photo3.jpg"
import image_c52ebd02d98e626bf3d502062aab6f9905fba264 from "../../assets/paola-photo2.jpg"
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

export function QuienSoySection() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section
        id="quien-soy"
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
            top: "-40px",
            left: "-60px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            backgroundColor: "#7C9E8A",
            opacity: 0.07,
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Photo blob — top, full width */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "300px",
                backgroundColor: "#D4E4DA",
                borderRadius: "65% 35% 55% 45% / 40% 65% 35% 60%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Photo of Paola — replace src to update */}
              <img
                src={image_92a090bf23d02cde3e07b38a242a9cf87315ffb1}
                alt="Paola Zerpa"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
            </div>

            <p
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "9px",
                color: "#D6D0C4",
                letterSpacing: "2px",
                textTransform: "uppercase",
                margin: 0,
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              Paola Zerpa · System Designer
            </p>
          </div>

          {/* Text content below */}
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
            02 · QUIÉN SOY
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
            Hola, soy Paola.
          </h2>

          {/* Body paragraphs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "28px" }}>
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
              Soy <B>System Designer</B> con enfoque en{" "}
              <B>Producto, Operaciones y Experiencia</B>. Lo que hago — diseñar{" "}
              <B>sistemas que funcionan</B> — lo aprendí construyendo mi vida
              desde cero.
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
              No hablo desde la teoría. Hablo desde <B>el proceso</B>.{" "}
              <B>Diseño</B>, pruebo en mí misma y documento lo que aprendo.
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
              Trabajo con personas que quieren entender cómo funciona{" "}
              <B>su propio sistema</B> — su mente, su tiempo, su entorno — y
              con <B>equipos y negocios</B> que quieren operar con{" "}
              <B>menos fricción</B> y crecer sin que todo dependa de{" "}
              <B>una sola persona</B>.
            </p>
          </div>

          {/* CTA Text Link */}
          <a
            href="#enfoque"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 500,
              fontSize: "15px",
              color: "#C97B5A",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            Conoce mi proceso →
          </a>
        </div>
      </section>
    );
  }

  // Desktop
  return (
    <section
      id="quien-soy"
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
          top: "-60px",
          left: "-80px",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          backgroundColor: "#7C9E8A",
          opacity: 0.07,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "60% 40%",
          gap: "80px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left Column — Text */}
        <div>
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
            02 · QUIÉN SOY
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
            Hola, soy Paola.
          </h2>

          {/* Body paragraphs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "40px" }}>
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
              Soy <B>System Designer</B> con enfoque en{" "}
              <B>Producto, Operaciones y Experiencia</B>. Lo que hago — diseñar{" "}
              <B>sistemas que funcionan</B> — lo aprendí construyendo mi vida
              desde cero.
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
              No hablo desde la teoría. Hablo desde <B>el proceso</B>.{" "}
              <B>Diseño</B>, pruebo en mí misma y documento lo que aprendo.
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
              Trabajo con personas que quieren entender cómo funciona{" "}
              <B>su propio sistema</B> — su mente, su tiempo, su entorno — y
              con <B>equipos y negocios</B> que quieren operar con{" "}
              <B>menos fricción</B> y crecer sin que todo dependa de{" "}
              <B>una sola persona</B>.
            </p>
          </div>

          {/* CTA Text Link */}
          <a
            href="#enfoque"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              color: "#C97B5A",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              transition: "gap 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.gap = "12px";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.gap = "6px";
            }}
          >
            Conoce mi proceso →
          </a>
        </div>

        {/* Right Column — Photo Blob */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* Organic blob shape */}
          <div
            style={{
              width: "100%",
              maxWidth: "420px",
              aspectRatio: "4/5",
              backgroundColor: "#D4E4DA",
              borderRadius: "65% 35% 55% 45% / 40% 65% 35% 60%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Photo of Paola — replace src to update */}
            <img
              src={image_92a090bf23d02cde3e07b38a242a9cf87315ffb1}
              alt="Paola Zerpa"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
              }}
            />
          </div>

          {/* Caption below */}
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "10px",
              color: "#D6D0C4",
              letterSpacing: "2px",
              textTransform: "uppercase",
              margin: 0,
              fontWeight: 400,
            }}
          >
            Paola Zerpa · System Designer
          </p>
        </div>
      </div>
    </section>
  );
}