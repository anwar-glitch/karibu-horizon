
import { FiArrowRight, FiCompass } from "react-icons/fi";
import FeaturedGuides from "@/components/guides/FeaturedGuides";
import GuideCategories from "@/components/guides/GuideCategories";
import LatestGuides from "@/components/guides/LatestGuides";
import GuidesCTA from "@/components/guides/GuidesCTA";

export default function GuidesPage() {
  return (
    <main className="bg-[#F8F7F2]">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#174C38]">
              <FiCompass size={18} />
              Travel Guides
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#103829] md:text-6xl">
              Plan your journey
              <span className="block font-serif italic text-[#D4A45D]">
                through Tanzania.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#707A73] md:text-lg">
              Discover helpful travel advice, local insights, and inspiration
              to make your journey through Tanzania unforgettable.
            </p>

            <a
              href="#featured-guides"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#174C38] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#103829]"
            >
              Explore travel guides
              <FiArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Decorative background element */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border border-[#D4A45D]/20 md:h-[28rem] md:w-[28rem]" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-60 w-60 rounded-full border border-[#D4A45D]/20 md:h-96 md:w-96" />
      </section>

      {/* Featured Guides - we'll build this next */}
      {/* Featured Travel Guides */}
<section
  id="featured-guides"
  className="mx-auto max-w-7xl px-6 pb-24"
>
    <GuideCategories />
    <FeaturedGuides />
    <LatestGuides />
</section>

    <GuidesCTA />

     
    </main>
  );
}
