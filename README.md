# 🔥 Ember & Oak — Restaurant Menu Showcase

A modern, single-page restaurant menu website built as a design showcase, focused on a **micro-interaction heavy UI** — every element responds to the user with motion, giving the site a premium, tactile feel.

**[Live Demo](#)** · **[Repo](https://github.com/Fatimshaikh/restaurant-menu-showcase)**

---

## ✨ Features

- **Custom animated cursor** — a dual-layer cursor (dot + lagging ring) that grows and reacts when hovering over interactive elements
- **Staggered text reveal** — the hero headline animates in word-by-word with a spring effect
- **Magnetic buttons** — buttons subtly pull toward the cursor on hover, then spring back
- **Scroll-aware navbar** — transparent over the hero, transitions to a blurred dark bar on scroll
- **Hover-reveal menu cards** — dish images zoom and descriptions slide up on hover
- **Scroll-triggered animations** — sections fade and rise into view as the user scrolls
- **Fully responsive** — works across desktop, tablet, and mobile breakpoints

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Fonts | Playfair Display (headings) · Inter (body) — via `next/font` |

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout, fonts, custom cursor mount
│   ├── page.tsx         # Homepage composition
│   └── globals.css      # Tailwind v4 theme tokens
├── components/
│   ├── CustomCursor.tsx     # Dual-layer animated cursor
│   ├── Navbar.tsx           # Scroll-aware sticky navbar
│   ├── Hero.tsx              # Animated hero section
│   ├── MagneticButton.tsx    # Reusable magnetic-hover button
│   ├── MenuGrid.tsx           # Dish cards with hover reveal
│   └── Footer.tsx             # Site footer
└── data/
    └── menu.ts           # Dish data (name, price, image, category)
```

## 🚀 Getting Started

```bash
git clone https://github.com/Fatimshaikh/restaurant-menu-showcase.git
cd restaurant-menu-showcase
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Purpose

This project was built as a portfolio piece to demonstrate proficiency in **Next.js, TypeScript, and Framer Motion**, with an emphasis on interaction design — the kind of polish expected in modern, high-end web experiences.

## 📄 License

MIT — free to use as a learning reference.
