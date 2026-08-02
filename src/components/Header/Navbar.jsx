import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  // প্রতিটি ক্যাটাগরির অ্যাক্টিভ এবং ইনঅ্যাক্টিভ ইউনিক কালার কনফিগারেশন
  const categoryTheme = {
    home: {
      active: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/40 scale-105 font-bold border-blue-400/50',
      inactive: 'bg-blue-950/40 text-blue-300 border border-blue-500/30 hover:bg-blue-900/60 hover:text-white hover:border-blue-400 hover:scale-105 font-medium'
    },
    products: {
      active: 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/40 scale-105 font-bold border-emerald-400/50',
      inactive: 'bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-900/60 hover:text-white hover:border-emerald-400 hover:scale-105 font-medium'
    },
    inventory: {
      active: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/40 scale-105 font-bold border-purple-400/50',
      inactive: 'bg-purple-950/40 text-purple-300 border border-purple-500/30 hover:bg-purple-900/60 hover:text-white hover:border-purple-400 hover:scale-105 font-medium'
    },
    cash: {
      active: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/40 scale-105 font-bold border-amber-400/50',
      inactive: 'bg-amber-950/40 text-amber-300 border border-amber-500/30 hover:bg-amber-900/60 hover:text-white hover:border-amber-400 hover:scale-105 font-medium'
    }
  };

  const baseStyle = 'btn btn-sm rounded-full transition-all duration-300 gap-2 active:scale-95';

  return (
    <nav className="w-full flex justify-center py-2 px-4">
      <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-full px-3 py-2 shadow-2xl flex items-center justify-center gap-2 sm:gap-3 flex-wrap max-w-fit">
        
        {/* Home Link */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? categoryTheme.home.active : categoryTheme.home.inactive}`
          }
        >
          <span className="text-base">🏠</span>
          <span>হোম (Home)</span>
        </NavLink>

        {/* Products Link */}
        <NavLink
          to="/products"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? categoryTheme.products.active : categoryTheme.products.inactive}`
          }
        >
          <span className="text-base">🛍️</span>
          <span>পণ্যসমূহ (Products)</span>
        </NavLink>

        {/* Inventory Link */}
        <NavLink
          to="/inventory"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? categoryTheme.inventory.active : categoryTheme.inventory.inactive}`
          }
        >
          <span className="text-base">📦</span>
          <span>ইনভেন্টরি (Inventory)</span>
        </NavLink>

        {/* Cash Counter Link */}
        <NavLink
          to="/cash"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? categoryTheme.cash.active : categoryTheme.cash.inactive}`
          }
        >
          <span className="text-base">💵</span>
          <span>ক্যাশ হিসাব (Cash)</span>
        </NavLink>

      </div>
    </nav>
  );
}

export default Navbar;