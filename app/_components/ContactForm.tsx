'use client'
import Link from "next/link";

export default function ContactForm({ initialData, action, title }: any) {
  return (
    <form action={action} className="max-w-md mx-auto p-8 bg-white rounded-3xl shadow-lg space-y-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <input name="name" defaultValue={initialData?.name} placeholder="Name" required className="w-full p-3 border rounded-xl" />
      <input name="email" defaultValue={initialData?.email} placeholder="Email" required className="w-full p-3 border rounded-xl" />
      <div className="flex gap-2">
        <button className="flex-1 bg-blue-600 text-white p-3 rounded-xl font-bold">Save</button>
        <Link href="/contacts" className="flex-1 bg-slate-100 p-3 rounded-xl text-center">Cancel</Link>
      </div>
    </form>
  );
}