"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
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
                    <Link href="/" aria-label="Dongfeng Angola">
                      <span style={{ fontWeight: 800, fontSize: "22px", color: "#fff" }}>
                        DONGFENG <span style={{ color: "#E50012" }}>Angola</span>
                      </span>
                    </Link>
                  </div>
                  <p className="footer-widget__about-text">
                    Representante oficial da Dongfeng em Angola. Veículos comerciais
                    robustos para o seu negócio — venda, peças e assistência técnica.
                  </p>
                  <form className="footer-widget__form" onSubmit={onSubscribe}>
                    <div className="footer-widget__input">
                      <input
                        type="email"
                        placeholder="O seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="footer-widget__btn"
                      aria-label="Subscrever"
                      disabled={newsletterStatus === "sending"}
                    >
                      <i className="icon-right-arrow" />
                    </button>
                  </form>
                  {newsletterStatus === "success" && (
                    <p
                      style={{ color: "#fff", marginTop: 10, fontSize: 13 }}
                      role="status"
                    >
                      Obrigado! A sua subscrição foi recebida.
                    </p>
                  )}
                  {newsletterStatus === "error" && (
                    <p
                      style={{ color: "#ff8a8a", marginTop: 10, fontSize: 13 }}
                      role="alert"
                    >
                      Não foi possível subscrever — tente novamente.
                    </p>
                  )}
                </div>
              </div>
              <div className="col-xl-2 col-lg-6 col-md-6">
                <div className="footer-widget__links">
                  <h4 className="footer-widget__title">Navegação</h4>
                  <ul className="footer-widget__links-list list-unstyled">
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
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="footer-widget__services">
                  <h4 className="footer-widget__title">Serviços</h4>
                  <ul className="footer-widget__links-list list-unstyled">
                    <li>
                      <Link href="/modelos?categoria=mini-caminhao">Mini Caminhões</Link>
                    </li>
                    <li>
                      <Link href="/modelos?categoria=caminhao-ligeiro">
                        Caminhões Ligeiros
                      </Link>
                    </li>
                    <li>
                      <Link href="/modelos?categoria=especial">Veículos Especiais</Link>
                    </li>
                    <li>
                      <Link href="/contacto">Peças e Assistência</Link>
                    </li>
                    <li>
                      <Link href="/agendar-visita">Test Drive</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="footer-widget__contact">
                  <h3 className="footer-widget__title">Contacto</h3>
                  <ul className="footer-widget__contact-list list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-pin" />
                      </div>
                      <p>Paragem da Mutamba,
                        <br /> via expresse, Luanda, Angola</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-call" />
                      </div>
                      <p>
                        <a href="tel:+244928283666">+244 928 283 666 / +244 926 267 111</a>
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-envelope" />
                      </div>
                      <p>
                        <a href="mailto:txtailai@yeah.net">
                          txtailai@yeah.net
                        </a>
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
                    © {new Date().getFullYear()} Dongfeng Angola. Todos os direitos
                    reservados.
                  </p>
                </div>
                <div className="site-footer__bottom-menu-box">
                  <ul className="list-unstyled site-footer__bottom-menu">
                    <li>
                      <Link href="/sobre">Termos</Link>
                    </li>
                    <li>
                      <Link href="/sobre">Privacidade</Link>
                    </li>
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
