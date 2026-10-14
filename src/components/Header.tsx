
import Link from "next/link";
import Logo from "./Logo";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/our-work", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Brand */}
        <Logo />

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex xl:gap-9"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative py-2 text-sm font-medium text-[#292929] transition-colors duration-200 hover:text-[#D71920]"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 bg-[#D71920] transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden items-center gap-3 rounded-full bg-[#D71920] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#B51219] hover:shadow-lg hover:shadow-red-900/15 lg:inline-flex"
        >
          Start a project
          <span aria-hidden="true" className="text-lg leading-none">
            ↗
          </span>
        </Link>

        {/* Mobile navigation: CSS-only disclosure */}
        <details className="relative lg:hidden">
          <summary
            aria-label="Toggle navigation menu"
            className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-black/10 transition-colors hover:bg-gray-50 [&::-webkit-details-marker]:hidden"
          >
            <span className="flex w-5 flex-col gap-[5px]">
              <span className="h-[2px] w-full rounded-full bg-[#202020]" />
              <span className="h-[2px] w-full rounded-full bg-[#202020]" />
            </span>
          </summary>

          <div className="absolute right-0 top-[58px] w-[min(320px,calc(100vw-40px))] rounded-2xl border border-black/5 bg-white p-4 shadow-2xl shadow-black/10">
            <p className="px-3 pb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
              Explore Ethixweb
            </p>

            <nav aria-label="Mobile navigation" className="flex flex-col">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between rounded-xl px-3 py-3.5 text-[15px] font-medium text-[#292929] transition-colors hover:bg-red-50 hover:text-[#D71920]"
                >
                  {item.label}
                  <span aria-hidden="true" className="text-gray-400">
                    ↗
                  </span>
                </Link>
              ))}
            </nav>

            <div className="mt-3 border-t border-gray-100 pt-4">
              <Link
                href="/contact"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#D71920] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#B51219]"
              >
                Start a project
                <span aria-hidden="true">↗</span>
              </Link>
              <p className="mt-3 text-center text-xs text-gray-400">
                Let's build something meaningful.
              </p>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
