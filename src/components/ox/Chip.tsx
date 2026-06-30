import type { ReactNode } from "react";

/**
 * Capability chip — a mono chip with a subtle fill, used in wrap rows
 * ("Custom Software", "Cloud & DevOps"…). Larger padding than a Tag.
 */
export default function Chip({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        font: "500 13px var(--ox-font-mono)",
        color: "var(--ox-text)",
        background: "var(--ox-chip)",
        border: "1px solid var(--ox-line-2)",
        padding: "11px 18px",
        borderRadius: 8,
      }}
    >
      {children}
    </span>
  );
}
