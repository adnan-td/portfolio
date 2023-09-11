import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { myTheme } from "./sanity.theme";
import StudioLogo from "@/components-blog/studio-logo";
import { defaultDocumentNode } from "./sanity.structure";
import { colorInput } from "@sanity/color-input";
import { codeInput } from "@sanity/code-input";

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
    colorInput(),
    codeInput(),
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
