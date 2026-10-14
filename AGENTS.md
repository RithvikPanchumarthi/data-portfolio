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
| Claude Code entrypoint | `CLAUDE.md` |
| Claude Code skills | `.claude/skills/` (symlinks to `.cursor/skills/`) |

## Non-negotiables

- Vite base path: `/data-portfolio/`
- Cream-light editorial; identity lives in the sticky Header (not a giant Hero H1) — see `CURSOR.md/memory.md`
- Do not hallucinate facts missing from memory or source — verify in the repo
- Update `CURSOR.md/memory.md` after meaningful work
