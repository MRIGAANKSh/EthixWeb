# Ethixweb India

India-specific redesign of ethixweb.com. Full stack: premium marketing site, working enquiry pipeline into Supabase (PostgreSQL), and a protected `/admin` lead manager.

## Tech stack

- **Next.js 14** (App Router, TypeScript), **Tailwind CSS**
- **Supabase (PostgreSQL)** for leads, accessed server-side only with the service-role key
- **Zod** validation, **jose** signed-JWT admin sessions (httpOnly cookie)
- Fonts self-hosted via Fontsource (Bricolage Grotesque + Hind, which covers Devanagari)
- Zero animation libraries: CSS-only motion, CSS-only mobile menu

## Run locally

```bash
npm install
cp .env.example .env.local   # fill in values
# Supabase → SQL Editor → run supabase/schema.sql
npm run dev
```

## Deploy (Vercel)

1. Push to GitHub (`.env*` is git-ignored).
2. Import the repo in Vercel; add every variable from `.env.example` in Project → Settings → Environment Variables.
3. Redeploy. Then run PageSpeed Insights on the live URL (mobile + desktop) and save screenshots.

## API

| Route | Method | Auth | Purpose |
|---|---|---|---|
| `/api/enquiry` | POST | public | Validate and save a lead |
| `/api/admin/login` | POST | public | Password → session cookie (rate limited) |
| `/api/admin/logout` | POST | session | Clear cookie |
| `/api/admin/leads` | GET | session | List leads |
| `/api/admin/leads/:id` | PATCH / DELETE | session | Update status/notes, delete |

`src/middleware.ts` blocks every `/admin/*` and `/api/admin/*` request without a valid signed session.

## Security and spam protection

- Honeypot field (bots get a fake success and nothing is stored)
- Time trap: submissions under 2.5 s after page load are rejected
- DB-backed rate limit: max 3 enquiries per hashed IP per 10 minutes (works across serverless instances)
- Link-count limit in messages, server-side Zod validation (Indian mobile format), length caps
- Row Level Security enabled with no policies, so the public key can never read leads
- Constant-time password comparison, login throttling, `SameSite=Strict` httpOnly cookie, security headers
- All secrets in environment variables

## Design rationale

**What makes it India-specific**

- **Payment and contact habits:** the hero shows a Hindi storefront with "UPI से भुगतान करें"; services cover UPI/Razorpay, COD, EMI, GST invoices, pincode serviceability, and WhatsApp as the primary channel. Every page has WhatsApp CTAs.
- **Language:** a Hindi tagline in the hero and Devanagari-capable typography (Hind) so regional-language pages are a content task, not a redesign.
- **Visual language:** a *jaali*-inspired geometric lattice (traditional Indian screen pattern) as a quiet texture in the hero and footers; turmeric (haldi) accent beside the Ethixweb red; deep indigo ink.
- **Commercial fit:** prices in ₹ with Indian number formatting, budgets in ₹, mobile numbers validated as Indian 10-digit, timestamps shown in IST, support hours in IST, DPDP Act-aware messaging.
- **Performance for real conditions:** built for mid-range Android on 4G: ~94 kB first-load JS on pages, no animation libraries, self-hosted fonts, static rendering.
- **Story:** the About page frames Ethixweb as a team that served global clients from India and is now building for home.

**Why these choices**

Indian SMB buyers decide on trust and convenience: seeing UPI, WhatsApp and their language signals "built for me". The lattice and haldi accent add an Indian identity without costume clichés, and the red brand stays dominant.

**Improvements over the current site**

- Targets Indian buyers (rupee pricing, UPI, WhatsApp, Hindi) rather than US businesses
- A real lead pipeline: validated, spam-protected, stored in Postgres, managed in `/admin` (status, notes, search, CSV export)
- Mobile-first layout, keyboard focus states, skip link, reduced-motion support
- Lighter pages: static rendering, no heavy JS, one orchestrated entrance animation instead of scattered effects

## Content notes

Featured-work projects, prices, and contact details are illustrative placeholders; replace them in `src/lib/content.ts` (and set contact env vars) before production use. Swap the text wordmark in `src/components/Logo.tsx` for the official Ethixweb logo SVG.
