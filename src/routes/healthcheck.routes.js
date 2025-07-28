import { Router } from "express";
import { healthcheck } from "../controllers/healthCheckControllers.js";
const router = Router();
router.route("/").get(healthcheck);
export default router;
