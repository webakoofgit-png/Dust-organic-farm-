import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { companyInfo } from "@/lib/data";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: "Products & Ingredients",
    question: "What makes DUST sachet beverages unique?",
    answer: "DUST sachet beverages combine real spray-dried fruits and authentic Indian botanicals (like gulkand, fennel, and betel leaf) into hygienic on-the-go sachet formats. We use zero artificial dyes or synthetic preservatives.",
  },
  {
    category: "Products & Ingredients",
    question: "Are DUST products 100% vegetarian and clean label?",
    answer: "Yes, 100% of DUST products are pure vegetarian, crafted under strict hygienic manufacturing standards with clear ingredient disclosure.",
  },
  {
    category: "Preparation & Usage",
    question: "How do I prepare DUST Kacha Aam or Banarasi Paan shots?",
    answer: "Mix 1 sachet (or 10g half-pouch) into 100ml–150ml of chilled water. Stir vigorously for 15 seconds until completely dissolved and enjoy immediately.",
  },
  {
    category: "Preparation & Usage",
    question: "What is the shelf life of DUST sachet packs?",
    answer: "Unopened DUST sachets have a shelf life of 9 to 12 months when stored in a cool, dry place away from direct sunlight.",
  },
  {
    category: "Orders & Shipping",
    question: "What are the shipping charges and delivery timelines?",
    answer: "We offer FREE Express Shipping across India on all orders above ₹499. Orders are dispatched within 24 hours and delivered in 3–5 business days.",
  },
  {
    category: "Orders & Shipping",
    question: "Can I place Cash on Delivery (COD) orders?",
    answer: "Yes, COD is available across serviceable PIN codes in India.",
  },
  {
    category: "Company & Support",
    question: "Who is the parent company behind DUST?",
    answer: `DUST is parented by ${companyInfo.name} (CIN: ${companyInfo.cin}, GSTIN: ${companyInfo.gstin}), headquartered in Pune, Maharashtra.`,
  },
];

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 md:px-12 lg:px-16 w-full min-h-screen bg-[#F6F5F0] text-[#0E382E]">
      <div className="max-w-3xl mb-12 space-y-3">
        <span className="text-xs uppercase tracking-[0.25em] text-[#E67E22] font-extrabold flex items-center gap-2">
          <HelpCircle className="w-4 h-4" /> FREQUENTLY ASKED QUESTIONS
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0E382E]">
          Got Questions?
        </h1>
        <p className="text-base text-[#1F684B]">
          Find quick answers about our recipes, sachet preparation, ingredients, and delivery across India.
        </p>
      </div>

      <div className="max-w-4xl space-y-4">
        {faqData.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#74B487]/40 overflow-hidden shadow-xs transition-all"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-[#E8F1E9]/30 transition-colors"
              >
                <div>
                  <span className="text-[10px] uppercase font-extrabold text-[#E67E22] tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <span className="text-base font-extrabold text-[#0E382E]">
                    {item.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#1F684B] transition-transform duration-300 shrink-0 ${
                    isOpen ? "rotate-180 text-[#E67E22]" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-2 text-xs text-[#1F684B] leading-relaxed border-t border-[#74B487]/20 font-medium">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
