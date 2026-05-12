// Catálogo de modelos Dongfeng comercializados em Angola.
// Especificações são placeholders editáveis — confirmar com a ficha técnica de fábrica.

export type CarCategory = "mini-caminhao" | "caminhao-ligeiro" | "especial";

export type CarSpecs = {
  ano: string;
  cabine: string;
  combustivel: string;
  transmissao: string;
  cargaUtil: string;
  motor: string;
  lugares: string;
  caixa: string;
};

export type Car = {
  slug: string;
  nome: string;
  subtitulo: string;
  categoria: CarCategory;
  categoriaLabel: string;
  precoLabel: string;
  preco: string;
  destaque: boolean;
  capa: string;
  galeria: string[];
  descricao: string;
  specs: CarSpecs;
  destaques: string[];
};

export const categorias: { value: CarCategory; label: string }[] = [
  { value: "mini-caminhao", label: "Mini Caminhões" },
  { value: "caminhao-ligeiro", label: "Caminhões Ligeiros" },
  { value: "especial", label: "Especiais" },
];

export const cars: Car[] = [
  {
    slug: "t20-cabine-simples-caixa",
    nome: "Dongfeng T20 — Cabine Simples Caixa",
    subtitulo: "Mini caminhão de carga com caixa fechada para transporte urbano",
    categoria: "mini-caminhao",
    categoriaLabel: "Mini Caminhão",
    precoLabel: "Desde",
    preco: "Sob consulta",
    destaque: true,
    capa: "/img/cars/t20-box-01.jpeg",
    galeria: ["/img/cars/t20-box-01.jpeg", "/img/cars/t20-box-02.jpeg"],
    descricao:
      "O Dongfeng T20 com caixa fechada é a solução ideal para a logística urbana em Angola. Compacto, económico e robusto, foi desenhado para entregas diárias na cidade com excelente visibilidade e baixo consumo. A caixa fechada protege a sua carga das intempéries e oferece máxima segurança.",
    specs: {
      ano: "2026",
      cabine: "Simples (2 lugares)",
      combustivel: "Gasolina",
      transmissao: "Manual 5 velocidades",
      cargaUtil: "1.000 kg",
      motor: "1.5L",
      lugares: "2",
      caixa: "Fechada",
    },
    destaques: [
      "Caixa fechada totalmente fechada para proteção de carga",
      "Direção assistida",
      "Ar condicionado de série",
      "Ideal para distribuição em centros urbanos",
    ],
  },
  {
    slug: "t20-cabine-simples-aberta",
    nome: "Dongfeng T20 — Cabine Simples Aberta",
    subtitulo: "Mini caminhão de caixa aberta para cargas variadas",
    categoria: "mini-caminhao",
    categoriaLabel: "Mini Caminhão",
    precoLabel: "Desde",
    preco: "Sob consulta",
    destaque: true,
    capa: "/img/cars/t20-pickup-01.jpeg",
    galeria: ["/img/cars/t20-pickup-01.jpeg", "/img/cars/t20-pickup-02.jpeg"],
    descricao:
      "O Dongfeng T20 com caixa aberta oferece a versatilidade de que o seu negócio precisa. Perfeito para o transporte de materiais de construção, mercadorias variadas ou equipamentos. Carga e descarga fáceis com painéis laterais rebatíveis.",
    specs: {
      ano: "2026",
      cabine: "Simples (2 lugares)",
      combustivel: "Gasolina",
      transmissao: "Manual 5 velocidades",
      cargaUtil: "1.000 kg",
      motor: "1.5L",
      lugares: "2",
      caixa: "Aberta com laterais rebatíveis",
    },
    destaques: [
      "Painéis laterais rebatíveis para carga/descarga rápida",
      "Plataforma reforçada",
      "Pneus de utilização mista",
      "Excelente relação qualidade/preço",
    ],
  },
  {
    slug: "t20-cabine-dupla",
    nome: "Dongfeng T20 — Cabine Dupla",
    subtitulo: "5 lugares e caixa de carga aberta para equipas em obra",
    categoria: "mini-caminhao",
    categoriaLabel: "Mini Caminhão",
    precoLabel: "Desde",
    preco: "Sob consulta",
    destaque: true,
    capa: "/img/cars/t20-cabine-dupla-01.jpeg",
    galeria: [
      "/img/cars/t20-cabine-dupla-01.jpeg",
      "/img/cars/t20-cabine-dupla-02.jpeg",
      "/img/cars/t20-cabine-dupla-03.jpeg",
      "/img/cars/t20-cabine-dupla-04.jpeg",
      "/img/cars/t20-cabine-dupla-05.jpeg",
    ],
    descricao:
      "A versão de cabine dupla do Dongfeng T20 acomoda até 5 ocupantes mantendo a capacidade de carga aberta. Perfeito para empresas que precisam transportar equipas e materiais em simultâneo — empresas de construção, manutenção, agricultura e serviços.",
    specs: {
      ano: "2026",
      cabine: "Dupla (5 lugares)",
      combustivel: "Gasolina",
      transmissao: "Manual 5 velocidades",
      cargaUtil: "800 kg",
      motor: "1.5L",
      lugares: "5",
      caixa: "Aberta",
    },
    destaques: [
      "5 lugares confortáveis com cintos de 3 pontos",
      "Caixa aberta para transporte de ferramentas",
      "Vidros eléctricos dianteiros",
      "Bloqueio centralizado",
    ],
  },
  {
    slug: "t20-cabine-dupla-caixa",
    nome: "Dongfeng T20 — Cabine Dupla com Caixa",
    subtitulo: "Cabine dupla com caixa de carga fechada — equipas + mercadoria protegida",
    categoria: "mini-caminhao",
    categoriaLabel: "Mini Caminhão",
    precoLabel: "Desde",
    preco: "Sob consulta",
    destaque: false,
    capa: "/img/cars/t20-cabine-dupla-box-01.jpeg",
    galeria: ["/img/cars/t20-cabine-dupla-box-01.jpeg"],
    descricao:
      "Combina os benefícios da cabine dupla — 5 lugares — com uma caixa fechada para proteger a sua carga. Solução completa para serviços técnicos, distribuição farmacêutica e qualquer atividade que exija deslocar pessoal e mercadoria com segurança.",
    specs: {
      ano: "2026",
      cabine: "Dupla (5 lugares)",
      combustivel: "Gasolina",
      transmissao: "Manual 5 velocidades",
      cargaUtil: "750 kg",
      motor: "1.5L",
      lugares: "5",
      caixa: "Fechada",
    },
    destaques: [
      "Cabine dupla 5 lugares + caixa fechada",
      "Carga protegida das intempéries",
      "Versão polivalente",
    ],
  },
  {
    slug: "captain-t",
    nome: "Dongfeng Captain T",
    subtitulo: "Caminhão ligeiro com excelente capacidade de carga e robustez",
    categoria: "caminhao-ligeiro",
    categoriaLabel: "Caminhão Ligeiro",
    precoLabel: "Desde",
    preco: "16.500.000 AOA",
    destaque: true,
    capa: "/img/cars/captain-t-01.jpeg",
    galeria: ["/img/cars/captain-t-01.jpeg", "/img/cars/captain-w-01.jpeg"],
    descricao:
      "O Dongfeng Captain T é a referência da marca no segmento de caminhões ligeiros em Angola. Combina motor potente, suspensão reforçada e cabine confortável — feito para o trabalho intensivo em qualquer condição de estrada. Ideal para empresas que precisam de fiabilidade no dia a dia.",
    specs: {
      ano: "2026",
      cabine: "Simples",
      combustivel: "Diesel",
      transmissao: "Manual 6 velocidades",
      cargaUtil: "2.500 kg",
      motor: "2.5L Diesel",
      lugares: "3",
      caixa: "Aberta / Fechada (sob pedido)",
    },
    destaques: [
      "Motor diesel robusto 2.5L",
      "Suspensão de molas reforçadas",
      "Excelente para Angola — testado em estradas locais",
      "Apoio técnico e peças disponíveis na concessionária",
    ],
  },
  {
    slug: "captain-frigorifico",
    nome: "Dongfeng Captain — Frigorífico",
    subtitulo: "Caminhão refrigerado para cadeia de frio e transporte alimentar",
    categoria: "especial",
    categoriaLabel: "Especial — Frigorífico",
    precoLabel: "Desde",
    preco: "Sob consulta",
    destaque: true,
    capa: "/img/cars/captain-frigorifico-01.jpeg",
    galeria: [
      "/img/cars/captain-frigorifico-01.jpeg",
      "/img/cars/captain-frigorifico-02.jpeg",
      "/img/cars/captain-frigorifico-03.jpeg",
      "/img/cars/captain-frigorifico-04.jpeg",
    ],
    descricao:
      "Versão refrigerada do Dongfeng Captain, equipada com unidade Huasheng Thermo King. Mantém a cadeia de frio para transporte de produtos alimentares, farmacêuticos e perecíveis. Caixa isotérmica com isolamento eficiente — essencial para distribuidores em Luanda e demais províncias.",
    specs: {
      ano: "2026",
      cabine: "Simples",
      combustivel: "Diesel",
      transmissao: "Manual 6 velocidades",
      cargaUtil: "2.000 kg",
      motor: "2.5L Diesel",
      lugares: "3",
      caixa: "Frigorífica isotérmica",
    },
    destaques: [
      "Unidade frigorífica Huasheng Thermo King",
      "Caixa isotérmica de elevada eficiência",
      "Ideal para cadeia de frio alimentar e farmacêutica",
      "Conformidade com requisitos de transporte de perecíveis",
    ],
  },
  {
    slug: "dfac-light-truck",
    nome: "Dongfeng DFAC — Caminhão Ligeiro",
    subtitulo: "Maior capacidade de carga para distribuição de média escala",
    categoria: "caminhao-ligeiro",
    categoriaLabel: "Caminhão Ligeiro",
    precoLabel: "Desde",
    preco: "Sob consulta",
    destaque: true,
    capa: "/img/cars/dfac-light-truck-01.jpeg",
    galeria: ["/img/cars/dfac-light-truck-01.jpeg", "/img/cars/dfac-light-truck-02.jpeg"],
    descricao:
      "O DFAC Light Truck é o passo seguinte na linha comercial Dongfeng — caixa de maior volume, motor mais potente e maior capacidade de carga. Indicado para distribuição em rotas mais longas, entrega de mobiliário, mudanças e cargas industriais.",
    specs: {
      ano: "2026",
      cabine: "Simples",
      combustivel: "Diesel",
      transmissao: "Manual 6 velocidades",
      cargaUtil: "4.000 kg",
      motor: "3.0L Diesel",
      lugares: "3",
      caixa: "Fechada de grande volume",
    },
    destaques: [
      "Caixa fechada de grande volume",
      "Motor diesel 3.0L com binário elevado",
      "Travões hidráulicos reforçados",
      "Estrutura de chassis preparada para uso intensivo",
    ],
  },
];

export function getCarBySlug(slug: string): Car | undefined {
  return cars.find((c) => c.slug === slug);
}

export function getFeaturedCars(): Car[] {
  return cars.filter((c) => c.destaque);
}
