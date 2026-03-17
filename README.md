# 🏢 Top Spot Janitorial Services — Website

Premium dark-first glassmorphism website for Top Spot Janitorial Services Inc.

## Tech Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS 3.4** (custom theme w/ glassmorphism utilities)
- **Framer Motion** (page transitions, scroll-triggered animations)
- **Lucide React** (icon system)
- **next-themes** (dark/light mode w/ localStorage persistence)
- **Radix UI** (accessible accordion, dialog, select primitives)

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open browser
open http://localhost:3000
```

## Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm start
```

### Deploy to Cloudflare Pages / Vercel

This project is static-site compatible. For Cloudflare Pages:

```bash
npm run build
# Deploy the `.next` directory or use `next export` for static
```

For Vercel — just push to GitHub and connect the repo.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (fonts, meta, providers)
│   ├── page.tsx            # Home page (all sections)
│   ├── globals.css         # Tailwind + custom glassmorphism styles
│   ├── about/              # About Us page
│   ├── contact/            # Contact page
│   ├── apply/              # Job application page
│   └── services/
│       ├── page.tsx        # Redirect → /#services
│       └── [slug]/         # Dynamic service detail pages
├── components/
│   ├── Navbar.tsx          # Desktop top + mobile bottom nav
│   ├── Hero.tsx            # Hero w/ text cutout, parallax, typewriter
│   ├── Stats.tsx           # Count-up stats bar
│   ├── About.tsx           # Why Choose Us section
│   ├── Services.tsx        # Service grid + modal detail view
│   ├── Testimonials.tsx    # Swipeable review carousel
│   ├── FAQ.tsx             # Smooth accordion
│   ├── Contact.tsx         # Form + map + contact methods
│   ├── CTABanner.tsx       # Full-width call-to-action
│   └── Footer.tsx          # Footer w/ skyline silhouette
├── lib/
│   ├── data.ts             # All site content (services, testimonials, FAQ, etc.)
│   └── utils.ts            # cn() helper
└── providers/
    └── ThemeProvider.tsx    # next-themes wrapper
```

## Customisation

### Brand Colours
Edit `tailwind.config.ts` → `theme.extend.colors.brand`:
- **Blue**: `#1052F8`
- **Blue Light**: `#3A75FF`
- **Blue Dark**: `#0A3ABF`

### Content
All copy lives in `src/lib/data.ts` — services, testimonials, FAQ, stats, company info.

### Images
Replace placeholder images with real ones:
- Hero background: Toronto skyline
- Service page headers
- Logo files in `/public`

### Form Integration
The contact and apply forms currently use client-side state. Wire them up to:
- An API route (`/api/contact`)
- EmailJS, Resend, or SendGrid
- A Google Sheets webhook

## SEO

- Semantic HTML5 throughout
- Open Graph meta tags
- `generateMetadata()` on every page
- Structured data ready (add JSON-LD as needed)
- Sitemap: add `next-sitemap` for auto-generation

## Browser Support

- Chrome 90+
- Firefox 90+
- Safari 15+
- Edge 90+

---

Built with precision. 🔵
# ashproject
