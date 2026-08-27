import React, { useState, useEffect, useRef } from "react";
import { Star, Play, ChevronLeft, ChevronRight, CheckCircle2, X, Quote } from "lucide-react";
import paanPouchImg from "@/assets/paan-pouch.jpg";
import kachaPouchImg from "@/assets/kacha-pouch.png";
import storyPaanImg from "@/assets/story-paan-dark.jpg";
import storyMangoImg from "@/assets/story-mango-dark.jpg";
import paanPosterImg from "@/assets/paan-poster.jpeg";
import paanDigestiveShotPouchImg from "@/assets/paan-digestive-shot-pouch.png";

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  date: string;
  productName: string;
  comment: string;
  mediaType: "photo" | "video";
  mediaUrl: string;
  videoPoster?: string;
  videoUrl?: string;
}

const reviewsData: Review[] = [
  {
    id: 1,
    name: "Ananya Sharma",
    location: "Pune, Maharashtra",
    rating: 5,
    date: "Verified Buyer • 2 days ago",
    productName: "Banarasi Paan Digestive Shots",
    comment:
      "Tastes exactly like royal Banarasi paan after dinner! Clean, natural, and gives instant digestive comfort. Buying 3 more boxes for my family.",
    mediaType: "photo",
    mediaUrl: "/paan_image_2.jpeg",
  },
  {
    id: 2,
    name: "Rajesh Kulkarni",
    location: "Mumbai, Maharashtra",
    rating: 5,
    date: "Verified Buyer • 1 week ago",
    productName: "Banarasi Paan Digestive Shots",
    comment:
      "Authentic Banarasi betel leaf and gulkand flavor in seconds! Replaced heavy sugary desserts after every meal.",
    mediaType: "photo",
    mediaUrl: "/paan_image_2.jpeg",
  },
  {
    id: 3,
    name: "Dr. Vikram Joshi",
    location: "Bengaluru, Karnataka",
    rating: 5,
    date: "Verified Buyer • 2 weeks ago",
    productName: "Banarasi Paan Digestive Shots",
    comment:
      "As a physician, I appreciate real betel leaf solids and natural prebiotic fiber. Superb ayurvedic digestif after heavy dinners.",
    mediaType: "video",
    mediaUrl: paanPosterImg,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-pour-of-a-fresh-herbal-tea-42171-large.mp4",
  },
  {
    id: 4,
    name: "Sneha Patel",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    date: "Verified Buyer • 3 weeks ago",
    productName: "Banarasi Paan Digestive Shots",
    comment:
      "Served these Banarasi Paan shots at our family get-together and guests were blown away! Super easy to prepare in 5 seconds.",
    mediaType: "photo",
    mediaUrl: paanPouchImg,
  },
  {
    id: 5,
    name: "Meera Nair",
    location: "Kochi, Kerala",
    rating: 5,
    date: "Verified Buyer • 1 month ago",
    productName: "Banarasi Paan Digestive Shots",
    comment:
      "The cardamom, fennel, and rose gulkand balance is pure perfection. Gives refreshing breath and soothing digestion instantly.",
    mediaType: "photo",
    mediaUrl: storyPaanImg,
  },
];

export const CustomerReviewsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  // Auto-play timer (4 seconds)
  useEffect(() => {
    if (!isPaused && !activeVideoUrl) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 4000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPaused, activeVideoUrl]);

  const currentReview: Review = (reviewsData[currentIndex] || reviewsData[0]) as Review;

  return (
    <section className="py-24 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#0E382E] text-white relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#74B487]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#E67E22]">
            CUSTOMER STORIES & TASTE REVIEWS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Loved Across Motherland India
          </h2>
          <p className="text-xs sm:text-sm text-[#E8F1E9] font-medium">
            Real customer photos, unboxing reels, and honest taste-test reviews.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Active Card */}
          <div className="bg-[#1F684B]/80 rounded-3xl border border-[#74B487]/30 p-6 sm:p-10 shadow-2xl backdrop-blur-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center transition-all duration-500">
            {/* Left: Media Column (Photo or Video Reel) */}
            <div className="md:col-span-5 relative rounded-2xl overflow-hidden shadow-xl aspect-4/5 group border border-[#74B487]/40">
              <img
                src={currentReview.mediaUrl}
                alt={currentReview.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {currentReview.mediaType === "video" && (
                <button
                  onClick={() => setActiveVideoUrl(currentReview.videoUrl || null)}
                  className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-2 group-hover:bg-black/30 transition-colors"
                >
                  <div className="w-16 h-16 bg-[#E67E22] text-white rounded-full flex items-center justify-center shadow-2xl animate-pulse group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-white translate-x-0.5" />
                  </div>
                  <span className="text-[11px] font-extrabold tracking-widest text-white uppercase bg-black/60 px-3 py-1 rounded-full border border-white/20">
                    Watch Customer Video Reel
                  </span>
                </button>
              )}

              {/* Verified Badge Overlay */}
              <div className="absolute top-3 left-3 bg-[#0E382E]/90 text-white text-[10px] font-extrabold px-3 py-1 rounded-full border border-[#74B487]/40 flex items-center gap-1.5 shadow-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" /> VERIFIED PURCHASER
              </div>
            </div>

            {/* Right: Review Details Column */}
            <div className="md:col-span-7 space-y-6 flex flex-col justify-between h-full">
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#E67E22]">
                    {[...Array(currentReview.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#E67E22]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#74B487]">
                    {currentReview.date}
                  </span>
                </div>

                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-[#E67E22]/40" />

                {/* Comment Text */}
                <p className="text-base sm:text-lg font-serif italic text-white leading-relaxed">
                  "{currentReview.comment}"
                </p>

                {/* Tagged Product */}
                <div className="inline-block bg-[#0E382E] text-[#E67E22] text-xs font-bold px-3 py-1.5 rounded-full border border-[#74B487]/30">
                  Purchased: {currentReview.productName}
                </div>
              </div>

              {/* Customer Author Profile */}
              <div className="pt-4 border-t border-[#74B487]/30 flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-extrabold text-white">
                    {currentReview.name}
                  </h4>
                  <p className="text-xs text-[#74B487] font-medium">
                    {currentReview.location}
                  </p>
                </div>

                <div className="text-xs text-[#E67E22] font-mono font-bold">
                  {currentIndex + 1} / {reviewsData.length}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {reviewsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === currentIndex ? "w-8 bg-[#E67E22]" : "w-2.5 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Left / Right Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-11 h-11 bg-[#1F684B] hover:bg-[#E67E22] text-white rounded-full border border-[#74B487]/40 flex items-center justify-center transition-colors shadow-md"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="w-11 h-11 bg-[#1F684B] hover:bg-[#E67E22] text-white rounded-full border border-[#74B487]/40 flex items-center justify-center transition-colors shadow-md"
                aria-label="Next Review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      {activeVideoUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-[#74B487]/50">
            <button
              onClick={() => setActiveVideoUrl(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 hover:bg-[#E67E22] text-white rounded-full flex items-center justify-center transition-colors border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>

            <video
              src={activeVideoUrl}
              controls
              autoPlay
              className="w-full aspect-9/16 max-h-[80vh] object-cover mx-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
};
