import FeatureComponent from "@/components/featurepage/feature.component";
import featuredProjectsJson from "@/json/featuredProjects.json";
import allContent from "@/components/featurepage/content";
import { notFound } from "next/navigation";

import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

function getProjectBySlug(slug: string) {
  return featuredProjectsJson.find((proj) => proj.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const proj = getProjectBySlug(slug);

  if (!proj) {
    return {
      title: "Project not found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: proj.title,
    description: proj.metaDescription,
  };
}

export async function generateStaticParams() {
  return featuredProjectsJson.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const proj = getProjectBySlug(slug);

  if (!proj) {
    notFound();
  }

  const text = allContent[proj.id];

  return (
    <div>
      <FeatureComponent {...proj} text={text} />
    </div>
  );
}
