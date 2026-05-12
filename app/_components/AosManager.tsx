"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { waitForGlobal } from "./jquery-ready";

/* eslint-disable @typescript-eslint/no-explicit-any */

type AosLike = {
  init: (opts: object) => void;
  refresh: () => void;
  refreshHard: () => void;
};

// AOS only gets initialized once by the template's script.js on $(document).ready.
// In a Next.js SPA, Link navigation never fires document-ready again, so freshly
// mounted [data-aos] elements stay invisible at opacity:0. This manager re-runs
// AOS.refreshHard() on every route OR query-string change so new/swapped
// elements animate in.
export default function AosManager() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // Track every URL change (path + query) so filter clicks like
  // /modelos?categoria=mini-caminhao also re-trigger AOS.
  const key = `${pathname}?${searchParams.toString()}`;

  useEffect(() => {
    let cancelled = false;
    waitForGlobal<AosLike>("AOS")
      .then((AOS) => {
        if (cancelled) return;
        AOS.init({ duration: 1000, mirror: true, once: false });
        // Run refreshHard twice — once now, and once after the next paint so
        // any elements still being attached by React are picked up.
        AOS.refreshHard();
        requestAnimationFrame(() => {
          if (!cancelled) AOS.refreshHard();
        });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [key]);

  return null;
}
