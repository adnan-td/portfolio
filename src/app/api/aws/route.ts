import { NextResponse } from "next/server";
import { API } from "@aws-amplify/api";
import config from "@/aws-exports";

API.configure(config);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { query, variables } = body;
    if (!query) {
      return new NextResponse("Missing required fields", { status: 400 });
    }
    const res = await API.graphql({
      query,
      variables,
      authToken: process.env.AUTH_TOKEN,
    });
    return NextResponse.json(res);
  } catch (error) {
    console.log("Error occured: ", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
