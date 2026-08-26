import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles, Tag, ShoppingBag, CheckCircle2 } from "lucide-react";
import { products } from "@/lib/data";

export const Combos: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 md:px-12 lg:px-16 w-full min-h-screen bg-[#F6F5F0] text-[#0E382E]">
      {/* Hero Header */}
      <div className="relative rounded-3xl overflow-hidden border border-[#74B487]/40 bg-[#0E382E] text-white p-8 sm:p-12 mb-16 shadow-xl">
        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E67E22] font-extrabold flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> BUNDLE & SAVE MORE
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
            Combos & Variety Boxes
          </h1>
          <p className="text-sm text-[#E8F1E9] font-normal leading-relaxed">
            Get the complete DUST™ taste experience. Multipacks, digestif duos, and seasonal refreshment bundles at exclusive direct-to-consumer prices.
          </p>
        </div>
      </div>

      {/* Featured Combo Deals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Combo 1 */}
        <div className="bg-white rounded-3xl border border-[#74B487]/40 p-8 flex flex-col justify-between shadow-md space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <span className="badge-orange text-[10px] uppercase font-extrabold tracking-widest px-3 py-1 rounded-full">
                BEST SELLER COMBO
              </span>
              <span className="text-xs font-extrabold text-[#E67E22] bg-[#E8F1E9] px-3 py-1 rounded-full">
                SAVE 20%
              </span>
            </div>

            <h2 className="text-2xl font-extrabold text-[#0E382E]">
              The Ultimate Dual Refreshment Pack
            </h2>

            <p className="text-xs text-[#1F684B] leading-relaxed">
              1× Kacha Aam Instant Powder (100g) + 1× Banarasi Paan Digestive Shot Box (20g). The ideal combination of daytime tanginess and royal post-meal digestive freshness.
            </p>

            <ul className="space-y-2 text-xs text-[#0E382E] font-semibold">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E67E22]" />
                <span>10 Servings of Instant Kacha Aam Coolers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E67E22]" />
                <span>4 Royal Banarasi Paan Digestif Shots</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E67E22]" />
                <span>Free Express Shipping Pan-India</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-[#74B487]/30 flex items-center justify-between">
            <div>
              <span className="text-xs line-through text-stone-400 font-bold block">₹398</span>
              <span className="text-3xl font-extrabold text-[#0E382E]">₹318</span>
            </div>

            <Link
              to="/product/kacha-aam-01"
              className="btn-dust-orange px-6 py-3 text-white font-extrabold text-xs uppercase tracking-wider rounded-full inline-flex items-center gap-2 shadow-md"
            >
              Order Combo <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Combo 2 */}
        <div className="bg-white rounded-3xl border border-[#74B487]/40 p-8 flex flex-col justify-between shadow-md space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <span className="bg-[#0E382E] text-white text-[10px] uppercase font-extrabold tracking-widest px-3 py-1 rounded-full">
                HERITAGE BUNDLE
              </span>
              <span className="text-xs font-extrabold text-[#E67E22] bg-[#E8F1E9] px-3 py-1 rounded-full">
                SAVE 25%
              </span>
            </div>

            <h2 className="text-2xl font-extrabold text-[#0E382E]">
              Banarasi Paan Digestif Family Box (3 Packs)
            </h2>

            <p className="text-xs text-[#1F684B] leading-relaxed">
              Stock up on Banaras' finest after-meal digestive shots. 3 boxes of real betel leaf and gulkand digestifs for post-dinner family rituals.
            </p>

            <ul className="space-y-2 text-xs text-[#0E382E] font-semibold">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E67E22]" />
                <span>12 Individual Digestive Shots</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E67E22]" />
                <span>Enriched with Prebiotic Inulin Fiber</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E67E22]" />
                <span>Zero Artificial Preservatives</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-[#74B487]/30 flex items-center justify-between">
            <div>
              <span className="text-xs line-through text-stone-400 font-bold block">₹747</span>
              <span className="text-3xl font-extrabold text-[#0E382E]">₹560</span>
            </div>

            <Link
              to="/product/banarasi-paan-01"
              className="btn-dust-orange px-6 py-3 text-white font-extrabold text-xs uppercase tracking-wider rounded-full inline-flex items-center gap-2 shadow-md"
            >
              Order Combo <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
