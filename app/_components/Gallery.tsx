"use client";

import Link from "next/link";
import { useEffect } from "react";
import { waitForJQueryPlugin } from "./jquery-ready";

export type GalleryContent = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  linkLabel: string;
  photos: string[];
};

const defaultContent: GalleryContent = {
  eyebrow: "Galeria",
  title: "A nossa",
  titleAccent: "frota em foco",
  linkLabel: "Ver modelos",
  photos: [],
};

export default function Gallery({ content = defaultContent }: { content?: GalleryContent }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    let cancelled = false;
    waitForJQueryPlugin("owlCarousel")
      .then(($) => {
        if (cancelled) return;
        const $car = $(".gallery-one__carousel");
        if ($car.length && !$car.hasClass("owl-loaded")) {
          $car.owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 800,
            responsive: {
              0: { items: 2 },
              576: { items: 3 },
              992: { items: 4 },
              1400: { items: 5 },
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
    <section className="gallery-one" style={{ background: "#111", padding: "80px 0 90px", color: "#fff", overflow: "hidden" }}>
      <div className="container" style={{ marginBottom: 40 }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#ff3344", textTransform: "uppercase", fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>
            {content.eyebrow}
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#fff", margin: 0 }}>
            {content.title} <span style={{ color: "#ff3344" }}>{content.titleAccent}</span>
          </h2>
        </div>
      </div>
      <div className="gallery-one__carousel owl-theme owl-carousel">
        {content.photos.map((src, i) => (
          <div className="item" key={i}>
            <div className="gallery-one__single" style={{ position: "relative", overflow: "hidden" }}>
              <div className="gallery-one__img" style={{ position: "relative" }}>
                <img
                  src={src}
                  alt={`Dongfeng modelo ${i + 1}`}
                  style={{ width: "100%", height: 280, objectFit: "cover", display: "block", transition: "transform 0.6s" }}
                />
                <Link
                  href="/modelos"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(229,0,18,0.85), rgba(150,0,12,0.85))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: 28,
                    opacity: 0,
                    transition: "opacity 0.4s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0")}
                  aria-label={content.linkLabel}
                >
                  <span className="fas fa-plus" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
