# Ethixweb India

India-specific redesign of ethixweb.com. Full stack: premium marketing site, a working enquiry pipeline into Supabase (PostgreSQL), and a protected `/admin` lead manager.

## Submission

| Item | Link / detail |
|---|---|
| Live URL | https://ethix-web-lake.vercel.app/ |
| Public GitHub repo | https://github.com/<your-username>/<repo-name> |
| Admin panel | https://ethix-web-lake.vercel.app/admin |
| Demo admin login | Password: `admin@123` |
| PageSpeed (mobile) | `docs/pagespeed-mobile.png` |
| PageSpeed (desktop) | `docs/pagespeed-desktop.png` |
| Walkthrough video | <video link, optional> |

### Admin access
1. Open https://ethix-web-lake.vercel.app/admin. You are redirected to `/admin/login` if not signed in.
2. Enter the demo password above.
3. You can view leads, change status (new, contacted, qualified, won, lost), add notes, search, delete, and export CSV.

`/admin` and `/api/admin/*` are blocked for anyone without a valid signed session cookie. The demo password is for evaluation only and will be changed after review.

To test the full flow: submit the form at `/contact`, then check the lead in `/admin`.

## Tech stack

- **Next.js 14** (App Router, TypeScript), **Tailwind CSS**
- **Supabase (PostgreSQL)** for leads, accessed server-side only with the service-role key
- **Zod** validation, **jose** signed-JWT admin sessions (httpOnly cookie)
- Fonts self-hosted at build time (Bricolage Grotesque + Hind, which covers Devanagari)
- Zero animation libraries: CSS-only motion and a CSS-only mobile menu
- Deployed on **Vercel**

## Run locally

```bash
npm install
cp .env.example .env.local   # fill in values
# Supabase → SQL Editor → run supabase/schema.sql
npm run dev
```

Environment variables (see `.env.example`): `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET` (32+ chars), `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_SITE_URL`. Secrets are never committed.

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
- Constant-time password comparison, login throttling (5 attempts per 15 minutes), `SameSite=Strict` httpOnly cookie, security headers
- All secrets in environment variables

## Design rationale

**What makes it India-specific**

- **Payment and contact habits:** the hero shows a Hindi storefront with "UPI से भुगतान करें"; services cover UPI/Razorpay, COD, EMI, GST invoices, pincode serviceability, and WhatsApp as the primary channel. Every page has WhatsApp CTAs.
- **Language:** a Hindi tagline in the hero and Devanagari-capable typography (Hind), so regional-language pages are a content task, not a redesign.
- **Visual language:** a *jaali*-inspired geometric lattice (traditional Indian screen pattern) as a quiet texture in the hero and footers; a turmeric (haldi) accent beside the Ethixweb red; deep indigo ink.
- **Commercial fit:** prices in ₹ with Indian number formatting, budgets in ₹, mobile numbers validated as Indian 10-digit, timestamps in IST, support hours in IST, DPDP Act-aware messaging.
- **Performance for real conditions:** built for mid-range Android on 4G: statically rendered pages, no animation libraries, self-hosted fonts, CSS-only motion.
- **Story:** the About page frames Ethixweb as a team that served global clients from India and is now building for home.

**Why these choices**

Indian SMB buyers decide on trust and convenience: seeing UPI, WhatsApp and their own language signals "built for me". The lattice and haldi accent add an Indian identity without costume clichés, and the Ethixweb red stays dominant.

**Improvements over the current site**

- Targets Indian buyers (rupee pricing, UPI, WhatsApp, Hindi) rather than US businesses
- A real lead pipeline: validated, spam-protected, stored in Postgres, managed in `/admin` (status, notes, search, CSV export)
- Mobile-first layout, keyboard focus states, skip link, reduced-motion support
- Lighter pages: static rendering, minimal JavaScript, one entrance animation instead of scattered effects

## Content notes

Featured-work projects and prices are illustrative sample content for this assessment. They are defined in `src/lib/content.ts`.