---
name: add-project
description: Add a project to the 0x Code company website given a local path to the project repo. Inspects the project (README, package.json, app.json/app.config, public/assets) to derive the title, summary, narrative copy, and a representative image, then appends a typed entry to src/data/projects.json and copies an image into public/images/. The dynamic /projects/[id] route renders the detail page automatically — no page scaffolding. Use when the user says things like "add this project to the website", "feature <path> on the site", or passes a project path expecting it to show up on the site.
---

# Add Project to Company Website

Adds a project to this Next.js marketing site so it appears across the project surfaces: the home page 3-up preview, the `/projects` index (featured row + grid), and its own `/projects/[id]` case-study page.

## Inputs

The user provides a **path to a project directory** (e.g. `/Users/imanheidari/Projects/foo`). A project may span more than one repo (e.g. a web app and a mobile app in sibling folders) — read all paths given. They may also pre-supply any field (title, summary, platform, live URL, store links, image). When something is missing, derive it from the project; only ask the user when it cannot be reliably inferred.

## Data model

Source of truth is `src/data/projects.json` — an array of `Project` entries (typed in `src/lib/projects.ts`). **Array order is display order** and drives the `PRJ.0n` index label and the prev/next detail-page nav. Import project data through `src/lib/projects.ts`, never the JSON directly.

A `Project` entry:

```jsonc
{
  "id": "slug",                 // URL slug → /projects/<id> route + React key. Required.
  "title": "Display Name",      // Required.
  "initials": "KNM",            // 2–4 letters for the placeholder watermark tile. Required.
  "summary": "One-line card description (home preview + projects grid).", // Required.
  "tags": ["Web App", "Mobile"],// Category pills; first renders amber/accent, rest muted. Required.
  "platform": "Both",           // "Web" | "Mobile" | "Both" — detail sidebar PLATFORM meta. Required.
  "lead": "Detail hero lead sentence.",        // Required.
  "overview": ["Para 1.", "Para 2."],          // Detail "overview" paragraphs. Required, string[].
  "highlights": ["…", "…", "…"],               // Detail "what we built" bullets. Required, string[].

  "images": ["/images/slug.png"],              // Optional. First is the primary tile/hero. Omit → gradient + initials tile.
  "href": "https://live.site",                 // Optional live site → "Visit live site" button + sidebar "Visit site".
  "appStore": "https://apps.apple.com/…",      // Optional. Renders an App Store badge on the detail page.
  "googlePlay": "https://play.google.com/…",   // Optional. Renders a Google Play badge.
  "featured": true                             // Optional. true → the large feature row on /projects (only one should be featured).
}
```

Valid `tags` values (the `ProjectTag` enum): `"Mobile"`, `"Web"`, `"Web App"`, `"Web Platform"`, `"iOS · Android"`, `"Education"`, `"Widget"`. Stick to these — they're a closed union; adding a new string requires extending the enum in `src/lib/projects.ts` first.

There is **no per-project page to scaffold**. The detail page is the dynamic `/projects/[id]` route (`src/app/projects/[id]/page.tsx`), which `generateStaticParams` prerenders one of per entry. The detail page derives its primary CTA from `href ?? appStore ?? googlePlay`, and renders store badges when `appStore`/`googlePlay` are set. So a mobile-only app needs **no `href`** — just give it `appStore` and/or `googlePlay`.

> Note: `src/app/exchange-widget/` and `src/app/better-bc-assessment/` are **legacy redirect routes** (308 → `/projects/<id>`), not page templates. Do not copy or scaffold from them.

## Procedure

Work in this order. Confirm with the user before the final write if anything narrative was inferred non-trivially (especially `summary`, `overview`, `highlights`, and `href`).

### 1. Inspect the source project(s)

Read what's informative — don't read everything blindly. Good signals:
- `package.json` — `name`, `description`, `homepage` (often the deployed URL).
- `app.json` / `app.config.{js,ts}` — Expo apps have `expo.name`, `expo.slug`, `expo.icon`, and sometimes iOS/Android bundle IDs that help locate store listings.
- `README.md` (first ~50 lines) — tagline, feature list, screenshots, live URL, store links.
- `public/`, `assets/`, `assets/images/` — logos, icons, hero screenshots.
- For a multi-repo project (web + mobile), read each repo and merge: `platform` becomes `"Both"`, and tags/highlights should reflect both surfaces.

### 2. Derive the entry fields

- **id (slug)** — kebab-case, lowercase, ASCII. Prefer the project's own slug (`expo.slug`, `package.json` name minus scope). Must be unique vs existing `id`s and must not collide with an existing folder under `src/app/` (e.g. `about`, `contact`, `projects`, and the legacy redirect folders).
- **title** — human-readable. From `expo.name`, README H1, or `package.json` `displayName`/`name`.
- **initials** — 2–4 uppercase letters distilled from the title (e.g. "Better BC Assessment" → `BCA`, "Exchange Widget" → `FX`).
- **summary** — one concise sentence for the card, capability-focused, no marketing fluff. Match the tone of existing entries.
- **tags** — pick from the `ProjectTag` union above; order matters (first = accent). Reflect the real surface(s): web app + mobile → e.g. `["Web App", "Mobile", "iOS · Android"]`.
- **platform** — `"Web"`, `"Mobile"`, or `"Both"`.
- **lead** — a single punchy hero sentence for the detail page.
- **overview** — 2 short paragraphs (string[]): what it is + the interesting problem/approach.
- **highlights** — 3-ish bullets of what was built. Concrete capabilities, not adjectives.
- **images** — pick the most representative asset (hero screenshot, then app icon/logo). Note the source path; you copy it in step 4. Omit the field entirely to fall back to the generated gradient + initials tile.
- **href / appStore / googlePlay** — set `href` only for a real public-facing site. For store-distributed apps, set `appStore` and/or `googlePlay` (find listings from bundle IDs / README) and skip `href`.
- **featured** — set `true` only if this should be the index feature row; if so, the previously featured entry should usually have its `featured` removed (only one feature row).

### 3. Update `src/data/projects.json`

Append the new entry (or insert at the intended display position — array order is display order). Preserve formatting (2-space indent, trailing newline). Only include optional keys that apply; don't write `null`/empty values. Don't reorder unrelated entries.

### 4. Copy the image into `public/images/`

Target filename is `<slug>.<ext>` matching the `images` path. Use `cp` via Bash. If the source is huge (>1MB) or oddly proportioned for a card/hero, mention it to the user but don't auto-resize — leave that as a manual follow-up. The shared store badges (`App_Store_Badge.svg`, `GooglePlay_Badge.png`) already exist in `public/images/`; don't re-add them.

### 5. Verify

- `npm run lint` — must pass.
- `npm run build` — catches missing image files, broken `generateStaticParams`, and type errors against the `Project` interface. Run it unless the user says to skip.
- Tell the user they can `npm run dev` and visit `/`, `/projects`, and `/projects/<id>` to see the new entry.

## Things to avoid

- Don't omit a required field — the entry is consumed as a typed `Project`; a missing `summary`/`lead`/`overview`/`highlights`/`tags`/`platform`/`initials` breaks the build or renders blank.
- Don't invent tag strings — use the `ProjectTag` union; extend the enum in `src/lib/projects.ts` first if a genuinely new category is needed.
- Don't reference an image path in `images` without copying the file, or the tile/hero 404s.
- Don't set `href` to a GitHub repo URL — these surfaces are end-user-facing. For source-only projects, omit `href` and let the detail page render from store links or just the narrative.
- Don't scaffold a `src/app/<slug>/page.tsx` — the dynamic `/projects/[id]` route already renders every entry. (The legacy `exchange-widget` / `better-bc-assessment` folders are redirects, not templates.)
- Don't flag more than one project `featured`.
- Don't reformat `projects.json` (no sorting, no key reordering of existing entries).

## Example

User: "add /Users/iman/Projects/foo-app — it's a web + iOS/Android app, deployed at foo.app"

1. Read `foo-app/package.json`, `foo-app/app.json`, `foo-app/README.md`; list `foo-app/assets/`.
2. Derive:
   ```json
   {
     "id": "foo-app",
     "title": "Foo App",
     "initials": "FOO",
     "summary": "<concise capability sentence>",
     "tags": ["Web App", "Mobile", "iOS · Android"],
     "platform": "Both",
     "href": "https://foo.app",
     "images": ["/images/foo-app.png"],
     "lead": "<hero sentence>",
     "overview": ["<para 1>", "<para 2>"],
     "highlights": ["<built A>", "<built B>", "<built C>"]
   }
   ```
3. Show the user the proposed entry; get confirmation on the narrative copy.
4. Append to `src/data/projects.json`.
5. `cp /Users/iman/Projects/foo-app/assets/hero.png public/images/foo-app.png`.
6. Run lint + build, report.
