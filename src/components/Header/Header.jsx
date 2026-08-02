import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-b-2xl shadow-xl border-b border-slate-700/50">
      {/* Top Banner Content */}
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-4 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-primary/20">
          ✨ স্মার্ট শপ ম্যানেজমেন্ট সিস্টেম
        </div>
        
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2 flex items-center justify-center gap-2">
          <span>⭐</span>
          <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200 bg-clip-text text-transparent">
            স্টার স্টোর
          </span>
          <span className="text-xl md:text-2xl font-normal text-slate-400">(Star Store)</span>
        </h1>

        <p className="text-sm md:text-base text-slate-300 font-medium max-w-md mx-auto">
          স্মার্ট ইনভেন্টরি, দ্রুত সেলস এবং নির্ভুল ক্যাশ হিসাব
        </p>
      </div>

      {/* Navigation Section */}
      <div className="border-t border-slate-800 bg-slate-900/60 backdrop-blur-md px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-center">
          <Navbar />
        </div>
      </div>
    </header>
  );
}

export default Header;