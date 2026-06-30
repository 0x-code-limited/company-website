import data from "@/data/projects.json";

/** Detail sidebar — PLATFORM meta. */
export enum ProjectPlatform {
  Web = "Web",
  Mobile = "Mobile",
  Both = "Both",
}

/** Category pills shown on cards and the detail hero. */
export enum ProjectTag {
  Mobile = "Mobile",
  Web = "Web",
  WebApp = "Web App",
  WebPlatform = "Web Platform",
  IOSAndroid = "iOS · Android",
  Education = "Education",
  Widget = "Widget",
}

/**
 * Source of truth for everything project-related on the site: the home preview,
 * the projects index (featured row + grid), and each `/projects/[id]` detail
 * page. Add a project by appending an entry to `src/data/projects.json` — array
 * order is display order and drives the `PRJ.0n` index + prev/next navigation.
 */
export interface Project {
  /** URL slug — the `/projects/[id]` route and React key. */
  id: string;
  /** Display name. */
  title: string;
  /** 2–4 letters for the placeholder watermark tile (e.g. "KNM"). */
  initials: string;
  /** One-line description used on cards (home preview + projects grid). */
  summary: string;
  /** Category pills. The first renders as the amber "accent" tag, the rest muted. */
  tags: ProjectTag[];
  /** Detail sidebar — PLATFORM meta. */
  platform: ProjectPlatform;
  /** Detail hero lead sentence. */
  lead: string;
  /** Detail "overview" paragraphs. */
  overview: string[];
  /** Detail "what we built" bullet list. */
  highlights: string[];
  /** Optional real screenshots; the first is the primary tile/hero. Falls back to the gradient + initials tile when empty. */
  images?: string[];
  /** Optional live site URL ("Visit live site"). */
  href?: string;
  /** Optional App Store listing — renders a store badge on the detail page. */
  appStore?: string;
  /** Optional Google Play listing — renders a store badge on the detail page. */
  googlePlay?: string;
  /** When true, this project is the large feature row on the projects index. */
  featured?: boolean;
}

export const projects: Project[] = data as Project[];

/** Display label for the PLATFORM meta — "Both" reads as "Web - Mobile". */
export function platformLabel(platform: ProjectPlatform): string {
  return platform === ProjectPlatform.Both ? "Web - Mobile" : platform;
}

/** `PRJ.01`-style index label for a project's position in the list. */
export function prjLabel(index: number): string {
  return `PRJ.${String(index + 1).padStart(2, "0")}`;
}

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

/** The featured project (or the first, if none is flagged) + the remainder. */
export function getFeatured(): { featured: Project; rest: Project[] } {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p !== featured);
  return { featured, rest };
}

/** Wrapping previous/next neighbours for the detail page footer nav. */
export function getAdjacent(id: string): { prev: Project; next: Project; index: number } {
  const index = projects.findIndex((p) => p.id === id);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return { prev, next, index };
}
