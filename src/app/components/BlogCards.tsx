import { BlogPostRecord, coverToneStyles } from "../data/blogPosts";
import { useIsMobile } from "../hooks/useIsMobile";
import { AppLink } from "./AppLink";

export type BlogCardPost = BlogPostRecord;

function CardImageVertical({ post }: { post: BlogCardPost }) {
  const tone = coverToneStyles[post.coverTone];

  return (
    <div
      style={{
        width: "100%",
        height: "200px",
        background: tone.background,
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-30px",
          right: "-20px",
          width: "120px",
          height: "120px",
          borderRadius: "60% 40% 70% 30% / 50% 60% 40% 60%",
          background: tone.accent,
          opacity: 0.18,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20px",
          left: "-10px",
          width: "80px",
          height: "80px",
          borderRadius: "40% 60% 50% 70% / 60% 40% 60% 40%",
          background: tone.accent,
          opacity: 0.12,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "16px",
          right: "16px",
          fontFamily: "'Space Mono', monospace",
          fontSize: "9px",
          letterSpacing: "2px",
          color: tone.accent,
          opacity: 0.6,
          textTransform: "uppercase",
        }}
      >
        {post.category}
      </div>
    </div>
  );
}

function CardImageSquare({ post }: { post: BlogCardPost }) {
  const tone = coverToneStyles[post.coverTone];

  return (
    <div
      style={{
        width: "96px",
        minWidth: "96px",
        alignSelf: "stretch",
        background: tone.background,
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-16px",
          right: "-16px",
          width: "72px",
          height: "72px",
          borderRadius: "55% 45% 65% 35% / 45% 55% 45% 55%",
          background: tone.accent,
          opacity: 0.2,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10px",
          left: "-10px",
          width: "44px",
          height: "44px",
          borderRadius: "40% 60% 50% 70% / 60% 40% 60% 40%",
          background: tone.accent,
          opacity: 0.14,
        }}
      />
    </div>
  );
}

export function FeaturedCard({ post }: { post: BlogCardPost }) {
  const tone = coverToneStyles[post.coverTone];
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        border: "1px solid #E8E2DA",
        borderRadius: "18px",
        overflow: "hidden",
        background: "#FFFFFF",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <div
        style={{
          width: isMobile ? "100%" : "38%",
          flexShrink: 0,
          minHeight: "240px",
          background: tone.background,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-30px",
            right: "-30px",
            width: "160px",
            height: "160px",
            borderRadius: "60% 40% 60% 40% / 45% 55% 45% 55%",
            background: tone.accent,
            opacity: 0.18,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-20px",
            left: "-20px",
            width: "110px",
            height: "110px",
            borderRadius: "40% 60% 50% 70% / 60% 40% 60% 40%",
            background: tone.accent,
            opacity: 0.12,
          }}
        />
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: isMobile ? "24px" : "52px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "16px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "9px",
              letterSpacing: "2px",
              color: tone.accent,
              background: tone.soft,
              padding: "4px 10px",
              borderRadius: "20px",
              textTransform: "uppercase",
            }}
          >
            {post.category}
          </span>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "9px",
              letterSpacing: "2px",
              color: "#A0998E",
            }}
          >
            DESTACADO
          </span>
        </div>

        <h2
          style={{
            fontFamily: "'Fraunces', serif",
            fontStyle: "italic",
            color: "#1A1A2E",
            lineHeight: 1.2,
            marginBottom: "16px",
            fontWeight: 400,
            fontSize: isMobile ? "22px" : "32px",
          }}
        >
          {post.title}
        </h2>

        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 300,
            color: "#5A5450",
            lineHeight: 1.7,
            marginBottom: "28px",
            maxWidth: "480px",
            fontSize: isMobile ? "14px" : "16px",
          }}
        >
          {post.excerpt}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "10px",
              letterSpacing: "1.5px",
              color: "#A0998E",
              textTransform: "uppercase",
            }}
          >
            {post.date} · {post.readingTime}
          </span>
          <AppLink
            to={`/notas/${post.slug}`}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "11px",
              letterSpacing: "2px",
              color: "#1A1A2E",
              background: "none",
              cursor: "pointer",
              padding: "0",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              borderBottom: "1px solid #1A1A2E",
              paddingBottom: "2px",
              transition: "color 0.2s, border-color 0.2s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "#C97B5A";
              el.style.borderColor = "#C97B5A";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "#1A1A2E";
              el.style.borderColor = "#1A1A2E";
            }}
          >
            LEER NOTA →
          </AppLink>
        </div>
      </div>
    </div>
  );
}

export function SecondaryCard({ post }: { post: BlogCardPost }) {
  const tone = coverToneStyles[post.coverTone];
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid #E8E2DA",
        borderRadius: "14px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {isMobile ? (
        <div style={{ display: "flex", minHeight: "150px" }}>
          <CardImageSquare post={post} />
          <div
            style={{
              padding: "18px 18px 18px 16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <p
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "9px",
                color: "#A0998E",
                marginBottom: "8px",
                textTransform: "uppercase",
              }}
            >
              {post.date} · {post.readingTime}
            </p>
            <p
              style={{
                fontFamily: "'MuseoModerno', sans-serif",
                fontWeight: 600,
                fontSize: "15px",
                color: "#1A1A2E",
                lineHeight: "1.4",
                marginBottom: "10px",
              }}
            >
              {post.title}
            </p>
            <AppLink
              to={`/notas/${post.slug}`}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: "13px",
                color: tone.accent,
                textDecoration: "none",
              }}
            >
              Leer →
            </AppLink>
          </div>
        </div>
      ) : (
        <>
          <CardImageVertical post={post} />

          <div style={{ padding: "24px 24px 28px", display: "flex", flexDirection: "column", flex: 1 }}>
            <div style={{ marginBottom: "12px" }}>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "9px",
                  letterSpacing: "2px",
                  color: tone.accent,
                  textTransform: "uppercase",
                }}
              >
                {post.category}
              </span>
            </div>

            <h3
              style={{
                fontFamily: "'MuseoModerno', sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                color: "#1A1A2E",
                lineHeight: 1.25,
                marginBottom: "12px",
              }}
            >
              {post.title}
            </h3>

            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 300,
                fontSize: "14px",
                color: "#66605A",
                lineHeight: 1.7,
                marginBottom: "22px",
              }}
            >
              {post.excerpt}
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "auto",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "9px",
                  color: "#A0998E",
                  textTransform: "uppercase",
                }}
              >
                {post.date} · {post.readingTime}
              </span>
              <AppLink
                to={`/notas/${post.slug}`}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  color: "#1A1A2E",
                  textDecoration: "none",
                  borderBottom: "1px solid #1A1A2E",
                  paddingBottom: "2px",
                }}
              >
                LEER →
              </AppLink>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
