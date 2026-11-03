
import Hero from "@/components/home/Hero";
import CategoryExplorer from "@/components/home/CategoryExplorer";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
//import PopularExperiences from "@/components/home/PopularExperiences";
import TravelInspiration from "@/components/home/TravelInspiration";
import DiscoverCTA from "@/components/home/DiscoverCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryExplorer />
      <FeaturedDestinations />
      {/* <PopularExperiences /> */}
      <TravelInspiration />
      <DiscoverCTA />
    </main>
  );
}
