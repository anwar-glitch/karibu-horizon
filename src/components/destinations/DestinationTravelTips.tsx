
import {
  FiSun,
  FiShield,
  FiMap,
  FiCheckCircle,
} from "react-icons/fi";

import type { Destination } from "@/data/destinations";

type Props = {
  destination: Destination;
};

const tipIcons = [FiSun, FiShield, FiMap, FiCheckCircle];

export default function DestinationTravelTips({
  destination,
}: Props) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-custom">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#B78745]">
            PLAN WITH CONFIDENCE
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] text-3xl font-extrabold leading-tight text-[#242A27] sm:text-4xl">
            Helpful travel
            <span className="text-[#174C38]"> tips.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-[#707A73]">
            A few things to know before exploring {destination.name}.
            Make your journey more comfortable, enjoyable and memorable.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {destination.travelTips.map((tip, index) => {
            const Icon = tipIcons[index % tipIcons.length];

            return (
              <div
                key={tip}
                className="flex items-start gap-5 rounded-2xl border border-[#E7E4DA] bg-[#F8F7F2] p-6 transition duration-300 hover:border-[#174C38]/30"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#174C38]/10 text-[#174C38]">
                  <Icon size={22} />
                </div>

                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#B78745]">
                    Tip 0{index + 1}
                  </p>

                  <p className="text-sm leading-7 text-[#4F5952] sm:text-base">
                    {tip}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
