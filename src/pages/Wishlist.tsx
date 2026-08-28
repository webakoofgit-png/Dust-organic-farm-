import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, ShoppingBag, Trash2, Eye, Zap } from "lucide-react";
import { products, Product } from "@/lib/data";
import { useCartStore } from "@/lib/cart-store";

export const Wishlist: React.FC = () => {
  const navigate = useNavigate();
  const { wishlist, toggleWishlist, addToCart } =
    useCartStore();

  const savedProducts = products.filter((p) => wishlist.includes(p.id));

  const handleBuyNow = (product: Product) => {
    addToCart(product, 1);
    navigate("/checkout");
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 md:px-12 lg:px-16 w-full min-h-screen bg-[#F6F5F0] text-[#0E382E]">
      <div className="mb-10 space-y-2">
        <span className="text-xs uppercase tracking-[0.25em] text-[#E67E22] font-extrabold">
          SAVED ITEMS
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0E382E]">
          Your Wishlist
        </h1>
      </div>

      {savedProducts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-[#74B487]/40 space-y-4 max-w-md mx-auto shadow-xs">
          <Heart className="w-16 h-16 stroke-1 mx-auto text-[#E67E22]" />
          <h2 className="text-xl font-extrabold text-[#0E382E]">
            No saved products yet
          </h2>
          <p className="text-xs text-stone-600 font-normal">
            Click the heart icon on any product to save it to your wishlist.
          </p>
          <Link
            to="/shop"
            className="inline-block px-8 py-3.5 btn-dust-orange text-white font-extrabold text-xs uppercase tracking-widest rounded-xl transition-colors mt-2 shadow-sm"
          >
            Browse Catalogue
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {savedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl border border-[#74B487]/40 p-6 space-y-4 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all"
            >
              <div className="relative h-64 bg-white p-4 rounded-2xl border border-[#74B487]/30 flex items-center justify-center">
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
                <span className="text-[10px] uppercase text-[#E67E22] font-extrabold">
                  {product.categoryLabel}
                </span>
                <h3 className="text-lg font-extrabold text-[#0E382E]">
                  {product.name}
                </h3>
                <div className="flex justify-between items-baseline pt-2">
                  <span className="text-xs text-stone-500 font-medium">
                    {product.netWeight}
                  </span>
                  <span className="text-lg font-extrabold text-[#0E382E]">
                    {product.priceDisplay}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 py-2.5 btn-dust-orange text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <ShoppingBag className="w-4 h-4" /> Add to Cart
                </button>
                <button
                  onClick={() => handleBuyNow(product)}
                  data-cursor="BUY"
                  className="px-3.5 py-2.5 bg-[#0E382E] hover:bg-[#1F684B] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-xs flex items-center gap-1"
                >
                  <Zap className="w-3.5 h-3.5 text-[#E67E22]" /> Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
