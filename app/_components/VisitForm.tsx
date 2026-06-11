"use client";

import { useState } from "react";
import type { Car } from "@/lib/schemas";

type Status = "idle" | "sending" | "success" | "error";

export type VisitFormLabels = {
  nome: string;
  email: string;
  telefone: string;
  modelo: string;
  data: string;
  hora: string;
  mensagem: string;
  sending: string;
  submit: string;
  success: string;
  errorPrefix: string;
  errorFallback: string;
};

const defaultLabels: VisitFormLabels = {
  nome: "Nome completo",
  email: "Email",
  telefone: "Telefone (+244 ...)",
  modelo: "Modelo de interesse",
  data: "Data",
  hora: "Hora",
  mensagem: "Notas adicionais (opcional)",
  sending: "A enviar...",
  submit: "Marcar Visita",
  success: "Pedido recebido! Iremos entrar em contacto para confirmar a sua visita.",
  errorPrefix: "Não foi possível enviar",
  errorFallback: "tente novamente",
};

export default function VisitForm({
  cars,
  defaultModel,
  labels = defaultLabels,
}: {
  cars: Car[];
  defaultModel?: string;
  labels?: VisitFormLabels;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/visita", {
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
    <form className="visit-form contact-page__form" onSubmit={onSubmit} noValidate>
      <div className="row">
        <div className="col-md-6">
          <div className="contact-page__input-box">
            <input type="text" name="nome" placeholder={labels.nome} required />
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact-page__input-box">
            <input type="email" name="email" placeholder={labels.email} required />
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact-page__input-box">
            <input type="tel" name="telefone" placeholder={labels.telefone} required />
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact-page__input-box">
            <select name="modelo" defaultValue={defaultModel ?? ""} required aria-label={labels.modelo}>
              <option value="" disabled>
                {labels.modelo}
              </option>
              {cars.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.nome}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact-page__input-box">
            <input type="date" name="data" required aria-label={labels.data} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact-page__input-box">
            <input type="time" name="hora" required aria-label={labels.hora} />
          </div>
        </div>
        <div className="col-md-12">
          <div className="contact-page__input-box">
            <textarea name="mensagem" placeholder={labels.mensagem} rows={4} />
          </div>
        </div>
        <div className="col-md-12">
          <div className="contact-page__btn-box">
            <button type="submit" className="thm-btn" disabled={status === "sending"}>
              {status === "sending" ? labels.sending : labels.submit}
              <span className="fas fa-arrow-right" />
            </button>
          </div>
        </div>
      </div>

      {status === "success" && (
        <div role="status" style={{ marginTop: 20, padding: "16px 20px", background: "#f0fdf4", border: "1px solid #86efac", color: "#14532d", borderRadius: 6 }}>
          {labels.success}
        </div>
      )}
      {status === "error" && (
        <div role="alert" style={{ marginTop: 20, padding: "16px 20px", background: "#fef2f2", border: "1px solid #fca5a5", color: "#7f1d1d", borderRadius: 6 }}>
          {labels.errorPrefix} - {errorMsg || labels.errorFallback}.
        </div>
      )}
    </form>
  );
}
