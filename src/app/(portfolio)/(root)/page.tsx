import FeaturedWorks from "@/components/home/featuredwork";
import "./home.scss";
import LandingPage from "@/components/home/landing";
import TimeLine from "@/components/home/timeline";
import Learned from "@/components/home/learned";
import ProjectsCompleted from "@/components/home/projects";
import featuredProjectsJson from "@/json/featuredProjects.json";
import Link from "next/link";
import { groq } from "next-sanity";
import { client } from "@/../lib/sanity.client";
import { revalidate as rv } from "@/constants";

export const revalidate = rv;

export default async function Home() {
  const { experiences, projects } = await client.fetch(getExperiencesAndProjects);

  return (
    <div className="px-[5vw] flex flex-col w-full items-center">
      <LandingPage />

      <div className="flex flex-col gap-6 mb-20">
        <div className="text-6xl font-semibold flex flex-col gap-3 lg:text-5xl">
          <h2>Featured</h2>
          <h2 className="main-skills-head">Projects</h2>
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
          <h2>What I{"'"}ve</h2>
          <h2 className="main-skills-head">Learned</h2>
        </div>
      </div>
      <div className="w-screen px-[5vw] flex justify-center flex-wrap mb-40 gap-10">
        <Learned />
      </div>

      <div className="flex flex-col gap-6 mb-20">
        <div className="text-6xl font-semibold flex flex-col gap-3 lg:text-5xl">
          <h2>Where I{"'"}ve</h2>
          <h2 className="main-skills-head">Worked</h2>
        </div>
      </div>
      <div className="w-screen px-[5vw] flex justify-center flex-wrap mb-28 gap-10">
        <TimeLine exp={experiences} />
      </div>

      <div className="flex flex-col gap-6 mb-20">
        <div className="text-6xl font-semibold flex flex-col gap-3 lg:text-5xl">
          <h2>Projects</h2>
          <h2 className="main-skills-head">Completed</h2>
        </div>
      </div>
      <div className="w-screen pl-[5vw] py-10 flex justify-center mb-16 gap-10 overflow-hidden">
        <ProjectsCompleted projects={projects} />
      </div>
      <div className="flex mb-48">
        <HomeBtn href="/projects" text="View all projects" />
      </div>
    </div>
  );
}

function HomeBtn({ href, text }: { href: string; text: string }) {
  return (
    <Link href={href}>
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

const getExperiencesAndProjects = groq`
  {
    "experiences": *[_type == "experience"] | order(order asc),
    "projects": *[_type == "project"]
  }
`;
