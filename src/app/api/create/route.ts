import { NextResponse } from "next/server";
// import allProjects from "@/json/projects.json";
// import { API } from "@aws-amplify/api";
// import config from "@/aws-exports";
// import { createProject } from "@/graphql/mutations";

// API.configure(config);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, description, image } = body;
    if (!name || !description || !image) {
      return new NextResponse("Missing required fields", { status: 400 });
    }
    // console.log(allProjects[0])
    // allProjects.forEach(async (project) => {
    //   const res = (await API.graphql({
    //     query: createProject,
    //     variables: {
    //       input: project,
    //     },
    //   })) as any;
    //   console.log(res?.data?.createProject?.id);
    // });
    return NextResponse.json({
      message: "POST request",
      user: {
        name,
        description,
        image,
      },
    });
  } catch (error) {
    console.log(error);
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
