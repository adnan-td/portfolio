import express from "express";
import { httpPostContact } from "./contact.controller";

const contactRouter = express.Router();

contactRouter.post("/", httpPostContact);

export default contactRouter;
