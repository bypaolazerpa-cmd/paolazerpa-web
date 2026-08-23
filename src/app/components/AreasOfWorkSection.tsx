import imageProductExperience from "../../assets/area-producto-experiencia.png";
import imageInformationStructure from "../../assets/area-informacion-estructura.png";
import imageFlowsInteraction from "../../assets/area-recorridos-interaccion.png";
import imageInterfaceEvolution from "../../assets/area-interfaz-evolucion.png";
import { useIsMobile } from "../hooks/useIsMobile";
import { SectionLabel } from "./brand/SectionLabel";

const areas = [
  {
    number: "01",
    title: "Producto y experiencia",
    description:
      "Defino qué necesita permitir el producto, para quién y qué experiencia debe sostener para que las personas puedan avanzar y lograr lo que necesitan.",
    image: imageProductExperience,
    imageAlt: "Interfaz de producto digital representada en un smartphone",
  },
  {
    number: "02",
    title: "Información y estructura",
    description:
      "Organizo funciones, contenidos y relaciones para que la información aparezca donde hace falta y pueda usarse dentro del recorrido.",
    image: imageInformationStructure,
    imageAlt: "Dashboard modular con paneles, gráficos y controles",
  },
  {
    number: "03",
    title: "Recorridos e interacción",
    description:
      "Diseño pasos, acciones, estados, respuestas y excepciones para definir cómo una persona avanza y qué ocurre en cada momento.",
    image: imageFlowsInteraction,
    imageAlt: "Recorrido visual formado por nodos y conexiones",
  },
  {
    number: "04",
    title: "Interfaz y evolución",
    description:
      "Llevo esas decisiones a pantallas y componentes, acompaño su implementación y ajusto el producto a medida que aparece nueva evidencia.",
    image: imageInterfaceEvolution,
    imageAlt: "Composición de interfaz modular y componentes conectados",
  },
];

export function AreasOfWorkSection() {
  const isMobile = useIsMobile();
  const isTablet = useIsMobile(1100) && !isMobile;
  const imageSize = isMobile ? "116px" : isTablet ? "138px" : "164px";

  return (
    <section
      id="areas-de-trabajo"
      style={{
        backgroundColor: "var(--arena-clara)",
        color: "var(--mar-profundo)",
        padding: isMobile ? "78px 24px 82px" : isTablet ? "92px 48px 100px" : "112px 80px 118px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1160px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <SectionLabel number="03">Áreas de trabajo</SectionLabel>

        <h2
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontWeight: 600,
            fontSize: isMobile ? "38px" : isTablet ? "50px" : "64px",
            lineHeight: 1.01,
            letterSpacing: "-0.035em",
            maxWidth: "900px",
            margin: isMobile ? "24px 0 42px" : "28px 0 58px",
          }}
        >
          Trabajo sobre cómo se estructura, se recorre, se usa y evoluciona un producto digital.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))",
            borderTop: "1px solid rgba(23, 59, 68, 0.2)",
          }}
        >
          {areas.map((area, index) => (
            <article
              key={area.number}
              style={{
                display: "grid",
                gridTemplateColumns: `${imageSize} minmax(0, 1fr)`,
                gap: isMobile ? "18px" : "26px",
                alignItems: "center",
                minWidth: 0,
                minHeight: isMobile ? "206px" : isTablet ? "240px" : "270px",
                padding: isMobile ? "24px 0" : "30px 24px 30px 0",
                borderBottom: "1px solid rgba(23, 59, 68, 0.2)",
                borderRight:
                  !isMobile && index % 2 === 0 ? "1px solid rgba(23, 59, 68, 0.2)" : "none",
                paddingLeft: !isMobile && index % 2 === 1 ? "24px" : 0,
              }}
            >
              <div
                style={{
                  width: imageSize,
                  height: imageSize,
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "1px solid rgba(23, 59, 68, 0.22)",
                  backgroundColor: "#f1eae2",
                  flexShrink: 0,
                }}
              >
                <img
                  src={area.image}
                  alt={area.imageAlt}
                  loading="lazy"
                  decoding="async"
                  style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
                />
              </div>

              <div style={{ minWidth: 0 }}>
                <p
                  style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    color: index % 2 === 0 ? "var(--magenta)" : "var(--citron-loto)",
                    margin: "0 0 12px",
                  }}
                >
                  {area.number}
                </p>
                <h3
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 600,
                    fontSize: isMobile ? "24px" : isTablet ? "26px" : "29px",
                    lineHeight: 1.05,
                    margin: "0 0 12px",
                  }}
                >
                  {area.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: isMobile ? "15px" : "16px",
                    lineHeight: 1.5,
                    color: "rgba(23, 59, 68, 0.82)",
                    margin: 0,
                  }}
                >
                  {area.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
