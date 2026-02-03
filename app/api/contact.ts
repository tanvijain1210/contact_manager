'use server'

import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"; // Added missing import
import { getSession } from "../_lib/session";
import { ContactType } from "../_types/contacts";

const API_URL = "http://localhost:3001/contacts";

/** 1. GET ALL CONTACTS */
export async function getContacts() {
  const session = await getSession();
  if (!session || !session.id) return [];

  try {
    const { data } = await axios.get(`${API_URL}?userId=${session.id}`);
    return data as ContactType[];
  } catch (err) {
    return [];
  }
}

/** 2. GET CONTACT BY ID */
export async function getContactById(id: string) {
  const session = await getSession();
  if (!session) return null;

  try {
    const { data } = await axios.get(`${API_URL}/${id}`);
    const contact: ContactType = data;
    
    // Security check: Match string IDs
    return String(contact.userId) === String(session.id) ? contact : null;
  } catch (err) {
    return null;
  }
}

/** 3. CREATE CONTACT */
export async function createContact(formData: FormData) {
  const session = await getSession();
  if (!session) return { error: "Unauthorized" };

  try {
    const newContact = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      userId: String(session.id) 
    };

    await axios.post(API_URL, newContact);
    revalidatePath("/contacts");
  } catch (err) {
    return { error: "Failed to create contact." };
  }
  
  redirect("/contacts"); // Redirect outside try/catch
}

/** 4. UPDATE CONTACT */
export async function updateContact(id: string, formData: FormData) {
  const session = await getSession();
  if (!session) return { error: "Unauthorized" };

  try {
    const updatedData = {
      name: formData.get("name"),
      email: formData.get("email"),
    };

    await axios.patch(`${API_URL}/${id}`, updatedData);
    revalidatePath("/contacts");
  } catch (err) {
    return { error: "Failed to update contact." };
  }

  redirect("/contacts"); // Redirect outside try/catch
}

/** 5. DELETE CONTACT */
export async function deleteContact(id: string) {
  const session = await getSession();
  if (!session) return { error: "Unauthorized" };

  try {
    const contact = await getContactById(id);
    if (!contact) return { error: "Contact not found." };

    await axios.delete(`${API_URL}/${id}`);
    revalidatePath("/contacts");
  } catch (err) {
    return { error: "Failed to delete contact." };
  }
}