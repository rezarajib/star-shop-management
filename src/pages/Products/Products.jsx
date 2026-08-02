import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Product from './Product';

function Products() {
  const { products, setProducts, setDailyIncome } = useOutletContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' | 'error'

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCheckout = (productId, qty) => {
    const product = products.find((p) => p.id === productId);
    const requestedQty = parseInt(qty, 10);

    if (requestedQty <= 0 || isNaN(requestedQty)) {
      setMessage('Please enter a valid quantity.');
      setMessageType('error');
      return;
    }

    // Situation A: Insufficient Stock
    if (requestedQty > product.stock) {
      setMessage(`Stock limit exceeded! Requested: ${requestedQty}, Available: ${product.stock}`);
      setMessageType('error');
    } 
    // Situation B: Successful Sale
    else {
      const totalPrice = requestedQty * product.price;

      // 1. Add total price to daily income
      setDailyIncome((prev) => prev + totalPrice);

      // 2. Reduce stock count
      const updatedProducts = products.map((p) =>
        p.id === productId ? { ...p, stock: p.stock - requestedQty } : p
      );
      setProducts(updatedProducts);

      setMessage(`Sale completed successfully! Total Bill: $${totalPrice.toFixed(2)}`);
      setMessageType('success');
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header & Search Bar Card */}
      <div className="relative overflow-hidden bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 backdrop-blur-md">
        
        {/* Decorative Top Accent Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Information */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-2">
              <span>🛍️</span> Point of Sale (POS)
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100 tracking-tight">
              Customer Checkout & Search
            </h2>
          </div>

          <div className="text-slate-400 text-xs sm:text-sm font-medium sm:text-right bg-slate-950/50 px-3.5 py-2 rounded-xl border border-slate-800/80 self-start sm:self-auto">
            <span>Showing: </span>
            <span className="text-indigo-400 font-black text-sm sm:text-base">{filteredProducts.length}</span>
            <span className="text-slate-500"> / {products.length} Products</span>
          </div>
        </div>

        {/* Search Input Box */}
        <div className="relative z-10">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-base pointer-events-none">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search products by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-20 bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none rounded-2xl h-12 text-sm transition-all duration-200"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-semibold bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-xl border border-slate-700 transition-all"
            >
              Clear
            </button>
          )}
        </div>

        {/* Alert Notification Message */}
        {message && (
          <div
            className={`relative z-10 p-4 rounded-2xl border flex items-center justify-between transition-all duration-300 shadow-lg ${
              messageType === 'error'
                ? 'bg-rose-950/60 border-rose-500/40 text-rose-200'
                : 'bg-emerald-950/60 border-emerald-500/40 text-emerald-200'
            }`}
          >
            <div className="flex items-center gap-3 text-sm font-semibold">
              <span className="text-lg">{messageType === 'error' ? '⚠️' : '✅'}</span>
              <span>{message}</span>
            </div>
            <button
              type="button"
              onClick={() => setMessage('')}
              className="text-slate-400 hover:text-white font-bold text-sm px-2 py-1 rounded-lg hover:bg-slate-800/80 transition-all"
            >
              ✕
            </button>
          </div>
        )}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product} handleCheckout={handleCheckout} />
          ))}
        </div>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center text-slate-400 space-y-3 shadow-xl">
          <div className="text-5xl mb-2 opacity-80">🔎</div>
          <h3 className="text-xl font-bold text-slate-200">No Matching Products Found</h3>
          <p className="text-xs sm:text-sm max-w-sm mx-auto text-slate-400">
            We couldn't find any product matching "<span className="text-indigo-400 font-semibold">{searchTerm}</span>". Try searching for another item or check your spelling.
          </p>
        </div>
      )}

    </div>
  );
}

export default Products;