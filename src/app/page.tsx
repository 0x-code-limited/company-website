import Image from "next/image";
import Link from "next/link";
import ProjectsCarousel, { type Project } from "@/components/ProjectsCarousel";
import projects from "@/data/projects.json";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <main className="font-sans min-h-screen">
      {/* Hero */}
      <section className="px-6 sm:px-8 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto grid gap-10 sm:gap-12 text-center">
          <div className="flex items-center justify-center">
            <Image
              src="/images/0x-code-limited-logo.png"
              alt="0x Code Limited Logo"
              width={160}
              height={160}
              priority
            />
          </div>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
            Building reliable, scalable software for modern businesses
          </h1>
          <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto">
            0x Code Limited is an IT company specializing in custom software,
            cloud infrastructure, and product development. We turn complex
            problems into elegant, maintainable solutions.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="#contact"
              className="rounded-full bg-foreground text-background px-5 py-3 text-sm sm:text-base font-medium hover:opacity-90 transition"
            >
              Start a project
            </Link>
            <Link
              href="#services"
              className="rounded-full border border-black/[.08] dark:border-white/[.145] px-5 py-3 text-sm sm:text-base font-medium hover:bg-black/[.03] dark:hover:bg-white/[.06] transition"
            >
              Our services
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="px-6 sm:px-8 py-16 sm:py-24 border-t border-black/[.06] dark:border-white/[.08]"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <ServiceCard
              title="Custom Software"
              description="Web and backend apps tailored to your business with clean, testable code."
            />
            <ServiceCard
              title="Cloud & DevOps"
              description="Cloud architecture, CI/CD, and infrastructure-as-code for reliability at scale."
            />
            <ServiceCard
              title="Mobile Development"
              description="Native-quality iOS and Android apps with modern tooling and performance."
            />
            <ServiceCard
              title="AI & Data"
              description="Practical AI integrations, data pipelines, and analytics for real impact."
            />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="px-6 sm:px-8 py-16 sm:py-24 border-t border-black/[.06] dark:border-white/[.08]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-4 mb-4">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Selected Projects
            </h2>
          </div>
          <ProjectsCarousel items={projects as Project[]} />
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-6 sm:px-8 py-16 sm:py-24 border-t border-black/[.06] dark:border-white/[.08]"
      >
        <div className="max-w-3xl mx-auto text-center grid gap-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Let’s build something great
          </h2>
          <p className="text-foreground/80">
            Tell us about your product or idea and we’ll get back within 1–2
            business days.
          </p>
          <div className="flex items-center justify-center">
            <a
              href="mailto:contact@0xcode.ca"
              className="rounded-full bg-foreground text-background px-6 py-3 font-medium hover:opacity-90 transition"
            >
              Contact us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
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
              href="#services"
              className="hover:underline hover:underline-offset-4"
            >
              Services
            </Link>
            <Link
              href="#projects"
              className="hover:underline hover:underline-offset-4"
            >
              Projects
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
    </main>
  );
}
