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
        className="fixed inset-0 bg-emerald-950/40 backdrop-blur-xs transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-3xl bg-white border border-emerald-100 rounded-2xl overflow-hidden shadow-2xl text-emerald-950 grid grid-cols-1 md:grid-cols-2">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 text-emerald-800 hover:text-emerald-950 bg-emerald-100/80 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Side */}
        <div className="relative bg-emerald-50/60 p-8 flex items-center justify-center min-h-[320px] border-r border-emerald-100">
          <img
            src={mainImage}
            alt={quickViewProduct.name}
            className="max-h-[340px] w-auto object-contain transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 flex gap-2">
            {quickViewProduct.badges.map((badge, idx) => (
              <span
                key={idx}
                className="bg-emerald-700 text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full shadow-xs"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Product Info Side */}
        <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-700 font-bold">
              {quickViewProduct.categoryLabel}
            </span>
            <h2 className="text-2xl font-serif font-bold text-emerald-950 mt-1">
              {quickViewProduct.name}
            </h2>
            <p className="text-xs text-emerald-700 italic mt-1 font-medium">
              "{quickViewProduct.pitch}"
            </p>

            <div className="flex items-baseline gap-3 mt-4">
              <span className="text-2xl font-mono font-bold text-emerald-800">
                {quickViewProduct.priceDisplay}
              </span>
              {quickViewProduct.originalPriceDisplay && (
                <span className="text-sm font-mono line-through text-slate-400">
                  {quickViewProduct.originalPriceDisplay}
                </span>
              )}
              <span className="text-xs text-emerald-700 font-sans border-l border-emerald-200 pl-3">
                {quickViewProduct.netWeight}
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mt-4 line-clamp-3 font-light">
              {quickViewProduct.description[0]}
            </p>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              {/* Quantity */}
              <div className="flex items-center border border-emerald-200 rounded-lg bg-emerald-50">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-emerald-800 hover:text-emerald-950 font-bold"
                >
                  -
                </button>
                <span className="px-3 font-mono text-sm font-bold text-emerald-950">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-emerald-800 hover:text-emerald-950 font-bold"
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
                    : "border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                }`}
                aria-label="Toggle Wishlist"
              >
                <Heart className="w-5 h-5 fill-current" />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className={`w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-sm ${
                added
                  ? "bg-emerald-800 text-white"
                  : "bg-emerald-700 hover:bg-emerald-800 text-white"
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
                className="text-xs uppercase tracking-widest font-bold text-emerald-700 hover:text-emerald-900 underline underline-offset-4 transition-colors"
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
