import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-base-300 text-base-content mt-12 rounded-t-2xl shadow-inner">
      {/* Top Grid Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand Information */}
        <div className="space-y-3">
          <h2 className="text-2xl font-black text-primary tracking-wide">
            ⭐ স্টার স্টোর (Star Store)
          </h2>
          <p className="text-sm opacity-80 leading-relaxed max-w-sm mx-auto md:mx-0">
            আপনার নিত্যপ্রয়োজনীয় সকল সেরা মানের পণ্য সঠিক দামে পাওয়ার বিশ্বস্ত প্রতিষ্ঠান।
          </p>
        </div>

        {/* Navigation Quick Links */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-secondary">নেভিগেশন (Quick Links)</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/" className="hover:text-primary transition-colors">
                হোম (Home)
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="hover:text-primary transition-colors">
                পণ্যসমূহ (Products)
              </NavLink>
            </li>
            <li>
              <NavLink to="/inventory" className="hover:text-primary transition-colors">
                ইনভেন্টরি (Inventory)
              </NavLink>
            </li>
            <li>
              <NavLink to="/cash" className="hover:text-primary transition-colors">
                ক্যাশ হিসাব (Cash)
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-secondary">যোগাযোগ (Contact)</h3>
          <div className="text-sm space-y-2 opacity-80">
            <p>📍 ঠিকানা: বাজার রোড, ঢাকা, বাংলাদেশ</p>
            <p>📞 ফোন: +880 1700-000000</p>
            <p>✉️ ইমেইল: info@starstore.com</p>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-base-200 py-4 text-center text-xs opacity-75">
        <p>© {new Date().getFullYear()} স্টার স্টোর | সর্বস্বত্ব সংরক্ষিত।</p>
      </div>
    </footer>
  );
}

export default Footer;