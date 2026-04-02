import { FormEvent, useState } from "react";
import { AppLink } from "./AppLink";
import { GUIDE_CAPTURE_ENDPOINT, GUIDE_PDF_URL } from "../data/guideCapture";

type GuideCaptureFormProps = {
  variant: "full" | "compact";
  theme: "dark" | "light";
  source: string;
};

export function GuideCaptureForm({ variant, theme, source }: GuideCaptureFormProps) {
  const isCompact = variant === "compact";
  const isDark = theme === "dark";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [hasConsent, setHasConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const titleColor = isDark ? "#F5C842" : "#1A1A2E";
  const textColor = isDark ? "#D6D0C4" : "#666666";
  const mutedColor = isDark ? "#8F8AA5" : "#777777";
  const labelColor = isDark ? "#C8C2BA" : "#8888AA";
  const fieldBackground = isDark ? "rgba(250,248,244,0.04)" : "#FAF8F4";
  const fieldBorder = isDark ? "rgba(250,248,244,0.16)" : "#E8E2DA";
  const fieldText = isDark ? "#FAF8F4" : "#1A1A2E";
  const panelBackground = isDark ? "rgba(250,248,244,0.05)" : "#FFFFFF";
  const panelBorder = isDark ? "rgba(250,248,244,0.1)" : "#E8E2DA";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);

    try {
      if (GUIDE_CAPTURE_ENDPOINT) {
        const response = await fetch(GUIDE_CAPTURE_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name.trim() || undefined,
            email: email.trim(),
            consent: hasConsent,
            source,
          }),
        });

        if (!response.ok) {
          throw new Error("No se pudo enviar el formulario.");
        }
      }

      setIsSuccess(true);
    } catch {
      setSubmitError("No pudimos procesar tu solicitud ahora. Probá de nuevo en unos minutos.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: panelBackground,
        border: `1px solid ${panelBorder}`,
        borderRadius: isCompact ? "16px" : "18px",
        padding: isCompact ? "24px 22px" : "28px 28px",
        backdropFilter: isDark ? "blur(4px)" : undefined,
      }}
    >
      {!isSuccess ? (
        <>
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "10px",
              color: titleColor,
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "14px",
              fontWeight: 400,
            }}
          >
            Recibir guía
          </p>

          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 400,
              fontSize: isCompact ? "14px" : "15px",
              color: textColor,
              lineHeight: "1.75",
              marginBottom: "18px",
            }}
          >
            {isCompact
              ? "Deja tu email y recibe la guía al instante."
              : "Deja tu email y recibe la guía al instante para empezar a usarla."}
          </p>

          <form onSubmit={handleSubmit} style={{ display: "grid", gap: "14px" }}>
            {!isCompact ? (
              <label style={{ display: "grid", gap: "8px" }}>
                <span
                  style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: "10px",
                    color: labelColor,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  Nombre
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  style={{
                    height: "50px",
                    borderRadius: "8px",
                    border: `1px solid ${fieldBorder}`,
                    backgroundColor: fieldBackground,
                    color: fieldText,
                    padding: "0 14px",
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "15px",
                    outline: "none",
                  }}
                />
              </label>
            ) : null}

            <label style={{ display: "grid", gap: "8px" }}>
              <span
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "10px",
                  color: labelColor,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                Email
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@correo.com"
                required
                style={{
                  height: "50px",
                  borderRadius: "8px",
                  border: `1px solid ${fieldBorder}`,
                  backgroundColor: fieldBackground,
                  color: fieldText,
                  padding: "0 14px",
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "15px",
                  outline: "none",
                }}
              />
            </label>

            <label
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                marginTop: "2px",
              }}
            >
              <input
                type="checkbox"
                checked={hasConsent}
                onChange={(e) => setHasConsent(e.target.checked)}
                style={{
                  marginTop: "3px",
                  accentColor: "#F5C842",
                  width: "16px",
                  height: "16px",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: isCompact ? "12px" : "13px",
                  color: mutedColor,
                  lineHeight: "1.6",
                }}
              >
                {isCompact
                  ? "Acepto recibir la guía y mensajes ocasionales relacionados con este contenido."
                  : "Acepto recibir la guía y mensajes ocasionales relacionados con este contenido."}
              </span>
            </label>

            <button
              type="submit"
              disabled={isSubmitting || !hasConsent}
              style={{
                marginTop: "4px",
                height: "52px",
                borderRadius: "6px",
                border: "none",
                backgroundColor: "#F5C842",
                color: "#1A1A2E",
                fontFamily: "Space Mono, monospace",
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                cursor: isSubmitting ? "wait" : hasConsent ? "pointer" : "not-allowed",
                opacity: isSubmitting ? 0.72 : hasConsent ? 1 : 0.48,
              }}
            >
              {isSubmitting ? "Enviando..." : "Recibir la guía"}
            </button>

            {submitError ? (
              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "14px",
                  color: "#F3B2A0",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                {submitError}
              </p>
            ) : null}

            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: isCompact ? "12px" : "13px",
                color: mutedColor,
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              {isCompact
                ? "Recibes acceso inmediato. Es una guía breve para empezar sin tener que resolver todo de una vez."
                : "Recibes acceso inmediato. Es una guía breve para revisar tu situación actual y decidir por dónde empezar."}
            </p>
          </form>
        </>
      ) : (
        <div style={{ display: "grid", gap: "16px" }}>
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "10px",
              color: titleColor,
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "2px",
              fontWeight: 400,
            }}
          >
            Listo
          </p>

          <h3
            style={{
              fontFamily: "Fraunces, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: isCompact ? "26px" : "34px",
              color: isDark ? "#FAF8F4" : "#1A1A2E",
              lineHeight: "1.15",
              margin: 0,
            }}
          >
            Ya puedes acceder a la guía.
          </h3>

          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              color: textColor,
              lineHeight: "1.75",
              margin: 0,
            }}
          >
            {isCompact
              ? "Ya puedes abrir la guía y recorrerla a tu ritmo."
              : "Ya puedes abrir la guía y usarla como primer paso para ordenar con más claridad."}
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "6px" }}>
            <a
              href={GUIDE_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#F5C842",
                color: "#1A1A2E",
                fontFamily: "Space Mono, monospace",
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                padding: "16px 24px",
                borderRadius: "6px",
                textDecoration: "none",
              }}
            >
              Acceder a la guía
            </a>

            {isCompact ? (
              <AppLink
                to="/guia"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "transparent",
                  color: isDark ? "#FAF8F4" : "#1A1A2E",
                  fontFamily: "Space Mono, monospace",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  padding: "15px 24px",
                  borderRadius: "6px",
                  border: `1px solid ${isDark ? "rgba(250,248,244,0.2)" : "#1A1A2E"}`,
                  textDecoration: "none",
                }}
              >
                Ver guía
              </AppLink>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
