import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function Inventory() {
  const { products, setProducts } = useOutletContext();

  const [newName, setNewName] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newStock, setNewStock] = useState('');

  // Add new product
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newName || !newPrice || !newStock) {
      alert('Please fill out all fields!');
      return;
    }

    const newItem = {
      id: Date.now(),
      name: newName,
      price: parseFloat(newPrice),
      stock: parseInt(newStock)
    };

    setProducts([...products, newItem]);
    setNewName('');
    setNewPrice('');
    setNewStock('');
  };

  // Delete product
  const handleDeleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-xl text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            📦 Stock & Catalog Management
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">Store Inventory</h2>
          <p className="text-xs text-slate-400">Add new products, adjust pricing, and manage live stock levels.</p>
        </div>

        <div className="relative z-10 bg-slate-800/80 border border-slate-700/60 px-5 py-3 rounded-2xl backdrop-blur-md text-center">
          <span className="text-xs text-slate-400 font-medium block">Total Products</span>
          <span className="text-2xl font-bold text-indigo-400">{products.length}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Add Product Form */}
        <div className="lg:col-span-5 bg-slate-800/50 border border-slate-700/60 backdrop-blur-xl rounded-3xl p-6 shadow-xl text-white space-y-6">
          <h3 className="text-lg font-bold text-slate-200 border-b border-slate-700/60 pb-3 flex items-center gap-2">
            <span>➕</span> Add New Product
          </h3>

          <form onSubmit={handleAddProduct} className="space-y-4">
            <div className="form-control">
              <label className="label text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Product Name
              </label>
              <input
                type="text"
                placeholder="e.g. Wireless Mouse"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="input input-bordered w-full bg-slate-900/80 border-slate-700 text-white focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="form-control">
                <label className="label text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Price ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  className="input input-bordered w-full bg-slate-900/80 border-slate-700 text-white focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="form-control">
                <label className="label text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Initial Stock
                </label>
                <input
                  type="number"
                  placeholder="0"
                  value={newStock}
                  onChange={(e) => setNewStock(e.target.value)}
                  className="input input-bordered w-full bg-slate-900/80 border-slate-700 text-white focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full bg-indigo-600 hover:bg-indigo-500 border-none text-white shadow-lg shadow-indigo-600/30 hover:scale-[1.02] active:scale-95 transition-all duration-200 mt-2"
            >
              Add Product to Inventory
            </button>
          </form>
        </div>

        {/* Right Column: Inventory Products List / Table */}
        <div className="lg:col-span-7 bg-slate-800/50 border border-slate-700/60 backdrop-blur-xl rounded-3xl p-6 shadow-xl text-white space-y-4">
          <div className="flex items-center justify-between border-b border-slate-700/60 pb-3">
            <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2">
              <span>📋</span> Product List
            </h3>
            <span className="text-xs text-slate-400">Live Inventory ({products.length})</span>
          </div>

          {products.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <p className="text-4xl mb-2">📦</p>
              <p className="text-sm font-medium">No products in inventory.</p>
              <p className="text-xs">Add your first product using the form.</p>
            </div>
          ) : (
            <div className="overflow-x-auto max-h-[420px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-700">
              <table className="table w-full text-slate-200">
                <thead>
                  <tr className="border-b border-slate-700/80 text-slate-400 text-xs uppercase tracking-wider">
                    <th className="bg-transparent">Product</th>
                    <th className="bg-transparent">Price</th>
                    <th className="bg-transparent">Stock</th>
                    <th className="bg-transparent text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/40">
                  {products.map((prod) => (
                    <tr key={prod.id} className="hover:bg-slate-700/30 transition-colors">
                      <td className="font-semibold text-slate-100">{prod.name}</td>
                      <td className="text-indigo-300 font-medium">${prod.price.toFixed(2)}</td>
                      <td>
                        {prod.stock <= 5 ? (
                          <span className="badge badge-error badge-sm gap-1 font-semibold text-[11px]">
                            Low: {prod.stock}
                          </span>
                        ) : (
                          <span className="badge badge-success badge-sm gap-1 font-semibold text-[11px] bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                            {prod.stock} in stock
                          </span>
                        )}
                      </td>
                      <td className="text-right">
                        <button
                          onClick={() => handleDeleteProduct(prod.id)}
                          className="btn btn-ghost btn-xs text-red-400 hover:text-red-300 hover:bg-red-500/10 border border-red-500/20 hover:border-red-500/40 transition-all"
                          title="Delete Product"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Inventory;