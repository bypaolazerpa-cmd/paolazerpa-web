import { featuredBlogPost, otherBlogPosts, coverToneStyles } from "../data/blogPosts";
import { useIsMobile } from "../hooks/useIsMobile";
import { AppLink } from "./AppLink";

export function NotasProcesoSection() {
  const isMobile = useIsMobile();
  const featuredTone = coverToneStyles[featuredBlogPost.coverTone];

  if (isMobile) {
    return (
      <section
        id="notas"
        style={{
          backgroundColor: "#FAF8F4",
          paddingTop: "72px",
          paddingBottom: "72px",
          paddingLeft: "24px",
          paddingRight: "24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "9px",
              color: "#AAAAAA",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "20px",
              fontWeight: 400,
            }}
          >
            NOTAS
          </p>

          <h2
            style={{
              fontFamily: "Fraunces, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "30px",
              color: "#1A1A2E",
              lineHeight: "1.2",
              marginBottom: "8px",
            }}
          >
            Notas sobre sistemas, vida y trabajo
          </h2>
          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              color: "#888888",
              lineHeight: "1.6",
              marginBottom: "18px",
            }}
          >
            Ideas, observaciones y formas de pensar la estructura de lo que hacemos, sostenemos y
            construimos.
          </p>

          <div style={{ marginBottom: "24px" }}>
            <AppLink
              to="/notas"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                color: "#1A1A2E",
                textDecoration: "underline",
                textDecorationColor: "rgba(245, 200, 66, 0.42)",
                textDecorationThickness: "1px",
                textUnderlineOffset: "3px",
              }}
            >
              Ver notas →
            </AppLink>
          </div>

          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid #E8E2DA",
              marginBottom: "14px",
            }}
          >
            <div style={{ backgroundColor: featuredTone.background, height: "180px", position: "relative", padding: "16px" }}>
              <span
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "7px",
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  backgroundColor: "#1A1A2E",
                  color: featuredTone.accent,
                  padding: "5px 10px",
                  borderRadius: "3px",
                  fontWeight: 400,
                }}
              >
                {featuredBlogPost.category}
              </span>
            </div>
            <div style={{ padding: "18px" }}>
              <p
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "8px",
                  color: "#C8C2BA",
                  marginBottom: "10px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                {featuredBlogPost.date} · {featuredBlogPost.readingTime}
              </p>
              <p
                style={{
                  fontFamily: "MuseoModerno, sans-serif",
                  fontWeight: 700,
                  fontSize: "20px",
                  color: "#1A1A2E",
                  lineHeight: "1.28",
                  marginBottom: "16px",
                }}
              >
                {featuredBlogPost.title}
              </p>
              {featuredBlogPost.featuredQuote ? (
                <blockquote
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontStyle: "italic",
                    fontSize: "16px",
                    color: "#8B6F47",
                    borderLeft: "2px solid #F5C842",
                    paddingLeft: "12px",
                    margin: "0 0 18px 0",
                    lineHeight: "1.45",
                  }}
                >
                  "{featuredBlogPost.featuredQuote}"
                </blockquote>
              ) : null}
              <AppLink
                to={`/notas/${featuredBlogPost.slug}`}
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "#C97B5A",
                  textDecoration: "none",
                  marginTop: "auto",
                }}
              >
                Leer nota completa →
              </AppLink>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {otherBlogPosts.map((post) => {
              const tone = coverToneStyles[post.coverTone];
              return (
                <div
                  key={post.slug}
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E8E2DA",
                    borderRadius: "12px",
                    overflow: "hidden",
                    display: "flex",
                  }}
                >
                  <div style={{ backgroundColor: tone.background, width: "88px", minWidth: "88px", flexShrink: 0, position: "relative", padding: "12px 10px" }}>
                    <span
                      style={{
                        fontFamily: "Space Mono, monospace",
                        fontSize: "7px",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        color: tone.accent,
                        fontWeight: 400,
                        lineHeight: 1.3,
                      }}
                    >
                      {post.category}
                    </span>
                  </div>
                  <div style={{ padding: "16px 18px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <p
                      style={{
                        fontFamily: "Space Mono, monospace",
                        fontSize: "8px",
                        color: "#C8C2BA",
                        marginBottom: "8px",
                        fontWeight: 400,
                        textTransform: "uppercase",
                      }}
                    >
                      {post.date} · {post.readingTime}
                    </p>
                    <p
                      style={{
                        fontFamily: "MuseoModerno, sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        color: "#1A1A2E",
                        lineHeight: "1.35",
                        marginBottom: "10px",
                      }}
                    >
                      {post.title}
                    </p>
                    <AppLink
                      to={`/notas/${post.slug}`}
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontWeight: 500,
                        fontSize: "13px",
                        color: "#C97B5A",
                        textDecoration: "none",
                      }}
                    >
                      Leer →
                    </AppLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="notas"
      style={{
        backgroundColor: "#FAF8F4",
        paddingTop: "92px",
        paddingBottom: "100px",
        paddingLeft: "80px",
        paddingRight: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "9px",
                color: "#AAAAAA",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "20px",
                fontWeight: 400,
              }}
            >
              NOTAS
            </p>
            <h2
              style={{
                fontFamily: "Fraunces, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "48px",
                color: "#1A1A2E",
                lineHeight: "1.1",
                marginBottom: "8px",
              }}
            >
              Notas sobre sistemas, vida y trabajo
            </h2>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                color: "#888888",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              Ideas, observaciones y formas de pensar la estructura de lo que hacemos, sostenemos y
              construimos.
            </p>
          </div>

          <AppLink
            to="/notas"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 500,
              fontSize: "14px",
              color: "#1A1A2E",
              textDecoration: "underline",
              textDecorationColor: "rgba(245, 200, 66, 0.42)",
              textDecorationThickness: "1px",
              textUnderlineOffset: "3px",
            }}
          >
            Ver notas →
          </AppLink>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.2fr) minmax(320px, 0.8fr)",
            gap: "24px",
            alignItems: "start",
          }}
        >
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "18px",
              overflow: "hidden",
              border: "1px solid #E8E2DA",
            }}
          >
            <div style={{ backgroundColor: featuredTone.background, height: "260px", position: "relative", padding: "22px" }}>
              <span
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "8px",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  backgroundColor: "#1A1A2E",
                  color: featuredTone.accent,
                  padding: "6px 12px",
                  borderRadius: "4px",
                  fontWeight: 400,
                }}
              >
                {featuredBlogPost.category}
              </span>
            </div>
            <div style={{ padding: "34px 34px 36px" }}>
              <p
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "9px",
                  color: "#C8C2BA",
                  marginBottom: "12px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                {featuredBlogPost.date} · {featuredBlogPost.readingTime}
              </p>
              <p
                style={{
                  fontFamily: "MuseoModerno, sans-serif",
                  fontWeight: 700,
                  fontSize: "28px",
                  color: "#1A1A2E",
                  lineHeight: "1.2",
                  marginBottom: "18px",
                }}
              >
                {featuredBlogPost.title}
              </p>
              {featuredBlogPost.featuredQuote ? (
                <blockquote
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontStyle: "italic",
                    fontSize: "20px",
                    color: "#8B6F47",
                    borderLeft: "2px solid #F5C842",
                    paddingLeft: "16px",
                    margin: "0 0 24px 0",
                    lineHeight: "1.55",
                  }}
                >
                  "{featuredBlogPost.featuredQuote}"
                </blockquote>
              ) : null}
              <AppLink
                to={`/notas/${featuredBlogPost.slug}`}
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "#C97B5A",
                  textDecoration: "none",
                }}
              >
                Leer nota completa →
              </AppLink>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {otherBlogPosts.map((post) => {
              const tone = coverToneStyles[post.coverTone];
              return (
                <div
                  key={post.slug}
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E8E2DA",
                    borderRadius: "12px",
                    overflow: "hidden",
                    display: "flex",
                  }}
                >
                  <div style={{ backgroundColor: tone.background, width: "110px", minWidth: "110px", flexShrink: 0, position: "relative", padding: "16px 14px" }}>
                    <span
                      style={{
                        fontFamily: "Space Mono, monospace",
                        fontSize: "7px",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        color: tone.accent,
                        fontWeight: 400,
                        lineHeight: 1.3,
                      }}
                    >
                      {post.category}
                    </span>
                  </div>
                  <div style={{ padding: "20px 22px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <p
                      style={{
                        fontFamily: "Space Mono, monospace",
                        fontSize: "8px",
                        color: "#C8C2BA",
                        marginBottom: "8px",
                        fontWeight: 400,
                        textTransform: "uppercase",
                      }}
                    >
                      {post.date} · {post.readingTime}
                    </p>
                    <p
                      style={{
                        fontFamily: "MuseoModerno, sans-serif",
                        fontWeight: 600,
                        fontSize: "16px",
                        color: "#1A1A2E",
                        lineHeight: "1.4",
                        marginBottom: "12px",
                      }}
                    >
                      {post.title}
                    </p>
                    <AppLink
                      to={`/notas/${post.slug}`}
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontWeight: 500,
                        fontSize: "13px",
                        color: "#C97B5A",
                        textDecoration: "none",
                      }}
                    >
                      Leer →
                    </AppLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
