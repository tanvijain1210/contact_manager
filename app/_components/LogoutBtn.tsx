'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; // Import the router
import { deleteSession } from '../_lib/session';

const LogoutBtn = () => {
  const router = useRouter();

  const handleLogout = async () => {
    // 1. Clear the server-side session cookie
    await deleteSession();
    
    // 2. Use the client-side router to redirect
    router.push("/login");
    
    // Alternatively, use refresh to update the Navbar state immediately
    router.refresh();
  };

  return (
    <button 
      onClick={handleLogout}
      className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors"
    >
      Logout
    </button>
  );
};

export default LogoutBtn;