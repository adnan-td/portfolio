/* eslint-disable @next/next/no-page-custom-font */
import Script from "next/script";
import "./globals.css";
import type { Metadata } from "next";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
