
import Link from "next/link";
import {
  FiCompass,
  FiMap,
  FiSun,
  FiUsers,
  FiBriefcase,
} from "react-icons/fi";

const categories = [
  {
    title: "Trip Planning",
    description: "Plan your journey with practical travel advice.",
    icon: FiCompass,
    count: "Planning essentials",
  },
  {
    title: "Safari Guides",
    description: "Prepare for unforgettable wildlife adventures.",
    icon: FiMap,
    count: "Wildlife & parks",
  },
  {
    title: "Seasons & Weather",
    description: "Find the right time for your Tanzania adventure.",
    icon: FiSun,
    count: "When to travel",
  },
  {
    title: "Culture & Heritage",
    description: "Discover local traditions, history, and culture.",
    icon: FiUsers,
    count: "Local insights",
  },
  {
    title: "Travel Essentials",
    description: "Learn about packing, transport, and useful tips.",
    icon: FiBriefcase,
    count: "Before you go",
  },
];

export default function GuideCategories() {
  return (
    <section className="mt-20">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4A45D]">
          Browse by topic
        </p>

        <h2 className="mt-3 text-3xl font-semibold text-[#103829] md:text-4xl">
          Find the guidance you need
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-[#707A73]">
          From planning your first visit to discovering local culture,
          explore guides that help you travel with confidence.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <Link
              key={category.title}
              href="#featured-guides"
              className="group rounded-2xl border border-[#E7E4DA] bg-white p-6 transition hover:-translate-y-1 hover:border-[#174C38]/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#174C38]/5 text-[#174C38] transition group-hover:bg-[#174C38] group-hover:text-white">
                <Icon size={22} />
              </div>

              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-[#D4A45D]">
                {category.count}
              </p>

              <h3 className="mt-2 text-xl font-semibold text-[#103829]">
                {category.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#707A73]">
                {category.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
