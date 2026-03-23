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

export function ElProblemaSection() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section
        id="problema"
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
            bottom: "-60px",
            right: "-40px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            backgroundColor: "#C97B5A",
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
              marginBottom: "20px",
              fontWeight: 400,
            }}
          >
            01 · EL PROBLEMA
          </p>

          {/* H2 */}
          <h2
            style={{
              fontFamily: "MuseoModerno, sans-serif",
              fontWeight: 700,
              fontSize: "28px",
              color: "#1A1A2E",
              lineHeight: "1.2",
              marginBottom: "32px",
            }}
          >
            La mayoría cree que el problema
            <br />
            es la falta de disciplina.
          </h2>

          {/* Body paragraphs — single column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginBottom: "48px",
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
              Pero no es falta de disciplina. Es que nadie nos dio las
              herramientas para entender{" "}
              <B>cómo funciona nuestro propio sistema de vida</B> —{" "}
              <B>cómo organizar la mente, el espacio, el tiempo</B>.
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
              El resultado es siempre el mismo: personas que{" "}
              <B>no avanzan</B> en lo que más les importa — sus metas, su salud,
              sus relaciones, su trabajo — y no entienden por qué. Equipos que
              funcionan, pero <B>no sostienen su crecimiento</B>.
            </p>
          </div>

          {/* Closing Statement */}
          <div
            style={{
              textAlign: "center",
              paddingBottom: "32px",
            }}
          >
            <p
              style={{
                fontFamily: "Fraunces, serif",
                fontStyle: "italic",
                fontSize: "26px",
                color: "#1A1A2E",
                lineHeight: "1.3",
                margin: 0,
              }}
            >
              No es un problema de personas.
              <br />
              Es un problema de{" "}
              <span style={{ color: "#C97B5A" }}>diseño</span>.
            </p>
          </div>
        </div>

        {/* Thin divider */}
        <div
          style={{
            borderTop: "1px solid #D6D0C4",
          }}
        />
      </section>
    );
  }

  // Desktop
  return (
    <section
      id="problema"
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
          bottom: "-80px",
          right: "-60px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          backgroundColor: "#C97B5A",
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
          01 · EL PROBLEMA
        </p>

        {/* H2 */}
        <h2
          style={{
            fontFamily: "MuseoModerno, sans-serif",
            fontWeight: 700,
            fontSize: "40px",
            color: "#1A1A2E",
            lineHeight: "1.2",
            marginBottom: "48px",
            maxWidth: "680px",
          }}
        >
          La mayoría cree que el problema
          <br />
          es la falta de disciplina.
        </h2>

        {/* Body paragraphs - two columns for readability */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            marginBottom: "72px",
            maxWidth: "960px",
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
            Pero no es falta de disciplina. Es que nadie nos dio las
            herramientas para entender{" "}
            <B>cómo funciona nuestro propio sistema de vida</B> —{" "}
            <B>cómo organizar la mente, el espacio, el tiempo</B>.
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
            El resultado es siempre el mismo: personas que{" "}
            <B>no avanzan</B> en lo que más les importa — sus metas, su salud,
            sus relaciones, su trabajo — y no entienden por qué. Equipos que
            funcionan, pero <B>no sostienen su crecimiento</B>.
          </p>
        </div>

        {/* Closing Statement */}
        <div
          style={{
            textAlign: "center",
            paddingTop: "32px",
            paddingBottom: "72px",
          }}
        >
          <p
            style={{
              fontFamily: "Fraunces, serif",
              fontStyle: "italic",
              fontSize: "36px",
              color: "#1A1A2E",
              lineHeight: "1.3",
              margin: 0,
            }}
          >
            No es un problema de personas.
            <br />
            Es un problema de{" "}
            <span style={{ color: "#C97B5A" }}>diseño</span>.
          </p>
        </div>
      </div>

      {/* Thin divider */}
      <div
        style={{
          borderTop: "1px solid #D6D0C4",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      />
    </section>
  );
}