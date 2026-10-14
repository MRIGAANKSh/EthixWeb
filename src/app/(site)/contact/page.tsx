import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import { CONTACT, waLink } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell Ethixweb about your business and get a free website and ad audit. We reply within one working day.",
};

export default function Contact() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-[1fr_1.3fr] md:py-20">
      <div>
        <h1 className="text-4xl font-extrabold md:text-5xl">Let&rsquo;s talk about your business</h1>
        <p className="mt-4 text-lg text-ink-soft">Share a few details and we will reply within one working day, in Hindi or English.</p>
        <ul className="mt-8 space-y-4">
          <li><p className="text-sm text-ink-soft">Email</p><a className="link-u text-lg font-semibold" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
          <li><p className="text-sm text-ink-soft">WhatsApp</p><a className="link-u text-lg font-semibold" href={waLink()} target="_blank" rel="noopener noreferrer">Message us</a></li>
          <li><p className="text-sm text-ink-soft">Hours</p><p className="text-lg font-semibold">{CONTACT.hours}</p></li>
        </ul>
      </div>
      <EnquiryForm />
    </section>
  );
}
