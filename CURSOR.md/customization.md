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

## Responsive breakpoints

- Mobile: 320px – 767px
- Tablet: 768px – 1023px
- Desktop: 1024px+
