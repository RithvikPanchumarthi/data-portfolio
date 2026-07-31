# Deployment

## Production build

```bash
npm run build
```

Output: `dist/` (assets under `dist/assets/`).

## GitHub Pages

Configured via `gh-pages` and Vite `base: '/data-portfolio/'`.

```bash
npm run deploy
```

`predeploy` runs `npm run build` automatically.

Live: https://rithvikpanchumarthi.github.io/data-portfolio/

## Netlify

See `netlify.toml`. Typical settings:

- Build command: `npm run build`
- Publish directory: `dist`

Deploy on git push after connecting the GitHub repo.

## Agent checklist before deploy

- [ ] `npm run build` succeeds
- [ ] Image paths use `/data-portfolio/...`
- [ ] Contact / Formspree still work if contact UI changed
- [ ] No accidental `base` path change
