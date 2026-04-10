# PhacoTrack Landing Page

## What This Is
Static marketing site for **phacotrack.com** — drives App Store downloads for the PhacoTrack iOS app. Lives in the `landing/` subdirectory of the main PhacoTrack repo. Independent from the iOS project.

## Stack
- **Next.js 15** (App Router, static export via `output: 'export'`)
- **Tailwind CSS v4** — config via `@theme` in `globals.css` (no `tailwind.config.ts`)
- **TypeScript**
- **No external UI libraries** — pure Tailwind + Intersection Observer for animations
- **System fonts** — `-apple-system` stack, zero font downloads

## Running Locally
```bash
cd landing
npm run dev        # Dev server (hot reload)
npm run build      # Static export → out/
npx serve out      # Preview production build
```

## Deploying
- `npm run build` generates a fully static `out/` directory
- Deploy `out/` to Vercel, Netlify, or any static host
- For Vercel: set root directory to `landing/`, framework to Next.js
- DNS: point `phacotrack.com` to the hosting provider

## Domain
- **phacotrack.com** — registered via Google Domains (now Squarespace Domains)
- Renews April 8, 2027
- DNS not yet pointed to hosting — still needs deployment setup

## File Structure
```
landing/
├── next.config.ts              # Static export config
├── package.json                # next 15, react 19, tailwindcss 4
├── postcss.config.mjs          # @tailwindcss/postcss
├── tsconfig.json
├── public/
│   ├── app-icon.png            # 256x256 (resized from AppIconAssets/)
│   └── app-icon-small.png      # 64x64 (navbar/favicon)
├── app/
│   ├── layout.tsx              # Root layout, metadata, SEO, OG tags
│   ├── page.tsx                # Single page — imports all section components
│   └── globals.css             # Tailwind @import + @theme tokens + animations + dark mode
└── components/
    ├── Navbar.tsx              # Sticky nav, mobile hamburger ('use client')
    ├── Hero.tsx                # Headline, CTAs, CSS iPhone mockup with mock Insights dashboard
    ├── Problem.tsx             # "Status quo is broken" + 3 stat cards
    ├── HowItWorks.tsx          # Snap → Log → Learn, 3 steps with small device frames
    ├── Features.tsx            # 4 alternating feature cards with device mockups
    ├── Comparison.tsx          # PhacoTrack vs Paper/Generic/Enterprise table
    ├── BuiltBy.tsx             # "Built by ophthalmologists" credibility section
    ├── Privacy.tsx             # 4 trust cards (AES-256, Face ID, Offline, PDPA)
    ├── Pricing.tsx             # Free vs Pro tier cards
    ├── FAQ.tsx                 # 6-question accordion ('use client')
    ├── FinalCTA.tsx            # Bottom CTA + App Store badge + footer
    ├── DeviceFrame.tsx         # Pure CSS iPhone 15 Pro frame (reusable)
    ├── SectionWrapper.tsx      # Consistent section padding/max-width/background
    └── AnimateOnScroll.tsx     # Intersection Observer fade-in-up ('use client')
```

## Design System (defined in globals.css @theme)
| Token | Value | Usage |
|-------|-------|-------|
| `accent` | `#2A7ADF` | Primary buttons, links, highlights |
| `accent-deep` | `#1959BF` | CTA emphasis, hover |
| `accent-light` | `#E8F4FD` | Hero gradient background |
| `surface` | `#FFFFFF` | Page background |
| `surface-alt` | `#F2F2F7` | Alternating section backgrounds |
| `ink` | `#1C1C1E` | Primary text |
| `ink-muted` | `#8E8E93` | Secondary text |
| `ink-faint` | `#C7C7CC` | Tertiary text |
| `line` | `#D1D1D6` | Borders, dividers |
| `positive` | `#34C759` | Checkmarks, success |

## Key Technical Details

### Client Components (only 3)
- `Navbar.tsx` — hamburger menu toggle + scroll detection
- `FAQ.tsx` — accordion open/close state
- `AnimateOnScroll.tsx` — Intersection Observer

Everything else is server-rendered at build time.

### Device Mockups
Pure CSS iPhone 15 Pro frames — no images. Content inside is styled divs mimicking PhacoTrack's real UI (analytics cards, charts, forms, polar plots) using the app's actual color tokens.

### Animations
- `AnimateOnScroll` wrapper uses Intersection Observer (`threshold: 0.12`)
- Elements start as `aos-hidden` (opacity 0, translateY 28px)
- On viewport entry → transition to visible, observer disconnects
- Supports `delay` prop for stagger
- Respects `prefers-reduced-motion`

### Dark Mode
CSS custom property overrides in `@media (prefers-color-scheme: dark)` in `globals.css`. Follows system preference — no manual toggle.

### Performance
- ~221 KB total gzipped transfer
- Zero web fonts
- Zero external dependencies beyond Next/React/Tailwind
- All images lazy-loaded
- Lighthouse target: >95

## Content Source
All copy, pricing, FAQ text, and comparison data comes from `PHACOTRACK_LANDING_PAGE.md` in the repo root.

## Current Status
- **Built and compiling** — all 11 sections rendering correctly
- **Needs polish** — visual refinements, mobile testing, dark mode testing
- **Not yet deployed** — domain DNS not pointed anywhere yet
- **App Store link** — placeholder `#download` anchors, needs real App Store URL when available
