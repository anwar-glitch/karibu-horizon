
import Link from "next/link";
import { FiArrowUpRight, FiClock } from "react-icons/fi";

const articles = [
  {
    title: "The Ultimate Tanzania Safari Guide",
    category: "WILDLIFE",
    readTime: "8 min read",
    description:
      "Everything you need to know before experiencing Tanzania's incredible wildlife.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Discover the Magic of Zanzibar",
    category: "TRAVEL GUIDE",
    readTime: "6 min read",
    description:
      "Explore tropical beaches, historic Stone Town and the beauty of island life.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Preparing for Mount Kilimanjaro",
    category: "ADVENTURE",
    readTime: "10 min read",
    description:
      "A beginner-friendly introduction to planning your Kilimanjaro adventure.",
    image:
      "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?auto=format&fit=crop&w=1000&q=85",
  },
];

export default function TravelInspiration() {
  return (
    <section className="bg-white py-24">
      <div className="container-custom">

        {/* Heading */}
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#B78745]">
              STORIES & INSPIRATION
            </p>

            <h2 className="font-[family-name:var(--font-manrope)] text-3xl font-extrabold leading-tight text-[#242A27] sm:text-4xl lg:text-5xl">
              Get inspired for your
              <span className="text-[#174C38]"> next journey.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#707A73] sm:text-base">
              Helpful travel guides, destination insights and
              inspiration to help you discover more of Tanzania.
            </p>
          </div>

          <Link
            href="/travel-guides"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#174C38] transition hover:text-[#B78745]"
          >
            View all travel guides
            <FiArrowUpRight size={18} />
          </Link>
        </div>

        {/* Article cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              href="/travel-guides"
              key={article.title}
              className="group"
            >
              {/* Image */}
              <div className="relative h-[260px] overflow-hidden rounded-2xl bg-[#F0EFE8]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${article.image}')`,
                  }}
                />

                <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-[10px] font-bold tracking-widest text-[#174C38]">
                  {article.category}
                </span>
              </div>

              {/* Article information */}
              <div className="pt-5">
                <div className="flex items-center gap-2 text-xs text-[#707A73]">
                  <FiClock size={14} />
                  {article.readTime}
                </div>

                <h3 className="mt-3 font-[family-name:var(--font-manrope)] text-xl font-bold leading-snug text-[#242A27] transition group-hover:text-[#174C38]">
                  {article.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#707A73]">
                  {article.description}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#174C38]">
                  Read article
                  <FiArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
