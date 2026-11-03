
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const guides = [
  {
    title: "The Complete Tanzania Travel Guide",
    category: "TRIP PLANNING",
    description:
      "Everything you need to know before exploring Tanzania, from destinations to local travel essentials.",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5",
    slug: "complete-tanzania-travel-guide",
    readTime: "8 min read",
  },
  {
    title: "When Is the Best Time to Visit Tanzania?",
    category: "SEASONS & WEATHER",
    description:
      "Discover the best seasons for wildlife safaris, mountain adventures, and relaxing island escapes.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    slug: "best-time-to-visit-tanzania",
    readTime: "6 min read",
  },
  {
    title: "Your First Tanzania Safari",
    category: "SAFARI GUIDE",
    description:
      "A beginner-friendly guide to safari destinations, wildlife viewing, and preparing for your adventure.",
    image:
      "https://images.unsplash.com/photo-1598975314523-9afadd6316c8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    slug: "first-tanzania-safari",
    readTime: "7 min read",
  },
];

export default function FeaturedGuides() {
  return (
    <section className="mt-14">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4A45D]">
            Start exploring
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#103829] md:text-4xl">
            Featured travel guides
          </h2>
        </div>
      </div>

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <article
            key={guide.slug}
            className="group overflow-hidden rounded-2xl border border-[#E7E4DA] bg-white transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative h-60 overflow-hidden">
              <Image
                src={guide.image}
                alt={guide.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                unoptimized
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
