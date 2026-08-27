import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Building2,
  MessageSquare,
  TrendingUp,
  DollarSign,
  Users,
  CheckCircle2,
  Edit3,
  Plus,
  Search,
  Filter,
  Eye,
  FileText,
  Save,
  Trash2,
  LogOut,
} from "lucide-react";
import { products as initialProducts, companyInfo, Product } from "@/lib/data";
import { useAdminAuthStore } from "@/lib/admin-auth-store";

export const Admin: React.FC = () => {
  const navigate = useNavigate();
  const { isAdminLoggedIn, adminLogout, adminUser } = useAdminAuthStore();

  if (!isAdminLoggedIn) {
    return <Navigate to="/admin-login" replace />;
  }

  const [activeTab, setActiveTab] = useState<
    "overview" | "products" | "orders" | "distributors" | "inquiries"
  >("overview");

  // Editable Product State
  const [productsList, setProductsList] = useState<Product[]>(initialProducts);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Mock Orders State
  const [orders, setOrders] = useState([
    {
      id: "DST-8806-9482",
      customer: "Rajesh Kumar",
      email: "rajesh.kumar@example.com",
      phone: "9876543210",
      total: 647,
      payment: "PAID (UPI)",
      status: "Handed to Courier",
      awb: "SR-994821",
      date: "26 Aug 2026",
    },
    {
      id: "DST-8806-3810",
      customer: "Priya Sharma",
      email: "priya.sharma@example.com",
      phone: "9812345678",
      total: 398,
      payment: "PAID (Card)",
      status: "Delivered",
      awb: "DEL-882910",
      date: "24 Aug 2026",
    },
    {
      id: "DST-8806-1029",
      customer: "Amit Verma",
      email: "amit.verma@example.com",
      phone: "9711223344",
      total: 249,
      payment: "COD",
      status: "Packed",
      awb: "Pending",
      date: "25 Aug 2026",
    },
  ]);

  // Mock Distributor Leads State
  const [distributorLeads, setDistributorLeads] = useState([
    {
      id: 1,
      name: "Rajesh Kumar",
      company: "Om Traders & Agency",
      phone: "9876543210",
      email: "rajesh@omtraders.com",
      location: "Pune, Maharashtra",
      channel: "Regional Distributor",
      investment: "₹2 Lakhs – ₹5 Lakhs",
      status: "New",
      date: "26 Aug 2026",
    },
    {
      id: 2,
      name: "Vikram Shah",
      company: "Shah Retail Enterprises",
      phone: "9822001122",
      email: "vikram@shahretail.in",
      location: "Ahmedabad, Gujarat",
      channel: "Super Stockist",
      investment: "Above ₹5 Lakhs",
      status: "In Review",
      date: "25 Aug 2026",
    },
  ]);

  const handleUpdatePrice = (id: string, newPrice: number) => {
    setProductsList((prev) =>
      prev.map((p) => (p.id === id ? { ...p, price: newPrice } : p))
    );
  };

  const handleUpdateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
    );
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 md:px-12 lg:px-16 w-full min-h-screen bg-[#F6F5F0] text-[#0E382E]">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Admin Header */}
        <div className="bg-[#0E382E] text-white p-8 sm:p-10 rounded-3xl border border-[#74B487]/40 shadow-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#E67E22] font-extrabold flex items-center gap-2">
              <Building2 className="w-4 h-4" /> CENTRAL ADMIN CMS PORTAL
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              DUST Operations Management
            </h1>
            <p className="text-xs text-[#E8F1E9] mt-1 font-semibold">
              Parented by <strong>{companyInfo.name}</strong> • CIN: {companyInfo.cin}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="bg-[#1F684B] px-4 py-2 rounded-2xl text-right text-xs">
              <span className="text-[#E67E22] font-bold block uppercase">Admin Logged In</span>
              <span className="text-white font-extrabold">{adminUser?.name || "Master Admin"}</span>
            </div>
            <button
              onClick={() => {
                adminLogout();
                navigate("/admin-login");
              }}
              className="bg-[#E67E22] hover:bg-[#d67018] text-white px-4 py-2.5 rounded-2xl text-xs font-extrabold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors shadow-md"
            >
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </div>
        </div>

        {/* Admin Navigation Tabs */}
        <div className="flex flex-wrap gap-3 border-b border-[#74B487]/30 pb-4">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-6 py-3 rounded-full font-extrabold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-all ${activeTab === "overview"
                ? "bg-[#0E382E] text-white shadow-md"
                : "bg-white text-[#0E382E] hover:bg-[#E8F1E9]"
              }`}
          >
            <LayoutDashboard className="w-4 h-4 text-[#E67E22]" /> Overview KPIs
          </button>

          <button
            onClick={() => setActiveTab("products")}
            className={`px-6 py-3 rounded-full font-extrabold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-all ${activeTab === "products"
                ? "bg-[#0E382E] text-white shadow-md"
                : "bg-white text-[#0E382E] hover:bg-[#E8F1E9]"
              }`}
          >
            <Package className="w-4 h-4 text-[#E67E22]" /> Product Catalog ({productsList.length})
          </button>

          <button
            onClick={() => setActiveTab("orders")}
            className={`px-6 py-3 rounded-full font-extrabold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-all ${activeTab === "orders"
                ? "bg-[#0E382E] text-white shadow-md"
                : "bg-white text-[#0E382E] hover:bg-[#E8F1E9]"
              }`}
          >
            <ShoppingBag className="w-4 h-4 text-[#E67E22]" /> Customer Orders ({orders.length})
          </button>

          <button
            onClick={() => setActiveTab("distributors")}
            className={`px-6 py-3 rounded-full font-extrabold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-all ${activeTab === "distributors"
                ? "bg-[#0E382E] text-white shadow-md"
                : "bg-white text-[#0E382E] hover:bg-[#E8F1E9]"
              }`}
          >
            <Building2 className="w-4 h-4 text-[#E67E22]" /> B2B Leads ({distributorLeads.length})
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-[#74B487]/40 shadow-sm space-y-2">
                <div className="flex items-center justify-between text-stone-400">
                  <span className="text-xs uppercase font-extrabold tracking-wider">Total Sales</span>
                  <DollarSign className="w-5 h-5 text-[#E67E22]" />
                </div>
                <div className="text-3xl font-extrabold text-[#0E382E]">₹1,294.00</div>
                <p className="text-[11px] text-[#25D366] font-bold">↑ +18.4% from last month</p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[#74B487]/40 shadow-sm space-y-2">
                <div className="flex items-center justify-between text-stone-400">
                  <span className="text-xs uppercase font-extrabold tracking-wider">Total Orders</span>
                  <ShoppingBag className="w-5 h-5 text-[#E67E22]" />
                </div>
                <div className="text-3xl font-extrabold text-[#0E382E]">3 Orders</div>
                <p className="text-[11px] text-[#74B487] font-bold">100% Pan-India Dispatched</p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[#74B487]/40 shadow-sm space-y-2">
                <div className="flex items-center justify-between text-stone-400">
                  <span className="text-xs uppercase font-extrabold tracking-wider">Active Products</span>
                  <Package className="w-5 h-5 text-[#E67E22]" />
                </div>
                <div className="text-3xl font-extrabold text-[#0E382E]">{productsList.length} SKUs</div>
                <p className="text-[11px] text-[#74B487] font-bold">In Stock at Pune Hub</p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[#74B487]/40 shadow-sm space-y-2">
                <div className="flex items-center justify-between text-stone-400">
                  <span className="text-xs uppercase font-extrabold tracking-wider">B2B Leads</span>
                  <Users className="w-5 h-5 text-[#E67E22]" />
                </div>
                <div className="text-3xl font-extrabold text-[#0E382E]">{distributorLeads.length} Leads</div>
                <p className="text-[11px] text-[#E67E22] font-bold">Requires Admin Review</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Products Catalog */}
        {activeTab === "products" && (
          <div className="bg-white p-8 rounded-3xl border border-[#74B487]/40 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-xl font-extrabold text-[#0E382E]">Product Inventory & Pricing</h3>
                <p className="text-xs text-[#1F684B]">Manage live catalog prices and stock availability.</p>
              </div>
            </div>

            <div className="border border-[#74B487]/30 rounded-2xl overflow-hidden text-xs">
              <table className="w-full text-left">
                <thead className="bg-[#E8F1E9] text-[#0E382E] font-extrabold">
                  <tr>
                    <th className="p-4">SKU Product Name</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Price (₹)</th>
                    <th className="p-4">Compare Price (₹)</th>
                    <th className="p-4">Weight / Servings</th>
                    <th className="p-4">Badge</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#74B487]/20 text-[#1F684B]">
                  {productsList.map((product) => (
                    <tr key={product.id} className="hover:bg-[#F6F5F0]">
                      <td className="p-4 font-bold text-[#0E382E] flex items-center gap-3">
                        <img
                          src={product.images[0]?.src || ""}
                          alt={product.name}
                          className="w-10 h-10 object-cover rounded-lg border border-[#74B487]/40"
                        />
                        <div>
                          <p>{product.name}</p>
                          <span className="text-[10px] text-[#74B487] font-mono">{product.id}</span>
                        </div>
                      </td>
                      <td className="p-4 uppercase font-bold text-[10px] text-[#0E382E]">
                        {product.category}
                      </td>
                      <td className="p-4 font-extrabold text-[#0E382E]">
                        ₹{product.price}
                      </td>
                      <td className="p-4 line-through text-stone-400">
                        ₹{product.originalPrice}
                      </td>
                      <td className="p-4 font-medium">
                        {product.netWeight} ({product.unitDisplay})
                      </td>
                      <td className="p-4">
                        {(product.bestSeller || product.featured) && (
                          <span className="bg-[#E67E22] text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                            BEST SELLER
                          </span>
                        )}
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => {
                            const newPrice = prompt(`Enter new price for ${product.name}:`, product.price.toString());
                            if (newPrice && !isNaN(Number(newPrice))) {
                              handleUpdatePrice(product.id, Number(newPrice));
                            }
                          }}
                          className="px-3 py-1.5 bg-[#0E382E] text-white rounded-lg text-[10px] font-bold hover:bg-[#E67E22] transition-colors"
                        >
                          Edit Price
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Customer Orders */}
        {activeTab === "orders" && (
          <div className="bg-white p-8 rounded-3xl border border-[#74B487]/40 shadow-sm space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-extrabold text-[#0E382E]">Recent Customer Orders</h3>
                <p className="text-xs text-[#1F684B]">Track order fulfillment and change delivery stages.</p>
              </div>
            </div>

            <div className="border border-[#74B487]/30 rounded-2xl overflow-hidden text-xs">
              <table className="w-full text-left">
                <thead className="bg-[#E8F1E9] text-[#0E382E] font-extrabold">
                  <tr>
                    <th className="p-4">Order ID</th>
                    <th className="p-4">Customer</th>
                    <th className="p-4">Total</th>
                    <th className="p-4">Payment</th>
                    <th className="p-4">Current Status</th>
                    <th className="p-4">Tracking AWB</th>
                    <th className="p-4 text-right">Update Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#74B487]/20 text-[#1F684B]">
                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-[#F6F5F0]">
                      <td className="p-4 font-mono font-bold text-[#0E382E]">{order.id}</td>
                      <td className="p-4">
                        <p className="font-extrabold text-[#0E382E]">{order.customer}</p>
                        <p className="text-[10px] text-[#74B487]">{order.email} • {order.phone}</p>
                      </td>
                      <td className="p-4 font-extrabold text-[#0E382E]">₹{order.total}</td>
                      <td className="p-4 font-bold text-[#25D366]">{order.payment}</td>
                      <td className="p-4 font-extrabold text-[#E67E22]">{order.status}</td>
                      <td className="p-4 font-mono text-[11px] text-[#0E382E]">{order.awb}</td>
                      <td className="p-4 text-right">
                        <select
                          value={order.status}
                          onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value)}
                          className="bg-[#F6F5F0] border border-[#74B487]/40 rounded-lg p-1.5 text-[11px] font-extrabold text-[#0E382E] outline-none"
                        >
                          <option value="Order Received">Order Received</option>
                          <option value="Packed">Packed</option>
                          <option value="Handed to Courier">Handed to Courier</option>
                          <option value="Out for Delivery">Out for Delivery</option>
                          <option value="Delivered">Delivered</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 4: Distributor Leads */}
        {activeTab === "distributors" && (
          <div className="bg-white p-8 rounded-3xl border border-[#74B487]/40 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-extrabold text-[#0E382E]">B2B Distributor & Wholesale Leads</h3>
              <p className="text-xs text-[#1F684B]">Submitted dealership and stockist applications from website.</p>
            </div>

            <div className="border border-[#74B487]/30 rounded-2xl overflow-hidden text-xs">
              <table className="w-full text-left">
                <thead className="bg-[#E8F1E9] text-[#0E382E] font-extrabold">
                  <tr>
                    <th className="p-4">Contact & Company</th>
                    <th className="p-4">Contact Info</th>
                    <th className="p-4">Target Location</th>
                    <th className="p-4">Channel</th>
                    <th className="p-4">Capacity</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#74B487]/20 text-[#1F684B]">
                  {distributorLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-[#F6F5F0]">
                      <td className="p-4">
                        <p className="font-extrabold text-[#0E382E]">{lead.name}</p>
                        <p className="text-[11px] font-bold text-[#E67E22]">{lead.company}</p>
                      </td>
                      <td className="p-4">
                        <p>{lead.email}</p>
                        <p className="font-bold text-[#0E382E]">{lead.phone}</p>
                      </td>
                      <td className="p-4 font-bold text-[#0E382E]">{lead.location}</td>
                      <td className="p-4 font-semibold">{lead.channel}</td>
                      <td className="p-4 font-extrabold text-[#0E382E]">{lead.investment}</td>
                      <td className="p-4">
                        <span className="bg-[#E67E22] text-white px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase">
                          {lead.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
