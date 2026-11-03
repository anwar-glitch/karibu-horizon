
import Link from "next/link";
import {
  FiArrowRight,
  FiCompass,
  FiHeart,
  FiGlobe,
  FiSun,
} from "react-icons/fi";

export default function AboutPage() {
  return (
    <main className="bg-[#F8F7F2]">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#174C38]">
              <FiCompass size={18} />
              About Karibu Horizon
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#103829] md:text-7xl">
              Discover Tanzania.
              <span className="block font-serif italic text-[#D4A45D]">
                Find your horizon.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#707A73] md:text-lg">
              Karibu Horizon is a travel discovery platform created to inspire
              people to explore the extraordinary beauty, culture, and
              experiences of Tanzania.
            </p>

            <Link
              href="/destinations"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#174C38] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#103829]"
            >
              Explore Tanzania
              <FiArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border border-[#D4A45D]/20 md:h-[28rem] md:w-[28rem]" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-60 w-60 rounded-full border border-[#D4A45D]/20 md:h-96 md:w-96" />
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-12 border-t border-[#E7E4DA] pt-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4A45D]">
              Our story
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#103829] md:text-5xl">
              A deeper connection to Tanzania.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#707A73]">
            <p>
              Tanzania is a land of remarkable contrasts. From the vast plains
              of the Serengeti to the shores of Zanzibar, from the heights of
              Kilimanjaro to the warmth of its communities, every journey
              reveals something extraordinary.
            </p>

            <p>
              We created Karibu Horizon to help travelers discover these
              places and experiences in one inspiring destination. Our goal
              is to make exploring Tanzania easier, more meaningful, and
              more accessible through thoughtful travel information.
            </p>

            <p>
              Whether you are planning your first visit or looking for a new
              adventure, we hope Karibu Horizon helps you see Tanzania
              through a fresh perspective.
            </p>
          </div>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4A45D]">
              What guides us
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[#103829] md:text-5xl">
              Our purpose
            </h2>

            <p className="mt-5 leading-8 text-[#707A73]">
              We believe travel is more than reaching a destination.
              It is about discovery, connection, and the stories we carry home.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[#E7E4DA] p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#174C38]/5 text-[#174C38]">
                <FiCompass size={23} />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#103829]">
                Our Mission
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#707A73]">
                To inspire exploration by sharing useful, engaging, and
                thoughtful information about Tanzania&apos;s destinations
                and travel experiences.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E7E4DA] p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#174C38]/5 text-[#174C38]">
                <FiGlobe size={23} />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#103829]">
                Our Vision
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#707A73]">
                To become a trusted digital guide for discovering Tanzania
                and a meaningful connection between travelers and places.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E7E4DA] p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#174C38]/5 text-[#174C38]">
                <FiHeart size={23} />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#103829]">
                Our Values
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#707A73]">
                Authenticity, respect for local culture, responsible
                exploration, and a genuine appreciation for Tanzania.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-[#174C38] px-8 py-14 text-center md:px-16 md:py-20">
          <FiSun className="mx-auto text-[#D4A45D]" size={32} />

          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-semibold leading-tight text-white md:text-5xl">
            Your journey through Tanzania starts here.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-white/75">
            Discover extraordinary places, explore meaningful experiences,
            and find inspiration for your next adventure.
          </p>

          <Link
            href="/destinations"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#D4A45D] px-7 py-4 text-sm font-semibold text-[#103829] transition hover:bg-white"
          >
            Discover destinations
            <FiArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
