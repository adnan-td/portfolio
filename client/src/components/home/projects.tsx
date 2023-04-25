import { useContext, useRef, useState } from "react";
import { MouseContext } from "../../context/mousepos/mouse.context";
import { motion } from "framer-motion";

export default function ProjectsCompleted({ data }: { data: any }) {
  const containerRef = useRef(null);

  if (data) {
    data = [...data, ...data];
  }

  return (
    <div className="w-full flex justify-start items-center" ref={containerRef}>
      <motion.div
        className="flex justify-start items-stretch gap-8 md:gap-4"
        drag="x"
        dragConstraints={containerRef}
      >
        {data &&
          data.map((fw: any, i: number) => {
            return (
              <Project
                key={i}
                data={{
                  title: fw.title,
                  tech: fw.tech,
                  image: fw.image,
                }}
              />
            );
          })}
      </motion.div>
    </div>
  );
}

interface WorkInterface {
  title: string;
  tech: string;
  image: string;
}

function Project({ data }: { data: WorkInterface }) {
  const { options, setOptions } = useContext(MouseContext);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
    setOptions({
      ...options,
      scale: 4,
      bgColor: "transparent",
      zIndex: 1,
      bg: <FWHover />,
      invert: false,
    });
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
    setOptions({
      ...options,
      scale: null,
      bgColor: null,
      zIndex: null,
      bg: null,
    });
  };
  return (
    <div
      className="min-w-[400px] flex flex-col rounded-xl max-w-[750px] bg-white cursor-pointer md:min-w-[300px] md:w-[300px] transition-all shadow-xl"
      id="featuredWork"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: isHovering ? "#171717" : "white",
        color: isHovering ? "white" : "black",
      }}
    >
      <div className="overflow-hidden flex justify-center items-center h-4/6 w-full p-5">
        <img
          src={data.image}
          className="h-full min-w-full rounded-lg hover:scale-[1.02] transition-transform pointer-events-none"
          alt={data.title}
        />
      </div>
      <div className="flex flex-col gap-7 py-5 px-5">
        <p className="text-2xl font-medium">{data.title}</p>
        <p className="text-1xl text-[#6f6f6f] font-medium">{data.tech}</p>
      </div>
    </div>
  );
}

function FWHover() {
  return (
    <div
      className="flex flex-col justify-center items-center w-full h-full text-white bg-opacity-60 font-[arial] bg-white font-semibold"
      style={{ fontSize: "3px", letterSpacing: "0.07px" }}
    >
      <p>drag</p>
    </div>
  );
}
