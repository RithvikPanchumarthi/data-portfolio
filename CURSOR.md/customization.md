# Customization

## Add or edit projects

Edit `portfolioData.projects` in `src/data/portfolioData.js`:

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

- `image` is optional. Without one, `logos: ["snowflake", ...]` (keys in `src/data/logos.js`) shows brand logos on the plate; with neither, a cream monogram plate. Never point `image` at a file that isn't in `public/`.
- Array order is display order. Keep `featured: true` to about four projects: featured render as editorial image+text rows, the rest as hairline list rows. Full text shows in the Details modal.
- Optional `architecture: { flow: [{ label, note }], controls: [{ label, note }] }` draws a flow diagram in the Details modal (used by Snowflake, id 7). Only restate what the description already says.
- Filter labels and case-insensitive technology patterns live in `portfolioData.site.projects.filters`. `Projects.jsx` turns each `pattern` into a match function.

## Pipelines section

`src/components/PipelineArchitecture.jsx` renders `portfolioData.pipelines` (medallion layers from the Curi role in `portfolioData.profile`). Add a platform or tool there only when it is in `portfolioData.profile` or confirmed by the owner.

## Link previews and favicon

`index.html` holds the title, meta description, canonical URL, Open Graph and Twitter tags. The preview image is `public/og-image.png` (1200×630) and the tab icon is `public/favicon.svg`, linked as `href="/favicon.svg"` (Vite prepends the base; `%BASE_URL%` double-prefixes in dev). Keep the description in step with `profile.headline`.

## Synced data (see the `portfolio-sync` skill)

| Section | Data file | How it updates |
| --- | --- | --- |
| Recent GitHub Activity | `src/data/github.json` | Automatic: `npm run sync:github` runs in CI before each deploy and weekly |
| Experience | `portfolioData.profile` | Manual, from a LinkedIn "Save to PDF" export |
| Building with AI | `portfolioData.aiStats` | Manual, from the Cursor stats page |
| Learning Journey | `portfolioData.learning` (+ dated certifications from `portfolioData.profile`) | Manual, curated |

Never invent values: a `null` stat or empty list keeps its tile or section hidden.

## Hero / about

- The top of the page is the Elias author hero. Edit its copy in `portfolioData.site.eliasHero` (brand, name, `nameScale`, nav links, CTA label, status, intro roles and headline, book covers). The description is `site.header.quote`, the CTA link is `site.hero.resume.href`, the socials are `site.header.socialLinks`, and the books are the featured projects listed in `eliasHero.books`.
- If you change the name, retune `nameScale` (first / last) and check at 1440 and 390 px that neither line is clipped and the first line clears the book card.
- Portrait: save a transparent cut-out cropped at the waist as `public/portrait.webp`, then set `eliasHero.portrait` to `{ "src": "/data-portfolio/portrait.webp", "alt": "Rithvik Panchumarthi", "width": <px>, "height": <px> }`.
- Letter to tomorrow: hidden. To show it, pass a `letter` prop in `src/components/EliasHero.jsx` (fields in `EliasLetter` in the .tsx file) with owner-written text.
- The hero's colors and fonts are its own `--color-ea-*` / `--font-ea-*` tokens in `BLOCK_CSS` inside `src/components/ui/elias-author-hero.tsx`.
- About is text + skills from `portfolioData.site.about`. Skills use `logos` keys (`logos.js`) or a Lucide `icon` key. The unverified 30% / 25% pull quote stays removed. Project screenshots belong in `Projects.jsx` only.
- The data-oil quote is the hero intro description, not the Contact footer.
- Nav is the Elias navbar (`eliasHero.navLinks`); there is no sticky header and no AI Builder item.

## Contact information

Update `portfolioData.site.links`, `portfolioData.site.header`, and `portfolioData.site.contact`. The Formspree endpoint is `portfolioData.site.contact.formspreeUrl`.

## Colors / type

The site is **cream-light editorial**. Tokens live in `src/index.css` (`:root` HSL variables) and are mapped in `tailwind.config.js` (`background`, `foreground`, `muted`, `accent`, `border`, plus `font-display` / `font-body`).

- Page: warm cream; type: charcoal; accent: pale Power BI yellow
- Display: Bebas Neue (`font-display`)
- Body: Inter
- No `ThemeToggle` / `themeConfig` today. A dark-mode toggle (cream-light default) is **planned** in `.cursor/rules/portfolio-memory.mdc`; do not build it unless the owner asks.

## Responsive breakpoints

- Mobile: 320px – 767px
- Tablet: 768px – 1023px
- Desktop: 1024px+
