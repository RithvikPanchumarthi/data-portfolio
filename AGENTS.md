# Agents

Portfolio project guidance for Cursor (local and cloud).

## Session start

1. Read [`CURSOR.md/memory.md`](CURSOR.md/memory.md) first.
2. On **init** / context refresh, use skill `portfolio-init`.
3. Then pick:
   - `portfolio-dev` — run, build, preview, deploy
   - `portfolio-content` — projects, contact, copy, theme

## Source of truth

| Need | Location |
| --- | --- |
| What happened / decisions | `CURSOR.md/memory.md` |
| How to run | `CURSOR.md/getting-started.md` |
| Where files live | `CURSOR.md/project-structure.md` |
| Content edits | `CURSOR.md/customization.md` |
| Deploy | `CURSOR.md/deployment.md` |

## Non-negotiables

- Vite base path: `/data-portfolio/`
- Do not hallucinate facts missing from memory or source — verify in the repo
- Update `CURSOR.md/memory.md` after meaningful work
