
import Link from "next/link";
import type { Destination } from "@/data/destinations";
import { destinations } from "@/data/destinations";

type Props = {
  currentDestination: Destination;
};

export default function RelatedDestinations({
  currentDestination,
}: Props) {
  const relatedDestinations = destinations
    .filter((destination) => destination.slug !== currentDestination.slug)
    .slice(0, 3);

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-custom">
        <div className="mb-10">
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#B78745]">
            KEEP EXPLORING
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-3xl font-extrabold text-[#242A27] sm:text-4xl">
            More destinations
            <span className="text-[#174C38]"> to discover.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#707A73] sm:text-base">
            Your journey through Tanzania doesn't have to end here.
            Discover more remarkable places.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedDestinations.map((destination) => (
            <Link
              key={destination.slug}
              href={`/destinations/${destination.slug}`}
              className="group overflow-hidden rounded-2xl border border-[#E7E4DA] bg-[#F8F7F2] transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-[260px] overflow-hidden">
                <img
                  src={destination.heroImage}
                  alt={destination.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#B78745]">
                  {destination.category}
                </p>

                <h3 className="mb-2 font-[family-name:var(--font-manrope)] text-xl font-bold text-[#242A27] transition group-hover:text-[#174C38]">
                  {destination.name}
                </h3>

                <p className="text-sm leading-6 text-[#707A73]">
                  {destination.tagline}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#174C38]">
                  Explore destination
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
