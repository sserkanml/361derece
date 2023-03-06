import express from "express";
import { homeController } from "../controller/home.js";

export const router = express.Router();

router.get("/", homeController);


