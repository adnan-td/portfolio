"use client";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { MdBusinessCenter } from "react-icons/md";
import "react-vertical-timeline-component/style.min.css";
import { useContext } from "react";
import { DataContext } from "@/context/data/data.context";

interface experience {
  date: string;
  description: string;
  subtitle: string;
  title: string;
  tech: string;
}

export default function TimeLine() {
  const color1 = "white";
  const color2 = "black";
  const data = useContext(DataContext)?.data?.listExperiences?.items;
  return (
    <div className="w-full mb-28">
      <VerticalTimeline lineColor="black">
        {data
          ? data.map((exp: experience, i: number) => {
              return (
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: color1, color: color2 }}
                  contentArrowStyle={{ borderRight: `7px solid  ${color2}` }}
                  date={exp.date}
                  iconStyle={{ background: color2, color: color1 }}
                  textClassName="border border-black shadow-lg"
                  icon={<MdBusinessCenter />}
                  key={i}
                >
                  <h1 className="font-sono font-semibold text-2xl">{exp.title}</h1>
                  <h1 className="font-sono font-medium text-lg">{exp.subtitle}</h1>
                  <p className="text-lg">{exp.description}</p>
                  <p>
                    <span className="font-semibold">Skills -</span> {exp.tech}
                  </p>
                </VerticalTimelineElement>
              );
            })
          : ""}
      </VerticalTimeline>
    </div>
  );
}
