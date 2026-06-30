import type { Metadata } from "next";
import Chip from "@/components/ox/Chip";
import CTABanner from "@/components/ox/CTABanner";
import Eyebrow from "@/components/ox/Eyebrow";
import SectionDivider from "@/components/ox/SectionDivider";

export const metadata: Metadata = {
  title: "About",
  description:
    "0x Code Limited is a small, senior team that turns complex problems into reliable, maintainable software — design, build, and run.",
};

const facts: [key: string, value: string][] = [
  ["BASED", "British Columbia, CA"],
  ["TEAM", "Senior engineers only"],
  ["SCOPE", "Design → build → run"],
  ["STACK", "Web · Mobile · Cloud · AI"],
];

const principles: [index: string, title: string, body: string][] = [
  [
    "0x01 · Senior, end-to-end",
    "No hand-offs to junior teams",
    "The people who scope your project are the people who build it. Fewer translation layers, fewer surprises, better decisions.",
  ],
  [
    "0x02 · Built to maintain",
    "Clean, testable, documented",
    "We optimize for the code you'll still be running in two years — not the demo you'll show next week.",
  ],
  [
    "0x03 · Reliable at scale",
    "Infrastructure you can trust",
    "Cloud architecture, CI/CD, and infrastructure-as-code so releases are boring and uptime is high.",
  ],
  [
    "0x04 · Clear communication",
    "You always know where things stand",
    "Plain-language updates, honest timelines, and a reply within 1–2 business days, every time.",
  ],
];

const capabilities = [
  "Custom Software",
  "Cloud & DevOps",
  "Mobile Development",
  "AI & Data",
  "Web Platforms",
  "CI/CD & IaC",
  "Data Pipelines",
];

export default function AboutPage() {
  return (
    <main className="ox-container">
      <section style={{ padding: "84px 0 60px" }}>
        <Eyebrow style={{ marginBottom: 22 }}>0x.about</Eyebrow>
        <h1
          className="ox-h1"
          style={{ font: "700 64px/1.03 var(--ox-font-sans)", letterSpacing: "-.025em", margin: 0, color: "var(--ox-ink)", maxWidth: 900 }}
        >
          A small, senior team that turns complex problems into software that lasts.
        </h1>
      </section>

      <section className="ox-about-grid">
        <div>
          <div style={{ font: "500 11.5px/1.9 var(--ox-font-mono)", color: "var(--ox-text-faint)", borderLeft: "2px solid var(--ox-accent)", paddingLeft: 18 }}>
            <div style={{ color: "var(--ox-accent)", marginBottom: 8 }}>0x_code_limited</div>
            {facts.map(([k, v]) => (
              <div key={k} style={{ display: "flex", gap: 10 }}>
                <span style={{ display: "inline-block", minWidth: 52 }}>{k}</span>
                <span>· {v}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p style={{ font: "400 19px/1.7 var(--ox-font-sans)", color: "var(--ox-ink-2)", margin: "0 0 22px" }}>
            0x Code Limited is an IT company specializing in custom software, cloud infrastructure, and product
            development. We work with founders and businesses who need software that is reliable, scalable, and genuinely
            maintainable — not a prototype that falls over the first time it meets real users.
          </p>
          <p style={{ font: "400 17px/1.7 var(--ox-font-sans)", color: "var(--ox-text-muted)", margin: 0 }}>
            We stay small on purpose. Every project is handled by senior people end-to-end, from the first architecture
            decision to the deploy that ships it. That&apos;s how complex problems become elegant, durable solutions.
          </p>
        </div>
      </section>

      <section style={{ padding: "80px 0 90px" }}>
        <SectionDivider label="0x.principles" meta="how we work" style={{ marginBottom: 44 }} />
        <div className="ox-principles">
          {principles.map(([idx, title, body]) => (
            <div key={idx}>
              <div style={{ font: "500 12px var(--ox-font-mono)", color: "var(--ox-accent)", marginBottom: 14 }}>{idx}</div>
              <h3 style={{ font: "600 22px var(--ox-font-sans)", margin: "0 0 10px", color: "var(--ox-ink)" }}>{title}</h3>
              <p style={{ font: "400 15px/1.65 var(--ox-font-sans)", color: "var(--ox-text-muted)", margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "0 0 90px" }}>
        <SectionDivider label="0x.capabilities" style={{ marginBottom: 30 }} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {capabilities.map((c) => (
            <Chip key={c}>{c}</Chip>
          ))}
        </div>
      </section>

      <section style={{ padding: "0 0 96px" }}>
        <CTABanner
          layout="row"
          heading="Let's build something great."
          body="We reply within 1–2 business days."
          actionLabel="Get in touch"
          actionHref="/contact"
        />
      </section>
    </main>
  );
}
