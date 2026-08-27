import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, Truck, CheckCircle2, Clock, MapPin, Package, ShieldCheck } from "lucide-react";
import { companyInfo } from "@/lib/data";

export const OrderTracking: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialId = searchParams.get("id") || "";
  const [searchQuery, setSearchQuery] = useState(initialId);
  const [searched, setSearched] = useState(true);

  const trackingSteps = [
    { label: "Order Received", desc: "Order placed & confirmed", status: "completed", date: "26 Aug, 10:15 AM" },
    { label: "Payment Verified", desc: "Razorpay 256-bit SSL Paid", status: "completed", date: "26 Aug, 10:16 AM" },
    { label: "Packed at Pune Hub", desc: "Hygienically packed in Ravet, Pune", status: "completed", date: "26 Aug, 02:30 PM" },
    { label: "Handed to Courier", desc: "Shiprocket Express Air Airway Bill #SR-994821", status: "active", date: "In Transit" },
    { label: "Out for Delivery", desc: "Assigned to local delivery agent", status: "pending", date: "Expected Tomorrow" },
    { label: "Delivered", desc: "Package delivered to recipient", status: "pending", date: "--" },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 md:px-12 lg:px-16 w-full min-h-screen bg-[#F6F5F0] text-[#0E382E]">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Search Header */}
        <div className="space-y-4 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E67E22] font-extrabold flex items-center justify-center gap-2">
            <Truck className="w-4 h-4" /> LIVE SHIPMENT TRACKING
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0E382E]">
            Track Your DUST Order
          </h1>
          <p className="text-xs text-[#1F684B] max-w-md mx-auto">
            Enter your Order ID (e.g. DST-8806-9482) or registered 10-digit mobile number to track real-time delivery status.
          </p>

          <form onSubmit={(e) => { e.preventDefault(); setSearched(true); }} className="max-w-md mx-auto flex gap-2 pt-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Order ID or Mobile Number"
                className="w-full bg-white border border-[#74B487]/40 rounded-full pl-11 pr-4 py-3 text-xs outline-none focus:border-[#E67E22] font-mono shadow-xs"
              />
            </div>
            <button
              type="submit"
              className="btn-dust-orange px-6 py-3 text-white font-extrabold text-xs uppercase tracking-wider rounded-full shadow-md"
            >
              Track
            </button>
          </form>
        </div>

        {searched && (
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#74B487]/40 shadow-xl space-y-8">
            {/* Status Summary Banner */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 bg-[#E8F1E9] rounded-2xl border border-[#74B487]/40 gap-4">
              <div>
                <span className="text-[10px] uppercase font-extrabold text-[#E67E22] tracking-widest">
                  CURRENT SHIPMENT STATUS
                </span>
                <h3 className="text-2xl font-extrabold text-[#0E382E]">
                  In Transit — Dispatched via Express Air
                </h3>
                <p className="text-xs text-[#1F684B] mt-0.5">
                  Courier Partner: <strong>Shiprocket / Delhivery (AWB: SR-994821)</strong>
                </p>
              </div>

              <div className="bg-[#0E382E] text-white px-5 py-3 rounded-xl text-center shrink-0">
                <p className="text-[10px] uppercase text-[#E67E22] font-bold">ESTIMATED DELIVERY</p>
                <p className="text-sm font-extrabold">27–28 August 2026</p>
              </div>
            </div>

            {/* Timeline Progress Tracker */}
            <div className="space-y-6">
              <h4 className="text-xs uppercase tracking-widest text-[#0E382E] font-extrabold">
                Delivery Stages Timeline
              </h4>

              <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-3 sm:before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#74B487]/40">
                {trackingSteps.map((step, idx) => (
                  <div key={idx} className="relative flex items-start gap-4">
                    <div
                      className={`absolute -left-6 sm:-left-8 top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 z-10 ${step.status === "completed"
                          ? "bg-[#0E382E] text-white"
                          : step.status === "active"
                            ? "bg-[#E67E22] text-white animate-pulse"
                            : "bg-[#F6F5F0] text-stone-400 border border-stone-300"
                        }`}
                    >
                      {step.status === "completed" ? (
                        <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                      ) : (
                        idx + 1
                      )}
                    </div>

                    <div className="pl-4 space-y-0.5">
                      <div className="flex items-center gap-3">
                        <h5 className="text-sm font-extrabold text-[#0E382E]">
                          {step.label}
                        </h5>
                        <span className="text-[10px] font-bold text-[#E67E22] bg-[#E8F1E9] px-2 py-0.5 rounded-full">
                          {step.date}
                        </span>
                      </div>
                      <p className="text-xs text-[#1F684B]">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Help */}
            <div className="pt-6 border-t border-[#74B487]/30 flex flex-col sm:flex-row justify-between items-center text-xs text-[#1F684B] font-semibold gap-2">
              <p>Need help with your delivery? Contact Pune Customer Desk:</p>
              <a href={`tel:${companyInfo.phone}`} className="text-[#E67E22] font-bold hover:underline">
                Call {companyInfo.phoneFormatted}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
