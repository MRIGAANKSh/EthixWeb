
"use client";

import Link from "next/link";
import { useState } from "react";

type Project = {
  number: string;
  name: string;
  category: string;
  type: string;
  headline: string;
  description: string;
  services: string[];
  mark: string;
  gradient: string;
};

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

type ProjectPreviewProps = {
  mark: string;
  gradient: string;
};

const projects: Project[] = [
  {
    number: "01",
    name: "Home Services",
    category: "Web Design",
    type: "Lead Generation",
    headline: "Turn local searches into real enquiries.",
    description:
      "A conversion-focused website concept for service businesses that need to build trust, showcase their services and make contacting them effortless.",
    services: ["Responsive design", "Local SEO", "WhatsApp enquiries"],
    mark: "HS",
    gradient: "from-orange-100 via-rose-50 to-white",
  },
  {
    number: "02",
    name: "D2C E-commerce",
    category: "E-commerce",
    type: "Online Store",
    headline: "Make every shopping journey simpler.",
    description:
      "An e-commerce concept focused on product discovery, mobile shopping and familiar Indian payment experiences.",
    services: [
      "Product-led design",
      "UPI-ready checkout",
      "Mobile optimisation",
    ],
    mark: "D2",
    gradient: "from-amber-100 via-yellow-50 to-white",
  },
  {
    number: "03",
    name: "Professional Services",
    category: "Web Design",
    type: "Business Website",
    headline: "Turn expertise into customer confidence.",
    description:
      "A polished digital presence for consultants and professional firms, with clear service information and straightforward enquiry paths.",
    services: ["Brand-led interface", "Service pages", "Contact forms"],
    mark: "PS",
    gradient: "from-sky-100 via-blue-50 to-white",
  },
  {
    number: "04",
    name: "Hospitality & Travel",
    category: "UX Design",
    type: "Booking Journey",
    headline: "Make the next booking feel effortless.",
    description:
      "A responsive experience that helps customers explore destinations, understand experiences and enquire about bookings.",
    services: [
      "Responsive UX",
      "Experience-led content",
      "Booking enquiries",
    ],
    mark: "HT",
    gradient: "from-emerald-100 via-teal-50 to-white",
  },
];

const process: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your audience, business goals and the problems worth solving.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Create a clear, accessible experience that feels right for your brand.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop a responsive, performance-conscious website with a solid foundation.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Use feedback and meaningful data to find opportunities for growth.",
  },
];

const filters = ["All", "Web Design", "E-commerce", "UX Design"];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path
        d="M4.5 15.5 15 5m0 0H6m9 0v9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectPreview({ mark, gradient }: ProjectPreviewProps) {
  return (
    <div
      className={`relative flex min-h-[230px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} p-5 sm:min-h-[280px] sm:p-6`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full border border-black/[0.07]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-12 h-56 w-56 rounded-full border border-black/[0.07]"
      />

      <div className="relative w-full max-w-sm rotate-[-2deg] rounded-xl border border-black/[0.07] bg-white p-4 shadow-xl shadow-black/10 transition duration-300 group-hover:rotate-0 group-hover:scale-[1.02] sm:p-5">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#D71920] text-[10px] font-bold text-white">
              {mark}
            </span>
            <span className="h-2 w-20 rounded-full bg-gray-200" />
          </div>
          <span className="h-2 w-10 rounded-full bg-gray-100" />
        </div>

        <div className="grid grid-cols-[1.1fr_.9fr] gap-4 py-5">
          <div className="flex flex-col justify-center">
            <span className="h-2 w-12 rounded-full bg-red-100" />
            <span className="mt-3 h-3 w-full rounded-full bg-gray-800" />
            <span className="mt-2 h-3 w-4/5 rounded-full bg-gray-300" />
            <span className="mt-2 h-2 w-full rounded-full bg-gray-100" />
            <span className="mt-1.5 h-2 w-3/4 rounded-full bg-gray-100" />
            <span className="mt-4 h-7 w-24 rounded-full bg-[#D71920]" />
          </div>

          <div className="flex min-h-32 items-center justify-center rounded-lg bg-gradient-to-br from-gray-100 to-gray-200">
            <span className="text-4xl font-black tracking-tight text-gray-300">
              {mark}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 border-t border-gray-100 pt-3">
          <span className="h-8 rounded-md bg-gray-50" />
          <span className="h-8 rounded-md bg-gray-50" />
          <span className="h-8 rounded-md bg-gray-50" />
        </div>
      </div>

      <span className="absolute bottom-4 right-4 rounded-full border border-black/5 bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-600 backdrop-blur">
        Concept project
      </span>
    </div>
  );
}

export default function OurWorkPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          className="jaali jaali-fade pointer-events-none absolute inset-0"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24 lg:px-12">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-brand">
            Our work / Selected projects
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-7xl">
            We build digital
            <br />
            <span className="text-brand">experiences that matter.</span>
          </h1>

          <div className="mt-7 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-2xl text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
              From ambitious local businesses to growing brands, we create
              thoughtful websites and digital experiences built around real
              business needs. Explore the challenges we help solve.
            </p>

            <div className="flex shrink-0 flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Start a project <ArrowIcon />
              </Link>
              <a href="#case-studies" className="btn btn-ghost">
                Explore projects
              </a>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 border-t border-line pt-6 sm:grid-cols-4 sm:gap-6">
            {[
              "Understand the challenge",
              "Design with purpose",
              "Build for real users",
              "Improve over time",
            ].map((item, index) => (
              <div key={item}>
                <p className="text-sm font-bold text-brand">
                  0{index + 1}
                </p>
                <p className="mt-2 text-sm font-medium text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="case-studies"
        className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20 lg:px-12"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
              Selected work
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Good design starts with a real problem.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-ink-soft">
            Every project starts by understanding the audience, the business
            and the action the experience should make easier.
          </p>
        </div>

        {/* Functional category filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-brand bg-brand text-white"
                    : "border-line bg-white text-ink-soft hover:border-brand hover:text-brand"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-7">
          {visibleProjects.map((project) => (
            <article key={project.number} className="group min-w-0">
              <ProjectPreview
                mark={project.mark}
                gradient={project.gradient}
              />

              <div className="flex flex-wrap items-center justify-between gap-3 pt-5">
                <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600">
                  {project.category}
                </span>
                <span className="text-xs font-medium text-ink-soft">
                  2026 · {project.type}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-extrabold tracking-tight">
                {project.name}
              </h3>

              <p className="mt-2 text-lg font-semibold text-brand">
                {project.headline}
              </p>

              <p className="mt-3 text-sm leading-7 text-ink-soft">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <li
                    key={service}
                    className="rounded-md border border-line px-2.5 py-1.5 text-xs text-ink-soft"
                  >
                    {service}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-ink transition-colors hover:text-brand"
              >
                Discuss a similar project <ArrowIcon />
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-8 rounded-xl border border-line bg-gray-50 p-4 text-xs leading-6 text-ink-soft">
          Portfolio note: These are illustrative project concepts, not claims
          of completed client engagements or verified business results.
        </p>
      </section>

      {/* Process */}
      <section className="border-y border-line bg-[#FAF8F5]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
              How we work
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Not just a launch. A better way to grow.
            </h2>
            <p className="mt-4 leading-7 text-ink-soft">
              Your website should do more than look good. It should help
              customers understand your offer, trust your business and take
              the next step.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-line bg-white p-6"
              >
                <span className="text-sm font-bold text-brand">
                  {step.number}
                </span>
                <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-soft">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-[#171717] px-6 py-10 text-white sm:px-10 sm:py-14 md:px-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-5 -top-9 h-52 w-52 rounded-full border border-white/10"
          />

          <div className="relative max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-300">
              Your project starts here
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Let’s create your next success story.
            </h2>
            <p className="mt-5 leading-7 text-white/70">
              Tell us what you are building, what is not working and where
              you want to go next. We’ll help you find a practical way forward.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Start a project <ArrowIcon />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore services <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
