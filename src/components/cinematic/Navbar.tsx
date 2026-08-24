import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Heart, Menu, X } from "lucide-react";
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
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-emerald-100 py-3 shadow-sm"
            : "bg-gradient-to-b from-white/95 via-white/70 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2 text-emerald-950 font-serif tracking-widest text-2xl uppercase transition-opacity hover:opacity-90"
            data-cursor="HOME"
          >
            <span className="font-extrabold text-emerald-950 group-hover:text-emerald-600 transition-colors">
              DUST
            </span>
            <span className="text-[10px] tracking-[0.3em] font-sans font-medium text-emerald-700 border-l border-emerald-200 pl-2 hidden sm:inline">
              CINEMATIC COMMERCE
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/shop"
              className={`text-xs uppercase tracking-[0.2em] font-semibold transition-colors hover:text-emerald-600 ${
                location.pathname === "/shop"
                  ? "text-emerald-700 border-b-2 border-emerald-600 pb-0.5"
                  : "text-emerald-900"
              }`}
              data-cursor="EXPLORE"
            >
              Shop All
            </Link>
            <Link
              to="/collections/pure-fruit-powders"
              className={`text-xs uppercase tracking-[0.2em] font-semibold transition-colors hover:text-emerald-600 ${
                location.pathname.includes("pure-fruit-powders")
                  ? "text-emerald-700 border-b-2 border-emerald-600 pb-0.5"
                  : "text-emerald-900"
              }`}
            >
              Fruit Powders
            </Link>
            <Link
              to="/collections/heritage-wellness"
              className={`text-xs uppercase tracking-[0.2em] font-semibold transition-colors hover:text-emerald-600 ${
                location.pathname.includes("heritage-wellness")
                  ? "text-emerald-700 border-b-2 border-emerald-600 pb-0.5"
                  : "text-emerald-900"
              }`}
            >
              Heritage Wellness
            </Link>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Search Trigger */}
            <button
              onClick={toggleSearch}
              className="p-2 text-emerald-900 hover:text-emerald-600 transition-colors relative"
              aria-label="Search catalogue"
              data-cursor="SEARCH"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Link */}
            <Link
              to="/wishlist"
              className="p-2 text-emerald-900 hover:text-emerald-600 transition-colors relative"
              aria-label="View Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 bg-emerald-600 text-white font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Trigger */}
            <button
              onClick={toggleCart}
              className="p-2 text-emerald-950 hover:text-emerald-700 transition-colors relative flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full shadow-xs"
              data-cursor="CART"
            >
              <ShoppingBag className="w-4 h-4 text-emerald-700" />
              <span className="text-xs font-bold tracking-wider text-emerald-950">
                CART
              </span>
              <span className="bg-emerald-700 text-white font-bold text-[10px] min-w-4 h-4 px-1 rounded-full flex items-center justify-center">
                {totalCartCount}
              </span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-emerald-900 hover:text-emerald-600 md:hidden transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-white/98 backdrop-blur-xl flex flex-col justify-center px-8 md:hidden border-b border-emerald-100">
          <nav className="flex flex-col gap-6 text-center">
            <Link
              to="/"
              className="text-2xl font-serif uppercase tracking-widest text-emerald-950 hover:text-emerald-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-2xl font-serif uppercase tracking-widest text-emerald-950 hover:text-emerald-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop All
            </Link>
            <Link
              to="/collections/pure-fruit-powders"
              className="text-2xl font-serif uppercase tracking-widest text-emerald-950 hover:text-emerald-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pure Fruit Powders
            </Link>
            <Link
              to="/collections/heritage-wellness"
              className="text-2xl font-serif uppercase tracking-widest text-emerald-950 hover:text-emerald-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Heritage Wellness
            </Link>
            <Link
              to="/wishlist"
              className="text-xl font-sans uppercase tracking-widest text-emerald-700 hover:text-emerald-900 transition-colors pt-4 border-t border-emerald-100"
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
