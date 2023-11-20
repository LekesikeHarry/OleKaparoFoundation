import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createEvent } from "../controllers/eventContoller.js";

const router = express.Router();

router.route("/").post(protect, createEvent)

export default router;  