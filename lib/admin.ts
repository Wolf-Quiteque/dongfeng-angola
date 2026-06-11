import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "./supabase-server";

export async function getAdminUser() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const allowedEmails = (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);

  if (!user) return null;
  if (allowedEmails.length && !allowedEmails.includes(user.email?.toLowerCase() || "")) {
    return null;
  }

  return user;
}

export async function requireAdminUser() {
  const user = await getAdminUser();
  if (!user) redirect("/admin/login");
  return user;
}

