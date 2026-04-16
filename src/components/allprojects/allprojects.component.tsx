"use client";
import { useEffect, useState } from "react";
import { WorkInterface } from "@/components/home/projects";
import { SiGithub as GitHubIcon } from "react-icons/si";
import Image from "next/image";
import urlFor from "@/../lib/sanity.urlfor";

export default function AllProjectPage({ projects }: { projects: any[] }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-screen flex justify-center min-h-screen px-[10%]">
      <div className="grid grid-cols-3 justify-items-center items-stretch gap-6 pt-5 pb-28 lg:grid-cols-2 md:grid-cols-1 md:items-center">
        {projects &&
          projects.map((fw: any, i: number) => {
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
    <div
      className="h-full min-h-[420px] w-full flex flex-col rounded-[28px] bg-white transition-all shadow-xl overflow-hidden"
      style={{
        backgroundColor: isHovering ? "#171717" : "white",
        color: isHovering ? "white" : "black",
      }}
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
    >
      <div className="overflow-hidden flex justify-center items-center h-[230px] w-full p-5">
        <Image
          src={urlFor(data.image).url()}
          className="h-full w-full rounded-lg object-contain object-center transition-transform pointer-events-none"
          alt={data.title}
          width="1920"
          height="1920"
        />
      </div>

      <div className="flex flex-col gap-3 px-5 pt-2 pb-5 min-h-[150px]">
        <p
          className="text-2xl font-medium leading-tight min-h-[3.75rem] overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {data.title}
        </p>
        <p
          className="text-1xl text-[#6f6f6f] font-medium leading-snug min-h-[2.75rem] overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {data.tech}
        </p>
      </div>

      <div className="flex w-full px-5 pb-5 mt-auto items-center justify-between">
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
    </div>
  );
}
