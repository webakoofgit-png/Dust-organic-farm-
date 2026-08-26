import React from "react";
import { RotateCcw, AlertTriangle } from "lucide-react";
import { companyInfo } from "@/lib/data";

export const ReturnRefundPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 md:px-12 lg:px-16 w-full min-h-screen bg-[#F6F5F0] text-[#0E382E]">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-3 border-b border-[#74B487]/30 pb-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E67E22] font-extrabold flex items-center gap-2">
            <RotateCcw className="w-4 h-4" /> 100% SATISFACTION GUARANTEE
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0E382E]">
            Return & Refund Policy
          </h1>
          <p className="text-xs text-[#74B487] font-semibold">
            {companyInfo.name} Customer Assurance Policy
          </p>
        </div>

        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#74B487]/40 shadow-xs space-y-6 text-xs text-[#1F684B] leading-relaxed font-normal">
          <section className="space-y-2">
            <h2 className="text-lg font-extrabold text-[#0E382E]">1. Food Product Safety Standard</h2>
            <p>
              Due to strict food safety & FSSAI hygiene guidelines, opened or consumed beverage sachets cannot be returned. However, we offer <strong>100% replacement or refund</strong> if your package arrives damaged, defective, or expired.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-extrabold text-[#0E382E]">2. 7-Day Claim Window</h2>
            <p>
              If you receive a damaged box or missing items, please email photo/video proof within <strong>7 days of delivery</strong> to <strong>{companyInfo.email}</strong> or WhatsApp us at <strong>{companyInfo.phone}</strong>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-extrabold text-[#0E382E]">3. Refund Processing Timeline</h2>
            <p>
              Approved refunds are credited to your original payment method (Bank account / UPI / Credit Card) within <strong>5 to 7 business days</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
