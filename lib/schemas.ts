import { z } from "zod";

export const JsonValueSchema: z.ZodType<JsonValue> = z.lazy(() =>
  z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.null(),
    z.array(JsonValueSchema),
    z.record(z.string(), JsonValueSchema),
  ])
);

export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

export const SiteSchema = z.object({
  brand: z.string(),
  logoText: z.string(),
  logoAccent: z.string(),
  phone: z.string(),
  phoneHref: z.string(),
  email: z.string(),
  address: z.string(),
  addressShort: z.string(),
  hours: z.array(z.string()),
  nav: z.array(z.object({ label: z.string(), href: z.string() })),
  headerCallLabel: z.string(),
  headerCtaLabel: z.string(),
  footerAbout: z.string(),
  footerNewsletterPlaceholder: z.string(),
  footerNewsletterSubmitLabel: z.string(),
  footerNewsletterSuccess: z.string(),
  footerNewsletterError: z.string(),
  footerNavTitle: z.string(),
  footerServicesTitle: z.string(),
  footerContactTitle: z.string(),
  footerServiceLinks: z.array(z.object({ label: z.string(), href: z.string() })),
  footerBottomLinks: z.array(z.object({ label: z.string(), href: z.string() })),
  copyright: z.string(),
  searchLabel: z.string(),
  searchPlaceholder: z.string(),
});

export const CarSchema = z.object({
  slug: z.string(),
  nome: z.string(),
  subtitulo: z.string(),
  categoria: z.enum(["mini-caminhao", "caminhao-ligeiro", "especial"]),
  categoriaLabel: z.string(),
  precoLabel: z.string(),
  preco: z.string(),
  destaque: z.boolean(),
  capa: z.string(),
  galeria: z.array(z.string()),
  descricao: z.string(),
  specs: z.object({
    ano: z.string(),
    cabine: z.string(),
    combustivel: z.string(),
    transmissao: z.string(),
    cargaUtil: z.string(),
    motor: z.string(),
    lugares: z.string(),
    caixa: z.string(),
  }),
  destaques: z.array(z.string()),
});

export const CarsSchema = z.object({
  categorias: z.array(
    z.object({
      value: z.enum(["mini-caminhao", "caminhao-ligeiro", "especial"]),
      label: z.string(),
    })
  ),
  cars: z.array(CarSchema),
});

export const contentSchemas = {
  site: SiteSchema,
  home: JsonValueSchema,
  sobre: JsonValueSchema,
  modelos: JsonValueSchema,
  contacto: JsonValueSchema,
  visita: JsonValueSchema,
  cars: CarsSchema,
} as const;

export type ContentKey = keyof typeof contentSchemas;
export type SiteContent = z.infer<typeof SiteSchema>;
export type CarsContent = z.infer<typeof CarsSchema>;
export type Car = z.infer<typeof CarSchema>;
