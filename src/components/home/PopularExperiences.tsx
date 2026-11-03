
import Link from "next/link";
import { FiArrowUpRight, FiCompass } from "react-icons/fi";

const experiences = [
  {
    title: "The Great Migration",
    category: "WILDLIFE SAFARI",
    description:
      "Witness one of nature's greatest spectacles across the Serengeti.",
    image:
      "https://images.unsplash.com/photo-1564101160531-4838e8a5f4e7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    href: "/experiences",
  },
  {
    title: "Climb Mount Kilimanjaro",
    category: "MOUNTAIN ADVENTURE",
    description:
      "Challenge yourself to reach the roof of Africa.",
    image:
      "https://plus.unsplash.com/premium_photo-1697730001718-988e5a1c32d2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    href: "/experiences",
  },
  {
    title: "Zanzibar Beach Escape",
    category: "ISLAND EXPERIENCE",
    description:
      "Relax along beautiful beaches and discover island life.",
    image:
      "https://images.unsplash.com/photo-1698686453622-a77779b6a667?q=80&w=770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    href: "/experiences",
  },
  {
    title: "Hot Air Balloon Safari",
    category: "UNFORGETTABLE MOMENTS",
    description:
      "See the Serengeti from a breathtaking new perspective.",
    image:
      "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    href: "/experiences",
  },
];

export default function PopularExperiences() {
  return (
    <section className="bg-[#F8F7F2] py-24">
      <div className="container-custom">

        {/* Heading */}
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#B78745]">
              EXPERIENCES TO REMEMBER
            </p>

            <h2 className="font-[family-name:var(--font-manrope)] text-3xl font-extrabold leading-tight text-[#242A27] sm:text-4xl lg:text-5xl">
              Make your journey
              <span className="text-[#174C38]"> unforgettable.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#707A73] sm:text-base">
              Discover extraordinary experiences and create
              memories that will last a lifetime.
            </p>
          </div>

          <Link
            href="/experiences"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#174C38] transition hover:text-[#B78745]"
          >
            View all experiences
            <FiArrowUpRight size={18} />
          </Link>
        </div>

        {/* Experience cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((experience, index) => (
            <Link
              href={experience.href}
              key={experience.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-[300px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${experience.image}')`,
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-2 text-[9px] font-bold tracking-wider text-[#174C38]">
                  {experience.category}
                </span>

                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-semibold text-white/70">
                    EXPERIENCE 0{index + 1}
                  </p>

                  <h3 className="mt-2 font-[family-name:var(--font-manrope)] text-xl font-bold text-white">
                    {experience.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 p-5">
                <p className="text-sm leading-6 text-[#707A73]">
                  {experience.description}
                </p>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F0EFE8] text-[#174C38] transition group-hover:bg-[#174C38] group-hover:text-white">
                  <FiArrowUpRight size={17} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom discovery link */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/experiences"
            className="inline-flex items-center gap-2 rounded-full border border-[#174C38] px-7 py-3 text-sm font-bold text-[#174C38] transition hover:bg-[#174C38] hover:text-white"
          >
            <FiCompass size={17} />
            Discover more experiences
          </Link>
        </div>

      </div>
    </section>
  );
}
