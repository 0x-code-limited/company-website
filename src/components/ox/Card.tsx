import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

/**
 * Standard 0x surface card: 1px hairline border, rounded, optional hover that
 * brightens the border toward amber (`.ox-card--interactive` in globals.css).
 * Pass `href` to render it as an internal link.
 */
export default function Card({
  children,
  href,
  interactive,
  padded = true,
  radius = 14,
  className = "",
  style,
}: {
  children: ReactNode;
  href?: string;
  interactive?: boolean;
  padded?: boolean;
  radius?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const cls = ["ox-card", (interactive || href) && "ox-card--interactive", className]
    .filter(Boolean)
    .join(" ");
  const css: CSSProperties = { borderRadius: radius, ...(padded ? { padding: 20 } : null), ...style };

  if (href) {
    return (
      <Link href={href} className={cls} style={{ display: "block", ...css }}>
        {children}
      </Link>
    );
  }
  return (
    <div className={cls} style={css}>
      {children}
    </div>
  );
}
