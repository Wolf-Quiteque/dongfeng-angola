import Link from "next/link";
import PageHeader from "../_components/PageHeader";

export const metadata = {
  title: "Sobre Nós — Dongfeng Angola",
  description:
    "Conheça a concessionária oficial Dongfeng em Angola — quem somos, o que oferecemos e o nosso compromisso com o cliente.",
};

export default function SobrePage() {
  return (
    <>
      <PageHeader
        title="Sobre Nós"
        crumbs={[{ label: "Início", href: "/" }, { label: "Sobre Nós" }]}
      />

      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div style={{ borderRadius: 12, overflow: "hidden" }}>
                <img
                  src="/img/dealership-signage.jpeg"
                  alt="Concessionária Dongfeng Angola"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{ marginTop: 40 }}>
                <p
                  style={{
                    color: "#E50012",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    letterSpacing: 2,
                    marginBottom: 12,
                  }}
                >
                  Sobre a Dongfeng Angola
                </p>
                <h2
                  style={{
                    fontSize: "clamp(28px, 4vw, 44px)",
                    fontWeight: 800,
                    lineHeight: 1.15,
                    marginBottom: 22,
                  }}
                >
                  Mais de uma década a apoiar empresas <span style={{ color: "#E50012" }}>angolanas</span>
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 18 }}>
                  Somos a concessionária oficial Dongfeng em Angola. Importamos,
                  comercializamos e prestamos assistência à gama completa de veículos
                  comerciais Dongfeng — uma das maiores fabricantes mundiais de
                  caminhões, com presença em mais de 100 países.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.7 }}>
                  A nossa missão é colocar à disposição das empresas angolanas
                  veículos robustos, económicos e adaptados às condições de operação
                  locais, com total apoio pós-venda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 100px", background: "#f5f5f7" }}>
        <div className="container" style={{ paddingTop: 80 }}>
          <div className="row">
            {[
              {
                title: "Missão",
                text: "Disponibilizar veículos comerciais Dongfeng com qualidade reconhecida e apoio pós-venda completo, contribuindo para o crescimento das empresas angolanas.",
              },
              {
                title: "Visão",
                text: "Ser a referência em veículos comerciais em Angola, reconhecidos pela fiabilidade, profissionalismo e proximidade ao cliente.",
              },
              {
                title: "Valores",
                text: "Transparência, qualidade técnica, compromisso com prazos e relação duradoura com cada cliente.",
              },
            ].map((b, i) => (
              <div className="col-lg-4" key={i}>
                <div
                  style={{
                    background: "#fff",
                    padding: "36px 28px",
                    borderRadius: 10,
                    height: "100%",
                    borderTop: "4px solid #E50012",
                  }}
                >
                  <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 14 }}>
                    {b.title}
                  </h3>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555" }}>
                    {b.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "80px 0",
          background:
            "linear-gradient(135deg, rgba(229,0,18,0.95), rgba(150,0,12,0.95))",
          color: "#fff",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 800,
                  color: "#fff",
                  marginBottom: 6,
                }}
              >
                Visite a nossa concessionária
              </h2>
              <p style={{ fontSize: 17, opacity: 0.95, margin: 0 }}>
                Estamos em Luanda — venha conhecer a nossa frota e fale com a equipa
                comercial.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link
                href="/contacto"
                className="thm-btn"
                style={{
                  backgroundColor: "#fff",
                  color: "#E50012",
                  marginTop: 20,
                }}
              >
                Falar Connosco <span className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
