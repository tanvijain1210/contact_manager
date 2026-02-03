'use server'

import { redirect } from "next/navigation";
import axios from "axios";
import { setSession } from "@/app/_lib/session";

const API_URL = "http://127.0.0.1:3001/users";

/** LOGIN ACTION */
export async function loginAction(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    const { data: users } = await axios.get(`${API_URL}?email=${email}`);
    
    if (users.length === 0 || users[0].password !== password) {
      return { error: "Invalid email or password." };
    }

    const user = users[0];
    await setSession({ id: String(user.id), name: user.name, email: user.email });

    redirect('/contacts');
  } catch (err: any) {
    if (err.digest?.includes("NEXT_REDIRECT")) throw err;
    return { error: "Login failed. Check your database connection." };
  }
}
export async function signupAction(formData: FormData) {
  const name = formData.get('name')?.toString();
  const email = formData.get('email')?.toString();
  const password = formData.get('password')?.toString();

  if (!name || !email || !password) {
    return { error: "All fields are required." };
  }
try {
    // ... post and session logic ...
  // 1. Check existing user
  const { data: existingUsers } = await axios.get(`${API_URL}?email=${email}`);

  if (existingUsers.length > 0) {
    return { error: "This email is already registered." };
  }

  // 2. Create user
  const { data: user } = await axios.post(API_URL, {
    name,
    email,
    password,
  });

  // 3. Create session
  await setSession({
    id: String(user.id),
    name: user.name,
    email: user.email,
  });

  
  } catch (err: any) {
    // ADD THIS LINE:
    if (err.digest?.includes("NEXT_REDIRECT")) throw err;

    console.error("Signup Error:", err.message);
    return { error: "Signup failed. Please check your database connection." };
  }
  // 4. Redirect (NO RETURNS AFTER THIS)
  redirect("/contacts");
}
