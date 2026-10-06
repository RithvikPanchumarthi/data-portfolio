# CLAUDE.md

Claude Code entrypoint for the data portfolio. This repo is shared with a Cursor user, so the
project context lives in tool-neutral files and is imported here rather than duplicated.

@AGENTS.md
@CURSOR.md/memory.md

## Claude Code notes

- **Memory protocol** (same as `.cursor/rules/portfolio-memory.mdc`): treat `CURSOR.md/memory.md` as ground truth; if code and memory disagree, trust the code and fix memory. After meaningful work, bump `Last updated`, patch ground truth, prepend a session-log entry, and adjust open next steps.
- **Tag session-log entries** with the tool used: `[Claude]` or `[Cursor]`.
- **Skills** live in `.claude/skills/`, which are symlinks to `.cursor/skills/`. Both tools share the same files — edit either path, never fork a copy.
  - `portfolio-init` — context refresh ("init", "catch me up")
  - `portfolio-dev` — run, build, preview, deploy
  - `portfolio-content` — projects, contact, copy, theme
- **Commands**: `npm run dev` (http://localhost:5173/data-portfolio/), `npm run build`, `npm run preview`.
- **Deploy**: pushing to `main` deploys via `.github/workflows/deploy.yml`. Don't run `npm run deploy` or push unless asked.
