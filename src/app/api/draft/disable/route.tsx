// route handler enabling draft mode
import { draftMode } from "next/headers";

export async function GET(request: Request) {
  draftMode().disable();
  return Response.redirect(
    `${process.env.NODE_ENV === "production" ? "https://adnansh.in" : "http://localhost:3000"}/blog`
  );
}
