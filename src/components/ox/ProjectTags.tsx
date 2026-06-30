import type { CSSProperties } from "react";
import Tag from "./Tag";

/**
 * A project's tag row — the first tag renders amber/accent, the rest muted.
 * The "first tag is accent" rule lives here so every project surface agrees.
 */
export default function ProjectTags({ tags, style }: { tags: string[]; style?: CSSProperties }) {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", ...style }}>
      {tags.map((t, i) => (
        <Tag key={t} tone={i === 0 ? "accent" : "muted"}>
          {t}
        </Tag>
      ))}
    </div>
  );
}
