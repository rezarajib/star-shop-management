import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function CashCounter() {
  const { dailyIncome, setDailyIncome } = useOutletContext();
  const [customAmount, setCustomAmount] = useState('');

  // ম্যানুয়ালি টাকা যোগ করার জন্য
  const handleAddCash = (e) => {
    e.preventDefault();
    const amount = parseFloat(customAmount);
    if (!isNaN(amount) && amount > 0) {
      setDailyIncome((prev) => prev + amount);
      setCustomAmount('');
    }
  };

  // ম্যানুয়ালি টাকা বিয়োগ করার জন্য
  const handleDeductCash = () => {
    const amount = parseFloat(customAmount);
    if (!isNaN(amount) && amount > 0) {
      if (dailyIncome - amount < 0) {
        alert("Cash register balance cannot be negative!");
        return;
      }
      setDailyIncome((prev) => prev - amount);
      setCustomAmount('');
    }
  };

  // ক্যাশ রিসেট করার জন্য
  const handleResetCash = () => {
    if (window.confirm('Are you sure you want to reset today\'s cash register to $0?')) {
      setDailyIncome(0);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      
      {/* Header Card / Main Balance Widget */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 shadow-2xl text-center text-white">
        
        {/* Decorative Blur Backgrounds */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            💵 Daily Cash Register
          </div>

          <p className="text-slate-400 text-sm font-medium">Total Cash Available</p>
          
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 my-2">
            ${dailyIncome.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h1>

          <p className="text-xs text-slate-500">Live balance synchronized with system transactions</p>
        </div>
      </div>

      {/* Action Controls Card */}
      <div className="bg-slate-800/50 border border-slate-700/60 backdrop-blur-xl rounded-3xl p-6 shadow-xl text-white space-y-6">
        <h3 className="text-lg font-bold text-slate-200 border-b border-slate-700/60 pb-3 flex items-center gap-2">
          <span>⚙️</span> Quick Cash Adjustments
        </h3>

        {/* Form to Add/Deduct Cash */}
        <form onSubmit={handleAddCash} className="space-y-4">
          <div className="form-control">
            <label className="label text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Enter Custom Amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
              <input
                type="number"
                step="0.01"
                placeholder="0.00"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="input input-bordered w-full pl-8 bg-slate-900/80 border-slate-700 text-white focus:border-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="submit"
              disabled={!customAmount}
              className="btn btn-emerald bg-emerald-600 hover:bg-emerald-500 border-none text-white shadow-lg shadow-emerald-600/20 disabled:bg-slate-700 disabled:text-slate-500 transition-all"
            >
              ➕ Add Cash
            </button>

            <button
              type="button"
              onClick={handleDeductCash}
              disabled={!customAmount}
              className="btn btn-warning bg-amber-600 hover:bg-amber-500 border-none text-white shadow-lg shadow-amber-600/20 disabled:bg-slate-700 disabled:text-slate-500 transition-all"
            >
              ➖ Deduct Cash
            </button>
          </div>
        </form>

        <div className="divider border-slate-700/50"></div>

        {/* Reset Cash Counter */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <h4 className="text-sm font-semibold text-slate-300">Reset Register</h4>
            <p className="text-xs text-slate-500">Clear today's income back to zero</p>
          </div>

          <button
            onClick={handleResetCash}
            className="btn btn-error btn-outline border-red-500/40 text-red-400 hover:bg-red-500 hover:text-white hover:border-red-500 text-xs px-4"
          >
            🔄 Reset Register
          </button>
        </div>

      </div>

    </div>
  );
}

export default CashCounter;