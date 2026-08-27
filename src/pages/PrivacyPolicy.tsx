import React from "react";
import { ShieldCheck, Lock } from "lucide-react";
import { companyInfo } from "@/lib/data";

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 md:px-12 lg:px-16 w-full min-h-screen bg-[#F6F5F0] text-[#0E382E]">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-3 border-b border-[#74B487]/30 pb-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E67E22] font-extrabold flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" /> LEGAL & COMPLIANCE
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0E382E]">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#74B487] font-semibold">
            Last Updated: {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })} • {companyInfo.name}
          </p>
        </div>

        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#74B487]/40 shadow-xs space-y-6 text-xs text-[#1F684B] leading-relaxed font-normal">
          <section className="space-y-2">
            <h2 className="text-lg font-extrabold text-[#0E382E]">1. Overview</h2>
            <p>
              This Privacy Policy describes how <strong>{companyInfo.name}</strong> (CIN: {companyInfo.cin}) ("we", "us", "DUST") collects, uses, and protects your personal information when you visit or make a purchase from <strong>{companyInfo.domain}</strong>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-extrabold text-[#0E382E]">2. Information We Collect</h2>
            <p>When you place an order or create an account, we collect personal information including:</p>
            <ul className="list-disc pl-5 space-y-1 font-medium text-[#0E382E]">
              <li>Contact details: Name, email address ({companyInfo.email}), phone number ({companyInfo.phone}).</li>
              <li>Shipping address & billing address.</li>
              <li>Transaction data (payment IDs processed securely via encrypted gateways).</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-extrabold text-[#0E382E]">3. Payment & Data Security</h2>
            <p>
              We do not store your credit/debit card details or UPI PINs on our servers. All online transactions are processed via PCI-DSS compliant payment gateways (Razorpay / Cashfree) with 256-bit SSL encryption.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-extrabold text-[#0E382E]">4. Cookies & Analytics</h2>
            <p>
              We use cookies to maintain your active shopping cart session, store wishlist preferences, and improve website performance. You may disable cookies in your web browser settings.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-extrabold text-[#0E382E]">5. Contacting Our Nodal Officer</h2>
            <p>For privacy inquiries, data deletion requests, or grievances, please contact:</p>
            <div className="bg-[#E8F1E9] p-4 rounded-2xl border border-[#74B487]/40 text-[#0E382E] font-semibold space-y-1">
              <p>Privacy Nodal Officer — {companyInfo.name}</p>
              <p>Email: {companyInfo.email}</p>
              <p>Address: {companyInfo.address}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
