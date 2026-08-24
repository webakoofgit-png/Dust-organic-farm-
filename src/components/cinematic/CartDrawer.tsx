import React from "react";
import { Link } from "react-router-dom";
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    getSubtotal,
  } = useCartStore();

  if (!isCartOpen) return null;

  const subtotal = getSubtotal();
  const freeShippingThreshold = 500;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-emerald-950/40 backdrop-blur-xs transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-emerald-100 text-emerald-950 flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b border-emerald-100 flex items-center justify-between bg-emerald-50/50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-emerald-700" />
              <h2 className="text-lg font-serif tracking-widest uppercase text-emerald-950 font-bold">
                Your Selection
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-2 text-emerald-800 hover:text-emerald-950 transition-colors"
              aria-label="Close Cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="bg-emerald-50/80 px-6 py-3 border-b border-emerald-100">
            <div className="flex justify-between text-xs mb-1.5 font-sans">
              <span className="text-emerald-800 font-medium">
                {subtotal >= freeShippingThreshold ? (
                  <span className="text-emerald-700 font-bold">
                    ✓ You qualify for Free Shipping!
                  </span>
                ) : (
                  <>
                    Add{" "}
                    <strong className="text-emerald-700 font-bold">
                      ₹{freeShippingThreshold - subtotal}
                    </strong>{" "}
                    more for Free Delivery
                  </>
                )}
              </span>
            </div>
            <div className="w-full h-1.5 bg-emerald-200/60 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-600 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-emerald-800 py-12">
                <ShoppingBag className="w-12 h-12 stroke-1 mb-4 text-emerald-400" />
                <p className="text-sm font-sans uppercase tracking-widest font-bold text-emerald-950">
                  Your cart is empty
                </p>
                <p className="text-xs text-emerald-700 mt-1 max-w-xs font-light">
                  Discover our pure fruit powders and heritage wellness creations.
                </p>
                <button
                  onClick={closeCart}
                  className="mt-6 px-6 py-2.5 bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-emerald-800 transition-colors shadow-sm"
                >
                  Explore Products
                </button>
              </div>
            ) : (
              cart.map((item) => {
                const mainImg = item.product.images[0]?.src || item.product.storyImage;
                return (
                  <div
                    key={item.product.id}
                    className="flex gap-4 p-3.5 bg-emerald-50/40 rounded-xl border border-emerald-100"
                  >
                    <img
                      src={mainImg}
                      alt={item.product.name}
                      className="w-20 h-24 object-contain rounded-lg bg-white border border-emerald-100"
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="text-sm font-serif text-emerald-950 font-bold line-clamp-1">
                            {item.product.shortName || item.product.name}
                          </h3>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-stone-400 hover:text-red-500 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-[11px] text-emerald-700 mt-0.5">
                          {item.product.netWeight}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-emerald-200 rounded-md bg-white">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="p-1.5 text-emerald-800 hover:text-emerald-950"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-mono font-bold text-emerald-950">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="p-1.5 text-emerald-800 hover:text-emerald-950"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <span className="font-mono text-sm font-bold text-emerald-800">
                          ₹{item.product.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Summary */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-emerald-100 bg-emerald-50/50 space-y-4">
              <div className="flex justify-between items-baseline text-sm font-sans">
                <span className="text-emerald-800 uppercase tracking-widest text-xs font-bold">
                  Subtotal
                </span>
                <span className="text-xl font-mono font-bold text-emerald-900">
                  ₹{subtotal}
                </span>
              </div>
              <p className="text-[11px] text-emerald-700 font-sans">
                Taxes & shipping calculated at checkout.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <Link
                  to="/cart"
                  onClick={closeCart}
                  className="w-full text-center px-4 py-3 bg-white border border-emerald-200 hover:bg-emerald-100 text-emerald-950 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
                >
                  View Cart
                </Link>
                <Link
                  to="/checkout"
                  onClick={closeCart}
                  className="w-full text-center px-4 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  Checkout <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
