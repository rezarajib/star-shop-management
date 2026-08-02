import React, { useState } from 'react';

function Product({ product, handleCheckout }) {
  const [sellQty, setSellQty] = useState(1);

  // Quantity Increase
  const handleIncrease = () => {
    if (sellQty < product.stock) {
      setSellQty((prev) => Number(prev) + 1);
    }
  };

  // Quantity Decrease
  const handleDecrease = () => {
    if (sellQty > 1) {
      setSellQty((prev) => Number(prev) - 1);
    }
  };

  const onCheckoutClick = () => {
    handleCheckout(product.id, sellQty);
    setSellQty(1); // Checkout শেষে মান ১-এ রিসেট হবে
  };

  return (
    <div className="group relative bg-slate-900/80 border border-slate-800 hover:border-indigo-500/60 rounded-3xl p-5 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      
      {/* Top Colorful Ambient Blur Effect */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-500/10 group-hover:bg-indigo-500/20 rounded-full blur-2xl transition-all duration-300 pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-cyan-500/10 group-hover:bg-cyan-500/20 rounded-full blur-2xl transition-all duration-300 pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 space-y-4">
        
        {/* Header Title & Stock Badge */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-bold text-lg text-slate-100 group-hover:text-indigo-300 transition-colors line-clamp-1">
            {product.name}
          </h3>
          
          {/* Stock Badges */}
          {product.stock > 5 ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {product.stock} left
            </span>
          ) : product.stock > 0 ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              Low: {product.stock}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-rose-500/10 border border-rose-500/30 text-rose-400">
              Out of stock
            </span>
          )}
        </div>

        {/* Price Section */}
        <div className="flex items-baseline gap-1.5 bg-slate-800/40 border border-slate-800 rounded-2xl p-3">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Price:</span>
          <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-pink-400">
            ${product.price.toFixed(2)}
          </span>
        </div>

      </div>

      {/* Actions & Controls */}
      <div className="relative z-10 mt-5 pt-4 border-t border-slate-800/80">
        {product.stock > 0 ? (
          <div className="flex items-center gap-2">
            
            {/* Interactive Quantity Selector */}
            <div className="flex items-center bg-slate-950/80 border border-slate-800 rounded-xl p-1">
              <button
                type="button"
                onClick={handleDecrease}
                disabled={sellQty <= 1}
                className="w-7 h-8 flex items-center justify-center text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 font-bold text-sm rounded-lg hover:bg-slate-800 transition-all"
              >
                -
              </button>
              
              <input
                type="number"
                min="1"
                max={product.stock}
                value={sellQty}
                onChange={(e) => {
                  const val = Math.max(1, Math.min(product.stock, Number(e.target.value)));
                  setSellQty(val || 1);
                }}
                className="w-10 text-center bg-transparent text-slate-100 font-bold text-sm focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />

              <button
                type="button"
                onClick={handleIncrease}
                disabled={sellQty >= product.stock}
                className="w-7 h-8 flex items-center justify-center text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 font-bold text-sm rounded-lg hover:bg-slate-800 transition-all"
              >
                +
              </button>
            </div>

            {/* Vibrant Sell Button */}
            <button
              onClick={onCheckoutClick}
              className="flex-1 h-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white font-semibold text-sm rounded-xl shadow-lg shadow-indigo-600/25 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>🛒</span>
              <span>Sell</span>
            </button>

          </div>
        ) : (
          <div className="w-full text-center py-2.5 bg-rose-500/5 border border-rose-500/20 rounded-xl">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center justify-center gap-1.5">
              <span>⚠️</span> Out of Stock
            </span>
          </div>
        )}
      </div>

    </div>
  );
}

export default Product;