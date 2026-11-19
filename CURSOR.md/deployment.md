# Deployment

## Production build

```bash
npm run build
```

Output: `dist/` (assets under `dist/assets/`).

## GitHub Pages

Primary path: `.github/workflows/deploy.yml` deploys on every push to `main`, weekly (Mondays 06:00 UTC) and on manual dispatch. It runs `npm run sync:github` before `npm run build`, so the GitHub section refreshes on each deploy.

There is no `gh-pages` script. `netlify.toml` was removed; no Netlify site deploys this repo.

Live: https://rithvikpanchumarthi.github.io/data-portfolio/

## Agent checklist before deploy

- [ ] `npm run build` succeeds
- [ ] Image paths use `/data-portfolio/...`
- [ ] Contact / Formspree still work if contact UI changed
- [ ] No accidental `base` path change
