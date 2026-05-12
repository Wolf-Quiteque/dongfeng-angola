"use client";

import { useEffect, useRef } from "react";
import { waitForJQueryPlugin } from "./jquery-ready";

const words = [
  { text: "Robustez", icon: "icon-jeep" },
  { text: "Fiabilidade", icon: "icon-cuv" },
  { text: "Dongfeng", icon: "icon-jeep" },
  { text: "Angola", icon: "icon-cuv" },
  { text: "Comerciais", icon: "icon-jeep" },
  { text: "Frota 2026", icon: "icon-cuv" },
];

export default function SlidingText() {
  const ulRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let cancelled = false;
    waitForJQueryPlugin("marquee")
      .then(($) => {
        if (cancelled || !ulRef.current) return;
        const $el = $(ulRef.current);
        // Two callers try to init this element: this useEffect AND the template's
        // script.js. Each call wraps content in .js-marquee-wrapper, so running
        // twice produces nested wrappers and the "stacked rows" artifact.
        // Guard 1: skip if already wrapped (either by us earlier, or by script.js).
        // Guard 2: drop the marquee_mode class once initialized so the OTHER caller's
        // selector misses on its turn.
        if ($el.find("> .js-marquee-wrapper").length === 0) {
          $el.marquee({
            speed: 30,
            gap: 0,
            delayBeforeStart: 0,
            direction: "left",
            duplicated: true,
            startVisible: true,
            pauseOnHover: false,
          });
        }
        $el.removeClass("marquee_mode");
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      className="sliding-text-one"
      style={{
        padding: "14px 0",
        overflow: "hidden",
      }}
    >
      <div className="sliding-text-one__wrap">
        <ul
          ref={ulRef}
          className="sliding-text__list list-unstyled marquee_mode"
          style={{
            display: "flex",
            flexWrap: "nowrap",
            whiteSpace: "nowrap",
            margin: 0,
            padding: 0,
            listStyle: "none",
            alignItems: "center",
          }}
        >
          {words.map((w, i) => (
            <li key={i}>
              <h2 data-hover={w.text} className="sliding-text__title">
                {w.text} <span className={w.icon} />
              </h2>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
