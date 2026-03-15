export type PlanType = "free" | "standard" | "pro";

export const PLANS: Record<PlanType, string> = {
  free: "Free",
  standard: "Standard",
  pro: "Pro",
};

export const PLAN_LIMITS: Record<
  PlanType,
  {
    maxBooks: number;
    maxSessionsPerMonth: number;
    maxDurationPerSession: number; // minutes
  }
> = {
  free: {
    maxBooks: 1,
    maxSessionsPerMonth: 5,
    maxDurationPerSession: 5,
  },
  standard: {
    maxBooks: 10,
    maxSessionsPerMonth: 100,
    maxDurationPerSession: 15,
  },
  pro: {
    maxBooks: 100,
    maxSessionsPerMonth: Infinity,
    maxDurationPerSession: 60,
  },
};

export const getCurrentBillingPeriodStart = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), 1);
};
