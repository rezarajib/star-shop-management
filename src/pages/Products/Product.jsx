import React, { useState } from 'react';

function Product({ product, handleCheckout }) {
  const [sellQty, setSellQty] = useState(1);

  const onCheckoutClick = () => {
    handleCheckout(product.id, sellQty);
    setSellQty(1); // Reset quantity back to 1 after checkout
  };

  return (
    <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 shadow-lg backdrop-blur-md flex flex-col justify-between hover:border-indigo-500/50 hover:shadow-indigo-500/10 transition-all duration-200">
      
      {/* Product Details Header */}
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-lg text-slate-100 line-clamp-1">{product.name}</h3>
          
          {/* Stock Badge */}
          {product.stock > 0 ? (
            <span className="badge badge-success badge-sm bg-emerald-500/20 text-emerald-400 border-emerald-500/30 font-semibold">
              {product.stock} left
            </span>
          ) : (
            <span className="badge badge-error badge-sm bg-red-500/20 text-red-400 border-red-500/30 font-semibold">
              Out of Stock
            </span>
          )}
        </div>

        {/* Price Tag */}
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-extrabold text-indigo-400">${product.price.toFixed(2)}</span>
          <span className="text-xs text-slate-400 font-medium">/ unit</span>
        </div>
      </div>

      {/* Action Controls */}
      <div className="mt-5 pt-4 border-t border-slate-700/50">
        {product.stock > 0 ? (
          <div className="flex items-center gap-2">
            {/* Quantity Input */}
            <input
              type="number"
              min="1"
              max={product.stock}
              value={sellQty}
              onChange={(e) => setSellQty(e.target.value)}
              className="input input-bordered w-20 bg-slate-900/80 border-slate-700 text-white text-center focus:border-indigo-500 focus:outline-none h-10 text-sm font-semibold rounded-xl"
            />

            {/* Sell / Checkout Button */}
            <button
              onClick={onCheckoutClick}
              className="btn btn-primary flex-1 bg-amber-600 hover:bg-amber-500 border-none text-white shadow-md shadow-amber-600/20 h-10 min-h-0 text-sm font-semibold rounded-xl active:scale-95 transition-all"
            >
              🛒 Sell Item
            </button>
          </div>
        ) : (
          <div className="w-full text-center py-2 bg-red-500/10 border border-red-500/20 rounded-xl">
            <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
              ⚠️ Out of Stock
            </span>
          </div>
        )}
      </div>

    </div>
  );
}

export default Product;