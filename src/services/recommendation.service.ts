import { RecommendationInput } from "../validations/recommendation.validation";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getRecommendation = async (
  input: RecommendationInput,
  userId: string
) => {
  let recommendation = "";
  let explanation = "";

  if (input.age < 40 && input.risk === "high") {
    recommendation = "Term Life – $500,000 for 20 years";
    explanation =
      "You are young with a high risk tolerance, so a high coverage term life policy is recommended.";
  } else if (input.age < 40 && input.risk === "medium") {
    recommendation = "Term Life – $250,000 for 20 years";
    explanation =
      "You are young with a moderate risk tolerance, so a moderate coverage term life policy is recommended.";
  } else if (input.age < 40 && input.risk === "low") {
    recommendation = "Term Life – $100,000 for 20 years";
    explanation =
      "You are young with a low risk tolerance, so a lower coverage term life policy is recommended.";
  } else if (input.age >= 40 && input.age < 60 && input.risk === "high") {
    recommendation = "Term Life – $250,000 for 10 years";
    explanation =
      "You are middle-aged with a high risk tolerance, so a moderate coverage term life policy is recommended.";
  } else if (input.age >= 40 && input.age < 60 && input.risk === "medium") {
    recommendation = "Whole Life – $150,000";
    explanation =
      "You are middle-aged with a moderate risk tolerance, so a whole life policy is recommended.";
  } else if (input.age >= 40 && input.age < 60 && input.risk === "low") {
    recommendation = "Whole Life – $100,000";
    explanation =
      "You are middle-aged with a low risk tolerance, so a lower coverage whole life policy is recommended.";
  } else if (input.age >= 60) {
    recommendation = "Final Expense Insurance – $50,000";
    explanation =
      "You are over 60, so a final expense policy is recommended to cover end-of-life expenses.";
  } else {
    recommendation = "Term Life – $100,000 for 10 years";
    explanation =
      "A basic term life policy is recommended based on your profile.";
  }

  await prisma.recommendation.create({
    data: {
      userId,
      age: input.age,
      income: input.income,
      dependents: input.dependents,
      risk: input.risk,
      recommendation,
      explanation,
    },
  });

  return { recommendation, explanation };
};
