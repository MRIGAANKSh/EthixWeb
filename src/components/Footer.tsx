import Link from "next/link";
import Logo from "./Logo";
import { CONTACT, waLink } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="jaali jaali-fade pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-sm text-white/75">
            Websites, Google Ads and SEO for Indian businesses. Built in India, to global standards.
          </p>
        </div>
        <nav aria-label="Footer" className="space-y-2">
          <p className="font-display font-bold">Explore</p>
          <Link className="link-u block w-fit text-white/80" href="/services">Services</Link>
          <Link className="link-u block w-fit text-white/80" href="/about">About</Link>
          <Link className="link-u block w-fit text-white/80" href="/contact">Contact</Link>
        </nav>
        <div className="space-y-2">
          <p className="font-display font-bold">Talk to us</p>
          <a className="link-u block w-fit text-white/80" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <a className="link-u block w-fit text-white/80" href={waLink()} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
          <p className="text-white/60">{CONTACT.hours}</p>
        </div>
      </div>
      <div className="relative border-t border-white/10 py-5 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Ethixweb India. All rights reserved.
      </div>
    </footer>
  );
}
