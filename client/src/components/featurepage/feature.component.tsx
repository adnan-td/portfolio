import { useContext, useEffect } from "react";
import { MouseContext } from "../../context/mousepos/mouse.context";
import LaunchIcon from "@mui/icons-material/Launch";
import ParallaxEffectBgImg from "../parallax/parallaxbackground";

export default function FeatureComponent({
  text,
  images,
  title,
  tech,
  mainImg,
  githubLink,
  projectLink,
  bgColor,
  description,
  mouseColor,
}: {
  text?: string | JSX.Element;
  images: string[];
  mainImg: string;
  title: string;
  githubLink: string;
  projectLink: string;
  bgColor: string;
  mouseColor: string;
  tech: string;
  description: string;
}) {
  const { options, setOptions } = useContext(MouseContext);
  const handleMouseEnter = () => {
    setOptions({
      ...options,
      scale: null,
      bgColor: mouseColor,
      bg: null,
    });
  };
  const handleMouseLeave = () => {
    setOptions({
      ...options,
      scale: null,
      bgColor: null,
    });
  };

  useEffect(() => {
    const body = document.body;
    body.style.backgroundColor = bgColor;

    return () => {
      body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div
      className="w-screen flex flex-col justify-center items-center gap-16 pt-32 mb-16 z-[1]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-[45%] md:w-[65%] sm:w-[70%] mb-52 flex flex-col gap-5 md:mb-20">
        <p className="text-2xl font-medium md:text-lg">Project</p>
        <p className="text-6xl font-semibold md:text-3xl">{title}</p>
        <p className="text-6xl font-medium md:text-3xl">{description}</p>
      </div>
      <ParallaxEffectBgImg img={mainImg} className="w-full aspect-video md:aspect-square" />
      <div className="min-h-screen w-full flex flex-col justify-center items-center px-[20%] md:px-[10%] gap-10">
        <div className="w-full flex gap-6 justify-center items-start">
          <p className="text-2xl w-[20%] font-semibold">Technologies:</p>
          <div className="w-[80%] text-2xl flex gap-8">
            {tech.split(",").map((item) => {
              return (
                <div className="rounded-full px-6 py-3 border border-[rgba(0,0,0,.1)] flex justify-center items-center">
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full flex gap-6 justify-center items-start">
          <p className="text-2xl w-[20%] font-semibold">About:</p>
          <div className="w-[80%] text-2xl">{text}</div>
        </div>
        <div className="w-full flex gap-6 justify-center items-start">
          <p className="text-2xl w-[20%] font-semibold">Links:</p>
          <div className="w-[80%] text-lg flex gap-8">
            <a
              href={githubLink}
              className="gap-2 rounded-lg bg-black text-white px-6 py-2 border border-[rgba(0,0,0,.1)] flex justify-center items-center hover:scale-110 transition-transform"
            >
              GitHub <LaunchIcon />
            </a>
            <a
              href={projectLink}
              className="gap-2 rounded-lg bg-black text-white px-6 py-2 border border-[rgba(0,0,0,.1)] flex justify-center items-center hover:scale-110 transition-transform"
            >
              Project <LaunchIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
