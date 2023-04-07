import { useScroll, useTransform, motion, MotionValue, useMotionValueEvent } from "framer-motion";
import { useContext, useRef } from "react";
import { MouseContext } from "../../context/mousepos/mouse.context";

export default function ParallaxComponent({
  mouseColor,
  zIndex,
  className,
  childClass,
  style,
  children,
}: {
  mouseColor?: string;
  zIndex: number;
  className?: string;
  childClass?: string;
  style?: any;
  children?: React.ReactNode;
}) {
  const { options, setOptions } = useContext(MouseContext);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });

  const handleMouseEnter = () => {
    setOptions({
      ...options,
      bgColor: mouseColor,
      zIndex: zIndex,
      customPosition: null,
      scale: null,
    });
  };

  const handleMouseLeave = () => {
    setOptions({
      ...options,
      bgColor: null,
      zIndex: null,
    });
  };
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Page scroll: ", latest);
  // });

  const y = useParallax(scrollYProgress, [-400, 0]);
  return (
    <motion.div
      className={`relative left-0 top-0 overflow-hidden w-full ` + className}
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      <motion.div style={{ y }} className={"relative " + childClass}>
        {children}
      </motion.div>
    </motion.div>
  );
}

function useParallax(value: MotionValue<number>, distance: [string | number, string | number]) {
  return useTransform(value, [0, 1], distance);
}
