---
name: portfolio-sync
description: >-
  Refresh the portfolio's synced data: GitHub repos/READMEs, LinkedIn profile
  (experience, education, certifications) and Cursor/AI usage stats. Use when
  the user says sync, refresh GitHub, update from LinkedIn, new LinkedIn export,
  update Cursor stats, tokens, agents, or longest-running agent.
---

# Portfolio Sync

## Quick start

1. If context is cold, run [portfolio-init](../portfolio-init/SKILL.md) and read [CURSOR.md/memory.md](../../../CURSOR.md/memory.md).
2. Pick the source below. Each one writes a single data file; components read it automatically.
3. After syncing, run `npm run build` and check the section in the browser (see [portfolio-dev](../portfolio-dev/SKILL.md)).
4. Update [CURSOR.md/memory.md](../../../CURSOR.md/memory.md) with a tagged session-log entry (`[Cursor]` or `[Claude]`).

## GitHub → `src/data/github.json` (automatic)

- CI runs `npm run sync:github` before every deploy, and the deploy workflow also runs weekly (Mondays 06:00 UTC) and on manual dispatch.
- Manual refresh: `npm run sync:github`, then commit `src/data/github.json`.
- The script keeps the old snapshot if the API fails; read its console output to confirm `wrote N repos`.
- Never hand-edit `github.json`. To change how a repo appears, edit its README or GitHub description.

## LinkedIn → `src/data/profile.js` (manual)

LinkedIn has no public profile API and blocks signed-out reads. Do not scrape it.

1. Ask the user for a LinkedIn "Save to PDF" export (Profile → More → Save to PDF), or pasted text.
2. Copy into `profile.js` only what the export states: `experience`, `education`, `certifications`. Keep dates in the export's format.
3. Set `asOf` to the export date (`YYYY-MM-DD`).
4. Do not commit the PDF itself.
5. The Experience section and nav item appear automatically once `experience` or `education` is non-empty. Certifications also show in the Learning Journey.

## Cursor stats → `src/data/aiStats.js` (manual)

1. Ask the user for the numbers or a screenshot of their Cursor profile/stats page (tokens, agents, longest-running agent).
2. Fill `cursor.tokens`, `cursor.agents`, `cursor.longestRunningAgent`. Numbers are compacted on screen (1284 → 1.3K); strings show as-is.
3. Set `cursor.asOf`. The "as of" line and profile link only show once `asOf` is set.

## Hard constraints

- Never invent values. Missing value → leave `null` / empty; the tile or section stays hidden.
- Never store credentials or tokens in data files or client code.
- Keep the `/data-portfolio/` prefix for any image paths.

## Verify

- [ ] `npm run build` succeeds
- [ ] Updated section shows the new values on the cream-light site
- [ ] No placeholder text or `null` rendered on the page
