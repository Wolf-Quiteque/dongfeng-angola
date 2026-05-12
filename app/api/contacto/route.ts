import { NextResponse } from "next/server";

type ContactPayload = {
  tipo?: string;
  nome?: string;
  email?: string;
  telefone?: string;
  assunto?: string;
  mensagem?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "Corpo do pedido inválido" },
      { status: 400 },
    );
  }

  // Newsletter — só email é obrigatório.
  if (body.tipo === "newsletter") {
    if (!body.email || body.email.trim() === "") {
      return NextResponse.json(
        { error: "Email é obrigatório" },
        { status: 400 },
      );
    }
    // eslint-disable-next-line no-console
    console.log("[newsletter] subscrição:", {
      email: body.email,
      receivedAt: new Date().toISOString(),
    });
    return NextResponse.json({ ok: true });
  }

  // Formulário de contacto
  const required: (keyof ContactPayload)[] = ["nome", "email", "assunto", "mensagem"];
  const missing = required.filter((k) => !body[k] || String(body[k]).trim() === "");
  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Campos obrigatórios em falta: ${missing.join(", ")}` },
      { status: 400 },
    );
  }

  // eslint-disable-next-line no-console
  console.log("[contacto] nova mensagem:", {
    nome: body.nome,
    email: body.email,
    telefone: body.telefone ?? "",
    assunto: body.assunto,
    mensagem: body.mensagem,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
