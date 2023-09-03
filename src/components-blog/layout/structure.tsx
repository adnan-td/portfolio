"use client";

import { useEffect } from "react";
import { useControlOptions } from "react-mouse-follower";
import { usePathname } from "next/navigation";
import FooterComponent from "@/components-blog/footer/footer.component";
import NavbarComponent from "@/components-blog/navbar/navbar.component";

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
    </div>
  );
}
