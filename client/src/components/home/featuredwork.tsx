import { useContext, useState } from "react";
import { MouseContext } from "../../context/mousepos/mouse.context";
import { WidthContext } from "../../context/screenwidth/screenwidth.context";

export default function FeaturedWorks({ data }: { data: any }) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      {data &&
        data.map((fw: any, i: number) => {
          return (
            <FeaturedWork
              key={i}
              isInverted={i % 2 != 0}
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
    </div>
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

function FeaturedWork({ data, isInverted }: { data: WorkInterface; isInverted: boolean }) {
  const { options, setOptions } = useContext(MouseContext);
  const [isHoverImg, setIsHoverImage] = useState(false);
  const { screenwidth } = useContext(WidthContext);
  const handleMouseEnterImage = () => {
    setIsHoverImage(true);
    setOptions({
      ...options,
      scale: 5,
      zIndex: 3,
      bg: <FWHover color={data.mouseColor} />,
      bgColor: data.mouseColor,
    });
  };
  const handleMouseLeaveImage = () => {
    setIsHoverImage(false);
    if (screenwidth < 768) {
    } else {
      setOptions({
        ...options,
        scale: null,
        bg: null,
      });
    }
  };

  const handleMouseEnterDiv = () => {
    setIsHoverImage(false);
    if (screenwidth < 768) {
      setOptions({
        ...options,
        bgColor: data.mouseColor,
        zIndex: 3,
        invert: false,
        scale: 5,
        bg: <FWHover color={data.mouseColor} />,
      });
    } else {
      setOptions({
        ...options,
        bgColor: data.mouseColor,
        zIndex: 3,
        invert: false,
        scale: null,
        bg: null,
      });
    }
  };
  const handleMouseLeaveDiv = () => {
    setIsHoverImage(false);
    setOptions({
      ...options,
      scale: null,
      bgColor: null,
      zIndex: null,
      bg: null,
    });
  };
  const imageContClass =
    "max-w-[600px] shadow-md w-full aspect-[16/12] overflow-hidden rounded-lg cursor-pointer relative flex justify-center items-center";
  return (
    <div
      className="relative grid grid-cols-2 items-center w-full gap-8 p-5 py-10 md:flex overflow-hidden"
      onMouseEnter={handleMouseEnterDiv}
      onMouseLeave={handleMouseLeaveDiv}
    >
      <div
        className="relative w-full flex justify-end md:absolute md:top-0 md:bottom-0 md:left-0 md:right-0 md:justify-center"
        style={{
          order: isInverted && screenwidth > 768 ? "2" : null,
          justifyContent: isInverted && screenwidth > 768 ? "flex-start" : null,
        }}
      >
        <div
          className={
            isHoverImg && screenwidth > 768
              ? `${imageContClass} grayscale-[40%] md:grayscale-0`
              : imageContClass
          }
          onMouseEnter={handleMouseEnterImage}
          onMouseLeave={handleMouseLeaveImage}
          style={{}}
        >
          <img
            src={data.image}
            alt={data.title}
            className="w-full hover:scale-[1.01] transition-transform md:hover:scale-100 md:h-full md:w-auto md:max-w-none"
          />
          {screenwidth < 768 && (
            <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-black bg-opacity-80"></div>
          )}
        </div>
      </div>
      <div
        className="w-full flex justify-start h-full md:justify-center"
        style={{
          justifyContent: isInverted && screenwidth > 768 ? "flex-end" : null,
        }}
      >
        <div
          className="relative z-[2] flex justify-center flex-col items-start w-full max-w-[600px] gap-4 cursor-pointer md:px-5 md:text-white md:py-10 md:aspect-[16/10]"
          style={{
            textAlign: isInverted && screenwidth > 768 ? "right" : null,
          }}
        >
          <p className="text-2xl font-medium w-full">{data.title}</p>
          <p className="text-4xl font-semibold md:text-3xl w-full">{data.description}</p>
          <p className="text-1xl text-[#6f6f6f] font-medium w-full">{data.tech}</p>
        </div>
      </div>
    </div>
  );
}

function FWHover({ color }: { color: string }) {
  return (
    <div
      className="flex flex-col justify-center items-center w-full h-full text-white font-normal bg-opacity-60 font-[arial] bg-white"
      style={{
        backgroundColor: color,
        fontSize: "0.2rem",
        fontFamily: "san",
        fontWeight: "600",
        lineHeight: "3px",
      }}
    >
      <p>view</p>
      <p>case</p>
    </div>
  );
}
