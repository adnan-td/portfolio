// Sanity CLI configuration for the @sanity/cli
// The CLI requires `api.projectId` and `api.dataset` to be present.
// This file reads from environment variables used in `sanity.config.ts`.
module.exports = {
  api: {
    projectId:
      process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
    dataset:
      process.env.SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  },
};
