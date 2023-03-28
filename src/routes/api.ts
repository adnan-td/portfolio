import express from "express";

const api = express.Router();

api.get("/", (req, res) =>
  res.json({
    message: "Welcome to Adnan's Portfolio",
    status: "200 (okay)",
    "available routes": ["/graphql (for apollo sandbox)"],
  })
);

export default api;
