import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Eye, Heart, Search, ArrowUpRight } from "lucide-react";
import { products } from "@/lib/data";
import { useCartStore } from "@/lib/cart-store";

export const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct } =
    useCartStore();

  const filtered = products
    .filter((p) => {
      if (selectedCategory !== "all" && p.category !== selectedCategory) {
        return false;
      }
      if (
        searchQuery &&
        !p.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !p.pitch.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      return 0;
    });

  return (
    <div className="pt-28 pb-24 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen bg-white text-emerald-950">
      {/* Header */}
      <div className="mb-12 space-y-4">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-emerald-700 font-bold">
          EDITORIAL CATALOGUE
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-emerald-950">
          Shop All Creations
        </h1>
        <p className="text-emerald-800 text-sm max-w-xl font-normal">
          Explore our range of 100% natural fruit powders and heritage wellness instant sachets.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 bg-emerald-50/60 p-4 rounded-2xl border border-emerald-100 mb-12 shadow-xs">
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
              selectedCategory === "all"
                ? "bg-emerald-700 text-white shadow-xs"
                : "bg-white text-emerald-950 hover:bg-emerald-100 border border-emerald-200"
            }`}
          >
            All Products ({products.length})
          </button>
          <button
            onClick={() => setSelectedCategory("pure-fruit-powders")}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
              selectedCategory === "pure-fruit-powders"
                ? "bg-emerald-700 text-white shadow-xs"
                : "bg-white text-emerald-950 hover:bg-emerald-100 border border-emerald-200"
            }`}
          >
            Fruit Powders
          </button>
          <button
            onClick={() => setSelectedCategory("heritage-wellness")}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
              selectedCategory === "heritage-wellness"
                ? "bg-emerald-700 text-white shadow-xs"
                : "bg-white text-emerald-950 hover:bg-emerald-100 border border-emerald-200"
            }`}
          >
            Heritage Wellness
          </button>
        </div>

        {/* Right Search & Sort */}
        <div className="flex items-center gap-3">
          {/* Search Box */}
          <div className="relative flex-1 md:w-56">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-600" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full bg-white text-xs text-emerald-950 pl-9 pr-3 py-2 rounded-xl border border-emerald-200 focus:border-emerald-600 outline-none"
            />
          </div>

          {/* Sort Select */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white text-xs text-emerald-950 px-3 py-2 rounded-xl border border-emerald-200 outline-none focus:border-emerald-600 font-medium"
          >
            <option value="featured">Featured Sort</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((product) => {
          const inWishlist = isInWishlist(product.id);
          const mainImg = product.images[0]?.src || product.storyImage;

          return (
            <div
              key={product.id}
              className="group bg-emerald-50/40 rounded-3xl border border-emerald-100 overflow-hidden hover:border-emerald-300 transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              {/* Product Visual */}
              <div className="relative h-72 bg-white p-6 flex items-center justify-center overflow-hidden border-b border-emerald-100">
                <img
                  src={mainImg}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />

                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur border transition-colors shadow-xs ${
                    inWishlist
                      ? "bg-red-50 border-red-200 text-red-500"
                      : "bg-white/90 border-emerald-100 text-emerald-700 hover:text-emerald-950"
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className="w-4 h-4 fill-current" />
                </button>
              </div>

              {/* Details */}
              <div className="p-6 space-y-4">
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-emerald-700">
                    {product.categoryLabel}
                  </span>
                  <Link
                    to={`/product/${product.slug}`}
                    className="block hover:text-emerald-700 transition-colors mt-1"
                  >
                    <h3 className="text-xl font-serif font-bold text-emerald-950">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-emerald-700 italic mt-0.5 font-medium">
                    "{product.pitch}"
                  </p>
                </div>

                <div className="flex justify-between items-baseline pt-2">
                  <span className="text-xs text-slate-500">
                    {product.netWeight}
                  </span>
                  <span className="text-xl font-mono font-bold text-emerald-800">
                    {product.priceDisplay}
                  </span>
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => addToCart(product)}
                    className="flex-1 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" /> Add
                  </button>
                  <button
                    onClick={() => setQuickViewProduct(product)}
                    className="p-2.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-950 font-bold text-xs rounded-xl transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <Link
                    to={`/product/${product.slug}`}
                    className="p-2.5 bg-white border border-emerald-200 text-emerald-800 hover:text-emerald-950 rounded-xl transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
