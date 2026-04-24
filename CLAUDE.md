# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for 0x Code Limited. Single-page landing (hero, services, projects carousel, contact) plus per-project subpages. Next.js 15 App Router, React 19, Tailwind v4 (PostCSS plugin), TypeScript strict. No test setup.

## Commands

```bash
npm run dev     # next dev --turbopack
npm run build   # next build --turbopack
npm run start   # serve production build
npm run lint    # eslint (next/core-web-vitals + next/typescript)
```

## Architecture

- `src/app/` — App Router. `layout.tsx` is the single shared chrome (header with logo + nav, Geist fonts, global CSS). `page.tsx` is the landing page and owns section anchors (`#services`, `#projects`, `#contact`) that header/footer links point to.
- `src/app/<project-slug>/page.tsx` — One route per featured project (e.g. `better-bc-assessment/`). The carousel links to `/${project.id}` when a project has no external `href`, so adding a project without an external link requires creating a matching route folder.
- `src/components/` — Presentational components. `ProjectsCarousel` is the only client component (`"use client"`, uses `useRef` for horizontal scroll); `ServiceCard` and page components are server components.
- `src/data/projects.json` — Source of truth for the carousel. Shape is `{ id, title, description, image, href? }`. `href` is optional: external URL opens in a new tab with `noopener noreferrer`; absence routes to the internal `/${id}` page.
- `public/images/` — All project and brand imagery. Paths in `projects.json` must match files here.
- `public/privacy.html` — Static privacy page served directly; `/privacy.html` is linked from the footer, and `better-bc-assessment/privacy/page.tsx` embeds it via `<iframe>`.
- `public/app-ads.txt` — Served at site root for ad network verification; do not move.

## Styling

Tailwind v4 via `@import "tailwindcss"` in `src/app/globals.css`. Theme tokens (`--background`, `--foreground`, Geist font variables) are declared under `:root` and wired into Tailwind through `@theme inline`. Dark mode is `prefers-color-scheme`-based — there is no theme toggle. Classes use ad-hoc opacity borders like `border-black/[.08] dark:border-white/[.145]` for consistency across the site.

## Path alias

`@/*` → `./src/*` (see `tsconfig.json`).

## Adding a project

1. Add an entry to `src/data/projects.json`.
2. Drop the image into `public/images/` at the referenced path.
3. If no external `href`, create `src/app/<id>/page.tsx` — without it the "Learn more" link 404s.
