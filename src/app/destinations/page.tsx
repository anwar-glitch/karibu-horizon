
import DestinationHero from "@/components/destinations/DestinationHero";
import FeaturedDestination from "@/components/destinations/FeaturedDestination";
import DestinationExplorer from "@/components/destinations/DestinationExplorer";

export default function DestinationsPage() {
  return (
    <main className="bg-[#F8F7F2]">
      {/* Destinations page introduction */}
      <DestinationHero />

      {/* Featured destination */}
      <FeaturedDestination />

      {/* Explore and filter destinations */}
      <DestinationExplorer />
    </main>
  );
}
