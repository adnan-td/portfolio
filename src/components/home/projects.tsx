"use client";

import { useState } from "react";

import { BsGithub as GitHubIcon } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import urlFor from "../../../lib/sanity.urlfor";

export default function ProjectsCompleted({ projects }: { projects: any[] }) {
  const completedProjects = (projects?.slice(9, 15)?.length ? projects.slice(9, 15) : projects) || [];
  const topRow = completedProjects.slice(0, 3);
  const bottomRow = completedProjects.slice(3, 6);

  return (
    <div className="projects-completed-showcase w-full max-w-[1500px]">
      <div className="projects-completed-grid">
        {topRow.map((fw: any, i: number) => (
          <Project
            key={`top-${i}`}
            data={{
              title: fw.title,
              tech: fw.tech,
              image: fw.image,
              url: fw.url,
              github: fw.github,
            }}
          />
        ))}
      </div>

      <div className="projects-completed-bottom-wrap">
        <div className="projects-completed-bottom-glow" aria-hidden="true"></div>
        <div className="projects-completed-grid projects-completed-grid--ghost">
          {bottomRow.map((fw: any, i: number) => (
            <div key={`bottom-${i}`} className={`projects-completed-ghost ghost-${i + 1}`}>
              <Project
                data={{
                  title: fw.title,
                  tech: fw.tech,
                  image: fw.image,
                  url: fw.url,
                  github: fw.github,
                }}
              />
            </div>
          ))}
        </div>

        <div className="projects-completed-cta-wrap">
          <Link href="/projects" className="projects-completed-cta">
            View all projects
          </Link>
        </div>
      </div>
    </div>
  );
}

export interface WorkInterface {
  title: string;
  tech: string;
  image: string;
  url: string;
  github: string;
}

function Project({ data }: { data: WorkInterface }) {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="h-full min-h-[420px] min-w-0 w-full flex flex-col rounded-[28px] bg-white cursor-pointer transition-all shadow-xl overflow-hidden"
      style={{
        backgroundColor: isHovering ? "#171717" : "white",
        color: isHovering ? "white" : "black",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="overflow-hidden flex justify-center items-center h-[230px] w-full p-5">
        <Image
          src={urlFor(data.image).url()}
          className="h-full w-full rounded-lg object-contain object-center transition-transform pointer-events-none"
          alt={data.title}
          width="1980"
          height="1980"
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
