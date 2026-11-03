
import type { Destination } from "@/data/destinations";

type Props = {
  destination: Destination;
};

export default function DestinationGallery({ destination }: Props) {
  const gallery = destination.gallery ?? [];

  // Don't render the gallery if no images are available.
  if (gallery.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#F8F7F2] py-24">
      <div className="container-custom">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#B78745]">
              A CLOSER LOOK
            </p>

            <h2 className="font-[family-name:var(--font-manrope)] text-3xl font-extrabold text-[#242A27] sm:text-4xl">
              Discover through
              <span className="text-[#174C38]"> photographs.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#707A73]">
            Explore the landscapes, scenery and unforgettable beauty of{" "}
            {destination.name}.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Main gallery image */}
          <div className="group relative h-[300px] overflow-hidden rounded-2xl md:h-[520px]">
            <img
              src={gallery[0]}
              alt={`${destination.name} landscape`}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          {/* Smaller gallery images */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
            {gallery.slice(1, 3).map((image, index) => (
              <div
                key={image}
                className="group relative h-[250px] overflow-hidden rounded-2xl md:h-[252px]"
              >
                <img
                  src={image}
                  alt={`${destination.name} view ${index + 2}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
