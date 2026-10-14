import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Website development, UPI e-commerce, Google Ads, SEO and WhatsApp automation for Indian businesses, with prices in rupees.",
};

export default function Services() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="jaali jaali-fade pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h1 className="max-w-2xl text-4xl font-extrabold md:text-6xl">Services, priced in rupees</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            Clear starting prices, GST invoices and no surprise add-ons. Final quotes depend on scope; every project begins with a free call.
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-5 py-12">
        {services.map((s) => (
          <section key={s.slug} id={s.slug} className="grid gap-6 border-b border-line py-10 md:grid-cols-[1fr_1.2fr_.6fr] md:gap-10">
            <h2 className="text-2xl font-extrabold">{s.name}</h2>
            <div>
              <p className="text-ink-soft">{s.blurb}</p>
              <ul className="mt-4 space-y-2">
                {s.includes.map((i) => (
                  <li key={i} className="flex gap-3">
                    <svg viewBox="0 0 20 20" className="mt-1 h-5 w-5 shrink-0 text-brand" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                      <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:text-right">
              <p className="text-sm text-ink-soft">Starting at</p>
              <p className="font-display text-2xl font-extrabold text-brand">{s.from}</p>
              <Link href="/contact" className="btn btn-ghost mt-4">Ask about this</Link>
            </div>
          </section>
        ))}
      </div>
      <CtaBand />
    </>
  );
}
