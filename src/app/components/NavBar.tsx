import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useIsMobile } from "../hooks/useIsMobile";
import { navigateWithScroll } from "../utils/navigation";

function HamburgerIcon() {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="0" width="22" height="2" rx="1" fill="#E6D7C6" />
      <rect y="7" width="22" height="2" rx="1" fill="#E6D7C6" />
      <rect y="14" width="22" height="2" rx="1" fill="#E6D7C6" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L19 19M19 1L1 19" stroke="#E6D7C6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function NavBar() {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: "SERVICIOS", href: "/#servicios" },
    { label: "PORTFOLIO", href: "/#proyectos" },
    { label: "SOBRE MÍ", href: "/mi-historia" },
    { label: "CONTACTO", href: "/contacto" },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    navigateWithScroll(navigate, href);
  };

  const isActive = (href: string) => {
    if (href.includes("#")) {
      return false;
    }

    if (href === "/") {
      return location.pathname === "/";
    }

    return location.pathname === href;
  };

  const brandStyle = {
    background: "none",
    border: "none",
    padding: 0,
    color: "#E6D7C6",
    cursor: "pointer",
    textAlign: "left" as const,
    transition: "opacity 0.2s ease",
  };

  if (isMobile) {
    return (
      <>
        <nav
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            background:
              "linear-gradient(180deg, rgba(23, 59, 68, 0.94) 0%, rgba(23, 59, 68, 0.86) 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 1px 0 rgba(230, 215, 198, 0.12)",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
            borderBottom: "1px solid rgba(230, 215, 198, 0.16)",
          }}
        >
          <button
            onClick={() => handleNavClick("/")}
            style={brandStyle}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.78")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            <span
              style={{
                display: "block",
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 500,
                fontSize: "17px",
                letterSpacing: "0.2px",
              }}
            >
              PAOLA ZERPA
            </span>
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background:
                "var(--cta-glass-bg)",
              border: "1px solid var(--cta-glass-border)",
              width: "36px",
              height: "36px",
              borderRadius: "999px",
              padding: 0,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "var(--cta-glass-shadow)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
            aria-label={menuOpen ? "Cerrar navegación" : "Abrir navegación"}
          >
            {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </nav>

        {menuOpen && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              top: "60px",
              zIndex: 999,
              background:
                "linear-gradient(180deg, rgba(23,59,68,0.96) 0%, rgba(23,59,68,0.99) 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              padding: "16px 24px 28px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              borderTop: "1px solid rgba(230, 215, 198, 0.14)",
            }}
          >
            <div
              style={{
                display: "grid",
                gap: "6px",
                paddingBottom: "18px",
                borderBottom: "1px solid rgba(230, 215, 198, 0.14)",
              }}
            >
              <p
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "8px",
                  color: "#A9CDE3",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Navegación
              </p>
              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "14px",
                  color: "#D5BA9A",
                  lineHeight: "1.55",
                  margin: 0,
                  maxWidth: "260px",
                }}
              >
                Elige una sección y sigue el recorrido del sitio.
              </p>
            </div>

            <div style={{ display: "grid", gap: "10px" }}>
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    background: isActive(link.href)
                      ? "var(--cta-glass-bg)"
                      : "rgba(240,127,168,0.14)",
                    border: "1px solid rgba(255, 203, 224, 0.34)",
                    borderRadius: "999px",
                    padding: "14px 16px",
                    textAlign: "left",
                    fontFamily: "Space Mono, monospace",
                    fontSize: "11px",
                    color: isActive(link.href) ? "var(--mar-profundo)" : "#E6D7C6",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    boxShadow: isActive(link.href) ? "0 12px 24px rgba(240,127,168,0.14)" : "none",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background:
          "linear-gradient(180deg, rgba(23, 59, 68, 0.94) 0%, rgba(23, 59, 68, 0.86) 100%)",
        backdropFilter: "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
        boxShadow: "0 1px 0 rgba(230, 215, 198, 0.12)",
        height: "74px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 80px",
        borderBottom: "1px solid rgba(230, 215, 198, 0.16)",
      }}
    >
      <button
        onClick={() => handleNavClick("/")}
        style={brandStyle}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.78")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
      >
        <span
          style={{
            display: "block",
            fontFamily: "Space Grotesk, sans-serif",
            fontWeight: 500,
            fontSize: "18px",
            letterSpacing: "0.3px",
          }}
            >
              PAOLA ZERPA
            </span>
            {!isMobile && (
              <span
                style={{
                  display: "block",
                  fontFamily: "Space Mono, monospace",
                  fontSize: "9px",
                  letterSpacing: "0.12em",
                  color: "rgba(230, 215, 198, 0.66)",
                  marginTop: "4px",
                  textTransform: "uppercase",
                }}
              >
                Diseñadora de productos digitales
              </span>
            )}
      </button>

      <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
        {navLinks.map((link) => (
          <button
            key={link.label}
            onClick={() => handleNavClick(link.href)}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              fontFamily: "Space Mono, monospace",
              fontSize: "11px",
              color: isActive(link.href) ? "#B7C334" : "#E6D7C6",
              letterSpacing: "2px",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "color 0.2s ease",
              textDecorationLine: "underline",
              textDecorationColor: isActive(link.href) ? "rgba(183, 195, 52, 0.48)" : "transparent",
              textDecorationThickness: "1px",
              textUnderlineOffset: "5px",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#B7C334")}
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = isActive(link.href) ? "#B7C334" : "#E6D7C6")
            }
          >
            {link.label}
          </button>
        ))}

        <button
          onClick={() => handleNavClick("/contacto#email")}
          style={{
            background:
              "var(--cta-glass-bg)",
            border: "1px solid var(--cta-glass-border)",
            borderRadius: "999px",
            padding: "13px 22px",
            fontFamily: "Space Mono, monospace",
            fontSize: "11px",
            fontWeight: 700,
            color: "var(--mar-profundo)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            cursor: "pointer",
            boxShadow: "var(--cta-glass-shadow)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
          }}
        >
          Hablemos ↗
        </button>

      </div>
    </nav>
  );
}
