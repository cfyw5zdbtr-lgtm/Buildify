# Buildify — Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS starter for Buildify, "Your New Build Broker."

This first build covers the **shared design system, layout (header/footer), and the homepage**, based on the sitemap, wireframe and copy already agreed. Every later page reuses these same components and tokens.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. The production build is `npm run build && npm run start`.

> Note: `next/font/google` (Fraunces + Inter) needs internet access at build time to fetch the font files. This works automatically on any normal machine or on Vercel — it just can't be verified inside this sandboxed environment.

## Design system

**Palette** (`tailwind.config.ts`)

| Token | Hex | Use |
|---|---|---|
| `ink` | `#1E1D1B` | Deep charcoal — dark sections, headings |
| `paper` | `#FAF8F4` | Warm white — main background |
| `mist` | `#ECE8E1` | Soft grey — alternating section backgrounds |
| `stone` | `#A39A8D` | Muted stone — secondary text, borders |
| `slate` | `#4A4540` | Body copy on light backgrounds |
| `clay` | `#B6764A` | Warm accent — CTAs, highlights, "recommended" tags |

**Typography**

- Display: **Fraunces** — used for all headings, set with restraint (no all-caps, generous leading).
- Body / UI: **Inter** — body copy, navigation, buttons, labels.

**Signature element: `CornerMarks`**

Small L-shaped brackets (like crop marks on an architectural drawing) used on the hero comparison card, benefit cards and listing cards. They reinforce Buildify's core role — reviewing and assessing — without relying on stock photography. See `components/ui/CornerMarks.tsx`.

## Structure

```
app/
  layout.tsx       — fonts, global metadata, Header/Footer wrapper
  page.tsx         — homepage (assembles all sections + Organization schema)
  globals.css      — Tailwind layers + blueprint grid background
components/
  layout/          — Header (with mobile menu), Footer
  ui/              — Container, Button, SectionHeading, CornerMarks
  home/            — Hero, BrokerExplainer, Benefits, HowItWorks,
                      FeaturedBuilds, Testimonials, InvestorTeaser, FinalCta
lib/
  constants.ts     — nav links, footer links, region links
```

## Listings data (Find New Builds)

`FeaturedBuilds.tsx` currently renders placeholder opportunities. Per the
Trade Me compliance discussion, listings should come from Buildify's own
builder network rather than aggregated third-party data — Trade Me's
business rules explicitly prohibit using their listing data in
"data aggregation systems, price comparison services" or similar.

Recommended next step for the listings system:

- Add a `Listing` table (Postgres via Supabase/Neon + Prisma/Drizzle) using
  the schema agreed earlier (title, region, suburb, price, specs, images,
  builder, status, etc.).
- Build a simple authenticated `/admin` area (or a headless CMS like
  Sanity/Payload) for adding/editing listings and CSV bulk import.
- `/new-builds`, `/new-builds/[region]`, `/new-builds/[region]/[suburb]`
  and `/new-builds/listing/[slug]` all read from this same table — one
  data model, multiple SEO landing pages.

## Suggested build order for remaining pages

1. **How It Works** — reuses `SectionHeading`, `HowItWorks`-style numbered steps, `Button`.
2. **Find New Builds** — listing grid (reuse `FeaturedBuilds` card pattern) + filters (location, price, bedrooms, bathrooms, property type, keyword).
3. **Contact / Expression of Interest** — lead form (name, email, phone, budget, location, build type, timeline, notes) → API route → database + email notification.
4. **About**, **For Investors**, **Join the Team**, **Resources/Blog** — content pages using the same `SectionHeading` + section band pattern.
5. **Region/suburb SEO landing pages** under `/new-builds/[region]` and `/new-builds/[region]/[suburb]`.

## SEO notes

- Per-page `metadata` exports (see `app/page.tsx`) — give every page its
  own title and description targeting terms like "new build broker NZ",
  "compare builders NZ", "house and land packages [region]".
- Organization/ProfessionalService JSON-LD is included on the homepage;
  add `Article` schema to blog posts and `Product`/`RealEstateListing`-style
  structured data to individual listing pages once built.
- Region and suburb pages double as both user-facing search results and
  SEO landing pages — link to them from the footer (already wired up) and
  from relevant blog posts.
