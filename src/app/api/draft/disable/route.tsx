// route handler enabling draft mode
import { draftMode } from "next/headers";

export async function GET(request: Request) {
  draftMode().disable();
  return Response.redirect(`${process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"}/blog`);
}
