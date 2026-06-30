import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.0x.company"),
  title: {
    default: "0x Code Limited — Reliable, scalable software",
    template: "%s — 0x Code Limited",
  },
  description:
    "0x Code Limited is a small, senior team building custom software, cloud infrastructure, and products for modern businesses.",
};

// Applies the saved theme before first paint so there's no light/dark flash.
const themeScript = `(function(){try{var t=localStorage.getItem('0x-theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Inline, synchronous: runs during HTML parse, before first paint, so there's no theme flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
