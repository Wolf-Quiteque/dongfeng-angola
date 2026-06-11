"use client";

import Link from "next/link";
import { useMemo, useState, useTransition } from "react";
import { saveContent, uploadCmsAsset } from "@/lib/actions";
import type { ContentKey } from "@/lib/schemas";

type Path = Array<string | number>;
type EditableValue = unknown;

const docs: { key: ContentKey; label: string; hint: string }[] = [
  { key: "site", label: "Site", hint: "Cabeçalho, rodapé, contactos e navegação" },
  { key: "home", label: "Início", hint: "Hero, secções da página inicial, FAQ e galeria" },
  { key: "cars", label: "Modelos", hint: "Catálogo de veículos, specs, preços e imagens" },
  { key: "modelos", label: "Página de Modelos", hint: "Textos e etiquetas da listagem" },
  { key: "sobre", label: "Sobre", hint: "Texto da página Sobre e chamada para ação" },
  { key: "contacto", label: "Contacto", hint: "Página de contacto e formulário" },
  { key: "visita", label: "Agendar Visita", hint: "Página de visita e formulário" },
];

const labelMap: Record<string, string> = {
  a: "Resposta",
  address: "Morada",
  addressShort: "Morada curta",
  allLabel: "Etiqueta para todos",
  body: "Texto",
  brand: "Marca",
  caixa: "Caixa",
  cabine: "Cabine",
  capa: "Imagem principal",
  cards: "Cartões",
  cars: "Modelos",
  categorias: "Categorias",
  categoria: "Categoria",
  categoriaLabel: "Etiqueta da categoria",
  combustivel: "Combustível",
  copyright: "Copyright",
  cta: "Chamada para ação",
  ctaHref: "Link do botão",
  ctaLabel: "Texto do botão",
  data: "Data",
  descricao: "Descrição",
  destaques: "Destaques",
  destaque: "Modelo em destaque",
  email: "Email",
  emptyText: "Texto sem resultados",
  eyebrow: "Etiqueta superior",
  faq: "Perguntas frequentes",
  featured: "Modelos em destaque",
  finalCta: "Chamada final",
  footerAbout: "Texto do rodapé",
  footerBottomLinks: "Links inferiores do rodapé",
  footerContactTitle: "Título dos contactos",
  footerNavTitle: "Título da navegação",
  footerNewsletterError: "Erro da newsletter",
  footerNewsletterPlaceholder: "Placeholder da newsletter",
  footerNewsletterSubmitLabel: "Botão da newsletter",
  footerNewsletterSuccess: "Sucesso da newsletter",
  footerServiceLinks: "Links de serviços",
  footerServicesTitle: "Título dos serviços",
  form: "Formulário",
  formTitle: "Título do formulário",
  galeria: "Galeria",
  gallery: "Galeria",
  heading: "Título",
  headingAccent: "Destaque do título",
  headingSuffix: "Final do título",
  heroSlides: "Slides principais",
  home: "Início",
  hora: "Hora",
  hours: "Horário",
  href: "Link",
  icon: "Ícone",
  image: "Imagem",
  imageAlt: "Texto alternativo da imagem",
  img: "Imagem",
  items: "Itens",
  label: "Etiqueta",
  linkLabel: "Etiqueta do link",
  logoAccent: "Destaque do logótipo",
  logoText: "Texto do logótipo",
  mensagem: "Mensagem",
  modelo: "Modelo",
  motor: "Motor",
  nav: "Navegação",
  nome: "Nome",
  paragraphs: "Parágrafos",
  phone: "Telefone",
  phoneHref: "Telefone para link",
  photos: "Fotos",
  preco: "Preço",
  precoLabel: "Etiqueta do preço",
  process: "Processo",
  q: "Pergunta",
  searchLabel: "Etiqueta da pesquisa",
  searchPlaceholder: "Placeholder da pesquisa",
  sectors: "Sectores",
  sending: "Texto ao enviar",
  slug: "URL do modelo",
  slidingWords: "Palavras em movimento",
  specs: "Especificações",
  submit: "Texto do botão",
  sub: "Subtítulo",
  sub2: "Texto secundário",
  subtitulo: "Subtítulo",
  success: "Mensagem de sucesso",
  text: "Texto",
  title: "Título",
  titleAccent: "Destaque do título",
  titlePre: "Início do título",
  transmissao: "Transmissão",
  values: "Valores",
  whyChoose: "Porquê escolher",
};

export function AdminNav({ active }: { active?: ContentKey }) {
  return (
    <nav style={{ display: "grid", gap: 8 }}>
      {docs.map((doc) => (
        <Link
          key={doc.key}
          href={`/admin/${doc.key}`}
          style={{
            padding: "12px 14px",
            borderRadius: 6,
            border: "1px solid #e5e5e5",
            background: active === doc.key ? "#111" : "#fff",
            color: active === doc.key ? "#fff" : "#111",
            textDecoration: "none",
          }}
        >
          <strong>{doc.label}</strong>
          <span style={{ display: "block", fontSize: 12, opacity: 0.7 }}>{doc.hint}</span>
        </Link>
      ))}
    </nav>
  );
}

function isRecord(value: unknown): value is Record<string, EditableValue> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function labelFor(key: string | number) {
  if (typeof key === "number") return `Item ${key + 1}`;
  return labelMap[key] || key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());
}

function pathKey(path: Path) {
  return path.join(".");
}

function cloneForNewItem(value: EditableValue, path: Path): EditableValue {
  const last = path[path.length - 1];
  if (Array.isArray(value)) return value.map((item) => cloneForNewItem(item, path));
  if (isRecord(value)) {
    const next: Record<string, EditableValue> = {};
    for (const [key, item] of Object.entries(value)) {
      if (key === "slug") next[key] = `novo-item-${Date.now()}`;
      else if (key === "nome" || key === "title" || key === "label") next[key] = "Novo item";
      else if (key === "categoria") next[key] = String(item || "mini-caminhao");
      else if (typeof item === "boolean") next[key] = false;
      else if (typeof item === "number") next[key] = 0;
      else if (Array.isArray(item)) next[key] = [];
      else if (isRecord(item)) next[key] = cloneForNewItem(item, [...path, key]);
      else next[key] = "";
    }
    return next;
  }
  if (typeof value === "boolean") return false;
  if (typeof value === "number") return 0;
  if (last === "href" || last === "ctaHref") return "/";
  return "";
}

function setAtPath(value: EditableValue, path: Path, nextValue: EditableValue): EditableValue {
  if (path.length === 0) return nextValue;
  const [head, ...rest] = path;
  if (Array.isArray(value)) {
    return value.map((item, index) =>
      index === head ? setAtPath(item, rest, nextValue) : item
    );
  }
  if (isRecord(value) && typeof head === "string") {
    return { ...value, [head]: setAtPath(value[head], rest, nextValue) };
  }
  return value;
}

function removeAtPath(value: EditableValue, path: Path): EditableValue {
  const [head, ...rest] = path;
  if (path.length === 1 && Array.isArray(value) && typeof head === "number") {
    return value.filter((_, index) => index !== head);
  }
  if (Array.isArray(value)) {
    return value.map((item, index) => (index === head ? removeAtPath(item, rest) : item));
  }
  if (isRecord(value) && typeof head === "string") {
    return { ...value, [head]: removeAtPath(value[head], rest) };
  }
  return value;
}

function addArrayItem(value: EditableValue, path: Path): EditableValue {
  if (path.length === 0 && Array.isArray(value)) {
    const sample = value[value.length - 1] ?? "";
    return [...value, cloneForNewItem(sample, path)];
  }
  const [head, ...rest] = path;
  if (Array.isArray(value)) {
    return value.map((item, index) => (index === head ? addArrayItem(item, rest) : item));
  }
  if (isRecord(value) && typeof head === "string") {
    return { ...value, [head]: addArrayItem(value[head], rest) };
  }
  return value;
}

function looksLikeImage(path: Path, value: string) {
  const key = String(path[path.length - 1] || "").toLowerCase();
  const parent = String(path[path.length - 2] || "").toLowerCase();
  const fullPath = path.map(String).join(".").toLowerCase();
  return (
    ["image", "img", "capa", "galeria", "photos", "photo", "logo"].some((part) =>
      key.includes(part) || parent.includes(part) || fullPath.includes(part)
    ) ||
    /\.(png|jpe?g|webp|gif|svg)$/i.test(value)
  );
}

function summaryForItem(value: EditableValue, index: number) {
  if (isRecord(value)) {
    const main =
      value.nome ||
      value.title ||
      value.label ||
      value.q ||
      value.eyebrow ||
      value.sub ||
      value.text;
    if (main) return `${index + 1}. ${String(main).slice(0, 70)}`;
  }
  if (typeof value === "string" && value) return `${index + 1}. ${value.slice(0, 70)}`;
  return `Item ${index + 1}`;
}

function shouldUseTextarea(path: Path, value: string) {
  const key = String(path[path.length - 1] || "").toLowerCase();
  const parent = String(path[path.length - 2] || "").toLowerCase();
  return (
    value.length > 90 ||
    ["text", "descricao", "description", "mensagem", "footerabout", "a", "body"].includes(key) ||
    ["paragraphs", "destaques"].includes(parent)
  );
}

function UploadField({
  onUploaded,
  disabled,
}: {
  onUploaded: (url: string) => void;
  disabled: boolean;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, startUpload] = useTransition();
  const [error, setError] = useState("");

  return (
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        disabled={disabled || uploading}
      />
      <button
        type="button"
        className="thm-btn"
        disabled={!file || disabled || uploading}
        onClick={() => {
          if (!file) return;
          setError("");
          startUpload(async () => {
            try {
              const formData = new FormData();
              formData.append("file", file);
              formData.append("prefix", "cms");
              const result = await uploadCmsAsset(formData);
              onUploaded(result.url);
            } catch (err) {
              setError(err instanceof Error ? err.message : "Não foi possível carregar");
            }
          });
        }}
      >
        {uploading ? "A carregar..." : "Carregar imagem"}
      </button>
      {error && <span style={{ color: "#7f1d1d", fontSize: 13 }}>{error}</span>}
    </div>
  );
}

function FieldEditor({
  label,
  value,
  path,
  disabled,
  onChange,
  onRemove,
  onAdd,
}: {
  label: string;
  value: EditableValue;
  path: Path;
  disabled: boolean;
  onChange: (path: Path, value: EditableValue) => void;
  onRemove?: (path: Path) => void;
  onAdd: (path: Path) => void;
}) {
  const id = useMemo(() => `field-${pathKey(path).replace(/[^a-z0-9_-]/gi, "-")}`, [path]);

  if (Array.isArray(value)) {
    return (
      <section style={{ border: "1px solid #e5e5e5", borderRadius: 8, padding: 18, background: "#fff" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center", marginBottom: 14 }}>
          <h2 style={{ fontSize: 20, margin: 0 }}>{label}</h2>
          <button type="button" className="thm-btn" onClick={() => onAdd(path)} disabled={disabled}>
            Adicionar item
          </button>
        </div>
        <div style={{ display: "grid", gap: 14 }}>
          {value.map((item, index) => (
            <details
              key={index}
              open={path.length === 0}
              style={{ border: "1px solid #eee", borderRadius: 8, padding: 14, background: "#fafafa" }}
            >
              <summary
                style={{
                  cursor: "pointer",
                  fontWeight: 800,
                  listStyle: "revert",
                }}
              >
                {summaryForItem(item, index)}
              </summary>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: 12, alignItems: "center", margin: "12px 0" }}>
                <button
                  type="button"
                  onClick={() => onRemove?.([...path, index])}
                  disabled={disabled}
                  style={{ border: "1px solid #ddd", background: "#fff", borderRadius: 6, padding: "8px 10px", cursor: "pointer" }}
                >
                  Remover
                </button>
              </div>
              <div style={{ display: "grid", gap: 12 }}>
              <FieldEditor
                label={labelFor(index)}
                value={item}
                path={[...path, index]}
                disabled={disabled}
                onChange={onChange}
                onRemove={onRemove}
                onAdd={onAdd}
              />
              </div>
            </details>
          ))}
        </div>
      </section>
    );
  }

  if (isRecord(value)) {
    return (
      <section style={{ border: "1px solid #e5e5e5", borderRadius: 8, padding: 18, background: "#fff" }}>
        <h2 style={{ fontSize: path.length ? 18 : 22, margin: "0 0 16px" }}>{label}</h2>
        <div style={{ display: "grid", gap: 16 }}>
          {Object.entries(value).map(([key, item]) => (
            <FieldEditor
              key={key}
              label={labelFor(key)}
              value={item}
              path={[...path, key]}
              disabled={disabled}
              onChange={onChange}
              onRemove={onRemove}
              onAdd={onAdd}
            />
          ))}
        </div>
      </section>
    );
  }

  if (typeof value === "boolean") {
    return (
      <label style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 700 }}>
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(path, e.target.checked)}
          disabled={disabled}
        />
        {label}
      </label>
    );
  }

  if (typeof value === "number") {
    return (
      <label htmlFor={id} style={{ display: "grid", gap: 6, fontWeight: 700 }}>
        {label}
        <input
          id={id}
          type="number"
          value={value}
          onChange={(e) => onChange(path, Number(e.target.value))}
          disabled={disabled}
          style={{ padding: 12, border: "1px solid #ddd", borderRadius: 6 }}
        />
      </label>
    );
  }

  const textValue = value === null ? "" : String(value);
  const imageField = looksLikeImage(path, textValue);

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <label htmlFor={id} style={{ display: "grid", gap: 6, fontWeight: 700 }}>
        {label}
        {String(path[path.length - 1]) === "categoria" ? (
          <select
            id={id}
            value={textValue}
            onChange={(e) => onChange(path, e.target.value)}
            disabled={disabled}
            style={{ padding: 12, border: "1px solid #ddd", borderRadius: 6 }}
          >
            <option value="mini-caminhao">Mini caminhão</option>
            <option value="caminhao-ligeiro">Caminhão ligeiro</option>
            <option value="especial">Especial</option>
          </select>
        ) : shouldUseTextarea(path, textValue) ? (
          <textarea
            id={id}
            value={textValue}
            onChange={(e) => onChange(path, e.target.value)}
            disabled={disabled}
            rows={4}
            style={{ padding: 12, border: "1px solid #ddd", borderRadius: 6, resize: "vertical" }}
          />
        ) : (
          <input
            id={id}
            type={String(path[path.length - 1]).toLowerCase().includes("email") ? "email" : "text"}
            value={textValue}
            onChange={(e) => onChange(path, e.target.value)}
            disabled={disabled}
            style={{ padding: 12, border: "1px solid #ddd", borderRadius: 6 }}
          />
        )}
      </label>
      {imageField && (
        <div style={{ display: "grid", gap: 10 }}>
          {textValue && (
            <img
              src={textValue}
              alt=""
              style={{ width: 180, maxWidth: "100%", height: 110, objectFit: "cover", borderRadius: 6, border: "1px solid #e5e5e5" }}
            />
          )}
          <UploadField disabled={disabled} onUploaded={(url) => onChange(path, url)} />
        </div>
      )}
    </div>
  );
}

export default function JsonEditor({
  contentKey,
  data,
}: {
  contentKey: ContentKey;
  data: unknown;
}) {
  const doc = docs.find((item) => item.key === contentKey);
  const [draft, setDraft] = useState<EditableValue>(() => data as EditableValue);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error">("success");
  const [isPending, startTransition] = useTransition();

  function updateField(path: Path, value: EditableValue) {
    setDraft((current: EditableValue) => setAtPath(current, path, value));
  }

  function removeField(path: Path) {
    setDraft((current: EditableValue) => removeAtPath(current, path));
  }

  function addField(path: Path) {
    setDraft((current: EditableValue) => addArrayItem(current, path));
  }

  function onSave() {
    setMessage("");
    startTransition(async () => {
      try {
        await saveContent(contentKey, draft);
        setMessageType("success");
        setMessage("Guardado. A cache do site público foi atualizada.");
      } catch (error) {
        setMessageType("error");
        setMessage(error instanceof Error ? error.message : "Não foi possível guardar");
      }
    });
  }

  return (
    <div style={{ display: "grid", gap: 18 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 14,
          flexWrap: "wrap",
        }}
      >
        <div>
          <h1 style={{ fontSize: 28, margin: 0 }}>Editar {doc?.label || contentKey}</h1>
          <p style={{ margin: "6px 0 0", color: "#666" }}>{doc?.hint}</p>
        </div>
        <button type="button" onClick={onSave} className="thm-btn" disabled={isPending}>
          {isPending ? "A guardar..." : "Guardar alterações"}
        </button>
      </div>

      <FieldEditor
        label={doc?.label || labelFor(contentKey)}
        value={draft}
        path={[]}
        disabled={isPending}
        onChange={updateField}
        onRemove={removeField}
        onAdd={addField}
      />

      {message && (
        <p
          role="status"
          style={{
            margin: 0,
            padding: "12px 14px",
            borderRadius: 6,
            background: messageType === "success" ? "#effaf2" : "#fff1f1",
            color: messageType === "success" ? "#14532d" : "#7f1d1d",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}
