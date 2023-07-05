import { useEffect } from "react";
import FeatureComponent from "../../components/featurepage/feature.component";
import featuredProjectsJson from "../../json/featuredProjects.json";
export default function FeaturedRoute({ id, text }: { id: string; text?: string | JSX.Element }) {
  const proj = featuredProjectsJson.find((proj) => {
    return proj.id === id;
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <FeatureComponent {...proj} text={text} />
    </div>
  );
}
