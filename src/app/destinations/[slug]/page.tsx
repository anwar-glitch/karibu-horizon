
import { notFound } from "next/navigation";

import { destinations } from "@/data/destinations";

import DestinationDetailHero from "@/components/destinations/DestinationDetailHero";
import DestinationOverview from "@/components/destinations/DestinationOverview";
import DestinationGallery from "@/components/destinations/DestinationGallery";
import RelatedDestinations from "@/components/destinations/RelatedDestinations";
import DestinationExperiences from "@/components/destinations/DestinationExperiences";
import DestinationTravelTips from "@/components/destinations/DestinationTravelTips";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

export default async function DestinationDetailPage({ params }: Props) {
  const { slug } = await params;

  const destination = destinations.find(
    (item) => item.slug === slug
  );

  if (!destination) {
    notFound();
  }

 return (
  <main>
    <DestinationDetailHero destination={destination} />

    <DestinationOverview destination={destination} />

    <DestinationExperiences destination={destination} />

    <DestinationGallery destination={destination} />

    <DestinationTravelTips destination={destination} />

    <RelatedDestinations currentDestination={destination} />
  </main>
);
}
