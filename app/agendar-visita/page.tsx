import PageHeader from "../_components/PageHeader";
import VisitForm from "../_components/VisitForm";

export const metadata = {
  title: "Agendar Visita — Dongfeng Angola",
  description:
    "Marque a sua visita à concessionária Dongfeng Angola — escolha o modelo, a data e a hora.",
};

type SearchParams = Promise<{ modelo?: string }>;

export default async function AgendarVisitaPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;

  return (
    <>
      <PageHeader
        title="Agendar Visita"
        crumbs={[{ label: "Início", href: "/" }, { label: "Agendar Visita" }]}
      />

      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div style={{ textAlign: "center", marginBottom: 40 }}>
                <p
                  style={{
                    color: "#E50012",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    letterSpacing: 2,
                  }}
                >
                  Marque a sua visita
                </p>
                <h2 style={{ fontSize: 32, fontWeight: 800, marginTop: 8 }}>
                  Conheça <span style={{ color: "#E50012" }}>presencialmente</span> o
                  seu próximo Dongfeng
                </h2>
                <p
                  style={{
                    fontSize: 16,
                    color: "#666",
                    maxWidth: 640,
                    margin: "16px auto 0",
                    lineHeight: 1.7,
                  }}
                >
                  Preencha o formulário e iremos confirmar a sua visita. A nossa equipa
                  comercial irá apresentar-lhe o modelo escolhido e dar resposta a
                  todas as suas questões técnicas e comerciais.
                </p>
              </div>

              <div
                style={{
                  background: "#fff",
                  padding: 40,
                  borderRadius: 10,
                  border: "1px solid #eee",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
                }}
              >
                <VisitForm defaultModel={sp.modelo} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
