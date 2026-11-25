# Agents

Portfolio project guidance for Cursor (local and cloud) and Claude Code.

## Session start

1. Read [`CURSOR.md/memory.md`](CURSOR.md/memory.md) first.
2. On **init** / context refresh, use skill `portfolio-init`.
3. Then pick:
   - `portfolio-dev` — run, build, preview, deploy
   - `portfolio-content` — projects, contact, copy, theme
   - `portfolio-sync` — GitHub / LinkedIn / Cursor stats data

## Source of truth

| Need | Location |
| --- | --- |
| What happened / decisions | `CURSOR.md/memory.md` |
| How to run | `CURSOR.md/getting-started.md` |
| Where files live | `CURSOR.md/project-structure.md` |
| Content edits | `CURSOR.md/customization.md` |
| Deploy | `CURSOR.md/deployment.md` |
| Always-on rules (memory protocol + GrokBot Bridge) | `.cursor/rules/portfolio-memory.mdc` |
| Claude Code entrypoint | `CLAUDE.md` |
| Claude Code skills | `.claude/skills/` (symlinks to `.cursor/skills/`) |

## Non-negotiables

- Vite base path: `/data-portfolio/`
- Top of page is the Elias author hero (its own navbar, giant name H1, orange/ink palette); no sticky Header. The rest of the site stays cream-light editorial — see `CURSOR.md/memory.md`
- Do not hallucinate facts missing from memory or source — verify in the repo
- Update `CURSOR.md/memory.md` after meaningful work
- `src/data/portfolioData.js` is the content module. Items marked **Planned** in `.cursor/rules/portfolio-memory.mdc` (`/docs/contracts` and the other `/docs` lanes, `/tests`, a dark-mode toggle) are not built. Do not create them unless the owner asks.
