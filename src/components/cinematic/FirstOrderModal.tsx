import React, { useState, useEffect } from "react";
import { Sparkles, X, Gift, CheckCircle2, Copy } from "lucide-react";

export const FirstOrderModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("dust_first_order_modal_seen");
    if (hasSeenModal) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    localStorage.setItem("dust_first_order_modal_seen", "true");
    setIsOpen(false);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText("DUSTFIRST10");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-md bg-white rounded-3xl border border-[#74B487]/50 shadow-2xl overflow-hidden text-center p-8 space-y-6">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-[#0E382E] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 bg-[#E8F1E9] text-[#E67E22] rounded-full flex items-center justify-center mx-auto border-2 border-[#74B487]/40 shadow-md">
          <Gift className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E67E22] font-extrabold flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> EXCLUSIVE WELCOME GIFT
          </span>
          <h2 className="text-2xl font-extrabold text-[#0E382E]">
            Get 10% OFF Your First DUST Order
          </h2>
          <p className="text-xs text-[#1F684B]">
            Taste India's finest fruit powders and Banarasi paan digestifs with instant 10% savings.
          </p>
        </div>

        <div className="p-4 bg-[#E8F1E9] rounded-2xl border border-[#74B487]/40 flex items-center justify-between gap-3">
          <div className="text-left">
            <p className="text-[10px] uppercase font-bold text-[#74B487]">PROMO CODE</p>
            <p className="text-lg font-extrabold text-[#0E382E] tracking-widest font-mono">DUSTFIRST10</p>
          </div>

          <button
            onClick={handleCopyCode}
            className="btn-dust-orange px-4 py-2 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl inline-flex items-center gap-1.5 shadow-sm"
          >
            {copied ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" /> COPIED!
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" /> COPY CODE
              </>
            )}
          </button>
        </div>

        <button
          onClick={handleClose}
          className="w-full bg-[#0E382E] text-white hover:bg-[#1F684B] py-3 text-xs font-extrabold uppercase tracking-widest rounded-xl transition-colors shadow-md"
        >
          Explore Shop Catalogue Now
        </button>
      </div>
    </div>
  );
};
