
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function DiscoverCTA() {
  return (
    <section className="bg-white px-5 pb-24">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-[28px] bg-[#103829]">

          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=2000&q=85')",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#103829]/95 via-[#103829]/75 to-[#103829]/30" />

          {/* Content */}
          <div className="relative z-10 px-7 py-20 sm:px-12 sm:py-24 lg:px-20">

            <p className="mb-5 text-xs font-bold tracking-[0.22em] text-[#D4A45D]">
              YOUR TANZANIA ADVENTURE STARTS HERE
            </p>

            <h2 className="max-w-3xl font-[family-name:var(--font-manrope)] text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-6xl">
              The beauty of Tanzania
              is waiting to be
              <span className="text-[#D4A45D]"> discovered.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-8 text-white/75 sm:text-base">
              Find extraordinary places, discover unforgettable
              experiences and let Tanzania inspire your next journey.
            </p>

            <Link
              href="/destinations"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#D4A45D] px-8 py-4 text-sm font-bold text-[#242A27] transition hover:bg-[#E5B975]"
            >
              Start exploring
              <FiArrowRight size={18} />
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
