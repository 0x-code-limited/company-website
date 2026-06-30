import type { CSSProperties } from "react";

/**
 * Select dropdown matching the Input styling: inset fill, mono label, amber
 * focus border. Pass `options` as an array of strings.
 */
export default function Select({
  label,
  value,
  onChange,
  options,
  id,
  style,
}: {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  id?: string;
  style?: CSSProperties;
}) {
  return (
    <div style={style}>
      {label && (
        <label
          htmlFor={id}
          style={{ display: "block", font: "500 12px var(--ox-font-mono)", color: "var(--ox-text-muted)", marginBottom: 9 }}
        >
          {label}
        </label>
      )}
      <select id={id} className="ox-field" value={value} onChange={onChange} style={{ cursor: "pointer" }}>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
