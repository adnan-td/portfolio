import { useEffect, useState, useContext, useRef } from "react";
import { skillInterface, skills } from "./skills";
import Select from "react-select";
import { WidthContext } from "../../context/screenwidth/screenwidth.context";
import { motion } from "framer-motion";

const selectOptions = skills.map((skill) => {
  return {
    value: skill.category,
    label: skill.category,
  };
});

export default function Learned() {
  const { screenwidth } = useContext(WidthContext);
  const [tab, setTab] = useState(selectOptions[0]);
  const [filteredSkills, setFilteredSkills] = useState<skillInterface[]>([]);

  useEffect(() => {
    const currentSkills = skills.find((skill) => {
      return skill.category === tab.value;
    }).skills;
    currentSkills.forEach((skill) => {
      skill.key = tab.value;
    });
    setFilteredSkills(currentSkills);
  }, [tab]);

  return (
    <div className="w-full flex justify-start items-center flex-col">
      {screenwidth > 768 ? (
        <div className="flex gap-3 justify-center items-center px-5 py-16">
          {skills.map((skill, i) => {
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
            defaultValue={selectOptions[0]}
            value={tab}
            onChange={(event) => {
              setTab(event);
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
              initial={{ opacity: 0, scale: 0, translateY: 200 }}
              whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              key={`${skill.name}-${skill.key}`}
              className="px-10 py-4 bg-neutral-100 border border-neutral-700 rounded-lg w-full flex justify-center gap-2 items-center"
            >
              <p className="min-w-[20px]">{skill.icon}</p>
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
