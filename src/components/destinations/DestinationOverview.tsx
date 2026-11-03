
import {
  FiMapPin,
  FiCalendar,
  FiCompass,
  FiCheckCircle,
} from "react-icons/fi";

import type { Destination } from "@/data/destinations";

type Props = {
  destination: Destination;
};

export default function DestinationOverview({ destination }: Props) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-custom">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          {/* Destination introduction */}
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#B78745]">
              GET TO KNOW THIS DESTINATION
            </p>

            <h2 className="mb-7 font-[family-name:var(--font-manrope)] text-3xl font-extrabold leading-tight text-[#242A27] sm:text-4xl">
              A place worth
              <span className="text-[#174C38]"> discovering.</span>
            </h2>

            <p className="max-w-2xl text-base leading-8 text-[#707A73] sm:text-lg">
              {destination.description}
            </p>

            {/* Highlights */}
            <div className="mt-10">
              <h3 className="mb-5 font-[family-name:var(--font-manrope)] text-xl font-bold text-[#242A27]">
                Destination highlights
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                {(destination.highlights ?? []).map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 rounded-xl border border-[#E7E4DA] bg-[#F8F7F2] p-4"
                  >
                    <FiCheckCircle
                      className="mt-1 shrink-0 text-[#174C38]"
                      size={18}
                    />

                    <span className="text-sm leading-6 text-[#4F5952]">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Travel information card */}
          <div>
            <div className="rounded-2xl border border-[#E7E4DA] bg-[#F8F7F2] p-7 sm:p-8">
              <p className="mb-6 text-xs font-bold tracking-[0.2em] text-[#B78745]">
                TRAVEL INFORMATION
              </p>

              <div className="space-y-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#174C38]/10 text-[#174C38]">
                    <FiMapPin size={20} />
                  </div>

                  <div>
                    <p className="mb-1 text-sm text-[#707A73]">
                      Location
                    </p>
                    <p className="font-semibold text-[#242A27]">
                      {destination.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#174C38]/10 text-[#174C38]">
                    <FiCompass size={20} />
                  </div>

                  <div>
                    <p className="mb-1 text-sm text-[#707A73]">
                      Destination type
                    </p>
                    <p className="font-semibold text-[#242A27]">
                      {destination.category}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#174C38]/10 text-[#174C38]">
                    <FiCalendar size={20} />
                  </div>

                  <div>
                    <p className="mb-1 text-sm text-[#707A73]">
                      Best time to visit
                    </p>
                    <p className="font-semibold leading-6 text-[#242A27]">
                      {destination.bestTimeToVisit}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-[#E7E4DA] pt-6">
                <p className="text-sm leading-7 text-[#707A73]">
                  Discover the landscapes, culture and experiences that make
                  this destination part of Tanzania's remarkable beauty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
