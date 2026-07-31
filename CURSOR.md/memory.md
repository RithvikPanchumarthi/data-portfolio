# Project memory

Durable context for Cursor agents. **Read this at session start. Update it after meaningful work.** Prefer facts written here over chat memory or guesses.

Last updated: 2026-07-30

## Ground truth (do not invent)

| Fact | Value |
| --- | --- |
| Project | `data-portfolio` — React + Vite + Tailwind portfolio |
| Owner | Rithvik Panchumarthi |
| Live site | https://rithvikpanchumarthi.github.io/data-portfolio/ |
| Vite base | `/data-portfolio/` |
| Local URL | http://localhost:5173/data-portfolio/ |
| Project data | `src/data/projects.js` |
| Contact UI | `src/components/Contact.jsx`, `src/components/Header.jsx` |
| Deploy | GitHub Pages via `npm run deploy`; Netlify via `netlify.toml` |
| Docs hub | `CURSOR.md/` |
| Skills | `.cursor/skills/portfolio-init`, `portfolio-dev`, `portfolio-content` |

## Current workspace state

- Local Vite server has been started successfully at `/data-portfolio/`.
- `CURSOR.md/` docs exist (overview, getting-started, structure, customization, deployment).
- Project skills exist: `portfolio-dev`, `portfolio-content`.
- Init skill + always-apply rule wired for context refresh.

## Session log (newest first)

### 2026-07-30 — Init + memory unit

- Added `portfolio-init` skill for cold-start context refresh.
- Added always-apply rule `.cursor/rules/portfolio-memory.mdc`.
- Added root `AGENTS.md` entrypoint.
- Wired `portfolio-dev` / `portfolio-content` to read/update this memory file.

### 2026-07-30 — Cursor-friendly scaffolding

- Previewed portfolio on local Vite (`npm install` + `npm run dev`).
- Created `CURSOR.md/` docs split from README.
- Added project skills: `portfolio-dev`, `portfolio-content`.

## Open next steps

- Continue feature/content work using `portfolio-dev` or `portfolio-content` as appropriate.
- After each meaningful change: append a short Session log entry and refresh Ground truth / Current workspace state if needed.

## Anti-hallucination rules

1. If a fact is not in this file, `CURSOR.md/`, or the repo source — verify in code before stating it.
2. Never invent project IDs, image paths, Formspree IDs, analytics IDs, or deploy URLs.
3. Image paths must use `/data-portfolio/` prefix.
4. Do not change Vite `base` unless the user explicitly requests a hosting path change.
5. When unsure, read the file — do not fabricate from README-like memory.

## How agents update this file

After completing a task that changes project behavior, structure, or decisions:

1. Bump `Last updated`.
2. Patch **Ground truth** / **Current workspace state** if facts changed.
3. Prepend a dated bullet under **Session log**.
4. Move finished items out of **Open next steps**; add new ones if work remains.
5. Keep entries short and factual — no speculative “probably” notes.
