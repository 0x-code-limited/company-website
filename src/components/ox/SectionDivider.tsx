import type { CSSProperties, ReactNode } from "react";

/**
 * Section divider: an amber mono label, a flexible hairline, and optional meta
 * on the right. The recurring horizontal rule that separates page sections.
 */
export default function SectionDivider({
  label,
  meta,
  style,
}: {
  label: ReactNode;
  meta?: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 14, ...style }}>
      <span style={{ font: "500 13px var(--ox-font-mono)", color: "var(--ox-accent)" }}>{label}</span>
      <span style={{ flex: 1, height: 1, background: "var(--ox-line-2)" }} />
      {meta != null && (
        <span style={{ font: "500 12px var(--ox-font-mono)", color: "var(--ox-text-faint)" }}>{meta}</span>
      )}
    </div>
  );
}
