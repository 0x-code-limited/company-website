import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — 0x Code Limited",
  description:
    "Get in touch with 0x Code Limited about your product, project, or idea.",
};

export default function ContactPage() {
  return (
    <main className="font-sans min-h-screen">
      <section className="px-6 sm:px-8 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto grid gap-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground hover:underline hover:underline-offset-4 w-fit"
            aria-label="Back to home"
          >
            <span aria-hidden="true">←</span>
            Back
          </Link>

          <div className="grid gap-4">
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
              Contact us
            </h1>
            <p className="text-foreground/80 text-base sm:text-lg">
              Tell us about your product or idea. We typically reply within 1–2
              business days.
            </p>
          </div>

          <div className="grid gap-3">
            <h2 className="text-xl font-semibold">Email</h2>
            <a
              href="mailto:info@0x.company"
              className="text-base hover:underline hover:underline-offset-4 w-fit"
            >
              info@0x.company
            </a>
          </div>

          <div className="flex items-center">
            <a
              href="mailto:info@0x.company"
              className="rounded-full bg-foreground text-background px-6 py-3 font-medium hover:opacity-90 transition"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
