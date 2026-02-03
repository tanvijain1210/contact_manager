import ContactForm from "@/app/_components/ContactForm";
import { createContact } from "../../api/contact";
export default function Page() { return <ContactForm title="Add Contact" action={createContact} /> }