import Link from "next/link";
import PageHeader from "../_components/PageHeader";
import { getContent } from "@/lib/data";
import { sobre as sobreDefaults } from "@/lib/content/pages";

export const metadata = {
  title: "Sobre Nós - Dongfeng Angola",
  description:
    "Conheça a concessionária oficial Dongfeng em Angola, quem somos, o que oferecemos e o nosso compromisso com o cliente.",
};

type SobreContent = typeof sobreDefaults;

export default async function SobrePage() {
  const page = (await getContent("sobre")) as SobreContent;

  return (
    <>
      <PageHeader title={page.title} crumbs={[{ label: "Início", href: "/" }, { label: page.title }]} />

      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div style={{ borderRadius: 12, overflow: "hidden" }}>
                <img src={page.image} alt={page.imageAlt} style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{ marginTop: 40 }}>
                <p style={{ color: "#E50012", textTransform: "uppercase", fontWeight: 700, letterSpacing: 2, marginBottom: 12 }}>
                  {page.eyebrow}
                </p>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, lineHeight: 1.15, marginBottom: 22 }}>
                  {page.heading} <span style={{ color: "#E50012" }}>{page.headingAccent}</span>
                </h2>
                {page.paragraphs.map((paragraph, i) => (
                  <p key={i} style={{ fontSize: 16, lineHeight: 1.7, marginBottom: i === page.paragraphs.length - 1 ? 0 : 18 }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 100px", background: "#f5f5f7" }}>
        <div className="container" style={{ paddingTop: 80 }}>
          <div className="row">
            {page.values.map((b, i) => (
              <div className="col-lg-4" key={i}>
                <div style={{ background: "#fff", padding: "36px 28px", borderRadius: 10, height: "100%", borderTop: "4px solid #E50012" }}>
                  <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 14 }}>{b.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555" }}>{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "linear-gradient(135deg, rgba(229,0,18,0.95), rgba(150,0,12,0.95))", color: "#fff" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#fff", marginBottom: 6 }}>
                {page.cta.title}
              </h2>
              <p style={{ fontSize: 17, opacity: 0.95, margin: 0 }}>{page.cta.text}</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link href={page.cta.href} className="thm-btn" style={{ backgroundColor: "#fff", color: "#E50012", marginTop: 20 }}>
                {page.cta.label} <span className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
