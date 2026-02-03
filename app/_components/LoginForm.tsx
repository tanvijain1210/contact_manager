'use client';

import React, { useState } from 'react';
import { loginAction } from '../actions/auth'; 

const LoginForm = () => {
  const [error, setError] = useState<string | null>(null);

  // This wrapper allows us to handle the response from the Server Action
  async function clientAction(formData: FormData) {
    const result = await loginAction(formData);
    if (result?.error) {
      setError(result.error);
    }
  }

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
      {/* Binding the Server Action to the form */}
      <form action={clientAction} className="space-y-5">
        
        {error && (
          <div className="p-3 text-sm font-medium text-red-600 bg-red-50 rounded-xl border border-red-100 animate-pulse">
            {error}
          </div>
        )}

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5 ml-1">
            Email Address
          </label>
          <input
            type="email"
            name="email" // Key for formData.get('email')
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5 ml-1">
            Password
          </label>
          <input
            type="password"
            name="password" // Key for formData.get('password')
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold hover:bg-blue-700 transition-all active:scale-[0.98] shadow-lg shadow-blue-100"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;