import Link from "next/link";
import Button from "@/components/ox/Button";
import Card from "@/components/ox/Card";
import CTABanner from "@/components/ox/CTABanner";
import Eyebrow from "@/components/ox/Eyebrow";
import ProjectMedia from "@/components/ox/ProjectMedia";
import SectionDivider from "@/components/ox/SectionDivider";
import TerminalWindow from "@/components/ox/TerminalWindow";
import { projects } from "@/lib/projects";

const services: [id: string, title: string, body: string][] = [
  ["0x01", "Custom Software", "Web and backend apps tailored to your business with clean, testable, maintainable code."],
  ["0x02", "Cloud & DevOps", "Cloud architecture, CI/CD, and infrastructure-as-code for reliability at scale."],
  ["0x03", "Mobile Development", "Native-quality iOS and Android apps with modern tooling and real-world performance."],
  ["0x04", "AI & Data", "Practical AI integrations, data pipelines, and analytics that drive real impact."],
];

export default function Home() {
  const preview = projects.slice(0, 3);

  return (
    <main className="ox-container">
      {/* hero */}
      <section className="ox-hero">
        <div>
          <Eyebrow style={{ marginBottom: 24 }}>0x_code_limited</Eyebrow>
          <h1
            className="ox-h1"
            style={{ font: "700 56px/1.06 var(--ox-font-sans)", letterSpacing: "-.02em", margin: "0 0 26px", color: "var(--ox-ink)" }}
          >
            Building reliable, scalable software for{" "}
            <span style={{ color: "var(--ox-accent)" }}>modern businesses.</span>
          </h1>
          <p
            style={{ font: "400 17px/1.65 var(--ox-font-sans)", color: "var(--ox-text-muted)", maxWidth: 480, margin: "0 0 36px" }}
          >
            We&apos;re an IT company specializing in custom software, cloud infrastructure, and product development —
            turning complex problems into elegant, maintainable solutions.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Button href="/contact" arrow>
              Start a project
            </Button>
            <Button href="/projects" variant="secondary">
              Our work
            </Button>
          </div>
        </div>
        <TerminalWindow title="~/0x-code — build">
          <div style={{ color: "var(--ox-text-faint)" }}>
            <span style={{ color: "var(--ox-accent)" }}>$</span> 0x deploy --prod
          </div>
          <div style={{ color: "var(--ox-muted)" }}>
            → compiling services ........ <span style={{ color: "var(--ox-success)" }}>ok</span>
          </div>
          <div style={{ color: "var(--ox-muted)" }}>
            → provisioning cloud ....... <span style={{ color: "var(--ox-success)" }}>ok</span>
          </div>
          <div style={{ color: "var(--ox-muted)" }}>
            → running tests <span style={{ color: "var(--ox-text)" }}>428 passed</span>{" "}
            <span style={{ color: "var(--ox-success)" }}>ok</span>
          </div>
          <div style={{ color: "var(--ox-muted)" }}>
            → shipping build <span style={{ color: "var(--ox-accent)" }}>0x4F2A1</span> ....{" "}
            <span style={{ color: "var(--ox-success)" }}>ok</span>
          </div>
          <div style={{ color: "var(--ox-text)", marginTop: 8 }}>
            deployed in <span style={{ color: "var(--ox-accent)" }}>68.84s</span> — zero downtime{" "}
            <span className="ox-cursor" />
          </div>
        </TerminalWindow>
      </section>

      {/* services */}
      <section style={{ padding: "8px 0 96px" }}>
        <SectionDivider label="0x.services" meta="04 capabilities" style={{ marginBottom: 40 }} />
        <div className="ox-services">
          {services.map(([id, title, body]) => (
            <div key={id} style={{ background: "var(--ox-cell)", padding: "34px 32px" }}>
              <div style={{ font: "500 12px var(--ox-font-mono)", color: "var(--ox-accent)", marginBottom: 18 }}>{id}</div>
              <h3 style={{ font: "600 21px var(--ox-font-sans)", margin: "0 0 10px", color: "var(--ox-ink)" }}>{title}</h3>
              <p style={{ font: "400 14.5px/1.6 var(--ox-font-sans)", color: "var(--ox-text-muted)", margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* projects preview */}
      <section style={{ padding: "0 0 96px" }}>
        <SectionDivider
          label="0x.projects"
          meta={
            <Link href="/projects" className="ox-link-muted" style={{ font: "500 12px var(--ox-font-mono)" }}>
              view all →
            </Link>
          }
          style={{ marginBottom: 40 }}
        />
        <div className="ox-preview">
          {preview.map((p) => (
            <Card key={p.id} href={`/projects/${p.id}`} interactive padded={false} radius={12}>
              <ProjectMedia
                initials={p.initials}
                image={p.image}
                height={150}
                fontSize={30}
                inset={10}
                size={14}
                sizes="(max-width: 880px) 100vw, 380px"
              />
              <div style={{ padding: 20 }}>
                <h3 style={{ font: "600 17px var(--ox-font-sans)", margin: "0 0 7px", color: "var(--ox-ink)" }}>{p.title}</h3>
                <p style={{ font: "400 13.5px/1.55 var(--ox-font-sans)", color: "var(--ox-text-muted)", margin: "0 0 14px" }}>
                  {p.summary}
                </p>
                <span style={{ font: "600 12.5px var(--ox-font-mono)", color: "var(--ox-accent)" }}>Learn more →</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* about strip */}
      <section className="ox-aboutstrip" style={{ padding: "0 0 96px" }}>
        <SectionDivider label="0x.about" />
        <div>
          <p
            style={{ font: "500 26px/1.45 var(--ox-font-sans)", color: "var(--ox-ink)", margin: "0 0 24px", letterSpacing: "-.01em" }}
          >
            A small, senior team that ships. We partner with founders and businesses to design, build, and run software
            that holds up under real load.
          </p>
          <Link href="/about" style={{ font: "600 13.5px var(--ox-font-mono)", color: "var(--ox-accent)" }}>
            More about us →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "0 0 96px" }}>
        <CTABanner
          heading="Let's build something great."
          body="Tell us about your product or idea and we'll get back within 1–2 business days."
          actionLabel="Start a project"
          actionHref="/contact"
        />
      </section>
    </main>
  );
}
