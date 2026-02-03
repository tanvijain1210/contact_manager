import LoginForm from "@/app/_components/LoginForm";
import { Metadata } from "next";
import Link from "next/link"; // Added the missing import

export const metadata: Metadata = {
  title: "Login | Contact Manager",
  description: "Sign in to manage your contacts.",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Welcome Back</h1>
          <p className="text-slate-500 mt-2 text-sm">Log in to your account to continue</p>
        </div>
        
        {/* The Client Component */}
        <LoginForm />
        
        {/* Corrected Link Section */}
        <p className="text-center text-slate-600 text-sm mt-6">
          Doesn&apos;t have an account?{' '}
          <Link 
            href="/signup" 
            className="font-bold text-blue-600 hover:text-blue-700 hover:underline transition-colors"
          >
            Register here
          </Link>
        </p>
        
      </div>
    </div>
  );
}