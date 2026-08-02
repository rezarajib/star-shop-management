import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const getLinkStyle = ({ isActive }) =>
    `btn btn-sm rounded-full transition-all duration-300 gap-2 border-0 ${
      isActive
        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/20 font-bold scale-105'
        : 'btn-ghost text-slate-300 hover:text-white hover:bg-slate-800/80 font-medium'
    }`;

  return (
    <nav className="w-full flex justify-center py-1">
      <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-full px-3 py-1.5 shadow-lg flex items-center justify-center gap-1 sm:gap-2 flex-wrap max-w-fit">
        
        {/* Home Link */}
        <NavLink to="/" className={getLinkStyle}>
          <span>🏠</span>
          <span>হোম (Home)</span>
        </NavLink>

        {/* Products Link */}
        <NavLink to="/products" className={getLinkStyle}>
          <span>🛍️</span>
          <span>পণ্যসমূহ (Products)</span>
        </NavLink>

        {/* Inventory Link */}
        <NavLink to="/inventory" className={getLinkStyle}>
          <span>📦</span>
          <span>ইনভেন্টরি (Inventory)</span>
        </NavLink>

        {/* Cash Counter Link */}
        <NavLink to="/cash" className={getLinkStyle}>
          <span>💵</span>
          <span>ক্যাশ হিসাব (Cash)</span>
        </NavLink>

      </div>
    </nav>
  );
}

export default Navbar;