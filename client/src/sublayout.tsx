import FooterComponent from "./components/footer/footer.component";
import MouseCircleComponent from "./components/mouse_circle/mouse_circle.component";
import NavbarComponent from "./components/navbar/navbar.component";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LoaderState } from "./context/loader/loader.context";

export default function SubLayout({ children }: { children: React.ReactNode }) {
  const [isHovering, setIsHovering] = useState<boolean>(false);
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
      <AnimatePresence mode="wait">{isHovering && <MouseCircleComponent />}</AnimatePresence>
      <LoaderState>
        <NavbarComponent />
        {children}
        <FooterComponent />
      </LoaderState>
    </div>
  );
}
