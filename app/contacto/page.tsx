import PageHeader from "../_components/PageHeader";
import ContactForm from "../_components/ContactForm";

export const metadata = {
  title: "Contacto — Dongfeng Angola",
  description: "Entre em contacto com a Dongfeng Angola — telefone, email e morada da concessionária.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        title="Contacto"
        crumbs={[{ label: "Início", href: "/" }, { label: "Contacto" }]}
      />

      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div style={{ marginBottom: 40 }}>
                <p
                  style={{
                    color: "#E50012",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    letterSpacing: 2,
                  }}
                >
                  Contactos
                </p>
                <h2 style={{ fontSize: 32, fontWeight: 800, marginTop: 8 }}>
                  Estamos à sua <span style={{ color: "#E50012" }}>disposição</span>
                </h2>
              </div>

              {[
                {
                  icon: "icon-pin",
                  label: "Morada",
                  body: "Paragem da Mutamba, via expresse\nLuanda, Angola",
                },
                {
                  icon: "icon-call",
                  label: "Telefone",
                  body: "+244 928 283 666 / +244 926 267 111",
                  href: "tel:+244928283666",
                },
                {
                  icon: "icon-envelope",
                  label: "Email",
                  body: "txtailai@yeah.net",
                  href: "mailto:txtailai@yeah.net",
                },
                {
                  icon: "icon-clock",
                  label: "Horário",
                  body: "Segunda a Sexta: 08:00–17:30\nSábado: 09:00–13:00",
                },
              ].map((c, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 16,
                    padding: "18px 0",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background: "#fff5f5",
                      color: "#E50012",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                      flexShrink: 0,
                    }}
                  >
                    <span className={c.icon} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: 13,
                        color: "#666",
                        textTransform: "uppercase",
                        letterSpacing: 1,
                        marginBottom: 4,
                      }}
                    >
                      {c.label}
                    </p>
                    {c.href ? (
                      <a
                        href={c.href}
                        style={{ color: "#111", fontSize: 16, fontWeight: 600 }}
                      >
                        {c.body}
                      </a>
                    ) : (
                      <p
                        style={{
                          color: "#111",
                          fontSize: 16,
                          fontWeight: 600,
                          margin: 0,
                          whiteSpace: "pre-line",
                        }}
                      >
                        {c.body}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-8">
              <div
                style={{
                  background: "#fff",
                  padding: 40,
                  borderRadius: 10,
                  border: "1px solid #eee",
                }}
              >
                <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 22 }}>
                  Envie-nos uma mensagem
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
