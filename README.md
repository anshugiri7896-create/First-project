
# DevPath — Web & App Development Roadmap

A complete, structured roadmap website for Web and App Development built as a **Computer Engineering College Project**. Covers Frontend, Backend, Database, DevOps, Mobile Development, Tools, Projects, and Resources — all in one place.

---

## 🌐 Live Preview

Open `index.html` in any browser. No server or installation required.

---

## 📁 Project Structure

```
DevPath-v2/
│
├── index.html              # Home page
│
├── css/
│   └── style.css           # All styles (variables, layout, animations)
│
├── js/
│   └── main.js             # All JavaScript (cursor, scroll, tabs, filters)
│
├── pages/
│   ├── frontend.html       # Frontend Development roadmap
│   ├── backend.html        # Backend Development roadmap
│   ├── database.html       # Database & SQL roadmap
│   ├── devops.html         # DevOps & Cloud roadmap
│   ├── mobile.html         # Mobile Development roadmap
│   ├── tools.html          # Tools & IDEs guide
│   ├── projects.html       # Project Ideas (12+ projects)
│   └── resources.html      # Free Resources & Links
│
├── README.md               # Project documentation (this file)
└── LICENSE                 # MIT License
```

---

## 🚀 Features

- **9 Pages** — Home + 8 topic pages fully linked
- **Custom Cursor** — Animated dot + ring that follows mouse
- **Particle Canvas** — Interactive floating particles on home page
- **Scroll Reveal** — Elements animate in as you scroll down
- **Progress Bars** — Skill coverage bars animate on view
- **Tab System** — Click tabs to switch content (Frontend page)
- **Filter Buttons** — Filter tools and projects by category
- **Search** — Live search on Resources page
- **Marquee** — Infinite scrolling tech stack ticker
- **Counter Animation** — Stats count up when visible
- **Scroll Progress Bar** — Top bar shows reading progress
- **Responsive** — Works on mobile, tablet, and desktop
- **Copy Code** — Copy button on all code blocks

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Page structure and content |
| CSS3 | Styling, animations, layout (Flexbox + Grid) |
| Vanilla JavaScript | All interactions and animations |
| Google Fonts | Syne, JetBrains Mono, Inter |
| Canvas API | Particle animation on home page |
| IntersectionObserver API | Scroll-triggered animations |

> **No frameworks. No libraries. No build tools. Pure HTML, CSS, JavaScript.**

---

## 📄 Pages Overview

### `index.html` — Home
- Hero section with animated background grid and particles
- Animated stats counter (8+ paths, 120+ topics, etc.)
- Marquee ticker with tech stack names
- 6-item feature grid
- 8 path cards linking to all pages
- Call-to-action section

### `pages/frontend.html` — Frontend Development
- Skill coverage progress bars
- 5-tab system: Foundations, JavaScript, Frameworks, Build Tools, Advanced
- Step-by-step topic cards with difficulty badges
- CSS code example with syntax highlighting

### `pages/backend.html` — Backend Development
- Request lifecycle diagram (Client → Server → Database)
- 6 roadmap cards with tech tags
- API architecture comparison (REST vs GraphQL vs gRPC)
- Skill coverage progress bars

### `pages/database.html` — Database & SQL
- SQL vs NoSQL comparison cards
- PostgreSQL code demo with syntax highlighting
- Normalisation steps (1NF, 2NF, 3NF)
- Skill coverage progress bars

### `pages/devops.html` — DevOps & Cloud
- CI/CD pipeline visual (Code → Build → Test → Docker → Deploy → Monitor)
- Dockerfile code example
- Cloud platform comparison (AWS, Azure, GCP)
- Skill coverage progress bars

### `pages/mobile.html` — Mobile Development
- Framework comparison (React Native, Flutter, Native)
- 4-step learning timeline with animation
- Skill coverage progress bars

### `pages/tools.html` — Tools & IDEs
- Filterable tool grid (All, Editors, VCS, API Testing, Design, Terminal)
- 12 tool cards
- Essential Git commands cheatsheet

### `pages/projects.html` — Project Ideas
- Filterable project grid (All, Web App, API/Backend, Mobile, Full Stack)
- 12 project ideas from Beginner to Advanced
- Each card shows difficulty badge and tech stack

### `pages/resources.html` — Resources & Links
- Live search to filter all resources
- Free Courses section (6 links)
- Official Documentation section (6 links)
- YouTube Channels section (4 links)
- Practice Platforms section (4 links)

---

## ⚙️ How to Run

1. Download or clone this project
2. Extract the ZIP file
3. Open `index.html` in any modern browser (Chrome, Firefox, Edge)
4. All pages link to each other — no setup needed

```bash
# If you want a local server (optional)
cd DevPath-v2
python3 -m http.server 3000
# then open http://localhost:3000
```

---

## 🎨 Design

- **Color Theme** — Dark background (`#04080f`) with cyan (`#00e5ff`) and green (`#00ff88`) accents
- **Fonts** — Syne (headings), Inter (body text), JetBrains Mono (code and labels)
- **Layout** — CSS Grid and Flexbox throughout
- **Animations** — CSS keyframes + IntersectionObserver + Canvas API

---

## 📝 License

This project is open source under the [MIT License](LICENSE).

---

## 👤 Author

Built from scratch as a Computer Engineering college project.

**Subject:** Web Technology / Web Development  
**Type:** Static Website (HTML + CSS + JavaScript)  
**Pages:** 9 pages  
**Year:** 2024
