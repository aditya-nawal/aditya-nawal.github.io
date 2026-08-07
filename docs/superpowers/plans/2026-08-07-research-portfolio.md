# Research Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a distinctive, statement-led academic research portfolio for `https://aditya-nawal.github.io` that can be hosted free on GitHub Pages.

**Architecture:** Use Astro's static output with small reusable components and plain CSS. The homepage is a single research narrative with a research statement, agent pipeline diagram, three research directions, selected work, publications, news, service, and links. Project and publication details are editable Markdown content collections, while the CV page is a lightweight structured page with a downloadable PDF.

**Tech Stack:** Astro, TypeScript, Markdown content collections, semantic HTML, CSS custom properties, GitHub Actions, GitHub Pages.

---

### Task 1: Project and deployment foundation

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`
- Create: `.github/workflows/deploy.yml`
- Create: `public/favicon.svg`, `public/robots.txt`, `public/cv.pdf`

- [ ] Create an Astro static project configured with `site: 'https://aditya-nawal.github.io'` and no server adapter.
- [ ] Add a GitHub Pages workflow that installs dependencies, runs `npm run build`, uploads `dist/`, and deploys through the Pages environment.
- [ ] Add the CV PDF and minimal public metadata assets.
- [ ] Install dependencies and confirm the empty site builds.

### Task 2: Shared layout and visual system

**Files:**
- Create: `src/layouts/Layout.astro`
- Create: `src/components/Header.astro`, `src/components/AgentDiagram.astro`
- Create: `src/styles/global.css`

- [ ] Implement shared metadata, canonical URLs, semantic page structure, and a responsive navigation header.
- [ ] Define warm-white, near-black, muted-grey, indigo, lavender, coral, and teal design tokens.
- [ ] Implement the statement diagram with HTML/CSS so it remains sharp and accessible at every size.
- [ ] Add mobile layout rules that stack the desktop two-column compositions.

### Task 3: Content model and research pages

**Files:**
- Create: `src/content.config.ts`
- Create: `src/content/research/*.md`, `src/content/publications/*.md`
- Create: `src/pages/research/[slug].astro`, `src/pages/publications.astro`
- Create: `src/components/ResearchCard.astro`, `src/components/PublicationRow.astro`

- [ ] Define typed Markdown collections for research projects and publications.
- [ ] Add current research content from the CV without presenting ongoing directions as completed publications.
- [ ] Render featured work as large visual cards and the complete publication list as compact rows.
- [ ] Add individual project pages with summary, research question, approach, finding, and links.

### Task 4: Homepage and CV page

**Files:**
- Create: `src/pages/index.astro`, `src/pages/cv.astro`, `src/pages/404.astro`
- Create: `src/data/news.ts`

- [ ] Build a statement-led homepage with no marketing hero section.
- [ ] Add research directions, selected work, publications, news, service, and footer links.
- [ ] Add a readable CV page and a PDF download link without exposing a phone number.
- [ ] Add basic SEO and social preview metadata.

### Task 5: Verification and handoff

**Files:**
- Modify: any files required by the production build output

- [ ] Run `npm run check` and resolve Astro/TypeScript diagnostics.
- [ ] Run `npm run build` and confirm `dist/index.html`, project pages, publication pages, `cv.pdf`, and `robots.txt` exist.
- [ ] Check the GitHub Pages base URL configuration and document the repository setup steps.
