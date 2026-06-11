"use client";

import { useState } from "react";

export type FaqContent = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  text: string;
  ctaLabel: string;
  ctaHref: string;
  items: { q: string; a: string }[];
};

const defaultContent: FaqContent = {
  eyebrow: "Dúvidas frequentes",
  title: "Tudo o que precisa de saber",
  titleAccent: "antes de comprar",
  text: "Não encontrou a resposta? A nossa equipa está disponível para esclarecer qualquer questão técnica ou comercial.",
  ctaLabel: "Ligar Agora",
  ctaHref: "tel:+244928283666",
  items: [],
};

export default function Faq({ content = defaultContent }: { content?: FaqContent }) {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="faq-one" style={{ padding: "100px 0", background: "#f5f5f7" }}>
      <div className="container">
        <div className="row align-items-start">
          <div className="col-lg-5">
            <div style={{ marginBottom: 30, position: "sticky", top: 100 }}>
              <p style={{ color: "#E50012", textTransform: "uppercase", fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>
                {content.eyebrow}
              </p>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, lineHeight: 1.15, marginBottom: 22 }}>
                {content.title} <span style={{ color: "#E50012" }}>{content.titleAccent}</span>
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "#555", marginBottom: 28 }}>
                {content.text}
              </p>
              <a href={content.ctaHref} className="thm-btn">
                {content.ctaLabel} <span className="fas fa-phone" />
              </a>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="accrodion-grp">
              {content.items.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={i}
                    className={`accrodion ${isOpen ? "active" : ""}`}
                    style={{
                      background: "#fff",
                      borderRadius: 8,
                      marginBottom: 14,
                      border: "1px solid #ececec",
                      overflow: "hidden",
                      transition: "border-color 0.3s",
                      borderColor: isOpen ? "#E50012" : "#ececec",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 16,
                        padding: "20px 24px",
                        background: "transparent",
                        border: 0,
                        textAlign: "left",
                        cursor: "pointer",
                      }}
                    >
                      <h4 style={{ fontSize: 16, fontWeight: 700, margin: 0, color: isOpen ? "#E50012" : "#111", transition: "color 0.3s" }}>
                        {item.q}
                      </h4>
                      <span
                        style={{
                          flexShrink: 0,
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          background: isOpen ? "#E50012" : "#f0f0f0",
                          color: isOpen ? "#fff" : "#666",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                          transition: "all 0.3s",
                        }}
                      >
                        <i className={`fas fa-${isOpen ? "minus" : "plus"}`} />
                      </span>
                    </button>
                    <div style={{ maxHeight: isOpen ? 500 : 0, overflow: "hidden", transition: "max-height 0.4s ease" }}>
                      <div style={{ padding: "0 24px 22px" }}>
                        <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "#555", margin: 0 }}>{item.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
