import express from "express";
import Controller from "../controller/index.js";

const router = express.Router();

router.get("/", Controller.readWriteFile);

export default router;
