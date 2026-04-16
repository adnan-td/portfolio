"use client";

import { useRef } from "react";
import { motion, useTransform, useScroll, MotionValue } from "framer-motion";

const ParallaxEffectBgImg = ({ img, className }: { img: string; className: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useParallax(scrollYProgress, [140, -120]);

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden", position: "relative" }}>
      <motion.img
        src={img}
        alt=""
        aria-hidden="true"
        draggable={false}
        style={{
          position: "absolute",
          left: 0,
          top: 50,
          width: "100%",
          height: "calc(100% + 260px)",
          objectFit: "contain",
          objectPosition: "center center",
          y,
        }}
      />
    </div>
  );
};

export default ParallaxEffectBgImg;

function useParallax(value: MotionValue<number>, distance: [string | number, string | number]) {
  return useTransform(value, [0, 1], distance);
}
