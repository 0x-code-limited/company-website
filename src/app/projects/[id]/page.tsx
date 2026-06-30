import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ox/Button";
import Card from "@/components/ox/Card";
import CTABanner from "@/components/ox/CTABanner";
import Eyebrow from "@/components/ox/Eyebrow";
import ProjectMedia from "@/components/ox/ProjectMedia";
import ProjectTags from "@/components/ox/ProjectTags";
import { getAdjacent, getProject, platformLabel, prjLabel, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);
  if (!project) return {};
  return { title: project.title, description: project.lead };
}

const metaLabel = { font: "500 11px var(--ox-font-mono)", color: "var(--ox-text-faint)", marginBottom: 7 } as const;
const metaValue = { font: "600 15px var(--ox-font-sans)", color: "var(--ox-ink)" } as const;

function StoreBadges({ appStore, googlePlay }: { appStore?: string; googlePlay?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
      {appStore && (
        <a href={appStore} target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store">
          <Image src="/images/App_Store_Badge.svg" alt="Download on the App Store" width={160} height={48} />
        </a>
      )}
      {googlePlay && (
        <a href={googlePlay} target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play">
          <Image src="/images/GooglePlay_Badge.png" alt="Get it on Google Play" width={162} height={48} />
        </a>
      )}
    </div>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();

  const { prev, next, index } = getAdjacent(id);
  const liveUrl = project.href ?? project.appStore ?? project.googlePlay;

  return (
    <main className="ox-container">
      {/* breadcrumb */}
      <div style={{ padding: "40px 0 0", display: "flex", alignItems: "center", gap: 10, font: "500 12px var(--ox-font-mono)", color: "var(--ox-text-faint)" }}>
        <Link href="/projects" className="ox-link-muted">
          projects
        </Link>
        <span>/</span>
        <span style={{ color: "var(--ox-accent)" }}>{project.id}</span>
      </div>

      {/* hero */}
      <section style={{ padding: "40px 0 56px", borderBottom: "1px solid var(--ox-line)" }}>
        <Eyebrow prefix="" style={{ marginBottom: 20 }}>
          {prjLabel(index)}
        </Eyebrow>
        <h1
          className="ox-h1"
          style={{ font: "700 64px/1.02 var(--ox-font-sans)", letterSpacing: "-.03em", margin: "0 0 20px", color: "var(--ox-ink)", maxWidth: 840 }}
        >
          {project.title}
        </h1>
        <p style={{ font: "400 20px/1.55 var(--ox-font-sans)", color: "var(--ox-text-muted)", maxWidth: 600, margin: "0 0 28px" }}>
          {project.lead}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
          <ProjectTags tags={project.tags} />
          {project.href ? (
            <Button href={project.href} external size="sm" arrow>
              Visit live site
            </Button>
          ) : (
            <StoreBadges appStore={project.appStore} googlePlay={project.googlePlay} />
          )}
        </div>
      </section>

      {/* main grid */}
      <div className="ox-detail">
        <div>
          <ProjectMedia
            initials={project.initials}
            image={project.images?.[0]}
            corners={4}
            inset={18}
            size={20}
            fontSize={80}
            style={{ height: 380, borderRadius: 16, border: "1px solid var(--ox-line)", overflow: "hidden", marginBottom: 48 }}
            sizes="(max-width: 880px) 100vw, 860px"
          />

          <div style={{ font: "500 13px var(--ox-font-mono)", color: "var(--ox-accent)", marginBottom: 18 }}>{"// overview"}</div>
          {project.overview.map((para, i) => (
            <p
              key={i}
              style={{
                font: `400 ${i === 0 ? "18px" : "16px"}/1.7 var(--ox-font-sans)`,
                color: i === 0 ? "var(--ox-ink-2)" : "var(--ox-text-muted)",
                margin: i === project.overview.length - 1 ? "0 0 48px" : "0 0 20px",
                maxWidth: 640,
              }}
            >
              {para}
            </p>
          ))}

          <div style={{ font: "500 13px var(--ox-font-mono)", color: "var(--ox-accent)", marginBottom: 22 }}>{"// what we built"}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "var(--ox-line)", border: "1px solid var(--ox-line)", borderRadius: 12, overflow: "hidden" }}>
            {project.highlights.map((item, i) => (
              <div key={item} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "20px 24px", background: "var(--ox-surface)" }}>
                <span style={{ font: "600 12px var(--ox-font-mono)", color: "var(--ox-accent)", marginTop: 2 }}>
                  0x0{i + 1}
                </span>
                <span style={{ font: "400 15.5px/1.55 var(--ox-font-sans)", color: "var(--ox-ink-2)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* meta sidebar */}
        <aside className="ox-detail-aside" style={{ border: "1px solid var(--ox-line)", borderRadius: 14, overflow: "hidden" }}>
          <div style={{ padding: "22px 24px", borderBottom: liveUrl ? "1px solid var(--ox-line)" : undefined }}>
            <div style={metaLabel}>PLATFORM</div>
            <div style={metaValue}>{platformLabel(project.platform)}</div>
          </div>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ox-row-link"
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 24px" }}
            >
              <div>
                <div style={metaLabel}>{project.href ? "LIVE" : "DOWNLOAD"}</div>
                <div style={{ font: "600 14px var(--ox-font-sans)", color: "var(--ox-accent)" }}>
                  {project.href ? "Visit site" : "Get the app"}
                </div>
              </div>
              <span style={{ font: "600 16px var(--ox-font-mono)", color: "var(--ox-accent)" }}>→</span>
            </a>
          )}
        </aside>
      </div>

      {/* prev / next */}
      <div className="ox-prevnext" style={{ padding: "0 0 60px" }}>
        <Card href={`/projects/${prev.id}`} interactive radius={12} padded={false} style={{ padding: "24px 28px" }}>
          <div style={{ font: "500 11px var(--ox-font-mono)", color: "var(--ox-text-faint)", marginBottom: 8 }}>← previous</div>
          <div style={{ font: "600 18px var(--ox-font-sans)", color: "var(--ox-ink)" }}>{prev.title}</div>
        </Card>
        <Card href={`/projects/${next.id}`} interactive radius={12} padded={false} style={{ padding: "24px 28px", textAlign: "right" }}>
          <div style={{ font: "500 11px var(--ox-font-mono)", color: "var(--ox-text-faint)", marginBottom: 8 }}>next →</div>
          <div style={{ font: "600 18px var(--ox-font-sans)", color: "var(--ox-ink)" }}>{next.title}</div>
        </Card>
      </div>

      {/* cta */}
      <section style={{ padding: "0 0 96px" }}>
        <CTABanner layout="row" heading={`Want something like ${project.title}?`} actionLabel="Start a project" actionHref="/contact" />
      </section>
    </main>
  );
}
