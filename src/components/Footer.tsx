import Link from "next/link";
import Logo from "@/components/ox/Logo";

const footerLinks: [label: string, href: string][] = [
  ["Home", "/"],
  ["Projects", "/projects"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <div className="ox-container">
      <footer
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          flexWrap: "wrap",
          padding: "30px 0 56px",
          borderTop: "1px solid var(--ox-line)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <Logo size={22} />
          <span style={{ font: "500 12.5px var(--ox-font-mono)", color: "var(--ox-text-faint)" }}>
            © 2026 0x Code Limited
          </span>
        </div>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {footerLinks.map(([label, href]) => (
            <Link key={href} href={href} className="ox-link-muted" style={{ font: "500 12.5px var(--ox-font-mono)" }}>
              {label}
            </Link>
          ))}
          <a href="/privacy.html" className="ox-link-muted" style={{ font: "500 12.5px var(--ox-font-mono)" }}>
            Privacy
          </a>
        </div>
      </footer>
    </div>
  );
}
