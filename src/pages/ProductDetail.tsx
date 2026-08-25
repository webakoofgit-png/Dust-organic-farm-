import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
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

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const defaultProduct = products[0] as Product;
  const product: Product = products.find((p) => p.slug === slug) ?? defaultProduct;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const { addToCart, toggleWishlist, isInWishlist } = useCartStore();
  const inWishlist = isInWishlist(product.id);

  const images = product.images.length > 0
    ? product.images
    : [{ src: product.storyImage, alt: product.name }];

  const activeImage = images[activeImageIndex] ?? images[0] ?? { src: product.storyImage, alt: product.name };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const otherProducts = products.filter((p) => p.id !== product.id);

  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 md:px-12 lg:px-16 w-full min-h-screen text-[#0E382E] bg-[#F6F5F0]">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[#1F684B] mb-8 font-semibold">
        <Link to="/" className="hover:text-[#E67E22] transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-[#E67E22] transition-colors">
          Shop
        </Link>
        <span>/</span>
        <span className="text-[#0E382E] font-extrabold">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Gallery (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Visual Frame */}
          <div className="relative aspect-[4/3] bg-[#E8F1E9] border border-[#74B487]/40 rounded-3xl overflow-hidden p-8 flex items-center justify-center shadow-sm">
            <img
              src={activeImage.src}
              alt={activeImage.alt || product.name}
              className="max-h-full max-w-full object-contain transition-all duration-500 hover:scale-105"
            />
            {product.savePercent && (
              <span className="absolute top-4 left-4 bg-[#E67E22] text-white font-extrabold text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
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
                    ? "border-[#E67E22] ring-2 ring-[#E67E22]/30"
                    : "border-[#74B487]/40 opacity-70 hover:opacity-100"
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
          <div className="relative rounded-3xl overflow-hidden border border-[#74B487]/40 bg-[#0E382E] mt-8 shadow-xl">
            <img
              src={product.storyImage}
              alt={`${product.name} story`}
              className="w-full h-80 object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E382E] via-[#0E382E]/40 to-transparent p-8 flex flex-col justify-end text-white">
              <span className="text-xs uppercase tracking-[0.2em] text-[#E67E22] font-extrabold">
                HERITAGE STORY
              </span>
              <h3 className="text-2xl font-extrabold text-white mt-1">
                {product.heritageTitle}
              </h3>
              <p className="text-xs text-[#E8F1E9] italic max-w-md mt-2 leading-relaxed font-normal">
                "{product.heritageQuote}"
              </p>
            </div>
          </div>
        </div>

        {/* Right Sticky Purchase Panel (5 cols) */}
        <div className="lg:col-span-5 space-y-8 sticky top-28">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#E67E22] bg-[#E8F1E9] border border-[#74B487]/40 px-3 py-1 rounded-full">
                {product.categoryLabel}
              </span>
              <span className="text-xs text-[#1F684B] font-semibold">
                SKU: {product.sku}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0E382E] leading-tight">
              {product.name}
            </h1>
            <p className="text-sm text-[#E67E22] italic mt-1 font-semibold">
              "{product.pitch}"
            </p>

            <div className="flex items-baseline gap-4 mt-6 pt-4 border-t border-[#74B487]/30">
              <span className="text-3xl font-extrabold text-[#0E382E]">
                {product.priceDisplay}
              </span>
              {product.originalPriceDisplay && (
                <span className="text-base line-through text-stone-400 font-semibold">
                  {product.originalPriceDisplay}
                </span>
              )}
              <span className="text-xs text-[#1F684B] font-bold border-l border-[#74B487]/40 pl-3">
                {product.unitDisplay}
              </span>
            </div>
          </div>

          {/* Description Paragraphs */}
          <div className="space-y-3 text-xs text-stone-700 leading-relaxed font-normal">
            {product.description.map((desc, idx) => (
              <p key={idx}>{desc}</p>
            ))}
          </div>

          {/* Quantity and Purchase CTA */}
          <div className="space-y-4 pt-4 border-t border-[#74B487]/30">
            <div className="flex items-center gap-4">
              <span className="text-xs uppercase text-[#0E382E] font-extrabold">
                Quantity
              </span>
              <div className="flex items-center border border-[#74B487]/40 rounded-xl bg-[#E8F1E9]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2.5 text-[#0E382E] hover:text-[#E67E22] font-bold"
                >
                  -
                </button>
                <span className="px-4 text-sm font-extrabold text-[#0E382E]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2.5 text-[#0E382E] hover:text-[#E67E22] font-bold"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => toggleWishlist(product.id)}
                className={`p-3 rounded-xl border transition-colors ${
                  inWishlist
                    ? "bg-red-50 border-red-200 text-red-500"
                    : "border-[#74B487]/40 text-[#0E382E] hover:bg-[#E8F1E9]"
                }`}
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5 fill-current" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleAddToCart}
                className={`w-full py-4 px-6 rounded-xl font-extrabold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-md ${
                  added
                    ? "bg-[#0E382E] text-white"
                    : "btn-dust-orange text-white"
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
                className="w-full py-4 px-6 bg-[#0E382E] hover:bg-[#1F684B] text-[#F6F5F0] font-extrabold text-xs uppercase tracking-widest rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                Buy Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="text-[11px] text-[#1F684B] text-center pt-2 flex items-center justify-center gap-2 font-bold">
              <ShieldCheck className="w-4 h-4 text-[#E67E22]" />
              <span>In Stock • Dispatched within 24 Hours • FSSAI Certified</span>
            </div>
          </div>

          {/* Claims & Highlights */}
          <div className="bg-[#E8F1E9] p-5 rounded-2xl border border-[#74B487]/40 space-y-2">
            <h4 className="text-xs uppercase tracking-widest text-[#0E382E] font-extrabold">
              Product Highlights
            </h4>
            <div className="space-y-1.5 text-xs text-stone-700 font-medium">
              {product.claims.map((claim, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#E67E22] shrink-0 mt-0.5" />
                  <span>{claim}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ritual & Nutrition Specs */}
      <section className="mt-24 pt-16 border-t border-[#74B487]/40 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Ritual Steps */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs uppercase tracking-[0.2em] text-[#E67E22] font-extrabold">
            {product.ritualLabel}
          </span>
          <h2 className="text-3xl font-extrabold text-[#0E382E]">
            Preparation Ritual
          </h2>

          <div className="space-y-6">
            {product.ritual.map((step, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-5 bg-white rounded-2xl border border-[#74B487]/40 shadow-xs"
              >
                <div className="w-8 h-8 rounded-full bg-[#E67E22] text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-xs">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-[#0E382E]">
                    {step.title}
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 font-normal">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nutritional Information */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs uppercase tracking-[0.2em] text-[#E67E22] font-extrabold">
            INGREDIENTS & NUTRITION
          </span>
          <h2 className="text-3xl font-extrabold text-[#0E382E]">
            Nutritional Facts
          </h2>

          <div className="bg-white p-6 rounded-3xl border border-[#74B487]/40 space-y-4 shadow-xs">
            <div className="text-xs text-[#0E382E] border-b border-[#74B487]/30 pb-3 flex justify-between font-extrabold">
              <span>{product.nutrition.serving}</span>
              <span className="text-[#E67E22]">{product.nutrition.note}</span>
            </div>

            <table className="w-full text-xs text-stone-700">
              <thead>
                <tr className="border-b border-[#74B487]/30 text-[#0E382E] font-extrabold">
                  <th className="text-left py-2">Nutrient</th>
                  <th className="text-right py-2">Amount</th>
                  <th className="text-right py-2">% RDA*</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8F1E9] font-medium">
                {product.nutrition.rows.map((row, idx) => (
                  <tr key={idx}>
                    <td className="py-2.5 font-extrabold text-[#0E382E]">{row[0]}</td>
                    <td className="py-2.5 text-right text-stone-700">{row[1]}</td>
                    <td className="py-2.5 text-right text-[#E67E22] font-extrabold">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="pt-4 border-t border-[#74B487]/30 space-y-2 text-[11px] text-stone-700">
              <p>
                <strong className="text-[#0E382E]">Ingredients:</strong>{" "}
                {product.ingredients}
              </p>
              <p>
                <strong className="text-[#0E382E]">Storage:</strong> {product.storage}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* You May Also Like */}
      {otherProducts.length > 0 && (
        <section className="mt-24 pt-16 border-t border-[#74B487]/40 space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#E67E22] font-extrabold">
                RECOMMENDED
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E382E] mt-1">
                You May Also Like
              </h2>
            </div>
            <Link
              to="/shop"
              className="text-xs uppercase tracking-widest text-[#E67E22] font-extrabold hover:text-[#D35400] transition-colors"
            >
              View Catalogue →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProducts.map((item) => {
              const itemImg = item.images[0]?.src ?? item.storyImage;
              return (
                <div
                  key={item.id}
                  className="flex gap-6 p-6 bg-white rounded-2xl border border-[#74B487]/40 items-center shadow-xs"
                >
                  <img
                    src={itemImg}
                    alt={item.name}
                    className="w-28 h-32 object-contain bg-[#E8F1E9] p-2 rounded-xl border border-[#74B487]/30"
                  />
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase text-[#E67E22] font-extrabold">
                      {item.categoryLabel}
                    </span>
                    <h3 className="text-lg font-extrabold text-[#0E382E]">
                      {item.name}
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-1 font-normal">
                      "{item.pitch}"
                    </p>
                    <div className="pt-2 flex items-center gap-4">
                      <span className="text-sm font-extrabold text-[#0E382E]">
                        {item.priceDisplay}
                      </span>
                      <Link
                        to={`/product/${item.slug}`}
                        className="text-xs font-extrabold uppercase tracking-wider text-[#E67E22] hover:text-[#D35400] underline underline-offset-4"
                      >
                        Explore →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};
