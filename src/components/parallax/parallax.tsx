"use client";

import { useScroll, useTransform, motion, MotionValue, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";
import { UpdateFollower } from "react-mouse-follower";

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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Page scroll: ", latest);
  // });

  const y = useParallax(scrollYProgress, [-400, 0]);
  return (
    <UpdateFollower
      mouseOptions={{
        backgroundColor: mouseColor,
        zIndex: zIndex,
      }}
    >
      <motion.div
        className={`relative left-0 top-0 overflow-hidden w-full ` + className}
        ref={ref}
        style={style}
      >
        <motion.div className={"relative " + childClass} style={{ translateY: y }}>
          {children}
        </motion.div>
      </motion.div>
    </UpdateFollower>
  );
}

function useParallax(value: MotionValue<number>, distance: [string | number, string | number]) {
  return useTransform(value, [0, 1], distance);
}
