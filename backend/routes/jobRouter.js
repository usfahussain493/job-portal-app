import express from "express";
import { isAuthenticated, isAuthorized } from "../middlewares/auth";
import { postJob } from "../controllers/jobController";

const router = express.Router();

router.post("/post", isAuthenticated, isAuthorized("Employer", postJob));

export default router;