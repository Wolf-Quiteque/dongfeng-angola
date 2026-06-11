import type { JsonValue } from "@/lib/schemas";

export const home = {
  heroSlides: [
    {
      img: "/img/cars/captain-t-01.jpeg",
      sub: "Representante oficial em Angola",
      titlePre: "Dongfeng",
      titleAccent: "Captain T",
      sub2: "Robustez para o seu negócio",
      cta: "Ver Modelos",
      href: "/modelos",
    },
    {
      img: "/img/cars/dfac-light-truck-01.jpeg",
      sub: "Linha comercial 2026",
      titlePre: "Caminhões",
      titleAccent: "Ligeiros",
      sub2: "Mais carga, menos consumo",
      cta: "Marcar Visita",
      href: "/agendar-visita",
    },
    {
      img: "/img/cars/captain-frigorifico-01.jpeg",
      sub: "Cadeia de frio",
      titlePre: "Soluções",
      titleAccent: "Frigoríficas",
      sub2: "Transporte alimentar e farmacêutico",
      cta: "Saber Mais",
      href: "/modelos?categoria=especial",
    },
  ],
  slidingWords: [
    { text: "Robustez", icon: "icon-jeep" },
    { text: "Fiabilidade", icon: "icon-cuv" },
    { text: "Dongfeng", icon: "icon-jeep" },
    { text: "Angola", icon: "icon-cuv" },
    { text: "Comerciais", icon: "icon-jeep" },
    { text: "Frota 2026", icon: "icon-cuv" },
  ],
  about: {
    image: "/img/dealership-signage.jpeg",
    imageAlt: "Concessionária Dongfeng Angola",
    eyebrow: "Sobre Nós",
    title: "Representante oficial Dongfeng em",
    titleAccent: "Angola",
    paragraphs: [
      "Somos a concessionária oficial Dongfeng em Angola, oferecendo a gama completa de veículos comerciais da marca chinesa. Mini caminhões, caminhões ligeiros, soluções frigoríficas e veículos especiais, com apoio técnico, peças genuínas e garantia de fábrica.",
      "Trabalhamos para empresas de logística, distribuição alimentar, construção, agricultura e serviços. Cada veículo é entregue com documentação completa e pronto para o trabalho intensivo.",
    ],
    ctaLabel: "Saber Mais",
    ctaHref: "/sobre",
  },
  sectors: {
    eyebrow: "Sectores que servimos",
    title: "Empresas que confiam na Dongfeng",
    items: [
      { icon: "fas fa-truck", label: "Logística & Distribuição" },
      { icon: "fas fa-snowflake", label: "Cadeia de Frio" },
      { icon: "fas fa-hard-hat", label: "Construção" },
      { icon: "fas fa-tractor", label: "Agricultura" },
      { icon: "fas fa-landmark", label: "Serviços Públicos" },
      { icon: "fas fa-dolly-flatbed", label: "Mudanças & Transporte" },
    ],
  },
  featured: {
    eyebrow: "Modelos em Destaque",
    title: "A linha completa",
    titleAccent: "Dongfeng",
    ctaLabel: "Ver Todos os Modelos",
    ctaHref: "/modelos",
  },
  process: {
    eyebrow: "Passos",
    title: "Como adquirir o seu",
    titleAccent: "Dongfeng",
    steps: [
      {
        icon: "icon-car-wash",
        title: "Escolha o modelo",
        text: "Explore a linha completa Dongfeng e identifique o veículo certo para o seu negócio.",
      },
      {
        icon: "icon-in-person",
        title: "Entre em contacto",
        text: "Fale com a nossa equipa comercial para esclarecer dúvidas e receber proposta.",
      },
      {
        icon: "icon-car-insurance",
        title: "Marque a visita",
        text: "Venha ao stand em Luanda, conheça o veículo e faça o test drive.",
      },
      {
        icon: "icon-steering-wheel",
        title: "Leve o seu Dongfeng",
        text: "Entregamos com documentação completa e apoio técnico de longa duração.",
      },
    ],
  },
  whyChoose: {
    eyebrow: "Porquê Dongfeng Angola",
    title: "Mais do que uma",
    titleAccent: "concessionária",
    items: [
      {
        icon: "icon-Carrier",
        title: "Veículos novos 2026",
        text: "Linha completa Dongfeng com garantia de fábrica e documentação angolana pronta.",
      },
      {
        icon: "icon-tools",
        title: "Oficina equipada",
        text: "Mecânicos certificados Dongfeng e equipamento específico para a marca.",
      },
      {
        icon: "icon-car-insurance",
        title: "Peças genuínas",
        text: "Stock permanente em Luanda, com entregas para todas as províncias.",
      },
      {
        icon: "icon-test-drive",
        title: "Test drive sem compromisso",
        text: "Marque a sua visita e experimente o veículo antes de comprar.",
      },
      {
        icon: "icon-pin-2",
        title: "Apoio em todo o país",
        text: "Cobertura nacional e suporte técnico para a sua frota onde precisar.",
      },
      {
        icon: "icon-call-3",
        title: "Atendimento dedicado",
        text: "Equipa comercial em português para a sua empresa, do orçamento à entrega.",
      },
    ],
  },
  gallery: {
    eyebrow: "Galeria",
    title: "A nossa",
    titleAccent: "frota em foco",
    linkLabel: "Ver modelos",
    photos: [
      "/img/cars/captain-t-01.jpeg",
      "/img/cars/t20-cabine-dupla-01.jpeg",
      "/img/cars/captain-frigorifico-01.jpeg",
      "/img/cars/dfac-light-truck-01.jpeg",
      "/img/cars/t20-pickup-01.jpeg",
      "/img/cars/t20-box-01.jpeg",
      "/img/cars/captain-w-01.jpeg",
      "/img/cars/captain-frigorifico-03.jpeg",
    ],
  },
  faq: {
    eyebrow: "Dúvidas frequentes",
    title: "Tudo o que precisa de saber",
    titleAccent: "antes de comprar",
    text: "Não encontrou a resposta? A nossa equipa está disponível para esclarecer qualquer questão técnica ou comercial.",
    ctaLabel: "Ligar Agora",
    ctaHref: "tel:+244928283666",
    items: [
      {
        q: "Que documentação é necessária para comprar?",
        a: "Para empresas: certidão comercial, NIF e identificação do representante legal. Para particulares: BI e NIF. A nossa equipa comercial trata da documentação do veículo até à entrega.",
      },
      {
        q: "Os veículos têm garantia?",
        a: "Sim. Todos os veículos Dongfeng novos são entregues com garantia de fábrica. As condições exatas variam por modelo.",
      },
      {
        q: "Têm peças de substituição em stock?",
        a: "Sim. Mantemos stock permanente das peças de maior rotação em Luanda. Para peças específicas, o prazo médio de chegada é de 7 a 21 dias úteis.",
      },
      {
        q: "Posso fazer test drive?",
        a: "Claro. Marque a sua visita pelo formulário ou por telefone e nós preparamos o veículo para o dia e hora combinados.",
      },
      {
        q: "Fazem entregas fora de Luanda?",
        a: "Sim, entregamos em todas as províncias de Angola. O custo de transporte é orçamentado caso a caso.",
      },
      {
        q: "Aceitam financiamento?",
        a: "Trabalhamos com instituições financeiras parceiras para apresentar propostas de financiamento ou leasing.",
      },
    ],
  },
  finalCta: {
    title: "Pronto para conhecer o seu próximo Dongfeng?",
    text: "Marque uma visita à nossa concessionária em Luanda e teste o veículo que se adapta ao seu negócio.",
    ctaLabel: "Marcar Visita Agora",
    ctaHref: "/agendar-visita",
  },
} satisfies JsonValue;

export const modelos = {
  title: "Modelos Dongfeng",
  allLabel: "Todos",
  emptyText: "Nenhum modelo encontrado nesta categoria.",
} satisfies JsonValue;

export const sobre = {
  title: "Sobre Nós",
  image: "/img/dealership-signage.jpeg",
  imageAlt: "Concessionária Dongfeng Angola",
  eyebrow: "Sobre a Dongfeng Angola",
  heading: "Mais de uma década a apoiar empresas",
  headingAccent: "angolanas",
  paragraphs: [
    "Somos a concessionária oficial Dongfeng em Angola. Importamos, comercializamos e prestamos assistência à gama completa de veículos comerciais Dongfeng, uma das maiores fabricantes mundiais de caminhões, com presença em mais de 100 países.",
    "A nossa missão é colocar à disposição das empresas angolanas veículos robustos, económicos e adaptados às condições de operação locais, com total apoio pós-venda.",
  ],
  values: [
    {
      title: "Missão",
      text: "Disponibilizar veículos comerciais Dongfeng com qualidade reconhecida e apoio pós-venda completo, contribuindo para o crescimento das empresas angolanas.",
    },
    {
      title: "Visão",
      text: "Ser a referência em veículos comerciais em Angola, reconhecidos pela fiabilidade, profissionalismo e proximidade ao cliente.",
    },
    {
      title: "Valores",
      text: "Transparência, qualidade técnica, compromisso com prazos e relação duradoura com cada cliente.",
    },
  ],
  cta: {
    title: "Visite a nossa concessionária",
    text: "Estamos em Luanda, venha conhecer a nossa frota e fale com a equipa comercial.",
    label: "Falar Connosco",
    href: "/contacto",
  },
} satisfies JsonValue;

export const contacto = {
  title: "Contacto",
  eyebrow: "Contactos",
  heading: "Estamos à sua",
  headingAccent: "disposição",
  formTitle: "Envie-nos uma mensagem",
  cards: [
    {
      icon: "icon-pin",
      label: "Morada",
      body: "Paragem da Mutamba, via expresse\nLuanda, Angola",
    },
    {
      icon: "icon-call",
      label: "Telefone",
      body: "+244 928 283 666 / +244 926 267 111",
      href: "tel:+244928283666",
    },
    {
      icon: "icon-envelope",
      label: "Email",
      body: "txtailai@yeah.net",
      href: "mailto:txtailai@yeah.net",
    },
    {
      icon: "icon-clock",
      label: "Horário",
      body: "Segunda a Sexta: 08:00-17:30\nSábado: 09:00-13:00",
    },
  ],
  form: {
    nome: "Nome",
    email: "Email",
    telefone: "Telefone",
    assunto: "Assunto",
    mensagem: "A sua mensagem",
    sending: "A enviar...",
    submit: "Enviar Mensagem",
    success: "Mensagem enviada com sucesso. Iremos responder em breve.",
    errorPrefix: "Não foi possível enviar",
    errorFallback: "tente novamente",
  },
} satisfies JsonValue;

export const visita = {
  title: "Agendar Visita",
  eyebrow: "Marque a sua visita",
  heading: "Conheça",
  headingAccent: "presencialmente",
  headingSuffix: "o seu próximo Dongfeng",
  text: "Preencha o formulário e iremos confirmar a sua visita. A nossa equipa comercial irá apresentar-lhe o modelo escolhido e dar resposta a todas as suas questões técnicas e comerciais.",
  form: {
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
  },
} satisfies JsonValue;

