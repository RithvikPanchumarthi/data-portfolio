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
  - `portfolio-sync` — GitHub / LinkedIn / Cursor stats data
- **Commands**: `npm run dev` (http://localhost:5173/data-portfolio/), `npm run build`, `npm run preview`.
- **Ports**: terminal `npm run dev` uses Vite's default 5173 and falls forward (5174…) if taken, so read the "Local:" line. The Claude desktop preview (`.claude/launch.json`, config `portfolio-dev`) is pinned to **5180** with `--strictPort` so it never collides with a sibling clone. Always keep the `/data-portfolio/` base.
- **Verifying UI**: no Playwright in the repo. Headless Chrome (`/Applications/Google Chrome.app`) works for screenshots, but `--window-size` won't go below ~500 px, so for a true 390 px mobile check use a 390 px iframe or `playwright-core` installed in the scratchpad with `executablePath` set to Chrome. Don't add either to `package.json`.
- **index.html asset links**: use `/favicon.svg`-style root paths (Vite adds the base). Never `%BASE_URL%` — it double-prefixes in dev.
- **Deploy**: pushing to `main` deploys via `.github/workflows/deploy.yml`. Don't run `npm run deploy` or push unless asked.
