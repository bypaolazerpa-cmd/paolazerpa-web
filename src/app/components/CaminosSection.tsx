import imageEspacioDigital from "../../assets/service-espacio-digital.jpg";
import imageHechoSistema from "../../assets/service-hecho-sistema.jpg";
import imageSistemaMedida from "../../assets/service-sistema-medida.jpg";
import imageVidaSistema from "../../assets/service-vida-sistema.jpg";
import { useIsMobile } from "../hooks/useIsMobile";
import { BrandButton } from "./brand/BrandButton";
import { SectionLabel } from "./brand/SectionLabel";

const services = [
  {
    number: "01",
    title: "Sistema a medida",
    short: "Una estructura propia para que tu trabajo funcione mejor.",
    body:
      "Organizamos procesos, tareas, responsabilidades, información y herramientas para que tu trabajo avance con mayor claridad y menos dependencia.",
    image: imageSistemaMedida,
  },
  {
    number: "02",
    title: "Tu espacio digital",
    short: "Un espacio pensado para que te encuentren, te entiendan y te elijan.",
    body:
      "Diseñamos páginas web y tiendas online que comunican con claridad, presentan lo que haces y ayudan a que te entiendan y te elijan.",
    image: imageEspacioDigital,
  },
  {
    number: "03",
    title: "Hecho sistema",
    short: "Una solución digital propia para una necesidad concreta.",
    body:
      "Creamos plataformas, dashboards y herramientas digitales que convierten necesidades complejas en soluciones claras y útiles.",
    image: imageHechoSistema,
  },
  {
    number: "04",
    title: "Tu vida, tu sistema",
    short: "Una estructura personal para sostener todo lo que quieres construir.",
    body:
      "Organizamos proyectos, objetivos, ideas y prioridades para que puedas sostener lo que quieres construir con claridad y enfoque.",
    image: imageVidaSistema,
  },
];

export function CaminosSection() {
  const isMobile = useIsMobile();

  return (
    <section
      id="servicios"
      style={{
        backgroundColor: "var(--arena-clara)",
        paddingTop: isMobile ? "86px" : "112px",
        paddingBottom: isMobile ? "88px" : "118px",
        paddingLeft: isMobile ? "24px" : "80px",
        paddingRight: isMobile ? "24px" : "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1220px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 0.86fr) minmax(320px, 0.76fr)",
            gap: isMobile ? "24px" : "54px",
            alignItems: "end",
            marginBottom: isMobile ? "34px" : "50px",
          }}
        >
          <div>
            <SectionLabel number="04">Servicios</SectionLabel>
            <h2
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 600,
                fontSize: isMobile ? "36px" : "60px",
                color: "var(--mar-profundo)",
                lineHeight: 1.02,
                margin: "22px 0 0",
              }}
            >
              ¿Cuáles son mis servicios?
            </h2>
          </div>

          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 400,
              fontSize: isMobile ? "16px" : "18px",
              color: "rgba(23, 59, 68, 0.86)",
              lineHeight: 1.72,
              margin: 0,
              maxWidth: "540px",
            }}
          >
            Toca o pasa el mouse por una tarjeta para ver el detalle.
          </p>
        </div>

        <div
          style={{
            marginBottom: isMobile ? "34px" : "44px",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1fr) auto",
            gap: "22px",
            alignItems: "center",
            borderTop: "1px solid rgba(23, 59, 68, 0.16)",
            borderBottom: "1px solid rgba(23, 59, 68, 0.16)",
            paddingTop: isMobile ? "26px" : "30px",
            paddingBottom: isMobile ? "26px" : "30px",
          }}
        >
          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: isMobile ? "18px" : "22px",
              lineHeight: 1.45,
              color: "var(--mar-profundo)",
              margin: 0,
              maxWidth: "760px",
            }}
          >
            Si no sabes por dónde empezar, lo revisamos juntas.
          </p>
          <BrandButton to="/contacto#email">Cuéntame qué estás construyendo</BrandButton>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(4, minmax(0, 1fr))",
            gap: isMobile ? "18px" : "20px",
          }}
        >
          {services.map((service) => (
            <article key={service.title} className="service-card" tabIndex={0}>
              <div className="service-card-inner">
                <div className="service-card-face service-card-front">
                  <img src={service.image} alt="" aria-hidden="true" />
                  <div className="service-card-overlay" />
                  <div className="service-card-copy">
                    <p>{service.number}</p>
                    <h3>{service.title}</h3>
                    <span>{service.short}</span>
                  </div>
                </div>
                <div className="service-card-face service-card-back">
                  <p>{service.number}</p>
                  <h3>{service.title}</h3>
                  <span>{service.body}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
