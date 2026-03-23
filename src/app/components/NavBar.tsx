import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useIsMobile } from "../hooks/useIsMobile";

function HamburgerIcon() {
  return (
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0" width="22" height="2" rx="1" fill="#FAF8F4" />
      <rect y="7" width="22" height="2" rx="1" fill="#FAF8F4" />
      <rect y="14" width="22" height="2" rx="1" fill="#FAF8F4" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L19 19M19 1L1 19"
        stroke="#FAF8F4"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function NavBar() {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: "ENFOQUE", href: "#enfoque" },
    { label: "BLOG", href: "/blog" },
    { label: "CONTACTO", href: "/contacto" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/")) {
      navigate(href);
    } else {
      const id = href.replace("#", "");
      if (location.pathname === "/") {
        scrollToSection(id);
      } else {
        navigate("/");
        // Wait for home page to mount, then scroll
        setTimeout(() => scrollToSection(id), 100);
      }
    }
  };

  if (isMobile) {
    return (
      <>
        {/* Mobile NavBar */}
        <nav
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            backgroundColor: "#1A1A2E",
            height: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
            borderBottomColor: "#252540",
          }}
        >
          <a
            href="#"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 500,
              fontSize: "14px",
              color: "#FAF8F4",
              textDecoration: "none",
              letterSpacing: "0.3px",
            }}
          >
            Paola Zerpa
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div
            style={{
              position: "fixed",
              top: "56px",
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999,
              backgroundColor: "#1A1A2E",
              display: "flex",
              flexDirection: "column",
              padding: "48px 24px",
              gap: "0",
            }}
          >
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "13px",
                  color: "#D6D0C4",
                  letterSpacing: "3px",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  padding: "20px 0",
                  borderBottomWidth:
                    i < navLinks.length - 1
                      ? "1px"
                      : "0",
                  borderBottomStyle: "solid",
                  borderBottomColor: "#252540",
                  display: "block",
                  cursor: "pointer",
                }}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { setMenuOpen(false); navigate("/contacto"); }}
              style={{
                backgroundColor: "#F5C842",
                color: "#1A1A2E",
                fontFamily: "Space Mono, monospace",
                fontSize: "10px",
                letterSpacing: "2px",
                padding: "16px 20px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                textTransform: "uppercase",
                fontWeight: 400,
                marginTop: "32px",
                width: "100%",
              }}
            >
              HABLEMOS
            </button>
          </div>
        )}
      </>
    );
  }

  // Desktop NavBar
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: "#1A1A2E",
        height: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 80px",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: "#252540",
      }}
    >
      {/* Brand Name */}
      <a
        href="#"
        style={{
          fontFamily: "Space Grotesk, sans-serif",
          fontWeight: 500,
          fontSize: "18px",
          color: "#FAF8F4",
          textDecoration: "none",
          letterSpacing: "0.3px",
        }}
      >
        Paola Zerpa
      </a>

      {/* Nav Links + CTA */}
      <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "11px",
              color: "#D6D0C4",
              letterSpacing: "2px",
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "color 0.2s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "#F5C842")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "#D6D0C4")
            }
          >
            {link.label}
          </a>
        ))}

        {/* CTA Button */}
        <button
          onClick={() => navigate("/contacto")}
          style={{
            backgroundColor: "#F5C842",
            color: "#1A1A2E",
            fontFamily: "Space Mono, monospace",
            fontSize: "11px",
            letterSpacing: "2px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            textTransform: "uppercase",
            fontWeight: 400,
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.opacity = "0.85")
          }
          onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
        >
          HABLEMOS
        </button>
      </div>
    </nav>
  );
}