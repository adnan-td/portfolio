import { useContext } from "react";
import FeaturedWorks from "../../components/home/featuredwork";
import "./home.scss";
import LandingPage from "./landing";
import TimeLine from "../../components/home/timeline";
import Learned from "../../components/home/learned";
import ProjectsCompleted from "../../components/home/projects";
import featuredProjectsJson from "../../json/featuredProjects.json";
import { DataContext } from "../../context/data/data.context";
import { Link } from "react-router-dom";

export default function Home() {
  const { data } = useContext(DataContext);

  return <HomeRoute data={data} />;
}

export function HomeRoute({ data }: { data: any }) {
  return (
    <>
      <div className="px-[5vw] flex flex-col w-full items-center">
        <LandingPage />

        <div className="flex flex-col gap-6 mb-20">
          <div className="text-6xl font-semibold flex flex-col gap-3 lg:text-5xl">
            <p>Featured</p>
            <p className="main-skills-head">Projects</p>
          </div>
        </div>
        <div className="w-screen px-[5vw] flex justify-center items-center mb-16 gap-10">
          <FeaturedWorks data={featuredProjectsJson} />
        </div>
        <div className="flex mb-48">
          <HomeBtn href="/projects" text="View more" />
        </div>

        <div className="flex flex-col gap-6 mb-16">
          <div className="text-6xl font-semibold flex flex-col gap-3 lg:text-5xl">
            <p>What I've</p>
            <p className="main-skills-head">Learned</p>
          </div>
        </div>
        <div className="w-screen px-[5vw] flex justify-center flex-wrap mb-40 gap-10">
          <Learned />
        </div>

        <div className="flex flex-col gap-6 mb-20">
          <div className="text-6xl font-semibold flex flex-col gap-3 lg:text-5xl">
            <p>Where I've</p>
            <p className="main-skills-head">Worked</p>
          </div>
        </div>
        <div className="w-screen px-[5vw] flex justify-center flex-wrap mb-28 gap-10">
          <TimeLine data={data?.experiences} />
        </div>

        <div className="flex flex-col gap-6 mb-20">
          <div className="text-6xl font-semibold flex flex-col gap-3 lg:text-5xl">
            <p>Projects</p>
            <p className="main-skills-head">Completed</p>
          </div>
        </div>
        <div className="w-screen pl-[5vw] py-10 flex justify-center mb-16 gap-10 overflow-hidden">
          <ProjectsCompleted />
        </div>
        <div className="flex mb-48">
          <HomeBtn href="/projects" text="View all projects" />
        </div>
      </div>
    </>
  );
}

function HomeBtn({ href, text }: { href: string; text: string }) {
  return (
    <Link to={href}>
      <button className="home-btn home-btn_more z-[1]">
        <span className="home-btn_more-title">
          <span data-text={text}>{text}</span>
        </span>
        <span className="home-btn_more-ripple">
          <span></span>
        </span>
      </button>
    </Link>
  );
}
