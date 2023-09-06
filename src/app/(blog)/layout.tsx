/* eslint-disable @next/next/no-page-custom-font */
import dynamic from "next/dynamic";
import { draftMode } from "next/headers";
import { token } from "../../../lib/sanity.fetch";
import { ScreenWidth } from "@/context/screenwidth/screenwidth.context";
import Sublayout from "@/components-blog/layout";
import Structure from "@/components-blog/layout/structure";
import Script from "next/script";
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
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-V6DNDCN1PB"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V6DNDCN1PB');
            `}
        </Script>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4264568309720492"
          crossOrigin="anonymous"
        ></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
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
