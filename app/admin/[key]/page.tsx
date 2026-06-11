import { notFound } from "next/navigation";
import { signOut } from "@/lib/actions";
import { requireAdminUser } from "@/lib/admin";
import { getContent } from "@/lib/data";
import { contentSchemas, type ContentKey } from "@/lib/schemas";
import JsonEditor, { AdminNav } from "../_components/JsonEditor";

type Params = Promise<{ key: string }>;

export default async function AdminDocPage({ params }: { params: Params }) {
  const user = await requireAdminUser();
  const { key } = await params;
  if (!(key in contentSchemas)) notFound();

  const contentKey = key as ContentKey;
  const data = await getContent(contentKey);

  return (
    <main style={{ minHeight: "100vh", background: "#f6f6f6", padding: 28 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gap: 24 }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div>
            <h1 style={{ margin: 0, fontSize: 30 }}>Dongfeng CMS</h1>
            <p style={{ margin: "6px 0 0", color: "#666" }}>{user.email}</p>
          </div>
          <form action={signOut}>
            <button type="submit" className="thm-btn">
              Sair
            </button>
          </form>
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(220px, 320px) 1fr",
            gap: 24,
            alignItems: "start",
          }}
        >
          <aside>
            <AdminNav active={contentKey} />
          </aside>
          <div style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: 8, padding: 28 }}>
            <JsonEditor contentKey={contentKey} data={data} />
          </div>
        </section>
      </div>
    </main>
  );
}
