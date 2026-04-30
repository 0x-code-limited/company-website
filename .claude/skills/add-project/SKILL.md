---
name: add-project
description: Add a project to the 0x Code company website given a local path to the project repo. Inspects the project (README, package.json, app.json, public assets) to derive title/description/image, then updates src/data/projects.json, copies an image into public/images/, and — when no external URL is provided — scaffolds src/app/<slug>/page.tsx. Use when the user says things like "add this project to the website", "feature <path> on the site", or passes a project path expecting it to show up in the carousel.
---

# Add Project to Company Website

Adds a project to this Next.js marketing site so it appears in the projects carousel on the landing page.

## Inputs

The user provides a **path to a project directory** (e.g. `/Users/imanheidari/Projects/foo`). They may also pre-supply any of: title, description, external URL, image path. When something is missing, derive it from the project; only ask the user when it cannot be reliably inferred.

## What "adding a project" means here

Source of truth is `src/data/projects.json`. Each entry:

```json
{ "id": "slug", "title": "…", "description": "…", "image": "/images/<slug>.<ext>", "href": "https://…" }
```

`href` is **optional**:
- Present → carousel opens it in a new tab.
- Absent → carousel routes to `/{id}`, so a matching `src/app/<id>/page.tsx` MUST exist or the "Learn more" link 404s.

Images live in `public/images/` and the path in `projects.json` must match a real file.

## Procedure

Work in this order. Confirm with the user before the final write step if anything was inferred non-trivially (especially description and href).

### 1. Inspect the source project

Read whatever is informative — don't read everything blindly. Good signals:
- `package.json` — `name`, `description`, `homepage` (often the deployed URL).
- `app.json` / `app.config.{js,ts}` — Expo apps have `expo.name`, `expo.slug`, `expo.icon`.
- `README.md` (first ~50 lines) — tagline, description, screenshots, store links.
- `public/`, `assets/`, `assets/images/` — logos, icons, hero images.
- iOS/Android store URLs in README → strong signal there's no marketing site, so likely **no external `href`** (use an internal page instead).

### 2. Derive the entry fields

- **id (slug)** — kebab-case, lowercase, ASCII. Prefer the project's own slug (`expo.slug`, `package.json` name minus scope). Must be unique vs existing entries in `projects.json`. Avoid collisions with existing route folders under `src/app/`.
- **title** — human-readable. From `expo.name`, README H1, or `package.json` `displayName`/`name`.
- **description** — one sentence, ~120–180 chars, present-tense, no marketing fluff. Match the tone of existing entries (concise, capability-focused). If the project's own description is too long or too vague, rewrite it; if too short, expand using README context. Show the user the proposed description before writing if you had to rewrite substantively.
- **image** — pick the most representative asset (app icon, logo, or hero screenshot). Prefer PNG/JPG/SVG already in the project. Note the source path; you'll copy it in step 4.
- **href** — only set if there's a real public-facing URL (deployed site, store listing aggregator page). For mobile-only apps with iOS+Android store links, prefer **no href** and create an internal page that lists both store badges (see `src/app/better-bc-assessment/page.tsx` as the canonical template).

### 3. Update `src/data/projects.json`

Append the new entry to the array. Preserve existing formatting (2-space indent, trailing newline). Do not reorder existing entries.

### 4. Copy the image into `public/images/`

Target filename is `<slug>.<ext>` matching the `image` field. Use `cp` via Bash. If the source is huge (>1MB) or oddly sized for a card thumbnail, mention it to the user but don't auto-resize — leave that as a manual follow-up.

### 5. Create the internal page (only if no `href`)

Scaffold `src/app/<slug>/page.tsx` from the existing `src/app/better-bc-assessment/page.tsx` pattern:
- Server component (no `"use client"`).
- `next/image` for the logo and screenshot, `next/link` for outbound links.
- Same Tailwind structure: `main.font-sans.min-h-screen` → `section.px-6.sm:px-8.py-12.sm:py-20` → `max-w-5xl mx-auto grid gap-8`.
- Match the existing border/background utilities (`border-black/[.08] dark:border-white/[.145]`, `bg-black/[.02] dark:bg-white/[.02]`) for visual consistency.
- Include sections that fit the project: Highlights list, Get the app / Visit site CTA, footer note. Skip sections that don't apply (e.g. no store badges for a web-only project).
- For mobile apps, reuse the App Store / Google Play badges already in `public/images/` (`App_Store_Badge.svg`, `GooglePlay_Badge.png`).

**Read `src/app/better-bc-assessment/page.tsx` first** before writing the new page so the structure matches exactly. Don't invent new section patterns unless the project genuinely needs them.

### 6. Verify

- `npm run lint` — must pass.
- `npm run build` — catches missing image files and broken routes. Run it unless the user says to skip.
- Mention to the user that they can `npm run dev` and visit `/` to see the new card, plus `/<slug>` if an internal page was created.

## Things to avoid

- Don't add an entry without copying the image — the carousel will render a broken thumbnail.
- Don't set `href` to a GitHub repo URL. The carousel is for end-user-facing links, not source code.
- Don't create the route folder if `href` is set — it'll be unreachable from the carousel and just dead code.
- Don't reformat `projects.json` (no sorting, no key reordering). Append only.
- Don't add new dependencies for the per-project page; everything needed (`next/image`, `next/link`, Tailwind) is already available.
- Don't add comments or docstrings to the new page file — match the existing terse style of `better-bc-assessment/page.tsx`.

## Example

User: "add /Users/iman/Projects/foo-app to the website, it's deployed at foo.app"

Steps:
1. Read `foo-app/package.json`, `foo-app/README.md`, list `foo-app/public/`.
2. Derive: `id: "foo-app"`, `title: "Foo App"`, `description: "<concise sentence from README>"`, `image: "/images/foo-app.png"`, `href: "https://foo.app"`.
3. Show the user the proposed entry, get confirmation.
4. Append to `src/data/projects.json`.
5. `cp /Users/iman/Projects/foo-app/public/logo.png public/images/foo-app.png`.
6. (Skip internal page since `href` is set.)
7. Run lint + build, report.
