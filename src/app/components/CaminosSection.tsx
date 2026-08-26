import imageEspacioDigital from "../../assets/service-espacio-digital.jpg";
import imageHechoSistema from "../../assets/service-hecho-sistema.jpg";
import imageSistemaMedida from "../../assets/service-sistema-medida.jpg";
import { useIsMobile } from "../hooks/useIsMobile";
import { BrandButton } from "./brand/BrandButton";
import { SectionLabel } from "./brand/SectionLabel";

const services = [
  {
    number: "01",
    title: "PRODUCTO DIGITAL",
    description:
      "Diseño o rediseño plataformas, dashboards y herramientas para ordenar su estructura, recorridos, interacción e interfaz.",
    image: imageHechoSistema,
  },
  {
    number: "02",
    title: "SISTEMA DE TRABAJO",
    description:
      "Organizo procesos, responsabilidades, información y herramientas para reducir tareas manuales y dependencias innecesarias.",
    image: imageSistemaMedida,
  },
  {
    number: "03",
    title: "WEB O TIENDA ONLINE",
    description:
      "Diseño estructura, contenido, navegación e interfaz para que las personas puedan entender, recorrer y completar acciones con claridad.",
    image: imageEspacioDigital,
  },
];

export function CaminosSection() {
  const isMobile = useIsMobile();
  const isTablet = useIsMobile(1100) && !isMobile;

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
            gridTemplateColumns: "1fr",
            gap: isMobile ? "24px" : "54px",
            alignItems: "end",
            marginBottom: isMobile ? "34px" : "50px",
          }}
        >
          <div>
            <SectionLabel number="05">Servicios</SectionLabel>
            <h2
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 600,
                fontSize: isMobile ? "36px" : isTablet ? "44px" : "50px",
                color: "var(--mar-profundo)",
                lineHeight: 1.02,
                margin: "22px 0 0",
                maxWidth: "980px",
              }}
            >
              Puedes trabajar conmigo en productos digitales, sistemas de trabajo y webs o tiendas online.
            </h2>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
            gap: isMobile ? "18px" : "20px",
          }}
        >
          {services.map((service) => (
            <article key={service.title} className="service-card service-card--flat" tabIndex={0}>
              <div className="service-card-inner">
                <div className="service-card-face service-card-front">
                  <img src={service.image} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                  <div className="service-card-overlay" />
                  <div className="service-card-copy">
                    <p>{service.number}</p>
                    <h3>{service.title}</h3>
                    <span className="service-card-primary">{service.description}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className="services-cta"
          style={{
            marginTop: isMobile ? "34px" : "44px",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1fr) auto",
            gap: "18px",
            alignItems: "center",
            borderTop: "1px solid rgba(23, 59, 68, 0.16)",
            borderBottom: "1px solid rgba(23, 59, 68, 0.16)",
            paddingTop: isMobile ? "24px" : "28px",
            paddingBottom: isMobile ? "24px" : "28px",
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
            Cuéntame qué estás intentando resolver.
          </p>
          <BrandButton to="/contacto">Hablemos ↗</BrandButton>
        </div>
      </div>
    </section>
  );
}
