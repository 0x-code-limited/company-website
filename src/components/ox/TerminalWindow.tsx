import type { CSSProperties, ReactNode } from "react";

const dot = (bg: string): CSSProperties => ({ width: 11, height: 11, borderRadius: "50%", background: bg });

/**
 * Terminal / code window chrome. Title bar with three traffic-light dots (the
 * last one amber, the brand tell) and a mono filename. Children are the body.
 */
export default function TerminalWindow({
  title = "~/0x-code — build",
  children,
  lifted = true,
  style,
  bodyStyle,
}: {
  title?: string;
  children: ReactNode;
  lifted?: boolean;
  style?: CSSProperties;
  bodyStyle?: CSSProperties;
}) {
  return (
    <div
      style={{
        background: "var(--ox-surface)",
        border: "1px solid var(--ox-line-2)",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: lifted ? "var(--ox-shadow-panel)" : "none",
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "13px 16px",
          borderBottom: "1px solid var(--ox-line)",
          background: "var(--ox-surface-head)",
        }}
      >
        <span style={dot("var(--ox-dot-dim)")} />
        <span style={dot("var(--ox-dot-dim)")} />
        <span style={dot("var(--ox-dot-live)")} />
        <span style={{ font: "500 11.5px var(--ox-font-mono)", color: "var(--ox-text-faint)", marginLeft: 8 }}>
          {title}
        </span>
      </div>
      <div style={{ padding: "22px 20px", font: "500 13px/2 var(--ox-font-mono)", ...bodyStyle }}>{children}</div>
    </div>
  );
}
