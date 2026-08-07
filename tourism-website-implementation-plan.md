# National Tourism Website — Implementation Plan

**Handoff document for AI coding agent (Claude Code / Cursor / etc.)**

> Assumption stated up front: examples below use Bangladesh as the reference country (Sundarbans, Cox's Bazar, Sylhet, etc.) since no country was specified. If this is for a different government, swap place names, palette inspiration, and copy — the structure, stack, and build order stay the same.

---

## 1. Project Overview

A government tourism portal that needs to feel trustworthy (it's an official .gov-style site) while still being visually memorable — not a generic template. Primary goals:

- Showcase destinations and drive interest in travel
- Surface timely info (events, travel advisories/updates)
- Communicate ministry credibility (About Us / official info)
- Fast, accessible, mobile-first (most traffic will be mobile)

**Target pages:** Home, Places to Visit, Events, Travel Update, About Us / Ministry Info

---

## 2. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Build tool | Vite | Fast HMR, minimal config |
| Framework | React 18 | As requested |
| Styling | Tailwind CSS 3 | As requested |
| Routing | `react-router-dom` v6 | Standard for multi-page SPA |
| Animation | `framer-motion` | Declarative, scroll-triggered reveals, page transitions |
| Banner slider | `embla-carousel-react` + `embla-carousel-autoplay` | Lightweight, unstyled, plays nicely with Tailwind + Framer Motion (avoid heavier Swiper unless richer built-in UI is wanted) |
| Icons | `lucide-react` | Clean, consistent, tree-shakeable |
| Scroll-linked effects | `framer-motion`'s `useScroll` / `useTransform` (no need for GSAP unless the "signature element" below needs more control) |
| Fonts | Self-hosted via `@fontsource` packages | No FOUC/CDN dependency issues |

### Install commands

```bash
npm create vite@latest tourism-site -- --template react
cd tourism-site
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install react-router-dom framer-motion embla-carousel-react embla-carousel-autoplay lucide-react
npm install @fontsource/fraunces @fontsource/inter @fontsource/ibm-plex-mono
```

---

## 3. Design System (give this to the agent verbatim)

The brief risks landing on generic "AI travel site" defaults (centered hero, cream background, stock terracotta accent, numbered 01/02/03 markers). Avoid that. Direction below is grounded in the country's actual geography — a river delta — rather than generic travel-brand tropes.

### Color tokens

| Token | Hex | Use |
|---|---|---|
| `ink` | `#0F2E22` | Primary text, dark surfaces |
| `paper` | `#EEF1EA` | Light background (pale sage-white, not cream) |
| `forest` | `#1B5E4F` | Primary brand green (mangrove canopy) |
| `rust` | `#B5451E` | Accent — sunset/brick terracotta (deliberately shifted darker/redder than the common `#D97757` AI-default) |
| `spice` | `#D9A441` | Secondary accent — turmeric gold, used sparingly (CTAs, highlights) |
| `river` | `#0E7C90` | Tertiary accent — Bay of Bengal teal, used for links/info states |

Add these as CSS variables in `index.css` and reference them in `tailwind.config.js` under `theme.extend.colors` — don't hardcode hex values in components.

### Typography

- **Display (headings):** Fraunces (serif, has personality/warmth, variable weight/optical size — use it deliberately, not at default settings)
- **Body:** Inter
- **Utility (labels, dates, captions, nav microcopy):** IBM Plex Mono, small size, wide letter-spacing

Set a real type scale (not Tailwind defaults untouched) — e.g. `text-sm / text-base / text-xl / text-3xl / text-5xl / text-7xl` mapped intentionally to hierarchy, with Fraunces at large display sizes using a lower `font-weight` for elegance rather than always bold.

### Layout concept

Avoid the centered-hero-with-stat-cards template. Use an asymmetric hero: large destination image/video bleeding to one edge, headline and CTA left-aligned in the remaining space, small "current travel advisory" chip floating near the fold (ties Home to the Travel Update page).

### Signature element: "The River Line"

Since the country is defined by its rivers, use a single hand-drawn SVG line (a stylized river path) that:
- Starts in the hero section
- Runs down the page as a scroll-linked stroke (animated via `stroke-dashoffset` tied to scroll progress with `framer-motion`'s `useScroll`)
- Visually "connects" the banner → famous places grid → Places to Go section → footer, like a travel route
- On desktop, small location pin markers can sit along the line at section boundaries; on mobile, simplify to a straight vertical accent line (respect complexity budget on small screens)

This is the one bold/memorable move — keep everything else (spacing, grid, cards) disciplined and quiet around it. Respect `prefers-reduced-motion`: freeze the line in a static state rather than animating it for users who request reduced motion.

---

## 4. Folder Structure

```
src/
├── assets/
│   ├── images/
│   └── icons/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   ├── home/
│   │   ├── BannerSlider.jsx
│   │   ├── FamousPlacesGrid.jsx
│   │   ├── PlacesToGo.jsx
│   │   └── RiverLine.jsx
│   ├── shared/
│   │   ├── SectionHeading.jsx
│   │   ├── PlaceCard.jsx
│   │   ├── EventCard.jsx
│   │   ├── Chip.jsx (e.g. travel advisory badge)
│   │   └── AnimatedReveal.jsx (scroll-in wrapper)
│   └── ui/ (buttons, inputs — small primitives)
├── pages/
│   ├── Home.jsx
│   ├── PlacesToVisit.jsx
│   ├── Events.jsx
│   ├── TravelUpdate.jsx
│   └── AboutMinistry.jsx
├── data/
│   ├── places.json
│   ├── events.json
│   └── travelUpdates.json
├── hooks/
│   └── useScrollReveal.js
├── lib/
│   └── utils.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## 5. Page/Section Breakdown

### 5.1 Navbar
- Logo/emblem (left) + nav items (Home, Places to Visit, Events, Travel Update, About Us/Ministry) + CTA button (e.g. "Plan Your Trip") right-aligned
- Sticky on scroll, background transitions from transparent (over hero) to solid `paper` with subtle shadow after scroll threshold (use `framer-motion` + scroll listener or `useScroll`)
- Mobile: slide-in drawer menu, animated hamburger icon
- Active route indicator (underline or dot, animated with `layoutId` for smooth transition between links)
- Optional (flag if relevant): language toggle (e.g. EN / বাংলা) since this is a government site — common requirement, worth confirming with stakeholder

### 5.2 Banner Slider (Hero)
- Full-bleed or asymmetric (per layout concept above), 3–5 slides of hero destinations
- Built with `embla-carousel-react` + autoplay plugin, pause-on-hover/focus, swipeable on touch
- Each slide: image, location name (mono label), short headline (Fraunces), CTA
- Dot/progress indicators — style custom, not default browser controls
- Ken Burns-style slow zoom on active slide image (subtle `scale` transition via Framer Motion) for a premium feel without being distracting

### 5.3 Famous Places — Complex Grid
- "Bento box" style CSS grid: one large featured card (e.g. spans 2x2) + several smaller cards in varying sizes, using `grid-template-areas` or Tailwind's `col-span-*`/`row-span-*`
- Each card: image, place name, region/district (mono label), on-hover reveal of a short description or "Explore →" link
- Stagger-in animation on scroll (each card fades/slides in with incremental delay via `framer-motion`'s `staggerChildren`)
- Responsive collapse: bento grid on desktop → simplified 2-col → single column stack on mobile (don't force the same asymmetry on small screens)

### 5.4 "Places to Go"
- Distinct from the grid above — likely a curated/categorized browse section (e.g. by type: Beaches, Hill Tracts, Heritage Sites, Wildlife, Rivers & Wetlands)
- Suggest a horizontally-scrollable card carousel per category, or filterable tabs above a grid — pick one, don't do both
- Include a short intro line per category (what makes it distinct), not just a card wall
- CTA at the end linking to the full "Places to Visit" page

### 5.5 Footer
- Ministry name, official emblem/seal, address, contact info
- Quick links (mirror nav)
- Social links
- Newsletter/subscribe (optional)
- Legal: copyright, privacy policy, accessibility statement (expected for a gov site)
- Keep visually calm — this is not the place for the signature animation

---

## 6. Additional Pages (brief scope)

| Page | Key content |
|---|---|
| Places to Visit | Full destination catalogue, filterable by region/category, search |
| Events | Calendar/list of festivals & tourism events, filter by month/type |
| Travel Update | Advisories, visa info, safety notices — needs a clear "last updated" timestamp and severity indicator (info/warning) |
| About Us / Ministry Info | Ministry mandate, leadership, official links, contact/RTI info |

---

## 7. Animation Strategy

- **Page load:** Hero content enters with a short orchestrated sequence (label → headline → CTA, staggered), not everything fading in at once
- **Scroll reveals:** Wrap sections in a shared `<AnimatedReveal>` component using `whileInView` — fade + slight `translateY`, triggered once
- **Hover micro-interactions:** Card lift (`translateY` + shadow), image scale on hover, underline animations on links
- **Route transitions:** Wrap `<Routes>` in `AnimatePresence` for subtle cross-fade between pages
- **Respect restraint:** The River Line is the one "wow" moment — keep card/hover animations quick (150–250ms) and consistent; don't stack multiple competing effects on one section
- **Accessibility:** Wrap all motion in a check for `prefers-reduced-motion` (a small hook, `useReducedMotion` from `framer-motion` is built in) and disable non-essential animation accordingly

---

## 8. Data Model (mock JSON shape, swap for CMS/API later)

```json
// data/places.json
[
  {
    "id": "sundarbans",
    "name": "Sundarbans",
    "region": "Khulna Division",
    "category": "Wildlife & Wetlands",
    "shortDescription": "World's largest mangrove forest, home to the Bengal tiger.",
    "image": "/assets/images/sundarbans.jpg",
    "featured": true
  }
]
```

```json
// data/events.json
[
  {
    "id": "pohela-boishakh",
    "title": "Pohela Boishakh (Bengali New Year)",
    "date": "2027-04-14",
    "location": "Nationwide",
    "type": "Cultural Festival",
    "image": "/assets/images/pohela-boishakh.jpg"
  }
]
```

```json
// data/travelUpdates.json
[
  {
    "id": "update-001",
    "title": "Monsoon season travel advisory",
    "severity": "info",
    "publishedAt": "2026-07-01",
    "body": "..."
  }
]
```

---

## 9. Routing Plan

```jsx
<Routes>
  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/places-to-visit" element={<PlacesToVisit />} />
    <Route path="/places-to-visit/:placeId" element={<PlaceDetail />} />
    <Route path="/events" element={<Events />} />
    <Route path="/travel-update" element={<TravelUpdate />} />
    <Route path="/about" element={<AboutMinistry />} />
  </Route>
</Routes>
```

Use `React.lazy` + `Suspense` for route-level code splitting so the initial bundle stays light.

---

## 10. Accessibility & Performance Checklist

Non-negotiable for a government site:

- [ ] Semantic HTML (`<nav>`, `<main>`, `<footer>`, proper heading hierarchy — one `<h1>` per page)
- [ ] Visible keyboard focus states on all interactive elements (don't strip Tailwind's default outline without replacing it)
- [ ] Alt text on all images (descriptive, not decorative filler)
- [ ] Color contrast meets WCAG 2.1 AA (verify `rust` and `river` accents against `paper`/`ink`)
- [ ] `prefers-reduced-motion` respected everywhere
- [ ] Images lazy-loaded (`loading="lazy"`) and served in modern formats (WebP/AVIF) with responsive `srcset`
- [ ] Slider is keyboard-navigable and screen-reader announces slide changes (`aria-live`)
- [ ] Mobile drawer menu traps focus while open and is dismissible with Escape
- [ ] Lighthouse pass: aim 90+ on Performance, Accessibility, Best Practices, SEO
- [ ] Meta tags + Open Graph per page (important for a public-facing gov/tourism site)

---

## 11. Phased Build Order (give this to the agent as the execution sequence)

1. **Scaffold** — Vite + React + Tailwind setup, install all dependencies, configure fonts and CSS variables
2. **Design tokens** — Wire the color/type tokens into `tailwind.config.js`, set up base typography in `index.css`
3. **Layout shell** — Build `Navbar`, `Footer`, `Layout` wrapper, set up React Router with empty page stubs
4. **Home: Banner Slider** — Implement Embla carousel with autoplay, custom controls, Ken Burns image effect
5. **Home: Famous Places Grid** — Build the bento grid layout, responsive breakpoints, hover states
6. **Home: Places to Go** — Category browse section
7. **Signature element: River Line** — Scroll-linked SVG path connecting hero through footer
8. **Motion pass** — Add `AnimatedReveal` wrapper across sections, page transitions via `AnimatePresence`, hover micro-interactions
9. **Remaining pages** — Places to Visit (with filtering), Events, Travel Update, About Us — reuse shared card/section components
10. **Data wiring** — Replace hardcoded content with the JSON data model (agent should build this so swapping to a real API later is a one-file change)
11. **Accessibility & performance pass** — Run through the checklist in Section 10
12. **Responsive QA** — Test all breakpoints, especially the bento grid collapse and mobile nav drawer
13. **Deployment prep** — Production build, verify asset optimization, set up meta/OG tags per route

---

## 12. Notes for the Agent

- Derive every color/type decision from Section 3's tokens — don't introduce ad hoc hex values or default Tailwind grays/blues.
- Keep the River Line as the one "bold" visual risk; everything else should be restrained and consistent.
- Confirm with the user before assuming multilingual support (EN/Bangla toggle) — it's common for gov sites but adds real scope (content duplication, RTL is not needed but layout for longer Bangla strings should be tested).
- Use placeholder Unsplash-style imagery during build, then flag all image assets that need to be swapped for licensed/official ministry photography before launch (real destination photos, not stock generic beach shots).
