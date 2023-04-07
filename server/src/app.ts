import express from "express";
import morgan from "morgan";
import api from "./routes/api";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(
  morgan("combined", {
    skip: (req, res) => {
      if ((req.url = "/graphql")) {
        return true;
      }
      return false;
    },
  })
);

app.use("/", api);
export default app;
