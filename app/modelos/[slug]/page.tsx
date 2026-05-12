import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "../../_components/PageHeader";
import VisitForm from "../../_components/VisitForm";
import { cars, getCarBySlug } from "../../_data/cars";

export function generateStaticParams() {
  return cars.map((c) => ({ slug: c.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) return { title: "Modelo não encontrado — Dongfeng Angola" };
  return {
    title: `${car.nome} — Dongfeng Angola`,
    description: car.subtitulo,
  };
}

export default async function CarDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) notFound();

  return (
    <>
      <PageHeader
        title={car.nome}
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Modelos", href: "/modelos" },
          { label: car.nome },
        ]}
      />

      <section className="listing-single" style={{ padding: "80px 0" }}>
        <div className="container">
          {/* Top: title + specs + price */}
          <div
            className="listing-single__top"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 30,
              marginBottom: 40,
              paddingBottom: 30,
              borderBottom: "1px solid #eee",
            }}
          >
            <div className="listing-single__top-left" style={{ flex: "1 1 60%" }}>
              <h3
                className="listing-single__title"
                style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}
              >
                {car.nome}
              </h3>
              <p
                className="listing-single__sub-title"
                style={{ fontSize: 16, color: "#666", marginBottom: 22 }}
              >
                {car.subtitulo}
              </p>
              <div className="listing-single__car-details-box">
                <ul
                  className="list-unstyled listing-single__car-details"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "18px 32px",
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    fontSize: 15,
                  }}
                >
                  <li>
                    <span className="icon-date" style={{ color: "#E50012", marginRight: 8 }} />
                    <strong>Ano:</strong> {car.specs.ano}
                  </li>
                  <li>
                    <span className="icon-Carrier" style={{ color: "#E50012", marginRight: 8 }} />
                    <strong>Transmissão:</strong> {car.specs.transmissao}
                  </li>
                  <li>
                    <span className="icon-fuel-type" style={{ color: "#E50012", marginRight: 8 }} />
                    <strong>Combustível:</strong> {car.specs.combustivel}
                  </li>
                  <li>
                    <span className="icon-seat" style={{ color: "#E50012", marginRight: 8 }} />
                    <strong>Lugares:</strong> {car.specs.lugares}
                  </li>
                  <li>
                    <span className="icon-test-drive" style={{ color: "#E50012", marginRight: 8 }} />
                    <strong>Carga:</strong> {car.specs.cargaUtil}
                  </li>
                  <li>
                    <span className="icon-car-insurance" style={{ color: "#E50012", marginRight: 8 }} />
                    <strong>Motor:</strong> {car.specs.motor}
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="listing-single__top-right"
              style={{ flex: "1 1 30%", textAlign: "right" }}
            >
              <p style={{ fontSize: 14, color: "#666", marginBottom: 4 }}>
                {car.precoLabel}
              </p>
              <h2
                className="listing-single__price"
                style={{ fontSize: 36, fontWeight: 800, color: "#E50012", marginBottom: 18 }}
              >
                {car.preco}
              </h2>
              <Link
                href={`/agendar-visita?modelo=${car.slug}`}
                className="thm-btn"
              >
                Agendar Visita <span className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>

          {/* Gallery */}
          <div className="row" style={{ marginBottom: 50 }}>
            <div className="col-lg-8">
              <div style={{ borderRadius: 10, overflow: "hidden", marginBottom: 20 }}>
                <img
                  src={car.galeria[0]}
                  alt={car.nome}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
              {car.galeria.length > 1 && (
                <div className="row" style={{ marginTop: 12 }}>
                  {car.galeria.slice(1).map((g, i) => (
                    <div className="col-md-4 col-6" key={i} style={{ marginBottom: 18 }}>
                      <div style={{ borderRadius: 8, overflow: "hidden" }}>
                        <img
                          src={g}
                          alt={`${car.nome} — foto ${i + 2}`}
                          style={{ width: "100%", height: 160, objectFit: "cover", display: "block" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="col-lg-4">
              <div
                style={{
                  background: "#f5f5f7",
                  padding: 30,
                  borderRadius: 10,
                  border: "1px solid #e5e5e5",
                }}
              >
                <h4 style={{ fontSize: 20, fontWeight: 700, marginBottom: 18 }}>
                  Especificações
                </h4>
                <table style={{ width: "100%", fontSize: 14 }}>
                  <tbody>
                    {Object.entries({
                      Ano: car.specs.ano,
                      Cabine: car.specs.cabine,
                      Lugares: car.specs.lugares,
                      Motor: car.specs.motor,
                      Combustível: car.specs.combustivel,
                      Transmissão: car.specs.transmissao,
                      "Carga útil": car.specs.cargaUtil,
                      Caixa: car.specs.caixa,
                    }).map(([k, v]) => (
                      <tr key={k} style={{ borderBottom: "1px solid #e5e5e5" }}>
                        <td style={{ padding: "10px 0", color: "#666" }}>{k}</td>
                        <td style={{ padding: "10px 0", textAlign: "right", fontWeight: 600 }}>
                          {v}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Description + highlights */}
          <div className="row">
            <div className="col-lg-8">
              <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
                Descrição
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "#444", marginBottom: 30 }}>
                {car.descricao}
              </p>

              <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
                Destaques
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {car.destaques.map((d, i) => (
                  <li
                    key={i}
                    style={{
                      padding: "12px 0",
                      borderBottom: "1px solid #eee",
                      display: "flex",
                      gap: 12,
                      fontSize: 15,
                    }}
                  >
                    <span
                      className="fas fa-check-circle"
                      style={{ color: "#E50012", fontSize: 18, marginTop: 3 }}
                    />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-4">
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #e5e5e5",
                  padding: 28,
                  borderRadius: 10,
                  position: "sticky",
                  top: 100,
                }}
              >
                <h4 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
                  Interessado?
                </h4>
                <p style={{ fontSize: 14, color: "#666", marginBottom: 18 }}>
                  Marque uma visita à nossa concessionária para ver e experimentar o
                  veículo pessoalmente.
                </p>
                <Link
                  href={`/agendar-visita?modelo=${car.slug}`}
                  className="thm-btn"
                  style={{ width: "100%", justifyContent: "center", display: "inline-flex" }}
                >
                  Agendar Visita
                </Link>
                <hr style={{ margin: "22px 0", borderColor: "#eee" }} />
                <p style={{ fontSize: 13, color: "#666", marginBottom: 8 }}>
                  Ou ligue diretamente:
                </p>
                <a
                  href="tel:+244928283666"
                  style={{ color: "#E50012", fontWeight: 700, fontSize: 18 }}
                >
                  +244 928 283 666
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inline visit form */}
      <section style={{ padding: "60px 0", background: "#f5f5f7" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div style={{ textAlign: "center", marginBottom: 40 }}>
                <p
                  className="section-title__tagline"
                  style={{
                    color: "#E50012",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    letterSpacing: 2,
                  }}
                >
                  Agendar Visita
                </p>
                <h2 style={{ fontSize: 32, fontWeight: 800, marginTop: 8 }}>
                  Quero conhecer o <span style={{ color: "#E50012" }}>{car.nome}</span>
                </h2>
              </div>
              <div style={{ background: "#fff", padding: 40, borderRadius: 10 }}>
                <VisitForm defaultModel={car.slug} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
