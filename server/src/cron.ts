import axios from "axios";
import cron from "node-cron";

export default function CronDeclare() {
  cron.schedule("0 10,22 * * *", async () => {
    console.log("Running a cron job");
    try {
      const res = await axios.post(
        "https://backend.adnansh.in/graphql",
        {
          query: `
          query{
            projects {
              id
              title
              tech
              image
              github
              url
            }
          }
        `,
        },
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/113.0",
            Accept: "*/*",
          },
        }
      );
      // console.log("Success!");
    } catch (err) {
      console.log("Error occured!");
      // console.log(err);
    }
  });
}
