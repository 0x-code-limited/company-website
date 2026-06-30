import type { Metadata } from "next";
import Card from "@/components/ox/Card";
import CTABanner from "@/components/ox/CTABanner";
import Eyebrow from "@/components/ox/Eyebrow";
import ProjectMedia from "@/components/ox/ProjectMedia";
import ProjectTags from "@/components/ox/ProjectTags";
import { getFeatured, prjLabel, projects, type Project } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected work from 0x Code Limited — mobile apps, web platforms, and tools, shipped and running in production.",
};

export default function ProjectsPage() {
  const { featured, rest } = getFeatured();
  const labelOf = (p: Project) => prjLabel(projects.indexOf(p));

  return (
    <main className="ox-container">
      <section style={{ padding: "84px 0 50px", borderBottom: "1px solid var(--ox-line)" }}>
        <Eyebrow style={{ marginBottom: 22 }}>0x.projects</Eyebrow>
        <h1
          className="ox-h1"
          style={{ font: "700 60px/1.04 var(--ox-font-sans)", letterSpacing: "-.025em", margin: "0 0 22px", color: "var(--ox-ink)", maxWidth: 760 }}
        >
          Selected work, shipped and running in production.
        </h1>
        <p style={{ font: "400 17px/1.65 var(--ox-font-sans)", color: "var(--ox-text-muted)", maxWidth: 560, margin: 0 }}>
          A mix of mobile apps, web platforms, and tools we&apos;ve designed, built, and maintain. Each one solving a real
          problem for real users.
        </p>
      </section>

      <section style={{ padding: "24px 0 40px" }}>
        {/* feature row */}
        <Card href={`/projects/${featured.id}`} interactive padded={false} className="ox-feature" style={{ marginBottom: 24 }}>
          <ProjectMedia
            initials={featured.initials}
            image={featured.image}
            label={labelOf(featured)}
            fontSize={56}
            inset={18}
            size={18}
            style={{ minHeight: 280 }}
            sizes="(max-width: 880px) 100vw, 560px"
          />
          <div style={{ padding: "42px 44px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <ProjectTags tags={featured.tags} style={{ marginBottom: 16 }} />
            <h2
              style={{ font: "700 32px var(--ox-font-sans)", margin: "0 0 12px", color: "var(--ox-ink)", letterSpacing: "-.01em" }}
            >
              {featured.title}
            </h2>
            <p style={{ font: "400 15.5px/1.65 var(--ox-font-sans)", color: "var(--ox-text-muted)", margin: "0 0 24px", maxWidth: 440 }}>
              {featured.summary}
            </p>
            <span style={{ font: "600 13px var(--ox-font-mono)", color: "var(--ox-accent)" }}>View case study →</span>
          </div>
        </Card>

        <div className="ox-grid-2">
          {rest.map((p) => (
            <Card key={p.id} href={`/projects/${p.id}`} interactive padded={false}>
              <ProjectMedia
                initials={p.initials}
                image={p.image}
                label={labelOf(p)}
                height={180}
                fontSize={40}
                inset={14}
                size={16}
                sizes="(max-width: 880px) 100vw, 560px"
              />
              <div style={{ padding: "28px 30px" }}>
                <ProjectTags tags={p.tags} style={{ marginBottom: 16 }} />
                <h2 style={{ font: "700 24px var(--ox-font-sans)", margin: "0 0 10px", color: "var(--ox-ink)" }}>{p.title}</h2>
                <p style={{ font: "400 14.5px/1.6 var(--ox-font-sans)", color: "var(--ox-text-muted)", margin: "0 0 18px" }}>
                  {p.summary}
                </p>
                <span style={{ font: "600 12.5px var(--ox-font-mono)", color: "var(--ox-accent)" }}>View case study →</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section style={{ padding: "20px 0 96px" }}>
        <CTABanner layout="row" heading="Have a project like these in mind?" actionLabel="Start a project" actionHref="/contact" />
      </section>
    </main>
  );
}
