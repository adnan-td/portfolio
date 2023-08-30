import { NextResponse } from "next/server";
// import allProjects from "@/json/projects.json";
// import { client } from "../../../../lib/sanity.client";

export async function POST(req: Request) {
  try {
    // allProjects.forEach(async (project) => {
    //   const newProject = await client.create({
    //     _type: "project",
    //     title: project.title,
    //     tech: project.tech,
    //     github: project.github,
    //     url: project.url,
    //   });
    //   console.log(newProject);
    // });

    return NextResponse.json({
      message: "Successfully Created!",
    });
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    return NextResponse.json({ message: "GET request" });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
