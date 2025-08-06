import { Router } from "express";
import { healthcheck } from "../controllers/healthCheckControllers.js";
import { upload } from "../middlewares/multer.middlewares.js";

const router = Router();
router.route("/").get(healthcheck);
export default router;
