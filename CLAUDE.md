# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for 0x Code Limited. Multi-page site (Home, Projects index, per-project case studies, About, Contact) built on the **0x Code design system** — a dark-default, amber-accented, "terminal / build-log" brand with a warm-paper light theme. Next.js 16 App Router, React 19, Tailwind v4 (PostCSS plugin), TypeScript strict. No test setup.

## Commands

```bash
npm run dev     # next dev --turbopack
npm run build   # next build --turbopack
npm run start   # serve production build
npm run lint    # eslint (next/core-web-vitals + next/typescript)
```

## Architecture

- `src/app/` — App Router. `layout.tsx` is the shared chrome: `Header` (sticky nav + theme toggle), `Footer`, and a `beforeInteractive` inline script that applies the saved theme before first paint (no flash). Routes:
  - `/` (`page.tsx`) — Home: hero + terminal build-log, services grid, 3-up projects preview, about strip, CTA.
  - `/projects` — index: featured project row + grid of the rest.
  - `/projects/[id]` — dynamic case-study page. `generateStaticParams` prerenders one per project; `generateMetadata` sets per-project title/description.
  - `/about`, `/contact` — About and Contact. Contact's form panel is the only stateful UI (`src/components/ContactForm.tsx`).
  - `/better-bc-assessment` and `/exchange-widget` — legacy URLs that `permanentRedirect` (308) to `/projects/<id>`. `better-bc-assessment/privacy/page.tsx` still embeds `public/privacy.html` via `<iframe>`.
- `src/components/ox/` — the design-system primitives (`Button`, `Eyebrow`, `SectionDivider`, `Tag`, `Chip`, `Card`, `TerminalWindow`, `BracketFrame`, `CTABanner`, `Input`, `Select`, `ProjectMedia`, `Logo`). All are server components styled with inline styles over CSS-variable tokens; hover/focus states live as `.ox-*` classes in `globals.css`. `Header`, `ThemeToggle`, and `ContactForm` are the only client components.
- `src/lib/projects.ts` — typed loader over the JSON: `Project` interface + helpers (`getProject`, `getFeatured`, `getAdjacent`, `prjLabel`). Import project data from here, not the JSON directly.
- `src/data/projects.json` — source of truth for every project surface (see "Adding a project").
- `public/images/` — all project and brand imagery. `images` paths in `projects.json` must match files here.
- `public/privacy.html` — static privacy page; linked from the footer and embedded by the BC Assessment privacy route.
- `public/app-ads.txt` — served at site root for ad-network verification; do not move.

## Styling

The design system lives entirely in `src/app/globals.css`:
- **Tokens** — `--ox-*` CSS variables under `:root` (dark, the default) and `[data-theme="light"]` (warm paper). One amber accent (`--ox-accent`) over a near-black neutral ladder; `--ox-amber-fixed` is the amber that stays amber in both themes (CTA fills).
- **Fonts** — Space Grotesk (display + body) and JetBrains Mono (every label, eyebrow, nav link, button, tag, code line) via a Google Fonts `@import`. Reference them through `var(--ox-font-sans)` / `var(--ox-font-mono)`.
- **Interactive classes** — `.ox-btn*`, `.ox-card*`, `.ox-field*`, `.ox-nav-link`, `.ox-link-muted`, `.ox-toggle`, etc. hold hover/focus rules so components can stay server components (a stylesheet `:hover` can't override an inline-set property, so resting + hover styles for interactive elements are both in CSS).
- **Layout classes** — `.ox-container` (1240px max, 56px gutter) and the page grids (`.ox-hero`, `.ox-detail`, `.ox-grid-2`, …) collapse to one column under 880px.

Theme is toggled by `ThemeToggle`, which flips `data-theme` on `<html>` and persists to `localStorage('0x-theme')`. Tailwind v4 is still imported but the UI is built from the `ox` system, not utility classes.

## Path alias

`@/*` → `./src/*` (see `tsconfig.json`).

## Adding a project

The `/projects/[id]` route is dynamic, so no route scaffolding is needed — just data + an image:

1. Append an entry to `src/data/projects.json`. Array order is display order (drives the `PRJ.0n` index and prev/next nav). Shape (`Project` in `src/lib/projects.ts`):
   - Required: `id` (slug), `title`, `initials`, `summary` (card text), `tags` (first renders amber/accent, rest muted), `platform` (`"Web"`, `"Mobile"`, or `"Both"` — the detail sidebar PLATFORM meta), `lead`, `overview` (string[]), `highlights` (string[]).
   - Optional: `images` (string[] of real screenshots; the first is the primary tile/hero, falls back to the gradient + initials tile when omitted), `href` (live site → "Visit live site" button + sidebar "Visit site"), `appStore` / `googlePlay` (render store badges when there's no `href`), `featured` (true → the large feature row on `/projects`).
2. Drop any referenced `images` into `public/images/`.
