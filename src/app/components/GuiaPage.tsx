import { useNavigate } from "react-router";
import { NavBar } from "./NavBar";
import { FooterSection } from "./FooterSection";
import { useIsMobile } from "../hooks/useIsMobile";

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#7C9E8A"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const pillars = [
  {
    tag: "RAÍZ",
    color: "#7C9E8A",
    title: "Claridad interior",
    body:
      "Identificás lo que importa de verdad. No lo que suena bien, sino lo que te mueve. Desde ahí construís todo lo demás.",
  },
  {
    tag: "TALLO",
    color: "#C97B5A",
    title: "Estructura flexible",
    body:
      "Diseñás semanas que te sostienen sin ahogarte. Un sistema que se adapta a tu energía real, no a un horario rígido.",
  },
  {
    tag: "FLOR",
    color: "#9B8FB0",
    title: "Acción con sentido",
    body:
      "Actuás desde un lugar de enfoque. Menos ruido, más avance. Cada semana te acerca a donde querés estar.",
  },
];

const checkItems = [
  "Identificar qué está robando tu energía semana a semana",
  "Diseñar una estructura semanal que se adapte a tu ritmo",
  "Priorizar sin culpa usando el enfoque Raíz–Tallo–Flor",
  "Empezar cada lunes con intención y terminar el viernes con cierre",
];

export function GuiaPage() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const px = isMobile ? "24px" : "80px";
  const maxW = "860px";

  return (
    <div style={{ backgroundColor: "#FAF8F4", overflowX: "hidden" }}>
      <NavBar />

      {/* ── HERO ── */}
      <section
        style={{
          backgroundColor: "#1A1A2E",
          paddingTop: isMobile ? "112px" : "148px",
          paddingBottom: isMobile ? "72px" : "100px",
          paddingLeft: px,
          paddingRight: px,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* decorative circle */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: isMobile ? "-60px" : "-120px",
            width: isMobile ? "260px" : "440px",
            height: isMobile ? "260px" : "440px",
            borderRadius: "50%",
            backgroundColor: "#F5C842",
            opacity: 0.06,
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: maxW, margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* supertitle */}
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: isMobile ? "9px" : "10px",
              color: "#F5C842",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "20px",
              fontWeight: 400,
            }}
          >
            Guía gratuita
          </p>

          {/* Main title */}
          <h1
            style={{
              fontFamily: "Fraunces, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: isMobile ? "40px" : "64px",
              color: "#FAF8F4",
              lineHeight: "1.1",
              marginBottom: "24px",
            }}
          >
            Mente clara,<br />semana diseñada.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 400,
              fontSize: isMobile ? "16px" : "19px",
              color: "#D6D0C4",
              lineHeight: "1.7",
              marginBottom: "40px",
              maxWidth: "560px",
            }}
          >
            Una guía práctica para que pares de improvisar tu semana y empieces a
            vivirla con intención. Sin planillas complicadas. Sin perfección.
          </p>

          {/* CTA */}
          <button
            style={{
              backgroundColor: "#F5C842",
              color: "#1A1A2E",
              fontFamily: "Space Mono, monospace",
              fontSize: isMobile ? "10px" : "11px",
              letterSpacing: "2px",
              padding: isMobile ? "16px 28px" : "18px 40px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              textTransform: "uppercase",
              fontWeight: 400,
            }}
          >
            Descargar guía
          </button>
        </div>
      </section>

      {/* ── PROBLEMA ── */}
      <section
        style={{
          backgroundColor: "#FAF8F4",
          paddingTop: isMobile ? "64px" : "96px",
          paddingBottom: isMobile ? "64px" : "96px",
          paddingLeft: px,
          paddingRight: px,
        }}
      >
        <div style={{ maxWidth: maxW, margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: isMobile ? "9px" : "10px",
              color: "#C97B5A",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "20px",
              fontWeight: 400,
            }}
          >
            El problema
          </p>

          <h2
            style={{
              fontFamily: "Fraunces, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: isMobile ? "30px" : "44px",
              color: "#1A1A2E",
              lineHeight: "1.2",
              marginBottom: "28px",
            }}
          >
            Ocupada no es lo mismo que avanzando.
          </h2>

          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 400,
              fontSize: isMobile ? "15px" : "17px",
              color: "#4A4A6A",
              lineHeight: "1.8",
              maxWidth: "620px",
            }}
          >
            Llegás al viernes agotada y con la sensación de que no hiciste nada importante.
            Tenés mil cosas en la cabeza, pero ningún hilo del que tirar. Empezás la semana
            sin claridad y la terminás con culpa.
            <br /><br />
            No es un problema de disciplina. Es un problema de diseño.
          </p>
        </div>
      </section>

      {/* ── QUÉ VAS A HACER ── */}
      <section
        style={{
          backgroundColor: "#222238",
          paddingTop: isMobile ? "64px" : "96px",
          paddingBottom: isMobile ? "64px" : "96px",
          paddingLeft: px,
          paddingRight: px,
        }}
      >
        <div style={{ maxWidth: maxW, margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: isMobile ? "9px" : "10px",
              color: "#F5C842",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "20px",
              fontWeight: 400,
            }}
          >
            Con esta guía vas a
          </p>

          <h2
            style={{
              fontFamily: "Fraunces, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: isMobile ? "28px" : "40px",
              color: "#FAF8F4",
              lineHeight: "1.2",
              marginBottom: "40px",
            }}
          >
            Parar el ruido y empezar a moverse de verdad.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {checkItems.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    marginTop: "2px",
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: "#1A3A2E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CheckIcon />
                </span>
                <p
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 400,
                    fontSize: isMobile ? "15px" : "16px",
                    color: "#D6D0C4",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EL SISTEMA: RAÍZ / TALLO / FLOR ── */}
      <section
        style={{
          backgroundColor: "#FAF8F4",
          paddingTop: isMobile ? "64px" : "96px",
          paddingBottom: isMobile ? "64px" : "96px",
          paddingLeft: px,
          paddingRight: px,
        }}
      >
        <div style={{ maxWidth: maxW, margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: isMobile ? "9px" : "10px",
              color: "#9B8FB0",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "20px",
              fontWeight: 400,
            }}
          >
            El sistema
          </p>

          <h2
            style={{
              fontFamily: "Fraunces, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: isMobile ? "28px" : "40px",
              color: "#1A1A2E",
              lineHeight: "1.2",
              marginBottom: isMobile ? "36px" : "52px",
            }}
          >
            Tres capas. Un flujo.
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? "16px" : "24px",
            }}
          >
            {pillars.map((p) => (
              <div
                key={p.tag}
                style={{
                  flex: 1,
                  backgroundColor: "#FFFFFF",
                  borderRadius: "10px",
                  padding: isMobile ? "24px" : "28px",
                  borderTop: `3px solid ${p.color}`,
                  boxShadow: "0 2px 12px 0 #1A1A2E0A",
                }}
              >
                <p
                  style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: "9px",
                    color: p.color,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                    fontWeight: 400,
                  }}
                >
                  {p.tag}
                </p>
                <p
                  style={{
                    fontFamily: "MuseoModerno, sans-serif",
                    fontWeight: 700,
                    fontSize: isMobile ? "18px" : "20px",
                    color: "#1A1A2E",
                    marginBottom: "12px",
                  }}
                >
                  {p.title}
                </p>
                <p
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "#4A4A6A",
                    lineHeight: "1.7",
                    margin: 0,
                  }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        style={{
          backgroundColor: "#1A1A2E",
          paddingTop: isMobile ? "72px" : "100px",
          paddingBottom: isMobile ? "72px" : "100px",
          paddingLeft: px,
          paddingRight: px,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            backgroundColor: "#7C9E8A",
            opacity: 0.07,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: maxW,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: isMobile ? "9px" : "10px",
              color: "#F5C842",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "20px",
              fontWeight: 400,
            }}
          >
            Es gratis. Es tuya.
          </p>

          <h2
            style={{
              fontFamily: "Fraunces, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: isMobile ? "34px" : "52px",
              color: "#FAF8F4",
              lineHeight: "1.15",
              marginBottom: "20px",
            }}
          >
            Empezá esta semana.
          </h2>

          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 400,
              fontSize: isMobile ? "15px" : "17px",
              color: "#D6D0C4",
              lineHeight: "1.7",
              marginBottom: "40px",
              maxWidth: "480px",
              margin: "0 auto 40px",
            }}
          >
            Descargá la guía gratuita y empezá a diseñar semanas con claridad, estructura y sentido.
          </p>

          <a
            href="/guia-ecosistema-personal.pdf"
            download
            style={{
              display: "inline-flex", alignItems: "center",
              backgroundColor: "#F5C842", color: "#1A1A2E",
              fontFamily: "Space Mono, monospace",
              fontSize: isMobile ? "10px" : "11px",
              letterSpacing: "2px", padding: isMobile ? "16px 32px" : "18px 48px",
              borderRadius: "4px", cursor: "pointer",
              textTransform: "uppercase", fontWeight: 400,
              textDecoration: "none", marginBottom: "32px",
            }}
          >
            DESCARGAR GUÍA
          </a>

          <br />

          <button
            onClick={() => navigate("/")}
            style={{
              background: "none",
              border: "none",
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "13px",
              color: "#6B6B8A",
              cursor: "pointer",
              letterSpacing: "0.5px",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            ← Volver al inicio
          </button>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
