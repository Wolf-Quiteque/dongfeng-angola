"use client";

import Link from "next/link";
import { useEffect } from "react";
import { waitForJQueryPlugin } from "./jquery-ready";

const slides = [
  {
    img: "/img/cars/captain-t-01.jpeg",
    sub: "Representante oficial em Angola",
    titlePre: "Dongfeng",
    titleAccent: "Captain T",
    sub2: "Robustez para o seu negócio",
    cta: "Ver Modelos",
    href: "/modelos",
  },
  {
    img: "/img/cars/dfac-light-truck-01.jpeg",
    sub: "Linha comercial 2026",
    titlePre: "Caminhões",
    titleAccent: "Ligeiros",
    sub2: "Mais carga, menos consumo",
    cta: "Marcar Visita",
    href: "/agendar-visita",
  },
  {
    img: "/img/cars/captain-frigorifico-01.jpeg",
    sub: "Cadeia de frio",
    titlePre: "Soluções",
    titleAccent: "Frigoríficas",
    sub2: "Transporte alimentar e farmacêutico",
    cta: "Saber Mais",
    href: "/modelos?categoria=especial",
  },
];

export default function HeroSlider() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    let cancelled = false;

    waitForJQueryPlugin("owlCarousel")
      .then(($) => {
        if (cancelled) return;
        const $carousel = $(".main-slider__carousel");
        if ($carousel.length && !$carousel.hasClass("owl-loaded")) {
          $carousel.owlCarousel({
            loop: true,
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            nav: true,
            autoplay: true,
            autoplayTimeout: 5500,
            smartSpeed: 700,
            margin: 0,
            items: 1,
            navText: [
              '<span class="fa fa-chevron-left"></span>',
              '<span class="fa fa-chevron-right"></span>',
            ],
            dots: true,
          });
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="main-slider" style={{ position: "relative" }}>
      <div className="main-slider__carousel owl-carousel owl-theme">
        {slides.map((s, i) => (
          <div className="item" key={i}>
            <div
              className="main-slider__bg"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(17,17,17,0.75) 0%, rgba(17,17,17,0.4) 35%, rgba(17,17,17,0.1) 65%, transparent 100%), url(${s.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "92vh",
              }}
            />
            <div className="container">
              <div className="main-slider__content">
                <div className="main-slider__sub-title-box">
                  <p className="main-slider__sub-title">{s.sub}</p>
                </div>
                <h2 className="main-slider__title">
                  {s.titlePre} <span>{s.titleAccent}</span>
                </h2>
                <p className="main-slider__sub-title-two">{s.sub2}</p>
                <div className="main-slider__btn-and-video-box">
                  <div className="main-slider__btn-box">
                    <Link href={s.href} className="thm-btn">
                      {s.cta}
                      <span className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
