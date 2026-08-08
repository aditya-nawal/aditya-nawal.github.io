# Horizontal Academic Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the green fixed-sidebar homepage with a photo-led academic introduction, horizontal section tabs, and figure-led publication rows inspired by the two user-selected reference sites.

**Architecture:** Keep Astro and the existing static GitHub Pages deployment. Stop loading the HTML5 UP Read Only runtime on active pages, import the repository's custom global stylesheet through the shared layout, and rebuild only the homepage markup around a compact profile masthead and publication rows. The reference repositories inform spacing and information hierarchy; the implementation remains original Astro and CSS.

**Tech Stack:** Astro 6, semantic HTML, plain CSS, GitHub Pages, Chromium browser QA.

---

### Task 1: Record references and profile-photo provenance

**Files:**
- Create: `public/images/profile.jpg`
- Modify: `CREDITS.md`

- [x] **Step 1: Verify the design references**

Inspect `msaveski/www_personal` for its photograph/name header and horizontal navbar, and `myyzzzoooo/myyzzzoooo.github.io` for its publication row structure.

Expected: the redesign brief identifies patterns without importing the repositories' Jekyll dependencies.

- [x] **Step 2: Verify an authentic profile image**

Resolve the Open Graph image from `https://sg.linkedin.com/in/aditya-nawal-7a841719b` and visually confirm that it is the profile associated with “PhD@NUS, Prev SDE@Microsoft.”

Expected: a 200×200 professional headshot of Aditya Nawal.

- [x] **Step 3: Add the image and attribution notes**

Copy the verified image to `public/images/profile.jpg` and update `CREDITS.md` with links to both design inspirations and publication-figure sources.

Expected: the repository records where the photo and design ideas came from.

### Task 2: Replace the active template shell

**Files:**
- Modify: `src/layouts/Layout.astro`
- Modify: `src/styles/global.css`

- [x] **Step 1: Load the custom Astro stylesheet**

Import `src/styles/global.css` from `Layout.astro` and remove the Read Only CSS and JavaScript references from the active page shell.

Expected: no active page loads the green sidebar template assets.

- [x] **Step 2: Update identity metadata**

Use `/images/profile.jpg` for Open Graph, Twitter, and Person JSON-LD image fields while preserving canonical, sitemap, and indexing metadata.

Expected: social previews use the verified photograph.

- [x] **Step 3: Add homepage layout styles**

Add styles for the profile masthead, sticky horizontal tabs, compact sections, publication rows, news, contact links, and responsive stacking at 720px and below.

Expected: desktop publications show figure left and metadata right; mobile publications stack without overflow.

### Task 3: Rebuild the homepage

**Files:**
- Modify: `src/pages/index.astro`

- [x] **Step 1: Add the photo-led profile masthead**

Create a compact two-column introduction containing the verified photo, name, NUS role, research summary, and profile links.

Expected: the top resembles the hierarchy of `www_personal` without becoming a large hero.

- [x] **Step 2: Add horizontal navigation tabs**

Create links for About, News, Publications, Contact, and CV immediately below the profile masthead.

Expected: there is no fixed side panel and no Ongoing Research tab.

- [x] **Step 3: Build publication rows**

Render the three selected papers with exact figures, blue linked titles, authors, venue badges, and outlined PDF/Publisher buttons.

Expected: the publication hierarchy matches the user's screenshot while retaining accurate paper metadata and links.

- [x] **Step 4: Remove ongoing-project content**

Omit the previous Ongoing Research section and keep only About, News, Publications, Contact, and the footer.

Expected: no `#research`, `tool-admission`, or `multilingual-safety` content appears on the homepage.

### Task 4: Verify and deploy

**Files:**
- Verify: generated `dist/`

- [x] **Step 1: Run the static build**

Run: `npm run build`

Expected: Astro reports zero errors, warnings, and hints.

- [x] **Step 2: Run desktop and mobile browser QA**

Serve `dist/` locally, inspect desktop and mobile screenshots, and use Chromium device emulation at 390px to measure overflow, publication stacking, navigation, and image loading.

Expected: no horizontal overflow, missing images, clipped content, or green sidebar.

- [x] **Step 3: Commit and deploy**

Commit the redesign, push `main`, and wait for the `Deploy to GitHub Pages` workflow.

Expected: the workflow succeeds for the pushed commit.

- [x] **Step 4: Verify production**

Request the live homepage, profile image, exact publication figures, and sitemap.

Expected: all return HTTP 200 and the homepage contains the horizontal navigation and publication rows.
