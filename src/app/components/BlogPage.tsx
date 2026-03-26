import { Link } from "react-router";
import { NavBar } from "./NavBar";
import { FooterSection } from "./FooterSection";
import { FeaturedCard, SecondaryCard } from "./BlogCards";
import { blogPosts, featuredBlogPost, otherBlogPosts } from "../data/blogPosts";
import { useIsMobile } from "../hooks/useIsMobile";

export function BlogPage() {
  const isMobile = useIsMobile();
  const px = isMobile ? "24px" : "80px";

  return (
    <div style={{ backgroundColor: "#FAF8F4", overflowX: "hidden" }}>
      <NavBar />

      <section
        style={{
          background: "#FAF8F4",
          position: "relative",
          overflow: "hidden",
          paddingTop: isMobile ? "128px" : "156px",
          paddingBottom: isMobile ? "32px" : "42px",
          paddingLeft: px,
          paddingRight: px,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-60px",
            width: isMobile ? "220px" : "320px",
            height: isMobile ? "220px" : "320px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #E8E0EF 0%, transparent 68%)",
            opacity: 0.7,
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "1120px", margin: "0 auto", position: "relative", zIndex: 1 }}>
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
            MI BLOG PERSONAL
          </p>
          <h1
            style={{
              fontFamily: "Fraunces, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: isMobile ? "40px" : "62px",
              color: "#1A1A2E",
              lineHeight: "1.08",
              marginBottom: "18px",
              maxWidth: "760px",
            }}
          >
            Notas sobre sistemas, vida y trabajo.
          </h1>
          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 400,
              fontSize: isMobile ? "16px" : "18px",
              color: "#666666",
              lineHeight: "1.8",
              maxWidth: "700px",
              margin: 0,
            }}
          >
            Pienso en voz alta sobre claridad, procesos y lo que aprendo diseñando sistemas.
            <br />
            No son fórmulas, son reflexiones convertidas en criterio.
          </p>
        </div>
      </section>

      <section
        style={{
          background: "#FAF8F4",
          position: "relative",
          overflow: "hidden",
          paddingTop: isMobile ? "28px" : "36px",
          paddingBottom: isMobile ? "88px" : "110px",
          paddingLeft: px,
          paddingRight: px,
        }}
      >
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: isMobile ? "flex-start" : "center",
              flexDirection: isMobile ? "column" : "row",
              gap: "12px",
              marginBottom: "34px",
              paddingTop: isMobile ? "18px" : "22px",
              borderTop: "1px solid #E8E2DA",
            }}
          >
            <div style={{ display: "grid", gap: "6px" }}>
              <p
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "9px",
                  color: "#AAAAAA",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  margin: 0,
                  fontWeight: 400,
                }}
              >
                {blogPosts.length} notas publicadas
              </p>
              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "14px",
                  color: "#777777",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                Una nota elegida para entrar al archivo y el resto como continuidad de ese
                pensamiento.
              </p>
            </div>
          </div>

          <div style={{ marginBottom: isMobile ? "28px" : "34px" }}>
            <FeaturedCard post={featuredBlogPost} />
          </div>

          <div style={{ marginBottom: "18px" }}>
            <p
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "9px",
                color: "#AAAAAA",
                letterSpacing: "3px",
                textTransform: "uppercase",
                margin: 0,
                fontWeight: 400,
              }}
            >
              MÁS NOTAS
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))", gap: "24px" }}>
            {otherBlogPosts.map((post) => (
              <SecondaryCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
