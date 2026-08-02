import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 text-white relative overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-md w-full text-center relative z-10 bg-slate-800/50 border border-slate-700/60 p-8 sm:p-10 rounded-3xl backdrop-blur-xl shadow-2xl">
        
        {/* Error Status Code / Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-widest mb-4">
          ⚠️ {error?.status || 404} Error
        </div>

        {/* Big Error Title */}
        <h1 className="text-7xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 mb-2">
          {error?.status || 404}
        </h1>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-slate-100 mb-3">
          Page Not Found
        </h2>

        {/* Subtitle / Dynamic Error Message */}
        <p className="text-slate-400 text-sm mb-8 leading-relaxed">
          {error?.statusText || error?.message || "Oops! The page you are looking for doesn't exist or has been moved."}
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link
            to="/"
            className="w-full sm:w-auto btn btn-primary bg-indigo-600 hover:bg-indigo-500 border-none text-white shadow-lg shadow-indigo-600/30 hover:scale-105 active:scale-95 transition-all duration-200 px-6"
          >
            🏠 Back to Home
          </Link>
          
          <button
            onClick={() => window.location.reload()}
            className="w-full sm:w-auto btn border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white backdrop-blur-md hover:border-slate-600 hover:scale-105 active:scale-95 transition-all duration-200 px-6"
          >
            🔄 Reload Page
          </button>
        </div>

      </div>
    </div>
  );
}

export default ErrorPage;