# TheCreatorPros — Claude Code Setup & Development Prompt

> Copy-paste this entire file as your prompt to Claude Code in VS Code.
> It contains everything Claude Code needs to understand the project, get it running, and iterate on it.

---

## PROJECT OVERVIEW

You are working on **TheCreatorPros** — a premium, dark-luxury frontend website for a creator-focused agency that manages and delivers creators, content, and UGC to high-end brands.

The full codebase is already scaffolded. Your job is to:
1. Install dependencies and get the dev server running
2. Fix any build/runtime errors
3. Iterate on design, animations, and polish
4. Deploy to Vercel via GitHub

---

## STEP 1: INSTALL & RUN

```bash
# Install all dependencies
npm install

# Start dev server
npm run dev
```

If you get any errors during install, check that you're using Node 18+ (`node --version`).

---

## STEP 2: VERIFY THE BUILD

```bash
npm run build
```

If there are any TypeScript or JSX errors, fix them. Common issues to watch for:
- Missing imports (lucide-react icon names)
- Incorrect component prop types
- Framer Motion API changes

---

## STEP 3: REVIEW & FIX ANY ISSUES

Open the dev server in browser and check each page:
- `/` — Home
- `/about` — About
- `/services` — Services
- `/portfolio` — Portfolio / Case Studies
- `/creators` — Creator Network
- `/blog` — Blog / Insights
- `/pricing` — Pricing
- `/contact` — Contact

For each page, verify:
- [ ] Page loads without console errors
- [ ] All animations trigger on scroll
- [ ] Responsive layout works (mobile, tablet, desktop)
- [ ] Navigation links work correctly
- [ ] Images load from Unsplash URLs
- [ ] Dark luxury aesthetic is consistent

---

## TECH STACK

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | React | ^18.3 |
| Build Tool | Vite | ^5.4 |
| Styling | Tailwind CSS | ^3.4 |
| Animations | Framer Motion | ^11.0 |
| Routing | React Router DOM | ^6.23 |
| Icons | Lucide React | ^0.383 |
| Fonts | Google Fonts | Playfair Display, Inter, JetBrains Mono |

---

## DESIGN SYSTEM

### Color Tokens (defined in tailwind.config.js)
```
Dark Backgrounds:     dark-900 (#0A0A0A), dark-800 (#111111), dark-700 (#1A1A1A), dark-600 (#222222)
Gold Accents:         gold-300 (#E0C872), gold-400 (#D4B85C), gold-500 (#C9A84C), gold-600 (#B8973C)
Cream:                cream-400 (#FAF7F2), cream-500 (#F5F0E8), cream-600 (#E8E0D0)
```

### Typography
- **Headings:** `font-serif` → Playfair Display (elegant, editorial)
- **Body:** `font-sans` → Inter (clean, modern)
- **Data/Stats:** `font-mono` → JetBrains Mono

### Custom Utility Classes (defined in src/index.css)
```
.text-gradient      — Gold gradient text
.glass              — Glassmorphism effect (blur + border)
.section-padding    — Consistent section spacing (px-6 md:px-12 lg:px-24 py-20 md:py-32)
.container-custom   — Max-width container (max-w-7xl mx-auto px-6 md:px-12)
.btn-primary        — Gold CTA button
.btn-outline        — White outline button
.heading-line       — Left-aligned heading with gold line accent
```

### Design Principles
1. Dark backgrounds everywhere — never use white/light page backgrounds
2. Gold (#C9A84C) is the primary accent for CTAs, highlights, and interactive elements
3. Generous whitespace — sections are large and well-spaced
4. Serif headings (Playfair Display) for luxury feel
5. Scroll-triggered animations on every section
6. Hover effects on all interactive elements (cards lift, borders glow gold)
7. No rounded corners on buttons (sharp/angular = luxury). Cards can have subtle rounding.

---

## PROJECT STRUCTURE

```
thecreatorpros/
├── index.html                          # Entry HTML with Google Fonts
├── package.json                        # Dependencies and scripts
├── vite.config.js                      # Vite configuration
├── tailwind.config.js                  # Tailwind theme (colors, fonts, animations)
├── postcss.config.js                   # PostCSS with Tailwind + Autoprefixer
├── .gitignore
├── GAMEPLAN.md                         # Full project gameplan and roadmap
├── CLAUDE-CODE-PROMPT.md               # This file
├── public/
├── src/
│   ├── main.jsx                        # React entry point (BrowserRouter)
│   ├── App.jsx                         # Routes config (AnimatePresence)
│   ├── index.css                       # Global styles + Tailwind layers
│   ├── components/
│   │   ├── animations/
│   │   │   ├── FadeIn.jsx              # Scroll-triggered fade (direction, delay)
│   │   │   ├── CountUp.jsx             # Animated number counter
│   │   │   └── StaggerChildren.jsx     # Staggered child animations
│   │   ├── layout/
│   │   │   ├── Navbar.jsx              # Fixed nav, scroll-aware, mobile menu
│   │   │   ├── Footer.jsx              # Full footer with CTA + links
│   │   │   ├── Layout.jsx              # Page wrapper (nav + footer + scroll-to-top)
│   │   │   └── PageTransition.jsx      # Framer Motion page transition wrapper
│   │   └── ui/
│   │       ├── Badge.jsx               # Tag/label badges (default, gold, cream, primary, outline)
│   │       ├── Button.jsx              # CTA buttons (primary, outline, ghost, dark)
│   │       ├── Card.jsx                # Hover-animated card container
│   │       └── SectionHeading.jsx      # Reusable section title + subtitle + label
│   ├── pages/
│   │   ├── Home.jsx                    # Hero, stats, services preview, portfolio, testimonials, CTA
│   │   ├── About.jsx                   # Story, values, team, culture
│   │   ├── Services.jsx                # 6 service cards with detail
│   │   ├── Portfolio.jsx               # Filterable portfolio grid with modal detail
│   │   ├── Creators.jsx                # Creator roster with category filter
│   │   ├── Blog.jsx                    # Blog grid with featured post + category filter
│   │   ├── Pricing.jsx                 # 3-tier pricing + FAQ accordion
│   │   └── Contact.jsx                 # Contact form + office info
│   └── data/
│       ├── services.js                 # 6 services with features and stats
│       ├── portfolio.js                # 6 case studies with results
│       ├── creators.js                 # 8 creator profiles
│       ├── testimonials.js             # 4 testimonials + 8 client logos
│       ├── blog.js                     # 6 blog posts
│       ├── pricing.js                  # 3 pricing tiers + 6 FAQs
│       └── team.js                     # 4 team members + 4 values
```

---

## COMPONENT API REFERENCE

### FadeIn
```jsx
<FadeIn delay={0.2} direction="up" once={true} className="">
  {children}
</FadeIn>
```
Props: `delay` (seconds), `direction` (up|down|left|right|none), `once` (bool), `className`

### CountUp
```jsx
<CountUp end={2500} suffix="+" prefix="$" className="" />
```
Props: `end` (number), `suffix`, `prefix`, `duration` (ms, default 2000), `className`

### StaggerContainer + StaggerItem
```jsx
<StaggerContainer className="grid grid-cols-3 gap-6">
  <StaggerItem>{/* card 1 */}</StaggerItem>
  <StaggerItem>{/* card 2 */}</StaggerItem>
</StaggerContainer>
```

### SectionHeading
```jsx
<SectionHeading
  label="What We Do"
  title="Our Services"
  description="Optional description text."
  align="left"    // or "center"
  light={false}    // true for light backgrounds
/>
```

### Button
```jsx
<Button variant="primary" href="/contact" icon={true}>
  Get Started
</Button>
```
Props: `variant` (primary|outline|ghost|dark), `href`, `onClick`, `icon` (shows arrow), `className`

### Card
```jsx
<Card hover={true} className="">
  {children}
</Card>
```
Props: `hover` (lift + glow effect), `className`

### Badge
```jsx
<Badge variant="gold" className="">UGC</Badge>
```
Props: `variant` (default|gold|cream|primary|outline), `className`

---

## GITHUB SETUP

```bash
# Initialize git (if not already)
git init
git add .
git commit -m "feat: initial TheCreatorPros website scaffolding"

# Create GitHub repo (use GitHub CLI or manually)
gh repo create thecreatorpros --public --source=. --push

# Or manually:
git remote add origin https://github.com/YOUR_USERNAME/thecreatorpros.git
git branch -M main
git push -u origin main
```

---

## VERCEL DEPLOYMENT

### Option A: Vercel CLI
```bash
npm i -g vercel
vercel
# Follow prompts — framework auto-detected as Vite
```

### Option B: Vercel Dashboard
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the GitHub repo
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click Deploy

### Option C: Auto-deploy via GitHub
Once connected, every push to `main` auto-deploys.

---

## ITERATION TASKS (AFTER INITIAL SETUP)

Once the site is running, here are high-priority improvements to make:

### Visual Polish
- [ ] Add a subtle particle/grain texture overlay on the hero section
- [ ] Implement smooth page transitions between routes (fade + slide)
- [ ] Add cursor trail or custom cursor effect for premium feel
- [ ] Implement image lazy loading with blur-up placeholders
- [ ] Add a subtle parallax effect on hero background elements

### Content Enhancement
- [ ] Replace Unsplash placeholder images with actual brand/creator imagery
- [ ] Add real client logos as SVGs in the trusted-by section
- [ ] Write actual blog post content (currently placeholders)
- [ ] Add video embed support for portfolio case studies

### Performance
- [ ] Optimize images (convert to WebP, add srcset)
- [ ] Add meta tags for SEO (title, description, OG tags per page)
- [ ] Add sitemap.xml and robots.txt
- [ ] Implement code splitting per route (React.lazy + Suspense)
- [ ] Run Lighthouse audit and fix any issues

### Functionality
- [ ] Connect contact form to a backend (Formspree, Resend, etc.)
- [ ] Add newsletter signup integration (Mailchimp, ConvertKit)
- [ ] Implement blog with CMS (Contentful, Sanity, or MDX)
- [ ] Add a cookie consent banner
- [ ] Add analytics (Google Analytics, Plausible, or PostHog)

### Advanced
- [ ] Add GSAP or Lenis for smoother scroll experience
- [ ] Implement a loading/splash screen
- [ ] Add dark/light mode toggle (if needed — currently all dark)
- [ ] Create 404 page
- [ ] Add breadcrumbs for SEO

---

## IMPORTANT NOTES

- **All data is mocked** in `src/data/` files — no backend needed
- **Contact form is UI-only** — no submission handler yet
- **Images use Unsplash URLs** — replace with real assets for production
- **No authentication or CMS** — this is a static frontend showcase
- **The design is intentionally dark** — do not add light backgrounds to pages
- **Buttons are deliberately sharp/angular** (no border-radius) — this is a luxury design choice
- **Gold (#C9A84C) is THE accent color** — use it for all interactive elements, highlights, and CTAs
