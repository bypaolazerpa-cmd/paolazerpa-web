import type { CSSProperties, ReactNode } from "react";

type PaperNoteProps = {
  children: ReactNode;
  style?: CSSProperties;
};

export function PaperNote({ children, style }: PaperNoteProps) {
  return (
    <aside className="pz-paper-note" style={style}>
      <div className="pz-hand">{children}</div>
    </aside>
  );
}
