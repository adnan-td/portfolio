import { draftMode } from "next/headers";
import { LiveQuery } from "next-sanity/preview/live-query";
import BlogMain, { query } from "../../../components-blog/main/blog.main";
import { sanityFetch } from "../../../../lib/sanity.fetch";

export default async function IndexPage() {
  const data = await sanityFetch<number>({ query });

  return (
    <LiveQuery enabled={draftMode().isEnabled} query={query} initialData={data} as={BlogMain}>
      <BlogMain data={data} />
    </LiveQuery>
  );
}
