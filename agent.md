# AGENTS.md — Ethixweb India (finish & ship)

## Goal
Finish and deploy the India-specific Ethixweb redesign for the Full Stack Developer assessment. Judged on: Design & India fit 30%, UI/UX 20%, Backend & code 20%, PageSpeed 90+ (mobile AND desktop) 20%, polish 10%. Hard deadline: 24h from brief. Submit at https://tally.so/r/KY7Ao8.

## Stack (do not change)
Next.js 14 App Router + TypeScript + Tailwind 3. Supabase Postgres (server-side, service-role key). Zod validation. jose JWT admin session. Fonts via Fontsource. CSS-only motion.

## Map
- `src/app/(site)/` — public pages (home, services, about, contact) + Header/Footer layout
- `src/app/admin/` — login + leads dashboard (client components, noindex)
- `src/app/api/enquiry` — public POST (honeypot, time trap, DB rate limit, Zod)
- `src/app/api/admin/*` — login, logout, leads GET, leads/[id] PATCH/DELETE
- `src/middleware.ts` — guards `/admin/*` and `/api/admin/*`
- `src/lib/content.ts` — ALL copy, prices, projects, contact details
- `src/lib/validation.ts` — schemas, service/budget options, statuses
- `supabase/schema.sql` — table + RLS (no policies)
- `src/app/globals.css`, `tailwind.config.ts` — tokens (brand red #C4222B, ink #1A1740, haldi #F4B223, mist #F6F5FA), jaali pattern, buttons

## Remaining tasks (in order)
1. `npm i`; create `.env.local` from `.env.example`. Never commit it.
2. Run `supabase/schema.sql` in the Supabase project. Verify: submit form on `/contact` → row appears; `/admin` login → lead visible → change status, add note, delete, export CSV all work.
3. Replace placeholders in `src/lib/content.ts`: real contact email, WhatsApp number (env), featured projects, prices. Keep rupee formatting (₹1,50,000 style). No lorem ipsum.
4. Replace text wordmark in `src/components/Logo.tsx` with the official Ethixweb logo (inline SVG, red). Update `src/app/icon.svg` to match.
5. Fix validation message: `message` empty shows "Required" — add `required_error` for all fields in `src/lib/validation.ts` (plain, specific copy).
6. Add `src/app/sitemap.ts`, `src/app/robots.ts` (disallow `/admin`, `/api`), and an OG image (`opengraph-image.tsx` or static PNG < 100 kB).
7. Browser QA at 360px, 768px, 1280px: no horizontal scroll, tap targets ≥ 44px, no console errors/warnings, no broken links (header, footer, CTAs, WhatsApp, mailto). Keyboard: tab order, visible focus, skip link, mobile `<details>` menu.
8. Accessibility: contrast ≥ 4.5:1 (check white on `brand`, `ink-soft` on `mist`, haldi buttons), labels on every input, `aria-live`/role alerts on form errors.
9. Deploy to Vercel. Add all env vars from `.env.example` in Vercel. Set `NEXT_PUBLIC_SITE_URL` to the live URL. Redeploy.
10. PageSpeed Insights on the LIVE URL, mobile and desktop, for `/`, `/services`, `/contact`. Target ≥ 90 on all four categories where possible; Performance ≥ 90 is mandatory. If below: check LCP element (hero h1/phone mock), font loading (limit Hind weights, `font-display: swap`), unused JS, image sizes, layout shift. Save screenshots to `docs/pagespeed-mobile.png` and `docs/pagespeed-desktop.png`.
11. README: add live URL, repo URL, demo admin credentials section, PageSpeed screenshots. Keep the Design rationale section accurate to what shipped.
12. Create a throwaway demo admin password (not reused anywhere) and put it in the Tally submission only, not in git.

## Rules
- Secrets only in env vars. Never log or commit keys, passwords or the service-role key. `SUPABASE_*` must never be `NEXT_PUBLIC_*`.
- Do not add animation or UI libraries (framer-motion, GSAP, MUI, etc.). Motion stays CSS-only and respects `prefers-reduced-motion`.
- Keep pages statically rendered; keep client components limited to `EnquiryForm` and admin pages.
- Every API route returns JSON `{ error }` with correct status codes; never leak stack traces.
- Do not weaken spam protection, RLS, or middleware. Do not expose lead data on any public route.
- Design: one memorable moment (hero), restrained elsewhere. No stock-template look, no gradient-wash decoration, no extra eyebrow labels. Keep the Ethixweb red dominant; haldi is an accent only.
- Copy: plain, specific, sentence case. CTAs say what happens ("Get my free audit"). Errors say what's wrong and how to fix it.
- Keep it explainable: the author must justify every design and code choice in an interview. Prefer simple, readable code with brief comments on non-obvious decisions (spam layers, auth).

## Definition of done
- [ ] Live URL works on mobile and desktop, no console errors
- [ ] Enquiry form saves to Supabase; spam layers verified (honeypot, <2.5s, >3 per 10 min → 429)
- [ ] `/admin` blocked when logged out (redirect / 401); full lead management works
- [ ] PageSpeed Performance ≥ 90 mobile and desktop (screenshots saved)
- [ ] Public GitHub repo, no secrets in history (`git log -p | grep -i service_role` is empty)
- [ ] README complete (stack, rationale, live URL, admin demo note)
- [ ] Submitted on Tally with: live URL, repo, README, PSI screenshots, demo admin login, optional 1–2 min walkthrough video