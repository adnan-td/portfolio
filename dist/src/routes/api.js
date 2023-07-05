"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contact_router_1 = __importDefault(require("./contact/contact.router"));
const api = express_1.default.Router();
// api.get("/", (req, res) =>
//   res.json({
//     message: "Welcome to Adnan's Portfolio",
//     status: "200 (okay)",
//     "available routes": ["/graphql (for apollo sandbox)"],
//   })
// );
api.use("/contact", contact_router_1.default);
api.use("/", express_1.default.static("client_build"));
api.get("/", (req, res) => res.sendFile("client_build/index.html"));
exports.default = api;
