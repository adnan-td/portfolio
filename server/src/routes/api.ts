import express from "express";
import path from "path";

const api = express.Router();

// api.get("/", (req, res) =>
//   res.json({
//     message: "Welcome to Adnan's Portfolio",
//     status: "200 (okay)",
//     "available routes": ["/graphql (for apollo sandbox)"],
//   })
// );

api.use("/", express.static(path.join(__dirname, "../../client_build")));
api.get("/", (req, res) => res.sendFile(path.join(__dirname, "../../client_build/index.html")));

export default api;
