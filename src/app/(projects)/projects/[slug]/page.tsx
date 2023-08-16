import FeatureComponent from "@/components/featurepage/feature.component";
import featuredProjectsJson from "@/json/featuredProjects.json";
import allContent from "@/components/featurepage/content";
import Error from "next/error";
import NotFound from "@/app/not-found";

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
