import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 sm:px-8 py-10 border-t border-black/[.06] dark:border-white/[.08]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-3">
          <Image
            src="/images/0x-code-limited-icon.png"
            alt="0x Code Limited"
            width={24}
            height={24}
          />
          <span>© {new Date().getFullYear()} 0x Code Limited</span>
        </div>
        <nav className="flex items-center gap-4">
          <Link
            href="/#services"
            className="hover:underline hover:underline-offset-4"
          >
            Services
          </Link>
          <Link
            href="/#projects"
            className="hover:underline hover:underline-offset-4"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="hover:underline hover:underline-offset-4"
          >
            Contact
          </Link>
          <Link
            href="/privacy.html"
            className="hover:underline hover:underline-offset-4"
          >
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
