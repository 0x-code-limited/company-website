"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ox/Button";
import Logo from "@/components/ox/Logo";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks: [label: string, href: string][] = [
  ["home", "/"],
  ["projects", "/projects"],
  ["about", "/about"],
];

export default function Header() {
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "var(--ox-nav-bg)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--ox-line)",
      }}
    >
      <div className="ox-nav-inner">
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Logo />
          <span style={{ font: "600 15px var(--ox-font-sans)", letterSpacing: ".04em", color: "var(--ox-ink)" }}>
            0X CODE
          </span>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 26, flexWrap: "wrap" }}>
          {navLinks.map(([label, href]) => (
            <Link key={href} href={href} className="ox-nav-link" data-active={isActive(href) ? "true" : "false"}>
              {label}
            </Link>
          ))}
          <ThemeToggle />
          <Button href="/contact" size="sm" arrow>
            start a project
          </Button>
        </div>
      </div>
    </nav>
  );
}
