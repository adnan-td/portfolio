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
