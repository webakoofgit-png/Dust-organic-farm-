import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, CheckCircle2, ArrowLeft } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";

export const Checkout: React.FC = () => {
  const { cart, getSubtotal, clearCart } = useCartStore();

  const [promoCode, setPromoCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    paymentMethod: "upi",
  });

  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState("");

  const subtotal = getSubtotal();
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const shippingFee = subtotal >= 500 || subtotal === 0 ? 0 : 49;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "DUST10") {
      setDiscountPercent(10);
      setPromoApplied(true);
    } else {
      alert("Invalid Promo Code. Try 'DUST10' for 10% OFF!");
    }
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill in your name, phone, and shipping address.");
      return;
    }
    const generatedId = "DUST-" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setOrderComplete(true);
    clearCart();
  };

  if (orderComplete) {
    return (
      <div className="pt-32 pb-24 px-4 sm:px-8 max-w-xl mx-auto min-h-screen text-center space-y-6 bg-white text-emerald-950">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-700 rounded-full border border-emerald-300 flex items-center justify-center mx-auto shadow-xs">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-serif font-bold text-emerald-950">
          Order Confirmed!
        </h1>
        <p className="text-sm text-slate-700 font-normal">
          Thank you, <strong className="text-emerald-800">{formData.name}</strong>. Your order <span className="font-mono text-emerald-800 font-bold">{orderId}</span> has been placed successfully.
        </p>
        <div className="p-6 bg-emerald-50/60 rounded-2xl border border-emerald-100 text-left text-xs font-mono space-y-2 text-slate-700 shadow-xs">
          <p><strong className="text-emerald-950">Shipping Address:</strong> {formData.address}, {formData.city} - {formData.pincode}</p>
          <p><strong className="text-emerald-950">Payment Method:</strong> {formData.paymentMethod.toUpperCase()}</p>
          <p><strong className="text-emerald-950">Estimated Delivery:</strong> 2-4 Business Days</p>
        </div>
        <Link
          to="/"
          className="inline-block px-8 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-colors shadow-xs"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen bg-white text-emerald-950">
      <div className="mb-8 flex items-center gap-4">
        <Link to="/cart" className="text-emerald-700 hover:text-emerald-950 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-emerald-700 font-bold">
            CHECKOUT
          </span>
          <h1 className="text-3xl font-serif font-bold text-emerald-950">
            Complete Your Order
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Form (7 cols) */}
        <form onSubmit={handleCompleteOrder} className="lg:col-span-7 space-y-8">
          {/* Customer Details */}
          <div className="bg-emerald-50/50 p-6 rounded-3xl border border-emerald-100 space-y-4 shadow-xs">
            <h3 className="text-sm font-mono uppercase font-bold text-emerald-800 tracking-wider">
              1. Customer Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <input
                type="text"
                required
                placeholder="Full Name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-white p-3 rounded-xl border border-emerald-200 text-emerald-950 outline-none focus:border-emerald-600 font-medium"
              />
              <input
                type="email"
                required
                placeholder="Email Address *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-white p-3 rounded-xl border border-emerald-200 text-emerald-950 outline-none focus:border-emerald-600 font-medium"
              />
              <input
                type="tel"
                required
                placeholder="Mobile Number (for delivery SMS) *"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-white p-3 rounded-xl border border-emerald-200 text-emerald-950 outline-none focus:border-emerald-600 font-medium sm:col-span-2"
              />
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-emerald-50/50 p-6 rounded-3xl border border-emerald-100 space-y-4 shadow-xs">
            <h3 className="text-sm font-mono uppercase font-bold text-emerald-800 tracking-wider">
              2. Shipping Address
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <input
                type="text"
                required
                placeholder="Street Address / House No. *"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="bg-white p-3 rounded-xl border border-emerald-200 text-emerald-950 outline-none focus:border-emerald-600 font-medium sm:col-span-2"
              />
              <input
                type="text"
                required
                placeholder="City *"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="bg-white p-3 rounded-xl border border-emerald-200 text-emerald-950 outline-none focus:border-emerald-600 font-medium"
              />
              <input
                type="text"
                required
                placeholder="Pincode *"
                value={formData.pincode}
                onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                className="bg-white p-3 rounded-xl border border-emerald-200 text-emerald-950 outline-none focus:border-emerald-600 font-medium"
              />
            </div>
          </div>

          {/* Payment Selection */}
          <div className="bg-emerald-50/50 p-6 rounded-3xl border border-emerald-100 space-y-4 shadow-xs">
            <h3 className="text-sm font-mono uppercase font-bold text-emerald-800 tracking-wider">
              3. Select Payment Method
            </h3>
            <div className="grid grid-cols-2 gap-3 text-xs">
              {[
                { id: "upi", label: "UPI / GPay / PhonePe" },
                { id: "card", label: "Credit / Debit Card" },
                { id: "netbanking", label: "Net Banking" },
                { id: "cod", label: "Cash on Delivery" },
              ].map((pm) => (
                <button
                  type="button"
                  key={pm.id}
                  onClick={() => setFormData({ ...formData, paymentMethod: pm.id })}
                  className={`p-4 rounded-2xl border text-left font-bold transition-all ${
                    formData.paymentMethod === pm.id
                      ? "bg-emerald-700 text-white border-emerald-700 shadow-xs"
                      : "bg-white border-emerald-200 text-emerald-950 hover:bg-emerald-50"
                  }`}
                >
                  {pm.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm uppercase tracking-widest rounded-2xl transition-all shadow-md"
          >
            Place Order (₹{grandTotal})
          </button>
        </form>

        {/* Order Summary Sidebar (5 cols) */}
        <div className="lg:col-span-5 bg-emerald-50/60 p-8 rounded-3xl border border-emerald-100 space-y-6 sticky top-28 shadow-sm">
          <h3 className="text-xl font-serif font-bold text-emerald-950 border-b border-emerald-200 pb-4">
            Items in Order
          </h3>

          <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
            {cart.map((item) => (
              <div key={item.product.id} className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-3">
                  <img
                    src={item.product.images[0]?.src || item.product.storyImage}
                    alt={item.product.name}
                    className="w-12 h-14 object-contain bg-white p-1 rounded-lg border border-emerald-100"
                  />
                  <div>
                    <h4 className="font-bold text-emerald-950">{item.product.shortName || item.product.name}</h4>
                    <p className="text-slate-500">Qty: {item.quantity}</p>
                  </div>
                </div>
                <span className="font-mono text-emerald-800 font-bold">
                  ₹{item.product.price * item.quantity}
                </span>
              </div>
            ))}
          </div>

          {/* Promo Code Form */}
          <form onSubmit={handleApplyPromo} className="flex gap-2 pt-2 border-t border-emerald-200">
            <input
              type="text"
              placeholder="Promo Code (DUST10)"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="flex-1 bg-white px-3 py-2 text-xs text-emerald-950 rounded-xl border border-emerald-200 outline-none uppercase font-mono font-bold"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-xs"
            >
              Apply
            </button>
          </form>

          {promoApplied && (
            <p className="text-xs text-emerald-700 font-mono font-bold">
              ✓ Promo code applied! 10% Discount included.
            </p>
          )}

          {/* Calculation Breakdown */}
          <div className="space-y-2.5 text-xs font-mono text-emerald-950 font-medium pt-4 border-t border-emerald-200">
            <div className="flex justify-between">
              <span className="text-slate-600">Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            {discountAmount > 0 && (
              <div className="flex justify-between text-emerald-700 font-bold">
                <span>Discount (10%)</span>
                <span>-₹{discountAmount}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-slate-600">Shipping</span>
              <span>{shippingFee === 0 ? "FREE" : `₹${shippingFee}`}</span>
            </div>
            <div className="flex justify-between border-t border-emerald-200 pt-3 text-sm font-bold text-emerald-950">
              <span>Total Payable</span>
              <span className="text-emerald-800 text-lg">₹{grandTotal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
