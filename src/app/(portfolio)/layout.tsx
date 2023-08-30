/* eslint-disable @next/next/no-page-custom-font */
import { ScreenWidth } from "@/context/screenwidth/screenwidth.context";
import "../globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import Sublayout from "@/components/layout";
import Structure from "@/components/layout/structure";

export const metadata: Metadata = {
  title: "Adnan Husain - Software Developer and Engineer",
  description:
    "Experienced software engineer specializing in full-stack application development. Explore my portfolio to see my projects, skills, and achievements in front-end and back-end development, UI/UX, game development, problem-solving and more.",
  keywords:
    "Software engineer portfolio, personal portfolio, web development, mobile app development, front-end development, back-end development, UI/UX design, problem-solving, game development, hackathons",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Script id="microsoft-clarity">
        {`
          (function (c, l, a, r, i, t, y) {
            c[a] =
              c[a] ||
              function () {
                (c[a].q = c[a].q || []).push(arguments);
              };
            t = l.createElement(r);
            t.async = 1;
            t.src = "https://www.clarity.ms/tag/" + i;
            y = l.getElementsByTagName(r)[0];
            y.parentNode.insertBefore(t, y);
          })(window, document, "clarity", "script", "hluabznqx8");
          
          `}
      </Script>
      <head>
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
            <Structure>{children}</Structure>
          </Sublayout>
        </ScreenWidth>
      </body>
    </html>
  );
}
