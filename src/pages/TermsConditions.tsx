import React from "react";
import { FileText } from "lucide-react";
import { companyInfo } from "@/lib/data";

export const TermsConditions: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 md:px-12 lg:px-16 w-full min-h-screen bg-[#F6F5F0] text-[#0E382E]">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-3 border-b border-[#74B487]/30 pb-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E67E22] font-extrabold flex items-center gap-2">
            <FileText className="w-4 h-4" /> TERMS OF SERVICE
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0E382E]">
            Terms & Conditions
          </h1>
          <p className="text-xs text-[#74B487] font-semibold">
            Operated by {companyInfo.name} (CIN: {companyInfo.cin})
          </p>
        </div>

        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#74B487]/40 shadow-xs space-y-6 text-xs text-[#1F684B] leading-relaxed font-normal">
          <section className="space-y-2">
            <h2 className="text-lg font-extrabold text-[#0E382E]">1. Acceptable Use</h2>
            <p>
              By accessing <strong>{companyInfo.domain}</strong>, you agree to comply with these terms. The website is owned and operated by <strong>{companyInfo.name}</strong>, registered in Maharashtra, India.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-extrabold text-[#0E382E]">2. Intellectual Property</h2>
            <p>
              All trademarks, product names, sachet designs, logos ("DUST — Choice of Motherland"), imagery, and botanical recipe formulas belong exclusively to {companyInfo.name}. Reproduction without written consent is strictly prohibited.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-extrabold text-[#0E382E]">3. Pricing & Product Disclaimers</h2>
            <p>
              Prices listed are in Indian Rupees (INR) inclusive of applicable taxes. DUST sachet beverages are non-alcoholic instant beverage mixes and digestive shots formulated with real fruit and spices.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-extrabold text-[#0E382E]">4. Jurisdiction & Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any legal disputes shall be subject to the exclusive jurisdiction of the courts in <strong>Pune, Maharashtra, India</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
