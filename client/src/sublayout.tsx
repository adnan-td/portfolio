import FooterComponent from "./components/footer/footer.component";
import MouseCircleComponent from "./components/mouse_circle/mouse_circle.component";
import NavbarComponent from "./components/navbar/navbar.component";
import { useContext, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LoaderState } from "./context/loader/loader.context";
import CallToAction from "./components/calltoaction/calltoaction";
import { WidthContext } from "./context/screenwidth/screenwidth.context";

export default function SubLayout({ children }: { children: React.ReactNode }) {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const { screenwidth } = useContext(WidthContext);
  return (
    <div
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
      className={"min-h-screen w-screen "}
    >
      <AnimatePresence mode="wait">
        {screenwidth > 640 && isHovering && <MouseCircleComponent />}
      </AnimatePresence>
      <LoaderState>
        <NavbarComponent />
        {children}
        <FooterComponent />
        <CallToAction />
      </LoaderState>
    </div>
  );
}
