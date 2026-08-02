import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const getLinkStyle = ({ isActive }) =>
    `btn btn-ghost btn-sm text-base-content hover:bg-base-300 transition-colors ${
      isActive ? 'btn-active btn-neutral font-bold text-primary' : 'font-semibold'
    }`;

  return (
    <nav className="navbar bg-base-200 shadow-md rounded-box px-4 my-2 flex justify-center">
      <div className="flex gap-2 sm:gap-4 flex-wrap justify-center">
        <NavLink to="/" className={getLinkStyle}>
          হোম (Home)
        </NavLink>
        <NavLink to="/products" className={getLinkStyle}>
          পণ্যসমূহ (Products)
        </NavLink>
        <NavLink to="/inventory" className={getLinkStyle}>
          ইনভেন্টরি (Inventory)
        </NavLink>
        <NavLink to="/cash" className={getLinkStyle}>
          ক্যাশ হিসাব (Cash)
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;