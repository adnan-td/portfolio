import { useQuery } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import { gql } from "@apollo/client";
import { LoaderContext } from "../../context/loader/loader.context";

import FeaturedWorks from "../../components/home/featuredwork";
import "./home.scss";
import LandingPage from "./landing";
import TimeLine from "../../components/home/timeline";
import Learned from "../../components/home/learned";
import ProjectsCompleted from "../../components/home/projects";

export default function Home() {
  const { data, loading } = useQuery(fwQuery);
  const { setLoadingPage } = useContext(LoaderContext);
  useEffect(() => {
    setTimeout(() => {
      if (!loading) {
        setLoadingPage(false);
      }
    }, 1000);
  }, [loading, setLoadingPage]);

  return <HomeRoute data={data} />;
}

export function HomeRoute({ data }: { data: any }) {
  return (
    <>
      <div className="px-[5vw] flex flex-col w-full items-center">
        <LandingPage />

        <div className="flex flex-col gap-6 mb-28">
          <div className="text-6xl font-semibold flex flex-col gap-3 lg:text-5xl">
            <p>Featured</p>
            <p className="main-skills-head">Projects</p>
          </div>
        </div>
        <div className="w-screen px-[5vw] flex justify-center items-center mb-48 gap-10">
          <FeaturedWorks data={data?.featuredWorks} />
        </div>

        <div className="flex flex-col gap-6 mb-28">
          <div className="text-6xl font-semibold flex flex-col gap-3 lg:text-5xl">
            <p>What I've</p>
            <p className="main-skills-head">Learned</p>
          </div>
        </div>
        <div className="w-screen px-[5vw] flex justify-center flex-wrap mb-28 gap-10">
          <Learned />
        </div>

        <div className="flex flex-col gap-6 mb-28">
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
        <div className="w-screen pl-[5vw] py-10 flex justify-center mb-48 gap-10 overflow-hidden">
          <ProjectsCompleted data={data?.featuredWorks} />
        </div>
      </div>
    </>
  );
}

const fwQuery = gql`
  {
    featuredWorks {
      id
      title
      description
      tech
      image
      bgColor
      mouseColor
    }

    experiences(options: { sort: { order: ASC } }) {
      date
      description
      subtitle
      title
      tech
    }
  }
`;
