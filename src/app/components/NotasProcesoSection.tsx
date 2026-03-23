import { useIsMobile } from "../hooks/useIsMobile";

const posts = [
  {
    id: "p1",
    category: "SISTEMAS REALES",
    categoryColor: "#7C9E8A",
    date: "Mar 2025 · 4 min",
    title: "Lo que aprendí al intentar sostener todo al mismo tiempo",
    quote: "No era falta de disciplina. Era falta de arquitectura.",
    bg: "#D4E4DA",
    featured: true,
  },
  {
    id: "p2",
    category: "REFLEXIONES",
    categoryColor: "#C97B5A",
    date: "Feb 2025 · 3 min",
    title: "Cómo rediseñé mi ritual de mañana sin que dependiera de mi estado de ánimo",
    bg: "#EDE0D4",
    featured: false,
  },
  {
    id: "p3",
    category: "VIDA + TRABAJO",
    categoryColor: "#9B8FB0",
    date: "Feb 2025 · 3 min",
    title: "Las relaciones también son diseño. Lo que aprendí al empezar a elegir",
    bg: "#E8E0EF",
    featured: false,
  },
  {
    id: "p4",
    category: "DECISIONES DE DISEÑO",
    categoryColor: "#F5C842",
    date: "Ene 2025 · 5 min",
    title: "Por qué dejé de optimizar mi agenda y empecé a diseñar mi energía",
    bg: "#F5EFD0",
    featured: false,
  },
];

export function NotasProcesoSection() {
  const isMobile = useIsMobile();
  const featured = posts.find((p) => p.featured)!;
  const rest = posts.filter((p) => !p.featured);

  /* ─── MOBILE ─── */
  if (isMobile) {
    return (
      <section
        id="blog"
        style={{
          backgroundColor: "#FAF8F4",
          paddingTop: "80px",
          paddingBottom: "80px",
          paddingLeft: "24px",
          paddingRight: "24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "Space Mono, monospace", fontSize: "9px", color: "#AAAAAA", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "20px", fontWeight: 400 }}>
            CONTENIDO
          </p>

          <h2 style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 400, fontSize: "30px", color: "#1A1A2E", lineHeight: "1.2", marginBottom: "8px" }}>
            Procesos, no fórmulas.
          </h2>
          <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 400, fontSize: "14px", color: "#888888", lineHeight: "1.6", marginBottom: "40px" }}>
            Reflexiones y sistemas en tiempo real.
          </p>

          {/* Featured */}
          <div style={{ backgroundColor: "#FFFFFF", borderRadius: "12px", overflow: "hidden", border: "1px solid #E8E2DA", marginBottom: "16px" }}>
            <div style={{ backgroundColor: featured.bg, height: "180px", position: "relative", padding: "16px" }}>
              <span style={{ fontFamily: "Space Mono, monospace", fontSize: "7px", textTransform: "uppercase", letterSpacing: "1.5px", backgroundColor: "#1A1A2E", color: "#F5C842", padding: "5px 10px", borderRadius: "3px", fontWeight: 400 }}>
                {featured.category}
              </span>
            </div>
            <div style={{ padding: "20px" }}>
              <p style={{ fontFamily: "Space Mono, monospace", fontSize: "8px", color: "#D6D0C4", letterSpacing: "1px", marginBottom: "10px", fontWeight: 400 }}>
                {featured.date}
              </p>
              <p style={{ fontFamily: "MuseoModerno, sans-serif", fontWeight: 700, fontSize: "18px", color: "#1A1A2E", lineHeight: "1.35", marginBottom: "14px" }}>
                {featured.title}
              </p>
              <blockquote style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "14px", color: "#8B6F47", borderLeft: "2px solid #F5C842", paddingLeft: "10px", margin: "0 0 16px 0", lineHeight: "1.5" }}>
                "{featured.quote}"
              </blockquote>
              <a href="/blog" style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 500, fontSize: "13px", color: "#C97B5A", textDecoration: "none" }}>
                Leer →
              </a>
            </div>
          </div>

          {/* Rest */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
            {rest.map((post) => (
              <div key={post.id} style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E2DA", borderRadius: "10px", overflow: "hidden", display: "flex" }}>
                <div style={{ backgroundColor: post.bg, width: "88px", minWidth: "88px", flexShrink: 0, position: "relative", padding: "10px" }}>
                  <span style={{ fontFamily: "Space Mono, monospace", fontSize: "6px", textTransform: "uppercase", letterSpacing: "1px", color: post.categoryColor, fontWeight: 400 }}>
                    {post.category.split(" ")[0]}
                  </span>
                </div>
                <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <p style={{ fontFamily: "Space Mono, monospace", fontSize: "7px", color: "#C8C2BA", marginBottom: "6px", fontWeight: 400 }}>
                    {post.date}
                  </p>
                  <p style={{ fontFamily: "MuseoModerno, sans-serif", fontWeight: 600, fontSize: "13px", color: "#1A1A2E", lineHeight: "1.4", marginBottom: "8px" }}>
                    {post.title}
                  </p>
                  <a href="/blog" style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 500, fontSize: "12px", color: "#C97B5A", textDecoration: "none" }}>
                    Leer →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <a href="/blog" style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 500, fontSize: "14px", color: "#1A1A2E", textDecoration: "underline", textUnderlineOffset: "3px" }}>
            Ver todas las notas →
          </a>
        </div>
      </section>
    );
  }

  /* ─── DESKTOP ─── */
  return (
    <section
      id="blog"
      style={{
        backgroundColor: "#FAF8F4",
        paddingTop: "120px",
        paddingBottom: "120px",
        paddingLeft: "80px",
        paddingRight: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "64px" }}>
          <div>
            <p style={{ fontFamily: "Space Mono, monospace", fontSize: "10px", color: "#AAAAAA", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "20px", fontWeight: 400 }}>
              CONTENIDO
            </p>
            <h2 style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontWeight: 400, fontSize: "48px", color: "#1A1A2E", lineHeight: "1.1", margin: 0 }}>
              Procesos, no fórmulas.
            </h2>
          </div>
          <a
            href="/blog"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 500, fontSize: "14px", color: "#888888", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", transition: "color 0.2s ease" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#1A1A2E")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#888888")}
          >
            Ver todas las notas →
          </a>
        </div>

        {/* Featured + grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", alignItems: "start" }}>
          {/* Featured (left, tall) */}
          <div
            style={{ backgroundColor: "#FFFFFF", borderRadius: "14px", overflow: "hidden", border: "1px solid #E8E2DA", display: "flex", flexDirection: "column", transition: "box-shadow 0.2s ease" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(26,26,46,0.07)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}
          >
            <div style={{ backgroundColor: featured.bg, height: "240px", position: "relative", padding: "24px" }}>
              <span style={{ fontFamily: "Space Mono, monospace", fontSize: "8px", textTransform: "uppercase", letterSpacing: "1.5px", backgroundColor: "#1A1A2E", color: "#F5C842", padding: "6px 12px", borderRadius: "4px", fontWeight: 400 }}>
                {featured.category}
              </span>
            </div>
            <div style={{ padding: "32px 36px 40px", flex: 1, display: "flex", flexDirection: "column" }}>
              <p style={{ fontFamily: "Space Mono, monospace", fontSize: "9px", color: "#C8C2BA", letterSpacing: "1px", marginBottom: "16px", fontWeight: 400 }}>
                {featured.date}
              </p>
              <p style={{ fontFamily: "MuseoModerno, sans-serif", fontWeight: 700, fontSize: "22px", color: "#1A1A2E", lineHeight: "1.3", marginBottom: "20px" }}>
                {featured.title}
              </p>
              <blockquote style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "17px", color: "#8B6F47", borderLeft: "2px solid #F5C842", paddingLeft: "14px", margin: "0 0 24px 0", lineHeight: "1.5" }}>
                "{featured.quote}"
              </blockquote>
              <a
                href="/blog"
                style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 500, fontSize: "14px", color: "#C97B5A", textDecoration: "none", marginTop: "auto", transition: "opacity 0.2s ease" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                Leer nota completa →
              </a>
            </div>
          </div>

          {/* Right: 3 compact cards stacked */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {rest.map((post) => (
              <div
                key={post.id}
                style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E2DA", borderRadius: "12px", overflow: "hidden", display: "flex", transition: "box-shadow 0.2s ease" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(26,26,46,0.06)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}
              >
                <div style={{ backgroundColor: post.bg, width: "100px", minWidth: "100px", flexShrink: 0, position: "relative", padding: "14px 12px" }}>
                  <span style={{ fontFamily: "Space Mono, monospace", fontSize: "7px", textTransform: "uppercase", letterSpacing: "1px", color: post.categoryColor, fontWeight: 400, lineHeight: 1.3 }}>
                    {post.category}
                  </span>
                </div>
                <div style={{ padding: "18px 20px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <p style={{ fontFamily: "Space Mono, monospace", fontSize: "8px", color: "#C8C2BA", marginBottom: "8px", fontWeight: 400 }}>
                    {post.date}
                  </p>
                  <p style={{ fontFamily: "MuseoModerno, sans-serif", fontWeight: 600, fontSize: "15px", color: "#1A1A2E", lineHeight: "1.4", marginBottom: "12px" }}>
                    {post.title}
                  </p>
                  <a
                    href="/blog"
                    style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 500, fontSize: "13px", color: "#C97B5A", textDecoration: "none", transition: "opacity 0.2s ease" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                  >
                    Leer →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
