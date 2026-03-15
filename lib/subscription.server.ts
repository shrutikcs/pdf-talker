import { auth } from "@clerk/nextjs/server";
import { PlanType } from "./subscription-constants";

export const getUserPlan = async (): Promise<PlanType> => {
  const { has } = await auth();

  const proCheck = { plan: "pro" };
  const standardCheck = { plan: "standard" };

  if (has?.(proCheck)) {
    return "pro";
  }

  if (has?.(standardCheck)) {
    return "standard";
  }

  return "free";
};
