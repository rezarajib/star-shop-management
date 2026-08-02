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
    const requestedQty = parseInt(qty);

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
      <div className="bg-slate-800/50 border border-slate-700/60 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-xl text-white space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-700/60 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
              🛍️ Point of Sale (POS)
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">Customer Checkout & Search</h2>
          </div>

          <div className="text-slate-400 text-xs sm:text-right">
            <span>Showing: </span>
            <span className="text-indigo-400 font-bold">{filteredProducts.length}</span> of {products.length} Products
          </div>
        </div>

        {/* Search Input Box */}
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">🔍</span>
          <input
            type="text"
            placeholder="Search products by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered w-full pl-11 bg-slate-900/80 border-slate-700 text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none rounded-2xl h-12 text-sm"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs bg-slate-700 px-2 py-1 rounded-full"
            >
              Clear
            </button>
          )}
        </div>

        {/* Alert Notification Message */}
        {message && (
          <div
            className={`alert shadow-lg border rounded-2xl flex items-center justify-between transition-all ${
              messageType === 'error'
                ? 'bg-red-500/10 border-red-500/30 text-red-400'
                : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
            }`}
          >
            <div className="flex items-center gap-2 text-sm font-medium">
              <span>{messageType === 'error' ? '⚠️' : '✅'}</span>
              <span>{message}</span>
            </div>
            <button
              onClick={() => setMessage('')}
              className="btn btn-ghost btn-xs text-slate-400 hover:text-white"
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
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-3xl p-12 text-center text-slate-400 space-y-3">
          <div className="text-5xl">🔎</div>
          <h3 className="text-lg font-bold text-slate-300">No Matching Products Found</h3>
          <p className="text-xs max-w-sm mx-auto text-slate-500">
            We couldn't find any product matching "<span className="text-indigo-400">{searchTerm}</span>". Try searching for another item or check your spelling.
          </p>
        </div>
      )}

    </div>
  );
}

export default Products;