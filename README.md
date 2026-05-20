# Rohit Chakrawarti — Portfolio

Modern animated React.js portfolio with particle background, framer-motion animations, and scroll-triggered reveals.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm start

# 3. Build for production
npm run build
```

## 📦 Libraries Used

| Library | Purpose |
|---|---|
| `framer-motion` | Smooth animations & hover effects |
| `react-intersection-observer` | Scroll-triggered card reveals |
| `react-type-animation` | Typing effect in hero |
| `react-scroll` | Smooth nav scroll |
| `react-icons` | Icon library |

## 🌐 Deploy on Vercel (Free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts → your site will be live at rohit-portfolio.vercel.app
```

## 📁 Project Structure

```
src/
├── App.js              # Root + Particle Canvas
├── index.js            # Entry point
├── index.css           # Global styles + CSS variables
└── components/
    ├── Navbar.js       # Fixed nav with scroll effect
    ├── Hero.js         # Hero section with type animation
    ├── Marquee.js      # Scrolling tech marquee
    ├── Skills.js       # Skills grid with cards
    ├── Experience.js   # Work experience timeline
    ├── Projects.js     # Projects showcase grid
    ├── Contact.js      # Contact links + info cards
    └── Footer.js       # Footer
```

## ✏️ Customization

- Update personal info in each component
- Change colors in `src/index.css` → `:root` variables
- Add/remove projects in `Projects.js` → `projects` array
- Add/remove experience in `Experience.js` → `expData` array
