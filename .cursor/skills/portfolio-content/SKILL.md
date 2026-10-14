---
name: portfolio-content
description: >-
  Add or update portfolio projects, contact details, hero/about copy, colors,
  and theme settings. Use when the user asks to edit projects.js, add a project
  card, change featured projects, update email/LinkedIn/GitHub links, tweak
  Tailwind primary colors, or customize portfolio content.
---

# Portfolio Content

## Quick start

1. If context is cold, run [portfolio-init](../portfolio-init/SKILL.md) and read [CURSOR.md/memory.md](../../../CURSOR.md/memory.md).
2. Read [CURSOR.md/customization.md](../../../CURSOR.md/customization.md).
3. Confirm edit targets in [CURSOR.md/project-structure.md](../../../CURSOR.md/project-structure.md).
4. For product context, skim [CURSOR.md/overview.md](../../../CURSOR.md/overview.md).
5. After meaningful work, update [CURSOR.md/memory.md](../../../CURSOR.md/memory.md).

## Workflows

### Add / edit a project

1. Open `src/data/projects.js`.
2. Add or update an entry with: `id`, `title`, `description`, `technologies`, `github`, optional `demo`, `image`, `featured`.
3. Place new images in `public/` and set `image` to `/data-portfolio/<filename>`.
4. Use the next unused numeric `id`.
5. Keep descriptions concrete (what, stack, outcome).

### Update contact / social

Edit both when relevant:

- `src/components/Contact.jsx`
- `src/components/Header.jsx`

### Update header / hero / about copy

- **Identity lives in the header**, not the hero. Edit `IDENTITY` in `src/components/Header.jsx` (currently “Rithvik Panchumarthi | Agentic Data Engineer”). That button is the site H1 and scrolls to `#hero`. Do not put a giant name H1 back in Hero.
- Hero (`src/components/Hero.jsx`): LinkedIn `profile.headline`, Minneapolis, Resume & Links, then Building with AI stats (`BuilderStats` / `aiStats.js`). No portrait.
- About (`src/components/About.jsx`): text + skills only. **No project screenshot plates** — Tableau / COVID / Power BI images stay in `Projects.jsx`.
- Sticky data-oil quote lives in `Header.jsx`. Do not re-add it to the Contact footer.
- Nav comes from `sections` in `src/App.jsx`. There is no AI Builder nav item.

### Colors / type

- Palette: `src/index.css` HSL tokens, mapped in `tailwind.config.js`
- Cream-light editorial theme (warm cream page, charcoal type, pale yellow accent; Bebas Neue + Inter). No `ThemeToggle` / light-dark switch.

## Hard constraints

- Image and public asset URLs must include `/data-portfolio/`.
- Do not invent new project schema fields unless the UI already consumes them (`Projects.jsx`).
- Prefer data edits in `projects.js` over hardcoding project cards in components.
- Preserve Formspree / analytics integrations unless the user asks to change them.

## Verify

- [ ] Project appears in the Projects section
- [ ] Featured flag behaves as expected
- [ ] Links open correctly
- [ ] Desktop and mobile layout still read cleanly
