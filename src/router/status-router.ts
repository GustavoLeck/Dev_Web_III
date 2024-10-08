import express from "express";
import { StatusController } from "../controller/status_controller";

const router = express.Router();

router.get("/status", new StatusController().handle);

export default router;
