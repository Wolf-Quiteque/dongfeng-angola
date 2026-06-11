import { createClient } from "@supabase/supabase-js";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { contentSchemas, type ContentKey } from "../lib/schemas";
import { defaultContent } from "../lib/content/defaults";

const force = process.argv.includes("--force");

function loadEnvFile(fileName: string) {
  const envPath = resolve(process.cwd(), fileName);
  if (!existsSync(envPath)) return;
  const lines = readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const equalIndex = trimmed.indexOf("=");
    if (equalIndex === -1) continue;

    const key = trimmed.slice(0, equalIndex).trim();
    const rawValue = trimmed.slice(equalIndex + 1).trim();
    const value = rawValue.replace(/^['"]|['"]$/g, "");
    if (key && process.env[key] === undefined) process.env[key] = value;
  }
}

loadEnvFile(".env");
loadEnvFile(".env.local");

function getRequiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing ${name}. Copy .env.local.example to .env.local and fill it in.`);
  }
  return value;
}

async function main() {
  const supabaseUrl = getRequiredEnv("NEXT_PUBLIC_SUPABASE_URL");
  const serviceRoleKey = getRequiredEnv("SUPABASE_SERVICE_ROLE_KEY");
  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  for (const [key, value] of Object.entries(defaultContent) as [ContentKey, unknown][]) {
    const parsed = contentSchemas[key].parse(value);

    if (!force) {
      const { data: existing, error: selectError } = await supabase
        .from("cms_content")
        .select("key")
        .eq("key", key)
        .maybeSingle();

      if (selectError) {
        if (selectError.message.toLowerCase().includes("cms_content")) {
          throw new Error(
            "Missing Supabase table public.cms_content. Run supabase/migrations/0001_cms_content.sql in the Supabase SQL Editor, then run npm run seed again."
          );
        }
        throw new Error(`Could not read ${key}: ${selectError.message}`);
      }
      if (existing) {
        console.log(`Skipped ${key} because it already exists. Use npm run seed:force to overwrite.`);
        continue;
      }
    }

    const { error } = await supabase.from("cms_content").upsert({
      key,
      data: parsed,
      updated_at: new Date().toISOString(),
    });

    if (error) throw new Error(`Could not seed ${key}: ${error.message}`);
    console.log(`${force ? "Updated" : "Seeded"} ${key}`);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
