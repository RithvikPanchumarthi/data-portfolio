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

- `image` is optional. Missing or broken images show a gradient fallback tile, so never point `image` at a file that isn't in `public/`.
- Long descriptions are clamped on the card; the full text shows in the Details modal.

## Synced data (see the `portfolio-sync` skill)

| Section | Data file | How it updates |
| --- | --- | --- |
| Recent GitHub Activity | `src/data/github.json` | Automatic: `npm run sync:github` runs in CI before each deploy and weekly |
| Experience | `src/data/profile.js` | Manual, from a LinkedIn "Save to PDF" export |
| Building with AI | `src/data/aiStats.js` | Manual, from the Cursor stats page |
| Learning Journey | `src/data/learning.js` (+ certifications from `profile.js`) | Manual, curated |

Never invent values: a `null` stat or empty list keeps its tile or section hidden.

## Contact information

Update details in:

- `src/components/Contact.jsx`
- `src/components/Header.jsx`

## Colors

Primary palette lives in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  }
}
```

Theme toggle / dark-mode helpers: `src/utils/themeConfig.js`, `src/components/ThemeToggle.jsx`.
Components read the current theme with `useTheme()` (`src/hooks/useTheme.js`) and style via `getThemeClass(theme, key)`.

## Responsive breakpoints

- Mobile: 320px – 767px
- Tablet: 768px – 1023px
- Desktop: 1024px+
