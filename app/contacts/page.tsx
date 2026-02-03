import { getContacts, deleteContact } from "../api/contact";
import Link from "next/link";

export default async function ContactsPage() {
  const contacts = await getContacts();

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-28 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">
              My Directory
            </h1>
            <p className="text-slate-500 font-medium mt-1">
              Manage and organize your <span className="text-blue-600">{contacts.length}</span> connections.
            </p>
          </div>
          
          <Link 
            href="/contacts/new" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-2xl font-bold transition-all shadow-lg shadow-blue-200 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Add Contact
          </Link>
        </div>

        {/* Contacts Grid */}
        {contacts.length === 0 ? (
          <div className="bg-white rounded-[2rem] border-2 border-dashed border-slate-200 p-20 text-center">
            <p className="text-slate-400 font-semibold text-lg">Your directory is empty.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contacts.map((c) => (
              <div 
                key={c.id} 
                className="group bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Contact Avatar & Status */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-xl font-bold uppercase ring-4 ring-blue-50/50">
                    {c.name.charAt(0)}
                  </div>
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 ring-4 ring-emerald-50"></div>
                </div>

                {/* Info */}
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {c.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 truncate">
                    {c.email}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-50 flex items-center gap-3">
                  <Link 
                    href={`/contacts/edit/${c.id}`} 
                    className="flex-1 text-center py-2.5 rounded-xl text-sm font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors"
                  >
                    Edit
                  </Link>

                  <form action={async () => { 'use server'; await deleteContact(c.id); }} className="flex-shrink-0">
                    <button className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}