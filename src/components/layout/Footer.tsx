
import Link from "next/link";
import {
  FiInstagram,
  FiFacebook,
  FiYoutube,
  FiArrowUpRight,
  FiMapPin,
} from "react-icons/fi";

const exploreLinks = [
  { name: "Destinations", href: "/destinations" },
  { name: "Experiences", href: "/experiences" },
  { name: "Travel Guides", href: "/travel-guides" },
  { name: "About Tanzania", href: "/about" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-[#103829] text-white">
      <div className="container-custom py-16">

        {/* Main footer content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <h2 className="font-[family-name:var(--font-manrope)] text-2xl font-extrabold">
                Karibu Horizon<span className="text-gold">.</span>
              </h2>
            </Link>

            <p className="mt-3 text-xs font-semibold tracking-[0.18em] text-[#D4A45D]">
              DISCOVER THE BEAUTY OF TANZANIA
            </p>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
              Discover Tanzania&apos;s breathtaking destinations,
              extraordinary wildlife, rich culture and unforgettable
              travel experiences.
            </p>

            <div className="mt-6 flex items-center gap-3 text-sm text-white/70">
              <FiMapPin className="text-[#D4A45D]" size={17} />
              <span>Explore Tanzania, East Africa</span>
            </div>

            {/* Social icons */}
            <div className="mt-7 flex gap-3">
              {[FiInstagram, FiFacebook, FiYoutube].map(
                (Icon, index) => (
                  <span
                    key={index}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80"
                  >
                    <Icon size={18} />
                  </span>
                )
              )}
            </div>
          </div>

          {/* Explore links */}
          <div>
            <h3 className="text-base font-bold">Explore</h3>

            <ul className="mt-6 space-y-4">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition hover:text-[#D4A45D]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-base font-bold">Company</h3>

            <ul className="mt-6 space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition hover:text-[#D4A45D]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter / inspiration section */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-7 md:flex md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-bold">
              Stay inspired by Tanzania.
            </h3>

            <p className="mt-2 text-sm text-white/60">
              Travel inspiration and useful guides, coming to your inbox.
            </p>
          </div>

          <Link
            href="/travel-guides"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#D4A45D] px-6 py-3 text-sm font-bold text-[#242A27] transition hover:bg-[#E5B975] md:mt-0"
          >
            Explore our guides
            <FiArrowUpRight size={17} />
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-7 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Karibu Horizon. All rights reserved.
          </p>

          <p>Made with love for Tanzania.</p>
        </div>

      </div>
    </footer>
  );
}
