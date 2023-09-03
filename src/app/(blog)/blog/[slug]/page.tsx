import { draftMode } from "next/headers";
import { LiveQuery } from "next-sanity/preview/live-query";
import { sanityFetch } from "../../../../../lib/sanity.fetch";
import BlogPage, { query } from "@/components-blog/blogpage/blogpage";
import { client } from "../../../../../lib/sanity.client";
import { groq } from "next-sanity";

export const revalidate = 3600 * 12;

export async function generateStaticParams() {
  const posts = (await client.fetch(getParamQuery)).posts as Post[];
  return posts?.map((post) => ({
    slug: post.slug.current,
  }));
}

interface resp {
  post?: Post;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await sanityFetch<resp>({ query, tags: ["post"], params: params });

  return (
    <LiveQuery enabled={draftMode().isEnabled} query={query} initialData={{}} as={BlogPage}>
      <BlogPage post={data?.post} />
    </LiveQuery>
  );
}

const getParamQuery = groq`
  {
    "posts": *[_type == "post"] {
      slug,
    }
  }
`;
