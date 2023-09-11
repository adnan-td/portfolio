import slugify from "../slugify/slugify";

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const outline = parseOutline(headings);
  return <TableRow outline={outline} i={0} />;
}

function TableRow({ outline, i }: { outline: Outline; i: number }) {
  return (
    <div
      className="flex flex-col gap-2 font-semibold text-slate-800 text-lg z-[1]"
      style={{ marginLeft: `calc(0px + ${i} * 8px)` }}
    >
      <a href={`#${slugify(outline.title)}`} className="inline-block hover:underline md:underline">
        {outline.title}
      </a>
      {outline.subheadings.map((subheading, ind) => {
        return <TableRow key={ind} outline={subheading} i={i + 1} />;
      })}
    </div>
  );
}

interface Outline {
  title: string;
  subheadings: Outline[];
}

function parseOutline(headings: Heading[]): Outline {
  const outline: Outline = { title: "TABLE OF CONTENTS", subheadings: [] };
  while (headings.length > 0 && 0 < getHeadingLevel(headings[0])) {
    outline.subheadings.push(recurseOutline(headings));
  }
  return outline;
}

function recurseOutline(headings: Heading[]): Outline {
  const curHeading = headings.shift();
  if (curHeading == null) return null;
  const outline: Outline = { title: curHeading.children[0].text, subheadings: [] };

  while (headings.length > 0 && getHeadingLevel(curHeading) < getHeadingLevel(headings[0])) {
    outline.subheadings.push(recurseOutline(headings));
  }
  return outline;
}
function getHeadingLevel(heading: Heading): number {
  if (heading.style === "h1") return 1;
  else if (heading.style === "h2") return 2;
  else if (heading.style === "h3") return 3;
  else return 4;
}
