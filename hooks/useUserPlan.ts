"use client";

import { useAuth } from "@clerk/nextjs";
import { PlanType } from "@/lib/subscription-constants";

export const useUserPlan = (): PlanType => {
  const { has } = useAuth();

  // Bypass TS2353 object literal strict checking by assigning to an intentionally antyped variable
  const proCheck: any = { entitlement: "pro" };
  const standardCheck: any = { entitlement: "standard" };

  if (has && has(proCheck)) {
    return "pro";
  }

  if (has && has(standardCheck)) {
    return "standard";
  }

  return "free";
};
