import Link from "next/link";
import { signOut } from "@/lib/actions";
import { requireAdminUser } from "@/lib/admin";
import { AdminNav } from "./_components/JsonEditor";

export default async function AdminPage() {
  const user = await requireAdminUser();

  return (
    <main style={{ minHeight: "100vh", background: "#f6f6f6", padding: 28 }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gap: 24 }}>
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
            <AdminNav />
          </aside>
          <div style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: 8, padding: 28 }}>
            <h2 style={{ fontSize: 24, marginTop: 0 }}>Escolha uma área do site</h2>
            <p style={{ color: "#555", lineHeight: 1.7 }}>
              Edite textos, imagens, contactos, botões, perguntas frequentes e modelos
              sem mexer em código. Depois de guardar, o site público é atualizado.
            </p>
            <Link href="/admin/home" className="thm-btn">
              Editar Início
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
