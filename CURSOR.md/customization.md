# Customization

## Add or edit projects

Edit `src/data/projects.js`:

```javascript
{
  id: 7,
  title: "Your New Project",
  description: "Project description...",
  technologies: ["React", "Node.js", "MongoDB"],
  github: "https://github.com/username/repo",
  demo: "https://optional-demo-url.example", // optional
  image: "/data-portfolio/your-project.jpg",
  featured: false
}
```

Rules:

- Use the next unused numeric `id`.
- Image paths must include the `/data-portfolio/` prefix (matches Vite `base`).
- Put image files in `public/` (served at `/data-portfolio/<filename>`).
- `featured: true` surfaces the project as featured in the UI.
- Keep descriptions concrete: stack, what was built, outcome when possible.

- `image` is optional. Missing or broken images show a cream monogram plate, so never point `image` at a file that isn't in `public/`.
- Featured projects render as editorial image+text rows; others as hairline list rows. Full text shows in the Details modal.

## Synced data (see the `portfolio-sync` skill)

| Section | Data file | How it updates |
| --- | --- | --- |
| Recent GitHub Activity | `src/data/github.json` | Automatic: `npm run sync:github` runs in CI before each deploy and weekly |
| Experience | `src/data/profile.js` | Manual, from a LinkedIn "Save to PDF" export |
| Building with AI | `src/data/aiStats.js` | Manual, from the Cursor stats page |
| Learning Journey | `src/data/learning.js` (+ certifications from `profile.js`) | Manual, curated |

Never invent values: a `null` stat or empty list keeps its tile or section hidden.

## Header identity / hero / about

- Site identity lives in `src/components/Header.jsx` (`IDENTITY`): “Rithvik Panchumarthi | Agentic Data Engineer”. That control is the page H1 and scrolls to `#hero`. Do not restore a giant name H1 in Hero.
- Hero (`src/components/Hero.jsx`): LinkedIn `profile.headline`, Minneapolis, Resume & Links, then Building with AI (`BuilderStats`). No portrait.
- About (`src/components/About.jsx`) is text + skills. Project screenshots belong in `Projects.jsx` only.
- The data-oil quote is sticky in the header, not the Contact footer.
- Nav is the `sections` list in `src/App.jsx` (no AI Builder item).

## Contact information

Update details in:

- `src/components/Contact.jsx`
- `src/components/Header.jsx`

## Colors / type

The site is **cream-light editorial**. Tokens live in `src/index.css` (`:root` HSL variables) and are mapped in `tailwind.config.js` (`background`, `foreground`, `muted`, `accent`, `border`, plus `font-display` / `font-body`).

- Page: warm cream; type: charcoal; accent: pale Power BI yellow
- Display: Bebas Neue (`font-display`)
- Body: Inter
- No `ThemeToggle` / `themeConfig`. Do not reintroduce a dual light/dark toggle unless the user asks.

## Responsive breakpoints

- Mobile: 320px – 767px
- Tablet: 768px – 1023px
- Desktop: 1024px+
