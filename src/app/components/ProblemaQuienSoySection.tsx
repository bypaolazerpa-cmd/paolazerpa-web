import imageProblemaBg from "../../assets/paola-problema-scene.jpg";
import { useIsMobile } from "../hooks/useIsMobile";
import { BrandButton } from "./brand/BrandButton";
import { SectionLabel } from "./brand/SectionLabel";

const contexts = [
  {
    label: "Negocio",
    title: "Tu empresa sigue creciendo, pero operar cada día requiere más esfuerzo.",
    points: [
      "Procesos que dependen de personas clave.",
      "Información y comunicación dispersas.",
      "Tareas repetitivas que consumen tiempo.",
      "Dificultad para tomar decisiones con claridad.",
    ],
    accent: "var(--citron-loto)",
  },
  {
    label: "Producto digital",
    title: "Tu producto suma funciones, pero cada cambio lo vuelve más difícil de sostener.",
    points: [
      "Funcionalidades que no se conectan bien.",
      "Experiencias confusas o poco intuitivas.",
      "Una estructura que no acompaña el crecimiento.",
      "Más tiempo y esfuerzo para mantenerlo o mejorarlo.",
    ],
    accent: "var(--cielo-suave)",
  },
  {
    label: "Proyectos personales",
    title: "Tienes objetivos importantes, pero cuesta convertirlos en una estructura sostenible.",
    points: [
      "Ideas y proyectos que no avanzan.",
      "Falta de organización y prioridades.",
      "Sensación de estar ocupada, pero sin avanzar.",
      "Cambios constantes de foco.",
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
        paddingTop: isMobile ? "82px" : "112px",
        paddingBottom: 0,
        paddingLeft: isMobile ? "24px" : "80px",
        paddingRight: isMobile ? "24px" : "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src={imageProblemaBg}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          filter: "blur(22px) saturate(0.86) contrast(0.9)",
          transform: "scale(1.08)",
          opacity: 0.62,
        }}
      />
      <img
        src={imageProblemaBg}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          top: isMobile ? "18px" : "64px",
          left: isMobile ? "-18%" : "-3%",
          width: isMobile ? "136%" : "58%",
          height: isMobile ? "560px" : "640px",
          maxHeight: isMobile ? "58%" : "64%",
          objectFit: "contain",
          objectPosition: "center top",
          opacity: 0.94,
          WebkitMaskImage: isMobile
            ? "linear-gradient(180deg, #000 0%, #000 72%, transparent 100%)"
            : "linear-gradient(90deg, #000 0%, #000 80%, transparent 100%)",
          maskImage: isMobile
            ? "linear-gradient(180deg, #000 0%, #000 72%, transparent 100%)"
            : "linear-gradient(90deg, #000 0%, #000 80%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: isMobile
            ? "linear-gradient(180deg, rgba(12,16,14,0.72) 0%, rgba(12,16,14,0.36) 46%, rgba(12,16,14,0.82) 100%)"
            : "linear-gradient(90deg, rgba(12,16,14,0.08) 0%, rgba(12,16,14,0.16) 34%, rgba(12,16,14,0.58) 58%, rgba(12,16,14,0.92) 100%)",
        }}
      />
      <div style={{ maxWidth: "1160px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "minmax(360px, 0.78fr) minmax(0, 0.92fr)",
            gap: isMobile ? "28px" : "64px",
            alignItems: "start",
            marginBottom: isMobile ? "34px" : "62px",
            minHeight: isMobile ? "auto" : "420px",
          }}
        >
          {!isMobile && <div aria-hidden="true" />}
          <div
            style={{
              alignSelf: "center",
              padding: isMobile ? "0" : "28px 0 26px",
            }}
          >
            <SectionLabel number="02" tone="light">
              El problema
            </SectionLabel>
            <h2
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 600,
                fontSize: isMobile ? "36px" : "56px",
                color: "var(--arena-clara)",
                lineHeight: 1.04,
                margin: "22px 0 0",
                maxWidth: "660px",
              }}
            >
              Todo lo que construyes depende del sistema que hay detrás.
            </h2>

            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 400,
                fontSize: isMobile ? "16px" : "18px",
                color: "rgba(250, 248, 244, 0.9)",
                lineHeight: 1.72,
                margin: isMobile ? "22px 0 0" : "26px 0 0",
                maxWidth: "560px",
              }}
            >
              Con el tiempo, ese sistema puede dejar de acompañar lo que estás construyendo. Y eso
              comienza a notarse de distintas maneras.
            </p>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
            gap: isMobile ? "16px" : "18px",
            padding: isMobile ? "22px 0 10px" : "34px 18px 24px",
            marginLeft: isMobile ? "0" : "-18px",
            marginRight: isMobile ? "0" : "-18px",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: isMobile ? "-36px -24px -18px" : "-92px -80px -30px",
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
                  fontSize: isMobile ? "24px" : "30px",
                  color: "var(--arena-clara)",
                  lineHeight: 1.08,
                  margin: "0 0 22px",
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
            backgroundColor: "var(--cielo-suave)",
            color: "var(--mar-profundo)",
            padding: isMobile ? "48px 24px 54px" : "56px 80px 64px",
            clipPath:
              "polygon(0 8%, 8% 2%, 17% 9%, 27% 3%, 38% 10%, 48% 5%, 60% 11%, 72% 4%, 84% 10%, 94% 3%, 100% 8%, 100% 100%, 0 100%)",
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
                fontSize: isMobile ? "21px" : "28px",
                lineHeight: 1.24,
                fontWeight: 600,
                margin: 0,
              }}
            >
              Si te identificas con alguna de estas situaciones, es momento de darle una estructura
              más clara a lo que estás construyendo.
            </p>
            <BrandButton to="/contacto#email">Hablemos de tu caso</BrandButton>
          </div>
        </div>
      </div>
    </section>
  );
}
