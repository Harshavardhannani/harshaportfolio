# Harsha Vardhan Bethi — Portfolio

A modern, interactive portfolio built with **React + Vite**.

## Tech Stack
- React 18
- Vite 5
- CSS Modules
- Google Fonts (Syne + DM Sans)

## Project Structure

```
src/
├── components/
│   ├── Cursor.jsx        Custom animated cursor
│   ├── Navbar.jsx        Sticky nav with active section tracking
│   ├── Hero.jsx          Landing hero with avatar
│   ├── Skills.jsx        Animated skill bars
│   ├── Experience.jsx    Timeline of internships
│   ├── Projects.jsx      Project cards
│   ├── Education.jsx     Education + certifications
│   ├── Contact.jsx       Contact details
│   └── Footer.jsx
├── styles/
│   └── global.css        Design tokens & base styles
├── data.js               All portfolio content (edit here!)
├── App.jsx
└── main.jsx
```

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

### Netlify (Recommended — easiest)
1. Push this folder to a GitHub repo
2. Go to https://netlify.com → "Add new site" → "Import from Git"
3. Select your repo — build settings are auto-detected from `netlify.toml`
4. Click **Deploy** — live in ~1 minute!

### Vercel
1. Push to GitHub
2. Go to https://vercel.com → "Add New Project"
3. Import repo → Framework: **Vite** → Deploy

### Manual (GitHub Pages)
```bash
npm run build
# Upload the `dist/` folder to GitHub Pages or any static host
```

## Customizing
All content lives in `src/data.js` — update your details, skills, projects, etc. there.
