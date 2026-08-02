import React from 'react';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl mb-8 border border-slate-800">
      
      {/* Background Decorative Gradients & Mesh */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-gradient-to-tr from-pink-500/20 to-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293712_1px,transparent_1px),linear-gradient(to_bottom,#1f293712_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 px-6 py-10 sm:px-12 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Live Indicator Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 backdrop-blur-md shadow-inner text-xs font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Smart Store POS System v2.0
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Empower Your Store With{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Next-Gen Retail
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              Effortlessly track inventory levels, process customer transactions faster, and monitor your daily cash flow with real-time sync.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
              <Link 
                to="/inventory" 
                className="btn btn-primary bg-indigo-600 hover:bg-indigo-500 border-none text-white shadow-lg shadow-indigo-600/30 hover:scale-105 active:scale-95 transition-all duration-200 px-6"
              >
                📦 Manage Inventory
              </Link>
              <Link 
                to="/cash" 
                className="btn border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white backdrop-blur-md hover:border-slate-600 hover:scale-105 active:scale-95 transition-all duration-200 px-6"
              >
                💳 Cash Counter
              </Link>
            </div>
          </div>

          {/* Right Column: Dashboard Quick Stats Widget */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            
            {/* Stat Card 1 */}
            <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-md shadow-xl hover:border-indigo-500/40 transition-colors">
              <div className="text-xs text-slate-400 font-medium mb-1">Store Status</div>
              <div className="text-lg font-bold text-white flex items-center gap-2">
                Active <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-normal">Online</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-2">All systems operational</p>
            </div>

            {/* Stat Card 2 */}
            <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-md shadow-xl hover:border-purple-500/40 transition-colors">
              <div className="text-xs text-slate-400 font-medium mb-1">Local Storage</div>
              <div className="text-lg font-bold text-purple-400">Auto Synced</div>
              <p className="text-[11px] text-slate-500 mt-2">Data saved safely</p>
            </div>

            {/* Wide Stat Card 3 */}
            <div className="col-span-2 p-4 rounded-2xl bg-gradient-to-r from-indigo-950/40 to-slate-800/40 border border-indigo-800/30 backdrop-blur-md shadow-xl flex items-center justify-between">
              <div>
                <div className="text-xs text-indigo-300 font-medium">Quick Tip</div>
                <div className="text-xs text-slate-300 mt-0.5">Keep track of daily income seamlessly.</div>
              </div>
              <span className="text-2xl">⚡</span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Banner;