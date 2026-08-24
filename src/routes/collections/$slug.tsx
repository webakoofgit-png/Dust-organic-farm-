import React from "react";
import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { ArrowUpRight, ShoppingBag, Eye, Heart } from "lucide-react";
import { collections, products } from "@/lib/data";
import { useCartStore } from "@/lib/cart-store";

export const Route = createFileRoute("/collections/$slug")({
  component: CollectionPage,
});

function CollectionPage() {
  const { slug } = useParams({ from: "/collections/$slug" });
  const collection = collections.find((c) => c.slug === slug) || collections[0];

  const collectionProducts = products.filter(
    (p) => p.category === collection.slug
  );

  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct } =
    useCartStore();

  return (
    <div className="pt-28 pb-24 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen bg-white text-emerald-950">
      {/* Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-emerald-900 bg-emerald-950 p-8 sm:p-12 mb-16 shadow-lg">
        <img
          src={collection.heroImage}
          alt={collection.name}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/60 to-transparent" />

        <div className="relative z-10 max-w-2xl space-y-4 pt-12 text-white">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-emerald-300 font-bold">
            COLLECTION SHOWCASE
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white">
            {collection.name}
          </h1>
          <p className="text-sm text-emerald-100 font-light leading-relaxed">
            {collection.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {collection.meta.map((item, idx) => (
              <div
                key={idx}
                className="px-4 py-2 bg-emerald-900/80 border border-emerald-700 rounded-lg text-xs font-mono"
              >
                <span className="text-emerald-200">{item.label}: </span>
                <span className="text-amber-300 font-bold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pillars Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {collection.pillars.map((pillar, idx) => (
          <div
            key={idx}
            className="p-6 bg-emerald-50/50 rounded-2xl border border-emerald-100 space-y-2 shadow-xs"
          >
            <h4 className="text-sm font-serif font-bold text-emerald-900">
              {pillar.title}
            </h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              {pillar.text}
            </p>
          </div>
        ))}
      </div>

      {/* Products Grid */}
      <div className="space-y-8">
        <h2 className="text-2xl font-serif font-bold text-emerald-950">
          Products in this Collection
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collectionProducts.map((product) => {
            const inWishlist = isInWishlist(product.id);
            const mainImg = product.images[0]?.src || product.storyImage;

            return (
              <div
                key={product.id}
                className="group bg-emerald-50/40 rounded-3xl border border-emerald-100 overflow-hidden hover:border-emerald-300 transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
              >
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

                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-emerald-700">
                      {product.categoryLabel}
                    </span>
                    <Link
                      to="/product/$slug"
                      params={{ slug: product.slug }}
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
                      to="/product/$slug"
                      params={{ slug: product.slug }}
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
    </div>
  );
}
