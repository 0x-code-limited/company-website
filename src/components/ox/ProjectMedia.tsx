import Image from "next/image";
import type { CSSProperties } from "react";
import BracketFrame from "./BracketFrame";

/**
 * Project visual: a bracketed gradient tile carrying large faint initials, or a
 * real screenshot when `image` is set. Used at three sizes (home preview,
 * projects grid/feature, project detail hero) via the layout props.
 */
export default function ProjectMedia({
  initials,
  image,
  label,
  height,
  fontSize = 40,
  corners = 2,
  inset = 14,
  size = 16,
  sizes = "(max-width: 768px) 100vw, 600px",
  style,
}: {
  initials: string;
  image?: string;
  label?: string;
  height?: number | string;
  fontSize?: number;
  corners?: 2 | 4;
  inset?: number;
  size?: number;
  sizes?: string;
  style?: CSSProperties;
}) {
  return (
    <BracketFrame
      corners={corners}
      inset={inset}
      size={size}
      style={{
        height,
        display: "grid",
        placeItems: "center",
        background: "linear-gradient(135deg,var(--ox-tile-1),var(--ox-tile-2))",
        ...style,
      }}
    >
      {image ? (
        <Image src={image} alt="" fill sizes={sizes} style={{ objectFit: "cover", zIndex: 0 }} />
      ) : (
        <span style={{ font: `700 ${fontSize}px var(--ox-font-sans)`, color: "var(--ox-amber-faint)" }}>{initials}</span>
      )}
      {label && (
        <span
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            zIndex: 2,
            font: "500 11px var(--ox-font-mono)",
            color: "var(--ox-text-faint)",
          }}
        >
          {label}
        </span>
      )}
    </BracketFrame>
  );
}
