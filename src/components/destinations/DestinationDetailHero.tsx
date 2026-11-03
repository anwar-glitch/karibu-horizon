
import Link from "next/link";
import {
  FiArrowLeft,
  FiMapPin,
} from "react-icons/fi";
import type { Destination } from "@/data/destinations";

type Props = {
  destination: Destination;
};

export default function DestinationDetailHero({ destination }: Props) {
  return (
    <section className="relative flex min-h-[560px] items-end overflow-hidden bg-[#103829]">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${destination.heroImage}')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#10251d]/95 via-[#10251d]/45 to-black/10" />

      {/* Content */}
      <div className="container-custom relative z-10 pb-16 pt-32 sm:pb-20">

        {/* Back link */}
        <Link
          href="/destinations"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-[#D4A45D]"
        >
          <FiArrowLeft size={17} />
          Back to destinations
        </Link>

        {/* Category */}
        <div className="mb-6 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wider text-white backdrop-blur-sm">
          {destination.category.toUpperCase()}
        </div>

        {/* Destination name */}
        <h1 className="max-w-4xl font-[family-name:var(--font-manrope)] text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
          {destination.name}
        </h1>

        {/* Tagline */}
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
          {destination.tagline}
        </p>

        {/* Location */}
        <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white/80">
          <FiMapPin className="text-[#D4A45D]" size={18} />
          {destination.location}
        </div>

      </div>
    </section>
  );
}
