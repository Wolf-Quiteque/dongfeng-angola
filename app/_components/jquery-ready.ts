// Helpers to safely call jQuery plugins from useEffect.
//
// next/script's `afterInteractive` loads our plugins (owl, marquee, odometer, etc.)
// AFTER React hydration completes. A component's useEffect, however, fires as soon
// as it mounts — which can be before the plugin script has parsed. Calling
// $foo.owlCarousel(...) at that moment throws "owlCarousel is not a function".
//
// `waitForJQuery` polls until window.jQuery is available.
// `waitForJQueryPlugin` polls until window.jQuery exists AND $.fn[name] is a function.
// Both bail after ~5s to avoid wedging the page.

/* eslint-disable @typescript-eslint/no-explicit-any */

const MAX_WAIT_MS = 5000;
const INTERVAL_MS = 50;

export function waitForJQuery(): Promise<any> {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const tick = () => {
      const $ = (window as any).jQuery;
      if ($) {
        resolve($);
        return;
      }
      if (Date.now() - start > MAX_WAIT_MS) {
        reject(new Error("jQuery did not load in time"));
        return;
      }
      setTimeout(tick, INTERVAL_MS);
    };
    tick();
  });
}

export function waitForJQueryPlugin(name: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const tick = () => {
      const $ = (window as any).jQuery;
      if ($ && $.fn && typeof $.fn[name] === "function") {
        resolve($);
        return;
      }
      if (Date.now() - start > MAX_WAIT_MS) {
        reject(new Error(`jQuery plugin "${name}" did not load in time`));
        return;
      }
      setTimeout(tick, INTERVAL_MS);
    };
    tick();
  });
}

export function waitForGlobal<T = any>(name: string): Promise<T> {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const tick = () => {
      const val = (window as any)[name];
      if (val) {
        resolve(val as T);
        return;
      }
      if (Date.now() - start > MAX_WAIT_MS) {
        reject(new Error(`Global "${name}" did not load in time`));
        return;
      }
      setTimeout(tick, INTERVAL_MS);
    };
    tick();
  });
}
