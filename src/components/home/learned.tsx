"use client";

import { useEffect, useState, useContext } from "react";
import { Skill, skillsInterface } from "./skills";
import Select from "react-select";
import { WidthContext } from "../../context/screenwidth/screenwidth.context";
import { motion } from "motion/react";
import Image from "next/image";
import { DiDart, DiJavascript1, DiNodejs, DiPython, DiReact } from "react-icons/di";
import {
  SiAndroid,
  SiApollographql,
  SiCss,
  SiDjango,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiFramer,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiKotlin,
  SiMongodb,
  SiMysql,
  SiNeo4J,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaAws, FaJava, FaMicrosoft } from "react-icons/fa";
import { CgCPlusPlus, CgDatabase } from "react-icons/cg";
import urlFor from "../../../lib/sanity.urlfor";


export default function Learned({ skills }: { skills: skillsInterface[] }) {
  const ICONS: Record<string, any> = {
    DiDart,
    DiJavascript1,
    DiNodejs,
    DiPython,
    DiReact,
    SiAndroid,
    SiApollographql,
    SiCss,
    SiDjango,
    SiExpress,
    SiFigma,
    SiFirebase,
    SiFlutter,
    SiFramer,
    SiGithub,
    SiGraphql,
    SiHtml5,
    SiKotlin,
    SiMongodb,
    SiMysql,
    SiNeo4J,
    SiNextdotjs,
    SiPostgresql,
    SiPython,
    SiSpringboot,
    SiTailwindcss,
    SiTypescript,
    FaAws,
    FaJava,
    FaMicrosoft,
    CgCPlusPlus,
    CgDatabase,
  };
  const sortedSkills = [...skills].sort((a, b) => {
    const categoryOrder: Record<string, number> = {
      "All": 0,
      "Languages": 1,
      "Frontend": 2,
      "Backend": 3,
      "Database": 4,
      "Ai": 5,
      "Others": 6,
    }
    return categoryOrder[a.category] - categoryOrder[b.category];
  });

  const selectOptions = sortedSkills.map((skill) => {
    return {
      value: skill.category,
      label: skill.category,
    };
  });

  const { screenwidth } = useContext(WidthContext);
  const [tab, setTab] = useState(selectOptions[0]);
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const category = sortedSkills.find((skill) => {
      return skill.category === tab.value;
    });
    const currentSkills = category ? category.skills : [];
    currentSkills.forEach((skill) => {
      skill.key = tab.value;
    });
    setFilteredSkills(currentSkills);
  }, [tab]);

  return (
    <div className="w-full flex justify-start items-center flex-col">
      {screenwidth > 768 ? (
        <div className="flex gap-3 justify-center items-center px-5 py-16">
          {sortedSkills.map((skill, i) => {
            return (
              <p
                key={i}
                className={`px-4 py-2 text-base font-semibold rounded-lg cursor-pointer hover:bg-black hover:text-white transition-colors ${
                  tab.value === skill.category ? "text-white bg-black" : ""
                }`}
                onClick={() => {
                  setTab({
                    value: skill.category,
                    label: skill.category,
                  });
                }}
              >
                {skill.category}
              </p>
            );
          })}
        </div>
      ) : (
        <div className="py-10 flex justify-center items-center w-80 sm:w-full">
          <Select
            options={selectOptions}
            className="w-full"
            instanceId="learned-skills-select"
            inputId="learned-skills-select-input"
            defaultValue={selectOptions[0]}
            value={tab}
            onChange={(event) => {
              if (event) {
                setTab(event);
              }
            }}
            closeMenuOnScroll
            styles={customStyles}
          />
        </div>
      )}

      <div className="grid grid-cols-5 justify-items-center items-center gap-8 md:grid-cols-3 sm:grid-cols-2">
        {filteredSkills.map((skill, i) => {
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              key={`${skill.key}-${skill.name}-${i}`}
              className="px-10 py-4 bg-neutral-100 border border-neutral-700 rounded-lg w-full flex justify-center gap-2 items-center"
            >
              <p className="min-w-[20px]">
                {(() => {
                  if (!skill.icon) return null;
                  const Icon = ICONS[skill.icon];
                  if (Icon) return <Icon />;
                  if (skill.image)
                    return (
                      // fallback to image if provided
                      // eslint-disable-next-line @next/next/no-img-element
                      <Image
                        src={urlFor(skill.image).url()}
                        alt={skill.name}
                        className="w-5 h-5"
                        width="20"
                        height="20"
                      />
                    );
                  return null;
                })()}
              </p>
              <p>{skill.name}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    border: "1px solid black",
    boxShadow: state.isFocused ? "0 0 0 1px black" : null,
    "&:hover": {
      border: "1px solid black",
    },
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? "black" : null,
    color: state.isSelected ? "white" : "black",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "black",
  }),
};
