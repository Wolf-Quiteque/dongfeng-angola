"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error || "Falha no envio");
      }
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erro inesperado");
    }
  }

  return (
    <form className="contact-page__form" onSubmit={onSubmit} noValidate>
      <div className="row">
        <div className="col-md-6">
          <div className="contact-page__input-box">
            <input type="text" name="nome" placeholder="Nome" required />
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact-page__input-box">
            <input type="email" name="email" placeholder="Email" required />
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact-page__input-box">
            <input type="tel" name="telefone" placeholder="Telefone" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact-page__input-box">
            <input type="text" name="assunto" placeholder="Assunto" required />
          </div>
        </div>
        <div className="col-md-12">
          <div className="contact-page__input-box">
            <textarea
              name="mensagem"
              placeholder="A sua mensagem"
              rows={6}
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="contact-page__btn-box">
            <button
              type="submit"
              className="thm-btn"
              disabled={status === "sending"}
            >
              {status === "sending" ? "A enviar..." : "Enviar Mensagem"}
              <span className="fas fa-arrow-right" />
            </button>
          </div>
        </div>
      </div>

      {status === "success" && (
        <div
          role="status"
          style={{
            marginTop: 20,
            padding: "16px 20px",
            background: "#f0fdf4",
            border: "1px solid #86efac",
            color: "#14532d",
            borderRadius: 6,
          }}
        >
          Mensagem enviada com sucesso. Iremos responder em breve.
        </div>
      )}
      {status === "error" && (
        <div
          role="alert"
          style={{
            marginTop: 20,
            padding: "16px 20px",
            background: "#fef2f2",
            border: "1px solid #fca5a5",
            color: "#7f1d1d",
            borderRadius: 6,
          }}
        >
          Não foi possível enviar — {errorMsg || "tente novamente"}.
        </div>
      )}
    </form>
  );
}
