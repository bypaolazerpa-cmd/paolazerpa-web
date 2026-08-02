type SectionLabelProps = {
  number: string;
  children: string;
  tone?: "light" | "dark";
};

export function SectionLabel({ number, children, tone = "dark" }: SectionLabelProps) {
  return (
    <p
      className="pz-section-label"
      style={{
        color: tone === "light" ? "var(--arena-clara)" : "var(--mar-profundo)",
        margin: 0,
      }}
    >
      {number} — {children}
    </p>
  );
}
