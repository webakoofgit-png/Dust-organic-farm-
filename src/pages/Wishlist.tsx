import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Trash2, Eye } from "lucide-react";
import { products } from "@/lib/data";
import { useCartStore } from "@/lib/cart-store";

export const Wishlist: React.FC = () => {
  const { wishlist, toggleWishlist, addToCart, setQuickViewProduct } =
    useCartStore();

  const savedProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="pt-28 pb-24 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen bg-white text-emerald-950">
      <div className="mb-12 space-y-2">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-emerald-700 font-bold">
          SAVED ITEMS
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-emerald-950">
          Your Wishlist
        </h1>
      </div>

      {savedProducts.length === 0 ? (
        <div className="text-center py-20 bg-emerald-50/50 rounded-3xl border border-emerald-100 space-y-4 max-w-md mx-auto">
          <Heart className="w-16 h-16 stroke-1 mx-auto text-emerald-400" />
          <h2 className="text-xl font-serif font-bold text-emerald-950">
            No saved products yet
          </h2>
          <p className="text-xs text-slate-600 font-light">
            Click the heart icon on any product to save it to your wishlist.
          </p>
          <Link
            to="/shop"
            className="inline-block px-8 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-colors mt-2 shadow-xs"
          >
            Browse Catalogue
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {savedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-emerald-50/40 rounded-3xl border border-emerald-100 p-6 space-y-4 flex flex-col justify-between shadow-xs"
            >
              <div className="relative h-64 bg-white p-4 rounded-2xl border border-emerald-100 flex items-center justify-center">
                <img
                  src={product.images[0]?.src || product.storyImage}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-3 right-3 p-2 bg-red-50 text-red-500 rounded-full border border-red-200"
                  aria-label="Remove from wishlist"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase text-emerald-700 font-bold">
                  {product.categoryLabel}
                </span>
                <h3 className="text-lg font-serif font-bold text-emerald-950">
                  {product.name}
                </h3>
                <div className="flex justify-between items-baseline pt-2">
                  <span className="text-xs text-slate-500 font-sans">
                    {product.netWeight}
                  </span>
                  <span className="text-lg font-mono font-bold text-emerald-800">
                    {product.priceDisplay}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <ShoppingBag className="w-4 h-4" /> Add to Cart
                </button>
                <button
                  onClick={() => setQuickViewProduct(product)}
                  className="p-2.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-950 font-bold rounded-xl transition-colors"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
