# Aditya Nawal — Research Portfolio

Personal research portfolio for `https://aditya-nawal.github.io`.

The interface adapts the HTML5 UP “Read Only” template under CC BY 3.0. See `CREDITS.md` and `public/template-license.txt` for attribution and license details.

## Local development

```bash
npm install
npm run dev
```

Build the static site with `npm run build`. The generated files are written to `dist/` and are deployed by the GitHub Pages workflow in `.github/workflows/deploy.yml`.

Research projects and publications are stored as Markdown files in `src/content/`.

## CV

One CV is maintained at `public/cv.pdf`, compiled from `main.tex` in the existing Overleaf project by the hourly and push-triggered deployment workflow.

The earlier industry variant and shared-source split were retired. Their source and PDF remain recoverable from Git history. Keep NUS, Microsoft and Akamai under a single Experience section, preserve Ongoing Works, and use explicit positive spacing between headings, entries and bullets. Check the rendered PDF before publishing; do not compress spacing merely to force a page count.

To recover the retired sources in the Overleaf Git checkout:

```bash
git restore --source=d82bf52 -- industry.tex cv-shared.tex
```

To recover the retired industry PDF in this website checkout:

```bash
git restore --source=a61f042 -- public/cv-industry.pdf
```
