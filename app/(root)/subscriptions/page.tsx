import { PricingTable } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SubscriptionsPage() {
  return (
    <div className="clerk-subscriptions relative py-12">
      <Link href="/" className="back-btn-floating">
        <ArrowLeft className="size-6 text-[#212a3b]" />
      </Link>
      
      <div className="max-w-5xl mx-auto flex flex-col items-center px-4 w-full">
        <h1 className="page-title-xl mb-4 text-center">Pricing & Plans</h1>
        <p className="subtitle mb-12 text-center max-w-2xl">
          Upgrade your plan to unlock more books, unlimited sessions, and extended reading time.
        </p>
        <div className="w-full flex justify-center">
          <PricingTable />
        </div>
      </div>
    </div>
  );
}
