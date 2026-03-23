import { useNavigate } from "react-router";
import { NavBar } from "./NavBar";
import { FooterSection } from "./FooterSection";
import { useIsMobile } from "../hooks/useIsMobile";

export function ContactoPage() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const px = isMobile ? "24px" : "80px";

  return (
    <div style={{ backgroundColor: "#FAF8F4", overflowX: "hidden" }}>
      <NavBar />

      {/* HERO */}
      <section style={{ backgroundColor: "#1A1A2E", paddingTop: isMobile ? "112px" : "148px", paddingBottom: isMobile ? "64px" : "96px", paddingLeft: px, paddingRight: px, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: isMobile ? "220px" : "440px", height: isMobile ? "220px" : "440px", borderRadius: "50%", background: "radial-gradient(circle, #7C9E8A 0%, transparent 65%)", opacity: 0.06, pointerEvents: "none" }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "Space Mono, monospace", fontSize: isMobile ? "9px" : "10px", color: "#F5C842", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "20px", fontWeight: 400 }}>Conectemos</p>
          <h1 style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 400, fontSize: isMobile ? "40px" : "64px", color: "#FAF8F4", lineHeight: "1.1", marginBottom: "20px" }}>
            ¿Por dónde empezamos?
          </h1>
          <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 300, fontSize: isMobile ? "15px" : "18px", color: "#8888AA", lineHeight: "1.65", maxWidth: "480px" }}>
            Elegí la opción que más se adapte a lo que necesitás. Cada camino empieza con una conversación.
          </p>
        </div>
      </section>

      {/* OPCIONES */}
      <section style={{ paddingTop: isMobile ? "64px" : "96px", paddingBottom: isMobile ? "64px" : "96px", paddingLeft: px, paddingRight: px }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "24px", alignItems: "stretch" }}>

          {/* Card: Trabajamos juntas */}
          <div
            style={{ backgroundColor: "#FFFFFF", borderRadius: "14px", padding: isMobile ? "32px 28px" : "52px 48px", border: "1px solid #E8E2DA", borderTop: "3px solid #7C9E8A", display: "flex", flexDirection: "column", transition: "box-shadow 0.2s ease" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(26,26,46,0.08)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}
          >
            <p style={{ fontFamily: "Space Mono, monospace", fontSize: "9px", color: "#7C9E8A", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px", fontWeight: 400 }}>Servicios · Consultoría</p>
            <p style={{ fontFamily: "MuseoModerno, sans-serif", fontWeight: 700, fontSize: isMobile ? "24px" : "30px", color: "#1A1A2E", lineHeight: "1.15", marginBottom: "16px" }}>
              ¿Trabajamos juntas?
            </p>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 400, fontSize: isMobile ? "14px" : "16px", color: "#666666", lineHeight: "1.7", marginBottom: "12px" }}>
              Diseño sistemas para tu trabajo, equipo o proyecto. Empezamos con una conversación sin compromiso para entender qué necesitás.
            </p>
            <ul style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 400, fontSize: isMobile ? "13px" : "14px", color: "#888888", lineHeight: "1.8", marginBottom: "40px", paddingLeft: "20px", marginTop: "8px" }}>
              <li>Diseño de sistemas personales y de equipo</li>
              <li>Consultoría de procesos y operaciones</li>
              <li>Arquitectura de herramientas y flujos digitales</li>
            </ul>
            <div style={{ marginTop: "auto" }}>
              <a
                href="https://wa.me/5491133652899"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", backgroundColor: "#1A1A2E", color: "#FAF8F4", fontFamily: "Space Mono, monospace", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", padding: "18px 36px", borderRadius: "6px", textDecoration: "none", fontWeight: 400, transition: "opacity 0.2s ease" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                HABLEMOS POR WHATSAPP →
              </a>
            </div>
          </div>

          {/* Card: Empezá sola */}
          <div
            style={{ backgroundColor: "#FFFFFF", borderRadius: "14px", padding: isMobile ? "32px 28px" : "52px 48px", border: "1px solid #E8E2DA", borderTop: "3px solid #F5C842", display: "flex", flexDirection: "column", transition: "box-shadow 0.2s ease" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(26,26,46,0.08)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}
          >
            <p style={{ fontFamily: "Space Mono, monospace", fontSize: "9px", color: "#C97B5A", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px", fontWeight: 400 }}>Entrada libre · Gratis</p>
            <p style={{ fontFamily: "MuseoModerno, sans-serif", fontWeight: 700, fontSize: isMobile ? "24px" : "30px", color: "#1A1A2E", lineHeight: "1.15", marginBottom: "16px" }}>
              ¿Preferís empezar sola?
            </p>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 400, fontSize: isMobile ? "14px" : "16px", color: "#666666", lineHeight: "1.7", marginBottom: "12px" }}>
              Descargá la guía gratuita y empezá a diseñar tu sistema. Un punto de partida concreto para ordenar tu mente, tu semana y tu entorno.
            </p>
            <ul style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 400, fontSize: isMobile ? "13px" : "14px", color: "#888888", lineHeight: "1.8", marginBottom: "40px", paddingLeft: "20px", marginTop: "8px" }}>
              <li>Guía práctica descargable</li>
              <li>Framework Raíz–Tallo–Flor</li>
              <li>Sin registro requerido</li>
            </ul>
            <div style={{ marginTop: "auto" }}>
              <a
                href="/guia"
                style={{ display: "inline-flex", alignItems: "center", backgroundColor: "transparent", color: "#1A1A2E", fontFamily: "Space Mono, monospace", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", padding: "17px 36px", borderRadius: "6px", border: "1px solid #1A1A2E", textDecoration: "none", fontWeight: 400, transition: "background 0.2s ease, color 0.2s ease" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "#1A1A2E"; el.style.color = "#FAF8F4"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = "transparent"; el.style.color = "#1A1A2E"; }}
              >
                DESCARGAR GUÍA →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EMAIL DIRECTO */}
      <section style={{ backgroundColor: "#1A1A2E", paddingTop: isMobile ? "64px" : "80px", paddingBottom: isMobile ? "64px" : "80px", paddingLeft: px, paddingRight: px, textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, #9B8FB0 0%, transparent 60%)", opacity: 0.05, pointerEvents: "none" }} />
        <div style={{ maxWidth: "560px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "Space Mono, monospace", fontSize: "9px", color: "#555577", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px", fontWeight: 400 }}>También podés escribirme</p>
          <a href="mailto:hola@paolazerpa.com" style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 400, fontSize: isMobile ? "24px" : "36px", color: "#FAF8F4", textDecoration: "none", display: "block", marginBottom: "24px", transition: "color 0.2s ease" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F5C842")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#FAF8F4")}
          >
            hola@paolazerpa.com
          </a>
          <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 300, fontSize: "14px", color: "#8888AA", lineHeight: "1.6" }}>
            Te respondo en menos de 48 horas.
          </p>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
