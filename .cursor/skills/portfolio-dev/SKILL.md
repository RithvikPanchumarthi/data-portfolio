---
name: portfolio-dev
description: >-
  Run, build, preview, and deploy the React/Vite/Tailwind data portfolio.
  Use when starting the local server, fixing Vite base-path issues, building
  for production, deploying to GitHub Pages or Netlify, or when the user
  mentions npm run dev, preview, deploy, or local development setup.
---

# Portfolio Dev

## Quick start

1. If context is cold, run [portfolio-init](../portfolio-init/SKILL.md) and read [CURSOR.md/memory.md](../../../CURSOR.md/memory.md).
2. Read [CURSOR.md/getting-started.md](../../../CURSOR.md/getting-started.md).
3. For deploy paths, also read [CURSOR.md/deployment.md](../../../CURSOR.md/deployment.md).
4. For layout of source files, use [CURSOR.md/project-structure.md](../../../CURSOR.md/project-structure.md).
5. After meaningful work, update [CURSOR.md/memory.md](../../../CURSOR.md/memory.md).

## Workflow

```
Task Progress:
- [ ] Confirm Node/npm available
- [ ] npm install (if node_modules missing)
- [ ] npm run dev
- [ ] Open http://localhost:5173/data-portfolio/
- [ ] For ship: npm run build, then deploy path as requested
```

### Local development

```bash
npm install
npm run dev
```

Local URL includes the Vite base path: `/data-portfolio/`.

### Build and preview

```bash
npm run build
npm run preview
```

### Deploy

- GitHub Pages: `.github/workflows/deploy.yml` on push to `main` (also weekly and manual). There is no `gh-pages` script and no `netlify.toml`.

## Hard constraints

- Do not change `base: '/data-portfolio/'` in `vite.config.js` unless the user explicitly changes hosting path.
- In `index.html`, reference `public/` files with a plain root path (`href="/favicon.svg"`); Vite adds the base itself. Do not use `%BASE_URL%` there (Vite 4 dev applies the base twice and 404s). Paths written in JS/JSX data still need the `/data-portfolio/` prefix.
- Prefer existing scripts in `package.json`; do not invent alternate tooling.
- Keep changes scoped to the requested task (dev server vs build vs deploy).

## When stuck

- Blank page locally → check URL includes `/data-portfolio/`
- Broken images after deploy → paths must start with `/data-portfolio/`
- 404s in the console only in dev → check `index.html` asset hrefs (see constraints above)
- Build failures → run `npm run build` and fix reported errors only
