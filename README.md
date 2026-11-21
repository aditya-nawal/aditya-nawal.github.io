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

## CV versions

The public academic CV lives in `public/cv.pdf`. The industry AI research CV lives at `public/cv-industry.pdf`; it is accessible by direct URL but is not linked from the website's pages or navigation. This is an unlisted public file, not an access-controlled document.

Both are compiled from the existing Overleaf project by the hourly and push-triggered deployment workflow. `main.tex` contains the academic narrative, `industry.tex` contains the industry narrative, and `cv-shared.tex` holds common facts, education, employment dates, skills, layout and publication records. Update shared details once in Overleaf to keep both versions consistent.
