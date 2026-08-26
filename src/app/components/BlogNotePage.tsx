import { useParams } from "react-router";
import { NavBar } from "./NavBar";
import { FooterSection } from "./FooterSection";
import { getBlogPostBySlug } from "../data/blogPosts";
import { useIsMobile } from "../hooks/useIsMobile";
import { AppLink } from "./AppLink";
import { BrandButton } from "./brand/BrandButton";

export function BlogNotePage() {
  const { slug } = useParams();
  const isMobile = useIsMobile();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="pz-page" style={{ overflowX: "hidden" }}>
        <NavBar />
        <main>
          <section
            className="pz-dark"
            style={{
              padding: isMobile ? "112px 24px 72px" : "156px 80px 120px",
              minHeight: "70vh",
            }}
          >
            <div style={{ maxWidth: "760px", margin: "0 auto" }}>
              <p
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "11px",
                  letterSpacing: "0.14em",
                  color: "var(--citron-loto)",
                  margin: "0 0 18px",
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
                  lineHeight: 1.08,
                  color: "var(--arena-clara)",
                  margin: "0 0 24px",
                }}
              >
                Esta nota no está disponible.
              </h1>
              <BrandButton variant="secondary" to="/notas">
                VOLVER A NOTAS ↗
              </BrandButton>
            </div>
          </section>
        </main>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="pz-page" style={{ overflowX: "hidden" }}>
      <NavBar />

      <main>
        <section
          className="pz-dark"
          style={{
            padding: isMobile ? "104px 24px 56px" : "138px 80px 76px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              width: isMobile ? "260px" : "460px",
              height: isMobile ? "260px" : "460px",
              borderRadius: "50%",
              right: isMobile ? "-130px" : "-170px",
              top: isMobile ? "-100px" : "-180px",
              background: "radial-gradient(circle, rgba(240,127,168,0.24), transparent 68%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <AppLink
              to="/notas"
              style={{
                display: "inline-flex",
                fontFamily: "Space Mono, monospace",
                fontSize: "11px",
                letterSpacing: "0.12em",
                color: "var(--arena-clara)",
                textTransform: "uppercase",
                textDecoration: "none",
                marginBottom: "30px",
              }}
            >
              ← VOLVER A NOTAS
            </AppLink>
            <p
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "11px",
                letterSpacing: "0.1em",
                color: "var(--citron-loto)",
                margin: "0 0 22px",
              }}
            >
              {post.category} · {post.date} · {post.readingTime}
            </p>
            <h1
              style={{
                fontFamily: "Fraunces, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: isMobile ? "40px" : "62px",
                lineHeight: 1.06,
                color: "var(--arena-clara)",
                maxWidth: "820px",
                margin: "0 0 22px",
              }}
            >
              {post.title}
            </h1>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: isMobile ? "17px" : "20px",
                lineHeight: 1.7,
                color: "rgba(230,215,198,0.76)",
                maxWidth: "720px",
                margin: 0,
              }}
            >
              {post.excerpt}
            </p>
          </div>
        </section>

        <article
          style={{
            background: "var(--arena-clara)",
            padding: isMobile ? "48px 24px 64px" : "72px 80px 96px",
          }}
        >
          <div
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              color: "var(--mar-profundo)",
            }}
          >
            <div style={{ display: "grid", gap: isMobile ? "20px" : "24px" }}>
              {post.content.map((paragraph, index) => {
                const isQuestion = paragraph.startsWith("¿") || paragraph.endsWith(":");
                return (
                  <p
                    key={`${index}-${paragraph}`}
                    style={{
                      fontFamily: isQuestion ? "Fraunces, serif" : "Space Grotesk, sans-serif",
                      fontStyle: isQuestion ? "italic" : "normal",
                      fontSize: isQuestion ? (isMobile ? "23px" : "28px") : isMobile ? "16px" : "18px",
                      lineHeight: isQuestion ? 1.3 : 1.85,
                      color: isQuestion ? "var(--mar-profundo)" : "rgba(23,59,68,0.82)",
                      margin: 0,
                    }}
                  >
                    {paragraph}
                  </p>
                );
              })}
            </div>

            <div
              style={{
                marginTop: isMobile ? "48px" : "68px",
                paddingTop: isMobile ? "26px" : "34px",
                borderTop: "1px solid rgba(23,59,68,0.3)",
              }}
            >
              <p
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "11px",
                  letterSpacing: "0.14em",
                  color: "var(--terracota-viva)",
                  margin: "0 0 16px",
                }}
              >
                SEGUIR LEYENDO
              </p>
              <p
                style={{
                  fontFamily: "Fraunces, serif",
                  fontStyle: "italic",
                  fontSize: isMobile ? "28px" : "34px",
                  lineHeight: 1.2,
                  color: "var(--mar-profundo)",
                  margin: "0 0 24px",
                }}
              >
                Esta bitácora irá creciendo a medida que vaya encontrando cosas que valga la pena desarrollar un poco más.
              </p>
              <BrandButton variant="secondary" to="/notas">
                VOLVER A NOTAS ↗
              </BrandButton>
            </div>
          </div>
        </article>
      </main>

      <FooterSection />
    </div>
  );
}
