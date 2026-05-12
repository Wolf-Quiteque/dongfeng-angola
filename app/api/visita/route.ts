import { NextResponse } from "next/server";

type VisitPayload = {
  nome?: string;
  email?: string;
  telefone?: string;
  modelo?: string;
  data?: string;
  hora?: string;
  mensagem?: string;
};

export async function POST(request: Request) {
  let body: VisitPayload;
  try {
    body = (await request.json()) as VisitPayload;
  } catch {
    return NextResponse.json(
      { error: "Corpo do pedido inválido" },
      { status: 400 },
    );
  }

  const required: (keyof VisitPayload)[] = [
    "nome",
    "email",
    "telefone",
    "modelo",
    "data",
    "hora",
  ];
  const missing = required.filter((k) => !body[k] || String(body[k]).trim() === "");
  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Campos obrigatórios em falta: ${missing.join(", ")}` },
      { status: 400 },
    );
  }

  // Em produção aqui enviaríamos email, criaríamos lead no CRM, etc.
  // Por agora apenas registamos no servidor.
  // eslint-disable-next-line no-console
  console.log("[visita] novo agendamento:", {
    nome: body.nome,
    email: body.email,
    telefone: body.telefone,
    modelo: body.modelo,
    data: body.data,
    hora: body.hora,
    mensagem: body.mensagem ?? "",
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
