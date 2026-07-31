# Getting started

## Prerequisites

- Node.js 16+
- npm (or yarn)

## Install and run

```bash
npm install
npm run dev
```

Open: http://localhost:5173/data-portfolio/

## Common commands

```bash
npm run dev       # Vite dev server
npm run build     # Production build → dist/
npm run preview   # Preview production build
npm install <pkg> # Add dependency
npm update        # Update dependencies
```

## Notes for agents

- Prefer `npm run dev` for iterative UI work.
- After content-only edits, verify the Projects/Contact sections in the browser.
- Do not change `base` in `vite.config.js` unless deployment path changes.
