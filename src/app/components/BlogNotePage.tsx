import { useParams } from "react-router";
import { NavBar } from "./NavBar";
import { FooterSection } from "./FooterSection";
import { coverToneStyles, getBlogPostBySlug } from "../data/blogPosts";
import { useIsMobile } from "../hooks/useIsMobile";
import { AppLink } from "./AppLink";

export function BlogNotePage() {
  const { slug } = useParams();
  const isMobile = useIsMobile();
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const px = isMobile ? "24px" : "80px";

  if (!post) {
    return (
      <div style={{ backgroundColor: "#FAF8F4", overflowX: "hidden" }}>
        <NavBar />
        <section
          style={{
            paddingTop: isMobile ? "128px" : "164px",
            paddingBottom: isMobile ? "88px" : "120px",
            paddingLeft: px,
            paddingRight: px,
            minHeight: "70vh",
          }}
        >
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "9px",
                color: "#AAAAAA",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "18px",
                fontWeight: 400,
              }}
            >
              NOTA NO ENCONTRADA
            </p>
            <h1
              style={{
                fontFamily: "Fraunces, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: isMobile ? "38px" : "58px",
                color: "#1A1A2E",
                lineHeight: "1.08",
                marginBottom: "18px",
              }}
            >
              Esta nota no está disponible.
            </h1>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "16px",
                color: "#666666",
                lineHeight: "1.8",
                marginBottom: "28px",
              }}
            >
              Puedes volver al archivo de notas o seguir navegando desde el inicio.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <AppLink
                to="/notas"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#1A1A2E",
                  color: "#FAF8F4",
                  fontFamily: "Space Mono, monospace",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  padding: "16px 24px",
                  borderRadius: "6px",
                  textDecoration: "none",
                }}
              >
                Volver a notas
              </AppLink>
              <AppLink
                to="/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "transparent",
                  color: "#1A1A2E",
                  fontFamily: "Space Mono, monospace",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  padding: "15px 24px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  border: "1px solid #1A1A2E",
                }}
              >
                Ir al inicio
              </AppLink>
            </div>
          </div>
        </section>
        <FooterSection />
      </div>
    );
  }

  const tone = coverToneStyles[post.coverTone];

  return (
    <div style={{ backgroundColor: "#FAF8F4", overflowX: "hidden" }}>
      <NavBar />

      <section
        style={{
          backgroundColor: "#1A1A2E",
          paddingTop: isMobile ? "128px" : "164px",
          paddingBottom: isMobile ? "64px" : "76px",
          paddingLeft: px,
          paddingRight: px,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-90px",
            right: "-70px",
            width: isMobile ? "240px" : "420px",
            height: isMobile ? "240px" : "420px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${tone.accent} 0%, transparent 65%)`,
            opacity: 0.09,
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "820px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <AppLink
            to="/notas"
            style={{
              display: "inline-flex",
              marginBottom: "24px",
              fontFamily: "Space Mono, monospace",
              fontSize: "9px",
              color: "#C8C2BA",
              letterSpacing: "2px",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            ← Volver a notas
          </AppLink>

          <h1
            style={{
              fontFamily: "Fraunces, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: isMobile ? "40px" : "66px",
              color: "#FAF8F4",
              lineHeight: "1.06",
              marginBottom: "18px",
            }}
          >
            {post.title}
          </h1>

          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 300,
              fontSize: isMobile ? "17px" : "20px",
              color: "#B8B0A4",
              lineHeight: "1.8",
              maxWidth: "680px",
              marginBottom: "28px",
            }}
          >
            {post.excerpt}
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <span
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "9px",
                color: "#D6D0C4",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              {post.date}
            </span>
            <span
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "9px",
                color: "#D6D0C4",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              {post.readingTime}
            </span>
          </div>
        </div>
      </section>

      <article
        style={{
          backgroundColor: "#FAF8F4",
          paddingTop: isMobile ? "48px" : "64px",
          paddingBottom: isMobile ? "88px" : "110px",
          paddingLeft: px,
          paddingRight: px,
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          {post.featuredQuote ? (
            <blockquote
              style={{
                margin: "0 0 44px 0",
                padding: isMobile ? "24px 22px" : "28px 30px",
                borderRadius: "16px",
                backgroundColor: tone.soft,
                borderLeft: `3px solid ${tone.accent}`,
                fontFamily: "Fraunces, serif",
                fontStyle: "italic",
                fontSize: isMobile ? "24px" : "30px",
                color: "#1A1A2E",
                lineHeight: "1.45",
              }}
            >
              “{post.featuredQuote}”
            </blockquote>
          ) : null}

          {post.content.map((section) => (
            <section key={section.heading} style={{ marginBottom: isMobile ? "34px" : "40px" }}>
              <h2
                style={{
                  fontFamily: "MuseoModerno, sans-serif",
                  fontWeight: 700,
                  fontSize: isMobile ? "24px" : "28px",
                  color: "#1A1A2E",
                  lineHeight: "1.2",
                  marginBottom: "16px",
                }}
              >
                {section.heading}
              </h2>
              <div style={{ display: "grid", gap: "16px" }}>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 400,
                      fontSize: isMobile ? "15px" : "17px",
                      color: "#555555",
                      lineHeight: "1.9",
                      margin: 0,
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <div
            style={{
              marginTop: "56px",
              paddingTop: "32px",
              borderTop: "1px solid #E8E2DA",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
              alignItems: isMobile ? "flex-start" : "center",
              gap: "18px",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "Fraunces, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: isMobile ? "28px" : "34px",
                  color: "#1A1A2E",
                  lineHeight: "1.2",
                  marginBottom: "8px",
                }}
              >
                Si quieres seguir pensando este tema, hay más notas en el archivo.
              </p>
              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 400,
                  fontSize: "15px",
                  color: "#666666",
                  lineHeight: "1.7",
                  margin: 0,
                }}
              >
                Y si prefieres llevar la conversación a un caso concreto, también puedes ir a contacto.
              </p>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <AppLink
                to="/notas"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#1A1A2E",
                  color: "#FAF8F4",
                  fontFamily: "Space Mono, monospace",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  padding: "16px 24px",
                  borderRadius: "6px",
                  textDecoration: "none",
                }}
              >
                Volver a notas
              </AppLink>
              <AppLink
                to="/contacto"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "transparent",
                  color: "#1A1A2E",
                  fontFamily: "Space Mono, monospace",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  padding: "15px 24px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  border: "1px solid #1A1A2E",
                }}
              >
                Ir a contacto
              </AppLink>
            </div>
          </div>
        </div>
      </article>

      <FooterSection />
    </div>
  );
}
