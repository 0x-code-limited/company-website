import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="px-6 sm:px-8 py-4 border-b border-black/[.06] dark:border-white/[.08]">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/0x-code-limited-icon.png"
            alt="0x Code Limited"
            width={28}
            height={28}
            priority
          />
          <span className="font-medium">0x Code Limited</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
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
        </nav>
      </div>
    </header>
  );
}
