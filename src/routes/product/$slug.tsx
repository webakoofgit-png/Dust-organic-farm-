import React, { useState } from "react";
import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import {
  ShoppingBag,
  Heart,
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { products, Product } from "@/lib/data";
import { useCartStore } from "@/lib/cart-store";

export const Route = createFileRoute("/product/$slug")({
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { slug } = useParams({ from: "/product/$slug" });
  const product: Product | undefined = products.find((p) => p.slug === slug) || products[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const { addToCart, toggleWishlist, isInWishlist } = useCartStore();
  const inWishlist = isInWishlist(product.id);

  const images = product.images.length > 0
    ? product.images
    : [{ src: product.storyImage, alt: product.name }];

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const otherProducts = products.filter((p) => p.id !== product.id);

  return (
    <div className="pt-28 pb-24 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen text-emerald-950 bg-white">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 mb-8 font-medium">
        <Link to="/" className="hover:text-emerald-600">
          Home
        </Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-emerald-600">
          Shop
        </Link>
        <span>/</span>
        <span className="text-emerald-700 font-bold">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Gallery (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Visual Frame */}
          <div className="relative aspect-[4/3] bg-emerald-50/40 border border-emerald-100 rounded-3xl overflow-hidden p-8 flex items-center justify-center shadow-xs">
            <img
              src={images[activeImageIndex]?.src}
              alt={images[activeImageIndex]?.alt || product.name}
              className="max-h-full max-w-full object-contain transition-all duration-500 hover:scale-105"
            />
            {product.savePercent && (
              <span className="absolute top-4 left-4 bg-emerald-700 text-white font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-xs">
                SAVE {product.savePercent}%
              </span>
            )}
          </div>

          {/* Thumbnails */}
          <div className="flex items-center gap-4">
            {images.map((imgItem, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`w-24 h-24 bg-white rounded-2xl border p-2 overflow-hidden transition-all ${
                  activeImageIndex === idx
                    ? "border-emerald-600 ring-2 ring-emerald-600/20"
                    : "border-emerald-100 opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={imgItem.src}
                  alt={imgItem.alt}
                  className="w-full h-full object-contain"
                />
              </button>
            ))}
          </div>

          {/* Product Story Photography Banner */}
          <div className="relative rounded-3xl overflow-hidden border border-emerald-100 bg-emerald-950 mt-8 shadow-md">
            <img
              src={product.storyImage}
              alt={`${product.name} story`}
              className="w-full h-80 object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent p-8 flex flex-col justify-end text-white">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-300 font-bold">
                HERITAGE STORY
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1">
                {product.heritageTitle}
              </h3>
              <p className="text-xs text-emerald-100 italic max-w-md mt-2 leading-relaxed font-light">
                "{product.heritageQuote}"
              </p>
            </div>
          </div>
        </div>

        {/* Right Sticky Purchase Panel (5 cols) */}
        <div className="lg:col-span-5 space-y-8 sticky top-28">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase font-bold tracking-widest text-emerald-800 bg-emerald-100 border border-emerald-200 px-3 py-1 rounded-full">
                {product.categoryLabel}
              </span>
              <span className="text-xs font-mono text-emerald-700">
                SKU: {product.sku}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-emerald-950 leading-tight">
              {product.name}
            </h1>
            <p className="text-sm text-emerald-700 italic mt-1 font-medium">
              "{product.pitch}"
            </p>

            <div className="flex items-baseline gap-4 mt-6 pt-4 border-t border-emerald-100">
              <span className="text-3xl font-mono font-bold text-emerald-800">
                {product.priceDisplay}
              </span>
              {product.originalPriceDisplay && (
                <span className="text-base font-mono line-through text-slate-400">
                  {product.originalPriceDisplay}
                </span>
              )}
              <span className="text-xs text-emerald-700 font-sans border-l border-emerald-200 pl-3">
                {product.unitDisplay}
              </span>
            </div>
          </div>

          {/* Description Paragraphs */}
          <div className="space-y-3 text-xs text-slate-700 leading-relaxed font-light">
            {product.description.map((desc, idx) => (
              <p key={idx}>{desc}</p>
            ))}
          </div>

          {/* Quantity and Purchase CTA */}
          <div className="space-y-4 pt-4 border-t border-emerald-100">
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono uppercase text-emerald-800 font-bold">
                Quantity
              </span>
              <div className="flex items-center border border-emerald-200 rounded-xl bg-emerald-50">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2.5 text-emerald-800 hover:text-emerald-950 font-bold"
                >
                  -
                </button>
                <span className="px-4 font-mono text-sm font-bold text-emerald-950">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2.5 text-emerald-800 hover:text-emerald-950 font-bold"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => toggleWishlist(product.id)}
                className={`p-3 rounded-xl border transition-colors ${
                  inWishlist
                    ? "bg-red-50 border-red-200 text-red-500"
                    : "border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                }`}
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5 fill-current" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleAddToCart}
                className={`w-full py-4 px-6 rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-sm ${
                  added
                    ? "bg-emerald-800 text-white"
                    : "bg-emerald-700 hover:bg-emerald-800 text-white"
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" /> Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" /> Add to Cart (₹
                    {product.price * quantity})
                  </>
                )}
              </button>

              <Link
                to="/checkout"
                onClick={() => addToCart(product, quantity)}
                className="w-full py-4 px-6 bg-emerald-100 hover:bg-emerald-200 text-emerald-950 font-bold text-xs uppercase tracking-widest rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                Buy Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="text-[11px] font-mono text-emerald-700 text-center pt-2 flex items-center justify-center gap-2 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>In Stock • Dispatched within 24 Hours • FSSAI Certified</span>
            </div>
          </div>

          {/* Claims & Highlights */}
          <div className="bg-emerald-50/60 p-5 rounded-2xl border border-emerald-100 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
              Product Highlights
            </h4>
            <div className="space-y-1.5 text-xs text-slate-700">
              {product.claims.map((claim, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{claim}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ritual & Nutrition Specs */}
      <section className="mt-24 pt-16 border-t border-emerald-100 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Ritual Steps */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-700 font-bold">
            {product.ritualLabel}
          </span>
          <h2 className="text-3xl font-serif font-bold text-emerald-950">
            Preparation Ritual
          </h2>

          <div className="space-y-6">
            {product.ritual.map((step, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-5 bg-emerald-50/40 rounded-2xl border border-emerald-100 shadow-xs"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-700 text-white font-mono font-bold text-sm flex items-center justify-center shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-emerald-950">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 font-light">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nutritional Information */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-700 font-bold">
            INGREDIENTS & NUTRITION
          </span>
          <h2 className="text-3xl font-serif font-bold text-emerald-950">
            Nutritional Facts
          </h2>

          <div className="bg-emerald-50/60 p-6 rounded-3xl border border-emerald-100 space-y-4">
            <div className="text-xs font-mono text-emerald-800 border-b border-emerald-200 pb-3 flex justify-between font-bold">
              <span>{product.nutrition.serving}</span>
              <span className="text-emerald-700">{product.nutrition.note}</span>
            </div>

            <table className="w-full text-xs text-slate-700">
              <thead>
                <tr className="border-b border-emerald-200/60 text-emerald-900 font-mono font-bold">
                  <th className="text-left py-2">Nutrient</th>
                  <th className="text-right py-2">Amount</th>
                  <th className="text-right py-2">% RDA*</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-100 font-mono">
                {product.nutrition.rows.map((row, idx) => (
                  <tr key={idx}>
                    <td className="py-2.5 font-bold text-emerald-950">{row[0]}</td>
                    <td className="py-2.5 text-right text-slate-700">{row[1]}</td>
                    <td className="py-2.5 text-right text-emerald-700 font-bold">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="pt-4 border-t border-emerald-200 space-y-2 text-[11px] text-slate-700">
              <p>
                <strong className="text-emerald-950">Ingredients:</strong>{" "}
                {product.ingredients}
              </p>
              <p>
                <strong className="text-emerald-950">Storage:</strong> {product.storage}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* You May Also Like */}
      {otherProducts.length > 0 && (
        <section className="mt-24 pt-16 border-t border-emerald-100 space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
                RECOMMENDED
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-emerald-950 mt-1">
                You May Also Like
              </h2>
            </div>
            <Link
              to="/shop"
              className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold hover:text-emerald-900"
            >
              View Catalogue →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProducts.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 p-6 bg-emerald-50/40 rounded-2xl border border-emerald-100 items-center shadow-xs"
              >
                <img
                  src={item.images[0]?.src || item.storyImage}
                  alt={item.name}
                  className="w-28 h-32 object-contain bg-white p-2 rounded-xl border border-emerald-100"
                />
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase text-emerald-700 font-bold">
                    {item.categoryLabel}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-emerald-950">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-1 font-light">
                    "{item.pitch}"
                  </p>
                  <div className="pt-2 flex items-center gap-4">
                    <span className="font-mono text-sm font-bold text-emerald-800">
                      {item.priceDisplay}
                    </span>
                    <Link
                      to="/product/$slug"
                      params={{ slug: item.slug }}
                      className="text-xs font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-900 underline underline-offset-4"
                    >
                      Explore →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
