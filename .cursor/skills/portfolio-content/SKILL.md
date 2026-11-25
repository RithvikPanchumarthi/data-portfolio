---
name: portfolio-content
description: >-
  Add or update portfolio projects, contact details, hero/about copy, colors,
  and theme settings. Use when the user asks to edit portfolioData.js, add a project
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

1. Open `portfolioData.projects` in `src/data/portfolioData.js`.
2. Add or update an entry with: `id`, `title`, `description`, `technologies`, `github`, optional `demo`, `image`, `featured`.
3. Place new images in `public/` and set `image` to `/data-portfolio/<filename>`.
4. Use the next unused numeric `id`.
5. Keep descriptions concrete (what, stack, outcome).

### Update contact / social

Edit both when relevant:

- `src/components/Contact.jsx`
- `portfolioData.site.header.socialLinks` (feeds the hero's social links)

### Update header / hero / about copy

- **Hero is the Elias author hero.** Copy lives in `portfolioData.site.eliasHero`; see `CURSOR.md/customization.md` (Hero / about) for the name scale, portrait and letter. Its giant name is the page's only H1.
- Building with AI stats (`BuilderStats` / `portfolioData.aiStats`) render in their own section after the hero.
- About: text + skills from `portfolioData.site.about` only. **No project screenshot plates** — Tableau / COVID / Power BI images stay in `Projects.jsx`. The unverified 30% / 25% pull quote stays removed.
- The data-oil quote (`site.header.quote`) is the hero intro description. Do not re-add it to the Contact footer.
- Nav is the Elias navbar (`eliasHero.navLinks`). There is no sticky header and no AI Builder nav item.

### Colors / type

- Palette: `src/index.css` HSL tokens, mapped in `tailwind.config.js`
- Cream-light editorial theme (warm cream page, charcoal type, pale yellow accent; Bebas Neue + Inter). No `ThemeToggle` / light-dark switch today (a toggle is planned in `.cursor/rules/portfolio-memory.mdc`; do not build it unless asked).

## Hard constraints

- Image and public asset URLs must include `/data-portfolio/`.
- Do not invent new project schema fields unless the UI already consumes them (`Projects.jsx`).
- Prefer data edits in `portfolioData.js` over hardcoding project cards or section copy in components.
- Preserve Formspree / analytics integrations unless the user asks to change them.

## Verify

- [ ] Project appears in the Projects section
- [ ] Featured flag behaves as expected
- [ ] Links open correctly
- [ ] Desktop and mobile layout still read cleanly
