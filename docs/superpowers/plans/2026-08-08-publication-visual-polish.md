# Publication Visual Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the deployed academic portfolio more colorful, aligned, searchable, and visually grounded in the exact figures from Aditya Nawal's papers.

**Architecture:** Keep the licensed HTML5 UP Read Only structure and Astro static deployment. Replace only the two generic publication illustrations with cropped Figure 1 regions from authoritative paper PDFs, then layer a small design system over the template through semantic classes and the existing override stylesheet. Add static metadata and structured data in the shared layout so every generated page remains compatible with GitHub Pages.

**Tech Stack:** Astro 6, HTML5 UP Read Only, plain CSS, GitHub Pages, Poppler PDF extraction tools.

---

### Task 1: Verify deployment and source figures

**Files:**
- Read: `src/pages/index.astro`
- Read: `src/layouts/Layout.astro`
- Create: `public/images/generative-ai-figure-1.png`
- Create: `public/images/iomt-figure-1.png`

- [x] **Step 1: Verify the public site**

Run: `Invoke-WebRequest https://aditya-nawal.github.io` and `gh api repos/aditya-nawal/aditya-nawal.github.io/pages`

Expected: HTTP 200 and GitHub Pages status `built`.

- [x] **Step 2: Download authoritative PDFs outside the repository**

Use the Brno University of Technology repository copy of DOI `10.1145/3689641` and the NUS-hosted author copy of DOI `10.1109/TMLCN.2024.3374253`.

Expected: valid 22-page and 14-page PDFs in the Windows temporary directory.

- [x] **Step 3: Extract the exact Figure 1 regions**

Render only the diagram regions with `pdftoppm` cropping: the model-architecture figure from page 3 of the generative-AI paper and the proposed-methodology figure from page 4 of the IoMT paper.

Expected: two crisp PNGs containing no surrounding article text.

- [x] **Step 4: Copy the extracted figures into the site**

Copy the generated PNGs to `public/images/generative-ai-figure-1.png` and `public/images/iomt-figure-1.png`.

Expected: both assets are available under `/images/` after building.

### Task 2: Improve publication presentation

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `public/template-overrides.css`

- [x] **Step 1: Add semantic publication-card classes**

Add classes for each paper's accent, title, authors, venue, summary, figure note, and link group while preserving all publication text and destinations.

Expected: CSS can style content consistently without fragile tag selectors.

- [x] **Step 2: Replace generic images with exact paper figures**

Point the second and third publication cards at the extracted Figure 1 PNGs and describe them accurately in `alt` text and visible figure notes.

Expected: no generic publication SVG appears on the homepage.

- [x] **Step 3: Add the visual design layer**

Use teal, indigo, and coral paper accents; Georgia-style serif paper titles; uppercase sans-serif link pills; subtle tinted section backgrounds; aligned image frames; and responsive card spacing.

Expected: the page remains recognizably Read Only while no longer appearing grey or visually flat.

### Task 3: Improve discoverability metadata

**Files:**
- Modify: `src/layouts/Layout.astro`
- Verify: `public/robots.txt`
- Verify: generated `dist/sitemap-index.xml`

- [x] **Step 1: Add social and indexing metadata**

Add author, keywords, Open Graph, Twitter card, theme color, and canonical metadata.

Expected: link previews and crawler descriptions use the research-portfolio identity.

- [x] **Step 2: Add Person structured data**

Add JSON-LD for Aditya Nawal with NUS affiliation and public profile links.

Expected: the generated homepage contains valid `application/ld+json` data.

### Task 4: Verify and deploy

**Files:**
- Verify: generated `dist/`

- [x] **Step 1: Run static checks and build**

Run: `npm run build`

Expected: Astro reports zero errors and produces the static site.

- [x] **Step 2: Run desktop and mobile browser QA**

Serve `dist/` locally, capture 1440-pixel desktop and 390-pixel mobile screenshots, inspect alignment, and verify publication images and links load.

Expected: no horizontal overflow, clipped text, missing images, or overlapping sidebar content.

- [ ] **Step 3: Commit and push**

Run: `git add`, `git commit -m "Polish publication visuals and discoverability"`, and `git push origin main`.

Expected: the GitHub Pages workflow completes successfully.

- [ ] **Step 4: Verify production**

Request the live homepage and both new image URLs.

Expected: all return HTTP 200 and the live HTML references the exact paper figures.
