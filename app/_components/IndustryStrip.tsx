const sectors = [
  { icon: "fas fa-truck", label: "Logística & Distribuição" },
  { icon: "fas fa-snowflake", label: "Cadeia de Frio" },
  { icon: "fas fa-hard-hat", label: "Construção" },
  { icon: "fas fa-tractor", label: "Agricultura" },
  { icon: "fas fa-landmark", label: "Serviços Públicos" },
  { icon: "fas fa-dolly-flatbed", label: "Mudanças & Transporte" },
];

export default function IndustryStrip() {
  return (
    <section
      style={{
        padding: "60px 0",
        background: "#f5f5f7",
        borderTop: "1px solid #ececec",
        borderBottom: "1px solid #ececec",
      }}
    >
      <div className="container">
        <div className="text-center" style={{ marginBottom: 30 }}>
          <p
            style={{
              color: "#E50012",
              textTransform: "uppercase",
              fontWeight: 700,
              letterSpacing: 2,
              fontSize: 13,
              marginBottom: 4,
            }}
          >
            Sectores que servimos
          </p>
          <h3
            style={{
              fontSize: "clamp(22px, 3vw, 28px)",
              fontWeight: 700,
              margin: 0,
            }}
          >
            Empresas que confiam na Dongfeng
          </h3>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 16,
            alignItems: "stretch",
          }}
        >
          {sectors.map((s, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "20px 22px",
                background: "#fff",
                borderRadius: 8,
                border: "1px solid #e5e5e5",
                fontSize: 15,
                fontWeight: 600,
                color: "#222",
              }}
              data-aos="zoom-in"
              data-aos-delay={100 + i * 80}
            >
              <i
                className={s.icon}
                style={{ fontSize: 26, color: "#E50012", flexShrink: 0, width: 28, textAlign: "center" }}
                aria-hidden="true"
              />
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
