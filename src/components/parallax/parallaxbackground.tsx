import { useRef } from "react";
import { motion, useTransform, useScroll, MotionValue } from "framer-motion";

const ParallaxEffectBgImg = ({ img, className }: { img: string; className: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useParallax(scrollYProgress, [-1000, 1000]);
  return (
    <div className={className} style={{ overflow: "hidden" }}>
      <motion.div
        style={{
          height: "100%",
          width: "100%",
          background: `url("${img}") center center / cover no-repeat`,
          translateY: y,
        }}
      />
    </div>
  );
};

export default ParallaxEffectBgImg;

function useParallax(value: MotionValue<number>, distance: [string | number, string | number]) {
  return useTransform(value, [0, 1], distance);
}
