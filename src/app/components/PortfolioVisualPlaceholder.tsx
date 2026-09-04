import type { CSSProperties, ReactNode } from "react";

export type PortfolioVisualVariant =
  | "nodux-ecosystem"
  | "map"
  | "flow"
  | "dashboard"
  | "wireframe"
  | "store-config"
  | "management-storefront"
  | "structure"
  | "journey"
  | "activation"
  | "catalog"
  | "checkout"
  | "order-tracking"
  | "operations"
  | "system";

type PortfolioVisualTheme = "teal" | "cream" | "magenta" | "lime";

export type PortfolioVisualPlaceholderProps = {
  eyebrow: string;
  title: string;
  variant: PortfolioVisualVariant;
  density?: "compact" | "comfortable";
  aspectRatio?: string;
  theme?: PortfolioVisualTheme;
  showCaption?: boolean;
  visualLabel?: string;
  marginTop?: CSSProperties["marginTop"];
};

type Palette = {
  surface: string;
  panel: string;
  ink: string;
  muted: string;
  accent: string;
  accentSoft: string;
  line: string;
};

const palettes: Record<PortfolioVisualTheme, Palette> = {
  teal: {
    surface: "#173b44",
    panel: "rgba(250,248,244,.09)",
    ink: "#faf8f4",
    muted: "rgba(250,248,244,.62)",
    accent: "#f07fa8",
    accentSoft: "rgba(240,127,168,.24)",
    line: "rgba(250,248,244,.24)",
  },
  cream: {
    surface: "#eadfce",
    panel: "rgba(23,59,68,.08)",
    ink: "#173b44",
    muted: "rgba(23,59,68,.62)",
    accent: "#b45b45",
    accentSoft: "rgba(180,91,69,.16)",
    line: "rgba(23,59,68,.2)",
  },
  magenta: {
    surface: "#f07fa8",
    panel: "rgba(23,59,68,.1)",
    ink: "#173b44",
    muted: "rgba(23,59,68,.66)",
    accent: "#173b44",
    accentSoft: "rgba(250,248,244,.4)",
    line: "rgba(23,59,68,.22)",
  },
  lime: {
    surface: "#b7c334",
    panel: "rgba(23,59,68,.1)",
    ink: "#173b44",
    muted: "rgba(23,59,68,.66)",
    accent: "#b45b45",
    accentSoft: "rgba(250,248,244,.46)",
    line: "rgba(23,59,68,.22)",
  },
};

const textStyle: CSSProperties = {
  fontFamily: '"Space Mono", monospace',
  fontSize: 11,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  minWidth: 0,
  maxWidth: "100%",
  overflowWrap: "anywhere",
  wordBreak: "break-word",
};

function Panel({ children, palette, style }: { children: ReactNode; palette: Palette; style?: CSSProperties }) {
  return (
    <div data-visual-panel="true" style={{ minWidth: 0, maxWidth: "100%", boxSizing: "border-box", background: palette.panel, border: `1px solid ${palette.line}`, borderRadius: 6, ...style }}>
      {children}
    </div>
  );
}

function Dot({ color }: { color: string }) {
  return <span aria-hidden="true" style={{ width: 8, height: 8, borderRadius: "50%", background: color, display: "block" }} />;
}

function MapVisual({ palette }: { palette: Palette }) {
  return (
    <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gridTemplateRows: "repeat(3, minmax(0, 1fr))", gap: 8, height: "100%", minHeight: 210, minWidth: 0 }}>
      <svg aria-hidden="true" viewBox="0 0 600 310" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
        <path d="M95 54 C185 55 220 106 300 145 S415 228 510 250" fill="none" stroke={palette.line} strokeWidth="2" strokeDasharray="7 9" />
        <path d="M510 55 C425 60 380 110 300 145 S185 225 95 250" fill="none" stroke={palette.line} strokeWidth="2" strokeDasharray="7 9" />
      </svg>
      <Panel palette={palette} style={{ gridColumn: 1, gridRow: 1, padding: 9, display: "grid", alignContent: "space-between", gap: 6 }}>
        <span style={{ ...textStyle, color: palette.accent, fontSize: 10 }}>negocio</span>
        <strong style={{ fontSize: 14, overflowWrap: "anywhere" }}>decide</strong>
        <span style={{ height: 6, width: "70%", background: palette.line, borderRadius: 4 }} />
      </Panel>
      <Panel palette={palette} style={{ gridColumn: 2, gridRow: 1, padding: 9, display: "grid", alignContent: "space-between", gap: 6 }}>
        <span style={{ ...textStyle, color: palette.muted, fontSize: 10 }}>catálogo</span>
        <span style={{ height: 8, width: "86%", background: palette.accentSoft, borderRadius: 4 }} />
        <span style={{ height: 8, width: "58%", background: palette.line, borderRadius: 4 }} />
      </Panel>
      <Panel palette={palette} style={{ gridColumn: 3, gridRow: 1, padding: 9, display: "grid", alignContent: "space-between", gap: 6 }}>
        <span style={{ ...textStyle, color: palette.muted, fontSize: 10 }}>tienda online</span>
        <strong style={{ fontSize: 14, overflowWrap: "anywhere" }}>publicada</strong>
        <span style={{ height: 6, width: "72%", background: palette.accent, borderRadius: 4 }} />
      </Panel>
      <Panel palette={palette} style={{ gridColumn: 2, gridRow: 2, padding: "10px 8px", display: "grid", alignContent: "center", justifyItems: "center", gap: 5, background: palette.accentSoft, zIndex: 1 }}>
        <Dot color={palette.accent} />
        <strong style={{ fontSize: 16, overflowWrap: "anywhere" }}>NODUX</strong>
        <span style={{ color: palette.muted, fontSize: 10, lineHeight: 1.15, textAlign: "center", overflowWrap: "anywhere" }}>una lógica compartida</span>
      </Panel>
      <Panel palette={palette} style={{ gridColumn: 1, gridRow: 3, padding: 9, display: "grid", alignContent: "space-between", gap: 6 }}>
        <span style={{ ...textStyle, color: palette.muted, fontSize: 10 }}>cliente</span>
        <strong style={{ fontSize: 14, overflowWrap: "anywhere" }}>compra</strong>
        <span style={{ height: 6, width: "65%", background: palette.line, borderRadius: 4 }} />
      </Panel>
      <Panel palette={palette} style={{ gridColumn: 2, gridRow: 3, padding: 9, display: "grid", alignContent: "space-between", gap: 6 }}>
        <span style={{ ...textStyle, color: palette.accent, fontSize: 10 }}>pedido</span>
        <strong style={{ fontSize: 14, overflowWrap: "anywhere" }}>en curso</strong>
        <span style={{ height: 6, width: "78%", background: palette.accent, borderRadius: 4 }} />
      </Panel>
      <Panel palette={palette} style={{ gridColumn: 3, gridRow: 3, padding: 9, display: "grid", alignContent: "space-between", gap: 6 }}>
        <span style={{ ...textStyle, color: palette.muted, fontSize: 10 }}>operación</span>
        <strong style={{ fontSize: 14, overflowWrap: "anywhere" }}>responde</strong>
        <span style={{ height: 6, width: "68%", background: palette.line, borderRadius: 4 }} />
      </Panel>
    </div>
  );
}

function NoduxEcosystemVisual({ palette }: { palette: Palette }) {
  const modules = ["catálogo", "tienda", "pedidos", "operación"];
  return (
    <div style={{ display: "grid", gap: 9, minHeight: 190, minWidth: 0 }}>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, .8fr)", gap: 9, minWidth: 0 }}>
        <Panel palette={palette} style={{ padding: 12, display: "grid", gap: 9 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "center" }}>
            <span style={{ ...textStyle, color: palette.accent, fontSize: 10 }}>gestión</span>
            <span style={{ ...textStyle, color: palette.muted, fontSize: 10 }}>NODUX</span>
          </div>
          {["catálogo", "disponibilidad", "pedidos"].map((label, index) => (
            <div key={label} style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: 5, minWidth: 0 }}>
              <span style={{ height: 8, width: `${74 - index * 13}%`, background: index === 1 ? palette.accent : palette.line, borderRadius: 4 }} />
              <span style={{ ...textStyle, color: palette.muted, fontSize: 9, minWidth: 0 }}>{label}</span>
            </div>
          ))}
        </Panel>
        <Panel palette={palette} style={{ padding: 12, display: "grid", alignContent: "space-between", gap: 10, background: palette.accentSoft }}>
          <span style={{ ...textStyle, fontSize: 10 }}>tienda online</span>
          <div style={{ display: "grid", gap: 7 }}>
            <span style={{ height: 28, borderRadius: 4, background: palette.panel }} />
            <span style={{ height: 7, width: "78%", background: palette.ink, opacity: .7, borderRadius: 4 }} />
            <span style={{ height: 7, width: "54%", background: palette.ink, opacity: .4, borderRadius: 4 }} />
          </div>
          <span style={{ ...textStyle, fontSize: 9 }}>experiencia final</span>
        </Panel>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, minmax(0, 1fr))", gap: 5, alignItems: "center", minWidth: 0 }}>
        {modules.map((module, index) => (
          <div key={module} style={{ display: "contents" }}>
            <Panel palette={palette} style={{ padding: "8px 6px", minHeight: 34, display: "grid", alignContent: "center", gap: 5, background: index === 2 ? palette.accentSoft : palette.panel }}>
              <Dot color={index === 2 ? palette.accent : palette.ink} />
              <span style={{ ...textStyle, fontSize: 8 }}>{module}</span>
            </Panel>
            {index < modules.length - 1 && <span aria-hidden="true" style={{ textAlign: "center", color: palette.accent, fontSize: 16 }}>→</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

function FlowVisual({ palette }: { palette: Palette }) {
  const steps = ["entrada", "decisión", "acción", "resultado"];
  return (
    <div style={{ display: "grid", gap: 12, alignContent: "center", height: "100%", minHeight: 160 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, minmax(0, 1fr))", gap: 6, alignItems: "center", minWidth: 0 }}>
        {steps.map((step, index) => (
          <div key={step} style={{ display: "contents" }}>
            <Panel palette={palette} style={{ padding: "17px 10px", minHeight: 62, display: "grid", alignContent: "center", gap: 7 }}>
              <Dot color={index === 2 ? palette.accent : palette.ink} />
              <span style={{ ...textStyle, fontSize: 10 }}>{step}</span>
            </Panel>
            {index < steps.length - 1 && <span aria-hidden="true" style={{ color: palette.accent, textAlign: "center", fontSize: 18 }}>→</span>}
          </div>
        ))}
      </div>
      <div style={{ height: 1, background: palette.line, width: "74%", margin: "0 auto" }} />
      <span style={{ ...textStyle, color: palette.muted, textAlign: "center", fontSize: 10 }}>recorrido operativo</span>
    </div>
  );
}

function DashboardVisual({ palette }: { palette: Palette }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(64px, 82px) minmax(0, 1fr)", gap: 10, height: "100%", minHeight: 180, minWidth: 0 }}>
      <Panel palette={palette} style={{ padding: 10, display: "grid", alignContent: "start", gap: 11 }}>
        <Dot color={palette.accent} />
        {[0, 1, 2, 3].map((item) => <span key={item} style={{ height: 6, width: `${48 + item * 8}%`, background: palette.line, borderRadius: 4 }} />)}
      </Panel>
      <div style={{ display: "grid", gap: 10, alignContent: "start" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 8, minWidth: 0 }}>
          {[['productos', 'listado'], ['pedidos', 'en curso'], ['proveedores', 'orden']].map(([label, value]) => (
            <Panel key={label} palette={palette} style={{ padding: 11, display: "grid", gap: 8 }}>
              <span style={{ ...textStyle, color: palette.muted, fontSize: 10 }}>{label}</span>
              <strong style={{ minWidth: 0, maxWidth: "100%", overflowWrap: "anywhere", wordBreak: "break-word", fontSize: 13, lineHeight: 1.1 }}>{value}</strong>
            </Panel>
          ))}
        </div>
        <Panel palette={palette} style={{ padding: 13, display: "grid", gap: 12 }}>
          <span style={{ ...textStyle, color: palette.muted, fontSize: 10 }}>actividad</span>
          {[68, 44, 84, 56].map((width, index) => (
            <div key={width} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ ...textStyle, width: 18, fontSize: 10 }}>{String(index + 1).padStart(2, "0")}</span>
              <span style={{ height: 8, width: `${width}%`, background: index === 2 ? palette.accent : palette.accentSoft, borderRadius: 3 }} />
            </div>
          ))}
        </Panel>
      </div>
    </div>
  );
}

function WireframeVisual({ palette }: { palette: Palette }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 10, alignItems: "end", height: "100%", minHeight: 180, minWidth: 0 }}>
      {["inicio", "detalle", "acción"].map((label, index) => (
        <Panel key={label} palette={palette} style={{ padding: 10, minHeight: index === 1 ? 170 : 142, display: "grid", alignContent: "start", gap: 9 }}>
          <div style={{ height: 8, width: "48%", background: palette.accent, borderRadius: 3 }} />
          <span style={{ ...textStyle, color: palette.muted, fontSize: 10 }}>{label}</span>
          <div style={{ height: 38, border: `1px solid ${palette.line}`, borderRadius: 4 }} />
          <span style={{ height: 7, width: "84%", background: palette.line, borderRadius: 3 }} />
          <span style={{ height: 7, width: "64%", background: palette.line, borderRadius: 3 }} />
          <div style={{ height: 28, marginTop: "auto", background: palette.accentSoft, borderRadius: 4 }} />
        </Panel>
      ))}
    </div>
  );
}

function StoreConfigVisual({ palette }: { palette: Palette }) {
  const settings = ["datos del negocio", "contacto", "entregas", "pagos", "horarios", "apariencia"];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0, .9fr) minmax(0, 1.1fr)", gap: 10, minHeight: 190, minWidth: 0 }}>
      <Panel palette={palette} style={{ padding: 12, display: "grid", alignContent: "start", gap: 8 }}>
        <span style={{ ...textStyle, color: palette.accent, fontSize: 10 }}>configuración</span>
        {settings.map((setting, index) => (
          <div key={setting} style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0, padding: "5px 0", borderBottom: `1px solid ${palette.line}` }}>
            <Dot color={index === 2 ? palette.accent : palette.ink} />
            <span style={{ minWidth: 0, overflowWrap: "anywhere", wordBreak: "break-word", fontSize: 11, lineHeight: 1.15 }}>{setting}</span>
          </div>
        ))}
      </Panel>
      <Panel palette={palette} style={{ padding: 12, display: "grid", alignContent: "space-between", gap: 10, background: palette.accentSoft }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
          <span style={{ ...textStyle, fontSize: 10 }}>storefront</span>
          <span style={{ ...textStyle, color: palette.muted, fontSize: 9 }}>revisión</span>
        </div>
        <div style={{ display: "grid", gap: 7 }}>
          <span style={{ height: 32, borderRadius: 4, background: palette.panel }} />
          <span style={{ height: 8, width: "82%", background: palette.ink, opacity: .68, borderRadius: 4 }} />
          <span style={{ height: 8, width: "58%", background: palette.ink, opacity: .38, borderRadius: 4 }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "center" }}>
          <span style={{ ...textStyle, fontSize: 9 }}>lista para vender</span>
          <Dot color={palette.accent} />
        </div>
      </Panel>
    </div>
  );
}

function ManagementStorefrontVisual({ palette }: { palette: Palette }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 10, minHeight: 190, minWidth: 0 }}>
      <Panel palette={palette} style={{ padding: 12, display: "grid", gap: 9, alignContent: "start" }}>
        <span style={{ ...textStyle, color: palette.accent, fontSize: 10 }}>panel de gestión</span>
        {["catálogo", "disponibilidad", "pedido"].map((item, index) => (
          <div key={item} style={{ display: "grid", gridTemplateColumns: "8px minmax(0, 1fr)", gap: 8, alignItems: "center", padding: "7px 0", borderBottom: `1px solid ${palette.line}` }}>
            <span style={{ width: 8, height: 8, borderRadius: 2, background: index === 1 ? palette.accent : palette.accentSoft }} />
            <span style={{ minWidth: 0, overflowWrap: "anywhere", wordBreak: "break-word", fontSize: 12 }}>{item}</span>
          </div>
        ))}
      </Panel>
      <Panel palette={palette} style={{ padding: 12, display: "grid", gap: 9, alignContent: "start", background: palette.accentSoft }}>
        <span style={{ ...textStyle, color: palette.muted, fontSize: 10 }}>tienda online</span>
        <span style={{ height: 36, borderRadius: 4, background: palette.panel }} />
        <strong style={{ fontSize: 14 }}>producto A</strong>
        <span style={{ height: 7, width: "68%", background: palette.ink, opacity: .46, borderRadius: 4 }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, marginTop: "auto" }}>
          <span style={{ ...textStyle, fontSize: 9 }}>pedido en curso</span>
          <span aria-hidden="true" style={{ color: palette.accent, fontSize: 18 }}>→</span>
        </div>
      </Panel>
      <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "center", alignItems: "center", gap: 8, paddingTop: 2 }}>
        <Dot color={palette.accent} />
        <span style={{ ...textStyle, color: palette.muted, fontSize: 9 }}>misma lógica · distinta experiencia</span>
      </div>
    </div>
  );
}

function StructureVisual({ palette }: { palette: Palette }) {
  const rows = ["propuesta", "servicios", "experiencia"];
  return (
    <div style={{ display: "grid", gap: 10, alignContent: "center", minHeight: 180 }}>
      {rows.map((row, index) => (
        <div key={row} style={{ display: "grid", gridTemplateColumns: "minmax(82px, 110px) minmax(0, 1fr)", gap: 12, alignItems: "center", minWidth: 0 }}>
          <span style={{ ...textStyle, color: palette.muted, fontSize: 10 }}>{row}</span>
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${index + 2}, minmax(0, 1fr))`, gap: 7, minWidth: 0 }}>
            {Array.from({ length: index + 2 }).map((_, block) => <Panel key={block} palette={palette} style={{ height: 30, background: block === 0 ? palette.accentSoft : palette.panel }} />)}
          </div>
        </div>
      ))}
    </div>
  );
}

function JourneyVisual({ palette }: { palette: Palette }) {
  const points = ["observar", "ordenar", "decidir", "avanzar"];
  return (
    <div style={{ display: "grid", gap: 26, alignContent: "center", minHeight: 170 }}>
      <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 12, minWidth: 0 }}>
        <div aria-hidden="true" style={{ position: "absolute", left: "8%", right: "8%", top: 10, height: 2, background: palette.line }} />
        {points.map((point, index) => (
          <div key={point} style={{ position: "relative", display: "grid", justifyItems: "center", gap: 12 }}>
            <Dot color={index === 2 ? palette.accent : palette.ink} />
            <span style={{ ...textStyle, color: palette.ink, fontSize: 10, textAlign: "center" }}>{point}</span>
          </div>
        ))}
      </div>
      <span style={{ ...textStyle, color: palette.muted, textAlign: "center", fontSize: 10 }}>recorrido de uso</span>
    </div>
  );
}

function ActivationVisual({ palette }: { palette: Palette }) {
  const steps = [
    { label: "datos del negocio", state: "definido" },
    { label: "entregas y retiros", state: "revisar" },
    { label: "medios de pago", state: "definido" },
    { label: "apariencia", state: "en curso" },
    { label: "publicación", state: "siguiente" },
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, .9fr)", gap: 10, minHeight: 190, minWidth: 0 }}>
      <Panel palette={palette} style={{ padding: 12, display: "grid", alignContent: "start", gap: 5 }}>
        <span style={{ ...textStyle, color: palette.accent, fontSize: 10, marginBottom: 3 }}>activación de tienda</span>
        {steps.map((step, index) => (
          <div key={step.label} style={{ display: "grid", gridTemplateColumns: "18px minmax(0, 1fr) auto", gap: 8, alignItems: "center", padding: "6px 0", borderBottom: `1px solid ${palette.line}` }}>
            <span style={{ width: 18, height: 18, borderRadius: "50%", display: "grid", placeItems: "center", background: index < 3 ? palette.accent : palette.panel, color: palette.ink, font: '700 10px/1 "Space Mono", monospace' }}>{index < 3 ? "✓" : "·"}</span>
            <span style={{ minWidth: 0, overflowWrap: "anywhere", wordBreak: "break-word", fontSize: 11, lineHeight: 1.15 }}>{step.label}</span>
            <span style={{ ...textStyle, color: palette.muted, fontSize: 9 }}>{step.state}</span>
          </div>
        ))}
      </Panel>
      <Panel palette={palette} style={{ padding: 12, display: "grid", alignContent: "space-between", gap: 10, background: palette.accentSoft }}>
        <span style={{ ...textStyle, fontSize: 10 }}>puesta en marcha</span>
        <div style={{ display: "grid", gap: 8 }}>
          <div style={{ height: 10, borderRadius: 5, background: palette.panel, overflow: "hidden" }}>
            <span style={{ display: "block", height: "100%", width: "62%", background: palette.accent, borderRadius: 5 }} />
          </div>
          <span style={{ minWidth: 0, overflowWrap: "anywhere", wordBreak: "break-word", fontSize: 14, lineHeight: 1.1 }}>lista para vender</span>
        </div>
        <span style={{ ...textStyle, color: palette.muted, fontSize: 9 }}>configuración visible</span>
      </Panel>
    </div>
  );
}

function CatalogVisual({ palette }: { palette: Palette }) {
  const items = ["producto A", "producto B", "producto C", "producto D"];
  return (
    <Panel palette={palette} style={{ padding: 12, display: "grid", gap: 8, minHeight: 180 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, paddingBottom: 5, borderBottom: `1px solid ${palette.line}` }}>
        <span style={{ ...textStyle, fontSize: 10 }}>catálogo</span>
        <span style={{ ...textStyle, color: palette.muted, fontSize: 10 }}>organizado</span>
      </div>
      {items.map((item, index) => (
        <div key={item} style={{ display: "grid", gridTemplateColumns: "22px minmax(0, 1fr) auto", gap: 9, alignItems: "center", padding: "8px 0", borderBottom: index < items.length - 1 ? `1px solid ${palette.line}` : "none", minWidth: 0 }}>
          <span style={{ height: 22, borderRadius: 4, background: index === 1 ? palette.accent : palette.accentSoft }} />
          <span style={{ minWidth: 0, overflowWrap: "anywhere", wordBreak: "break-word", fontSize: 13 }}>{item}</span>
          <span style={{ ...textStyle, color: palette.muted, fontSize: 10 }}>{["activo", "listo", "revisar", "activo"][index]}</span>
        </div>
      ))}
    </Panel>
  );
}

function CheckoutVisual({ palette }: { palette: Palette }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, .8fr)", gap: 10, minHeight: 180, minWidth: 0 }}>
      <Panel palette={palette} style={{ padding: 14, display: "grid", gap: 12, alignContent: "start" }}>
        <span style={{ ...textStyle, color: palette.muted, fontSize: 10 }}>pedido</span>
        {["selección", "datos", "entrega"].map((label, index) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <Dot color={index === 1 ? palette.accent : palette.ink} />
            <span style={{ minWidth: 0, overflowWrap: "anywhere", wordBreak: "break-word", fontSize: 13 }}>{label}</span>
          </div>
        ))}
      </Panel>
      <Panel palette={palette} style={{ padding: 14, display: "grid", alignContent: "space-between", gap: 12, background: palette.accentSoft }}>
        <span style={{ ...textStyle, color: palette.muted, fontSize: 10 }}>resumen</span>
        <strong style={{ fontSize: 24 }}>$ —</strong>
        <span style={{ ...textStyle, fontSize: 10 }}>continuar →</span>
      </Panel>
    </div>
  );
}

function OrderTrackingVisual({ palette }: { palette: Palette }) {
  const states = ["recibido", "preparando", "en camino", "entregado"];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 10, minHeight: 190, minWidth: 0 }}>
      <Panel palette={palette} style={{ padding: 12, display: "grid", gap: 9, alignContent: "start" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "center" }}>
          <span style={{ ...textStyle, color: palette.accent, fontSize: 10 }}>operación</span>
          <span style={{ ...textStyle, color: palette.muted, fontSize: 9 }}>pedido</span>
        </div>
        <strong style={{ fontSize: 15 }}>producto A</strong>
        {["cliente", "entrega", "pago"].map((item, index) => (
          <div key={item} style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "center", padding: "6px 0", borderBottom: `1px solid ${palette.line}` }}>
            <span style={{ minWidth: 0, overflowWrap: "anywhere", wordBreak: "break-word", color: palette.muted, fontSize: 11 }}>{item}</span>
            <span style={{ ...textStyle, fontSize: 9 }}>{index === 1 ? "en curso" : "listo"}</span>
          </div>
        ))}
      </Panel>
      <Panel palette={palette} style={{ padding: 12, display: "grid", gap: 8, background: palette.accentSoft }}>
        <span style={{ ...textStyle, color: palette.muted, fontSize: 10 }}>seguimiento</span>
        <div style={{ position: "relative", display: "grid", gap: 7 }}>
          <div aria-hidden="true" style={{ position: "absolute", left: 4, top: 8, bottom: 8, width: 1, background: palette.line }} />
          {states.map((state, index) => (
            <div key={state} style={{ position: "relative", display: "grid", gridTemplateColumns: "10px minmax(0, 1fr)", gap: 8, alignItems: "center" }}>
              <Dot color={index === 1 ? palette.accent : palette.ink} />
              <span style={{ minWidth: 0, overflowWrap: "anywhere", wordBreak: "break-word", fontSize: 11, lineHeight: 1.1 }}>{state}</span>
            </div>
          ))}
        </div>
        <span style={{ ...textStyle, color: palette.muted, fontSize: 9, marginTop: "auto" }}>cliente informado</span>
      </Panel>
    </div>
  );
}

function OperationsVisual({ palette }: { palette: Palette }) {
  const columns = [
    { label: "por hacer", tasks: 2 },
    { label: "en curso", tasks: 1 },
    { label: "resuelto", tasks: 3 },
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 9, minHeight: 180, minWidth: 0 }}>
      {columns.map((column, columnIndex) => (
        <Panel key={column.label} palette={palette} style={{ padding: 10, display: "grid", alignContent: "start", gap: 9 }}>
          <span style={{ ...textStyle, color: palette.muted, fontSize: 10 }}>{column.label}</span>
          {Array.from({ length: column.tasks }).map((_, taskIndex) => (
            <div key={taskIndex} style={{ minHeight: 34, padding: 8, borderRadius: 4, background: taskIndex === 0 && columnIndex === 1 ? palette.accent : palette.accentSoft }}>
              <span style={{ display: "block", height: 6, width: "76%", background: palette.ink, opacity: .7, borderRadius: 3 }} />
              <span style={{ display: "block", height: 5, width: "52%", background: palette.ink, opacity: .35, borderRadius: 3, marginTop: 7 }} />
            </div>
          ))}
        </Panel>
      ))}
    </div>
  );
}

function SystemVisual({ palette }: { palette: Palette }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 9, minHeight: 180, alignContent: "center", minWidth: 0 }}>
      {["datos", "reglas", "acciones", "señales", "personas", "estados", "ritmo", "cambio"].map((label, index) => (
        <Panel key={label} palette={palette} style={{ minHeight: index % 3 === 0 ? 58 : 42, padding: 10, display: "grid", alignContent: "space-between", gap: 8, background: index === 2 ? palette.accentSoft : palette.panel }}>
          <Dot color={index === 2 ? palette.accent : palette.ink} />
          <span style={{ ...textStyle, color: palette.muted, fontSize: 10 }}>{label}</span>
        </Panel>
      ))}
    </div>
  );
}

function VisualContent({ variant, palette }: { variant: PortfolioVisualVariant; palette: Palette }) {
  switch (variant) {
    case "nodux-ecosystem": return <NoduxEcosystemVisual palette={palette} />;
    case "map": return <MapVisual palette={palette} />;
    case "flow": return <FlowVisual palette={palette} />;
    case "dashboard": return <DashboardVisual palette={palette} />;
    case "wireframe": return <WireframeVisual palette={palette} />;
    case "store-config": return <StoreConfigVisual palette={palette} />;
    case "management-storefront": return <ManagementStorefrontVisual palette={palette} />;
    case "structure": return <StructureVisual palette={palette} />;
    case "journey": return <JourneyVisual palette={palette} />;
    case "activation": return <ActivationVisual palette={palette} />;
    case "catalog": return <CatalogVisual palette={palette} />;
    case "checkout": return <CheckoutVisual palette={palette} />;
    case "order-tracking": return <OrderTrackingVisual palette={palette} />;
    case "operations": return <OperationsVisual palette={palette} />;
    case "system": return <SystemVisual palette={palette} />;
  }
}

export function PortfolioVisualPlaceholder({
  eyebrow,
  title,
  variant,
  density = "comfortable",
  aspectRatio = "16 / 9",
  theme = "teal",
  showCaption = true,
  visualLabel,
  marginTop = 30,
}: PortfolioVisualPlaceholderProps) {
  const palette = palettes[theme];
  const compact = density === "compact";

  return (
    <figure
      aria-label={title}
      data-visual-variant={variant}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: compact ? 14 : 20,
        aspectRatio,
        minHeight: compact ? 250 : 320,
        width: "100%",
        maxWidth: "100%",
        minWidth: 0,
        boxSizing: "border-box",
        alignSelf: "stretch",
        margin: `${typeof marginTop === "number" ? `${marginTop}px` : marginTop} 0 0`,
        padding: compact ? 18 : 24,
        overflow: "hidden",
        border: `1px solid ${palette.line}`,
        borderRadius: 8,
        background: palette.surface,
        color: palette.ink,
      }}
    >
      {showCaption && (
        <figcaption style={{ display: "flex", justifyContent: "flex-start", alignItems: "start", gap: 16, minWidth: 0 }}>
          <div style={{ display: "grid", gap: 7, minWidth: 0 }}>
            <span style={{ ...textStyle, color: palette.accent, fontSize: 10 }}>{eyebrow}</span>
            <strong style={{ font: '600 20px/1.05 "Space Grotesk", sans-serif', maxWidth: 500, overflowWrap: "anywhere" }}>{title}</strong>
          </div>
          {visualLabel && visualLabel.trim().toLowerCase() !== eyebrow.trim().toLowerCase() && (
            <span aria-hidden="true" style={{ ...textStyle, color: palette.muted, fontSize: 10, minWidth: 0 }}>{visualLabel}</span>
          )}
        </figcaption>
      )}
      <div aria-hidden="true" style={{ flex: 1, minHeight: 0, minWidth: 0, width: "100%", maxWidth: "100%" }}>{VisualContent({ variant, palette })}</div>
    </figure>
  );
}
