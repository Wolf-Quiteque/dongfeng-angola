"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";


export default function Header() {
  const pathname = usePathname();

  useEffect(() => {
    // Re-initialize template's interactive bits after every client-side navigation:
    // sticky header, mobile menu toggler, search popup. The template binds these
    // in script.js on initial load; remounting Header on route change would lose
    // those handlers without this.
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

  return (
    <>
      <header className="main-header">
        <nav className="main-menu">
          <div className="main-menu__wrapper">
            <div className="main-menu__wrapper-inner">
              <div className="main-menu__left">
                <div className="main-menu__logo">
                  <Link href="/" aria-label="Dongfeng Angola — Início">
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        fontWeight: 800,
                        fontSize: "26px",
                        letterSpacing: "0.5px",
                        color: "#111",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "44px",
                          height: "44px",
                          borderRadius: "50%",
                          background: "#E50012",
                          color: "#fff",
                          textAlign: "center",
                          lineHeight: "44px",
                          fontSize: "20px",
                        }}
                      >
                        D
                      </span>
                      <span>
                        DONGFENG <span style={{ color: "#E50012" }}>Angola</span>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="main-menu__middle-box">
                <div className="main-menu__main-menu-box">
                  <a href="#" className="mobile-nav__toggler" aria-label="Abrir menu">
                    <i className="fa fa-bars" />
                  </a>
                  <ul className="main-menu__list">
                    <li className={isActive("/") ? "current" : ""}>
                      <Link href="/">Início</Link>
                    </li>
                    <li className={isActive("/modelos") ? "current" : ""}>
                      <Link href="/modelos">Modelos</Link>
                    </li>
                    <li className={isActive("/sobre") ? "current" : ""}>
                      <Link href="/sobre">Sobre Nós</Link>
                    </li>
                    <li className={isActive("/agendar-visita") ? "current" : ""}>
                      <Link href="/agendar-visita">Agendar Visita</Link>
                    </li>
                    <li className={isActive("/contacto") ? "current" : ""}>
                      <Link href="/contacto">Contacto</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="main-menu__right">
                <div className="main-menu__call">
                  <div className="main-menu__call-icon">
                    <i className="icon-call-3" />
                  </div>
                  <div className="main-menu__call-content">
                    <p className="main-menu__call-sub-title">Ligue-nos</p>
                    <h5 className="main-menu__call-number">
                      <a href="tel:+244928283666">+244 928 283 666</a>
                    </h5>
                  </div>
                </div>
                <div className="main-menu__nav-sidebar-icon">
                  <Link href="/agendar-visita" className="thm-btn">
                    Marcar Visita
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

      {/* Mobile nav drawer (template markup) */}
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler" />
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler">
            <i className="fa fa-times" />
          </span>
          <div className="logo-box">
            <Link href="/" aria-label="Dongfeng Angola">
              <span style={{ fontWeight: 800, color: "#fff" }}>
                DONGFENG <span style={{ color: "#E50012" }}>Angola</span>
              </span>
            </Link>
          </div>
          <ul className="mobile-nav__container main-menu__list">
            <li>
              <Link href="/">Início</Link>
            </li>
            <li>
              <Link href="/modelos">Modelos</Link>
            </li>
            <li>
              <Link href="/sobre">Sobre Nós</Link>
            </li>
            <li>
              <Link href="/agendar-visita">Agendar Visita</Link>
            </li>
            <li>
              <Link href="/contacto">Contacto</Link>
            </li>
          </ul>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope" />
              <a href="mailto:txtailai@yeah.net">txtailai@yeah.net</a>
            </li>
            <li>
              <i className="fa fa-phone-alt" />
              <a href="tel:+244928283666">+244 928 283 666</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Search popup (template markup) */}
      <div className="search-popup">
        <div className="search-popup__overlay search-toggler" />
        <div className="search-popup__content">
          <form action="#">
            <label htmlFor="search" className="sr-only">
              Pesquisar
            </label>
            <input type="text" id="search" placeholder="Pesquisar modelo..." />
            <button type="submit" aria-label="Pesquisar">
              <i className="icon-search" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
