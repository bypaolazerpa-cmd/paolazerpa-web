import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useIsMobile } from "../hooks/useIsMobile";
import { navigateWithScroll } from "../utils/navigation";

function HamburgerIcon() {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="0" width="22" height="2" rx="1" fill="#FAF8F4" />
      <rect y="7" width="22" height="2" rx="1" fill="#FAF8F4" />
      <rect y="14" width="22" height="2" rx="1" fill="#FAF8F4" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L19 19M19 1L1 19" stroke="#FAF8F4" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function NavBar() {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: "INICIO", href: "/" },
    { label: "MI HISTORIA", href: "/mi-historia" },
    { label: "NOTAS", href: "/notas" },
    { label: "CONTACTO", href: "/contacto" },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    navigateWithScroll(navigate, href);
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }

    return location.pathname === href;
  };

  const brandStyle = {
    background: "none",
    border: "none",
    padding: 0,
    color: "#FAF8F4",
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
              "linear-gradient(180deg, rgba(26, 26, 46, 0.94) 0%, rgba(26, 26, 46, 0.88) 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 1px 0 rgba(250, 248, 244, 0.07)",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
            borderBottom: "1px solid rgba(245, 200, 66, 0.12)",
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
              🌷 Paola
            </span>
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: menuOpen ? "1px solid rgba(245, 200, 66, 0.28)" : "1px solid transparent",
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              padding: 0,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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
                "linear-gradient(180deg, rgba(26,26,46,0.94) 0%, rgba(26,26,46,0.99) 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              padding: "16px 24px 28px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              borderTop: "1px solid rgba(245, 200, 66, 0.12)",
            }}
          >
            <div
              style={{
                display: "grid",
                gap: "6px",
                paddingBottom: "18px",
                borderBottom: "1px solid rgba(245, 200, 66, 0.12)",
              }}
            >
              <p
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "8px",
                  color: "#7A758D",
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
                  color: "#B8B0A4",
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
                    backgroundColor: isActive(link.href) ? "rgba(245, 200, 66, 0.08)" : "transparent",
                    border: `1px solid ${
                      isActive(link.href) ? "rgba(245, 200, 66, 0.22)" : "rgba(250,248,244,0.06)"
                    }`,
                    borderRadius: "14px",
                    padding: "14px 16px",
                    textAlign: "left",
                    fontFamily: "Space Mono, monospace",
                    fontSize: "11px",
                    color: isActive(link.href) ? "#F5C842" : "#D6D0C4",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    cursor: "pointer",
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
          "linear-gradient(180deg, rgba(26, 26, 46, 0.94) 0%, rgba(26, 26, 46, 0.88) 100%)",
        backdropFilter: "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
        boxShadow: "0 1px 0 rgba(250, 248, 244, 0.07)",
        height: "74px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 80px",
        borderBottom: "1px solid rgba(245, 200, 66, 0.12)",
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
          🌷 Paola
        </span>
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
              color: isActive(link.href) ? "#F5C842" : "#D6D0C4",
              letterSpacing: "2px",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "color 0.2s ease",
              textDecorationLine: "underline",
              textDecorationColor: isActive(link.href) ? "rgba(245, 200, 66, 0.36)" : "transparent",
              textDecorationThickness: "1px",
              textUnderlineOffset: "5px",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F5C842")}
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = isActive(link.href) ? "#F5C842" : "#D6D0C4")
            }
          >
            {link.label}
          </button>
        ))}

      </div>
    </nav>
  );
}
