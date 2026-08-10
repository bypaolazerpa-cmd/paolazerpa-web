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
    short: "Diseño cómo funciona tu producto.",
    body: "Defino flujos, información y pantallas para plataformas, dashboards y herramientas digitales.",
    image: imageHechoSistema,
  },
  {
    number: "02",
    title: "Sistema de trabajo",
    short: "Ordeno cómo funciona una operación.",
    body: "Organizo procesos, responsables, información y herramientas para reducir tareas manuales y hacer más claro el trabajo del equipo.",
    image: imageSistemaMedida,
  },
  {
    number: "03",
    title: "Web o tienda online",
    short: "Diseño una experiencia clara para presentar y vender.",
    body: "Organizo contenido, navegación y acciones para que una persona entienda qué ofreces y pueda avanzar fácilmente.",
    image: imageEspacioDigital,
  },
];

const personalOffer = {
  title: "También trabajo con sistemas personales.",
  body: "Puedo ayudarte a ordenar proyectos, objetivos, pendientes y rutinas en una estructura simple de seguimiento.",
};

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
              ¿En qué puedo ayudarte?
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
            Diseño productos digitales y formas de trabajo para que sean más claras, útiles y fáciles de mantener.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
            gap: isMobile ? "18px" : "20px",
          }}
        >
          {services.map((service) => (
            <article key={service.title} className="service-card" tabIndex={0}>
              <div className="service-card-inner">
                <div className="service-card-face service-card-front">
                  <img src={service.image} alt="" aria-hidden="true" loading="lazy" decoding="async" />
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

        <div
          className="personal-systems-offer"
          style={{
            position: "relative",
            overflow: "hidden",
            marginTop: isMobile ? "18px" : "22px",
            padding: isMobile ? "24px 20px" : "28px 30px",
            border: "1px solid rgba(23, 59, 68, 0.2)",
            borderTop: "3px solid var(--magenta)",
            borderRadius: "8px",
            backgroundColor: "rgba(250, 248, 244, 0.72)",
            backgroundImage:
              "linear-gradient(rgba(23,59,68,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(23,59,68,0.045) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1fr) auto",
            gap: "18px",
            alignItems: "center",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: isMobile ? "-38px" : "-24px",
              top: isMobile ? "-42px" : "-54px",
              width: isMobile ? "130px" : "170px",
              height: isMobile ? "130px" : "170px",
              border: "1px solid rgba(240, 127, 168, 0.4)",
              borderRadius: "999px",
              opacity: 0.8,
            }}
          />
          <div style={{ position: "relative" }}>
            <p
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--magenta)",
                margin: "0 0 14px",
              }}
            >
              04 — Sistemas personales
            </p>
            <h3
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 600,
                fontSize: isMobile ? "24px" : "28px",
                lineHeight: 1.1,
                color: "var(--mar-profundo)",
                margin: "0 0 10px",
              }}
            >
              {personalOffer.title}
            </h3>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "15px",
                lineHeight: 1.58,
                color: "rgba(23, 59, 68, 0.82)",
                margin: 0,
              }}
            >
              {personalOffer.body}
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: isMobile ? "34px" : "44px",
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
            Si todavía no sabes qué necesitas, empezamos por entender el problema.
          </p>
          <BrandButton to="/contacto#email">Cuéntame qué necesitas resolver</BrandButton>
        </div>
      </div>
    </section>
  );
}
