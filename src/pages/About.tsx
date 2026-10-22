import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Globe,
  Leaf,
  Compass,
  Target,
  Award,
} from "lucide-react";
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
            Building India’s Next Generation of Consumer Brands.
          </h1>

          <p className="text-base sm:text-xl text-[#E8F1E9] font-normal leading-relaxed">
            {companyInfo.brand} is rooted in nature and made for modern India — thoughtfully bringing together nourishing food blends, fruit-powered refreshments, everyday nutrition, and nature-inspired personal care.
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

      {/* Brand Identity & Manifesto Section */}
      <section className="mb-20 bg-white rounded-3xl border border-[#74B487]/40 p-8 sm:p-12 shadow-sm relative overflow-hidden">
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#E67E22]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-10">
          {/* Header Title */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8F1E9] border border-[#74B487]/40 rounded-full text-xs font-extrabold uppercase tracking-widest text-[#E67E22]">
              <Sparkles className="w-4 h-4" />
              <span>DUST™ — CHOICE OF MOTHERLAND</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0E382E]">
              Rooted in Heritage. Designed for Today.
            </h2>
            <p className="text-sm font-bold text-[#E67E22] italic tracking-wide">
              A consumer brand by Everest Edges Pvt. Ltd.
            </p>
          </div>

          {/* Narrative Paragraphs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#1F684B] text-sm leading-relaxed font-normal">
            <div className="p-6 bg-[#F6F5F0] rounded-2xl border border-[#74B487]/30 space-y-2">
              <span className="text-xl block">🌾</span>
              <p>
                Rooted in India's rich food heritage and designed for modern lifestyles, <strong>DUST™</strong> is building a new generation of convenient consumer products inspired by flavour, quality and everyday needs.
              </p>
            </div>

            <div className="p-6 bg-[#F6F5F0] rounded-2xl border border-[#74B487]/30 space-y-2">
              <span className="text-xl block">🥭</span>
              <p>
                Our vision is to create accessible, distinctive products across fruit-based refreshments, traditional Indian refreshments and other carefully selected FMCG categories.
              </p>
            </div>

            <div className="p-6 bg-[#F6F5F0] rounded-2xl border border-[#74B487]/30 space-y-2">
              <span className="text-xl block">✨</span>
              <p>
                We believe great products begin with thoughtful ingredient selection, consistent quality and a deep understanding of Indian consumers.
              </p>
            </div>
          </div>

          {/* Vision, Mission & Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {/* Vision */}
            <div className="p-6 bg-[#0E382E] text-white rounded-2xl border border-[#74B487]/30 shadow-md space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-[#E67E22] flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-extrabold text-white uppercase tracking-wider">
                  Our Vision
                </h3>
                <p className="text-xs text-[#E8F1E9] leading-relaxed font-normal">
                  To build a trusted Indian consumer brand with the potential to reach households across India and global markets.
                </p>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#E67E22] font-black pt-2 border-t border-white/10">
                Nationally Rooted • Globally Scaled
              </span>
            </div>

            {/* Mission */}
            <div className="p-6 bg-[#0E382E] text-white rounded-2xl border border-[#74B487]/30 shadow-md space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-[#E67E22] flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-extrabold text-white uppercase tracking-wider">
                  Our Mission
                </h3>
                <p className="text-xs text-[#E8F1E9] leading-relaxed font-normal">
                  To bring flavour, convenience and thoughtful product innovation into everyday life.
                </p>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#E67E22] font-black pt-2 border-t border-white/10">
                Flavour • Convenience • Quality
              </span>
            </div>

            {/* Values */}
            <div className="p-6 bg-[#0E382E] text-white rounded-2xl border border-[#74B487]/30 shadow-md space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-[#E67E22] flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-extrabold text-white uppercase tracking-wider">
                  Our Values
                </h3>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Quality", "Innovation", "Trust", "Convenience", "Indian Roots"].map((val, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-white/10 hover:bg-[#E67E22] border border-white/15 rounded-lg text-[11px] font-extrabold tracking-wide transition-colors"
                    >
                      {val}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#E67E22] font-black pt-2 border-t border-white/10">
                5 Guiding Principles
              </span>
            </div>
          </div>

          {/* Concluding Quote Banner */}
          <div className="p-4 bg-[#E8F1E9] border-2 border-[#E67E22]/50 rounded-2xl text-center shadow-xs">
            <p className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-[#0E382E]">
              <span className="text-[#E67E22]">✦</span> Building India's next generation of consumer brands. <span className="text-[#E67E22]">✦</span>
            </p>
          </div>
        </div>
      </section>

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
              Authentic nostalgic flavours from traditional Shahi Ragi Laddoo Mix to royal Paan Digestive Shot, crafted with regional Indian wholesome recipes.
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
              Premium quality FMCG consumer products priced fairly so every Indian household can enjoy daily wholesome nutrition.
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
            {companyInfo.brand} is parented by <strong>{companyInfo.name}</strong>. Our vision goes beyond a single product category. Starting with wholesome millet mixes, convenient fruit powders, and heritage digestive shots, we are building a broad portfolio of Indian consumer products.
          </p>
          <p className="text-sm text-[#1F684B] leading-relaxed font-normal">
            We believe traditional Indian culinary and wellness wisdom holds global appeal when paired with modern hygienic packaging discipline.
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
              <span>Functional Consumer Products & Wholesome Mixes</span>
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
