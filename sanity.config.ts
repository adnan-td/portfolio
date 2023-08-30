import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { myTheme } from "./sanity.theme";
import StudioLogo from "@/components-blog/studio-logo";
import { defaultDocumentNode } from "./sanity.structure";

export default defineConfig({
  basePath: "/admin",
  name: "portfolio-admin",
  title: "Portfolio Admin",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,

  plugins: [
    deskTool({
      defaultDocumentNode,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  theme: myTheme,
  studio: {
    components: {
      logo: StudioLogo,
    },
  },
});
