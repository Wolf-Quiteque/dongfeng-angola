"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import type { SiteContent } from "@/lib/schemas";

export default function Header({ site }: { site: SiteContent }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const $ = (window as unknown as { jQuery?: any }).jQuery;
    if (!$) return;

    const $body = $("body");
    const $html = $("html");

    $(".mobile-nav__toggler")
      .off("click")
      .on("click", (e: Event) => {
        e.preventDefault();
        $body.toggleClass("locked");
        $(".mobile-nav__wrapper").toggleClass("expanded");
      });

    $(".mobile-nav__close, .mobile-nav__overlay")
      .off("click")
      .on("click", (e: Event) => {
        e.preventDefault();
        $body.removeClass("locked");
        $(".mobile-nav__wrapper").removeClass("expanded");
      });

    $(".search-toggler")
      .off("click")
      .on("click", (e: Event) => {
        e.preventDefault();
        $body.toggleClass("locked");
        $html.toggleClass("locked");
        $(".search-popup").toggleClass("active");
      });
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  const logoSrc = "/img/logo.png";

  return (
    <>
      <header className="main-header">
        <nav className="main-menu">
          <div className="main-menu__wrapper">
            <div className="main-menu__wrapper-inner">
              <div className="main-menu__left">
                <div className="main-menu__logo">
                  <Link href="/" aria-label={`${site.brand} - Início`}>
                    <Image
                      src={logoSrc}
                      alt={site.brand}
                      width={190}
                      height={50}
                      style={{ display: "block", height: "auto", maxWidth: "190px" }}
                    />
                  </Link>
                </div>
              </div>
              <div className="main-menu__middle-box">
                <div className="main-menu__main-menu-box">
                  <a href="#" className="mobile-nav__toggler" aria-label="Abrir menu">
                    <i className="fa fa-bars" />
                  </a>
                  <ul className="main-menu__list">
                    {site.nav.map((item) => (
                      <li key={item.href} className={isActive(item.href) ? "current" : ""}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="main-menu__right">
                <div className="main-menu__call">
                  <div className="main-menu__call-icon">
                    <i className="icon-call-3" />
                  </div>
                  <div className="main-menu__call-content">
                    <p className="main-menu__call-sub-title">{site.headerCallLabel}</p>
                    <h5 className="main-menu__call-number">
                      <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
                    </h5>
                  </div>
                </div>
                <div className="main-menu__nav-sidebar-icon">
                  <Link href="/agendar-visita" className="thm-btn">
                    {site.headerCtaLabel}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content" />
      </div>

      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler" />
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler">
            <i className="fa fa-times" />
          </span>
          <div className="logo-box">
            <Link href="/" aria-label={site.brand}>
              <Image
                src={logoSrc}
                alt={site.brand}
                width={160}
                height={42}
                style={{ display: "block", height: "auto", maxWidth: "160px" }}
              />
            </Link>
          </div>
          <ul className="mobile-nav__container main-menu__list">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <i className="fa fa-phone-alt" />
              <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="search-popup">
        <div className="search-popup__overlay search-toggler" />
        <div className="search-popup__content">
          <form action="/modelos">
            <label htmlFor="search" className="sr-only">
              {site.searchLabel}
            </label>
            <input type="text" id="search" name="q" placeholder={site.searchPlaceholder} />
            <button type="submit" aria-label={site.searchLabel}>
              <i className="icon-search" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
