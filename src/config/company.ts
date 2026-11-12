import aboutAdvisoryImage from "../assets/images/about_advisory_1793885652035.jpg";
import fourcredLogo from "../assets/images/fourcred-logo.png";
import heroFamilyImage from "../assets/images/hero_family_home_1793885651610.jpg";
import housingKeysImage from "../assets/images/housing_keys_concept_1793885653104.jpg";
import portfolioResidentialImage from "../assets/images/portfolio_residential_1793885652256.jpg";

/**
 * CONFIGURAÇÃO CENTRAL FOURCRED
 * Contém dados de contato, WhatsApp, unidades, serviços, simulador, formulários e FAQ.
 * Informações com [adicione aqui] foram mantidas conforme instrução.
 */
export const COMPANY_CONFIG = {
  name: "FOURCRED",
  fullName: "Fourcred Serviços Financeiros",
  tagline: "Seu sonho da casa própria começa com a escolha certa.",
  
  // Contato Oficial
  phone: "(11) 99991-0509",
  phoneFormatted: "11999910509",
  whatsappNumber: "5511999910509",
  email: "contato@fourcred.com.br",
  instagram: "https://www.instagram.com/fourcred/",
  instagramHandle: "@fourcred",

  // Dados legais do correspondente
  legalInfo: {
    cnpj: "[adicione aqui]",
    correspondenteCaixaCode: "[adicione aqui]",
    legalDisclaimer: "A Fourcred atua como Correspondente Bancário da Caixa Econômica Federal nos termos da Resolução CMN nº 3.954/2011. Todas as operações de crédito habitacional, seguros e consórcios estão sujeitas a análise cadastral e aprovação de crédito pelas instituições financeiras parceiras.",
  },

  // Unidades em Franco da Rocha
  locations: [
    {
      id: "central",
      title: "Sede Central",
      badge: "Escritório Central",
      street: "Av. Sete de Setembro, 169",
      complement: "Box 7",
      neighborhood: "Centro",
      city: "Franco da Rocha",
      state: "SP",
      zipCode: "07851-120",
      full: "Av. Sete de Setembro, 169, Box 7 - Centro, Franco da Rocha - SP, 07851-120",
      mapsUrl: "https://maps.google.com/?q=Av.+Sete+de+Setembro,+169,+Box+7,+Centro,+Franco+da+Rocha+-+SP,+07851-120",
      mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.26!2d-46.728!3d-23.324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cee2ff4bd675bd%3A0x8bd5fb588cb7e42b!2sAv.%20Sete%20de%20Setembro%2C%20169%20-%20Centro%2C%20Franco%20da%20Rocha%20-%20SP%2C%2007851-120!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
    },
    {
      id: "loja-centro",
      title: "Loja Laranjeiras",
      badge: "Atendimento Presencial",
      street: "Av. Pauliceia, 37",
      complement: "Sala 02",
      neighborhood: "Laranjeiras",
      city: "Franco da Rocha",
      state: "SP",
      zipCode: "07840-000",
      full: "Av. Pauliceia, 37, Sala 02 - Laranjeiras, Franco da Rocha - SP, 07840-000",
      mapsUrl: "https://maps.google.com/?q=Av.+Pauliceia,+37,+Sala+02,+Franco+da+Rocha+-+SP",
      mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.15!2d-46.725!3d-23.328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cee2ff4bd675bd%3A0x8bd5fb588cb7e42b!2sAv.%20Pauliceia%2C%2037%20-%20Franco%20da%20Rocha%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
    }
  ],

  address: {
    street: "Av. Sete de Setembro, 169, Box 7",
    neighborhood: "Centro",
    city: "Franco da Rocha",
    state: "SP",
    zipCode: "07851-120",
    full: "Sede: Av. Sete de Setembro, 169, Box 7 - Franco da Rocha - SP | Loja: Av. Pauliceia, 37, Sala 02 - Laranjeiras, Franco da Rocha - SP"
  },

  businessHours: "Segunda a Sexta: 08:30 às 17:30",

  credibility: {
    caixaBadge: "Correspondente Bancário Caixa Econômica Federal",
    rating: "Classificação DIAMANTE Caixa (2º Sem/2023)",
    experienceYears: "Fundador com 20 anos de experiência financeira"
  },

  // Contadores animados da Faixa de Confiança
  trustCounters: [
    {
      value: 900,
      suffix: "+",
      label: "Famílias Atendidas",
      sublabel: "Sonho da casa própria realizado com orientação especializada",
      icon: "Home"
    },
    {
      value: 20,
      suffix: " anos",
      label: "Experiência de Mercado",
      sublabel: "Duas décadas de atuação técnica e liderança no setor",
      icon: "Building2"
    },
    {
      value: 0,
      isPlaceholder: true,
      displayPlaceholder: "DIAMANTE",
      suffix: "",
      label: "Classificação Caixa",
      sublabel: "Reconhecimento oficial de excelência operacional Caixa (2º Sem/2023)",
      icon: "Award"
    }
  ],

  // WhatsApp Helper Function
  getWhatsAppLink: (customMessage?: string) => {
    const defaultMsg = "Olá! Gostaria de falar com um especialista da Fourcred para receber orientação personalizada.";
    const text = encodeURIComponent(customMessage || defaultMsg);
    return `https://wa.me/5511999910509?text=${text}`;
  },

  // Serviços Oficiais
  services: [
    {
      id: "credito-habitacional",
      title: "Crédito Habitacional",
      shortTitle: "Conquiste seu imóvel",
      iconName: "House",
      benefit: "Financiamento Caixa facilitado com uso do FGTS e suporte até as chaves",
      description: "Descubra alternativas de financiamento habitacional para realizar o sonho da casa própria, com orientação especializada durante as etapas do processo.",
      whatsappMessage: "Olá! Tenho interesse no Crédito Habitacional da Fourcred para realizar o sonho do imóvel próprio.",
      highlights: [
        "Financiamento de imóveis novos e usados",
        "Acompanhamento em todas as fases da aprovação",
        "Utilização do FGTS para entrada ou amortização",
        "Análise de crédito rápida e desburocratizada"
      ]
    },
    {
      id: "seguros",
      title: "Seguros",
      shortTitle: "Proteção para o que importa",
      iconName: "ShieldCheck",
      benefit: "Proteja sua família, residência e patrimônio com as melhores seguradoras",
      description: "Proteja seu patrimônio, sua família e seus negócios com soluções em seguros de diferentes modalidades, por meio das principais seguradoras do mercado.",
      whatsappMessage: "Olá! Gostaria de consultar opções de seguros com os especialistas da Fourcred.",
      highlights: [
        "Seguro Residencial e Habitacional",
        "Seguro de Vida e Proteção Familiar",
        "Seguro Auto e Empresarial",
        "Parceria com as principais seguradoras do país"
      ]
    },
    {
      id: "consorcios",
      title: "Consórcios",
      shortTitle: "Planeje suas conquistas",
      iconName: "Wallet",
      benefit: "Aquisição de bens sem juros bancários e planejamento de lances",
      description: "Conheça alternativas inteligentes para aquisição de bens, com planejamento financeiro e possibilidades adequadas aos seus objetivos.",
      whatsappMessage: "Olá! Gostaria de saber mais sobre as modalidades de consórcio disponíveis na Fourcred.",
      highlights: [
        "Consórcio Imobiliário e de Veículos",
        "Sem juros bancários, apenas taxa de administração",
        "Estratégia personalizada para lances",
        "Planejamento financeiro de longo prazo"
      ]
    },
    {
      id: "beneficios",
      title: "Benefícios",
      shortTitle: "Cuidado e qualidade de vida",
      iconName: "HeartHandshake",
      benefit: "Planos de saúde e odontológicos sob medida para você e sua família",
      description: "Tenha acesso a soluções de benefícios, incluindo planos de saúde e odontológicos, para cuidar de você e de sua família.",
      whatsappMessage: "Olá! Gostaria de receber informações sobre os planos de saúde e benefícios ofertados pela Fourcred.",
      highlights: [
        "Planos de Saúde Individuais e Familiares",
        "Planos Odontológicos com ampla rede credenciada",
        "Soluções PME e corporativas",
        "Atendimento com carência reduzida"
      ]
    }
  ],

  // 5 Etapas do Como Funciona
  processSteps: [
    {
      step: 1,
      title: "Simulação",
      description: "Entendemos seu momento e montamos a melhor estimativa financeira para o seu perfil e renda.",
      badge: "Início rápido"
    },
    {
      step: 2,
      title: "Documentação",
      description: "Coleta organizada dos documentos necessários, sem idas e vindas desnecessárias.",
      badge: "Checklist simplificado"
    },
    {
      step: 3,
      title: "Análise de Crédito",
      description: "Encaminhamento direto junto à Caixa Econômica Federal para avaliação técnica.",
      badge: "Correspondente oficial"
    },
    {
      step: 4,
      title: "Avaliação do Imóvel",
      description: "Laudo de engenharia e conferência jurídica completa do imóvel desejado.",
      badge: "Segurança total"
    },
    {
      step: 5,
      title: "Assinatura e Chaves",
      description: "Emissão e assinatura do contrato oficial com entrega das chaves da sua casa própria.",
      badge: "Sonho realizado"
    }
  ],

  // Parâmetros do Simulador de Parcela (Estimativa configurável)
  simulator: {
    defaultPropertyVal: 280000,
    minPropertyVal: 100000,
    maxPropertyVal: 1200000,
    defaultDownPayment: 56000, // 20%
    defaultMonths: 360,
    minMonths: 120,
    maxMonths: 420,
    // Taxa indicativa constante para efeito puramente ilustrativo (placeholder)
    indicativeAnnualRate: 0.0999, // 9.99% a.a. indicativo (apenas exemplo didático)
    disclaimer: "Estimativa sem valor contratual. Sujeita à análise de crédito e às condições vigentes da Caixa Econômica Federal."
  },

  // Itens do Marquee
  marqueeItems: [
    "FGTS",
    "Entrada facilitada",
    "Seguros",
    "Consórcio",
    "Atendimento em Franco da Rocha",
    "Correspondente Caixa",
    "Classificação Diamante",
    "Crédito Habitacional",
    "Orientação Especializada"
  ],

  // Perguntas Frequentes (FAQ)
  faqItems: [
    {
      q: "Quais documentos básicos são necessários para iniciar o financiamento?",
      a: "Geralmente são necessários RG/CPF ou CNH, comprovante de residência atualizado, comprovantes de renda (holerites, declaração de IRPF ou extratos bancários) e certidão de estado civil. Para conferir a lista completa por perfil, consulte nosso checklist nesta página ou fale com a nossa equipe."
    },
    {
      q: "Posso utilizar o saldo do FGTS na compra do imóvel?",
      a: "Sim! O FGTS pode ser utilizado como entrada, amortização ou liquidação do saldo devedor do financiamento habitacional, desde que atendidos os requisitos legais da Caixa (tempo de trabalho sob regime do FGTS, não possuir outro imóvel residencial no mesmo município, etc.)."
    },
    {
      q: "Qual é o valor mínimo de entrada exigido?",
      a: "A Caixa costuma financiar até [adicione aqui]% do valor de avaliação do imóvel, exigindo uma entrada a partir de [adicione aqui]%, dependendo do sistema de amortização (SAC ou Price), da renda familiar e da modalidade de crédito aprovada na análise."
    },
    {
      q: "Quanto tempo leva a análise de crédito habitacional?",
      a: "O prazo médio de resposta da análise inicial é de [adicione aqui], variando conforme a conferência da documentação e a resposta dos sistemas bancários da Caixa. Nossa equipe acompanha diariamente cada etapa para acelerar o processo."
    },
    {
      q: "Quem tem restrição no nome (SPC/Serasa) consegue financiar?",
      a: "Para a concessão de crédito habitacional Caixa, é necessário que o CPF dos proponentes esteja sem restrições ativas. Caso existam pendências, nossa equipe pode orientar sobre as melhores formas de regularização para que a análise futura seja viável."
    },
    {
      q: "Como funcionam os seguros e consórcios na Fourcred?",
      a: "Além do seguro habitacional obrigatório, oferecemos assessoria em seguros de vida, residenciais e automotivos pelas maiores seguradoras do país, além de consórcios imobiliários e de veículos para quem deseja planejar a compra sem juros bancários."
    }
  ],

  // Checklist de Documentos
  documentChecklist: {
    buyer: [
      { id: "b1", label: "Documento oficial de identificação (RG ou CNH) válido", mandatory: true },
      { id: "b2", label: "CPF regularizado perante a Receita Federal", mandatory: true },
      { id: "b3", label: "Comprovante de estado civil atualizado (Certidão de Nascimento ou Casamento)", mandatory: true },
      { id: "b4", label: "Comprovante de residência recente (últimos 60 dias)", mandatory: true },
      { id: "b5", label: "Comprovantes de renda dos últimos 3 meses (holerites ou IRPF completo)", mandatory: true },
      { id: "b6", label: "Carteira de trabalho (CTPS) e extrato atualizado do FGTS (se for utilizar)", mandatory: false },
      { id: "b7", label: "Certidão negativa de débitos tributários federais", mandatory: false },
      { id: "b8", label: "[adicione aqui - documento complementar do comprador]", mandatory: false },
    ],
    seller: [
      { id: "s1", label: "RG e CPF dos proprietários vendedores e cônjuges", mandatory: true },
      { id: "s2", label: "Certidão de casamento com averbações (se aplicável)", mandatory: true },
      { id: "s3", label: "Matrícula atualizada do imóvel com certidão de ônus reais", mandatory: true },
      { id: "s4", label: "Certidão negativa de débitos de IPTU expedida pela Prefeitura", mandatory: true },
      { id: "s5", label: "Declaração de quitação de débitos condominiais (para apartamentos)", mandatory: true },
      { id: "s6", label: "Certidões forenses e de distribuição cível/trabalhista dos vendedores", mandatory: false },
      { id: "s7", label: "Cópia do espelho do carnê do IPTU do ano vigente", mandatory: false },
      { id: "s8", label: "[adicione aqui - documento complementar do vendedor]", mandatory: false },
    ]
  },

  // History / Timeline Data
  timeline: [
    {
      year: "2020",
      title: "Fundação em Franco da Rocha",
      description: "A Fourcred nasceu no início de 2020, em Franco da Rocha - SP, durante um período desafiador de pandemia, com o propósito de estabelecer novos padrões no setor de correspondentes bancários."
    },
    {
      year: "2021 - 2022",
      title: "Consolidação e Expansão de Processos",
      description: "Aprimoramento contínuo na agilidade dos processos de crédito habitacional, seguros e consórcios, garantindo suporte humanizado para centenas de famílias."
    },
    {
      year: "2023",
      title: "Classificação DIAMANTE pela Caixa",
      description: "Conquista do selo de prestígio e excelência operacional Classificação DIAMANTE concedido pela Caixa Econômica Federal no 2º semestre de 2023."
    },
    {
      year: "Hoje",
      title: "Expansão de Lojas e Presença Regional",
      description: "Sede Central na Av. Sete de Setembro e loja na Av. Pauliceia, consolidando a Fourcred como referência em crédito e seguros da região."
    }
  ],

  founder: {
    name: "Danyel Henrique",
    role: "CEO & Fundador da Fourcred",
    bio: "Com duas décadas de experiência no mercado financeiro, Danyel Henrique fundou a Fourcred com o propósito de oferecer uma experiência diferenciada em serviços financeiros, baseada em conhecimento, agilidade, relacionamento e excelência no atendimento.",
    experience: "20 Anos de Mercado Financeiro"
  },

  // Depoimentos (comentário no código: substitua por relatos reais adicionais conforme autorizados pelos clientes)
  testimonials: [
    {
      quote: "Eu tinha algumas dúvidas e fui muito bem atendido. A equipe explicou tudo com calma e me senti mais seguro para seguir com o processo. Recomendo!",
      author: "André de Sousa",
      highlight: "Atendimento atencioso",
      rating: 5
    },
    {
      quote: "Gostei bastante do atendimento. Foram atenciosos, responderam minhas perguntas e me acompanharam durante o processo. Foi uma experiência muito boa!",
      author: "Lucas Guedes",
      highlight: "Acompanhamento próximo",
      rating: 5
    },
    {
      quote: "Equipe nota 10, atendimento ágil e tudo transparente do início à assinatura do financiamento. Recomendo a Fourcred para quem quer segurança na Caixa.",
      author: "Cliente Atendido em Franco da Rocha",
      highlight: "Transparência do início ao fim",
      rating: 5
    }
  ],

  images: {
    logo: fourcredLogo,
    heroFamily: heroFamilyImage,
    aboutAdvisory: aboutAdvisoryImage,
    portfolioResidential: portfolioResidentialImage,
    housingKeys: housingKeysImage,
    uploadedStoreBadge: "/assets/aistudio/IMG-20261105-WA0050_92f606b3.jpg"
  }
};
