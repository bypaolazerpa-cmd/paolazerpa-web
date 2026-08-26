import { NavBar } from "./NavBar";
import { FooterSection } from "./FooterSection";
import { featuredBlogPost } from "../data/blogPosts";
import { useIsMobile } from "../hooks/useIsMobile";
import { BrandButton } from "./brand/BrandButton";
import { SectionLabel } from "./brand/SectionLabel";
import noteImage from "../../assets/nota-product-design.jpg";

function EditorialVisual({ isMobile }: { isMobile: boolean }) {
  return (
    <div
      aria-hidden="true"
      style={{
        minHeight: isMobile ? "190px" : "100%",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(145deg, rgba(240,127,168,0.92) 0%, rgba(183,195,52,0.86) 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: isMobile ? "180px" : "280px",
          height: isMobile ? "180px" : "280px",
          border: "1px solid rgba(23,59,68,0.42)",
          borderRadius: "50%",
          top: isMobile ? "-74px" : "-110px",
          right: isMobile ? "-44px" : "-74px",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: isMobile ? "120px" : "190px",
          height: isMobile ? "120px" : "190px",
          border: "1px solid rgba(23,59,68,0.42)",
          borderRadius: "50%",
          bottom: isMobile ? "-48px" : "-70px",
          left: isMobile ? "-24px" : "-36px",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: "18% 15%",
          overflow: "hidden",
          border: "1px solid rgba(23,59,68,0.5)",
          transform: "rotate(-12deg)",
          background: "rgba(23,59,68,0.12)",
        }}
      >
        <img
          src={noteImage}
          alt=""
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: isMobile ? "center 58%" : "center 52%",
          }}
        />
      </div>
      <span
        style={{
          position: "absolute",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "var(--mar-profundo)",
          top: "34%",
          left: "42%",
        }}
      />
    </div>
  );
}

export function BlogPage() {
  const isMobile = useIsMobile();
  const post = featuredBlogPost;

  return (
    <div className="pz-page" style={{ overflowX: "hidden" }}>
      <NavBar />

      <main>
        <section
          className="pz-dark"
          style={{
            padding: isMobile ? "88px 24px 40px" : "124px 80px 64px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              width: isMobile ? "240px" : "380px",
              height: isMobile ? "240px" : "380px",
              borderRadius: "50%",
              right: isMobile ? "-120px" : "-150px",
              top: isMobile ? "-70px" : "-120px",
              background: "radial-gradient(circle, rgba(240,127,168,0.22), transparent 68%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ maxWidth: "1160px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <SectionLabel number="01" tone="light">
              Bitácora
            </SectionLabel>
            <h1
              style={{
                fontFamily: "Fraunces, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: isMobile ? "38px" : "64px",
                lineHeight: 1.04,
                color: "var(--arena-clara)",
                maxWidth: "780px",
                margin: "28px 0 18px",
              }}
            >
              Un lugar para desarrollar las ideas que necesitan un poco más de espacio.
            </h1>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: isMobile ? "16px" : "19px",
                lineHeight: 1.65,
                color: "rgba(230,215,198,0.76)",
                maxWidth: "660px",
                margin: 0,
              }}
            >
              Ideas, preguntas y cosas que voy entendiendo mientras diseño, trabajo y vivo.
            </p>
          </div>
        </section>

        <section
          style={{
            background: "var(--arena-clara)",
            padding: isMobile ? "48px 24px 64px" : "72px 80px 96px",
          }}
        >
          <div
            style={{
              maxWidth: "1160px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1.45fr) minmax(260px, 0.75fr)",
              borderTop: "1px solid rgba(23,59,68,0.3)",
              borderBottom: "1px solid rgba(23,59,68,0.3)",
            }}
          >
            <article style={{ padding: isMobile ? "28px 0 34px" : "42px 56px 48px 0" }}>
              <p
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "11px",
                  letterSpacing: "0.14em",
                  color: "var(--terracota-viva)",
                  margin: "0 0 20px",
                }}
              >
                ÚLTIMA NOTA
              </p>
              <p
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  color: "var(--mar-profundo)",
                  margin: "0 0 22px",
                }}
              >
                {post.category} · {post.date} · {post.readingTime}
              </p>
              <h2
                style={{
                  fontFamily: "Fraunces, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: isMobile ? "34px" : "48px",
                  lineHeight: 1.08,
                  color: "var(--mar-profundo)",
                  margin: "0 0 20px",
                  maxWidth: "720px",
                }}
              >
                {post.title}
              </h2>
              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: isMobile ? "16px" : "18px",
                  lineHeight: 1.7,
                  color: "rgba(23,59,68,0.76)",
                  maxWidth: "650px",
                  margin: "0 0 28px",
                }}
              >
                {post.excerpt}
              </p>
              <BrandButton variant="secondary" to={`/notas/${post.slug}`}>
                LEER NOTA ↗
              </BrandButton>
            </article>

            <EditorialVisual isMobile={isMobile} />
          </div>

          <p
            style={{
              maxWidth: "1160px",
              margin: isMobile ? "28px auto 0" : "36px auto 0",
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "14px",
              lineHeight: 1.6,
              color: "rgba(23,59,68,0.66)",
            }}
          >
            Más notas aparecerán por acá a medida que vaya escribiéndolas.
          </p>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
