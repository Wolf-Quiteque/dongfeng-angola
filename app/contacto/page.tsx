import PageHeader from "../_components/PageHeader";
import ContactForm from "../_components/ContactForm";
import { getContent } from "@/lib/data";
import { contacto as contactoDefaults } from "@/lib/content/pages";

export const metadata = {
  title: "Contacto - Dongfeng Angola",
  description: "Entre em contacto com a Dongfeng Angola, telefone, email e morada da concessionária.",
};

type ContactoContent = typeof contactoDefaults;

export default async function ContactoPage() {
  const page = (await getContent("contacto")) as ContactoContent;

  return (
    <>
      <PageHeader title={page.title} crumbs={[{ label: "Início", href: "/" }, { label: page.title }]} />

      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div style={{ marginBottom: 40 }}>
                <p style={{ color: "#E50012", textTransform: "uppercase", fontWeight: 700, letterSpacing: 2 }}>
                  {page.eyebrow}
                </p>
                <h2 style={{ fontSize: 32, fontWeight: 800, marginTop: 8 }}>
                  {page.heading} <span style={{ color: "#E50012" }}>{page.headingAccent}</span>
                </h2>
              </div>

              {page.cards.map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 16, padding: "18px 0", borderBottom: "1px solid #eee" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#fff5f5", color: "#E50012", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
                    <span className={c.icon} />
                  </div>
                  <div>
                    <p style={{ fontSize: 13, color: "#666", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>
                      {c.label}
                    </p>
                    {"href" in c && c.href ? (
                      <a href={c.href} style={{ color: "#111", fontSize: 16, fontWeight: 600 }}>
                        {c.body}
                      </a>
                    ) : (
                      <p style={{ color: "#111", fontSize: 16, fontWeight: 600, margin: 0, whiteSpace: "pre-line" }}>
                        {c.body}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-8">
              <div style={{ background: "#fff", padding: 40, borderRadius: 10, border: "1px solid #eee" }}>
                <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 22 }}>{page.formTitle}</h3>
                <ContactForm labels={page.form} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
