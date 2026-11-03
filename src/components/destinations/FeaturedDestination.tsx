
import Link from "next/link";
import {
  FiArrowUpRight,
  FiMapPin,
} from "react-icons/fi";

export default function FeaturedDestination() {
  return (
    <section className="bg-white py-24">
      <div className="container-custom">

        {/* Editorial heading */}
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#B78745]">
              THE EDITOR'S PICK
            </p>

            <h2 className="font-[family-name:var(--font-manrope)] text-3xl font-extrabold text-[#242A27] sm:text-4xl">
              A place worth discovering.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#707A73]">
            Some destinations leave a lasting impression.
            This is one of them.
          </p>
        </div>

        {/* Featured destination */}
        <div className="grid overflow-hidden rounded-2xl bg-[#F8F7F2] lg:grid-cols-2">

          {/* Image */}
          <div className="relative min-h-[350px] lg:min-h-[560px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1763675848759-9cdf601bfbc4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')",
              }}
            />

            <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold tracking-widest text-[#174C38]">
              WILDLIFE & SAFARI
            </div>
          </div>

          {/* Editorial content */}
          <div className="flex flex-col justify-center px-7 py-12 sm:px-12 lg:px-16">

            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B78745]">
              <FiMapPin size={15} />
              Mara Region, Northern Tanzania
            </div>

            <h3 className="mt-7 font-[family-name:var(--font-manrope)] text-3xl font-extrabold leading-tight text-[#242A27] sm:text-4xl lg:text-5xl">
              The endless
              <span className="text-[#174C38]"> Serengeti.</span>
            </h3>

            <p className="mt-7 text-sm leading-8 text-[#707A73] sm:text-base">
              A vast wilderness of golden grasslands, remarkable
              wildlife and unforgettable natural spectacles.
              The Serengeti is one of Tanzania's most iconic
              destinations and home to the legendary Great Migration.
            </p>

            <div className="mt-9 border-t border-[#E7E4DA] pt-7">
              <div className="flex flex-wrap gap-8">

                <div>
                  <p className="text-xs text-[#707A73]">Known for</p>
                  <p className="mt-2 text-sm font-bold text-[#242A27]">
                    Great Migration
                  </p>
                </div>

                <div>
                  <p className="text-xs text-[#707A73]">Experience</p>
                  <p className="mt-2 text-sm font-bold text-[#242A27]">
                    Wildlife Safari
                  </p>
                </div>

              </div>
            </div>

            <Link
              href="/destinations/serengeti"
              className="mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-[#174C38] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#103829]"
            >
              Discover Serengeti
              <FiArrowUpRight size={18} />
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}
