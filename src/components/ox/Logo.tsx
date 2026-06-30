/**
 * The 0x mark — a bracketed square enclosing "0X", drawn in `currentColor` so it
 * inherits the amber accent. The only true glyph in the system.
 */
export default function Logo({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={{ color: "var(--ox-accent)" }}>
      <path
        d="M5 15V5h10M33 5h10v10M43 33v10H33M15 43H5V33"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="square"
      />
      <text x="24" y="31" textAnchor="middle" fontFamily="Space Grotesk" fontWeight="700" fontSize="18" fill="currentColor">
        0X
      </text>
    </svg>
  );
}
