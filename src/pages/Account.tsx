import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User, Package, MapPin, Heart, LogOut, ArrowUpRight, Truck, CheckCircle2 } from "lucide-react";
import { companyInfo } from "@/lib/data";

export const Account: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"orders" | "profile" | "addresses">("orders");

  const mockOrders = [
    {
      id: "DST-8806-9482",
      date: "26 August 2026",
      total: 647,
      status: "In Transit",
      items: "2× Kacha Aam Powder + 1× Banarasi Paan Box",
    },
    {
      id: "DST-8806-3810",
      date: "12 August 2026",
      total: 398,
      status: "Delivered",
      items: "2× Kacha Aam Instant Refreshment Powder",
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 md:px-12 lg:px-16 w-full min-h-screen bg-[#F6F5F0] text-[#0E382E]">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* User Greeting Banner */}
        <div className="bg-[#0E382E] text-white p-8 sm:p-10 rounded-3xl border border-[#74B487]/40 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#E8F1E9] text-[#0E382E] flex items-center justify-center text-2xl font-extrabold border-2 border-[#E67E22]">
              R
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#E67E22] font-bold">
                WELCOME BACK
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                Rajesh Kumar
              </h1>
              <p className="text-xs text-[#E8F1E9] font-medium">
                rajesh.kumar@example.com • +91 98765 43210
              </p>
            </div>
          </div>

          <button className="bg-[#1F684B] hover:bg-[#E67E22] text-white text-xs font-extrabold uppercase tracking-wider px-5 py-2.5 rounded-full inline-flex items-center gap-2 transition-colors">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>

        {/* Dashboard Tabs & Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-3 space-y-2">
            <button
              onClick={() => setActiveTab("orders")}
              className={`w-full text-left px-5 py-3.5 rounded-2xl font-extrabold text-xs uppercase tracking-wider flex items-center gap-3 transition-colors ${
                activeTab === "orders"
                  ? "bg-[#0E382E] text-white shadow-md"
                  : "bg-white text-[#0E382E] hover:bg-[#E8F1E9]"
              }`}
            >
              <Package className="w-4 h-4 text-[#E67E22]" /> Order History
            </button>

            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full text-left px-5 py-3.5 rounded-2xl font-extrabold text-xs uppercase tracking-wider flex items-center gap-3 transition-colors ${
                activeTab === "profile"
                  ? "bg-[#0E382E] text-white shadow-md"
                  : "bg-white text-[#0E382E] hover:bg-[#E8F1E9]"
              }`}
            >
              <User className="w-4 h-4 text-[#E67E22]" /> My Profile
            </button>

            <button
              onClick={() => setActiveTab("addresses")}
              className={`w-full text-left px-5 py-3.5 rounded-2xl font-extrabold text-xs uppercase tracking-wider flex items-center gap-3 transition-colors ${
                activeTab === "addresses"
                  ? "bg-[#0E382E] text-white shadow-md"
                  : "bg-white text-[#0E382E] hover:bg-[#E8F1E9]"
              }`}
            >
              <MapPin className="w-4 h-4 text-[#E67E22]" /> Saved Addresses
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="lg:col-span-9">
            {activeTab === "orders" && (
              <div className="bg-white p-8 rounded-3xl border border-[#74B487]/40 shadow-sm space-y-6">
                <h3 className="text-xl font-extrabold text-[#0E382E]">
                  Your Recent Orders
                </h3>

                <div className="space-y-4">
                  {mockOrders.map((order) => (
                    <div
                      key={order.id}
                      className="p-6 bg-[#F6F5F0] rounded-2xl border border-[#74B487]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-extrabold text-[#0E382E]">
                            {order.id}
                          </span>
                          <span
                            className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${
                              order.status === "Delivered"
                                ? "bg-[#25D366]/20 text-[#0E382E]"
                                : "bg-[#E67E22]/20 text-[#E67E22]"
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>
                        <p className="text-xs text-[#1F684B] font-semibold">{order.items}</p>
                        <p className="text-[11px] text-[#74B487] font-medium">Placed on {order.date}</p>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <div className="text-right pr-2">
                          <span className="text-xs text-[#1F684B] font-medium block">Total Paid</span>
                          <span className="text-lg font-extrabold text-[#0E382E]">₹{order.total}</span>
                        </div>

                        <Link
                          to={`/order-confirmation?id=${order.id}`}
                          className="btn-dust-orange px-4 py-2 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl inline-flex items-center gap-1 shadow-xs"
                        >
                          View Invoice <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "profile" && (
              <div className="bg-white p-8 rounded-3xl border border-[#74B487]/40 shadow-sm space-y-6">
                <h3 className="text-xl font-extrabold text-[#0E382E]">
                  Personal Profile Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-[#74B487] font-bold mb-1">Full Name</label>
                    <input
                      type="text"
                      defaultValue="Rajesh Kumar"
                      className="w-full bg-[#F6F5F0] border border-[#74B487]/40 rounded-xl p-3 text-[#0E382E] font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-[#74B487] font-bold mb-1">Email Address</label>
                    <input
                      type="email"
                      defaultValue="rajesh.kumar@example.com"
                      className="w-full bg-[#F6F5F0] border border-[#74B487]/40 rounded-xl p-3 text-[#0E382E] font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-[#74B487] font-bold mb-1">Mobile Number</label>
                    <input
                      type="tel"
                      defaultValue="+91 98765 43210"
                      className="w-full bg-[#F6F5F0] border border-[#74B487]/40 rounded-xl p-3 text-[#0E382E] font-semibold"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "addresses" && (
              <div className="bg-white p-8 rounded-3xl border border-[#74B487]/40 shadow-sm space-y-6">
                <h3 className="text-xl font-extrabold text-[#0E382E]">
                  Saved Shipping Addresses
                </h3>

                <div className="p-6 bg-[#F6F5F0] rounded-2xl border border-[#74B487]/40 space-y-2 text-xs">
                  <span className="bg-[#0E382E] text-white text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full">
                    DEFAULT HOME ADDRESS
                  </span>
                  <h4 className="font-extrabold text-[#0E382E]">Rajesh Kumar</h4>
                  <p className="text-[#1F684B]">Flat 402, Green Acres Apartment, Baner Road</p>
                  <p className="text-[#1F684B]">Pune, Maharashtra — 411045</p>
                  <p className="text-[#74B487] font-semibold">Phone: +91 98765 43210</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
