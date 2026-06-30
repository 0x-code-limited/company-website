"use client";

/**
 * Dark/light theme toggle. Flips `data-theme` on <html> and persists the choice
 * to localStorage; the glyph (☾ / ☀) is swapped in CSS (`.ox-toggle::before`).
 * A no-flash inline script in the root layout applies the saved theme on load.
 */
export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("0x-theme", next);
    } catch {
      /* localStorage unavailable — fall back to in-memory only */
    }
  };
  return <button type="button" className="ox-toggle" aria-label="Toggle theme" onClick={toggle} />;
}
