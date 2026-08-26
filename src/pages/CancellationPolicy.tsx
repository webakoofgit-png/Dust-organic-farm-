import React from "react";
import { XCircle } from "lucide-react";
import { companyInfo } from "@/lib/data";

export const CancellationPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 md:px-12 lg:px-16 w-full min-h-screen bg-[#F6F5F0] text-[#0E382E]">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-3 border-b border-[#74B487]/30 pb-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E67E22] font-extrabold flex items-center gap-2">
            <XCircle className="w-4 h-4" /> ORDER MANAGEMENT
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0E382E]">
            Cancellation Policy
          </h1>
          <p className="text-xs text-[#74B487] font-semibold">
            {companyInfo.name} Policy
          </p>
        </div>

        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#74B487]/40 shadow-xs space-y-6 text-xs text-[#1F684B] leading-relaxed font-normal">
          <section className="space-y-2">
            <h2 className="text-lg font-extrabold text-[#0E382E]">1. Pre-Dispatch Cancellation</h2>
            <p>
              You may cancel your order free of charge at any time <strong>before dispatch</strong> (within 12 hours of placing the order). Simply email <strong>{companyInfo.email}</strong> or call/WhatsApp <strong>{companyInfo.phone}</strong> with your Order ID.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-extrabold text-[#0E382E]">2. Post-Dispatch Cancellation</h2>
            <p>
              Once your shipment has been handed over to the courier partner, orders cannot be cancelled mid-transit. You may refuse delivery upon arrival, and the package will return to our Pune warehouse.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-extrabold text-[#0E382E]">3. Prepaid Order Refund</h2>
            <p>
              For cancelled prepaid orders, 100% of your payment is refunded back to your account within <strong>3 to 5 business days</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
