import { useContext, useState } from "react";
import { MouseContext } from "../../context/mousepos/mouse.context";

export default function ProjectsCompleted({ data }: { data: any }) {
  const randomItems: any[] = [];
  if (data?.length >= 8) {
    while (randomItems.length < 8) {
      const randomIndex: number = Math.floor(Math.random() * data.length);
      const randomItem = data[randomIndex];
      if (!randomItems.includes(randomItem)) {
        randomItems.push(randomItem);
      }
    }
  } else {
    if (data) {
      randomItems.push(...data);
    }
  }

  return (
    <div className="grid grid-cols-4 justify-items-center items-stretch gap-10 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {randomItems &&
        randomItems.map((fw: any, i: number) => {
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
      className="w-full flex flex-col  rounded-xl max-w-[750px] bg-white cursor-pointer md:w-[90%] transition-all shadow-xl"
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
          className="h-full min-w-full rounded-lg hover:scale-[1.02] transition-transform"
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
      <p>view</p>
    </div>
  );
}
