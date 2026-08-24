import React from "react";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";

export const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, getSubtotal, clearCart } =
    useCartStore();

  const subtotal = getSubtotal();
  const shippingFee = subtotal >= 500 || subtotal === 0 ? 0 : 49;
  const grandTotal = subtotal + shippingFee;

  return (
    <div className="pt-28 pb-24 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen bg-white text-emerald-950">
      <div className="mb-12 space-y-2">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-emerald-700 font-bold">
          SHOPPING BAG
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-emerald-950">
          Your Cart Selection
        </h1>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-20 bg-emerald-50/50 rounded-3xl border border-emerald-100 space-y-4 max-w-md mx-auto">
          <ShoppingBag className="w-16 h-16 stroke-1 mx-auto text-emerald-400" />
          <h2 className="text-xl font-serif font-bold text-emerald-950">
            Your cart is empty
          </h2>
          <p className="text-xs text-emerald-700">
            Explore our authentic raw mango and paan instant powder sachets.
          </p>
          <Link
            to="/shop"
            className="inline-block px-8 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-colors mt-2 shadow-xs"
          >
            Explore Catalogue
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Cart Items List (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-emerald-100 text-xs font-mono text-emerald-700 font-bold uppercase tracking-wider">
              <span>Item Description</span>
              <button
                onClick={clearCart}
                className="hover:text-red-500 transition-colors"
              >
                Clear Cart
              </button>
            </div>

            {cart.map((item) => {
              const mainImg = item.product.images[0]?.src || item.product.storyImage;
              return (
                <div
                  key={item.product.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 bg-emerald-50/40 rounded-3xl border border-emerald-100 gap-6 shadow-xs"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={mainImg}
                      alt={item.product.name}
                      className="w-20 h-24 object-contain bg-white p-2 rounded-2xl border border-emerald-100 shrink-0"
                    />
                    <div>
                      <span className="text-[10px] font-mono uppercase text-emerald-700 font-bold">
                        {item.product.categoryLabel}
                      </span>
                      <h3 className="text-lg font-serif font-bold text-emerald-950">
                        {item.product.name}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {item.product.netWeight}
                      </p>
                      <p className="text-xs font-mono text-emerald-800 font-bold mt-1">
                        {item.product.priceDisplay}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-full sm:w-auto gap-6 pt-4 sm:pt-0 border-t sm:border-t-0 border-emerald-100">
                    <div className="flex items-center border border-emerald-200 rounded-xl bg-white">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="px-3 py-1.5 text-emerald-800 hover:text-emerald-950 font-bold"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 font-mono text-sm font-bold text-emerald-950">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="px-3 py-1.5 text-emerald-800 hover:text-emerald-950 font-bold"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <span className="font-mono text-base font-bold text-emerald-950 w-20 text-right">
                      ₹{item.product.price * item.quantity}
                    </span>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                      aria-label="Remove"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary (4 cols) */}
          <div className="lg:col-span-4 bg-emerald-50/60 p-8 rounded-3xl border border-emerald-100 space-y-6 sticky top-28 shadow-sm">
            <h3 className="text-xl font-serif font-bold text-emerald-950 border-b border-emerald-200 pb-4">
              Order Summary
            </h3>

            <div className="space-y-3 text-xs font-mono text-emerald-950 font-medium">
              <div className="flex justify-between">
                <span className="text-slate-600">Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Shipping Estimate</span>
                <span>{shippingFee === 0 ? "FREE" : `₹${shippingFee}`}</span>
              </div>
              <div className="flex justify-between border-t border-emerald-200 pt-3 text-sm font-bold text-emerald-950">
                <span>Grand Total</span>
                <span className="text-emerald-800 text-lg">₹{grandTotal}</span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="w-full py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
            >
              Proceed to Checkout <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center justify-center gap-2 text-[11px] text-emerald-700 font-mono font-medium pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Safe & Secure SSL Checkout</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
