import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";

export const metadata: Metadata = {
  title: "Contact Manager",
  description: "A secure, modern Contact Management Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#F8FAFC] text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        
        {/* The Navbar stays fixed and independent of the main container's padding */}
        <Navbar />

        {/* We use a wrapper to handle the global spacing. 
            The 'min-h-screen' ensures the background covers the whole page.
        */}
        <div className="relative min-h-screen flex flex-col">
          
          {/* Subtle Background Glow (Optional modern touch) */}
          <div className="absolute top-0 left-1/2 -z-10 h-[1000px] w-full -translate-x-1/2 [background:radial-gradient(100%_50%_at_50%_0%,rgba(37,99,235,0.05)_0,rgba(255,255,255,0)_100%)]"></div>

          <main className="flex-grow">
            {children}
          </main>

          {/* Minimalist Footer */}
          <footer className="py-8 border-t border-slate-100 text-center text-slate-400 text-sm">
            © {new Date().getFullYear()} ContactManager. All rights reserved.
          </footer>
        </div>

      </body>
    </html>
  );
}