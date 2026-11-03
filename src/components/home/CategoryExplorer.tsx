import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const categories = [
  {
    title: "Wildlife & Safari",
    description:
      "Witness incredible wildlife and explore Tanzania's iconic national parks.",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=85",
    href: "/experiences",
    number: "01",
  },
  {
    title: "Beaches & Islands",
    description:
      "Escape to turquoise waters, white sands and beautiful tropical islands.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1000&q=85",
    href: "/destinations",
    number: "02",
  },
  {
    title: "Mountains & Hiking",
    description:
      "Discover majestic peaks, scenic trails and unforgettable adventures.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85",
    href: "/experiences",
    number: "03",
  },
  {
    title: "Culture & Heritage",
    description:
      "Connect with local communities, traditions and Tanzania's rich history.",
    image:
      "https://images.unsplash.com/photo-1522406483372-052247deae62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    href: "/experiences",
    number: "04",
  },
];

export default function CategoryExplorer() {
  return (
    <section className="bg-[#F8F7F2] py-24">
      <div className="container-custom">

        {/* Section heading */}
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#B78745]">
              EXPLORE TANZANIA
            </p>

            <h2 className="font-[family-name:var(--font-manrope)] text-3xl font-extrabold leading-tight text-[#242A27] sm:text-4xl lg:text-5xl">
              Find your kind of
              <span className="text-[#174C38]"> adventure.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#707A73] sm:text-base">
              Every corner of Tanzania has something special.
              Discover the experiences that make your journey unforgettable.
            </p>
          </div>

          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#174C38] transition hover:text-[#D4A45D]"
          >
            Explore all destinations
            <FiArrowUpRight size={18} />
          </Link>
        </div>

        {/* Category cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.number}
              href={category.href}
              className="group relative h-[390px] overflow-hidden rounded-2xl bg-[#174C38]"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${category.image}')`,
                }}
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/5 transition group-hover:from-black/90" />

              {/* Number */}
              <span className="absolute right-5 top-5 text-xs font-semibold tracking-widest text-white/80">
                {category.number}
              </span>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6">

                <h3 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-white">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/75">
                  {category.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#D4A45D]">
                  Discover more
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