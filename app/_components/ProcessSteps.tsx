const steps = [
  {
    icon: "icon-car-wash",
    title: "Escolha o modelo",
    text: "Explore a linha completa Dongfeng e identifique o veículo certo para o seu negócio.",
  },
  {
    icon: "icon-in-person",
    title: "Entre em contacto",
    text: "Fale com a nossa equipa comercial para esclarecer dúvidas e receber proposta.",
  },
  {
    icon: "icon-car-insurance",
    title: "Marque a visita",
    text: "Venha ao stand em Luanda, conheça o veículo e faça o test drive.",
  },
  {
    icon: "icon-steering-wheel",
    title: "Leve o seu Dongfeng",
    text: "Entregamos com documentação completa e apoio técnico de longa duração.",
  },
];

export default function ProcessSteps() {
  return (
    <section
      className="process-one"
      style={{
        padding: "100px 0",
        background: "#f5f5f7",
        position: "relative",
        overflow: "hidden",
      }}
    >
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
            Passos
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              margin: 0,
            }}
          >
            Como adquirir o seu <span style={{ color: "#E50012" }}>Dongfeng</span>
          </h2>
        </div>

        <div className="row">
          {steps.map((s, i) => (
            <div className="col-xl-3 col-lg-6 col-md-6" key={i}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: "40px 26px",
                  textAlign: "center",
                  position: "relative",
                  height: "100%",
                  border: "1px solid #ececec",
                  marginBottom: 24,
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                data-aos="fade-up"
                data-aos-delay={100 + i * 100}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 20,
                    fontSize: 70,
                    fontWeight: 900,
                    color: "rgba(229,0,18,0.08)",
                    lineHeight: 1,
                  }}
                >
                  0{i + 1}
                </div>
                <div
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #E50012, #B30010)",
                    color: "#fff",
                    margin: "0 auto 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 36,
                    boxShadow: "0 10px 30px rgba(229,0,18,0.35)",
                  }}
                >
                  <span className={s.icon} />
                </div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    marginBottom: 12,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: 14.5,
                    lineHeight: 1.65,
                    color: "#555",
                    margin: 0,
                  }}
                >
                  {s.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
