import { useIsMobile } from "../hooks/useIsMobile";

export function FooterSection() {
  const isMobile = useIsMobile();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="pz-dark"
      style={{
        borderTop: "1px solid rgba(230, 215, 198, 0.18)",
        paddingTop: isMobile ? "36px" : "42px",
        paddingBottom: isMobile ? "36px" : "42px",
        paddingLeft: isMobile ? "24px" : "80px",
        paddingRight: isMobile ? "24px" : "80px",
      }}
    >
      <div
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "space-between",
          gap: "18px",
        }}
      >
        <p
          style={{
            fontFamily: "Space Mono, monospace",
            fontSize: "10px",
            color: "rgba(230, 215, 198, 0.68)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Paola Zerpa · Diseñadora de productos digitales · {currentYear}
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }} aria-hidden="true">
          {["var(--citron-loto)", "var(--magenta)", "var(--cielo-suave)"].map((color) => (
            <span
              key={color}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: color,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
