import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { FilmGrain } from "@/components/cinematic/FilmGrain";
import { CustomCursor } from "@/components/cinematic/CustomCursor";
import { Navbar } from "@/components/cinematic/Navbar";
import { CartDrawer } from "@/components/cinematic/CartDrawer";
import { QuickViewModal } from "@/components/cinematic/QuickViewModal";
import { SearchOverlay } from "@/components/cinematic/SearchOverlay";

import { Home } from "@/pages/Home";
import { Shop } from "@/pages/Shop";
import { ProductDetail } from "@/pages/ProductDetail";
import { CollectionDetail } from "@/pages/CollectionDetail";
import { Cart } from "@/pages/Cart";
import { Checkout } from "@/pages/Checkout";
import { Wishlist } from "@/pages/Wishlist";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-emerald-950 selection:bg-emerald-600 selection:text-white relative overflow-x-hidden font-sans">
        <FilmGrain />
        <CustomCursor />
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/collections/:slug" element={<CollectionDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </main>
        <CartDrawer />
        <QuickViewModal />
        <SearchOverlay />
      </div>
    </BrowserRouter>
  );
}
