import { Router } from "express";
import { getRecommendationController } from "../controllers/recommendation.controller";
import { authenticateToken } from "../middleware/auth.middleware";

const router = Router();

router.post("/", authenticateToken, getRecommendationController);

export default router;
