# Priya Sah — Personal Portfolio (Vite + React + Tailwind)

This is a modern, responsive portfolio starter built with React, Vite and Tailwind CSS. It contains accessible semantic markup, a sticky navbar, smooth scrolling, and modular components for easy customization.

## What’s included
- `src/components` — Navbar, Hero, About, Skills, Projects, Education, Certifications, Extracurriculars, Contact, Footer
- `public/resume.pdf` — resume placeholder (replace with your real PDF)
- Tailwind CSS configured with PostCSS

## Install & Run
Use PowerShell (Windows):

```powershell
cd "C:\Users\91639\OneDrive\Documents\document\Priya\Portfolio"
npm install
npm run dev
```

Open `http://localhost:5173`

## Build

```powershell
npm run build
npm run preview
```

## Notes & TODOs
- Replace `public/resume.pdf` with your real resume.
- Add GitHub links for projects and demo screenshots under `src/components/Projects.jsx`.
- Hook contact form to an API (Formspree / Netlify / custom server).

## Accessibility & SEO
- Semantic heading hierarchy and landmark sections are used.
- Focus ring helper included in `src/index.css`.
- Meta tags present in `index.html` for basic SEO and Open Graph.
