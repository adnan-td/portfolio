"use client";

import { useEffect } from "react";
import { useControlOptions } from "react-mouse-follower";
import { usePathname } from "next/navigation";
import CallToAction from "@/components/calltoaction/calltoaction";
import FooterComponent from "@/components/footer/footer.component";
import NavbarComponent from "@/components/navbar/navbar.component";

export default function Structure({ children }: { children: React.ReactNode }) {
  const { clearLayers } = useControlOptions();
  const location = usePathname();
  useEffect(() => {
    clearLayers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div className={"min-h-screen w-screen "}>
      <NavbarComponent />
      {children}
      <FooterComponent />
      <CallToAction />
    </div>
  );
}
