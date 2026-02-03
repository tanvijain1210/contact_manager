'use server'

import { cookies } from "next/headers";
import { UserType } from "../_types/user";

/**
 * SET SESSION
 * Stores the user object in an HTTP-only cookie.
 */
export async function setSession(user: UserType) {
  const cookieStore = await cookies();
  cookieStore.set("session", JSON.stringify(user), {
    httpOnly: true,
    secure: false,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
}

/**
 * GET SESSION
 * Retrieves and parses the user object from cookies.
 */
export async function getSession(): Promise<UserType | null> {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;

  if (!session) return null;

  try {
    const parsed = JSON.parse(session);
    // Ensure the parsed object has the required properties
    if (!parsed.id || !parsed.email) return null;
    return parsed as UserType;
  } catch (error) {
    return null;
  }
}

/**
 * DELETE SESSION
 * Removes the cookie to log the user out.
 */
export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}