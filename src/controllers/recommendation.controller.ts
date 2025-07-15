import { Request, Response } from "express";
import { getRecommendation } from "../services/recommendation.service";
import { recommendationSchema } from "../validations/recommendation.validation";

export const getRecommendationController = async (
  req: Request,
  res: Response
) => {
  try {
    const data = recommendationSchema.parse(req.body);
    const userId = (req as any).user?.userId;
    const result = await getRecommendation(data, userId);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};
