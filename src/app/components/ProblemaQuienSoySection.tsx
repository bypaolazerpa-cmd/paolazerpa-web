import { useIsMobile } from "../hooks/useIsMobile";
import { BrandButton } from "./brand/BrandButton";
import { SectionLabel } from "./brand/SectionLabel";

const contexts = [
  {
    label: "Negocio",
    title: "Tu operación depende demasiado de ti.",
    points: [
      "Procesos que solo conoce una persona del equipo.",
      "Información repartida entre chats, archivos y herramientas.",
      "Tareas repetitivas que podrían resolverse con un flujo claro.",
      "Decisiones que se frenan porque nadie ve el panorama completo.",
    ],
    accent: "var(--citron-loto)",
  },
  {
    label: "Producto digital",
    title: "Tu producto crece, pero la experiencia se desordena.",
    points: [
      "Funcionalidades que resuelven cosas aisladas y no forman un recorrido.",
      "Personas usuarias que no encuentran qué hacer después.",
      "Información, reglas y pantallas que se contradicen.",
      "Cada cambio cuesta más porque la estructura no está clara.",
    ],
    accent: "var(--cielo-suave)",
  },
  {
    label: "Proyectos personales",
    title: "Tus ideas avanzan, pero cuesta sostenerlas en el día a día.",
    points: [
      "Falta de organización y prioridades en tus rutinas semanales.",
      "Proyectos que se mezclan y compiten por tu atención.",
      "Pendientes que se acumulan y cuesta cerrar.",
      "Dificultad para convertir ideas en próximos pasos.",
    ],
    accent: "var(--magenta)",
  },
];

export function ProblemaQuienSoySection() {
  const isMobile = useIsMobile();

  return (
    <section
      id="problema"
      style={{
        backgroundColor: "var(--mar-profundo)",
        paddingTop: isMobile ? "68px" : "82px",
        paddingBottom: 0,
        paddingLeft: isMobile ? "24px" : "80px",
        paddingRight: isMobile ? "24px" : "80px",
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
            "linear-gradient(rgba(230,215,198,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(230,215,198,0.04) 1px, transparent 1px), linear-gradient(135deg, rgba(23,59,68,0.96) 0%, rgba(23,59,68,0.9) 48%, rgba(12,16,14,0.92) 100%)",
          backgroundSize: "38px 38px, 38px 38px, auto",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: isMobile ? "70px" : "96px",
          left: isMobile ? "-28px" : "42px",
          width: isMobile ? "70%" : "460px",
          height: isMobile ? "92px" : "132px",
          background: "rgba(230, 215, 198, 0.12)",
          clipPath:
            "polygon(0 18%, 9% 8%, 19% 22%, 29% 10%, 42% 19%, 55% 7%, 67% 20%, 80% 11%, 91% 22%, 100% 13%, 100% 100%, 0 100%)",
          transform: "rotate(-2.5deg)",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: isMobile ? "-46px" : "7%",
          top: isMobile ? "170px" : "132px",
          width: isMobile ? "160px" : "280px",
          height: isMobile ? "160px" : "280px",
          border: "1px solid rgba(230, 215, 198, 0.16)",
          borderRadius: "999px",
          opacity: 0.7,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: isMobile ? "12px" : "14%",
          bottom: isMobile ? "28%" : "26%",
          width: isMobile ? "180px" : "320px",
          height: isMobile ? "86px" : "120px",
          background: "rgba(169, 205, 227, 0.12)",
          clipPath:
            "polygon(0 0, 100% 0, 100% 78%, 91% 70%, 80% 86%, 67% 72%, 55% 88%, 42% 75%, 30% 90%, 18% 76%, 8% 88%, 0 78%)",
          transform: "rotate(3deg)",
        }}
      />
      <div style={{ maxWidth: "1160px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "minmax(280px, 0.45fr) minmax(0, 0.98fr)",
            gap: isMobile ? "22px" : "38px",
            alignItems: "start",
            marginBottom: isMobile ? "24px" : "30px",
            minHeight: isMobile ? "auto" : "286px",
          }}
        >
          {!isMobile && <div aria-hidden="true" />}
          <div
            style={{
              alignSelf: "center",
              padding: isMobile ? "0" : "14px 0 18px",
            }}
          >
            <SectionLabel number="02" tone="light">
              El problema
            </SectionLabel>
            <h2
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 600,
                fontSize: isMobile ? "34px" : "48px",
                color: "var(--arena-clara)",
                lineHeight: 1.02,
                margin: "18px 0 0",
                maxWidth: "590px",
              }}
            >
              Se nota distinto según lo que estás construyendo.
            </h2>

            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 400,
                fontSize: isMobile ? "16px" : "17px",
                color: "rgba(250, 248, 244, 0.9)",
                lineHeight: 1.54,
                margin: isMobile ? "18px 0 0" : "18px 0 0",
                maxWidth: "540px",
              }}
            >
              En un negocio, un producto digital o un proyecto personal, el desorden aparece con
              señales diferentes. Estas son algunas de las más comunes.
            </p>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
            gap: isMobile ? "16px" : "18px",
            padding: isMobile ? "18px 0 10px" : "20px 18px 24px",
            marginLeft: isMobile ? "0" : "-18px",
            marginRight: isMobile ? "0" : "-18px",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: isMobile ? "-28px -24px -18px" : "-48px -80px -30px",
              background: isMobile
                ? "linear-gradient(180deg, rgba(12,16,14,0.04) 0%, rgba(12,16,14,0.68) 26%, rgba(12,16,14,0.78) 100%)"
                : "linear-gradient(180deg, rgba(12,16,14,0) 0%, rgba(12,16,14,0.5) 24%, rgba(12,16,14,0.74) 100%)",
              backdropFilter: "blur(8px)",
              WebkitMaskImage:
                "linear-gradient(180deg, transparent 0%, #000 18%, #000 100%)",
              maskImage: "linear-gradient(180deg, transparent 0%, #000 18%, #000 100%)",
            }}
          />
          {contexts.map((context) => (
            <article
              key={context.label}
              style={{
                position: "relative",
                background:
                  "linear-gradient(180deg, rgba(250,248,244,0.14) 0%, rgba(12,16,14,0.58) 38%, rgba(12,16,14,0.68) 100%)",
                border: "1px solid rgba(230, 215, 198, 0.3)",
                borderRadius: "8px",
                backdropFilter: "blur(10px)",
                padding: isMobile ? "24px 20px" : "30px 28px",
                minHeight: isMobile ? "auto" : "396px",
              }}
            >
              <p
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "11px",
                  color: context.accent,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  margin: "0 0 18px",
                  fontWeight: 700,
                }}
              >
                {context.label}
              </p>
              <h3
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 600,
                  fontSize: isMobile ? "24px" : "26px",
                  color: "var(--arena-clara)",
                  lineHeight: 1.12,
                  margin: "0 0 22px",
                  maxWidth: "360px",
                }}
              >
                {context.title}
              </h3>
              <div style={{ display: "grid", gap: "12px" }}>
                {context.points.map((point) => (
                  <p
                    key={point}
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "15px",
                      lineHeight: 1.56,
                      color: "rgba(250, 248, 244, 0.88)",
                      margin: 0,
                    }}
                  >
                    — {point}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div
          style={{
            marginTop: isMobile ? "44px" : "58px",
            marginLeft: isMobile ? "-24px" : "-80px",
            marginRight: isMobile ? "-24px" : "-80px",
            className: "problem-cta-paper",
            backgroundColor: "var(--surface-paper)",
            color: "var(--mar-profundo)",
            padding: isMobile ? "48px 24px 54px" : "56px 80px 64px",
            clipPath: "polygon(0 8%, 4% 3%, 10% 8%, 17% 2%, 24% 9%, 32% 4%, 40% 10%, 49% 3%, 58% 8%, 67% 2%, 76% 9%, 85% 3%, 94% 8%, 100% 4%, 100% 94%, 95% 98%, 88% 92%, 80% 99%, 71% 93%, 62% 98%, 53% 91%, 44% 99%, 35% 93%, 26% 98%, 17% 91%, 8% 97%, 0 92%)",
          }}
        >
          <div
            style={{
              maxWidth: "960px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1fr) auto",
              gap: "24px",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: isMobile ? "18px" : "24px",
                lineHeight: 1.24,
                fontWeight: 600,
                margin: 0,
              }}
            >
              Es momento de diseñar conmigo una estructura para lo que estás construyendo.
            </p>
            <BrandButton to="/contacto#email">Hablemos de tu caso</BrandButton>
          </div>
        </div>
      </div>
    </section>
  );
}
