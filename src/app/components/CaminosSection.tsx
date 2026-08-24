import imageEspacioDigital from "../../assets/service-espacio-digital.jpg";
import imageHechoSistema from "../../assets/service-hecho-sistema.jpg";
import imageSistemaMedida from "../../assets/service-sistema-medida.jpg";
import { useIsMobile } from "../hooks/useIsMobile";
import { BrandButton } from "./brand/BrandButton";
import { SectionLabel } from "./brand/SectionLabel";

const services = [
  {
    number: "01",
    title: "Producto digital",
    description:
      "Diseño o rediseño plataformas, dashboards y herramientas digitales trabajando su estructura, recorridos, interacción e interfaz.",
    purpose:
      "Para que el producto acompañe mejor lo que las personas necesitan hacer y la información que necesitan para avanzar.",
    image: imageHechoSistema,
  },
  {
    number: "02",
    title: "Sistema de trabajo",
    description:
      "Organizo procesos, responsabilidades, información y herramientas para definir una forma de trabajo que el equipo pueda sostener.",
    purpose:
      "Para reducir seguimiento manual, tareas repetidas y dependencia de la memoria o de una sola persona.",
    image: imageSistemaMedida,
  },
  {
    number: "03",
    title: "Web o tienda online",
    description: "Diseño la estructura, el contenido, la navegación y la interfaz de webs y tiendas online.",
    purpose:
      "Para que una persona pueda entender qué encuentra, recorrerlo y completar acciones como consultar, elegir o comprar.",
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
              Puedes trabajar conmigo para diseñar o mejorar un producto digital, una forma de trabajo o una web / tienda online.
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
                    <div className="service-card-purpose">
                      <span className="service-card-purpose-label">Para qué</span>
                      <span>{service.purpose}</span>
                    </div>
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
