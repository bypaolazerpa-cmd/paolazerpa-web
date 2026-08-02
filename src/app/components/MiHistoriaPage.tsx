import type { ReactNode } from "react";
import imagePaola from "../../assets/paola-mi-historia-portrait.png";
import { FooterSection } from "./FooterSection";
import { NavBar } from "./NavBar";
import { useIsMobile } from "../hooks/useIsMobile";
import { BrandButton } from "./brand/BrandButton";
import { PaperNote } from "./brand/PaperNote";
import { SectionLabel } from "./brand/SectionLabel";

type StoryBlock = {
  eyebrow: string;
  title: ReactNode;
  paragraphs: ReactNode[];
};

const storyBlocks: StoryBlock[] = [
  {
    eyebrow: "Antes",
    title: "Durante mucho tiempo tuve muchas cosas en la cabeza y pocas formas de sostenerlas.",
    paragraphs: [
      <>
        Cuando emigré{" "}
        <strong>
          con 19 años tenía expectativas más altas de lo que podía sostener en la vida real.
        </strong>{" "}
        Trabajando en un país distinto a donde crecí, con amistades como familia y muchas cuentas
        que pagar. Era la mejor manera de empezar a explorar y sostener mi yo adulta.
      </>,
      <>
        Quería sostener mi vida cotidiana, el trabajo, la carrera, ahorrar dinero, tener tiempo para
        disfrutar... pero también{" "}
        <strong>sentía que debía tener mi vida resuelta</strong> porque "ya vivía sola, adulta y
        joven". Un poco de caos a nivel personal por tener tantas expectativas al mismo tiempo.
      </>,
    ],
  },
  {
    eyebrow: "Giro",
    title: "Empecé a entender que el problema no era hacer más, sino diseñar mejor.",
    paragraphs: [
      <>
        Haberme puesto en esa situación preparó las bases para entender que{" "}
        <strong>la vida no se sostiene sola</strong>, y que tampoco cae del cielo una solución que
        lo resuelve todo.
      </>,
      <>
        Por ejemplo, durante todos estos años aprendí que anotar las cosas más importantes para
        hacer en la semana, en las notas del celular por ejemplo, baja el ruido mental y la urgencia
        de no saber qué hacer. Hoy, a mis 28 años, sé que eso se llama{" "}
        <strong>diseño con intención</strong>: que lo importante no quede al azar ni a la motivación
        del momento.
      </>,
      "Aunque aún no le ponía nombre a lo que hacía, empecé a notar que me generaba más claridad, más estructura para decidir en ciertos procesos. Ahí noté una forma distinta de pensar en mí.",
    ],
  },
  {
    eyebrow: "Hoy",
    title: (
      <>
        Hoy diseño{" "}
        <span style={{ fontFamily: "Space Mono, monospace", fontStyle: "italic", fontWeight: 700 }}>
          sistemas, procesos y comunicación
        </span>{" "}
        para sostener mejor vidas, proyectos, marcas y equipos.
      </>
    ),
    paragraphs: [
      "Hoy sigo creando formas más organizadas de sostener mis cosas: mis rutinas, mis proyectos, mi trabajo y las decisiones que aparecen todos los días. Me pongo a prueba constantemente buscando opciones que funcionen mejor conmigo y con lo que estoy construyendo.",
      "Ese mismo enfoque también sirve para un negocio, una marca personal, un producto digital, una operación, una agenda con varios clientes o un equipo que necesita ordenar responsabilidades, prioridades y formas de trabajar.",
      "Hoy acompaño desde distintos niveles: vida cotidiana, proyectos, procesos, productos y equipos. En todos esos espacios miro lo que existe como un sistema, para entender qué conservar, qué ajustar y qué dejar de sostener a mano.",
    ],
  },
];

const principles = [
  {
    label: "Vida y proyectos",
    text: "Hábitos, rutinas, prioridades, metas, carrera y proyectos personales que necesitan una forma sostenible.",
  },
  {
    label: "Negocios y equipos",
    text: "Procesos, operación, responsabilidades, herramientas, clientes y formas de trabajo que ya no pueden depender de memoria o esfuerzo manual.",
  },
  {
    label: "Productos y sistemas digitales",
    text: "Dashboards, herramientas internas, plataformas, SaaS, arquitectura de información y experiencias que deben ser claras para poder escalar.",
  },
];

export function MiHistoriaPage() {
  const isMobile = useIsMobile();
  const pagePadding = isMobile ? "18px" : "28px";
  const sectionPadding = isMobile ? "56px 22px" : "86px 80px";

  return (
    <div className="pz-page" style={{ overflowX: "hidden" }}>
      <NavBar />

      <section
        className="pz-dark"
        style={{
          paddingTop: isMobile ? "84px" : "112px",
          paddingBottom: isMobile ? "28px" : "34px",
          paddingLeft: pagePadding,
          paddingRight: pagePadding,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(rgba(230,215,198,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(230,215,198,0.04) 1px, transparent 1px)",
            backgroundSize: isMobile ? "28px 28px" : "42px 42px",
            opacity: 0.45,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: isMobile ? "-80px" : "6%",
            top: isMobile ? "80px" : "118px",
            width: isMobile ? "190px" : "330px",
            height: isMobile ? "190px" : "330px",
            borderRadius: "50%",
            border: "1px solid rgba(230, 215, 198, 0.2)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1260px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 0.95fr) minmax(360px, 0.72fr)",
            gap: isMobile ? "30px" : "56px",
            alignItems: "center",
            minHeight: isMobile ? "auto" : "calc(100svh - 146px)",
          }}
        >
          <div>
            <SectionLabel number="01" tone="light">
              Mi historia
            </SectionLabel>

            <h1
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 600,
                fontSize: isMobile ? "34px" : "64px",
                color: "var(--arena-clara)",
                lineHeight: isMobile ? 1.04 : 0.98,
                letterSpacing: 0,
                margin: isMobile ? "22px 0 18px" : "28px 0 24px",
                maxWidth: "690px",
              }}
            >
              Entendí que mi forma de vivir también se podía diseñar.
            </h1>

            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 400,
                fontSize: isMobile ? "16px" : "19px",
                color: "rgba(230, 215, 198, 0.92)",
                lineHeight: "1.58",
                maxWidth: "620px",
                margin: 0,
              }}
            >
              Cuando dejé de mirar solo la meta final y empecé a mirar el sistema que la sostenía,
              entendí que mis hábitos, rutinas, proyectos y trabajo podían tener más forma y menos
              dependencia de mi motivación.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: "14px",
                alignItems: isMobile ? "stretch" : "center",
                marginTop: isMobile ? "28px" : "34px",
                maxWidth: isMobile ? "100%" : "none",
              }}
            >
              <BrandButton to="/contacto#email">Trabajemos tu sistema</BrandButton>
              <BrandButton variant="secondary" to="/#servicios">
                Ver servicios
              </BrandButton>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              justifySelf: isMobile ? "stretch" : "end",
              display: "grid",
              justifyItems: isMobile ? "start" : "end",
              gap: "18px",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: isMobile ? "330px" : "520px",
                aspectRatio: isMobile ? "4 / 5.3" : "4 / 5.05",
                borderRadius: isMobile ? "18px" : "24px",
                overflow: "hidden",
                backgroundColor: "var(--beige-lino)",
                border: "2px solid rgba(213, 186, 154, 0.92)",
                boxShadow: "0 24px 60px rgba(12, 16, 14, 0.22)",
              }}
            >
              <img
                src={imagePaola}
                alt="Paola Zerpa"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: isMobile ? "center 42%" : "center 40%",
                }}
              />
            </div>

            <PaperNote
              style={{
                justifySelf: "center",
                marginTop: isMobile ? "-58px" : "-88px",
                marginRight: 0,
                marginLeft: isMobile ? "54px" : "-112px",
                maxWidth: isMobile ? "220px" : "292px",
              }}
            >
              Diseñar también es decidir qué conservar, qué ajustar y qué ya no va más.
            </PaperNote>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: sectionPadding,
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "1160px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "320px minmax(0, 1fr)",
            gap: isMobile ? "28px" : "72px",
            alignItems: "start",
          }}
        >
          <div
            style={{
              position: isMobile ? "relative" : "sticky",
              top: isMobile ? "auto" : "112px",
              display: "grid",
              gap: "18px",
            }}
          >
            <SectionLabel number="02">Recorrido</SectionLabel>
            <h2
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: isMobile ? "30px" : "42px",
                fontWeight: 600,
                lineHeight: 1.05,
                color: "var(--mar-profundo)",
                margin: 0,
                letterSpacing: 0,
              }}
            >
              No llegué al diseño solo por estética y lo visual. Llegué por una necesidad de orden y
              estructura en mi vida.
            </h2>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: isMobile ? "15px" : "17px",
                lineHeight: 1.7,
                color: "rgba(23, 59, 68, 0.76)",
                margin: 0,
              }}
            >
              Lo que aplico en productos, procesos y comunicación empezó como una forma de entender
              cómo transitar mejor mi vida a diario. Cómo tener más claridad y aprovechar un poco
              mejor tiempo y recursos.
            </p>
          </div>

          <div style={{ display: "grid", gap: isMobile ? "18px" : "22px" }}>
            {storyBlocks.map((block, index) => (
            <article
              key={block.eyebrow}
              style={{
                position: "relative",
                background:
                  "linear-gradient(rgba(23, 59, 68, 0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(23, 59, 68, 0.025) 1px, transparent 1px), rgba(234, 223, 206, 0.76)",
                backgroundSize: "22px 22px",
                border: "1px solid rgba(23, 59, 68, 0.16)",
                borderRadius: "10px",
                padding: isMobile ? "24px 20px" : "32px 34px",
                boxShadow: "var(--shadow-soft)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  marginBottom: "16px",
                }}
              >
                <p
                  style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: "11px",
                    color: "var(--terracota-viva)",
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                    margin: 0,
                    fontWeight: 700,
                  }}
                >
                  {block.eyebrow}
                </p>
                <span
                  aria-hidden="true"
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "999px",
                    border: "1px solid rgba(23, 59, 68, 0.2)",
                    display: "grid",
                    placeItems: "center",
                    fontFamily: "Space Mono, monospace",
                    fontSize: "12px",
                    color: "var(--mar-profundo)",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 600,
                  fontSize: isMobile ? "25px" : "34px",
                  color: "var(--mar-profundo)",
                  lineHeight: "1.08",
                  marginBottom: "16px",
                  letterSpacing: 0,
                }}
              >
                {block.title}
              </h2>

              <div style={{ display: "grid", gap: "14px", maxWidth: "760px" }}>
                {block.paragraphs.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 400,
                      fontSize: isMobile ? "15px" : "16px",
                      color: "rgba(23, 59, 68, 0.76)",
                      lineHeight: "1.72",
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
        </div>
      </section>

      <section
        style={{
          padding: isMobile ? "10px 22px 72px" : "0 80px 104px",
        }}
      >
        <div
          style={{
            maxWidth: "1160px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 0.9fr) minmax(320px, 0.72fr)",
            gap: isMobile ? "24px" : "44px",
            alignItems: "stretch",
          }}
        >
          <div
            className="pz-dark"
            style={{
              borderRadius: "14px",
              padding: isMobile ? "28px 22px" : "38px",
              display: "grid",
              gap: "20px",
              alignContent: "center",
              minHeight: isMobile ? "auto" : "310px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                right: "-72px",
                bottom: "-74px",
                width: isMobile ? "180px" : "250px",
                height: isMobile ? "180px" : "250px",
                borderRadius: "999px",
                border: "1px solid rgba(230, 215, 198, 0.18)",
              }}
            />
            <SectionLabel number="03" tone="light">
              Sistemas posibles
            </SectionLabel>
            <h2
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: isMobile ? "30px" : "44px",
                fontWeight: 600,
                lineHeight: 1.05,
                color: "var(--arena-clara)",
                margin: 0,
                letterSpacing: 0,
              }}
            >
              Diseño para ordenar lo que hoy se siente pesado, disperso o difícil de sostener.
            </h2>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: isMobile ? "15px" : "17px",
                lineHeight: 1.65,
                color: "rgba(230, 215, 198, 0.86)",
                margin: 0,
                maxWidth: "620px",
              }}
            >
              Si estás construyendo una idea, un servicio, una rutina, una marca, una operación o una
              forma de trabajo que necesita más claridad, podemos mirar cómo se conectan sus partes:
              prioridades, tiempos, recursos, decisiones, personas y próximos pasos.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: "14px",
                alignItems: isMobile ? "stretch" : "center",
              }}
            >
              <BrandButton to="/contacto#email">Cuéntame tu caso</BrandButton>
              <BrandButton variant="secondary" to="/">
                Volver al inicio
              </BrandButton>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "rgba(234, 223, 206, 0.72)",
              border: "1px solid rgba(23, 59, 68, 0.16)",
              borderRadius: "10px",
              padding: isMobile ? "24px 20px" : "30px",
              display: "grid",
              gap: "16px",
              alignContent: "center",
            }}
          >
            <p
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                color: "var(--terracota-viva)",
                margin: 0,
              }}
            >
              Territorios de trabajo
            </p>
            {principles.map((principle, index) => (
              <div
                key={principle.label}
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "72px minmax(0, 1fr)",
                  gap: isMobile ? "10px" : "18px",
                  alignItems: "start",
                  padding: isMobile ? "16px 0" : "18px 0",
                  borderTop: index === 0 ? "1px solid rgba(23, 59, 68, 0.16)" : "1px solid rgba(23, 59, 68, 0.12)",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "999px",
                    border: "1px solid rgba(23, 59, 68, 0.18)",
                    display: "grid",
                    placeItems: "center",
                    fontFamily: "Space Mono, monospace",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "var(--mar-profundo)",
                    background: "rgba(240, 127, 168, 0.14)",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div style={{ display: "grid", gap: "6px" }}>
                  <h3
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: isMobile ? "20px" : "24px",
                      fontWeight: 700,
                      lineHeight: 1.15,
                      color: "var(--mar-profundo)",
                      margin: 0,
                      letterSpacing: 0,
                    }}
                  >
                    {principle.label}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: isMobile ? "15px" : "16px",
                      fontWeight: 400,
                      lineHeight: 1.55,
                      color: "rgba(23, 59, 68, 0.72)",
                      margin: 0,
                    }}
                  >
                    {principle.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
