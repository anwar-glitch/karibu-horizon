
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const latestGuides = [
  {
    title: "What to Pack for a Tanzania Safari",
    category: "TRAVEL ESSENTIALS",
    description:
      "A practical packing checklist to help you prepare for days in the wilderness.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    slug: "what-to-pack-tanzania-safari",
    readTime: "5 min read",
  },
  {
    title: "Discovering the Culture of Tanzania",
    category: "CULTURE & HERITAGE",
    description:
      "Explore local traditions, Swahili culture, and ways to travel respectfully.",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5",
    slug: "discovering-tanzania-culture",
    readTime: "7 min read",
  },
  {
    title: "Getting Around Tanzania",
    category: "TRIP PLANNING",
    description:
      "Understand the transport options that can help you explore the country.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
    slug: "getting-around-tanzania",
    readTime: "6 min read",
  },
];

export default function LatestGuides() {
  return (
    <section className="mt-20">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4A45D]">
            Fresh inspiration
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#103829] md:text-4xl">
            Latest travel guides
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-[#707A73]">
            Useful insights and inspiration for your next journey through
            Tanzania.
          </p>
        </div>
      </div>

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {latestGuides.map((guide) => (
          <article
            key={guide.slug}
            className="group overflow-hidden rounded-2xl border border-[#E7E4DA] bg-white transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={guide.image}
                alt={guide.title}
                fill
                unoptimized
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold tracking-wider text-[#D4A45D]">
                  {guide.category}
                </span>

                <span className="text-xs text-[#707A73]">
                  {guide.readTime}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-semibold leading-snug text-[#103829]">
                {guide.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#707A73]">
                {guide.description}
              </p>

              <Link
                href={`/travel-guides/${guide.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#174C38] hover:text-[#D4A45D]"
              >
                Read guide
                <FiArrowUpRight size={17} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
