import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, X, ArrowRight } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";
import { products } from "@/lib/data";

export const SearchOverlay: React.FC = () => {
  const { isSearchOpen, setSearchOpen, setQuickViewProduct } = useCartStore();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const filteredProducts = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.subtitle.toLowerCase().includes(query.toLowerCase()) ||
          p.categoryLabel.toLowerCase().includes(query.toLowerCase()) ||
          p.description.some((d) => d.toLowerCase().includes(query.toLowerCase()))
      )
    : products;

  return (
    <div className="fixed inset-0 z-50 bg-white/98 backdrop-blur-xl flex flex-col p-6 md:p-12 overflow-y-auto text-emerald-950">
      {/* Top Controls */}
      <div className="max-w-4xl mx-auto w-full flex items-center justify-between pb-8 border-b border-emerald-100">
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
          DUST CATALOGUE SEARCH
        </span>
        <button
          onClick={() => setSearchOpen(false)}
          className="p-2 text-emerald-800 hover:text-emerald-950 transition-colors"
          aria-label="Close search"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Input */}
      <div className="max-w-4xl mx-auto w-full py-8">
        <div className="relative">
          <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 text-emerald-600 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Kacha Aam, Paan, Fruit Powders..."
            className="w-full bg-transparent pl-14 pr-4 py-4 text-2xl md:text-4xl font-serif text-emerald-950 placeholder:text-emerald-200 outline-none border-b border-emerald-200 focus:border-emerald-600 transition-colors"
            autoFocus
          />
        </div>
      </div>

      {/* Results */}
      <div className="max-w-4xl mx-auto w-full flex-1">
        <div className="flex justify-between items-center mb-6">
          <span className="text-xs uppercase tracking-widest text-emerald-700 font-bold">
            {query.trim() ? `Found ${filteredProducts.length} Results` : "Featured Suggestions"}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProducts.map((product) => {
            const mainImg = product.images[0]?.src || product.storyImage;
            return (
              <div
                key={product.id}
                className="group flex gap-4 p-4 bg-emerald-50/50 border border-emerald-100 hover:border-emerald-300 rounded-xl transition-all shadow-xs"
              >
                <img
                  src={mainImg}
                  alt={product.name}
                  className="w-24 h-28 object-contain bg-white p-2 rounded-lg border border-emerald-100"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-700">
                      {product.categoryLabel}
                    </span>
                    <h3 className="text-base font-serif font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-emerald-800 italic line-clamp-1 mt-0.5">
                      {product.pitch}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <span className="font-mono text-sm font-bold text-emerald-800">
                      {product.priceDisplay}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setSearchOpen(false);
                          setQuickViewProduct(product);
                        }}
                        className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 px-2.5 py-1 bg-emerald-100 rounded hover:bg-emerald-200"
                      >
                        Quick View
                      </button>
                      <Link
                        to={`/product/${product.slug}`}
                        onClick={() => setSearchOpen(false)}
                        className="p-1.5 bg-emerald-700 text-white rounded hover:bg-emerald-800 transition-colors"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
