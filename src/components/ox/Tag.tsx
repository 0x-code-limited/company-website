import type { CSSProperties, ReactNode } from "react";

type Tone = "accent" | "muted";

/**
 * Pill tag. `accent` (amber text + amber-tinted border) for the primary
 * category, `muted` (grey) for secondary attributes.
 */
export default function Tag({
  children,
  tone = "accent",
  style,
}: {
  children: ReactNode;
  tone?: Tone;
  style?: CSSProperties;
}) {
  const tones: Record<Tone, CSSProperties> = {
    accent: { color: "var(--ox-accent)", borderColor: "var(--ox-amber-line)" },
    muted: { color: "var(--ox-text-muted)", borderColor: "var(--ox-line-2)" },
  };
  return (
    <span
      style={{
        font: "500 11px var(--ox-font-mono)",
        padding: "5px 12px",
        borderRadius: 20,
        border: "1px solid",
        ...tones[tone],
        ...style,
      }}
    >
      {children}
    </span>
  );
}
