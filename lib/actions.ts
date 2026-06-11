"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { contentSchemas, type ContentKey } from "./schemas";
import { CONTENT_TAG } from "./data";
import { createSupabaseAdminClient, createSupabaseServerClient } from "./supabase-server";
import { uploadToR2 } from "./r2";

async function requireAdmin() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const allowedEmails = (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);

  if (!user || (allowedEmails.length && !allowedEmails.includes(user.email?.toLowerCase() || ""))) {
    redirect("/admin/login");
  }

  return user;
}

export async function saveContent(key: ContentKey, payload: unknown) {
  await requireAdmin();

  const schema = contentSchemas[key];
  if (!schema) throw new Error("Unknown content key");

  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    throw new Error(parsed.error.issues.map((issue) => issue.message).join("; "));
  }

  const supabase = createSupabaseAdminClient();
  const { error } = await supabase.from("cms_content").upsert({
    key,
    data: parsed.data,
    updated_at: new Date().toISOString(),
  });

  if (error) throw new Error(error.message);

  revalidateTag(CONTENT_TAG, "max");
  revalidatePath("/", "layout");
  revalidatePath("/admin", "layout");
  return { ok: true };
}

export async function uploadCmsAsset(formData: FormData) {
  await requireAdmin();

  const file = formData.get("file");
  const prefix = String(formData.get("prefix") || "cms");
  if (!(file instanceof File) || file.size === 0) {
    throw new Error("Escolha um ficheiro para carregar");
  }

  const url = await uploadToR2(file, prefix);
  return { url };
}

export async function signOut() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}
