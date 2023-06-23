import FooterComponent from "./components/footer/footer.component";
import MouseCircleComponent from "./components/mouse_circle/mouse_circle.component";
import NavbarComponent from "./components/navbar/navbar.component";
import { useContext, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LoaderState } from "./context/loader/loader.context";
import CallToAction from "./components/calltoaction/calltoaction";
import { WidthContext } from "./context/screenwidth/screenwidth.context";

export default function SubLayout({ children }: { children: React.ReactNode }) {
  const { screenwidth } = useContext(WidthContext);
  return (
    <div className={"min-h-screen w-screen "}>
      {screenwidth > 640 ? <MouseCircleComponent /> : null}
      <LoaderState>
        <NavbarComponent />
        {children}
        <FooterComponent />
        <CallToAction />
      </LoaderState>
    </div>
  );
}
