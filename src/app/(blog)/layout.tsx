import dynamic from "next/dynamic";
import { draftMode } from "next/headers";
import { token } from "../../../lib/sanity.fetch";
import { ScreenWidth } from "@/context/screenwidth/screenwidth.context";
import Sublayout from "@/components-blog/layout";
import Structure from "@/components-blog/layout/structure";
import "../globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weekly Blogs: Tech Insights, Tutorials, and How-to Advice",
  description:
    "Discover tech insights, tutorials, and how-to guides on our blog. Stay updated with the latest in software development, full-stack expertise, web, and mobile technologies.",
  keywords: "blog, software, tech, development, full stack, web, mobile",
  openGraph: {
    title: "Weekly Blogs: Tech Insights, Tutorials, and How-to Advice",
    description:
      "Discover tech insights, tutorials, and how-to guides on our blog. Stay updated with the latest technologies.",
    images: "/Logo.svg",
  },
  metadataBase: new URL("https://adnansh.in"),
};

const PreviewProvider = dynamic(() => import("../../components-blog/PreviewProvider"));

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4264568309720492"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <ScreenWidth>
          <Sublayout>
            {draftMode().isEnabled ? (
              <PreviewProvider token={token}>
                <Structure>{children}</Structure>
              </PreviewProvider>
            ) : (
              <Structure>{children}</Structure>
            )}
          </Sublayout>
        </ScreenWidth>
      </body>
    </html>
  );
}
