import imagePaola from "../../assets/paola-portrait.jpg";
import { useIsMobile } from "../hooks/useIsMobile";

const storyCards = [
  {
    label: "Origen",
    title: "La adversidad cambió mi forma de ver las cosas.",
    points: [
      "Entendí que nada funciona de manera aislada.",
      "No hay resultados sin procesos.",
      "No hay procesos sostenibles sin estructura.",
    ],
  },
  {
    label: "Sistema",
    title: "Cuando la base falla, todo se vuelve frágil.",
    points: [
      "Empecé a reconocer los mismos patrones en otras áreas y proyectos.",
      "Cuando un equipo se traba, el problema rara vez son solo las personas.",
      "Muchas veces lo que falla es el sistema que las conecta.",
    ],
  },
  {
    label: "Hoy",
    title: "Diseño sistemas que ordenan y conectan.",
    points: [
      "Transformo ideas y procesos en estructuras claras.",
      "Diseño para que funcionen en el día a día y se sostengan en el tiempo.",
      "También pienso productos y experiencias para usuarios reales, no solo para verse bien.",
    ],
  },
];

export function HomeAboutSection() {
  const isMobile = useIsMobile();
  const px = isMobile ? "24px" : "80px";

  return (
    <section
      id="sobre-mi-home"
      style={{
        backgroundColor: "#FAF8F4",
        paddingTop: isMobile ? "52px" : "68px",
        paddingBottom: isMobile ? "64px" : "80px",
        paddingLeft: px,
        paddingRight: px,
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gap: isMobile ? "18px" : "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#F6F1E9",
            border: "1px solid #E8E2DA",
            borderRadius: isMobile ? "22px" : "26px",
            padding: isMobile ? "24px 20px" : "28px 28px",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1.22fr) minmax(220px, 0.62fr)",
            gap: isMobile ? "22px" : "28px",
            alignItems: "center",
          }}
        >
          <div style={{ minWidth: 0 }}>
            <p
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "10px",
                color: "#AAAAAA",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "16px",
                fontWeight: 400,
              }}
            >
              Sobre mí
            </p>

            <h2
              style={{
                fontFamily: "Fraunces, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: isMobile ? "30px" : "42px",
                color: "#1A1A2E",
                lineHeight: "1.15",
                marginBottom: "18px",
              }}
            >
              Hola, soy Paola.
            </h2>

            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 400,
                fontSize: isMobile ? "15px" : "16px",
                color: "#666666",
                lineHeight: "1.8",
                margin: 0,
                maxWidth: isMobile ? "100%" : "680px",
              }}
            >
              Diseño sistemas para ordenar, sostener y dar forma a lo que construimos.
            </p>
          </div>

          <div
            style={{
              width: "100%",
              maxWidth: isMobile ? "220px" : "240px",
              justifySelf: isMobile ? "start" : "end",
              aspectRatio: "4 / 4.6",
              borderRadius: isMobile ? "22px" : "20px",
              overflow: "hidden",
              backgroundColor: "#EDE7DD",
              border: "1px solid #E8E2DA",
            }}
          >
            <img
              src={imagePaola}
              alt="Paola"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 18%",
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
            gap: isMobile ? "16px" : "16px",
            width: "100%",
            alignItems: "stretch",
          }}
        >
          {storyCards.map((card) => (
            <div
              key={card.label}
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E8E2DA",
                borderRadius: "18px",
                padding: isMobile ? "20px 18px" : "22px 20px 20px",
                minWidth: 0,
                minHeight: isMobile ? "auto" : "236px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "10px",
                  color: "#C97B5A",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                  fontWeight: 400,
                }}
              >
                {card.label}
              </p>
              <h3
                style={{
                  fontFamily: "Fraunces, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: isMobile ? "24px" : "23px",
                  color: "#1A1A2E",
                  lineHeight: "1.18",
                  margin: "0 0 10px 0",
                }}
              >
                {card.title}
              </h3>
              <div style={{ display: "grid", gap: "10px" }}>
                {card.points.map((point) => (
                  <div
                    key={point}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "#C97B5A",
                        marginTop: "8px",
                        flexShrink: 0,
                      }}
                    />
                    <p
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontWeight: 400,
                        fontSize: isMobile ? "14px" : "15px",
                        color: "#666666",
                        lineHeight: "1.68",
                        margin: 0,
                      }}
                    >
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
