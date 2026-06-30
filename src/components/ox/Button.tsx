import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  arrow?: boolean;
  block?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
  "aria-label"?: string;
}

/**
 * 0x primary button. Amber fill with near-black ink, mono label, usually with a
 * trailing arrow. Renders as a link (internal/external) or a <button>. Hover and
 * variant styling live in globals.css (`.ox-btn*`).
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external,
  arrow = false,
  block = false,
  type = "button",
  onClick,
  className = "",
  style,
  ...rest
}: ButtonProps) {
  const cls = [
    "ox-btn",
    `ox-btn--${variant}`,
    size !== "md" && `ox-btn--${size}`,
    block && "ox-btn--block",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      {children}
      {arrow && <span aria-hidden="true">→</span>}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={style} {...rest}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} style={style} {...rest}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls} style={style} {...rest}>
      {inner}
    </button>
  );
}
