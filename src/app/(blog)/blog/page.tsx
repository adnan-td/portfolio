import { draftMode } from "next/headers";
import { LiveQuery } from "next-sanity/preview/live-query";
import DocumentsCount, { query } from "../../../components-blog/DocumentsCount";
import PreviewDocumentsCount from "../../../components-blog/PreviewDocumentsCount";
import { sanityFetch } from "../../../../lib/sanity.fetch";

export default async function IndexPage() {
  const data = await sanityFetch<number>({ query, tags: ["post"] });

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={query}
      initialData={data}
      as={PreviewDocumentsCount}
    >
      <DocumentsCount data={data} />
    </LiveQuery>
  );
}
