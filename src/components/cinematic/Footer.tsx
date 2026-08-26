import React from "react";
import { Link } from "react-router-dom";
import { companyInfo } from "@/lib/data";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0E382E] text-[#F6F5F0] pt-16 pb-12 px-4 sm:px-8 md:px-12 lg:px-16 border-t border-[#1F684B]">
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1F684B]">
        <div className="space-y-4 md:col-span-4">
          <div className="flex items-center gap-3">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border border-[#74B487]/50 shadow-md flex items-center justify-center bg-[#0E382E] shrink-0">
              <img
                src="/logo.png"
                alt="DUST — Choice of Motherland"
                className="w-full h-full object-cover scale-[1.38]"
              />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-white tracking-widest leading-none">
                DUST
              </h2>
              <p className="text-xs text-[#E67E22] font-extrabold uppercase tracking-widest mt-1">
                CHOICE OF MOTHERLAND
              </p>
            </div>
          </div>
          <p className="text-xs text-[#E8F1E9] max-w-md leading-relaxed font-normal">
            Parented by <strong>{companyInfo.name}</strong>. Building India's next generation of consumer beverage brands.
          </p>
          <div className="space-y-1 text-xs text-[#74B487] font-semibold">
            <p>CIN: {companyInfo.cin} | GSTIN: {companyInfo.gstin}</p>
            <p>Address: {companyInfo.address}</p>
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-xs uppercase tracking-widest text-[#E67E22] mb-4 font-extrabold">
            Quick Links
          </h4>
          <ul className="space-y-2 text-xs text-[#E8F1E9] font-medium">
            <li>
              <Link to="/shop" className="hover:text-[#E67E22] transition-colors">
                Shop Catalogue
              </Link>
            </li>
            <li>
              <Link to="/combos" className="hover:text-[#E67E22] transition-colors">
                Combos & Offers
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#E67E22] transition-colors">
                About DUST
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#E67E22] transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-[#E67E22] transition-colors">
                FAQ & Support
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs uppercase tracking-widest text-[#E67E22] mb-4 font-extrabold">
            Legal & Policies
          </h4>
          <ul className="space-y-2 text-xs text-[#E8F1E9] font-medium">
            <li>
              <Link to="/privacy-policy" className="hover:text-[#E67E22] transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-conditions" className="hover:text-[#E67E22] transition-colors">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/shipping-policy" className="hover:text-[#E67E22] transition-colors">
                Shipping & Delivery Policy
              </Link>
            </li>
            <li>
              <Link to="/return-refund-policy" className="hover:text-[#E67E22] transition-colors">
                Return & Refund Policy
              </Link>
            </li>
            <li>
              <Link to="/cancellation-policy" className="hover:text-[#E67E22] transition-colors">
                Cancellation Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs uppercase tracking-widest text-[#E67E22] mb-4 font-extrabold">
            Contact & Support
          </h4>
          <ul className="space-y-2 text-xs text-[#E8F1E9] font-medium">
            <li>
              Customer Care:{" "}
              <a href={`mailto:${companyInfo.email}`} className="text-[#E67E22] font-bold hover:underline block truncate">
                {companyInfo.email}
              </a>
            </li>
            <li>
              Business Email:{" "}
              <a href={`mailto:${companyInfo.businessEmail}`} className="text-[#E67E22] font-bold hover:underline block truncate">
                {companyInfo.businessEmail}
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href={`tel:${companyInfo.phone}`} className="text-[#E67E22] font-bold hover:underline">
                {companyInfo.phoneFormatted}
              </a>
            </li>
            <li>
              WhatsApp:{" "}
              <a href={companyInfo.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-bold hover:underline">
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-[#74B487] font-bold gap-4">
        <p>© {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
        <p className="text-[#E67E22]">DUST — CHOICE OF MOTHERLAND</p>
      </div>
    </footer>
  );
};
