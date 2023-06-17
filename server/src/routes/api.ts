import express from "express";
import path from "path";
import contactRouter from "./contact/contact.router";

const api = express.Router();

// api.get("/", (req, res) =>
//   res.json({
//     message: "Welcome to Adnan's Portfolio",
//     status: "200 (okay)",
//     "available routes": ["/graphql (for apollo sandbox)"],
//   })
// );
api.use("/contact", contactRouter);
api.use("/", express.static("client_build"));
api.get("/", (req, res) => res.sendFile("client_build/index.html"));

export default api;
