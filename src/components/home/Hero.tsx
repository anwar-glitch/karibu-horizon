
import Link from "next/link";
import {
  FiArrowRight,
  FiMapPin,
  FiSearch,
} from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative flex min-h-[680px] items-center overflow-hidden bg-[#103829]">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#10251d]/90 via-[#10251d]/65 to-[#10251d]/20" />

      {/* Hero content */}
      <div className="container-custom relative z-10 py-24">

        <div className="max-w-3xl">

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wider text-white backdrop-blur-sm">
            <FiMapPin className="text-[#D4A45D]" />
            WELCOME TO TANZANIA
          </div>

          <h1 className="font-[family-name:var(--font-manrope)] text-5xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Discover the
            <br />
            beauty of
            <br />
            <span className="text-[#D4A45D]">
              Tanzania.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
            From breathtaking wildlife and majestic mountains
            to tropical beaches and vibrant cultures, discover
            everything that makes Tanzania extraordinary.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <Link
              href="/destinations"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#D4A45D] px-8 py-4 text-sm font-bold text-[#242A27] transition hover:bg-[#E5B975]"
            >
              Explore destinations
              <FiArrowRight size={18} />
            </Link>

            <Link
              href="/experiences"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Discover experiences
            </Link>

          </div>

        </div>

        {/* Bottom information */}
        <div className="mt-20 flex flex-wrap gap-10 border-t border-white/25 pt-7">

          <div>
            <p className="text-2xl font-bold text-white">22+</p>
            <p className="mt-1 text-xs text-white/65">
              National Parks
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold text-white">3,000+</p>
            <p className="mt-1 text-xs text-white/65">
              Wildlife Species
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold text-white">1,400km</p>
            <p className="mt-1 text-xs text-white/65">
              Indian Ocean Coastline
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
