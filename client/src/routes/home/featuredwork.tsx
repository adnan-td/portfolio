import { useContext, useState } from "react";
import { MouseContext } from "../../context/mousepos/mouse.context";

export default function FeaturedWorks({ data }: { data: any }) {
  return (
    <>
      {data &&
        data.map((fw: any, i: number) => {
          return (
            <FeaturedWork
              key={i}
              data={{
                title: fw.title,
                description: fw.description,
                tech: fw.tech,
                image: fw.image,
                bgColor: fw.bgColor,
                mouseColor: fw.mouseColor,
              }}
            />
          );
        })}
    </>
  );
}

interface WorkInterface {
  title: string;
  description: string;
  tech: string;
  image: string;
  bgColor: string;
  mouseColor: string;
}

function FeaturedWork({ data }: { data: WorkInterface }) {
  const { options, setOptions } = useContext(MouseContext);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
    setOptions({
      ...options,
      scale: 5,
      bgColor: "transparent",
      zIndex: 1,
      bg: <FWHover color={data.mouseColor} />,
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
      className="w-2/5 flex flex-col  rounded-xl max-w-[750px] bg-white cursor-pointer md:w-[90%] transition-all shadow-xl"
      id="featuredWork"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor: isHovering ? data.bgColor : "white" }}
    >
      <div className="overflow-hidden flex justify-center items-center w-full p-5">
        <img
          src={data.image}
          className="w-full rounded-lg hover:scale-[1.01] transition-transform"
          alt={data.title}
        />
      </div>
      <div className="flex flex-col gap-10 py-5 px-7">
        <p className="text-2xl font-medium">{data.title}</p>
        <p className="text-4xl font-semibold md:text-3xl">{data.description}</p>
        <p className="text-1xl text-[#6f6f6f] font-medium">{data.tech}</p>
      </div>
    </div>
  );
}

function FWHover({ color }: { color: string }) {
  return (
    <div
      className="flex flex-col justify-center items-center w-full h-full text-white font-normal bg-opacity-30 font-[arial]"
      style={{ backgroundColor: color, fontSize: "2.5px", letterSpacing: "0.07px" }}
    >
      <p>view</p>
    </div>
  );
}
