import { MouseContext } from "../../context/mousepos/mouse.context";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";

interface Pos {
  x: number;
  y: number;
}

export default function MouseCircleComponent() {
  const { options, radius } = useContext(MouseContext);
  const [pos, setPos] = useState<Pos>({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    function mouseMove(event: any) {
      setPos({
        x: event.clientX - radius,
        y: event.clientY - radius,
      });
    }
    window.addEventListener("mousemove", mouseMove);
    return () => {};
  }, []);
  return (
    <motion.div
      className={
        "fixed top-0 left-0 pointer-events-none flex justify-center items-center w-min h-min rounded-full"
      }
      initial={{
        x: pos.x,
        y: pos.y,
        scale: 0,
      }}
      animate={{
        x: options.customPosition ? options.customPosition.x : pos.x,
        y: options.customPosition ? options.customPosition.y : pos.y,
        scale: options.scale || 1,
        skewX: options.skew,
        rotate: options.rotate || 0,
      }}
      exit={{
        x: pos.x,
        y: pos.y,
        scale: 0,
      }}
      style={{
        backgroundColor: options.bgColor || "black",
        mixBlendMode: options.mixBlendMode || "initial",
        zIndex: options.zIndex || -5,
      }}
      transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
      id="mouse-follower"
    >
      <div className="w-3 h-3 flex justify-center items-center bg-transparent">
        <div className="w-full h-full rounded-full flex justify-center items-center overflow-hidden">
          {options.bg && options.bg}
        </div>
      </div>
    </motion.div>
  );
}
