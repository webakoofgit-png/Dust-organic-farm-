import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  Flame,
  Award,
  Zap,
} from "lucide-react";
import { products, collections, Product, companyInfo } from "@/lib/data";
import { useCartStore } from "@/lib/cart-store";
import { CustomerReviewsCarousel } from "@/components/cinematic/CustomerReviewsCarousel";
import dustStandeeImg from "@/assets/dust-brand-usp-standee.jpg";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [introFinished, setIntroFinished] = useState(false);
  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct } =
    useCartStore();

  const handleBuyNow = (product: Product) => {
    addToCart(product, 1);
    navigate("/checkout");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroFinished(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const heroProduct: Product = products[0] ?? {
    id: "kacha-aam-01",
    slug: "kacha-aam",
    name: "Kacha Aam (Instant Aam Panna Mix)",
    shortName: "Kacha Aam",
    subtitle: "Pure Fruit Powder — Raw Mango",
    pitch: "Refreshment Instantly",
    category: "pure-fruit-powders",
    categoryLabel: "Pure Fruit Powders",
    price: 149,
    priceDisplay: "₹149",
    unitDisplay: "₹20 / Sachet",
    netWeight: "20g / 1 Glass Serving",
    badges: ["Premium Quality"],
    description: ["Real raw mango powder blend."],
    ingredients: "Cane sugar, raw mango powder, spices.",
    storage: "Keep in a cool dry place.",
    nutrition: { serving: "1 Sachet", note: "1 Serving", rows: [] },
    claims: ["100% Real Fruit"],
    ritualLabel: "How to Make It",
    ritual: [],
    heritageTitle: "Heritage",
    heritageQuote: "Tastes like home",
    images: [],
    storyImage: "",
    accent: "mango",
    stock: 100,
    sku: "DUST-MANGO-01",
    fssai: "10021064000123",
    featured: true,
    newArrival: true,
    bestSeller: true,
  };

  const storyMangoProduct = products[0] ?? heroProduct;
  const storyPaanProduct = products[1] ?? heroProduct;

  return (
    <div className="bg-[#F6F5F0] text-[#0E382E] min-h-screen">
      {/* 1. Cinematic Film Opening Loader */}
      {!introFinished && (
        <div className="fixed inset-0 z-50 bg-[#0E382E] flex flex-col items-center justify-center transition-opacity duration-700 text-[#F6F5F0]">
          <div className="text-center space-y-4 animate-pulse flex flex-col items-center">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#74B487]/50 shadow-2xl flex items-center justify-center bg-[#0E382E] mb-2 shrink-0">
              <img
                src="/logo.png"
                alt="DUST Logo"
                className="w-full h-full object-cover scale-[1.38]"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-[0.3em] uppercase">
              DUST
            </h1>
            <p className="text-xs font-bold tracking-[0.25em] text-[#E67E22] uppercase">
              CHOICE OF MOTHERLAND • 100% REAL FRUIT & HERITAGE
            </p>
          </div>
        </div>
      )}

      {/* 2. Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-between pt-36 pb-12 px-4 sm:px-8 md:px-12 lg:px-16 w-full overflow-hidden">
        {/* Ambient glow backgrounds */}
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#E67E22]/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 my-auto text-center md:text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8F1E9] border border-[#74B487] rounded-full text-[#0E382E] text-xs font-extrabold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#E67E22]" />
              <span>DUST — CHOICE OF MOTHERLAND</span>
            </div>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-[#0E382E] tracking-tight leading-[1.05]">
              PURE FRUIT <br />
              <span className="text-[#E67E22]">
                POWDERS &
              </span>{" "}
              <br />
              HERITAGE WELLNESS
            </h1>

            <p className="text-base sm:text-lg text-[#1F684B] max-w-xl font-normal leading-relaxed">
              Real raw mangoes, roasted desi spices, and authentic betel leaf infusion — ethically sourced ingredients hygienically crafted into instant sachet rituals.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4 justify-center md:justify-start">
              <Link
                to="/shop"
                className="px-8 py-4 btn-dust-orange text-white font-extrabold text-xs uppercase tracking-[0.2em] rounded-full transition-all flex items-center gap-3 shadow-lg"
                data-cursor="SHOP"
              >
                Explore Catalogue <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/collections/pure-fruit-powders"
                className="px-8 py-4 bg-[#E8F1E9] hover:bg-[#74B487]/20 border border-[#74B487] text-[#0E382E] text-xs font-extrabold uppercase tracking-[0.2em] rounded-full transition-all"
              >
                Fruit Powders
              </Link>
            </div>
          </div>

          {/* Hero Visual Spotlight */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative group w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-[#74B487]/50 bg-white p-6 flex flex-col justify-between shadow-2xl">
              <img
                src={heroProduct.storyImage}
                alt={heroProduct.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E382E]/95 via-[#0E382E]/40 to-transparent" />

              <div className="relative z-10 flex justify-between items-start">
                <span className="badge-orange text-[11px] uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 fill-current" /> BEST SELLER
                </span>
                <span className="text-xl font-extrabold text-white bg-[#0E382E]/80 px-3.5 py-1 rounded-lg backdrop-blur border border-[#74B487]/30">
                  {heroProduct.priceDisplay}
                </span>
              </div>

              <div className="relative z-10 space-y-2 text-white">
                <span className="text-xs uppercase font-extrabold tracking-wider text-[#E67E22]">
                  {heroProduct.subtitle}
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  {heroProduct.name}
                </h3>
                <p className="text-xs text-[#E8F1E9] line-clamp-2">
                  {heroProduct.pitch}
                </p>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => addToCart(heroProduct)}
                    className="flex-1 py-3.5 btn-dust-orange text-white font-extrabold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-md"
                  >
                    <ShoppingBag className="w-4 h-4" /> Add to Cart
                  </button>
                  <button
                    onClick={() => handleBuyNow(heroProduct)}
                    data-cursor="BUY"
                    className="px-4 py-3.5 bg-[#0E382E] hover:bg-[#1F684B] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-md flex items-center gap-1.5"
                  >
                    <Zap className="w-4 h-4 text-[#E67E22]" /> Buy Now
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
            className="flex flex-col items-center gap-2 text-[#1F684B] hover:text-[#E67E22] transition-colors text-xs uppercase tracking-widest font-extrabold"
          >
            <span>DISCOVER CREATIONS</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#E67E22]" />
          </a>
        </div>
      </section>

      {/* Marquee Accent Strip */}
      <section className="bg-[#E67E22] text-white py-3.5 overflow-hidden shadow-inner">
        <div className="flex gap-8 whitespace-nowrap animate-marquee font-extrabold text-xs tracking-[0.25em] uppercase">
          <span className="flex items-center gap-2">
            <Award className="w-4 h-4" /> DUST — CHOICE OF MOTHERLAND
          </span>
          <span>•</span>
          <span>100% REAL FRUIT POWDERS</span>
          <span>•</span>
          <span>ZERO SYNTHETIC COLORS</span>
          <span>•</span>
          <span>AUTHENTIC INDIAN RECIPES</span>
          <span>•</span>
          <span>INSTANT SACHET RITUALS</span>
          <span>•</span>
          <span className="flex items-center gap-2">
            <Award className="w-4 h-4" /> DUST — CHOICE OF MOTHERLAND
          </span>
          <span>•</span>
          <span>100% REAL FRUIT POWDERS</span>
        </div>
      </section>

      {/* 3. Featured Editorial Product Showcase */}
      <section id="catalogue" className="py-20 px-4 sm:px-8 md:px-12 lg:px-16 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#74B487]/40 pb-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#E67E22] font-extrabold">
              SIGNATURE CREATIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0E382E] mt-1">
              Featured Product Stories
            </h2>
          </div>
          <p className="text-sm text-[#1F684B] max-w-md mt-4 md:mt-0 font-normal">
            Every product captured verbatim from the original DUST formulation: 100% natural, instant reconstitution, and authentic Indian flavors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {products.map((product) => {
            const inWishlist = isInWishlist(product.id);
            const mainImg = product.images[0]?.src ?? product.storyImage;
            const secondaryImg = product.images[1]?.src ?? product.storyImage;

            return (
              <div
                key={product.id}
                className="group relative bg-white rounded-3xl border border-[#74B487]/40 overflow-hidden hover:border-[#E67E22] transition-all duration-500 flex flex-col justify-between shadow-sm hover:shadow-xl"
                data-cursor="BUY"
              >
                {/* Image Container with Hover Swap */}
                <div className="relative h-[360px] sm:h-[400px] bg-white p-8 flex items-center justify-center overflow-hidden border-b border-[#74B487]/30">
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
                    className={`absolute top-4 right-4 p-3 rounded-full border transition-colors shadow-xs ${inWishlist
                      ? "bg-red-50 border-red-200 text-red-500"
                      : "bg-white border-[#74B487]/40 text-[#0E382E] hover:text-[#E67E22]"
                      }`}
                    aria-label="Wishlist"
                  >
                    <Heart className="w-4 h-4 fill-current" />
                  </button>

                  {/* Offer / Category Pill */}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="badge-orange text-[10px] uppercase font-extrabold tracking-widest px-3 py-1 rounded-full shadow-xs">
                      {product.categoryLabel}
                    </span>
                    {product.bestSeller && (
                      <span className="bg-[#0E382E] text-white text-[10px] uppercase font-extrabold tracking-widest px-3 py-1 rounded-full shadow-xs">
                        BEST SELLER
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs font-bold text-[#1F684B]">
                        {product.netWeight}
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-extrabold text-[#0E382E]">
                          {product.priceDisplay}
                        </span>
                        {product.originalPriceDisplay && (
                          <span className="text-xs line-through text-stone-400 font-semibold">
                            {product.originalPriceDisplay}
                          </span>
                        )}
                      </div>
                    </div>

                    <Link
                      to={`/product/${product.slug}`}
                      className="block group-hover:text-[#E67E22] transition-colors mt-2"
                    >
                      <h3 className="text-2xl font-extrabold text-[#0E382E]">
                        {product.name}
                      </h3>
                    </Link>

                    <p className="text-xs italic text-[#E67E22] mt-1 font-semibold">
                      "{product.pitch}"
                    </p>
                  </div>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed font-normal">
                    {product.description[0]}
                  </p>

                  {/* Claims List */}
                  <div className="space-y-1.5 pt-2">
                    {product.claims.slice(0, 2).map((claim, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-[#0E382E] font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E67E22] shrink-0" />
                        <span className="line-clamp-1">{claim}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex items-center gap-3">
                    <button
                      onClick={() => addToCart(product)}
                      className="flex-1 py-3.5 btn-dust-orange text-white font-extrabold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-sm"
                    >
                      <ShoppingBag className="w-4 h-4" /> Add to Cart
                    </button>
                    <button
                      onClick={() => handleBuyNow(product)}
                      data-cursor="BUY"
                      className="px-4 py-3.5 bg-[#E8F1E9] hover:bg-[#74B487]/30 text-[#0E382E] font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors border border-[#74B487]/40 flex items-center gap-1"
                    >
                      <Zap className="w-3.5 h-3.5 text-[#E67E22]" /> Buy Now
                    </button>
                    <Link
                      to={`/product/${product.slug}`}
                      className="p-3.5 bg-[#F6F5F0] border border-[#74B487]/40 text-[#0E382E] hover:text-[#E67E22] hover:border-[#E67E22] rounded-xl transition-colors"
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

      {/* 3.5 OUR USP & USAGE RITUAL SECTION */}
      <section className="py-24 bg-[#0E382E] text-white px-4 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#74B487]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E67E22]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          {/* Section Header */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-[#E67E22] font-extrabold bg-[#1F684B]/60 px-4 py-1.5 rounded-full border border-[#74B487]/40 inline-block">
              ANYTIME. ANYWHERE. PURE REFRESHMENT.
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              REFRESH. DIGEST. REPEAT.
            </h2>
            <p className="text-sm sm:text-base text-[#E8F1E9] font-medium leading-relaxed">
              DUST™ Paan Digestive Shot is a modern take on a timeless Banaras tradition. Carefully crafted with real betel leaf extracts, rose petal gulkand, fennel, and cardamom to support digestion, freshen breath, and leave you feeling light — anytime, anywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Standee Graphic Display */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-md w-full bg-[#1F684B]/80 p-4 sm:p-6 rounded-3xl border border-[#74B487]/40 shadow-2xl backdrop-blur-md overflow-hidden">
                <img
                  src={dustStandeeImg}
                  alt="DUST Brand USP & Usage Standee"
                  className="w-full h-auto object-cover rounded-2xl border border-[#74B487]/30 shadow-lg group-hover:scale-102 transition-transform duration-500"
                />
                <div className="pt-4 text-center">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#E67E22]">
                    PROUDLY INDIAN • NATURALLY REFRESHING
                  </span>
                </div>
              </div>
            </div>

            {/* 5 USPs Grid + 4 Uses Grid */}
            <div className="lg:col-span-7 space-y-10">
              {/* USPs List */}
              <div className="space-y-4">
                <h3 className="text-xl font-extrabold text-white flex items-center gap-2 border-b border-[#74B487]/30 pb-3">
                  <Award className="w-5 h-5 text-[#E67E22]" /> OUR USP — THE DUST ADVANTAGE
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#1F684B]/60 rounded-2xl border border-[#74B487]/30 space-y-1.5">
                    <div className="flex items-center gap-2 text-[#E67E22] font-extrabold text-xs uppercase tracking-wider">
                      <Leaf className="w-4 h-4" /> Traditional Goodness
                    </div>
                    <p className="text-xs text-[#E8F1E9]">Classic paan flavor in an instant, mess-free format.</p>
                  </div>

                  <div className="p-4 bg-[#1F684B]/60 rounded-2xl border border-[#74B487]/30 space-y-1.5">
                    <div className="flex items-center gap-2 text-[#E67E22] font-extrabold text-xs uppercase tracking-wider">
                      <ShieldCheck className="w-4 h-4" /> Natural & Clean Label
                    </div>
                    <p className="text-xs text-[#E8F1E9]">100% natural ingredients you can trust, zero artificial dyes.</p>
                  </div>

                  <div className="p-4 bg-[#1F684B]/60 rounded-2xl border border-[#74B487]/30 space-y-1.5">
                    <div className="flex items-center gap-2 text-[#E67E22] font-extrabold text-xs uppercase tracking-wider">
                      <Sparkles className="w-4 h-4" /> Supports Digestion
                    </div>
                    <p className="text-xs text-[#E8F1E9]">Helps soothe your stomach and supports post-meal digestif wellness.</p>
                  </div>

                  <div className="p-4 bg-[#1F684B]/60 rounded-2xl border border-[#74B487]/30 space-y-1.5">
                    <div className="flex items-center gap-2 text-[#E67E22] font-extrabold text-xs uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4" /> Freshens Breath
                    </div>
                    <p className="text-xs text-[#E8F1E9]">Keeps your mouth feeling fresh, clean, and invigorated.</p>
                  </div>
                </div>

                <div className="p-4 bg-[#1F684B]/60 rounded-2xl border border-[#74B487]/30 space-y-1.5">
                  <div className="flex items-center gap-2 text-[#E67E22] font-extrabold text-xs uppercase tracking-wider">
                    <Zap className="w-4 h-4" /> On-The-Go Convenience
                  </div>
                  <p className="text-xs text-[#E8F1E9]">Easy-to-carry sachet — just add 150ml chilled water, stir & enjoy!</p>
                </div>
              </div>

              {/* 4 Occasions / Uses */}
              <div className="space-y-4">
                <h3 className="text-xl font-extrabold text-white flex items-center gap-2 border-b border-[#74B487]/30 pb-3">
                  <Flame className="w-5 h-5 text-[#E67E22]" /> WHEN & WHERE TO ENJOY
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-4 bg-[#1F684B]/80 rounded-2xl border border-[#74B487]/30 text-center space-y-2">
                    <span className="text-2xl block">🍽️</span>
                    <span className="text-xs font-extrabold text-white block uppercase">AFTER MEALS</span>
                  </div>

                  <div className="p-4 bg-[#1F684B]/80 rounded-2xl border border-[#74B487]/30 text-center space-y-2">
                    <span className="text-2xl block">🧳</span>
                    <span className="text-xs font-extrabold text-white block uppercase">WHILE TRAVELLING</span>
                  </div>

                  <div className="p-4 bg-[#1F684B]/80 rounded-2xl border border-[#74B487]/30 text-center space-y-2">
                    <span className="text-2xl block">💻</span>
                    <span className="text-xs font-extrabold text-white block uppercase">AT WORK / STUDY</span>
                  </div>

                  <div className="p-4 bg-[#1F684B]/80 rounded-2xl border border-[#74B487]/30 text-center space-y-2">
                    <span className="text-2xl block">👥</span>
                    <span className="text-xs font-extrabold text-white block uppercase">ANYTIME REFRESH</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Brand Heritage & Storytelling Section */}
      <section className="py-24 bg-[#E8F1E9] border-y border-[#74B487]/40 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E67E22] font-extrabold">
              OUR PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0E382E] leading-tight">
              Captured Verbatim. <br />
              Tastes Like Memory.
            </h2>
            <p className="text-[#0E382E] text-sm sm:text-base leading-relaxed font-normal">
              We grew up chasing the whistle of cookers roasting raw mangoes on summer afternoons and savoring fragrant paan after celebratory meals. DUST brings these nostalgic Indian rituals into modern instant sachets without compromising on quality or tradition.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-5 bg-white rounded-2xl border border-[#74B487]/40 space-y-2 shadow-xs">
                <ShieldCheck className="w-6 h-6 text-[#E67E22]" />
                <h4 className="text-sm font-extrabold text-[#0E382E]">100% Real Ingredients</h4>
                <p className="text-xs text-stone-600 font-normal">
                  Spray-dried real fruit, mint powder, and hand-roasted spices.
                </p>
              </div>
              <div className="p-5 bg-white rounded-2xl border border-[#74B487]/40 space-y-2 shadow-xs">
                <Leaf className="w-6 h-6 text-[#E67E22]" />
                <h4 className="text-sm font-extrabold text-[#0E382E]">No Synthetic Colors</h4>
                <p className="text-xs text-stone-600 font-normal">
                  Strictly zero artificial colors, synthetic flavors, or harmful additives.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <img
              src={storyMangoProduct.storyImage}
              alt="Story Mango"
              className="rounded-2xl border-2 border-[#74B487]/50 object-cover w-full h-80 shadow-md"
            />
            <img
              src={storyPaanProduct.storyImage}
              alt="Story Paan"
              className="rounded-2xl border-2 border-[#74B487]/50 object-cover w-full h-80 mt-8 shadow-md"
            />
          </div>
        </div>
      </section>

      {/* 5. Collections Banner Grid */}
      <section className="py-24 px-4 sm:px-8 md:px-12 lg:px-16 w-full">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E67E22] font-extrabold">
            CURATED COLLECTIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0E382E]">
            Explore Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((col) => (
            <div
              key={col.slug}
              className="relative group h-96 rounded-3xl overflow-hidden border border-[#74B487]/40 bg-[#0E382E] p-8 flex flex-col justify-between shadow-xl"
            >
              <img
                src={col.heroImage}
                alt={col.name}
                className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

              <div className="relative z-10 flex justify-between items-start">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#F6F5F0] bg-[#E67E22] px-3 py-1 rounded-full shadow-xs">
                  {col.meta[0]?.value ?? "Collection"}
                </span>
              </div>

              <div className="relative z-10 space-y-3 text-white">
                <h3 className="text-3xl font-extrabold text-white">
                  {col.name}
                </h3>
                <p className="text-xs text-[#E8F1E9] max-w-md line-clamp-2">
                  {col.description}
                </p>

                <Link
                  to={`/collections/${col.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#E67E22] hover:text-white pt-2 transition-colors"
                >
                  Explore Collection <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Photo & Video Reviews Auto-Carousel */}
      <CustomerReviewsCarousel />

    </div>
  );
};
