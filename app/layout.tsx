import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import AosManager from "./_components/AosManager";
import Preloader from "./_components/Preloader";

export const metadata: Metadata = {
  title: "Dongfeng Angola — Representante oficial em Angola",
  description:
    "Representante oficial Dongfeng em Angola. Veículos comerciais, mini caminhões, caminhões ligeiros e soluções frigoríficas. Marque a sua visita.",
};

const cssAssets = [
  "/assets/css/bootstrap.min.css",
  "/assets/css/swiper.min.css",
  "/assets/css/owl.carousel.min.css",
  "/assets/css/owl.theme.default.min.css",
  "/assets/css/aos.css",
  "/assets/css/animate.min.css",
  "/assets/css/custom-animate.css",
  "/assets/css/font-awesome-all.css",
  "/assets/css/flaticon.css",
  "/assets/css/jquery.magnific-popup.css",
  "/assets/css/odometer.min.css",
  "/assets/css/nice-select.css",
  "/assets/css/jquery-ui.css",
  "/assets/css/jarallax.css",
  "/assets/css/timePicker.css",
  "/assets/css/style.css",
  "/assets/css/responsive.css",
  "/assets/css/theme-dongfeng.css",
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {cssAssets.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body>
        {/* Critical libs — must be on window early. */}
        <Script
          src="/assets/js/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/assets/js/jquery-ui.js" strategy="beforeInteractive" />
        <Script
          src="/assets/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />

        {/* Plugins — load after hydration. */}
        <Script src="/assets/js/swiper.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/aos.js" strategy="afterInteractive" />
        <Script src="/assets/js/jarallax.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/odometer.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.appear.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.nice-select.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.validate.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.circle-progress.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.ajaxchimp.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/marquee.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/typed-2.0.11.js" strategy="afterInteractive" />
        <Script src="/assets/js/wNumb.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/timePicker.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery-sidebar-content.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap/gsap.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap/ScrollTrigger.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap/SplitText.js" strategy="afterInteractive" />

        {/* Template's own init — last. */}
        <Script src="/assets/js/script.js" strategy="afterInteractive" />

        <Preloader />
        <Header />
        <Suspense fallback={null}>
          <AosManager />
        </Suspense>
        <main>{children}</main>
        <Footer />

        <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
          <span className="scroll-to-top__wrapper">
            <span className="scroll-to-top__inner" />
          </span>
          <span className="scroll-to-top__text">Topo</span>
        </a>
      </body>
    </html>
  );
}
