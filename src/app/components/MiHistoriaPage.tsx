import { useNavigate } from "react-router";
import imagePaola from "../../assets/paola-photo2.jpg";
import { FooterSection } from "./FooterSection";
import { NavBar } from "./NavBar";
import { useIsMobile } from "../hooks/useIsMobile";
import { navigateWithScroll } from "../utils/navigation";

const storyBlocks = [
  {
    eyebrow: "01 · ANTES",
    title: "Durante mucho tiempo tuve muchas cosas en la cabeza y pocas formas de sostenerlas.",
    paragraphs: [
      "Cuando emigré con 19 años tenía expectativas más altas de lo que podía sostener en la vida real. Trabajando en un país y una cultura diferentes, con amigas como familia y cuentas que pagar, era la mejor manera de empezar a explorar mi yo adulta. A mi riesgo, claro.",
      'Quería sostener mi vida cotidiana, el trabajo, la carrera, ahorrar dinero, tener tiempo para disfrutar... pero también sentía que debía tener todo resuelto porque ya "vivía sola y era joven". Un caos personal, básicamente.',
    ],
  },
  {
    eyebrow: "02 · GIRO",
    title: "Empecé a entender que el problema no era hacer más, sino diseñar mejor.",
    paragraphs: [
      "Haberme puesto en esa situación preparó las bases para entender que la vida no se sostiene sola, y que tampoco cae del cielo una solución que lo resuelve todo.",
      "Aprendí que anotar las cosas más importantes para hacer en la semana baja el ruido. Eso se llama diseño con intención: que lo importante no quede al azar ni a la energía del momento.",
      "Aunque aún no le ponía nombre, empecé a notar más claridad, más estructura en ciertos procesos. Ahí apareció una forma distinta de pensar.",
    ],
  },
  {
    eyebrow: "03 · HOY",
    title: "Hoy diseño sistemas, procesos y comunico con claridad para sostener mejor lo que hago.",
    paragraphs: [
      "Hoy sigo construyendo estructuras, poniéndome a prueba y descubriendo que vale la pena construir ideas, proyectos y la vida misma con sistemas coherentes.",
      "Ese proceso puede ser mi vida, mi rutina, mis hábitos. Puede ser un proyecto personal o externo, un producto o un equipo de trabajo.",
      "De cualquier manera, hoy acompaño a través del diseño y de los sistemas.",
    ],
  },
];

export function MiHistoriaPage() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const px = isMobile ? "24px" : "80px";

  return (
    <div style={{ backgroundColor: "#FAF8F4", overflowX: "hidden" }}>
      <NavBar />

      <section
        style={{
          backgroundColor: "#1A1A2E",
          paddingTop: isMobile ? "128px" : "164px",
          paddingBottom: isMobile ? "68px" : "84px",
          paddingLeft: px,
          paddingRight: px,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-60px",
            width: isMobile ? "240px" : "420px",
            height: isMobile ? "240px" : "420px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #9B8FB0 0%, transparent 65%)",
            opacity: 0.07,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "980px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1fr) 320px",
            gap: isMobile ? "28px" : "44px",
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "9px",
                color: "#C97B5A",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "20px",
                fontWeight: 400,
              }}
            >
              HOLA, SOY PAOLA
            </p>

            <h1
              style={{
                fontFamily: "Fraunces, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: isMobile ? "42px" : "64px",
                color: "#FAF8F4",
                lineHeight: "1.06",
                marginBottom: "18px",
              }}
            >
              Aprendí a diseñar mi vida. Ahora ayudo a otros a hacer lo mismo.
            </h1>

            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 700,
                fontSize: isMobile ? "20px" : "24px",
                color: "#F5C842",
                lineHeight: "1.6",
                maxWidth: "660px",
                margin: 0,
              }}
            >
              Descubrí el diseño como forma de expresar el orden y la estructura que sostienen
              nuestras ideas, proyectos y vida.
            </p>
          </div>

          <div
            style={{
              width: "100%",
              maxWidth: isMobile ? "260px" : "320px",
              justifySelf: isMobile ? "start" : "end",
              aspectRatio: "4 / 5",
              borderRadius: "36px",
              overflow: "hidden",
              backgroundColor: "#D4E4DA",
              border: "1px solid rgba(250,248,244,0.16)",
            }}
          >
            <img
              src={imagePaola}
              alt="Paola"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "#FAF8F4",
          paddingTop: isMobile ? "68px" : "86px",
          paddingBottom: isMobile ? "62px" : "76px",
          paddingLeft: px,
          paddingRight: px,
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gap: isMobile ? "18px" : "22px" }}>
          {storyBlocks.map((block) => (
            <article
              key={block.eyebrow}
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E8E2DA",
                borderRadius: "16px",
                padding: isMobile ? "26px 22px" : "30px 28px",
              }}
            >
              <p
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "9px",
                  color: "#AAAAAA",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                  fontWeight: 400,
                }}
              >
                {block.eyebrow}
              </p>

              <h2
                style={{
                  fontFamily: "Fraunces, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: isMobile ? "28px" : "36px",
                  color: "#1A1A2E",
                  lineHeight: "1.18",
                  marginBottom: "16px",
                  maxWidth: "760px",
                }}
              >
                {block.title}
              </h2>

              <div style={{ display: "grid", gap: "14px", maxWidth: "760px" }}>
                {block.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 400,
                      fontSize: isMobile ? "15px" : "16px",
                      color: "#666666",
                      lineHeight: "1.8",
                      margin: 0,
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        style={{
          backgroundColor: "#FAF8F4",
          paddingBottom: isMobile ? "88px" : "104px",
          paddingLeft: px,
          paddingRight: px,
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            borderTop: "1px solid #E8E2DA",
            paddingTop: isMobile ? "30px" : "36px",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            gap: "20px",
          }}
        >
          <div style={{ maxWidth: "620px" }}>
            <p
              style={{
                fontFamily: "Fraunces, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: isMobile ? "28px" : "34px",
                color: "#1A1A2E",
                lineHeight: "1.2",
                marginBottom: "10px",
              }}
            >
              Si quieres seguir la conversación, puedes escribirme. Y si no, también puedes volver
              al inicio.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "12px" }}>
            <button
              onClick={() => navigateWithScroll(navigate, "/contacto")}
              style={{
                backgroundColor: "#1A1A2E",
                color: "#FAF8F4",
                fontFamily: "Space Mono, monospace",
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                padding: "16px 24px",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Ir a contacto
            </button>
            <button
              onClick={() => navigateWithScroll(navigate, "/")}
              style={{
                backgroundColor: "transparent",
                color: "#1A1A2E",
                fontFamily: "Space Mono, monospace",
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                padding: "15px 24px",
                borderRadius: "6px",
                border: "1px solid #1A1A2E",
                cursor: "pointer",
              }}
            >
              Volver al inicio
            </button>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
