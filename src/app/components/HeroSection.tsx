import { useIsMobile } from "../hooks/useIsMobile";
import { AppLink } from "./AppLink";

export function HeroSection() {
  const isMobile = useIsMobile();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const copy = (
    <>
      Convierto ideas, procesos y formas de trabajar en{" "}
      <strong style={{ fontWeight: 700, color: isMobile ? "#FAF8F4" : "#FAF8F4" }}>
        sistemas que mejoran la experiencia
      </strong>{" "}
      y sostienen lo que construyes.
    </>
  );

  if (isMobile) {
    return (
      <section
        id="hero"
        style={{
          backgroundColor: "#1A1A2E",
          paddingTop: "110px",
          paddingBottom: "72px",
          paddingLeft: "24px",
          paddingRight: "24px",
          position: "relative",
          overflow: "hidden",
          minHeight: "84svh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #F5C842 0%, transparent 70%)",
            opacity: 0.07,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "-80px",
            width: "240px",
            height: "240px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(250,248,244,0.8) 0%, transparent 70%)",
            opacity: 0.04,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "40%",
            right: "-40px",
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #F5C842 0%, transparent 70%)",
            opacity: 0.04,
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "340px" }}>
          <h1 style={{ margin: "0 0 12px 0", textAlign: "left" }}>
            <span
              style={{
                fontFamily: "Fraunces, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "29px",
                color: "#FAF8F4",
                lineHeight: "1.12",
                display: "block",
                marginBottom: "3px",
              }}
            >
              La forma en que vivimos y lo que construimos
            </span>
            <span
              style={{
                fontFamily: "Fraunces, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "24px",
                color: "#F5C842",
                lineHeight: "1.15",
                display: "block",
                marginBottom: "7px",
              }}
            >
              no nace de la casualidad.
            </span>
            <span
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 500,
                fontSize: "24px",
                color: "#FAF8F4",
                lineHeight: "1.14",
                display: "block",
                marginBottom: "14px",
                opacity: 0.92,
                letterSpacing: "-0.2px",
              }}
            >
              Se diseña como un sistema.
            </span>
          </h1>

          <div
            style={{
              borderLeft: "1px solid rgba(245, 200, 66, 0.48)",
              paddingLeft: "16px",
              marginTop: "18px",
              marginBottom: "28px",
              maxWidth: "312px",
            }}
          >
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 300,
                fontSize: "16px",
                color: "#B8B0A4",
                lineHeight: "1.68",
                margin: 0,
              }}
            >
              {copy}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "280px" }}>
            <AppLink
              to="/contacto"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#F5C842",
                color: "#1A1A2E",
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "13px",
                letterSpacing: "0.2px",
                height: "50px",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Hablemos
            </AppLink>
            <button
              onClick={() => scrollTo("servicios")}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                backgroundColor: "transparent",
                color: "#FAF8F4",
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                height: "42px",
                border: "none",
                cursor: "pointer",
                opacity: 0.84,
                paddingLeft: 0,
                textDecorationLine: "underline",
                textDecorationColor: "rgba(245, 200, 66, 0.42)",
                textDecorationThickness: "1px",
                textUnderlineOffset: "4px",
              }}
            >
              Ver servicios ↓
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="hero"
      style={{
        backgroundColor: "#1A1A2E",
        paddingTop: "156px",
        paddingBottom: "92px",
        paddingLeft: "80px",
        paddingRight: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-160px",
          right: "-120px",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #F5C842 0%, transparent 65%)",
          opacity: 0.05,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "220px",
          right: "80px",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(250,248,244,0.75) 0%, transparent 65%)",
          opacity: 0.03,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "40px",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(250,248,244,0.7) 0%, transparent 65%)",
          opacity: 0.025,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.9fr) minmax(300px, 0.56fr)",
            gap: "38px",
            alignItems: "center",
          }}
        >
          <div style={{ maxWidth: "648px" }}>
          <h1 style={{ margin: 0, textAlign: "left", maxWidth: "620px" }}>
            <span
              style={{
                fontFamily: "Fraunces, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "56px",
                color: "#FAF8F4",
                lineHeight: "1.04",
                display: "block",
                marginBottom: "4px",
              }}
            >
              La forma en que vivimos y lo que construimos
            </span>
            <span
              style={{
                fontFamily: "Fraunces, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "38px",
                color: "#F5C842",
                lineHeight: "1.1",
                display: "block",
                marginBottom: "8px",
              }}
            >
              no nace de la casualidad.
            </span>
            <span
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 500,
                fontSize: "34px",
                color: "#FAF8F4",
                lineHeight: "1.14",
                display: "block",
                marginBottom: "18px",
                opacity: 0.92,
                letterSpacing: "-0.3px",
              }}
            >
              Se diseña como un sistema.
            </span>
          </h1>

          <div
            style={{
              borderLeft: "1px solid rgba(245, 200, 66, 0.48)",
              paddingLeft: "24px",
              marginTop: "28px",
              marginBottom: "42px",
              maxWidth: "610px",
            }}
          >
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 300,
                fontSize: "18px",
                color: "#B8B0A4",
                lineHeight: "1.75",
                margin: 0,
              }}
            >
              {copy}
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
            <AppLink
              to="/contacto"
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "#F5C842",
                color: "#1A1A2E",
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "15px",
                letterSpacing: "0.2px",
                padding: "16px 30px",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: 600,
                textDecoration: "none",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              Hablemos
            </AppLink>
            <button
              onClick={() => scrollTo("servicios")}
              style={{
                backgroundColor: "transparent",
                color: "#FAF8F4",
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "15px",
                fontWeight: 400,
                border: "none",
                cursor: "pointer",
                opacity: 0.78,
                transition: "opacity 0.2s ease",
                padding: 0,
                textDecorationLine: "underline",
                textDecorationColor: "rgba(245, 200, 66, 0.42)",
                textDecorationThickness: "1px",
                textUnderlineOffset: "4px",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.68")}
            >
              Ver servicios ↓
            </button>
          </div>
          </div>

          <div
            aria-hidden="true"
            style={{
              justifySelf: "end",
              width: "100%",
              maxWidth: "356px",
              minHeight: "356px",
              position: "relative",
              opacity: 0.94,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "38px",
                border: "1px solid rgba(250, 248, 244, 0.08)",
                background:
                  "radial-gradient(circle at 30% 28%, rgba(245,200,66,0.14) 0%, rgba(245,200,66,0) 34%), linear-gradient(180deg, rgba(250,248,244,0.05) 0%, rgba(250,248,244,0.015) 100%)",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: "24px",
                borderRadius: "32px",
                border: "1px solid rgba(250, 248, 244, 0.08)",
                background: "rgba(250, 248, 244, 0.015)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "30px",
                  left: "34px",
                  width: "132px",
                  height: "132px",
                  borderRadius: "50%",
                  border: "1px solid rgba(250, 248, 244, 0.11)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "108px",
                  left: "136px",
                  width: "164px",
                  height: "164px",
                  borderRadius: "50%",
                  border: "1px solid rgba(250, 248, 244, 0.08)",
                }}
              />
              {[
                { top: "84px", left: "70px", width: "122px", rotate: "18deg", color: "rgba(250,248,244,0.18)" },
                { top: "138px", left: "144px", width: "116px", rotate: "-24deg", color: "rgba(245,200,66,0.22)" },
                { top: "184px", left: "92px", width: "132px", rotate: "11deg", color: "rgba(250,248,244,0.14)" },
                { top: "220px", left: "176px", width: "84px", rotate: "-36deg", color: "rgba(250,248,244,0.12)" },
              ].map((line, index) => (
                <span
                  key={index}
                  style={{
                    position: "absolute",
                    top: line.top,
                    left: line.left,
                    width: line.width,
                    height: "1px",
                    backgroundColor: line.color,
                    transform: `rotate(${line.rotate})`,
                    transformOrigin: "left center",
                  }}
                />
              ))}
              {[
                { top: "72px", left: "62px", size: "18px", color: "#F5C842", glow: "rgba(245,200,66,0.28)" },
                { top: "118px", left: "176px", size: "14px", color: "rgba(250,248,244,0.92)", glow: "rgba(250,248,244,0.2)" },
                { top: "196px", left: "110px", size: "12px", color: "rgba(250,248,244,0.86)", glow: "rgba(250,248,244,0.16)" },
                { top: "236px", left: "236px", size: "20px", color: "#F5C842", glow: "rgba(245,200,66,0.24)" },
                { top: "262px", left: "66px", size: "10px", color: "rgba(250,248,244,0.8)", glow: "rgba(250,248,244,0.14)" },
              ].map((node, index) => (
                <span
                  key={index}
                  style={{
                    position: "absolute",
                    top: node.top,
                    left: node.left,
                    width: node.size,
                    height: node.size,
                    borderRadius: "50%",
                    backgroundColor: node.color,
                    boxShadow: `0 0 0 10px ${node.glow}`,
                  }}
                />
              ))}
              <div
                style={{
                  position: "absolute",
                  right: "34px",
                  top: "52px",
                  width: "90px",
                  height: "90px",
                  borderRadius: "28px",
                  background:
                    "linear-gradient(180deg, rgba(245,200,66,0.2) 0%, rgba(245,200,66,0.04) 100%)",
                  border: "1px solid rgba(245,200,66,0.16)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "44px",
                  bottom: "44px",
                  width: "146px",
                  height: "58px",
                  borderRadius: "999px",
                  background: "rgba(250, 248, 244, 0.045)",
                  border: "1px solid rgba(250, 248, 244, 0.08)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
