import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, ShoppingBag, Eye, Heart } from "lucide-react";
import { collections, products, Collection } from "@/lib/data";
import { useCartStore } from "@/lib/cart-store";

export const CollectionDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const defaultCollection = collections[0] as Collection;
  const collection: Collection = collections.find((c) => c.slug === slug) ?? defaultCollection;

  const collectionProducts = products.filter(
    (p) => p.category === collection.slug
  );

  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct } =
    useCartStore();

  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 md:px-12 lg:px-16 w-full min-h-screen bg-[#F6F5F0] text-[#0E382E]">
      {/* Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-[#74B487]/40 bg-[#0E382E] p-8 sm:p-12 mb-16 shadow-xl">
        <img
          src={collection.heroImage}
          alt={collection.name}
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E382E] via-[#0E382E]/60 to-transparent" />

        <div className="relative z-10 max-w-2xl space-y-4 pt-12 text-white">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E67E22] font-extrabold">
            COLLECTION SHOWCASE
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
            {collection.name}
          </h1>
          <p className="text-sm text-[#E8F1E9] font-normal leading-relaxed">
            {collection.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {collection.meta.map((item, idx) => (
              <div
                key={idx}
                className="px-4 py-2 bg-[#0E382E]/80 border border-[#74B487]/40 rounded-xl text-xs font-bold"
              >
                <span className="text-[#E8F1E9]">{item.label}: </span>
                <span className="text-[#E67E22] font-extrabold">{item.value}</span>
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
            className="p-6 bg-white rounded-2xl border border-[#74B487]/40 space-y-2 shadow-xs"
          >
            <h4 className="text-sm font-extrabold text-[#0E382E]">
              {pillar.title}
            </h4>
            <p className="text-xs text-stone-600 font-normal leading-relaxed">
              {pillar.text}
            </p>
          </div>
        ))}
      </div>

      {/* Products Grid */}
      <div className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E382E]">
          Products in this Collection
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collectionProducts.map((product) => {
            const inWishlist = isInWishlist(product.id);
            const mainImg = product.images[0]?.src ?? product.storyImage;

            return (
              <div
                key={product.id}
                className="group bg-white rounded-3xl border border-[#74B487]/40 overflow-hidden hover:border-[#E67E22] transition-all flex flex-col justify-between shadow-xs hover:shadow-xl"
              >
                <div className="relative h-72 bg-[#E8F1E9] p-6 flex items-center justify-center overflow-hidden border-b border-[#74B487]/30">
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
                        : "bg-white border-[#74B487]/40 text-[#0E382E] hover:text-[#E67E22]"
                    }`}
                    aria-label="Wishlist"
                  >
                    <Heart className="w-4 h-4 fill-current" />
                  </button>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#E67E22]">
                      {product.categoryLabel}
                    </span>
                    <Link
                      to={`/product/${product.slug}`}
                      className="block hover:text-[#E67E22] transition-colors mt-1"
                    >
                      <h3 className="text-xl font-extrabold text-[#0E382E]">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-[#1F684B] italic mt-0.5 font-semibold">
                      "{product.pitch}"
                    </p>
                  </div>

                  <div className="flex justify-between items-baseline pt-2">
                    <span className="text-xs text-stone-500 font-medium">
                      {product.netWeight}
                    </span>
                    <span className="text-xl font-extrabold text-[#0E382E]">
                      {product.priceDisplay}
                    </span>
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => addToCart(product)}
                      className="flex-1 py-2.5 btn-dust-orange text-white font-extrabold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" /> Add
                    </button>
                    <button
                      onClick={() => setQuickViewProduct(product)}
                      className="p-2.5 bg-[#E8F1E9] hover:bg-[#74B487]/20 text-[#0E382E] font-bold text-xs rounded-xl transition-colors border border-[#74B487]/40"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <Link
                      to={`/product/${product.slug}`}
                      className="p-2.5 bg-[#F6F5F0] border border-[#74B487]/40 text-[#0E382E] hover:text-[#E67E22] hover:border-[#E67E22] rounded-xl transition-colors"
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
};
