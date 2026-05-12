import CarCard from "../_components/CarCard";
import PageHeader from "../_components/PageHeader";
import { cars, categorias, type CarCategory } from "../_data/cars";
import Link from "next/link";

export const metadata = {
  title: "Modelos — Dongfeng Angola",
  description:
    "Veja todos os modelos Dongfeng disponíveis em Angola: mini caminhões, caminhões ligeiros, frigoríficos e veículos especiais.",
};

type SearchParams = Promise<{ categoria?: string }>;

export default async function ModelosPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const filtroCategoria = sp.categoria as CarCategory | undefined;

  const filtrados = filtroCategoria
    ? cars.filter((c) => c.categoria === filtroCategoria)
    : cars;

  return (
    <>
      <PageHeader
        title="Modelos Dongfeng"
        crumbs={[{ label: "Início", href: "/" }, { label: "Modelos" }]}
      />

      <section
        className="car-listing-page-one"
        style={{ padding: "80px 0" }}
      >
        <div className="container">
          {/* Filtros por categoria */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              marginBottom: 50,
              justifyContent: "center",
            }}
          >
            <Link
              href="/modelos"
              className={!filtroCategoria ? "thm-btn" : ""}
              style={
                !filtroCategoria
                  ? {}
                  : {
                      padding: "10px 22px",
                      borderRadius: 30,
                      border: "1px solid #ddd",
                      color: "#444",
                      fontWeight: 600,
                      textDecoration: "none",
                    }
              }
            >
              Todos
            </Link>
            {categorias.map((cat) => {
              const ativo = filtroCategoria === cat.value;
              return (
                <Link
                  key={cat.value}
                  href={`/modelos?categoria=${cat.value}`}
                  className={ativo ? "thm-btn" : ""}
                  style={
                    ativo
                      ? {}
                      : {
                          padding: "10px 22px",
                          borderRadius: 30,
                          border: "1px solid #ddd",
                          color: "#444",
                          fontWeight: 600,
                          textDecoration: "none",
                        }
                  }
                >
                  {cat.label}
                </Link>
              );
            })}
          </div>

          {filtrados.length === 0 ? (
            <p style={{ textAlign: "center", padding: 60 }}>
              Nenhum modelo encontrado nesta categoria.
            </p>
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
