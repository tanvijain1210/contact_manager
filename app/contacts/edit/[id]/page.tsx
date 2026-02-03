import ContactForm from "@/app/_components/ContactForm";
import { getContactById, updateContact } from "@/app/api/contact"; // Corrected import path
import { notFound } from "next/navigation";

interface EditPageProps {
  params: Promise<{ id: string }>; 
}

export default async function EditContactPage({ params }: EditPageProps) {
  const { id } = await params;

  // Fetch the existing contact
  const contact = await getContactById(id);

  if (!contact) {
    notFound(); 
  }

  // Bind the ID to the update action
  const updateWithId = updateContact.bind(null, id);

  return (
    <div className="pt-32 px-4">
      <ContactForm 
        title="Edit Contact" 
        initialData={contact} 
        action={updateWithId} 
      />
    </div>
  );
}