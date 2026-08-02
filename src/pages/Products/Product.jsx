import React, { useState } from 'react';

function Product({ product, handleCheckout }) {
  const [sellQty, setSellQty] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);

  // Quantity Handlers
  const handleIncrease = () => {
    if (sellQty < product.stock) {
      setSellQty((prev) => Number(prev) + 1);
    }
  };

  const handleDecrease = () => {
    if (sellQty > 1) {
      setSellQty((prev) => Number(prev) - 1);
    }
  };

  const onCheckoutClick = () => {
    handleCheckout(product.id, sellQty);
    setSellQty(1);
  };

  // Price calculations
  const unitPrice = Number(product.price) || 0;
  const totalPrice = unitPrice * sellQty;

  return (
    <div className="group relative w-full bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 rounded-3xl p-5 shadow-2xl backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/10 group-hover:bg-indigo-500/20 rounded-full blur-2xl transition-all duration-300 pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/10 group-hover:bg-cyan-500/20 rounded-full blur-2xl transition-all duration-300 pointer-events-none" />

      {/* Top Details Content */}
      <div className="relative z-10 space-y-4">
        
        {/* Product Image */}
        {product.image && (
          <div className="w-full h-40 overflow-hidden rounded-2xl bg-slate-950/60 border border-slate-800/50">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* Category & Stock Badges */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-400 border border-slate-700/50 max-w-[130px] truncate">
            {product.category || 'General'}
          </span>

          {product.stock > 5 ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {product.stock} in stock
            </span>
          ) : product.stock > 0 ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              Low: {product.stock}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-rose-500/10 border border-rose-500/20 text-rose-400 shrink-0">
              Out of stock
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-bold text-base sm:text-lg text-slate-100 group-hover:text-indigo-300 transition-colors line-clamp-1">
          {product.name}
        </h3>

        {/* Description / Article */}
        {product.description && (
          <div className="text-xs sm:text-sm text-slate-400 space-y-1">
            <p className={isExpanded ? "break-words leading-relaxed" : "line-clamp-2 leading-relaxed"}>
              {product.description}
            </p>
            {product.description.length > 70 && (
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors focus:outline-none"
              >
                {isExpanded ? "Show Less ▲" : "Read More ▼"}
              </button>
            )}
          </div>
        )}

        {/* Price Box (Full display without dots or truncation) */}
        <div className="flex items-center justify-between gap-2 bg-slate-950/60 border border-slate-800 rounded-2xl p-3">
          <div className="flex flex-col">
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
              Unit Price
            </span>
            <span className="text-sm font-medium text-slate-300">
              ${unitPrice.toFixed(2)}
            </span>
          </div>

          <div className="flex flex-col text-right">
            <span className="text-[10px] font-semibold text-indigo-400 uppercase tracking-wider">
              Total ({sellQty}x)
            </span>
            <span className="text-base sm:text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-pink-400 whitespace-nowrap">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        </div>

      </div>

      {/* Action Controls Section */}
      <div className="relative z-10 mt-5 pt-4 border-t border-slate-800/80">
        {product.stock > 0 ? (
          <div className="grid grid-cols-12 gap-2 items-center">
            
            {/* Quantity Controls (5 Cols) */}
            <div className="col-span-5 flex items-center justify-between bg-slate-950/80 border border-slate-800 rounded-xl p-1">
              <button
                type="button"
                onClick={handleDecrease}
                disabled={sellQty <= 1}
                className="w-7 h-8 flex items-center justify-center text-slate-400 hover:text-white disabled:opacity-25 font-bold text-sm rounded-lg hover:bg-slate-800 transition-all"
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
                className="w-full text-center bg-transparent text-slate-100 font-bold text-sm focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />

              <button
                type="button"
                onClick={handleIncrease}
                disabled={sellQty >= product.stock}
                className="w-7 h-8 flex items-center justify-center text-slate-400 hover:text-white disabled:opacity-25 font-bold text-sm rounded-lg hover:bg-slate-800 transition-all"
              >
                +
              </button>
            </div>

            {/* Sell Button (7 Cols) */}
            <button
              type="button"
              onClick={onCheckoutClick}
              className="col-span-7 h-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white font-semibold text-sm rounded-xl shadow-lg shadow-indigo-600/20 active:scale-95 transition-all duration-200 flex items-center justify-center gap-1.5"
            >
              <span>🛒</span>
              <span>Sell</span>
            </button>

          </div>
        ) : (
          <div className="w-full text-center py-2.5 bg-rose-500/10 border border-rose-500/20 rounded-xl">
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