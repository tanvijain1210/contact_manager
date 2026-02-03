'use client';

import { useState } from "react";
import { signupAction } from "@/app/actions/auth";

export default function SignupForm() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleFormAction(formData: FormData) {
    setLoading(true);
    setError(null);

    const result = await signupAction(formData);

    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
  }

  return (
     <main className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100">
      
      {/* Error */}
      {error && (
        <div className="mb-6 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-600 animate-shake">
          {error}
        </div>
      )}

      <form action={handleFormAction} className="space-y-5">

        {/* Name */}
        <input
          name="name"
          type="text"
          placeholder="Full name"
          required
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:outline-none transition"
        />

        {/* Email */}
        <input
          name="email"
          type="email"
          placeholder="Email address"
          required
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:outline-none transition"
        />

        {/* Password */}
        <input
          name="password"
          type="password"
          placeholder="Create password"
          required
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:outline-none transition"
        />

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="mt-2 w-full rounded-xl bg-slate-900 py-3 text-sm font-bold text-white transition hover:bg-slate-800 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Creating account..." : "Get started"}
        </button>
      </form>
    </div>
    </main>
  );
}
