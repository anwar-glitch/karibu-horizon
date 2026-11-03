
import Link from "next/link";
import { FiArrowDown, FiMapPin } from "react-icons/fi";

export default function DestinationHero() {
  return (
    <section className="relative flex min-h-[480px] items-center overflow-hidden bg-[#103829]">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#10251d]/90 via-[#10251d]/65 to-[#10251d]/20" />

      {/* Content */}
      <div className="container-custom relative z-10 py-24">

        <div className="max-w-3xl">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wider text-white backdrop-blur-sm">
            <FiMapPin className="text-[#D4A45D]" />
            EXPLORE TANZANIA
          </div>

          <h1 className="font-[family-name:var(--font-manrope)] text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Discover places
            <br />
            that take your
            <span className="text-[#D4A45D]"> breath away.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/80">
            From the endless plains of the Serengeti to the
            turquoise waters of Zanzibar, explore the
            extraordinary destinations of Tanzania.
          </p>

          <Link
            href="#destination-directory"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#D4A45D] px-7 py-4 text-sm font-bold text-[#242A27] transition hover:bg-[#E5B975]"
          >
            Explore destinations
            <FiArrowDown size={18} />
          </Link>

        </div>
      </div>
    </section>
  );
}
