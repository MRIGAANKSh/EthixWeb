# Ethixweb India

An India-specific redesign of [Ethixweb](https://www.ethixweb.com/), featuring a premium, responsive marketing website, a working Supabase enquiry pipeline, and a protected admin dashboard for lead management.

## Submission

| Requirement | Link / Details |
|---|---|
| **Live Website** | [https://ethix-web-lake.vercel.app/](https://ethix-web-lake.vercel.app/) |
| **Public GitHub Repository** | [Add your public repository URL](https://github.com/) |
| **README & Design Rationale** | This repository's README |
| **PageSpeed Insights — Mobile** | [View screenshot](docs/mobile.png) |
| **PageSpeed Insights — Desktop** | [View screenshot](docs/laptop.png) |
| **Demo Admin Dashboard** | [Open Admin Panel](https://ethix-web-lake.vercel.app/admin) |
| **Demo Admin Email** | `admin@ethixweb.com` |
| **Demo Admin Password** | `admin@123` |


## Demo Instructions

**Admin Dashboard:** [https://ethix-web-lake.vercel.app/admin](https://ethix-web-lake.vercel.app/admin)

1. Open the admin panel. You will be redirected to the login page if you are not authenticated.
2. Enter the demo password provided above.
3. View and search enquiries, update lead statuses, add notes, delete leads, and export leads to CSV.
4. To test the complete enquiry flow, submit a test enquiry through the [Contact Page](https://ethix-web-lake.vercel.app/contact) and verify that it appears in the admin dashboard.

The demo credentials are provided exclusively for assessment purposes. The admin dashboard and administrative API routes require a valid signed session.

## Project Overview

Ethixweb India adapts the original website for Indian businesses through locally relevant content, mobile-first design, INR-based pricing, UPI payment integrations, WhatsApp communication, and a backend designed to handle enquiries securely.

### Key Features

- Premium, responsive Home, Services, About, Industries, and Contact pages.
- Enquiry form with server-side validation and persistent Supabase PostgreSQL storage.
- Protected admin dashboard with lead search, status management, notes, deletion, and CSV export.
- Spam protection using a honeypot, submission-time checks, and database-backed rate limiting.
- Environment-based configuration for secrets and deployment settings.
- Performance-conscious implementation with self-hosted fonts, minimal JavaScript, and responsive layouts.

## Technology Stack

- **Frontend:** Next.js 14 App Router, TypeScript, Tailwind CSS.
- **Database:** Supabase PostgreSQL, accessed server-side using the service-role key.
- **Validation:** Zod.
- **Authentication:** Signed JWT sessions using `jose`, stored in an HTTP-only cookie.
- **Deployment:** Vercel.
- **Performance:** Static rendering where appropriate, self-hosted fonts, and CSS-based interactions.

## Security

- Administrative routes require a valid signed session.
- Enquiry input is validated on the server before database insertion.
- Spam protection and rate limiting help reduce automated submissions.
- Database Row Level Security is enabled, with no public policies granting access to leads.
- Credentials and secrets are configured through environment variables and excluded from version control.

## Design Rationale

### What Makes It India-Specific?

- **Payments and communication:** UPI, Razorpay, cash-on-delivery considerations, GST invoices, and WhatsApp-focused customer journeys.
- **Language:** Hindi messaging and Devanagari-capable typography.
- **Visual identity:** Ethixweb red, deep indigo, turmeric-inspired accents, and a subtle jaali-inspired geometric texture.
- **Commercial relevance:** INR pricing, Indian mobile-number validation, IST timestamps, and locally relevant service offerings.
- **Accessibility and performance:** Mobile-first layouts, keyboard focus states, reduced-motion support, and lightweight page interactions.

### Improvements Over the Original Website

- Repositions the offering for Indian startups, SMEs, D2C brands, and local businesses.
- Adds locally relevant payment, communication, and business requirements.
- Implements a persistent lead-management workflow instead of relying solely on a contact form.
- Provides a protected admin interface for managing enquiries.
- Prioritises responsive design, accessibility, performance, and maintainable code.

## Run Locally

Requirements: Node.js and a Supabase project.

```bash
npm install
cp .env.example .env.local
```

Configure the required environment variables, then run `supabase/schema.sql` in the Supabase SQL Editor.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

See `.env.example` for the required configuration:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_PASSWORD`
- `ADMIN_SESSION_SECRET`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_SITE_URL`

Never commit `.env.local` or expose the Supabase service-role key in client-side code.

## API Routes

| Route | Method | Access | Purpose |
|---|---|---|---|
| `/api/enquiry` | POST | Public, rate-limited | Validate and save enquiries |
| `/api/admin/login` | POST | Public, rate-limited | Authenticate the admin |
| `/api/admin/logout` | POST | Authenticated | End the admin session |
| `/api/admin/leads` | GET | Authenticated | Retrieve leads |
| `/api/admin/leads/:id` | PATCH | Authenticated | Update lead status and notes |
| `/api/admin/leads/:id` | DELETE | Authenticated | Delete a lead |

## Content Disclaimer

Featured projects, performance metrics, and service prices are illustrative sample content created for this assessment unless explicitly identified as verified results. They should not be interpreted as independently verified client outcomes.

---

**Built as a full-stack developer assessment submission for Ethixweb India.**