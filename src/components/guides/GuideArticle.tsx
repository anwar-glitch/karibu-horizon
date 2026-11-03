
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiClock, FiCompass } from "react-icons/fi";
import type { Guide } from "@/data/guides";

type Props = {
  guide: Guide;
};

export default function GuideArticle({ guide }: Props) {
  return (
    <main className="bg-[#F8F7F2]">
      {/* Article Header */}
      <section className="mx-auto max-w-4xl px-6 pb-12 pt-16 md:pt-24">
        <Link
          href="/travel-guides"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#174C38] transition hover:text-[#D4A45D]"
        >
          <FiArrowLeft size={17} />
          Back to Travel Guides
        </Link>

        <div className="mt-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4A45D]">
          <FiCompass size={16} />
          {guide.category}
        </div>

        <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#103829] md:text-6xl">
          {guide.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#707A73]">
          {guide.description}
        </p>

        <div className="mt-6 flex items-center gap-2 text-sm text-[#707A73]">
          <FiClock size={16} />
          {guide.readTime}
        </div>
      </section>

      {/* Article Image */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="relative h-[280px] overflow-hidden rounded-3xl md:h-[520px]">
          <Image
            src={guide.image}
            alt={guide.title}
            fill
            unoptimized
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <p className="mb-12 text-xl leading-9 text-[#242A27]">
          {guide.introduction}
        </p>

        <div className="space-y-12">
          {guide.sections.map((section, index) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-semibold tracking-tight text-[#103829] md:text-3xl">
                {index + 1}. {section.heading}
              </h2>

              <p className="mt-5 text-base leading-8 text-[#707A73]">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        {/* End of Article */}
        <div className="mt-16 border-t border-[#E7E4DA] pt-8">
          <Link
            href="/travel-guides"
            className="inline-flex items-center gap-2 rounded-full bg-[#174C38] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#103829]"
          >
            <FiArrowLeft size={17} />
            Explore more travel guides
          </Link>
        </div>
      </article>
    </main>
  );
}
