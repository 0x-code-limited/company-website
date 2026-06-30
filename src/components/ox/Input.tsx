import type { CSSProperties } from "react";

const labelStyle: CSSProperties = {
  display: "block",
  font: "500 12px var(--ox-font-mono)",
  color: "var(--ox-text-muted)",
  marginBottom: 9,
};

/**
 * Text field. Inset fill, hairline border that turns amber on focus (and coral
 * on error), mono label above, and an optional error line below. Set
 * `multiline` for a textarea. Focus/placeholder styling lives in `.ox-field`.
 */
export default function Input({
  label,
  value,
  onChange,
  placeholder,
  error,
  multiline,
  rows = 4,
  type = "text",
  id,
  style,
}: {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  error?: string | false;
  multiline?: boolean;
  rows?: number;
  type?: string;
  id?: string;
  style?: CSSProperties;
}) {
  const cls = `ox-field${error ? " ox-field--error" : ""}`;
  return (
    <div style={style}>
      {label && (
        <label htmlFor={id} style={labelStyle}>
          {label}
        </label>
      )}
      {multiline ? (
        <textarea
          id={id}
          className={cls}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          aria-invalid={!!error}
        />
      ) : (
        <input
          id={id}
          className={cls}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-invalid={!!error}
        />
      )}
      {error && (
        <div style={{ font: "500 11.5px var(--ox-font-mono)", color: "var(--ox-error)", marginTop: 7 }}>↳ {error}</div>
      )}
    </div>
  );
}
