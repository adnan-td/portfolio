"use client";

import { useContext, useEffect, useState } from "react";
import { LoaderContext } from "@/context/loader/loader.context";
import { DataContext } from "@/context/data/data.context";
import { WorkInterface } from "@/components/home/projects";
import { SiGithub as GitHubIcon } from "react-icons/si";
import { UpdateFollower } from "react-mouse-follower";
import Image from "next/image";

export default function Page() {
  const { setLoadingPage } = useContext(LoaderContext);
  const { data } = useContext(DataContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!data) {
      setLoadingPage(false);
    } else {
      setLoadingPage(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

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
  const [isHovering, setIsHovering] = useState<boolean>(false);
  return (
    <UpdateFollower
      className="w-full flex flex-col rounded-xl bg-white transition-all shadow-xl max-h-fit pb-3 md:pb-5"
      style={{
        backgroundColor: isHovering ? "#171717" : "white",
        color: isHovering ? "white" : "black",
      }}
      mouseOptions={{
        backgroundColor: "white",
        zIndex: 1,
      }}
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
    >
      <div className="overflow-hidden flex justify-center items-center h-4/6 w-full p-5">
        <Image
          src={data.image}
          className="w-full max-h-[320px] rounded-lg transition-transform pointer-events-none md:max-h-max"
          alt={data.title}
          width="1920"
          height="1920"
        />
      </div>
      <div className="flex flex-col gap-3 py-5 px-5 md:min-h-[140px]">
        <p className="text-2xl font-medium">{data.title}</p>
        <p className="text-1xl text-[#6f6f6f] font-medium">{data.tech}</p>
      </div>
      <div className="flex w-full px-5 items-center justify-between">
        <p>
          {data.github && (
            <a href={data.github} target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
          )}
        </p>
        <p>
          {data.url && (
            <a href={data.url} target="_blank" rel="noreferrer">
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
    </UpdateFollower>
  );
}
