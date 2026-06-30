import type { CSSProperties, ReactNode } from "react";

type Tone = "amber" | "dark";

/**
 * Bracket frame — the L-shaped corner crops that mark project tiles and CTA
 * blocks. Renders 2 (tl+br) or 4 corners over a positioned container.
 * `tone` = 'amber' (default) or 'dark' (for use on an amber surface).
 */
export default function BracketFrame({
  corners = 2,
  tone = "amber",
  size = 16,
  weight = 2,
  inset = 16,
  style,
  children,
}: {
  corners?: 2 | 4;
  tone?: Tone;
  size?: number;
  weight?: number;
  inset?: number;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  const color = tone === "dark" ? "var(--ox-on-amber)" : "var(--ox-accent)";
  const b = `${weight}px solid ${color}`;
  const cs: { key: string; pos: CSSProperties }[] = [
    { key: "tl", pos: { top: inset, left: inset, borderTop: b, borderLeft: b } },
    { key: "br", pos: { bottom: inset, right: inset, borderBottom: b, borderRight: b } },
    ...(corners === 4
      ? [
          { key: "tr", pos: { top: inset, right: inset, borderTop: b, borderRight: b } },
          { key: "bl", pos: { bottom: inset, left: inset, borderBottom: b, borderLeft: b } },
        ]
      : []),
  ];
  return (
    <div style={{ position: "relative", ...style }}>
      {cs.map((c) => (
        <span
          key={c.key}
          aria-hidden="true"
          style={{ position: "absolute", width: size, height: size, zIndex: 1, ...c.pos }}
        />
      ))}
      {children}
    </div>
  );
}
