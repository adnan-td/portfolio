import { useContext, useEffect } from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import ParallaxEffectBgImg from "../parallax/parallaxbackground";
import { WidthContext } from "../../context/screenwidth/screenwidth.context";
import { Helmet } from "react-helmet";
import { UpdateFollower } from "react-mouse-follower";

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
  metaDescription,
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
  metaDescription: string;
}) {
  const { screenwidth } = useContext(WidthContext);

  useEffect(() => {
    const body = document.body;
    body.style.backgroundColor = bgColor;

    return () => {
      body.style.backgroundColor = "";
    };
  }, []);

  return (
    <UpdateFollower
      mouseOptions={{
        backgroundColor: mouseColor,
        zIndex: 1,
      }}
      className="w-screen flex flex-col justify-center items-center gap-16 pt-32 mb-16 z-[1]"
    >
      <Helmet>
        <title>Featured - {title}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <div className="w-[45%] xl:w-[65%] lg:w-[70%] md:w-[75%] sm:w-[80%] mb-52 flex flex-col gap-5 md:mb-10">
        <p className="text-2xl font-medium md:text-lg">Project</p>
        <p className="text-6xl font-semibold md:text-3xl">{title}</p>
        <p className="text-6xl font-medium md:text-3xl">{description}</p>
      </div>
      {screenwidth >= 768 ? (
        <ParallaxEffectBgImg
          img={mainImg}
          className="w-full h-[120vh] aspect-video md:aspect-square"
        />
      ) : (
        <div
          className="w-full aspect-square"
          style={{
            height: "100%",
            width: "100%",
            background: `url("${mainImg}") center center / cover no-repeat`,
          }}
        ></div>
      )}

      <div className="min-h-screen w-full flex flex-col justify-center items-center px-[20%] md:px-[10%] gap-16 mb-36">
        <div className="w-full flex gap-6 justify-center items-start lg:flex-col">
          <p className="text-2xl w-[20%] font-semibold lg:w-full">Technologies:</p>
          <div className="w-[80%] text-2xl flex gap-8 flex-wrap lg:w-full sm:text-xl sm:gap-5">
            {tech.split(",").map((item, i) => {
              return (
                <div
                  className="rounded-full px-6 py-3 border border-[rgba(0,0,0,.1)] flex justify-center items-center"
                  key={i}
                >
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full flex gap-6 justify-center items-start sm:flex-col">
          <p className="text-2xl w-[20%] font-semibold sm:w-full">About:</p>
          <div className="w-[80%] text-2xl sm:w-full sm:text-xl">{text}</div>
        </div>
        <div className="w-full flex gap-6 justify-center items-start sm:flex-col">
          <p className="text-2xl w-[20%] font-semibold sm:w-full">Links:</p>
          <div className="w-[80%] text-lg flex gap-8 sm:w-full sm:text-xl flex-wrap sm:gap-5">
            {githubLink && (
              <a
                target="_blank"
                rel="noreferrer"
                href={githubLink}
                className="gap-2 rounded-lg bg-black text-white px-6 py-2 border border-[rgba(0,0,0,.1)] flex justify-center items-center hover:scale-110 transition-transform"
              >
                GitHub <LaunchIcon />
              </a>
            )}
            {projectLink && (
              <a
                target="_blank"
                rel="noreferrer"
                href={projectLink}
                className="gap-2 rounded-lg bg-black text-white px-6 py-2 border border-[rgba(0,0,0,.1)] flex justify-center items-center hover:scale-110 transition-transform"
              >
                Project <LaunchIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </UpdateFollower>
  );
}
