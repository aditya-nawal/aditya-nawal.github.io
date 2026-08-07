# Read Only Template Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the custom portfolio design with the CC BY 3.0 HTML5 UP “Read Only” template used by the supplied reference, populated with Aditya Nawal’s research content.

**Architecture:** Keep the existing Astro build and GitHub Pages deployment, but render a single-page academic profile in the template’s original two-column structure. The template CSS, JavaScript, fonts, and responsive layout live in public assets; Astro supplies current research data and page metadata. Local research figures are copied into public images and visible attribution credits the template.

**Tech Stack:** Astro, static HTML/CSS/JavaScript from HTML5 UP Read Only, local PNG/SVG research figures, GitHub Pages.

---

### Task 1: Reuse the licensed template assets

**Files:**
- Create: `public/assets/**`, `public/template-license.txt`, `CREDITS.md`
- Modify: `src/layouts/Layout.astro`

- [ ] Copy the public template CSS, JavaScript, font assets, and CC BY 3.0 license from the public reference repository.
- [ ] Link the template stylesheet and scripts from the Astro layout.
- [ ] Keep a visible footer attribution to HTML5 UP and the template license.

### Task 2: Add Aditya-owned visual assets

**Files:**
- Create: `public/images/avatar.svg`, `public/images/generative-ai.svg`, `public/images/iomt.svg`
- Create: `public/images/retrieval-safety.png`, `public/images/tool-admission.png`, `public/images/multilingual-safety.png`

- [ ] Copy the retrieval, tool-admission, and multilingual-safety figures from Aditya’s research workspace.
- [ ] Create original SVG teaser graphics for the two earlier journal articles that do not have local paper figures.
- [ ] Use an initials avatar until a real professional photo is supplied.

### Task 3: Replace homepage content and navigation

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/data/news.ts`

- [ ] Render a fixed right profile sidebar on desktop and responsive top profile bar on mobile.
- [ ] Add About, News, Selected Publications, Ongoing Research, Contact, and CV navigation anchors.
- [ ] Populate papers from the CV, clearly label active projects as ongoing research, and connect Paper/PDF links.

### Task 4: Validate and publish

**Files:**
- Modify: files required by validation fixes

- [ ] Run `npm run check` and `npm run build` with no diagnostics.
- [ ] Confirm the page contains every sidebar anchor, local figure asset, template credit, and CV download link.
- [ ] Commit, push, confirm the GitHub Pages workflow, and verify the live homepage.
