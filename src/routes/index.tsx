import React, { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShoppingBag,
  Eye,
  Heart,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Leaf,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { products, collections } from "@/lib/data";
import { useCartStore } from "@/lib/cart-store";

export const Route = createFileRoute("/")({
  component: Homepage,
});

function Homepage() {
  const [introFinished, setIntroFinished] = useState(false);
  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct } =
    useCartStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroFinished(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white text-emerald-950 min-h-screen">
      {/* 1. Cinematic Film Opening Loader */}
      {!introFinished && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center transition-opacity duration-700">
          <div className="text-center space-y-4 animate-pulse">
            <h1 className="text-5xl md:text-7xl font-serif font-black tracking-[0.4em] text-emerald-950 uppercase">
              DUST
            </h1>
            <p className="text-xs font-mono tracking-[0.3em] text-emerald-700 uppercase font-bold">
              Cinematic Commerce — 100% Real Fruit & Heritage
            </p>
          </div>
        </div>
      )}

      {/* 2. Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Ambient glow backgrounds */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-200/40 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-100/60 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 my-auto text-center md:text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-100/80 border border-emerald-200 rounded-full text-emerald-800 text-xs font-mono font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>RECONSTITUTES IN SECONDS • TASTES LIKE MEMORY</span>
            </div>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-serif font-bold text-emerald-950 tracking-tight leading-[1.05]">
              PURE FRUIT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600">
                POWDERS &
              </span>{" "}
              <br />
              HERITAGE WELLNESS
            </h1>

            <p className="text-base sm:text-lg text-emerald-800 max-w-xl font-sans font-normal leading-relaxed">
              Real raw mangoes, roasted desi spices, and authentic betel leaf infusion — ethically sourced ingredients hygienically crafted into instant sachet rituals.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/shop"
                className="px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-[0.2em] rounded-full transition-all shadow-lg shadow-emerald-700/20 flex items-center gap-3"
                data-cursor="SHOP"
              >
                Explore Catalogue <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/collections/$slug"
                params={{ slug: "pure-fruit-powders" }}
                className="px-8 py-4 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-950 text-xs font-bold uppercase tracking-[0.2em] rounded-full transition-all"
              >
                Fruit Powders
              </Link>
            </div>
          </div>

          {/* Hero Visual Spotlight */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative group w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-emerald-200/80 bg-white p-6 flex flex-col justify-between shadow-xl">
              <img
                src={products[0].storyImage}
                alt={products[0].name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/30 to-transparent" />

              <div className="relative z-10 flex justify-between items-start">
                <span className="bg-emerald-600 text-white font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-xs">
                  BEST SELLER
                </span>
                <span className="font-mono text-xl font-bold text-white bg-emerald-950/70 px-3 py-1 rounded-lg backdrop-blur">
                  {products[0].priceDisplay}
                </span>
              </div>

              <div className="relative z-10 space-y-2 text-white">
                <span className="text-xs uppercase font-mono tracking-widest text-emerald-300 font-bold">
                  {products[0].subtitle}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">
                  {products[0].name}
                </h3>
                <p className="text-xs text-emerald-100 line-clamp-2">
                  {products[0].pitch}
                </p>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => addToCart(products[0])}
                    className="flex-1 py-3 bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" /> Add to Cart
                  </button>
                  <button
                    onClick={() => setQuickViewProduct(products[0])}
                    className="p-3 bg-white/20 backdrop-blur border border-white/40 text-white rounded-xl hover:bg-white/30"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="relative z-10 flex justify-center pt-8">
          <a
            href="#catalogue"
            className="flex flex-col items-center gap-2 text-emerald-700 hover:text-emerald-900 transition-colors text-xs uppercase tracking-widest font-mono font-bold"
          >
            <span>DISCOVER CREATIONS</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-emerald-600" />
          </a>
        </div>
      </section>

      {/* 3. Featured Editorial Product Showcase */}
      <section id="catalogue" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-emerald-100 pb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-emerald-700 font-bold">
              SIGNATURE CREATIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-emerald-950 mt-2">
              Featured Product Stories
            </h2>
          </div>
          <p className="text-sm text-emerald-800 max-w-md mt-4 md:mt-0 font-normal">
            Every product captured verbatim from the original DUST formulation: 100% natural, instant reconstitution, and authentic Indian flavors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product) => {
            const inWishlist = isInWishlist(product.id);
            const mainImg = product.images[0]?.src || product.storyImage;
            const secondaryImg = product.images[1]?.src || product.storyImage;

            return (
              <div
                key={product.id}
                className="group relative bg-emerald-50/40 rounded-3xl border border-emerald-100 overflow-hidden hover:border-emerald-300 transition-all duration-500 flex flex-col justify-between shadow-sm hover:shadow-md"
                data-cursor="VIEW"
              >
                {/* Image Container with Hover Swap */}
                <div className="relative h-[360px] sm:h-[420px] bg-white p-8 flex items-center justify-center overflow-hidden border-b border-emerald-100">
                  <img
                    src={mainImg}
                    alt={product.name}
                    className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105 group-hover:opacity-0"
                  />
                  <img
                    src={secondaryImg}
                    alt={`${product.name} detail`}
                    className="absolute inset-0 w-full h-full object-contain p-8 transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-105"
                  />

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`absolute top-4 right-4 p-3 rounded-full border transition-colors shadow-xs ${
                      inWishlist
                        ? "bg-red-50 border-red-200 text-red-500"
                        : "bg-white/90 border-emerald-100 text-emerald-700 hover:text-emerald-950"
                    }`}
                    aria-label="Wishlist"
                  >
                    <Heart className="w-4 h-4 fill-current" />
                  </button>

                  {/* Category Pill */}
                  <span className="absolute bottom-4 left-4 text-[10px] font-mono uppercase font-bold tracking-widest text-emerald-800 bg-emerald-100/90 border border-emerald-200 px-3 py-1 rounded-full">
                    {product.categoryLabel}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs font-mono text-emerald-700">
                        {product.netWeight}
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-mono font-bold text-emerald-800">
                          {product.priceDisplay}
                        </span>
                        {product.originalPriceDisplay && (
                          <span className="text-xs font-mono text-slate-400 line-through">
                            {product.originalPriceDisplay}
                          </span>
                        )}
                      </div>
                    </div>

                    <Link
                      to="/product/$slug"
                      params={{ slug: product.slug }}
                      className="block group-hover:text-emerald-700 transition-colors mt-2"
                    >
                      <h3 className="text-2xl font-serif font-bold text-emerald-950">
                        {product.name}
                      </h3>
                    </Link>

                    <p className="text-xs italic text-emerald-700 mt-1 font-medium">
                      "{product.pitch}"
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-light">
                    {product.description[0]}
                  </p>

                  {/* Claims List */}
                  <div className="space-y-1.5 pt-2">
                    {product.claims.slice(0, 2).map((claim, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-emerald-900"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="line-clamp-1">{claim}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex items-center gap-3">
                    <button
                      onClick={() => addToCart(product)}
                      className="flex-1 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <ShoppingBag className="w-4 h-4" /> Add to Cart
                    </button>
                    <button
                      onClick={() => setQuickViewProduct(product)}
                      className="px-4 py-3 bg-emerald-100 hover:bg-emerald-200 text-emerald-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
                    >
                      Quick View
                    </button>
                    <Link
                      to="/product/$slug"
                      params={{ slug: product.slug }}
                      className="p-3 bg-white border border-emerald-200 text-emerald-800 hover:text-emerald-950 rounded-xl transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Brand Heritage & Storytelling Section */}
      <section className="py-24 bg-emerald-50/60 border-y border-emerald-100 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-emerald-700 font-bold">
              OUR PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-emerald-950 leading-tight">
              Captured Verbatim. <br />
              Tastes Like Memory.
            </h2>
            <p className="text-emerald-900 text-sm sm:text-base leading-relaxed font-normal">
              We grew up chasing the whistle of cookers roasting raw mangoes on summer afternoons and savoring fragrant paan after celebratory meals. DUST brings these nostalgic Indian rituals into modern instant sachets without compromising on quality or tradition.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-5 bg-white rounded-2xl border border-emerald-100 space-y-2 shadow-xs">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
                <h4 className="text-sm font-bold text-emerald-950">100% Real Ingredients</h4>
                <p className="text-xs text-slate-600 font-light">
                  Spray-dried real fruit, mint powder, and hand-roasted spices.
                </p>
              </div>
              <div className="p-5 bg-white rounded-2xl border border-emerald-100 space-y-2 shadow-xs">
                <Leaf className="w-6 h-6 text-emerald-600" />
                <h4 className="text-sm font-bold text-emerald-950">No Synthetic Colors</h4>
                <p className="text-xs text-slate-600 font-light">
                  Strictly zero artificial colors, synthetic flavors, or harmful additives.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <img
              src={products[0].storyImage}
              alt="Story Mango"
              className="rounded-2xl border border-emerald-200 object-cover w-full h-80 shadow-md"
            />
            <img
              src={products[1].storyImage}
              alt="Story Paan"
              className="rounded-2xl border border-emerald-200 object-cover w-full h-80 mt-8 shadow-md"
            />
          </div>
        </div>
      </section>

      {/* 5. Collections Banner Grid */}
      <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-emerald-700 font-bold">
            CURATED COLLECTIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-emerald-950">
            Explore Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((col) => (
            <div
              key={col.slug}
              className="relative group h-96 rounded-3xl overflow-hidden border border-emerald-100 bg-emerald-950 p-8 flex flex-col justify-between shadow-lg"
            >
              <img
                src={col.heroImage}
                alt={col.name}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/60 to-transparent" />

              <div className="relative z-10 flex justify-between items-start">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-200 bg-emerald-900/80 px-3 py-1 rounded-full border border-emerald-700">
                  {col.meta[0]?.value || "Collection"}
                </span>
              </div>

              <div className="relative z-10 space-y-3 text-white">
                <h3 className="text-3xl font-serif font-bold text-white">
                  {col.name}
                </h3>
                <p className="text-xs text-emerald-100 max-w-md line-clamp-2">
                  {col.description}
                </p>

                <Link
                  to="/collections/$slug"
                  params={{ slug: col.slug }}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-300 hover:text-white pt-2"
                >
                  Explore Collection <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="bg-emerald-950 text-emerald-100 pt-16 pb-12 px-4 sm:px-8 border-t border-emerald-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-emerald-900">
          <div className="space-y-4 md:col-span-2">
            <h2 className="text-3xl font-serif font-bold text-white tracking-widest">
              DUST
            </h2>
            <p className="text-xs text-emerald-300 max-w-sm leading-relaxed font-light">
              Ultra-premium, cinematic e-commerce for authentic Indian fruit powders and heritage wellness creations.
            </p>
            <div className="text-xs font-mono text-emerald-400 pt-2">
              FSSAI Lic No. 10021064000123 • Pure Quality Guaranteed
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200">
              <li>
                <Link to="/shop" className="hover:text-white transition-colors">
                  Shop Catalogue
                </Link>
              </li>
              <li>
                <Link
                  to="/collections/$slug"
                  params={{ slug: "pure-fruit-powders" }}
                  className="hover:text-white transition-colors"
                >
                  Pure Fruit Powders
                </Link>
              </li>
              <li>
                <Link
                  to="/collections/$slug"
                  params={{ slug: "heritage-wellness" }}
                  className="hover:text-white transition-colors"
                >
                  Heritage Wellness
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="hover:text-white transition-colors">
                  Saved Wishlist
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4 font-bold">
              Customer Support
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200">
              <li>Contact: care@dustnatural.com</li>
              <li>Hours: Mon–Sat, 10am–6pm IST</li>
              <li>Shipping: Nationwide India</li>
              <li>100% Secure Checkout</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-emerald-400 gap-4">
          <p>© {new Date().getFullYear()} DUST Natural. All rights reserved.</p>
          <p>Cinematic Commerce Experience</p>
        </div>
      </footer>
    </div>
  );
}
