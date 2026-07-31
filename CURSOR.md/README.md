# CURSOR.md

Cursor-oriented docs for the data portfolio. Agents should read these before changing the site.

## Start here

1. [memory.md](memory.md) — ground truth, session log, open next steps
2. Skill `portfolio-init` — full context refresh after a new chat / context reset
3. Root [AGENTS.md](../AGENTS.md) — short agent entrypoint

| Doc | Use when |
| --- | --- |
| [memory.md](memory.md) | Session start; avoid hallucination; log what happened |
| [overview.md](overview.md) | Need stack, features, live URL |
| [getting-started.md](getting-started.md) | Install, run, preview locally |
| [project-structure.md](project-structure.md) | Finding components or data files |
| [customization.md](customization.md) | Projects, contact, colors, theme |
| [deployment.md](deployment.md) | Build, GitHub Pages, Netlify |

## Project skills

- `.cursor/skills/portfolio-init` — refresh memory + docs at session start
- `.cursor/skills/portfolio-dev` — local/cloud run, build, deploy workflows
- `.cursor/skills/portfolio-content` — content and visual customization

## Always-apply rule

- `.cursor/rules/portfolio-memory.mdc` — read/update memory; prefer docs over guesses
