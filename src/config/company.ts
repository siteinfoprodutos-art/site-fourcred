import aboutAdvisoryImage from "../assets/images/about_advisory_1793885652035.jpg";
import fourcredLogo from "../assets/images/fourcred-logo.png";
import heroFamilyImage from "../assets/images/hero_family_home_1793885651610.jpg";
import housingKeysImage from "../assets/images/housing_keys_concept_1793885653104.jpg";
import portfolioResidentialImage from "../assets/images/portfolio_residential_1793885652256.jpg";

export const COMPANY_CONFIG = {
  name: "FOURCRED",
  fullName: "Fourcred Serviços Financeiros",
  tagline: "Seu sonho da casa própria começa com a escolha certa.",
  
  // Official Contact Data (Updated with user values)
  phone: "(11) 99991-0509",
  phoneFormatted: "11999910509",
  whatsappNumber: "5511999910509",
  email: "contato@fourcred.com.br",
  instagram: "https://www.instagram.com/fourcred/",
  instagramHandle: "@fourcred",

  // Multiple Locations: Sede Central & Loja
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

  // Primary address shorthand for footer/metadata
  address: {
    street: "Av. Sete de Setembro, 169, Box 7",
    neighborhood: "Centro",
    city: "Franco da Rocha",
    state: "SP",
    zipCode: "07851-120",
    full: "Sede: Av. Sete de Setembro, 169, Box 7 - Franco da Rocha - SP | Loja: Av. Pauliceia, 37, Sala 02 - Laranjeiras, Franco da Rocha - SP"
  },

  businessHours: "Segunda a Sexta: 08:30 às 17:30",

  // Credibility Badges
  credibility: {
    caixaBadge: "Correspondente Bancário Caixa Econômica Federal",
    rating: "Classificação DIAMANTE Caixa (2º Sem/2023)",
    experienceYears: "Fundador com 20 anos de experiência financeira"
  },

  // WhatsApp Helper Function
  getWhatsAppLink: (customMessage?: string) => {
    const defaultMsg = "Olá! Gostaria de falar com um especialista da Fourcred para receber orientação personalizada.";
    const text = encodeURIComponent(customMessage || defaultMsg);
    return `https://wa.me/5511999910509?text=${text}`;
  },

  // Services
  services: [
    {
      id: "credito-habitacional",
      title: "Crédito Habitacional",
      shortTitle: "Conquiste seu imóvel",
      iconName: "House",
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

  // Portfolio Highlights
  portfolioHighlights: [
    {
      title: "Classificação DIAMANTE Caixa",
      period: "2º Semestre de 2023",
      description: "Reconhecimento oficial da Caixa Econômica Federal pela qualidade técnica, volume de crédito concedido e índice de satisfação dos clientes."
    },
    {
      title: "+300 Famílias Atendidas",
      period: "Histórico Portfólio",
      description: "Centenas de famílias que realizaram o sonho da casa própria com o acompanhamento próximo e especializado da equipe Fourcred."
    },
    {
      title: "Grandes Empreendimentos Habitacionais",
      period: "Atuação em Destaque",
      description: "Intermediação de crédito bancário com excelência para empreendimentos de referência, incluindo Residenciais Ibiza, Bruno de Sá e Play."
    },
    {
      title: "Multi-soluções em Seguros",
      period: "Proteção Patrimonial",
      description: "Consultoria e corretagem de seguros de diferentes ramos, conectando clientes às melhores seguradoras do mercado nacional."
    }
  ],

  // Founder Info
  founder: {
    name: "Danyel Henrique",
    role: "CEO & Fundador da Fourcred",
    bio: "Com duas décadas de experiência no mercado financeiro, Danyel Henrique fundou a Fourcred com o propósito de oferecer uma experiência diferenciada em serviços financeiros, baseada em conhecimento, agilidade, relacionamento e excelência no atendimento.",
    experience: "20 Anos de Mercado Financeiro"
  },

  // Testimonials
  testimonials: [
    {
      quote: "Empresa Fourcred nota 10. Um super atendimento, pessoal atencioso tira todas as dúvidas e deixa tudo bem claro. Parabéns. E um agradecimento especial ao Matheus, excelente profissional.",
      author: "Cliente Atendido pela Fourcred",
      highlight: "Atendimento Nota 10",
      rating: 5
    }
  ],

  // Image Paths
  images: {
    logo: fourcredLogo,
    heroFamily: heroFamilyImage,
    aboutAdvisory: aboutAdvisoryImage,
    portfolioResidential: portfolioResidentialImage,
    housingKeys: housingKeysImage,
    uploadedStoreBadge: "/assets/aistudio/IMG-20261105-WA0050_92f606b3.jpg"
  }
};
