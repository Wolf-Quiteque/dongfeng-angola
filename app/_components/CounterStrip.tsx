"use client";

import { useEffect, useRef } from "react";
import { waitForGlobal } from "./jquery-ready";

const stats = [
  { icon: "icon-car", count: "20", suffix: "+", label: "Modelos disponíveis" },
  { icon: "icon-mileage", count: "100", suffix: "+", label: "Veículos entregues" },
  { icon: "icon-range", count: "18", suffix: "", label: "Províncias servidas" },
  { icon: "icon-pin-2", count: "10", suffix: "+", label: "Anos no mercado" },
];

export default function CounterStrip() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let cancelled = false;
    const observers: IntersectionObserver[] = [];

    waitForGlobal<new (opts: object) => { update: (v: number) => void }>("Odometer")
      .then((Odo) => {
        if (cancelled || !sectionRef.current) return;
        const els = sectionRef.current.querySelectorAll<HTMLElement>(".odometer");
        els.forEach((el) => {
          const target = Number(el.getAttribute("data-count") || "0");
          const inst = new Odo({ el, value: 0, format: "(,ddd)" });
          const io = new IntersectionObserver(
            (entries) => {
              entries.forEach((e) => {
                if (e.isIntersecting) {
                  inst.update(target);
                  io.disconnect();
                }
              });
            },
            { threshold: 0.3 },
          );
          io.observe(el);
          observers.push(io);
        });
      })
      .catch(() => {});

    return () => {
      cancelled = true;
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="counter-one"
      style={{
        padding: "90px 0",
        background:
          "linear-gradient(rgba(17,17,17,0.85), rgba(17,17,17,0.85)), url(/assets/images/backgrounds/page-header-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      <div className="container">
        <div className="text-center" style={{ marginBottom: 50 }}>
          <p
            style={{
              color: "#ff3344",
              textTransform: "uppercase",
              fontWeight: 700,
              letterSpacing: 2,
              marginBottom: 8,
            }}
          >
            Em números
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              color: "#fff",
              margin: 0,
            }}
          >
            A confiança das empresas <span style={{ color: "#ff3344" }}>angolanas</span>
          </h2>
        </div>
        <div className="row">
          {stats.map((s, i) => (
            <div className="col-lg-3 col-md-6" key={i}>
              <div
                style={{
                  textAlign: "center",
                  padding: "30px 16px",
                }}
                data-aos="fade-up"
                data-aos-delay={100 + i * 100}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    border: "2px solid rgba(255,255,255,0.18)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 30,
                    color: "#ff3344",
                    marginBottom: 18,
                  }}
                >
                  <span className={s.icon} />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    gap: 4,
                    marginBottom: 8,
                  }}
                >
                  <h3
                    className="odometer"
                    data-count={s.count}
                    style={{
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: "clamp(36px, 5vw, 56px)",
                      margin: 0,
                      lineHeight: 1,
                    }}
                  >
                    0
                  </h3>
                  {s.suffix && (
                    <span
                      style={{
                        color: "#ff3344",
                        fontWeight: 800,
                        fontSize: "clamp(28px, 4vw, 42px)",
                      }}
                    >
                      {s.suffix}
                    </span>
                  )}
                </div>
                <p style={{ opacity: 0.9, fontSize: 15, margin: 0 }}>{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
