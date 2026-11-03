
import { notFound } from "next/navigation";
import { guides } from "@/data/guides";
import GuideArticle from "@/components/guides/GuideArticle";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;

  const guide = guides.find((item) => item.slug === slug);

  if (!guide) {
    notFound();
  }

  return <GuideArticle guide={guide} />;
}
