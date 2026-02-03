import Image from "next/image";
import Link from "next/link";
import { getSession } from "./_lib/session";

export default async function Home() {
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      {/* Decorative Background Element */}
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-20 blur-[80px]"></div>
      </div>

      <main className="max-w-4xl space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 shadow-sm">
          ✨ Secure & Easy Management
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
          Your Contacts, <span className="text-blue-600">Organized.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          The simplest way to manage your professional and personal connections. 
          Stop losing phone numbers and start building your network.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
         
        </div>

        {/* Feature Icons (Optional) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
          <div className="p-6">
            <div className="text-2xl mb-2">🔒</div>
            <h3 className="font-bold text-slate-900">Private</h3>
            <p className="text-sm text-slate-500">Your data is stored securely in your private vault.</p>
          </div>
          <div className="p-6">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-bold text-slate-900">Fast</h3>
            <p className="text-sm text-slate-500">Blazing fast search and instant contact updates.</p>
          </div>
          <div className="p-6">
            <div className="text-2xl mb-2">📱</div>
            <h3 className="font-bold text-slate-900">Responsive</h3>
            <p className="text-sm text-slate-500">Access your contacts from any device, anywhere.</p>
          </div>
        </div>
      </main>
    </div>
  );
}