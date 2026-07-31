---
name: portfolio-init
description: >-
  Refresh project context from CURSOR.md memory and docs at session start.
  Use when the user says init, refresh context, new chat, catch me up, load
  memory, or when starting work after a context reset to avoid hallucinating
  project state.
---

# Portfolio Init

Bootstrap accurate project context before doing any other work.

## Init checklist

Copy and complete:

```
Init Progress:
- [ ] Read CURSOR.md/memory.md
- [ ] Skim CURSOR.md/README.md index
- [ ] Load skill needed for the task (portfolio-dev or portfolio-content)
- [ ] Confirm Vite base `/data-portfolio/` and local URL
- [ ] Summarize current state + open next steps to the user (3–6 bullets)
- [ ] Only then start the requested task
```

## Read order

1. [CURSOR.md/memory.md](../../../CURSOR.md/memory.md) — ground truth, session log, open steps
2. [CURSOR.md/README.md](../../../CURSOR.md/README.md) — doc index
3. Task-specific skill:
   - Run/build/deploy → `.cursor/skills/portfolio-dev/SKILL.md`
   - Projects/contact/theme → `.cursor/skills/portfolio-content/SKILL.md`
4. Deeper docs only as needed (`getting-started.md`, `customization.md`, etc.)

## Output after init

Give a short refresh summary:

- What this project is (one line)
- Local/live URLs and Vite base
- What was done recently (from Session log)
- Open next steps
- Which skill you will use next

Do **not** invent history missing from `memory.md`.

## After the task

Update [CURSOR.md/memory.md](../../../CURSOR.md/memory.md):

1. Bump `Last updated`
2. Refresh ground truth / workspace state if changed
3. Prepend a Session log entry
4. Adjust Open next steps

## Hard constraints

- Memory file wins over chat recollection.
- If code and memory disagree, trust the code, then fix memory.
- Never fabricate analytics IDs, Formspree endpoints, project entries, or deploy config.
