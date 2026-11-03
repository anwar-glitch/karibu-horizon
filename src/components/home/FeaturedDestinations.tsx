
import Link from "next/link";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";

const destinations = [
  {
    name: "Mount Kilimanjaro",
    location: "Kilimanjaro Region",
    category: "MOUNTAINS",
    description: "Experience Africa's highest mountain.",
    image:
      "https://images.unsplash.com/photo-1668693303265-ee8d1066e4f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    href: "/destinations",
    featured: true,
  },
  {
    name: "Serengeti National Park",
    location: "Mara Region",
    category: "WILDLIFE",
    description: "Discover the magic of the African savannah.",
    image:
      "https://plus.unsplash.com/premium_photo-1661863287056-5c1d73ad5dec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    href: "/destinations",
  },
  {
    name: "Zanzibar",
    location: "Zanzibar",
    category: "ISLAND",
    description: "Discover tropical beaches and rich culture.",
    image:
      "https://images.unsplash.com/photo-1621583628955-42fbc37bf424?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    href: "/destinations",
  },
  {
    name: "Ngorongoro Crater",
    location: "Arusha Region",
    category: "NATURE",
    description: "Explore one of Africa's natural wonders.",
    image:
      "https://plus.unsplash.com/premium_photo-1697729506473-f0f7e3a5407c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    href: "/destinations",
  },
  {
    name: "Lake Manyara",
    location: "Manyara Region",
    category: "WILDLIFE",
    description: "Discover beautiful landscapes and wildlife.",
    image:
      "https://plus.unsplash.com/premium_photo-1661846340419-89bf27138124?q=80&w=1692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    href: "/destinations",
  },
  {
    name: "Tarangire National Park",
    location: "Manyara Region",
    category: "SAFARI",
    description: "Explore ancient baobabs and elephants.",
    image:
      "https://images.unsplash.com/photo-1707410437019-40c82e3a417f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    href: "/destinations",
  },
];

export default function FeaturedDestinations() {
  return (
    <section className="bg-white py-24">
      <div className="container-custom">

        {/* Heading */}
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#B78745]">
              PLACES WORTH DISCOVERING
            </p>

            <h2 className="font-[family-name:var(--font-manrope)] text-3xl font-extrabold leading-tight text-[#242A27] sm:text-4xl lg:text-5xl">
              Explore our beautiful
              <span className="text-[#174C38]"> destinations.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#707A73] sm:text-base">
              From iconic wildlife destinations to tropical islands,
              discover the places that make Tanzania extraordinary.
            </p>
          </div>

          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#174C38] transition hover:text-[#B78745]"
          >
            View all destinations
            <FiArrowUpRight size={18} />
          </Link>
        </div>

        {/* Destination grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <Link
              href={destination.href}
              key={destination.name}
              className="group overflow-hidden rounded-2xl border border-[#E7E4DA] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-[250px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${destination.image}')`,
                  }}
                />

                <div className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-[10px] font-bold tracking-widest text-[#174C38]">
                  {destination.category}
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-xs text-[#707A73]">
                  <FiMapPin size={14} />
                  {destination.location}
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[#242A27] transition group-hover:text-[#174C38]">
                      {destination.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#707A73]">
                      {destination.description}
                    </p>
                  </div>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F0EFE8] text-[#174C38] transition group-hover:bg-[#174C38] group-hover:text-white">
                    <FiArrowUpRight size={18} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
