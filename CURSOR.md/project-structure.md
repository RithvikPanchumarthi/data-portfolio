# Project structure

```
data-portfolio/
├── CURSOR.md/               # Cursor agent docs
├── .cursor/skills/          # Project skills
├── public/                  # Static assets (also copied under base path)
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── ThemeToggle.jsx
│   ├── data/
│   │   └── projects.js      # Project cards data
│   ├── utils/
│   │   └── themeConfig.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
└── netlify.toml
```

## Where to edit

| Change | File(s) |
| --- | --- |
| Project cards | `src/data/projects.js` |
| Contact / social | `src/components/Contact.jsx`, `src/components/Header.jsx` |
| Hero copy | `src/components/Hero.jsx` |
| About | `src/components/About.jsx` |
| Colors / theme | `tailwind.config.js`, `src/utils/themeConfig.js` |
| Deploy base path | `vite.config.js` |
