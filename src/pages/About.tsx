import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles, ShieldCheck, HeartHandshake, Globe, Leaf } from "lucide-react";
import { companyInfo } from "@/lib/data";

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 md:px-12 lg:px-16 w-full min-h-screen bg-[#F6F5F0] text-[#0E382E]">
      {/* Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-[#74B487]/40 bg-[#0E382E] text-white p-8 sm:p-16 mb-16 shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-[#74B487]/40 rounded-full text-xs font-extrabold uppercase tracking-widest text-[#E67E22]">
            <Sparkles className="w-4 h-4" />
            <span>OUR BRAND PURPOSE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
            Building India’s Next Generation of Consumer Beverage Brands.
          </h1>

          <p className="text-base sm:text-xl text-[#E8F1E9] font-normal leading-relaxed">
            {companyInfo.brand} is a modern Indian FMCG brand focused on creating familiar Indian taste experiences in convenient, transparent, and accessible sachet formats.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="btn-dust-orange px-8 py-4 text-white text-xs font-extrabold uppercase tracking-[0.2em] rounded-full inline-flex items-center gap-3 shadow-lg"
            >
              Explore Catalogue <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* 4 Core Pillars Grid */}
      <div className="mb-20 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E67E22] font-extrabold">
            THE DUST FORMULA
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0E382E]">
            Our Core Proposition
          </h2>
          <p className="text-sm text-[#1F684B]">
            Every sachet we craft rests on four non-negotiable promises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-[#74B487]/30 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F1E9] text-[#E67E22] flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-[#0E382E]">Indian Taste</h3>
            <p className="text-xs text-[#1F684B] leading-relaxed">
              Authentic nostalgic flavours from real Kacha Aam to royal Banarasi Paan, crafted with regional Indian botanical recipes.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#74B487]/30 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F1E9] text-[#E67E22] flex items-center justify-center">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-[#0E382E]">Convenience</h3>
            <p className="text-xs text-[#1F684B] leading-relaxed">
              Tear-and-pour sachet formats designed for modern on-the-go lifestyles. Just add chilled water for instant refreshers.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#74B487]/30 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F1E9] text-[#E67E22] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-[#0E382E]">Transparency</h3>
            <p className="text-xs text-[#1F684B] leading-relaxed">
              Zero synthetic dyes, zero artificial preservatives. Real fruit extracts and clean-label ingredient honesty.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#74B487]/30 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F1E9] text-[#E67E22] flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-[#0E382E]">Accessible Price</h3>
            <p className="text-xs text-[#1F684B] leading-relaxed">
              Premium quality FMCG beverages priced fairly so every Indian household can enjoy daily hygienic refreshment.
            </p>
          </div>
        </div>
      </div>

      {/* Brand Story & Vision Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 sm:p-12 rounded-3xl border border-[#74B487]/40 shadow-sm mb-20">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E67E22] font-extrabold">
            THE DUST VISION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E382E] leading-tight">
            Originated in India. Scaled for the World.
          </h2>
          <p className="text-sm text-[#1F684B] leading-relaxed font-normal">
            {companyInfo.brand} is parented by <strong>{companyInfo.name}</strong>. Our vision goes beyond a single beverage category. Starting with convenient fruit-based powders and heritage digestive shots, we are building a broad portfolio of Indian consumer products.
          </p>
          <p className="text-sm text-[#1F684B] leading-relaxed font-normal">
            We believe traditional Indian food and beverage wisdom holds global appeal when paired with modern hygienic packaging discipline.
          </p>
          <div className="pt-2 flex items-center gap-4">
            <div className="p-3 bg-[#E8F1E9] rounded-2xl text-[#E67E22]">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-extrabold text-[#0E382E] uppercase tracking-wider">
                {companyInfo.tagline}
              </p>
              <p className="text-[11px] text-[#74B487] font-semibold">
                CIN: {companyInfo.cin}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 bg-[#0E382E] text-white p-8 rounded-3xl space-y-6 border border-[#74B487]/30 shadow-lg">
          <h3 className="text-2xl font-extrabold text-white">Future Portfolio Expansion</h3>
          <ul className="space-y-3 text-xs text-[#E8F1E9] font-medium">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E67E22]" />
              <span>Real Fruit & Botanical Instant Coolers</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E67E22]" />
              <span>Heritage Indian Wellness Digestives</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E67E22]" />
              <span>Functional Consumer Beverages & Mixes</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E67E22]" />
              <span>On-the-go sachet convenience formats</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
