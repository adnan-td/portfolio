const express = require("express");
const app = express();
const router = express.Router();

router.get("/", (req: any, res: any) => {
  res.json({
    route: "/",
    message: "welcome to the route",
  });
});

router.get("/hello", (req: any, res: any) => {
  res.json({
    route: "/hello",
    message: "welcome to the route",
  });
});

app.use("/api", router);

module.exports = app;
