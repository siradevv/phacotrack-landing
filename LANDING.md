# PhacoTrack Landing Page

## What This Is
Static marketing site for **phacotrack.com** — drives App Store downloads for the PhacoTrack iOS app. Lives in the standalone `siradevv/phacotrack-landing` GitHub repo. Independent from the iOS project.

## Stack
- **Next.js 15** (App Router, static export via `output: 'export'`)
- **Tailwind CSS v4** — config via `@theme` in `globals.css` (no `tailwind.config.ts`)
- **TypeScript**
- **No external UI libraries** — pure Tailwind + Intersection Observer for animations
- **System fonts** — `-apple-system` stack, zero font downloads
- **Vercel Web Analytics** — `@vercel/analytics` for anonymous page-view metrics

## Running Locally
```bash
npm run dev        # Dev server (hot reload)
npm run build      # Static export → out/
npx serve out      # Preview production build
```

## Deploying
- Auto-deploys to Vercel on push to `main`
- DNS: `phacotrack.com` points to Vercel

## File Structure
```
landing/
├── next.config.ts              # Static export config
├── package.json                # next 15, react 19, tailwindcss 4, @vercel/analytics
├── postcss.config.mjs          # @tailwindcss/postcss
├── tsconfig.json
├── vercel.json                 # security headers (HSTS, CSP, X-CTO, Referrer-Policy)
├── lib/
│   ├── links.ts                # Single source for APP_STORE_URL
│   └── pricing.ts              # US monthly/yearly price source-of-truth
├── public/
│   ├── app-icon.png            # 256x256 (resized from AppIconAssets/)
│   ├── app-icon-small.png      # 64x64 (navbar/favicon)
│   └── screenshots/            # Hero + AppTour PNGs
├── app/
│   ├── layout.tsx              # Root layout, metadata, SEO, OG tags, JSON-LD
│   ├── page.tsx                # Single page — imports all section components
│   ├── globals.css             # Tailwind @import + @theme tokens + animations + dark mode
│   ├── privacy/page.tsx        # /privacy
│   ├── terms/page.tsx          # /terms
│   ├── opengraph-image.tsx     # OG image generation
│   ├── icon.png                # Browser tab icon
│   ├── robots.ts               # robots.txt generator
│   └── sitemap.ts              # sitemap.xml generator
└── components/
    ├── Navbar.tsx              # Sticky nav, mobile hamburger ('use client')
    ├── Hero.tsx                # Headline, CTAs, device frame with insights screenshot
    ├── Problem.tsx             # "Status quo is broken" + stat cards
    ├── Solution.tsx            # The PhacoTrack pitch
    ├── AppTour.tsx             # Three real-app screenshots
    ├── Features.tsx            # 6 feature cards
    ├── Comparison.tsx          # PhacoTrack vs Paper/Generic/Enterprise table
    ├── Trust.tsx               # 6 trust cards
    ├── Pricing.tsx             # Free vs Pro tier cards
    ├── FAQ.tsx                 # 8-question accordion ('use client')
    ├── FinalCTA.tsx            # Bottom CTA + App Store badge + footer
    ├── DeviceFrame.tsx         # CSS iPhone frame (reusable)
    ├── SectionWrapper.tsx      # Consistent section padding/max-width/background
    └── AnimateOnScroll.tsx     # Intersection Observer fade-in-up ('use client')
```

## Design System (defined in globals.css @theme)
| Token | Value | Usage |
|-------|-------|-------|
| `accent` | `#2A7ADF` | Primary buttons, links, highlights |
| `accent-light` | `#E8F4FD` (light) / `#1A2A3E` (dark) | Hero gradient background |
| `surface` | `#FFFFFF` (light) / `#1C1C1E` (dark) | Page background |
| `surface-alt` | `#F2F2F7` (light) / `#2C2C2E` (dark) | Alternating section backgrounds |
| `ink` | `#1C1C1E` (light) / `#F2F2F7` (dark) | Primary text |
| `ink-muted` | `#8E8E93` (light) / `#AEAEB2` (dark) | Secondary text |
| `ink-faint` | `#6B6B70` (light) / `#9C9CA3` (dark) | Tertiary text (WCAG AA bumped) |
| `line` | `#D1D1D6` (light) / `#38383A` (dark) | Borders, dividers |
| `positive` | `#34C759` | Checkmarks, success |

## Key Technical Details

### Client Components (only 3)
- `Navbar.tsx` — hamburger menu toggle + scroll detection
- `FAQ.tsx` — accordion open/close state
- `AnimateOnScroll.tsx` — Intersection Observer

Everything else is server-rendered at build time.

### Pricing source-of-truth
`lib/pricing.ts` exports `US_MONTHLY_USD` / `US_YEARLY_USD`. Everything else (Pricing.tsx, layout JSON-LD) derives from these. Other regions auto-localize on-device via StoreKit.

### Animations
- `AnimateOnScroll` wrapper uses Intersection Observer (`threshold: 0.12`)
- Elements start as `aos-hidden` (opacity 0, translateY 28px)
- On viewport entry → transition to visible, observer disconnects
- Supports `delay` prop for stagger
- Respects `prefers-reduced-motion`

### Dark Mode
CSS custom property overrides in `@media (prefers-color-scheme: dark)` in `globals.css`. Follows system preference — no manual toggle. `<html style="color-scheme: light dark">` so browser-native scrollbars and form controls follow too.

### Performance
- Zero web fonts
- Zero external runtime dependencies beyond Next/React/Tailwind/Vercel Analytics
- Lighthouse target: >95

## Status
**Live at phacotrack.com.** All sections rendering correctly in both light and dark mode. Auto-deploys via Vercel on push to `main`.
