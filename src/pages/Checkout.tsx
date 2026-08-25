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
      <div className="pt-36 pb-24 px-4 sm:px-8 max-w-xl mx-auto min-h-screen text-center space-y-6 bg-[#F6F5F0] text-[#0E382E]">
        <div className="w-20 h-20 bg-[#E8F1E9] text-[#E67E22] rounded-full border border-[#74B487]/40 flex items-center justify-center mx-auto shadow-xs">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-extrabold text-[#0E382E]">
          Order Confirmed!
        </h1>
        <p className="text-sm text-stone-700 font-normal">
          Thank you, <strong className="text-[#0E382E]">{formData.name}</strong>. Your order <span className="text-[#E67E22] font-extrabold">{orderId}</span> has been placed successfully.
        </p>
        <div className="p-6 bg-white rounded-2xl border border-[#74B487]/40 text-left text-xs space-y-2 text-stone-700 shadow-xs">
          <p><strong className="text-[#0E382E]">Shipping Address:</strong> {formData.address}, {formData.city} - {formData.pincode}</p>
          <p><strong className="text-[#0E382E]">Payment Method:</strong> {formData.paymentMethod.toUpperCase()}</p>
          <p><strong className="text-[#0E382E]">Estimated Delivery:</strong> 2-4 Business Days</p>
        </div>
        <Link
          to="/"
          className="inline-block px-8 py-3.5 btn-dust-orange text-white font-extrabold text-xs uppercase tracking-widest rounded-xl transition-colors shadow-sm"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 md:px-12 lg:px-16 w-full min-h-screen bg-[#F6F5F0] text-[#0E382E]">
      <div className="mb-8 flex items-center gap-4">
        <Link to="/cart" className="text-[#0E382E] hover:text-[#E67E22] transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#E67E22] font-extrabold">
            CHECKOUT
          </span>
          <h1 className="text-3xl font-extrabold text-[#0E382E]">
            Complete Your Order
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Form (7 cols) */}
        <form onSubmit={handleCompleteOrder} className="lg:col-span-7 space-y-8">
          {/* Customer Details */}
          <div className="bg-white p-6 rounded-3xl border border-[#74B487]/40 space-y-4 shadow-xs">
            <h3 className="text-xs uppercase font-extrabold text-[#E67E22] tracking-wider">
              1. Customer Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <input
                type="text"
                required
                placeholder="Full Name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-[#F6F5F0] p-3 rounded-xl border border-[#74B487]/40 text-[#0E382E] outline-none focus:border-[#E67E22] font-medium"
              />
              <input
                type="email"
                required
                placeholder="Email Address *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-[#F6F5F0] p-3 rounded-xl border border-[#74B487]/40 text-[#0E382E] outline-none focus:border-[#E67E22] font-medium"
              />
              <input
                type="tel"
                required
                placeholder="Mobile Number (for delivery SMS) *"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-[#F6F5F0] p-3 rounded-xl border border-[#74B487]/40 text-[#0E382E] outline-none focus:border-[#E67E22] font-medium sm:col-span-2"
              />
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-white p-6 rounded-3xl border border-[#74B487]/40 space-y-4 shadow-xs">
            <h3 className="text-xs uppercase font-extrabold text-[#E67E22] tracking-wider">
              2. Shipping Address
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <input
                type="text"
                required
                placeholder="Street Address / House No. *"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="bg-[#F6F5F0] p-3 rounded-xl border border-[#74B487]/40 text-[#0E382E] outline-none focus:border-[#E67E22] font-medium sm:col-span-2"
              />
              <input
                type="text"
                required
                placeholder="City *"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="bg-[#F6F5F0] p-3 rounded-xl border border-[#74B487]/40 text-[#0E382E] outline-none focus:border-[#E67E22] font-medium"
              />
              <input
                type="text"
                required
                placeholder="Pincode *"
                value={formData.pincode}
                onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                className="bg-[#F6F5F0] p-3 rounded-xl border border-[#74B487]/40 text-[#0E382E] outline-none focus:border-[#E67E22] font-medium"
              />
            </div>
          </div>

          {/* Payment Selection */}
          <div className="bg-white p-6 rounded-3xl border border-[#74B487]/40 space-y-4 shadow-xs">
            <h3 className="text-xs uppercase font-extrabold text-[#E67E22] tracking-wider">
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
                  className={`p-4 rounded-2xl border text-left font-extrabold transition-all ${
                    formData.paymentMethod === pm.id
                      ? "bg-[#E67E22] text-white border-[#E67E22] shadow-xs"
                      : "bg-[#F6F5F0] border-[#74B487]/40 text-[#0E382E] hover:bg-[#E8F1E9]"
                  }`}
                >
                  {pm.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 btn-dust-orange text-white font-extrabold text-sm uppercase tracking-widest rounded-2xl transition-all shadow-md"
          >
            Place Order (₹{grandTotal})
          </button>
        </form>

        {/* Order Summary Sidebar (5 cols) */}
        <div className="lg:col-span-5 bg-[#E8F1E9] p-8 rounded-3xl border border-[#74B487]/40 space-y-6 sticky top-28 shadow-sm">
          <h3 className="text-xl font-extrabold text-[#0E382E] border-b border-[#74B487]/30 pb-4">
            Items in Order
          </h3>

          <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
            {cart.map((item) => (
              <div key={item.product.id} className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-3">
                  <img
                    src={item.product.images[0]?.src || item.product.storyImage}
                    alt={item.product.name}
                    className="w-12 h-14 object-contain bg-white p-1 rounded-lg border border-[#74B487]/30"
                  />
                  <div>
                    <h4 className="font-extrabold text-[#0E382E]">{item.product.shortName || item.product.name}</h4>
                    <p className="text-stone-500 font-medium">Qty: {item.quantity}</p>
                  </div>
                </div>
                <span className="text-[#0E382E] font-extrabold">
                  ₹{item.product.price * item.quantity}
                </span>
              </div>
            ))}
          </div>

          {/* Promo Code Form */}
          <form onSubmit={handleApplyPromo} className="flex gap-2 pt-2 border-t border-[#74B487]/30">
            <input
              type="text"
              placeholder="Promo Code (DUST10)"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="flex-1 bg-white px-3 py-2 text-xs text-[#0E382E] rounded-xl border border-[#74B487]/40 outline-none uppercase font-extrabold"
            />
            <button
              type="submit"
              className="px-4 py-2 btn-dust-orange text-white text-xs font-extrabold uppercase tracking-wider rounded-xl shadow-xs"
            >
              Apply
            </button>
          </form>

          {promoApplied && (
            <p className="text-xs text-[#E67E22] font-extrabold">
              ✓ Promo code applied! 10% Discount included.
            </p>
          )}

          {/* Calculation Breakdown */}
          <div className="space-y-2.5 text-xs text-[#0E382E] font-medium pt-4 border-t border-[#74B487]/30">
            <div className="flex justify-between">
              <span className="text-stone-600">Subtotal</span>
              <span className="font-bold">₹{subtotal}</span>
            </div>
            {discountAmount > 0 && (
              <div className="flex justify-between text-[#E67E22] font-extrabold">
                <span>Discount (10%)</span>
                <span>-₹{discountAmount}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-stone-600">Shipping</span>
              <span className="font-bold">{shippingFee === 0 ? "FREE" : `₹${shippingFee}`}</span>
            </div>
            <div className="flex justify-between border-t border-[#74B487]/30 pt-3 text-sm font-extrabold text-[#0E382E]">
              <span>Total Payable</span>
              <span className="text-[#E67E22] text-xl font-extrabold">₹{grandTotal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
