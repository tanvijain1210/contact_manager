import React from 'react';
import Link from 'next/link';
import LogoutBtn from './LogoutBtn';
import { getSession } from '../_lib/session';

// 1. Change to an async function to allow 'await'
const Navbar = async () => {
  // 2. Await the session data
  const session = await getSession();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link 
          href="/" 
          className="text-xl font-extrabold tracking-tight text-blue-600 hover:opacity-80 transition-opacity"
        >
          Contact<span className="text-slate-900">Manager</span>
        </Link>

        {/* Links Section */}
        <div className="flex items-center gap-6">
          {session ? (
            <>
              {/* Optional: Display user email */}
              <span className="text-xs text-slate-400 hidden md:block">
                {session.email}
              </span>
              <Link 
                href="/contacts" 
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                My Contacts
              </Link>
              <LogoutBtn />
            </>
          ) : (
            <>
              <Link 
                href="/login" 
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                Sign In
              </Link>
              <Link 
                href="/signup" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm active:scale-95"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;