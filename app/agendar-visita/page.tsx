import PageHeader from "../_components/PageHeader";
import VisitForm from "../_components/VisitForm";
import { getCarsContent, getContent } from "@/lib/data";
import { visita as visitaDefaults } from "@/lib/content/pages";

export const metadata = {
  title: "Agendar Visita - Dongfeng Angola",
  description:
    "Marque a sua visita à concessionária Dongfeng Angola, escolha o modelo, a data e a hora.",
};

type SearchParams = Promise<{ modelo?: string }>;
type VisitaContent = typeof visitaDefaults;

export default async function AgendarVisitaPage({ searchParams }: { searchParams: SearchParams }) {
  const [sp, page, catalog] = await Promise.all([
    searchParams,
    getContent("visita") as Promise<VisitaContent>,
    getCarsContent(),
  ]);

  return (
    <>
      <PageHeader title={page.title} crumbs={[{ label: "Início", href: "/" }, { label: page.title }]} />

      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div style={{ textAlign: "center", marginBottom: 40 }}>
                <p style={{ color: "#E50012", textTransform: "uppercase", fontWeight: 700, letterSpacing: 2 }}>
                  {page.eyebrow}
                </p>
                <h2 style={{ fontSize: 32, fontWeight: 800, marginTop: 8 }}>
                  {page.heading} <span style={{ color: "#E50012" }}>{page.headingAccent}</span> {page.headingSuffix}
                </h2>
                <p style={{ fontSize: 16, color: "#666", maxWidth: 640, margin: "16px auto 0", lineHeight: 1.7 }}>
                  {page.text}
                </p>
              </div>

              <div style={{ background: "#fff", padding: 40, borderRadius: 10, border: "1px solid #eee", boxShadow: "0 10px 40px rgba(0,0,0,0.05)" }}>
                <VisitForm cars={catalog.cars} defaultModel={sp.modelo} labels={page.form} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
