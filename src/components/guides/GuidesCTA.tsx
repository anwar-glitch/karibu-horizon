
import Link from "next/link";
import { FiArrowUpRight, FiCompass } from "react-icons/fi";

export default function GuidesCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-[#174C38] px-8 py-14 md:px-16 md:py-20">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/10" />

        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#D4A45D]">
            <FiCompass size={18} />
            Your next adventure
          </div>

          <h2 className="mt-6 text-3xl font-semibold leading-tight text-white md:text-5xl">
            Tanzania is waiting
            <span className="block font-serif italic text-[#D4A45D]">
              to be discovered.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/75">
            Let our travel guides inspire your journey. Discover extraordinary
            destinations, meaningful experiences, and the beauty of Tanzania.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-3 rounded-full bg-[#D4A45D] px-7 py-4 text-sm font-semibold text-[#103829] transition hover:bg-white"
            >
              Explore destinations
              <FiArrowUpRight size={18} />
            </Link>

            {/* <Link
              href="/experiences"
              className="inline-flex items-center gap-3 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Discover experiences
              <FiArrowUpRight size={18} /> 
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
