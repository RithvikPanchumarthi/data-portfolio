# Deployment

## Production build

```bash
npm run build
```

Output: `dist/` (assets under `dist/assets/`).

## GitHub Pages

Primary path: `.github/workflows/deploy.yml` deploys on every push to `main`, weekly (Mondays 06:00 UTC) and on manual dispatch. It runs `npm run sync:github` before `npm run build`, so the GitHub section refreshes on each deploy.

Manual fallback: `gh-pages` with Vite `base: '/data-portfolio/'`.

```bash
npm run deploy
```

`predeploy` runs `npm run build` automatically.

Live: https://rithvikpanchumarthi.github.io/data-portfolio/

## Netlify (not active)

No Netlify site deploys this repo (checked 2026-11-18: every GitHub deployment is `github-pages`, and there are no Netlify commit statuses). `netlify.toml` is kept as an unused fallback. If it is ever connected, note that Vite `base` is `/data-portfolio/`, so a Netlify site served at the root would 404 on assets unless the base is overridden. Typical settings:

- Build command: `npm run build`
- Publish directory: `dist`

Deploy on git push after connecting the GitHub repo.

## Agent checklist before deploy

- [ ] `npm run build` succeeds
- [ ] Image paths use `/data-portfolio/...`
- [ ] Contact / Formspree still work if contact UI changed
- [ ] No accidental `base` path change
