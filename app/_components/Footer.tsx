"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { SiteContent } from "@/lib/schemas";

export default function Footer({ site }: { site: SiteContent }) {
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function onSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setNewsletterStatus("sending");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tipo: "newsletter", email }),
      });
      setNewsletterStatus(res.ok ? "success" : "error");
      if (res.ok) setEmail("");
    } catch {
      setNewsletterStatus("error");
    }
  }

  return (
    <footer className="site-footer">
      <div className="site-footer__bg" />
      <div className="site-footer__top">
        <div className="container">
          <div className="site-footer__top-inner">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="footer-widget__about">
                  <div className="footer-widget__about-logo">
                    <Link href="/" aria-label={site.brand}>
                      <Image
                        src="/img/logo.png"
                        alt={site.brand}
                        width={170}
                        height={45}
                        style={{ display: "block", height: "auto", maxWidth: "170px" }}
                      />
                    </Link>
                  </div>
                  <p className="footer-widget__about-text">{site.footerAbout}</p>
                  <form className="footer-widget__form" onSubmit={onSubscribe}>
                    <div className="footer-widget__input">
                      <input
                        type="email"
                        placeholder={site.footerNewsletterPlaceholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="footer-widget__btn"
                      aria-label={site.footerNewsletterSubmitLabel}
                      disabled={newsletterStatus === "sending"}
                    >
                      <i className="icon-right-arrow" />
                    </button>
                  </form>
                  {newsletterStatus === "success" && (
                    <p style={{ color: "#fff", marginTop: 10, fontSize: 13 }} role="status">
                      {site.footerNewsletterSuccess}
                    </p>
                  )}
                  {newsletterStatus === "error" && (
                    <p style={{ color: "#ff8a8a", marginTop: 10, fontSize: 13 }} role="alert">
                      {site.footerNewsletterError}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-xl-2 col-lg-6 col-md-6">
                <div className="footer-widget__links">
                  <h4 className="footer-widget__title">{site.footerNavTitle}</h4>
                  <ul className="footer-widget__links-list list-unstyled">
                    {site.nav.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="footer-widget__services">
                  <h4 className="footer-widget__title">{site.footerServicesTitle}</h4>
                  <ul className="footer-widget__links-list list-unstyled">
                    {site.footerServiceLinks.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="footer-widget__contact">
                  <h3 className="footer-widget__title">{site.footerContactTitle}</h3>
                  <ul className="footer-widget__contact-list list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-pin" />
                      </div>
                      <p style={{ whiteSpace: "pre-line" }}>{site.address}</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-call" />
                      </div>
                      <p>
                        <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-envelope" />
                      </div>
                      <p>
                        <a href={`mailto:${site.email}`}>{site.email}</a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="site-footer__bottom-inner">
                <div className="site-footer__copyright">
                  <p className="site-footer__copyright-text">
                    {site.copyright
                      .replace("{year}", String(new Date().getFullYear()))
                      .replace("{brand}", site.brand)}
                  </p>
                </div>
                <div className="site-footer__bottom-menu-box">
                  <ul className="list-unstyled site-footer__bottom-menu">
                    {site.footerBottomLinks.map((item) => (
                      <li key={item.label}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
