import { useNavigate } from "react-router";
import { NavBar } from "./NavBar";
import { FooterSection } from "./FooterSection";
import { useIsMobile } from "../hooks/useIsMobile";

export function ProgramaPage() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const px = isMobile ? "24px" : "80px";

  return (
    <div style={{ backgroundColor: "#1A1A2E", overflowX: "hidden" }}>
      <NavBar />

      <section style={{ paddingTop: isMobile ? "140px" : "200px", paddingBottom: isMobile ? "80px" : "140px", paddingLeft: px, paddingRight: px, position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ position: "absolute", top: "-100px", right: "-80px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, #9B8FB0 0%, transparent 60%)", opacity: 0.06, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "360px", height: "360px", borderRadius: "50%", background: "radial-gradient(circle, #7C9E8A 0%, transparent 65%)", opacity: 0.05, pointerEvents: "none" }} />

        <div style={{ maxWidth: "720px", margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
          <p style={{ fontFamily: "Space Mono, monospace", fontSize: isMobile ? "9px" : "10px", color: "#9B8FB0", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "24px", fontWeight: 400 }}>
            Equipos y negocios
          </p>
          <h1 style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 400, fontSize: isMobile ? "40px" : "64px", color: "#FAF8F4", lineHeight: "1.1", marginBottom: "24px" }}>
            Arquitectura para equipos.
          </h1>
          <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 300, fontSize: isMobile ? "15px" : "18px", color: "#8888AA", lineHeight: "1.7", marginBottom: "48px", maxWidth: "520px", margin: "0 auto 48px" }}>
            Estoy construyendo algo para equipos que quieren operar con más claridad y menos dependencia del esfuerzo individual. En breve.
          </p>

          {/* Notifícame */}
          <div style={{ backgroundColor: "#1E1E36", borderRadius: "12px", padding: isMobile ? "28px 24px" : "40px 44px", border: "1px solid #252540", marginBottom: "40px", textAlign: "left" }}>
            <p style={{ fontFamily: "Space Mono, monospace", fontSize: "9px", color: "#9B8FB0", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px", fontWeight: 400 }}>Mientras tanto</p>
            <p style={{ fontFamily: "MuseoModerno, sans-serif", fontWeight: 700, fontSize: isMobile ? "20px" : "24px", color: "#FAF8F4", marginBottom: "12px" }}>
              Si necesitás diseñar un sistema para tu equipo hoy,
            </p>
            <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 300, fontSize: "15px", color: "#8888AA", lineHeight: "1.65", marginBottom: "28px" }}>
              empezamos con una conversación. Sin formularios, sin fricciones.
            </p>
            <a
              href="https://wa.me/5491133652899"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", backgroundColor: "#F5C842", color: "#1A1A2E", fontFamily: "Space Mono, monospace", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", padding: "16px 32px", borderRadius: "6px", textDecoration: "none", fontWeight: 400, transition: "opacity 0.2s ease" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              HABLEMOS →
            </a>
          </div>

          <button
            onClick={() => navigate("/")}
            style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "13px", color: "#555577", background: "none", border: "none", cursor: "pointer", textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            ← Volver al inicio
          </button>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
