import { useQuery } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import { gql } from "@apollo/client";
import { LoaderContext } from "../../context/loader/loader.context";

import FeaturedWorks from "./featuredwork";
import "./home.scss";
import LandingPage from "./landing";
import TimeLine from "./timeline";

export default function Home() {
  const { data: fw, loading: fwloading } = useQuery(fwQuery);
  const { setLoadingPage } = useContext(LoaderContext);
  useEffect(() => {
    setTimeout(() => {
      if (!fwloading) {
        setLoadingPage(false);
      }
    }, 1000);
  }, [fwloading, setLoadingPage]);

  return <HomeRoute fw={fw?.featuredWorks} />;
}

export function HomeRoute({ fw }: { fw: any }) {
  return (
    <>
      <div className="px-[5vw] flex flex-col w-full items-center">
        <LandingPage />
        <div className="flex flex-col gap-6 mb-28">
          <div className="text-6xl font-semibold flex flex-col gap-3">
            <p>Where I've</p>
            <p className="main-skills-head">Worked</p>
          </div>
        </div>
        <div className="w-screen px-[5vw] flex justify-center flex-wrap mb-28 gap-10">
          <TimeLine data={{}} />
        </div>

        <div className="flex flex-col gap-6 mb-28">
          <div className="text-6xl font-semibold flex flex-col gap-3">
            <p>Featured</p>
            <p className="main-skills-head">Projects</p>
          </div>
        </div>
        <div className="w-screen px-[5vw] flex justify-center flex-wrap mb-28 gap-10">
          <FeaturedWorks data={fw} />
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
  }
`;
