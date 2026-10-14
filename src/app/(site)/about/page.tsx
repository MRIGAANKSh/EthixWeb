import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description: "Ethixweb builds websites and runs marketing for businesses worldwide. Now we are building for India too.",
};

const beliefs = [
  { t: "Mobile is the website", b: "For most Indian customers the phone is the only screen. We design there first and scale up." },
  { t: "Trust is visible", b: "GST number, Udyam registration, real addresses and reviews sit where customers look for them." },
  { t: "Language is respect", b: "Hindi and regional pages are written by people who speak them, then tested with real readers." },
  { t: "Privacy by default", b: "Consent flows and data handling designed with the Digital Personal Data Protection Act in mind." },
];

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="jaali jaali-fade pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h1 className="max-w-3xl text-4xl font-extrabold md:text-6xl">We built for the world from India. Now we are building for India.</h1>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2">
        <div className="space-y-5 text-lg text-ink-soft">
          <p>Ethixweb is a web development, Google Ads and digital marketing company that has worked with businesses in the United States from India.</p>
          <p>Along the way we kept noticing a gap. Indian founders, from Surat exporters to Lucknow D2C brands, were being sold sites designed for someone else&rsquo;s customers: card-first checkout, English-only copy, desktop-first layouts.</p>
          <p>This is our answer: the same engineering and design standards we bring to global clients, shaped around UPI, WhatsApp, regional languages and the phones your customers actually use.</p>
        </div>
        <div className="rounded-3xl bg-ink p-8 text-white">
          <p lang="hi" className="font-display text-3xl font-extrabold text-haldi">भरोसा पहले।</p>
          <p className="mt-2 text-white/75">Trust first. It is how business gets done here, and how we work: honest scopes, visible progress, and one phone number that always answers.</p>
          <dl className="mt-8 grid grid-cols-2 gap-6">
            <div><dt className="text-sm text-white/60">Support hours</dt><dd className="font-display text-xl font-bold">IST, Mon–Sat</dd></div>
            <div><dt className="text-sm text-white/60">Languages</dt><dd className="font-display text-xl font-bold">Hindi + English, more on request</dd></div>
          </dl>
        </div>
      </section>
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-3xl font-extrabold md:text-4xl">What we believe</h2>
          <dl className="mt-10 grid gap-8 md:grid-cols-2">
            {beliefs.map((x) => (
              <div key={x.t} className="border-l-4 border-brand pl-5">
                <dt className="text-xl font-bold">{x.t}</dt>
                <dd className="mt-1 text-ink-soft">{x.b}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
