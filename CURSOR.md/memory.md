# Project memory

Durable context for Cursor agents. **Read this at session start. Update it after meaningful work.** Prefer facts written here over chat memory or guesses.

Last updated: 2026-10-05

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
| Claude Code | `CLAUDE.md` (imports `AGENTS.md` + this file); `.claude/skills/*` symlink to `.cursor/skills/*`; `.claude/settings.json` |
| Roadmap | `CURSOR.md/roadmap.md` — phased plan for GitHub activity feed, LinkedIn badge, project re-prioritization |

## Current workspace state

- Local Vite server has been started successfully at `/data-portfolio/`.
- `CURSOR.md/` docs exist (overview, getting-started, structure, customization, deployment).
- Project skills exist: `portfolio-dev`, `portfolio-content`.
- Init skill + always-apply rule wired for context refresh.

## Session log (newest first)

### 2026-10-05 — [Claude] Claude Code scaffolding

- Added root `CLAUDE.md` (imports `AGENTS.md` and this file, plus Claude-specific notes).
- Added `.claude/skills/{portfolio-init,portfolio-dev,portfolio-content}` as relative symlinks to `.cursor/skills/` — one shared copy for both tools.
- Added `.claude/settings.json` (allow npm dev/build/preview/install and read-only git; ask before `npm run deploy` / `git push`).
- `.gitignore`: added `.claude/settings.local.json`, `.claude/worktrees/`.
- Additive mentions of Claude Code in `AGENTS.md` and `CURSOR.md/README.md`. No `.cursor/` files changed; no site source changed.

### 2026-07-31 — Added Snowflake project card

- Added project id 7 to `src/data/projects.js`: "Snowflake Cloud Data Warehouse & Governance", sourced from `https://github.com/RithvikPanchumarthi/Snowflake` (Tasty Bytes Zero-to-Snowflake quickstart — multi-schema warehouse, RBAC role hierarchy, data masking, resource monitors/financial governance). `featured: true`.
- Image path set to `/data-portfolio/Snowflake.png` but the file does not yet exist in `public/` — needs to be added before the card renders correctly (see Open next steps).
- Started local dev server via `portfolio-dev` (`npm install` + `npm run dev`); running at `http://localhost:5174/data-portfolio/` (port 5173 was already occupied).

### 2026-07-31 — Long-term roadmap doc

- Added `CURSOR.md/roadmap.md`: phased long-term plan to (1) re-prioritize `projects.js` featured/order toward core data engineering work without deleting any project, (2) add a live "Recent GitHub Activity" component (`src/components/GitHubActivity.jsx`, spec only) pulling from the public GitHub REST API so the site reflects pushes with no manual edits, (3) add a static LinkedIn follow badge (no API/sync), (4) document the low-maintenance cadence.
- Linked `roadmap.md` from `CURSOR.md/README.md` doc index.
- No component code was changed in this session — Phases 2–4 in the roadmap remain unimplemented specs for a future session.

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

- Add `public/Snowflake.png` (referenced by project id 7) — no thematically-fitting image exists in the repo yet, so the new Snowflake card currently shows a broken image until one is added.
- Execute roadmap Phase 1: re-rank `featured` flags / order in `src/data/projects.js` toward pipeline/cloud/orchestration work (see `CURSOR.md/roadmap.md`).
- Execute roadmap Phase 2: build `src/components/GitHubActivity.jsx` (live GitHub API feed) and mount it in `src/App.jsx`.
- Execute roadmap Phase 3: add a static LinkedIn follow badge (no API sync).
- Plan Claude-specific workflows once feature goals are set.
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
3. Prepend a dated bullet under **Session log**, tagged with the tool used: `[Cursor]` or `[Claude]`.
4. Move finished items out of **Open next steps**; add new ones if work remains.
5. Keep entries short and factual — no speculative “probably” notes.
