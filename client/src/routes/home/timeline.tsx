import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import "react-vertical-timeline-component/style.min.css";

interface experience {
  date: string;
  description: string;
  subtitle: string;
  title: string;
  tech: string;
}

export default function TimeLine({ data }: { data: [experience] | null }) {
  const color1 = "white";
  const color2 = "black";
  return (
    <div className="w-full mb-28">
      <VerticalTimeline lineColor="black">
        {data
          ? data.map((exp, i) => {
              return (
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: color1, color: color2 }}
                  contentArrowStyle={{ borderRight: `7px solid  ${color2}` }}
                  date={exp.date}
                  iconStyle={{ background: color2, color: color1 }}
                  textClassName="border border-black shadow-lg"
                  icon={<BusinessCenterIcon />}
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

// const Experience = [
//   {
//     title: "Marketing Manager",
//     subtitle: "XYZ Company",
//     description:
//       "Managed all marketing initiatives and developed new campaigns to drive revenue growth.",
//     date: "Jan 2018 - Dec 2020",
//   },
//   {
//     title: "Product Manager",
//     subtitle: "ABC Corporation",
//     description:
//       "Oversaw product development from ideation to launch, and managed a team of designers and engineers.",
//     date: "Mar 2015 - Dec 2017",
//   },
//   {
//     title: "Marketing Coordinator",
//     subtitle: "EFG Inc.",
//     description:
//       "Assisted with marketing projects and initiatives, and managed social media accounts.",
//     date: "Jun 2013 - Feb 2015",
//   },
//   {
//     title: "Product Manager",
//     subtitle: "ABC Corporation",
//     description:
//       "Oversaw product development from ideation to launch, and managed a team of designers and engineers.",
//     date: "Mar 2015 - Dec 2017",
//   },
//   {
//     title: "Marketing Coordinator",
//     subtitle: "EFG Inc.",
//     description:
//       "Assisted with marketing projects and initiatives, and managed social media accounts.",
//     date: "Jun 2013 - Feb 2015",
//   },
// ];
