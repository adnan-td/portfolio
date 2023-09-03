import FeatureComponent from "@/components/featurepage/feature.component";
import featuredProjectsJson from "@/json/featuredProjects.json";
import allContent from "@/components/featurepage/content";
import NotFound from "@/app/not-found";

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const proj = featuredProjectsJson.find((proj) => {
    return proj.slug == params.slug;
  });
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

export default function Page({ params }: { params: { slug: string } }) {
  const proj = featuredProjectsJson.find((proj) => {
    return proj.slug == params.slug;
  });
  if (proj == null) return <NotFound />;

  var text = allContent[proj?.id];

  return (
    <div>
      <FeatureComponent {...proj} text={text} />
    </div>
  );
}
