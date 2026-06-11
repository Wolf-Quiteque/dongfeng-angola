import { unstable_cache } from "next/cache";
import { contentSchemas, type CarsContent, type ContentKey, type SiteContent } from "./schemas";
import { defaultContent } from "./content/defaults";
import { createSupabaseAdminClient, hasSupabaseEnv } from "./supabase-server";

export const CONTENT_TAG = "cms-content";

async function fetchContentDoc(key: ContentKey) {
  if (!hasSupabaseEnv() || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return defaultContent[key];
  }

  try {
    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase
      .from("cms_content")
      .select("data")
      .eq("key", key)
      .maybeSingle();

    if (error || !data?.data) return defaultContent[key];

    const parsed = contentSchemas[key].safeParse(data.data);
    return parsed.success ? parsed.data : defaultContent[key];
  } catch {
    return defaultContent[key];
  }
}

export const getContent = unstable_cache(
  async <K extends ContentKey>(key: K) => fetchContentDoc(key),
  ["cms-content"],
  { tags: [CONTENT_TAG], revalidate: 60 }
);

export async function getSiteContent(): Promise<SiteContent> {
  return (await getContent("site")) as SiteContent;
}

export async function getCarsContent(): Promise<CarsContent> {
  return (await getContent("cars")) as CarsContent;
}

export async function getCarBySlug(slug: string) {
  const catalog = await getCarsContent();
  return catalog.cars.find((car) => car.slug === slug);
}

