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

### Update hero / about copy

- Hero: `src/components/Hero.jsx`
- About: `src/components/About.jsx`

### Colors / theme

- Palette: `tailwind.config.js` (`primary` scale)
- Theme helpers: `src/utils/themeConfig.js`, `src/components/ThemeToggle.jsx`

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
