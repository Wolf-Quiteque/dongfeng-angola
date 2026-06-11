import CarCard from "../_components/CarCard";
import PageHeader from "../_components/PageHeader";
import Link from "next/link";
import { getCarsContent, getContent } from "@/lib/data";
import { modelos as modelosDefaults } from "@/lib/content/pages";

export const metadata = {
  title: "Modelos - Dongfeng Angola",
  description:
    "Veja todos os modelos Dongfeng disponíveis em Angola: mini caminhões, caminhões ligeiros, frigoríficos e veículos especiais.",
};

type SearchParams = Promise<{ categoria?: string; q?: string }>;
type ModelosContent = typeof modelosDefaults;

export default async function ModelosPage({ searchParams }: { searchParams: SearchParams }) {
  const [{ cars, categorias }, page] = await Promise.all([
    getCarsContent(),
    getContent("modelos") as Promise<ModelosContent>,
  ]);
  const sp = await searchParams;
  const filtroCategoria = sp.categoria;
  const query = sp.q?.trim().toLowerCase();

  const filtrados = cars.filter((car) => {
    const matchesCategory = filtroCategoria ? car.categoria === filtroCategoria : true;
    const matchesQuery = query
      ? `${car.nome} ${car.subtitulo} ${car.descricao}`.toLowerCase().includes(query)
      : true;
    return matchesCategory && matchesQuery;
  });

  return (
    <>
      <PageHeader title={page.title} crumbs={[{ label: "Início", href: "/" }, { label: "Modelos" }]} />

      <section className="car-listing-page-one" style={{ padding: "80px 0" }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 50, justifyContent: "center" }}>
            <Link
              href="/modelos"
              className={!filtroCategoria ? "thm-btn" : ""}
              style={!filtroCategoria ? {} : { padding: "10px 22px", borderRadius: 30, border: "1px solid #ddd", color: "#444", fontWeight: 600, textDecoration: "none" }}
            >
              {page.allLabel}
            </Link>
            {categorias.map((cat) => {
              const ativo = filtroCategoria === cat.value;
              return (
                <Link
                  key={cat.value}
                  href={`/modelos?categoria=${cat.value}`}
                  className={ativo ? "thm-btn" : ""}
                  style={ativo ? {} : { padding: "10px 22px", borderRadius: 30, border: "1px solid #ddd", color: "#444", fontWeight: 600, textDecoration: "none" }}
                >
                  {cat.label}
                </Link>
              );
            })}
          </div>

          {filtrados.length === 0 ? (
            <p style={{ textAlign: "center", padding: 60 }}>{page.emptyText}</p>
          ) : (
            <div className="row">
              {filtrados.map((car, i) => (
                <div className="col-xl-4 col-lg-4 col-md-6" key={car.slug}>
                  <CarCard car={car} delay={100 + i * 100} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
