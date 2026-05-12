"use client";

import { useEffect } from "react";
import { waitForJQueryPlugin } from "./jquery-ready";

const testimonials = [
  {
    nome: "Carlos Bastos",
    cargo: "Diretor — Logística LDA, Luanda",
    img: "/assets/images/testimonial/testimonial-1-1.jpg",
    texto:
      "Comprámos uma frota de 6 T20 cabine dupla para distribuição em Luanda. Veículos económicos, robustos e o apoio pós-venda tem sido impecável.",
  },
  {
    nome: "Esperança Manuel",
    cargo: "Gerente — Frio do Sul",
    img: "/assets/images/testimonial/testimonial-1-2.jpg",
    texto:
      "Os Captain Frigorífico mudaram a nossa operação. Mantemos a cadeia de frio sem falhas e a equipa técnica responde sempre que precisamos.",
  },
  {
    nome: "João Tavares",
    cargo: "Empreiteiro — Benguela",
    img: "/assets/images/testimonial/testimonial-1-3.jpg",
    texto:
      "Trabalho com o Captain T há mais de um ano. Aguenta estradas difíceis, consome pouco gasóleo e a manutenção custa muito menos do que esperava.",
  },
  {
    nome: "Madalena Cunha",
    cargo: "CFO — DistriAlimentar",
    img: "/assets/images/testimonial/testimonial-1-4.jpg",
    texto:
      "Profissionalismo desde o primeiro contacto. Receberam-nos no stand, ofereceram test drive e a entrega aconteceu na data combinada.",
  },
  {
    nome: "Augusto Pinto",
    cargo: "Gestor de frota — TransLuanda",
    img: "/assets/images/testimonial/testimonial-1-5.jpg",
    texto:
      "Boa relação preço-qualidade e peças sempre disponíveis. Para uma operação como a nossa, isso faz toda a diferença.",
  },
];

export default function Testimonials() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    let cancelled = false;
    waitForJQueryPlugin("owlCarousel")
      .then(($) => {
        if (cancelled) return;
        const $car = $(".testimonial-one__carousel");
        if ($car.length && !$car.hasClass("owl-loaded")) {
          $car.owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5500,
            smartSpeed: 600,
            responsive: {
              0: { items: 1 },
              768: { items: 2 },
              1200: { items: 3 },
            },
          });
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      className="testimonial-one"
      style={{
        padding: "100px 0",
        background: "#fff",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div style={{ marginBottom: 50, maxWidth: 720 }}>
          <p
            style={{
              color: "#E50012",
              textTransform: "uppercase",
              fontWeight: 700,
              letterSpacing: 2,
              marginBottom: 8,
            }}
          >
            Depoimentos
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            O que dizem os nossos <span style={{ color: "#E50012" }}>clientes</span>
          </h2>
        </div>

        <div className="testimonial-one__carousel owl-theme owl-carousel">
          {testimonials.map((t, i) => (
            <div className="item" key={i}>
              <div
                className="testimonial-one__single"
                style={{
                  background: "#f5f5f7",
                  padding: "34px 30px 30px",
                  borderRadius: 12,
                  position: "relative",
                  borderTop: "4px solid #E50012",
                  minHeight: 280,
                }}
              >
                <div
                  className="testimonial-one__client-info"
                  style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 18 }}
                >
                  <div
                    className="testimonial-one__img"
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      overflow: "hidden",
                      flexShrink: 0,
                      border: "3px solid #fff",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                  >
                    <img
                      src={t.img}
                      alt={t.nome}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: 16,
                        fontWeight: 800,
                        marginBottom: 2,
                      }}
                    >
                      {t.nome}
                    </h4>
                    <p style={{ fontSize: 13, color: "#666", margin: 0 }}>
                      {t.cargo}
                    </p>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "#333",
                    marginBottom: 18,
                  }}
                >
                  &ldquo;{t.texto}&rdquo;
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: 4,
                    color: "#FFB400",
                    fontSize: 14,
                  }}
                  aria-label="5 estrelas"
                >
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 22,
                    fontSize: 64,
                    color: "rgba(229,0,18,0.12)",
                    fontWeight: 900,
                    fontFamily: "Georgia, serif",
                    lineHeight: 1,
                  }}
                >
                  &ldquo;
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
