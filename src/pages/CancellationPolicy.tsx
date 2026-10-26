import React from "react";
import { Link } from "react-router-dom";
import {
  XCircle,
  Clock,
  CreditCard,
  HelpCircle,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";
import { companyInfo } from "@/lib/data";

export const CancellationPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 md:px-12 lg:px-16 w-full min-h-screen bg-[#F6F5F0] text-[#0E382E]">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-3 border-b border-[#74B487]/30 pb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#E8F1E9] border border-[#74B487]/40 rounded-full text-xs uppercase tracking-widest text-[#E67E22] font-black">
            <XCircle className="w-4 h-4" /> ORDER MANAGEMENT & CANCELLATION
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0E382E] tracking-tight">
            Cancellation Policy
          </h1>
          <p className="text-xs text-[#74B487] font-semibold">
            {companyInfo.name} • Official Customer Order Cancellation Terms
          </p>
        </div>

        {/* Quick Highlights Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-2xl border border-[#74B487]/30 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E8F1E9] text-[#E67E22] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-black text-[#0E382E]">100% Pre-Dispatch</p>
              <p className="text-[11px] text-stone-500 font-medium">Full refund prior to courier handover</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-[#74B487]/30 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E8F1E9] text-[#E67E22] flex items-center justify-center shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-black text-[#0E382E]">5–7 Days Refund</p>
              <p className="text-[11px] text-stone-500 font-medium">Direct to original payment method</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-[#74B487]/30 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E8F1E9] text-[#E67E22] flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-black text-[#0E382E]">Quick Support</p>
              <p className="text-[11px] text-stone-500 font-medium">Email or WhatsApp assistance</p>
            </div>
          </div>
        </div>

        {/* Policy Body */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#74B487]/40 shadow-xs space-y-8 text-xs sm:text-sm text-[#1F684B] leading-relaxed font-normal">
          {/* Section 1 */}
          <section className="space-y-3 pb-6 border-b border-[#74B487]/20">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#0E382E] text-white text-xs font-black flex items-center justify-center shrink-0">
                1
              </span>
              <h2 className="text-base sm:text-lg font-extrabold text-[#0E382E]">
                Order Cancellation Before Dispatch
              </h2>
            </div>
            <p>
              Customers may request cancellation of an order before it has been dispatched by contacting our customer support team with their order number and registered contact details.
            </p>
            <p>
              If the cancellation request is approved before dispatch, the <strong>full amount paid</strong> for the cancelled order will be refunded to the original payment method.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 pb-6 border-b border-[#74B487]/20">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#0E382E] text-white text-xs font-black flex items-center justify-center shrink-0">
                2
              </span>
              <h2 className="text-base sm:text-lg font-extrabold text-[#0E382E]">
                Orders Already Dispatched
              </h2>
            </div>
            <p>
              Once an order has been dispatched or handed over to the courier partner, cancellation may no longer be possible. Customers may contact our support team for assistance, but approval will depend on the shipment status and applicable return policy.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 pb-6 border-b border-[#74B487]/20">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#0E382E] text-white text-xs font-black flex items-center justify-center shrink-0">
                3
              </span>
              <h2 className="text-base sm:text-lg font-extrabold text-[#0E382E]">
                Orders Already Delivered
              </h2>
            </div>
            <p>
              Orders that have already been delivered cannot ordinarily be cancelled. However, customers may be eligible for a return, replacement, or refund if the product is damaged, defective, incorrect, expired, tampered with, or otherwise eligible under our Return and Refund Policy and applicable law.
            </p>
            <p className="p-3.5 bg-[#E8F1E9] rounded-xl border border-[#74B487]/30 text-xs text-[#0E382E] font-medium">
              <strong>Safety & Hygiene Note:</strong> For food, beverage, and personal-care products, returns may be restricted for safety and hygiene reasons, subject to applicable consumer-protection requirements.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 pb-6 border-b border-[#74B487]/20">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#0E382E] text-white text-xs font-black flex items-center justify-center shrink-0">
                4
              </span>
              <h2 className="text-base sm:text-lg font-extrabold text-[#0E382E]">
                Refund Processing
              </h2>
            </div>
            <p>
              Once a cancellation is approved, the refund will be initiated to the original payment method. Refunds will generally be processed within <strong>5–7 business days</strong>, although the time taken for the amount to appear in the customer's account may depend on the bank, payment gateway, or financial institution.
            </p>
            <p>
              If a refund is delayed beyond the stated period, customers may contact our support team for assistance.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 pb-6 border-b border-[#74B487]/20">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#0E382E] text-white text-xs font-black flex items-center justify-center shrink-0">
                5
              </span>
              <h2 className="text-base sm:text-lg font-extrabold text-[#0E382E]">
                Cancellation by the Company
              </h2>
            </div>
            <p>
              <strong>{companyInfo.name}</strong> reserves the right to cancel an order if a product is unavailable, a payment or pricing error occurs, delivery is not feasible, or a suspected fraudulent transaction is identified. Customers will be notified where reasonably possible, and any amount paid for a cancelled order will be refunded in full.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#0E382E] text-white text-xs font-black flex items-center justify-center shrink-0">
                6
              </span>
              <h2 className="text-base sm:text-lg font-extrabold text-[#0E382E]">
                How to Request Cancellation
              </h2>
            </div>
            <p>
              To request cancellation, customers should contact us using the official contact details published on our website and provide:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-stone-700 font-medium">
              <li>Order number</li>
              <li>Name used when placing the order</li>
              <li>Registered email address or phone number</li>
              <li>Reason for cancellation</li>
            </ul>
            <p className="text-xs text-stone-500 italic">
              Cancellation requests are subject to order status and confirmation by our customer support team.
            </p>

            {/* Quick Contact Box */}
            <div className="p-5 bg-[#F6F5F0] rounded-2xl border border-[#74B487]/40 space-y-3 mt-4">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#0E382E]">
                Submit a Cancellation Request Directly:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <a
                  href={`mailto:${companyInfo.email}?subject=Order%20Cancellation%20Request`}
                  className="p-3 bg-white rounded-xl border border-[#74B487]/30 hover:border-[#E67E22] flex items-center gap-2.5 transition-all group"
                >
                  <Mail className="w-4 h-4 text-[#E67E22]" />
                  <div className="overflow-hidden">
                    <p className="text-[10px] text-stone-400 font-bold uppercase">Email Support</p>
                    <p className="text-xs font-extrabold text-[#0E382E] truncate">{companyInfo.email}</p>
                  </div>
                </a>

                <a
                  href={companyInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl border border-[#74B487]/30 hover:border-[#25D366] flex items-center gap-2.5 transition-all group"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <div>
                    <p className="text-[10px] text-stone-400 font-bold uppercase">WhatsApp</p>
                    <p className="text-xs font-extrabold text-[#0E382E]">Chat on WhatsApp</p>
                  </div>
                </a>

                <a
                  href={`tel:${companyInfo.phone}`}
                  className="p-3 bg-white rounded-xl border border-[#74B487]/30 hover:border-[#E67E22] flex items-center gap-2.5 transition-all group"
                >
                  <Phone className="w-4 h-4 text-[#E67E22]" />
                  <div>
                    <p className="text-[10px] text-stone-400 font-bold uppercase">Phone Helpline</p>
                    <p className="text-xs font-extrabold text-[#0E382E]">{companyInfo.phoneFormatted}</p>
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* Legal Preamble & Cross-Policy References */}
          <div className="pt-6 border-t border-[#74B487]/30 text-xs text-stone-500 leading-relaxed space-y-2">
            <p>
              Please use the official contact information listed on our website to submit a cancellation request.
            </p>
            <p>
              This policy should be read together with our{" "}
              <Link to="/terms-conditions" className="text-[#0E382E] font-bold underline hover:text-[#E67E22]">
                Terms and Conditions
              </Link>
              ,{" "}
              <Link to="/shipping-policy" className="text-[#0E382E] font-bold underline hover:text-[#E67E22]">
                Shipping Policy
              </Link>
              , and{" "}
              <Link to="/return-refund-policy" className="text-[#0E382E] font-bold underline hover:text-[#E67E22]">
                Return and Refund Policy
              </Link>
              . Nothing in this policy limits any rights available to customers under applicable law.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
