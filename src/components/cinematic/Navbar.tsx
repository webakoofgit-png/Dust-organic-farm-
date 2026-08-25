import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Heart, Menu, X, Sparkles } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const {
    getTotalItems,
    toggleCart,
    toggleSearch,
    wishlist,
  } = useCartStore();

  const totalCartCount = getTotalItems();
  const wishlistCount = wishlist.length;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#0E382E] text-[#F6F5F0] py-1.5 px-4 text-center text-xs font-medium tracking-wide flex items-center justify-center gap-3 border-b border-[#1F684B]/50">
        <span className="inline-flex items-center gap-1 text-[#E67E22] font-bold text-[11px] uppercase tracking-wider bg-[#E67E22]/15 px-2 py-0.5 rounded-full border border-[#E67E22]/30">
          <Sparkles className="w-3 h-3 text-[#E67E22]" /> Offer
        </span>
        <span className="hidden sm:inline text-white/90">
          Free Delivery Across India on Orders Above ₹499
        </span>
        <span className="text-[#E67E22] font-semibold text-xs tracking-wider">
          • DUST — CHOICE OF MOTHERLAND
        </span>
      </div>

      <header
        className={`fixed top-[33px] left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#F6F5F0]/95 backdrop-blur-md border-b border-[#74B487]/30 py-3 shadow-md"
            : "bg-gradient-to-b from-[#F6F5F0]/95 via-[#F6F5F0]/80 to-transparent py-4"
        }`}
      >
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3 transition-opacity hover:opacity-90"
            data-cursor="HOME"
          >
            <div className="relative h-9 w-9 sm:h-10 sm:w-10 rounded-full overflow-hidden border border-[#74B487]/50 shadow-xs flex items-center justify-center bg-[#0E382E] shrink-0 group-hover:scale-105 transition-transform">
              <img
                src="/logo.png"
                alt="DUST — Choice of Motherland"
                className="w-full h-full object-cover scale-[1.38]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-[#0E382E] group-hover:text-[#E67E22] transition-colors font-sans text-xl leading-none tracking-widest">
                DUST
              </span>
              <span className="text-[9px] tracking-[0.2em] font-sans font-extrabold text-[#E67E22] uppercase hidden sm:inline mt-0.5">
                CHOICE OF MOTHERLAND
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 font-sans">
            <Link
              to="/shop"
              className={`text-xs uppercase tracking-[0.18em] font-bold transition-all hover:text-[#E67E22] ${
                location.pathname === "/shop"
                  ? "text-[#E67E22] border-b-2 border-[#E67E22] pb-0.5"
                  : "text-[#0E382E]"
              }`}
              data-cursor="EXPLORE"
            >
              Shop All
            </Link>
            <Link
              to="/collections/pure-fruit-powders"
              className={`text-xs uppercase tracking-[0.18em] font-bold transition-all hover:text-[#E67E22] ${
                location.pathname.includes("pure-fruit-powders")
                  ? "text-[#E67E22] border-b-2 border-[#E67E22] pb-0.5"
                  : "text-[#0E382E]"
              }`}
            >
              Fruit Powders
            </Link>
            <Link
              to="/collections/heritage-wellness"
              className={`text-xs uppercase tracking-[0.18em] font-bold transition-all hover:text-[#E67E22] ${
                location.pathname.includes("heritage-wellness")
                  ? "text-[#E67E22] border-b-2 border-[#E67E22] pb-0.5"
                  : "text-[#0E382E]"
              }`}
            >
              Heritage Wellness
            </Link>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-1 sm:gap-3 md:gap-4 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={toggleSearch}
              className="p-2 text-[#0E382E] hover:text-[#E67E22] transition-colors relative rounded-full hover:bg-[#E8F1E9]"
              aria-label="Search catalogue"
              data-cursor="SEARCH"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Link */}
            <Link
              to="/wishlist"
              className="p-2 text-[#0E382E] hover:text-[#E67E22] transition-colors relative rounded-full hover:bg-[#E8F1E9]"
              aria-label="View Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 bg-[#E67E22] text-white font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Trigger */}
            <button
              onClick={toggleCart}
              className="relative flex items-center justify-center p-2 text-[#0E382E] hover:text-[#E67E22] transition-all rounded-full hover:bg-[#E8F1E9] sm:bg-[#E8F1E9] sm:border sm:border-[#74B487]/50 sm:px-3.5 sm:py-1.5 sm:shadow-xs"
              aria-label="Shopping Cart"
              data-cursor="CART"
            >
              <ShoppingBag className="w-5 h-5 sm:w-4 sm:h-4 text-[#0E382E]" />
              <span className="hidden sm:inline text-xs font-bold tracking-wider text-[#0E382E]">
                CART
              </span>
              <span className="absolute -top-1 -right-1 sm:static sm:top-auto sm:right-auto bg-[#E67E22] text-white font-bold text-[10px] min-w-4 h-4 px-1 rounded-full flex items-center justify-center shadow-xs">
                {totalCartCount}
              </span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0E382E] hover:text-[#E67E22] md:hidden transition-colors rounded-full hover:bg-[#E8F1E9]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#F6F5F0]/98 backdrop-blur-xl flex flex-col justify-center px-8 md:hidden border-b border-[#74B487]">
          <nav className="flex flex-col gap-6 text-center">
            <Link
              to="/"
              className="text-2xl font-bold uppercase tracking-widest text-[#0E382E] hover:text-[#E67E22] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-2xl font-bold uppercase tracking-widest text-[#0E382E] hover:text-[#E67E22] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop All
            </Link>
            <Link
              to="/collections/pure-fruit-powders"
              className="text-2xl font-bold uppercase tracking-widest text-[#0E382E] hover:text-[#E67E22] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pure Fruit Powders
            </Link>
            <Link
              to="/collections/heritage-wellness"
              className="text-2xl font-bold uppercase tracking-widest text-[#0E382E] hover:text-[#E67E22] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Heritage Wellness
            </Link>
            <Link
              to="/wishlist"
              className="text-xl font-bold uppercase tracking-widest text-[#E67E22] transition-colors pt-4 border-t border-[#74B487]/30"
              onClick={() => setMobileMenuOpen(false)}
            >
              Saved Wishlist ({wishlistCount})
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};
