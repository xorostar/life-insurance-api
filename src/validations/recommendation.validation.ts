import { z } from "zod";

export const recommendationSchema = z.object({
  age: z.number().int().min(0, "Age must be a positive integer"),
  income: z.number().min(0, "Income must be a positive number"),
  dependents: z.number().int().min(0, "Dependents must be a positive integer"),
  risk: z.enum(["low", "medium", "high"]),
});

export type RecommendationInput = z.infer<typeof recommendationSchema>;
