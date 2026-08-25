import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X, ShoppingBag, Heart, Check } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";

export const QuickViewModal: React.FC = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
  } = useCartStore();

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!quickViewProduct) return null;

  const inWishlist = isInWishlist(quickViewProduct.id);
  const mainImage = quickViewProduct.images[0]?.src || quickViewProduct.storyImage;

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0E382E]/50 backdrop-blur-xs transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-3xl bg-[#F6F5F0] border border-[#74B487]/40 rounded-2xl overflow-hidden shadow-2xl text-[#0E382E] grid grid-cols-1 md:grid-cols-2">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 text-[#0E382E] hover:text-[#E67E22] bg-[#E8F1E9] rounded-full transition-colors border border-[#74B487]/30"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Side */}
        <div className="relative bg-white p-8 flex items-center justify-center min-h-[320px] border-r border-[#74B487]/30">
          <img
            src={mainImage}
            alt={quickViewProduct.name}
            className="max-h-[340px] w-auto object-contain transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
            {quickViewProduct.badges.map((badge, idx) => (
              <span
                key={idx}
                className="bg-[#E67E22] text-white text-[10px] uppercase font-extrabold tracking-widest px-2.5 py-1 rounded-full shadow-xs"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Product Info Side */}
        <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#E67E22] font-extrabold">
              {quickViewProduct.categoryLabel}
            </span>
            <h2 className="text-2xl font-extrabold text-[#0E382E] mt-1">
              {quickViewProduct.name}
            </h2>
            <p className="text-xs text-[#1F684B] italic mt-1 font-medium">
              "{quickViewProduct.pitch}"
            </p>

            <div className="flex items-baseline gap-3 mt-4">
              <span className="text-2xl font-extrabold text-[#0E382E]">
                {quickViewProduct.priceDisplay}
              </span>
              {quickViewProduct.originalPriceDisplay && (
                <span className="text-sm line-through text-stone-400 font-semibold">
                  {quickViewProduct.originalPriceDisplay}
                </span>
              )}
              <span className="text-xs text-[#1F684B] font-bold border-l border-[#74B487]/40 pl-3">
                {quickViewProduct.netWeight}
              </span>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed mt-4 line-clamp-3 font-normal">
              {quickViewProduct.description[0]}
            </p>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              {/* Quantity */}
              <div className="flex items-center border border-[#74B487]/40 rounded-lg bg-[#E8F1E9]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-[#0E382E] hover:text-[#E67E22] font-bold"
                >
                  -
                </button>
                <span className="px-3 text-sm font-extrabold text-[#0E382E]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-[#0E382E] hover:text-[#E67E22] font-bold"
                >
                  +
                </button>
              </div>

              {/* Wishlist */}
              <button
                onClick={() => toggleWishlist(quickViewProduct.id)}
                className={`p-3 rounded-lg border transition-colors ${
                  inWishlist
                    ? "bg-red-50 border-red-200 text-red-500"
                    : "border-[#74B487]/40 text-[#0E382E] hover:bg-[#E8F1E9]"
                }`}
                aria-label="Toggle Wishlist"
              >
                <Heart className="w-5 h-5 fill-current" />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className={`w-full py-3.5 px-6 rounded-xl font-extrabold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-md ${
                added
                  ? "bg-[#0E382E] text-white"
                  : "btn-dust-orange text-white"
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" /> Added to Bag
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" /> Add to Cart (₹
                  {quickViewProduct.price * quantity})
                </>
              )}
            </button>

            <div className="text-center pt-2">
              <Link
                to={`/product/${quickViewProduct.slug}`}
                onClick={() => setQuickViewProduct(null)}
                className="text-xs uppercase tracking-widest font-extrabold text-[#E67E22] hover:text-[#D35400] underline underline-offset-4 transition-colors"
              >
                View Full Product Story & Ritual →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
