const items = [
  {
    icon: "icon-Carrier",
    title: "Veículos novos 2026",
    text: "Linha completa Dongfeng com garantia de fábrica e documentação angolana pronta.",
  },
  {
    icon: "icon-tools",
    title: "Oficina equipada",
    text: "Mecânicos certificados Dongfeng e equipamento específico para a marca.",
  },
  {
    icon: "icon-car-insurance",
    title: "Peças genuínas",
    text: "Stock permanente em Luanda, com entregas para todas as províncias.",
  },
  {
    icon: "icon-test-drive",
    title: "Test drive sem compromisso",
    text: "Marque a sua visita e experimente o veículo antes de comprar.",
  },
  {
    icon: "icon-pin-2",
    title: "Apoio em todo o país",
    text: "Cobertura nacional e suporte técnico para a sua frota onde precisar.",
  },
  {
    icon: "icon-call-3",
    title: "Atendimento dedicado",
    text: "Equipa comercial em português para a sua empresa, do orçamento à entrega.",
  },
];

export default function WhyChoose() {
  return (
    <section style={{ padding: "100px 0", background: "#fff" }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: 50 }}>
          <p
            style={{
              color: "#E50012",
              textTransform: "uppercase",
              fontWeight: 700,
              letterSpacing: 2,
              marginBottom: 8,
            }}
          >
            Porquê Dongfeng Angola
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              margin: 0,
            }}
          >
            Mais do que uma <span style={{ color: "#E50012" }}>concessionária</span>
          </h2>
        </div>

        <div className="row">
          {items.map((it, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div
                style={{
                  display: "flex",
                  gap: 18,
                  alignItems: "flex-start",
                  padding: "26px 20px",
                  borderRadius: 10,
                  background: "#fff",
                  border: "1px solid #f0f0f0",
                  marginBottom: 20,
                  transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
                }}
                data-aos="fade-up"
                data-aos-delay={100 + (i % 3) * 100}
              >
                <div
                  style={{
                    flex: "0 0 56px",
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #E50012, #B30010)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                  }}
                >
                  <span className={it.icon} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      marginBottom: 6,
                    }}
                  >
                    {it.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14.5,
                      lineHeight: 1.65,
                      color: "#555",
                      margin: 0,
                    }}
                  >
                    {it.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
