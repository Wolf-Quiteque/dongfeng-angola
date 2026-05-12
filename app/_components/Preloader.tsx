"use client";

import { useEffect, useState } from "react";

// Default = visible. We render the overlay on both SSR and the initial client
// render, so the user sees it from the very first paint (no flash of content
// first). When the window 'load' event fires (or after a safety timeout), we
// fade out and unmount.
//
// This component is mounted in the root layout, which Next.js keeps mounted
// across SPA <Link> navigations — so once it's been dismissed, it doesn't
// reappear until a real full-page reload, no sessionStorage gating needed.
export default function Preloader() {
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (hidden) return;
    let safety: number | undefined;

    const dismiss = () => {
      setFading(true);
      window.setTimeout(() => setHidden(true), 450);
    };

    if (document.readyState === "complete") {
      // Page already loaded by the time React hydrated — short delay so the
      // loader is visible for a moment before fading.
      safety = window.setTimeout(dismiss, 300);
    } else {
      window.addEventListener("load", dismiss, { once: true });
      // Fallback so a slow asset never wedges the loader.
      safety = window.setTimeout(dismiss, 1800);
    }

    return () => {
      window.removeEventListener("load", dismiss);
      if (safety !== undefined) window.clearTimeout(safety);
    };
    // We intentionally run once. Re-running on `hidden` flip is a no-op via the
    // early return, but the linter wants it acknowledged.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (hidden) return null;

  return (
    <div
      role="status"
      aria-label="A carregar"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 28,
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? "none" : "auto",
        transition: "opacity 0.4s ease",
      }}
    >
      <style>{`
        @keyframes dongfeng-spin { to { transform: rotate(360deg); } }
        @keyframes dongfeng-pulse {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(0.95); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
        }
      `}</style>
      <div style={{ position: "relative", width: 84, height: 84 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            border: "4px solid rgba(229, 0, 18, 0.15)",
            borderTopColor: "#E50012",
            borderRightColor: "#E50012",
            borderRadius: "50%",
            animation: "dongfeng-spin 0.9s linear infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "#E50012",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 800,
            fontSize: 18,
            animation: "dongfeng-pulse 1.4s ease-in-out infinite",
            transform: "translate(-50%, -50%)",
          }}
        >
          D
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            fontWeight: 800,
            fontSize: 18,
            letterSpacing: 4,
            color: "#111",
            margin: 0,
          }}
        >
          DONGFENG <span style={{ color: "#E50012" }}>ANGOLA</span>
        </p>
        <p
          style={{
            fontSize: 12,
            color: "#999",
            margin: "8px 0 0",
            textTransform: "uppercase",
            letterSpacing: 3,
          }}
        >
          A carregar...
        </p>
      </div>
    </div>
  );
}
