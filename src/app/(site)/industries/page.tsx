
import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Industries We Serve | Ethixweb India",
  description:
    "Digital solutions for Indian home service businesses, D2C brands, hospitality, travel and growing local businesses. Websites, automation, SEO and booking systems.",
};

const industries = [
  {
    number: "01",
    eyebrow: "HOME SERVICES",
    title: "You handle the work. We help bring in the customers.",
    description:
      "From plumbers and electricians to interior designers and home renovation companies, we build digital experiences that turn local searches into genuine enquiries.",
    problem:
      "Customers often contact the first business that responds. A slow website or missed enquiry can mean a lost opportunity.",
    services: [
      "Conversion-focused websites",
      "Google Business Profile and local SEO",
      "WhatsApp enquiry automation",
      "Lead management and CRM integration",
    ],
    outcomes: [
      "Make it easier for customers to contact you",
      "Build trust with reviews and a professional online presence",
      "Keep enquiries organised from first contact to follow-up",
    ],
    icon: "home",
    accent: "bg-red-50",
  },
  {
    number: "02",
    eyebrow: "D2C & E-COMMERCE",
    title: "Turn your brand into a better shopping experience.",
    description:
      "For ambitious Indian consumer brands, we create online stores that showcase products beautifully and make purchasing straightforward across devices.",
    problem:
      "A confusing checkout, slow mobile experience or unclear product information can make interested shoppers abandon their purchase.",
    services: [
      "Shopify and custom storefronts",
      "UPI, cards and Indian payment gateway integration",
      "Product catalogue and inventory integrations",
      "Analytics, SEO and conversion optimisation",
    ],
    outcomes: [
      "Deliver a smooth mobile-first shopping experience",
      "Support familiar Indian payment methods",
      "Understand customer journeys and improve conversion",
    ],
    icon: "cart",
    accent: "bg-orange-50",
  },
  {
    number: "03",
    eyebrow: "HOSPITALITY & TRAVEL",
    title: "Make discovering and booking your business effortless.",
    description:
      "For hotels, homestays, tour operators and experience-led businesses, we build digital journeys that help customers discover your offering and make enquiries or reservations.",
    problem:
      "Scattered booking information and slow enquiry responses create friction when customers are ready to plan a trip or reserve a stay.",
    services: [
      "Booking-focused websites",
      "Reservation and enquiry integrations",
      "Local destination SEO",
      "Automated confirmations and follow-ups",
    ],
    outcomes: [
      "Present your property or experience with confidence",
      "Make availability and booking information easy to find",
      "Simplify customer communication",
    ],
    icon: "travel",
    accent: "bg-amber-50",
  },
  {
    number: "04",
    eyebrow: "LOCAL & PROFESSIONAL BUSINESSES",
    title: "Give your expertise the digital presence it deserves.",
    description:
      "From consultancies and agencies to clinics, education providers and professional services, we help Indian businesses build credibility and generate better enquiries online.",
    problem:
      "Potential customers may struggle to understand your services, compare your offering or know how to take the next step.",
    services: [
      "Brand-led business websites",
      "Service pages and enquiry funnels",
      "Local SEO and content strategy",
      "CRM and workflow automation",
    ],
    outcomes: [
      "Communicate your value clearly",
      "Build confidence before the first conversation",
      "Reduce repetitive administrative work",
    ],
    icon: "building",
    accent: "bg-rose-50",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Websites that convert",
    description:
      "Fast, responsive websites designed around your customers, services and business goals.",
  },
  {
    number: "02",
    title: "Local discovery",
    description:
      "SEO foundations and business profiles that help relevant customers discover your business.",
  },
  {
    number: "03",
    title: "Automation that helps",
    description:
      "Connect enquiries, WhatsApp workflows, forms and CRM tools to reduce repetitive tasks.",
  },
  {
    number: "04",
    title: "Systems that scale",
    description:
      "Integrations and digital infrastructure that can grow with your operations.",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="M4.5 10h11m-4.5-4.5L15.5 10 11 14.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="mt-0.5 h-5 w-5 shrink-0 text-brand"
    >
      <path
        d="m4 10 4 4 8-8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IndustryIcon({ type }: { type: string }) {
  const common = {
    className: "h-7 w-7",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (type) {
    case "home":
      return (
        <svg {...common}>
          <path d="m3 10 9-7 9 7" />
          <path d="M5 9v12h14V9M9 21v-7h6v7" />
        </svg>
      );
    case "cart":
      return (
        <svg {...common}>
          <path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h8.5a2 2 0 0 0 2-1.6L21 8H6" />
          <circle cx="10" cy="20" r="1" />
          <circle cx="18" cy="20" r="1" />
        </svg>
      );
    case "travel":
      return (
        <svg {...common}>
          <path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="17" rx="2" />
          <path d="M9 21v-5h6v5M8 8h.01M12 8h.01M16 8h.01M8 12h.01M12 12h.01M16 12h.01" />
        </svg>
      );
  }
}

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-line bg-[#faf9f7]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-28 -z-10 h-[420px] w-[420px] rounded-full bg-red-100/60 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-48 -left-32 -z-10 h-[360px] w-[360px] rounded-full bg-orange-100/50 blur-3xl"
        />

        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.2fr_.8fr] lg:items-center lg:gap-16 lg:px-12 lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-200 bg-white/80 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
              <span className="h-2 w-2 rounded-full bg-brand" />
              Industries we serve
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] text-ink sm:text-5xl lg:text-7xl">
              Built for the businesses{" "}
              <span className="text-brand">building India.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-ink-soft sm:text-lg">
              Different industries. Different challenges. One goal: help your
              business get discovered, win customer trust and turn digital
              opportunities into meaningful growth.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="btn btn-primary inline-flex items-center justify-center gap-2"
              >
                Book a consultation <ArrowIcon />
              </Link>
              <a
                href="#industries"
                className="btn btn-ghost inline-flex items-center justify-center gap-2"
              >
                Find your industry
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-soft">
              <span className="inline-flex items-center gap-2">
                <CheckIcon /> Mobile-first experiences
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckIcon /> Built for Indian customers
              </span>
            </div>
          </div>

          {/* Industry overview panel */}
          <div className="relative">
            <div className="rounded-[28px] border border-black/[0.06] bg-white p-5 shadow-[0_24px_80px_-35px_rgba(30,20,20,0.22)] sm:p-7">
              <div className="flex items-center justify-between border-b border-line pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
                    What we help you do
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-ink">
                    Better digital foundations.
                  </h2>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-brand">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M4 17 10 11l4 4 6-8" />
                    <path d="M14 7h6v6" />
                  </svg>
                </span>
              </div>

              <div className="space-y-1 pt-3">
                {[
                  ["Web", "A stronger online presence"],
                  ["Discover", "More relevant search visibility"],
                  ["Connect", "Simpler customer enquiries"],
                  ["Automate", "Less repetitive manual work"],
                ].map(([label, description], index) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 rounded-2xl px-3 py-4 transition-colors hover:bg-[#faf9f7]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f5f2ef] text-sm font-bold text-ink">
                      0{index + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-ink">{label}</p>
                      <p className="mt-1 text-sm text-ink-soft">
                        {description}
                      </p>
                    </div>
                    <span className="text-brand">
                      <ArrowIcon />
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-3 rounded-2xl bg-[#211d20] p-5 text-white sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                  Your business. Your goals.
                </p>
                <p className="mt-2 text-lg font-semibold leading-7">
                  Digital solutions shaped around the way you work.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white transition-opacity hover:opacity-75"
                >
                  Let's talk <ArrowIcon />
                </Link>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 -z-10 h-24 w-24 rounded-3xl border border-red-200 sm:-right-5 sm:-top-5"
            />
          </div>
        </div>
      </section>

      {/* Industry directory */}
      <section id="industries" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                Find your industry
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Your industry has its own challenges. Your solution should too.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-ink-soft">
              Explore the areas we support and discover how the right digital
              tools can fit your day-to-day operations.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:gap-5">
            {industries.map((industry) => (
              <a
                key={industry.number}
                href={`#${industry.number}`}
                className="group rounded-[24px] border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_20px_55px_-35px_rgba(160,20,30,0.3)] sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${industry.accent} text-brand`}
                  >
                    <IndustryIcon type={industry.icon} />
                  </span>
                  <span className="text-sm font-semibold text-ink-soft">
                    {industry.number}
                  </span>
                </div>

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
                  {industry.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-bold leading-snug tracking-tight text-ink">
                  {industry.title}
                </h3>
                <p className="mt-4 leading-7 text-ink-soft">
                  {industry.description}
                </p>

                <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors group-hover:text-brand">
                  Explore solutions
                  <ArrowIcon />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed industry sections */}
      {industries.map((industry, index) => (
        <section
          key={industry.number}
          id={industry.number}
          className={`scroll-mt-24 border-t border-line ${
            index % 2 === 0 ? "bg-[#faf9f7]" : "bg-white"
          }`}
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[.85fr_1.15fr] lg:gap-20 lg:px-12 lg:py-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                {industry.number} / {industry.eyebrow}
              </p>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
                {industry.title}
              </h2>

              <p className="mt-5 leading-8 text-ink-soft">
                {industry.description}
              </p>

              <div className="mt-8 rounded-2xl border border-line bg-white p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
                  The challenge
                </p>
                <p className="mt-3 leading-7 text-ink-soft">
                  {industry.problem}
                </p>
              </div>

              <Link
                href="/contact"
                className="btn btn-primary mt-7 inline-flex items-center gap-2"
              >
                Discuss your business <ArrowIcon />
              </Link>
            </div>

            <div className="space-y-7">
              <div className="rounded-[24px] border border-line bg-white p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-soft">
                  What we can help with
                </p>

                <div className="mt-5 space-y-4">
                  {industry.services.map((service) => (
                    <div key={service} className="flex gap-3">
                      <CheckIcon />
                      <p className="font-medium leading-6 text-ink">
                        {service}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] bg-[#211d20] p-6 text-white sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">
                  What we're working towards
                </p>
                <div className="mt-5 space-y-4">
                  {industry.outcomes.map((outcome) => (
                    <div key={outcome} className="flex gap-3">
                      <span className="mt-1 text-red-400">
                        <CheckIcon />
                      </span>
                      <p className="leading-7 text-white/85">{outcome}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-6 text-white/55">
                  Every engagement is scoped around your requirements,
                  available tools and business goals.
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Shared capabilities */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
              The foundation
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Different industries. A shared commitment to better digital
              experiences.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => (
              <div
                key={capability.number}
                className="rounded-2xl border border-line p-6 transition-colors hover:border-red-200"
              >
                <p className="text-sm font-bold text-brand">
                  {capability.number}
                </p>
                <h3 className="mt-5 text-lg font-bold text-ink">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink-soft">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-brand px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border border-white/15 sm:h-96 sm:w-96"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-4 -top-12 h-56 w-56 rounded-full border border-white/10 sm:h-72 sm:w-72"
          />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                Let's build what's next
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Which industry are you in?
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-white/80 sm:text-lg sm:leading-8">
                Tell us about your business, the challenges you're facing and
                where you want to go. We'll discuss a practical digital plan
                tailored to your needs.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-brand transition-colors hover:bg-red-50"
              >
                Book a consultation <ArrowIcon />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore our services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
