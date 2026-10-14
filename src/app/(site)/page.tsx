import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import { indiaPoints, steps, services, why, work } from "@/lib/content";

function PhoneMock() {
  return (
    <div className="float mx-auto w-[260px] rounded-[2.2rem] border-[6px] border-ink bg-white p-3 shadow-2xl" aria-hidden>
      <div className="rounded-2xl bg-brand px-3 py-2 text-sm font-semibold text-white">Nirmala Ayurveda</div>
      <div className="mt-3 flex h-28 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1F6B4F] to-[#0E3B2B] font-display text-lg font-bold text-white">
        त्रिफला चूर्ण
      </div>
      <div className="mt-3 flex items-end justify-between">
        <div>
          <p className="text-sm font-semibold">Triphala Churna, 200 g</p>
          <p className="text-xs text-ink-soft">मुफ़्त डिलीवरी · 2–4 दिन</p>
        </div>
        <p className="font-display text-xl font-extrabold">₹349</p>
      </div>
      <div className="mt-3 rounded-full bg-haldi py-3 text-center text-sm font-bold">UPI से भुगतान करें</div>
      <div className="mt-3 flex flex-wrap justify-center gap-1.5 text-[11px] font-medium text-ink-soft">
        {["UPI", "Cards", "NetBanking", "COD"].map((p) => (
          <span key={p} className="rounded-full border border-line px-2 py-0.5">{p}</span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="jaali jaali-fade pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 md:grid-cols-[1.25fr_1fr] md:pt-24">
          <div>
            <p className="rise d1 inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-sm font-semibold text-brand">
              <span className="h-2 w-2 rounded-full bg-brand" /> Web, Google Ads and SEO for Indian businesses
            </p>
            <h1 className="rise d2 mt-6 text-[2.6rem] font-extrabold leading-[1.05] sm:text-6xl">
              Websites that win customers across Bharat.
            </h1>
            <p lang="hi" className="rise d3 mt-4 font-display text-2xl font-semibold text-brand sm:text-3xl">
              आपका बिज़नेस, हर शहर में।
            </p>
            <p className="rise d3 mt-5 max-w-xl text-lg text-ink-soft">
              We design and market fast, premium websites with UPI checkout, WhatsApp enquiries and Hindi-first pages built in, so a customer in Indore or Imphal buys as easily as one in Mumbai.
            </p>
            <div className="rise d4 mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">Get a free website audit</Link>
              <Link href="/services" className="btn btn-ghost">See our services</Link>
            </div>
          </div>
          <div className="rise d4"><PhoneMock /></div>
        </div>
      </section>

      {/* INDIA POINTS */}
      <section className="bg-mist">
        <div className="mx-auto grid max-w-6xl gap-px bg-line px-0 md:grid-cols-4">
          {indiaPoints.map((p) => (
            <div key={p.title} className="bg-mist p-6">
              <h2 className="text-lg font-bold">{p.title}</h2>
              <p className="mt-2 text-ink-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-xl text-3xl font-extrabold md:text-4xl">Everything your business needs to grow online</h2>
          <Link href="/services" className="link-u font-semibold text-brand">All services and pricing</Link>
        </div>
        <ul className="mt-10 grid gap-x-12 md:grid-cols-2">
          {services.map((s) => (
            <li key={s.slug} className="border-t border-line py-6 transition-colors hover:border-brand">
              <h3 className="text-xl font-bold">{s.name}</h3>
              <p className="mt-2 text-ink-soft">{s.blurb}</p>
              <p className="mt-3 text-sm font-semibold text-brand">From {s.from}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* PROCESS */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="max-w-xl text-3xl font-extrabold md:text-4xl">From first call to first sale in four steps</h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-4">
            {steps.map((p, i) => (
              <li key={p.title} className="relative border-l-2 border-haldi pl-5">
                <span className="font-display text-sm font-bold text-haldi">Step {i + 1}</span>
                <h3 className="mt-1 text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-white/75">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WORK */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="max-w-xl text-3xl font-extrabold md:text-4xl">Featured work</h2>
        <p className="mt-3 max-w-xl text-ink-soft">Sample projects showing the kind of build we deliver for Indian businesses.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {work.map((w, i) => (
            <article key={w.name} className={`group overflow-hidden rounded-3xl border border-line ${i === 0 ? "md:row-span-1" : ""}`}>
              <div className={`flex h-44 items-end bg-gradient-to-br ${w.tone} p-5`}>
                <span className="font-display text-2xl font-extrabold text-white">{w.name}</span>
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold text-brand">{w.type}</p>
                <p className="mt-2 text-ink-soft">{w.result}</p>
                <p className="mt-4 flex flex-wrap gap-2 text-xs font-medium">
                  {w.tags.map((t) => (
                    <span key={t} className="rounded-full bg-mist px-3 py-1">{t}</span>
                  ))}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="bg-mist">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1fr_1.4fr]">
          <h2 className="text-3xl font-extrabold md:sticky md:top-24 md:self-start md:text-4xl">Why Indian businesses choose Ethixweb</h2>
          <dl className="space-y-8">
            {why.map((w) => (
              <div key={w.title} className="border-l-4 border-brand pl-5">
                <dt className="text-xl font-bold">{w.title}</dt>
                <dd className="mt-1 text-ink-soft">{w.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
