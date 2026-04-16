"use client";

import CallToAction from "@/components/calltoaction/calltoaction";
import FooterComponent from "@/components/footer/footer.component";
import NavbarComponent from "@/components/navbar/navbar.component";

export default function Structure({ children }: { children: React.ReactNode }) {
  return (
    <div className={"min-h-screen w-screen "}>
      <NavbarComponent />
      {children}
      <FooterComponent />
      <CallToAction />
    </div>
  );
}
