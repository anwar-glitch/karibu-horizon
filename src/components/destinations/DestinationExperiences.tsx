
import {
  FiCompass,
  FiArrowUpRight,
} from "react-icons/fi";

import type { Destination } from "@/data/destinations";

type Props = {
  destination: Destination;
};

export default function DestinationExperiences({
  destination,
}: Props) {
  return (
    <section className="bg-[#F8F7F2] py-20 sm:py-24">
      <div className="container-custom">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#B78745]">
            MAKE YOUR JOURNEY MEMORABLE
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-3xl font-extrabold leading-tight text-[#242A27] sm:text-4xl">
            Things to
            <span className="text-[#174C38]"> experience.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-[#707A73]">
            From unforgettable adventures to meaningful cultural moments,
            discover what makes {destination.name} special.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destination.experiences.map((experience, index) => (
            <div
              key={experience}
              className="group flex min-h-[220px] flex-col justify-between rounded-2xl border border-[#E7E4DA] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#174C38]/30 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#174C38]/10 text-[#174C38]">
                  <FiCompass size={22} />
                </div>

                <span className="text-sm font-semibold text-[#B78745]">
                  0{index + 1}
                </span>
              </div>

              <div className="mt-8">
                <h3 className="font-[family-name:var(--font-manrope)] text-lg font-bold leading-7 text-[#242A27]">
                  {experience}
                </h3>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-[#707A73]">
                    Discover
                  </span>

                  <FiArrowUpRight
                    size={18}
                    className="text-[#174C38] transition group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
