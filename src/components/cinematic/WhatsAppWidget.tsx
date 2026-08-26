import React from "react";
import { MessageCircle } from "lucide-react";
import { companyInfo } from "@/lib/data";

export const WhatsAppWidget: React.FC = () => {
  return (
    <a
      href={companyInfo.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-4 py-3.5 rounded-full shadow-2xl hover:scale-105 hover:bg-[#20ba5a] transition-all group"
      aria-label="Chat on WhatsApp"
      data-cursor="CHAT"
    >
      <div className="relative flex items-center justify-center">
        <MessageCircle className="w-6 h-6 fill-white stroke-[#25D366]" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
      </div>
      <span className="font-extrabold text-xs tracking-wider uppercase hidden sm:inline">
        Need Help? Chat with Us
      </span>
    </a>
  );
};
