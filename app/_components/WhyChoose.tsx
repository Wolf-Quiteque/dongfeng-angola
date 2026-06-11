export type WhyContent = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  items: { icon: string; title: string; text: string }[];
};

const defaultContent: WhyContent = {
  eyebrow: "Porquê Dongfeng Angola",
  title: "Mais do que uma",
  titleAccent: "concessionária",
  items: [],
};

export default function WhyChoose({ content = defaultContent }: { content?: WhyContent }) {
  return (
    <section style={{ padding: "100px 0", background: "#fff" }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: 50 }}>
          <p style={{ color: "#E50012", textTransform: "uppercase", fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>
            {content.eyebrow}
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, margin: 0 }}>
            {content.title} <span style={{ color: "#E50012" }}>{content.titleAccent}</span>
          </h2>
        </div>

        <div className="row">
          {content.items.map((it, i) => (
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
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>{it.title}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#555", margin: 0 }}>{it.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
