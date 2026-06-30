import Link from "next/link";
import type { CSSProperties } from "react";
import BracketFrame from "./BracketFrame";

/**
 * Amber CTA banner. Solid amber surface, dark bracket corners, headline + body
 * and a dark "→" action. The recurring "Let's build something great." block.
 * `layout="row"` lays the action out beside the heading.
 */
export default function CTABanner({
  heading,
  body,
  actionLabel = "Start a project",
  actionHref = "/contact",
  layout = "stack",
  style,
}: {
  heading: string;
  body?: string;
  actionLabel?: string;
  actionHref?: string;
  layout?: "stack" | "row";
  style?: CSSProperties;
}) {
  const horizontal = layout === "row";
  const action = (
    <Link href={actionHref} className="ox-cta-action" style={horizontal ? undefined : { display: "inline-block", marginTop: 30 }}>
      {actionLabel} →
    </Link>
  );
  return (
    <BracketFrame
      corners={2}
      tone="dark"
      size={22}
      weight={3}
      inset={18}
      style={{
        background: "var(--ox-amber-fixed)",
        borderRadius: 16,
        padding: horizontal ? "54px 56px" : "60px 56px",
        overflow: "hidden",
        display: horizontal ? "flex" : "block",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 30,
        flexWrap: "wrap",
        ...style,
      }}
    >
      <div style={{ maxWidth: horizontal ? 520 : 620 }}>
        <h2
          style={{
            font: `700 ${horizontal ? 32 : 42}px/1.1 var(--ox-font-sans)`,
            color: "var(--ox-on-amber)",
            margin: 0,
            letterSpacing: "-.02em",
          }}
        >
          {heading}
        </h2>
        {body && (
          <p style={{ font: "400 16px/1.6 var(--ox-font-sans)", color: "var(--ox-on-amber-mut)", margin: "16px 0 0" }}>
            {body}
          </p>
        )}
        {!horizontal && action}
      </div>
      {horizontal && action}
    </BracketFrame>
  );
}
