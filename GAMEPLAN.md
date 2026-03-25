# TheCreatorPros — Full Website Gameplan & Roadmap

## Overview
TheCreatorPros is a premium creator-focused agency that manages and delivers creators, content, and UGC to brands. The website targets high-end clientele and must communicate luxury, exclusivity, and results.

---

## Design Direction

### Aesthetic: Dark Luxury + Editorial
Inspired by top agencies like Viral Nation, Socially Powerful, and Goat Agency, combined with luxury brand aesthetics from Awwwards winners.

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#0A0A0A` | Main background |
| `--bg-secondary` | `#111111` | Card/section backgrounds |
| `--bg-elevated` | `#1A1A1A` | Elevated surfaces |
| `--accent-gold` | `#C9A84C` | Primary accent, CTAs, highlights |
| `--accent-cream` | `#F5F0E8` | Secondary accent, subtle highlights |
| `--text-primary` | `#FFFFFF` | Headings |
| `--text-secondary` | `#A0A0A0` | Body text |
| `--text-muted` | `#666666` | Captions, metadata |
| `--border` | `#222222` | Subtle borders |

### Typography
- **Headings:** `"Playfair Display"` — serif, editorial, luxurious
- **Body:** `"Inter"` — clean, modern, highly readable
- **Accent/Mono:** `"JetBrains Mono"` — stats, metrics, code-like data

### Design Principles
1. **Generous whitespace** — let every element breathe
2. **Large typography** — hero headlines at 5-8rem
3. **Scroll-triggered animations** — subtle fade-ins, parallax
4. **High-contrast sections** — dark/cream alternating blocks
5. **Full-bleed imagery** — portfolio pieces edge to edge
6. **Micro-interactions** — hover states, cursor effects, button animations

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Routing | React Router v6 |
| Icons | Lucide React |
| Fonts | Google Fonts (Playfair Display, Inter) |
| Deployment | Vercel |
| Version Control | GitHub |

---

## Site Architecture (8 Pages)

```
/                   → Home (Hero, Stats, Services Preview, Featured Work, Testimonials, CTA)
/about              → About (Story, Team, Values, Culture)
/services           → Services (Creator Management, UGC, Content Strategy, Paid Amplification)
/portfolio          → Portfolio / Case Studies (Grid, Filterable, Detailed Case Studies)
/creators           → Creator Network (Roster showcase, categories, stats)
/blog               → Blog / Insights (Grid layout, categories)
/pricing            → Pricing (Tiers, comparison, FAQ)
/contact            → Contact (Form, offices, map)
```

---

## Component Architecture

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx          — Fixed transparent nav, scroll-aware
│   │   ├── Footer.jsx          — Full footer with links, newsletter
│   │   └── Layout.jsx          — Wraps pages with nav/footer
│   ├── ui/
│   │   ├── Button.jsx          — Primary/secondary/outline variants
│   │   ├── SectionHeading.jsx  — Reusable section title + subtitle
│   │   ├── Card.jsx            — Generic card with hover effects
│   │   ├── Badge.jsx           — Tag/category badges
│   │   ├── Stats.jsx           — Animated counter stats
│   │   └── Testimonial.jsx     — Quote card with avatar
│   ├── sections/
│   │   ├── Hero.jsx            — Full-screen hero with video/particles
│   │   ├── LogoBar.jsx         — Trusted-by brand logos
│   │   ├── ServicesPreview.jsx  — 4-card services grid
│   │   ├── FeaturedWork.jsx    — Portfolio highlights
│   │   ├── TestimonialsSlider.jsx
│   │   └── CTABanner.jsx       — Full-width call to action
│   └── animations/
│       ├── FadeIn.jsx          — Scroll-triggered fade
│       ├── SlideIn.jsx         — Directional slide animation
│       └── CountUp.jsx         — Number counter animation
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Portfolio.jsx
│   ├── Creators.jsx
│   ├── Blog.jsx
│   ├── Pricing.jsx
│   └── Contact.jsx
├── data/
│   ├── services.js
│   ├── portfolio.js
│   ├── creators.js
│   ├── testimonials.js
│   └── blog.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## Roadmap / Implementation Phases

### Phase 1: Foundation (Day 1)
- [x] Initialize Vite + React project
- [x] Install Tailwind CSS, Framer Motion, React Router, Lucide
- [x] Configure Tailwind theme (colors, fonts, spacing)
- [x] Set up Google Fonts
- [x] Create Layout, Navbar, Footer components
- [x] Set up React Router with all 8 routes

### Phase 2: Core Pages (Days 2-3)
- [x] Home page — hero, stats, services preview, featured work, testimonials, CTA
- [x] About page — story, values, team grid
- [x] Services page — detailed service cards with hover effects
- [x] Portfolio page — filterable grid with case study detail modals

### Phase 3: Secondary Pages (Days 3-4)
- [x] Creators page — roster grid with category filters
- [x] Blog page — article grid with featured post
- [x] Pricing page — tier comparison table
- [x] Contact page — form + office locations

### Phase 4: Polish (Day 5)
- [x] Scroll animations (Framer Motion)
- [x] Responsive design (mobile-first)
- [x] Hover effects and micro-interactions
- [x] Loading states and page transitions
- [x] SEO meta tags
- [x] Performance optimization

### Phase 5: Deploy (Day 5)
- [ ] Push to GitHub
- [ ] Connect to Vercel
- [ ] Configure custom domain
- [ ] Test across devices

---

## Claude Code Instructions (for VS Code)

### Initial Setup
```bash
# Create the project
npm create vite@latest thecreatorpros -- --template react
cd thecreatorpros

# Install dependencies
npm install
npm install -D tailwindcss @tailwindcss/vite
npm install framer-motion react-router-dom lucide-react

# Initialize Tailwind
npx tailwindcss init -p
```

### Tailwind Config (tailwind.config.js)
```js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: { 900: '#0A0A0A', 800: '#111111', 700: '#1A1A1A' },
        gold: { 500: '#C9A84C', 400: '#D4B85C', 600: '#B8973C' },
        cream: { 500: '#F5F0E8', 400: '#FAF7F2' },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### GitHub Setup
```bash
git init
git add .
git commit -m "Initial commit: TheCreatorPros website"
git remote add origin https://github.com/YOUR_USERNAME/thecreatorpros.git
git branch -M main
git push -u origin main
```

### Vercel Deployment
```bash
# Install Vercel CLI (optional — can also connect via dashboard)
npm i -g vercel

# Deploy
vercel

# Or connect via Vercel Dashboard:
# 1. Go to vercel.com/new
# 2. Import GitHub repo
# 3. Framework Preset: Vite
# 4. Deploy
```

### Environment Notes
- No backend/API needed for frontend-only version
- All data is mocked in `/src/data/` files
- Images use placeholder services (Unsplash via URLs)
- Contact form is UI-only (no submission handler)

---

## Key Design References
- **Viral Nation** (viralnation.com) — Bold dark hero, metric-driven sections
- **Socially Powerful** (sociallypowerful.com) — Dark luxury, editorial typography
- **Goat Agency** — Data-driven layouts, clean grid portfolios
- **G & Co. Agency** (g-co.agency) — Ultra-luxury consulting aesthetic
- **Relevance Digital** (relevance.digital) — UHNWI targeting, premium feel

---

## Success Criteria
1. ✅ Lighthouse Performance > 90
2. ✅ Fully responsive (320px → 2560px)
3. ✅ Smooth 60fps animations
4. ✅ Consistent dark luxury aesthetic
5. ✅ All 8 pages functional with navigation
6. ✅ Professional enough for client presentations
