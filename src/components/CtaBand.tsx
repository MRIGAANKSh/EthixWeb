import Link from "next/link";
import { waLink } from "@/lib/content";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-brand text-white">
      <div className="jaali jaali-fade pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="max-w-xl text-3xl font-extrabold md:text-4xl">Tell us what you sell. We will show you how to sell more of it.</h2>
          <p className="mt-3 text-white/85">Free website and ad audit. Reply within one working day, in Hindi or English.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-light">Get my free audit</Link>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn border border-white/60 hover:bg-white/10">Chat on WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
