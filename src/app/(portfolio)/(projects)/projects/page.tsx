import AllProjectPage from "@/components/allprojects/allprojects.component";
import { revalidate as rv } from "@/constants";
import { groq } from "next-sanity";
import { client } from "@/../lib/sanity.client";

export const revalidate = rv;

export default async function Page() {
  const data = await client.fetch(getProjects);
  return <AllProjectPage projects={data?.projects} />;
}

const getProjects = groq`
  {
    "projects": *[_type == "project"]
  }
`;
