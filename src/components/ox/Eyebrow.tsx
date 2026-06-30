import type { CSSProperties, ReactNode } from "react";

/**
 * Mono eyebrow label — the "// 0x.section" system-voice cue that opens nearly
 * every section. Amber, tracked, lowercase. `prefix` defaults to "// ".
 */
export default function Eyebrow({
  children,
  prefix = "// ",
  style,
}: {
  children: ReactNode;
  prefix?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        font: "500 12.5px var(--ox-font-mono)",
        color: "var(--ox-accent)",
        letterSpacing: ".08em",
        ...style,
      }}
    >
      {prefix}
      {children}
    </div>
  );
}
