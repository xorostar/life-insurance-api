import { Router } from "express";
import userRoutes from "./user.route";
import recommendationRoutes from "./recommendation.route";

const router = Router();

router.use("/user", userRoutes);
router.use("/recommendation", recommendationRoutes);

export default router;
