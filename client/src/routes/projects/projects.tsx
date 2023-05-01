import { useContext, useEffect, useState } from "react";
import { LoaderContext } from "../../context/loader/loader.context";
import { DataContext } from "../../context/data/data.context";
import { motion } from "framer-motion";
import { MouseContext } from "../../context/mousepos/mouse.context";
import { WorkInterface } from "../../components/home/projects";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function ProjectsRoute() {
  const { setLoadingPage } = useContext(LoaderContext);
  const { data } = useContext(DataContext);

  console.log(data);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 800);
  }, []);

  return (
    <div className="w-screen flex justify-center min-h-screen px-[10%]">
      <div className="grid grid-cols-3 justify-items-center items-stretch gap-6 pt-5 pb-28 lg:grid-cols-2 md:grid-cols-1 md:items-center">
        {data?.projects &&
          data.projects.map((fw: any, i: number) => {
            return (
              <Project
                key={i}
                data={{
                  title: fw.title,
                  tech: fw.tech,
                  image: fw.image,
                  url: fw.url,
                  github: fw.github,
                }}
              />
            );
          })}
      </div>
    </div>
  );
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
    <motion.div
      className="w-full flex flex-col rounded-xl bg-white cursor-pointer transition-all shadow-xl max-h-fit pb-3 md:pb-5"
      id="project"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: isHovering ? "#171717" : "white",
        color: isHovering ? "white" : "black",
      }}
      whileTap={{ cursor: "grab" }}
    >
      <div className="overflow-hidden flex justify-center items-center h-4/6 w-full p-5">
        <img
          src={data.image}
          className="w-full max-h-[320px] rounded-lg transition-transform pointer-events-none md:max-h-max"
          alt={data.title}
        />
      </div>
      <div className="flex flex-col gap-3 py-5 px-5 md:min-h-[140px]">
        <p className="text-2xl font-medium">{data.title}</p>
        <p className="text-1xl text-[#6f6f6f] font-medium">{data.tech}</p>
      </div>
      <div className="flex w-full px-5 items-center justify-between">
        <p>
          {data.github && (
            <a href={data.github}>
              <GitHubIcon />
            </a>
          )}
        </p>
        <p>
          {data.url && (
            <a href={data.url}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3"
                />
              </svg>
            </a>
          )}
        </p>
      </div>
    </motion.div>
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
