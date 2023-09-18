import "server-only";

import type { QueryParams } from "@sanity/client";
import { draftMode } from "next/headers";

import { client } from "./sanity.client";
import { revalidate } from "@/constants";

export const token = process.env.SANITY_API_READ_TOKEN;

const DEFAULT_PARAMS = {} as QueryParams;

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
}: {
  query: string;
  params?: QueryParams;
}): Promise<QueryResponse> {
  const isDraftMode = draftMode().isEnabled;
  if (isDraftMode && !token) {
    throw new Error("The `SANITY_API_READ_TOKEN` environment variable is required.");
  }

  return client.fetch<QueryResponse>(query, params, {
    ...(isDraftMode && {
      token: token,
      perspective: "previewDrafts",
    }),
    next: {
      revalidate: revalidate,
      ...(isDraftMode && { revalidate: 30 }),
    },
  });
}
