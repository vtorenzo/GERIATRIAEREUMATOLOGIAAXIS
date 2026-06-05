export type PhoneKey = "main" | "rheumatology";

export type PhoneConfig = {
  key: PhoneKey;
  label: string;
  number: string;
  whatsapp: boolean;
  description: string;
};

export type ServicePrice = {
  label: string;
  value: string;
};

export type DoctorConfig = {
  id: "marcio-batista" | "auxiliadora-souza-silva-lima";
  name: string;
  shortName: string;
  crm: string;
  rqe: string;
  professionalTitle: string;
  displaySpecialty: string;
  legalReviewNeeded: boolean;
  postgraduateTraining: string[];
  doctoraliaUrl: string;
  reviewCount: number;
  photo: string;
  whatsappPhoneKey: PhoneKey;
  summary: string;
  formats: string[];
  languages?: string[];
  areas: string[];
  conditions: string[];
  prices: ServicePrice[];
};

export type ServiceConfig = {
  title: string;
  description: string;
};

export type FaqConfig = {
  question: string;
  answer: string;
};

export type SiteConfig = {
  clinicName: string;
  shortName: string;
  slogan: string;
  logoPath: string;
  seo: {
    title: string;
    description: string;
    siteUrl: string;
    canonicalUrl: string;
    ogImagePath: string;
    analyticsId: string;
  };
  address: {
    street: string;
    building: string;
    room: string;
    neighborhood: string;
    city: string;
    state: string;
    zip: string;
    reference: string;
  };
  phones: PhoneConfig[];
  email: string;
  instagramUrl: string;
  businessHours: string;
  insuranceInfo: string;
  privacyPolicy: string;
  legal: {
    technicalDirectorName: string;
    technicalDirectorCrm: string;
    technicalDirectorPostgraduateTraining: string;
    companyDocument: string;
    privacyLastUpdated: string;
  };
  payments: {
    general: string;
    marcio: string;
    auxiliadora: string;
  };
  whatsappMessages: {
    general: string;
    marcio: string;
    auxiliadora: string;
    homeCare: string;
  };
  texts: {
    heroHeadline: string;
    heroSubheadline: string;
    about: string;
    servicesIntro: string;
    homeCare: string;
    metabolic: string;
    rheumatologyPain: string;
  };
  trustItems: string[];
  aboutCards: ServiceConfig[];
  services: ServiceConfig[];
  homeCare: {
    price: string;
    items: string[];
    disclaimer: string;
  };
  metabolicCare: ServiceConfig[];
  metabolicDisclaimer: string;
  doctors: DoctorConfig[];
  faqs: FaqConfig[];
};

// Validar titulos profissionais, CRM, RQE e pos-graduacoes antes da publicacao.
export const siteConfig: SiteConfig = {
  clinicName: "Clínica Axis — Geriatria e Reumatologia",
  shortName: "Clínica Axis",
  slogan: "Cuidado médico para autonomia, movimento e qualidade de vida.",
  logoPath: "/logo-axis.svg",
  seo: {
    title: "Clínica Axis | Atendimento médico em Campo Grande RJ",
    description:
      "Clínica médica em Campo Grande, RJ. Atendimento presencial, teleconsulta, cuidado do adulto e idoso, doenças reumáticas, dor articular, emagrecimento, reposição hormonal e atendimento domiciliar.",
    siteUrl: "https://geriatriaereumatologiaaxis.com.br",
    canonicalUrl: "https://geriatriaereumatologiaaxis.com.br",
    ogImagePath: "/og-axis.svg",
    analyticsId: "TODO_INSERIR_ANALYTICS_ID"
  },
  address: {
    street: "Avenida Maria Teresa 260",
    building: "Edifício Plaza Office, Bloco 2",
    room: "Sala 625",
    neighborhood: "Campo Grande",
    city: "Rio de Janeiro",
    state: "RJ",
    zip: "23050-160",
    reference: "Edifício Plaza Office, Bloco 2, Sala 625"
  },
  phones: [
    {
      key: "main",
      label: "Telefone principal",
      number: "(21) 98655-2693",
      whatsapp: true,
      description: "Contato principal da Clínica Axis"
    },
    {
      key: "rheumatology",
      label: "Reumatologia",
      number: "(21) 3952-6329",
      whatsapp: false,
      description: "Telefone associado ao atendimento em reumatologia"
    }
  ],
  email: "TODO_INSERIR_EMAIL",
  instagramUrl: "TODO_INSERIR_INSTAGRAM",
  businessHours: "TODO_INSERIR_HORARIO_FUNCIONAMENTO",
  insuranceInfo: "TODO_CONFIRMAR_CONVENIOS",
  privacyPolicy:
    "Este site apresenta informações institucionais da clínica e não substitui consulta médica. O formulário não armazena dados em banco próprio; ele apenas monta uma mensagem para envio pelo WhatsApp. Evite enviar informações médicas sensíveis por formulários ou mensagens sem orientação profissional.",
  legal: {
    technicalDirectorName: "TODO_INSERIR_DIRETOR_TECNICO",
    technicalDirectorCrm: "TODO_INSERIR_CRM_DIRETOR_TECNICO",
    technicalDirectorPostgraduateTraining: "TODO_INSERIR_POS_GRADUACAO_DIRETOR_TECNICO",
    companyDocument: "TODO_INSERIR_RAZAO_SOCIAL_CNPJ",
    privacyLastUpdated: "28/05/2026"
  },
  payments: {
    general: "Informação sob consulta.",
    marcio: "PIX, cartão de crédito, cartão de débito e dinheiro.",
    auxiliadora:
      "PIX e dinheiro em consultório particular; pagamento online pode estar disponível em alguns contextos."
  },
  whatsappMessages: {
    general:
      "Olá, vim pelo site da Clínica Axis e gostaria de agendar uma consulta.",
    marcio:
      "Olá, vim pelo site da Clínica Axis e gostaria de agendar uma avaliação com o Dr. Márcio.",
    auxiliadora:
      "Olá, vim pelo site da Clínica Axis e gostaria de agendar uma avaliação com a Dra. Auxiliadora.",
    homeCare:
      "Olá, vim pelo site da Clínica Axis e gostaria de informações sobre atendimento domiciliar."
  },
  texts: {
    heroHeadline:
      "Cuidado médico para envelhecer com mais autonomia, movimento e qualidade de vida.",
    heroSubheadline:
      "Atendimento médico em Campo Grande, RJ, com foco em cuidado individualizado, prevenção, doenças reumáticas, saúde do adulto e da pessoa idosa, teleconsulta e atendimento domiciliar.",
    about:
      "A Clínica Axis nasceu para oferecer um cuidado médico mais próximo, organizado e humano. A proposta é unir avaliação clínica criteriosa, escuta ativa e acompanhamento contínuo para pacientes que buscam saúde, autonomia e qualidade de vida.",
    servicesIntro:
      "Cada atendimento é conduzido a partir de avaliação médica individual, considerando histórico clínico, sintomas, exames, riscos e objetivos do paciente.",
    homeCare:
      "O atendimento domiciliar pode ser indicado para pacientes com dificuldade de locomoção, fragilidade, limitações funcionais ou necessidade de avaliação no ambiente familiar.",
    metabolic:
      "Tratamentos metabólicos e hormonais exigem indicação precisa, acompanhamento e segurança. Na Clínica Axis, a avaliação é individualizada, sem promessas de resultado e sem condutas padronizadas.",
    rheumatologyPain:
      "Dor persistente, rigidez, inchaço articular, fadiga, limitação de movimento e suspeita de doença autoimune merecem investigação médica adequada."
  },
  trustItems: [
    "Campo Grande, RJ",
    "Atendimento presencial e online",
    "Agendamento pela Doctoralia",
    "Consultas particulares",
    "Atendimento domiciliar disponível"
  ],
  aboutCards: [
    {
      title: "Atendimento individualizado",
      description: "Avaliação clínica com escuta, contexto e plano de cuidado."
    },
    {
      title: "Localização acessível",
      description: "Consultório no Edifício Plaza Office, em Campo Grande."
    },
    {
      title: "Agendamento facilitado",
      description: "Caminhos diretos pela Doctoralia ou WhatsApp."
    },
    {
      title: "Presencial, online e domiciliar",
      description: "Formatos de atendimento conforme indicação e disponibilidade."
    },
    {
      title: "Cuidado contínuo",
      description: "Foco em autonomia, mobilidade e qualidade de vida."
    }
  ],
  services: [
    {
      title: "Saúde do adulto e da pessoa idosa",
      description: "Acompanhamento clínico, prevenção e organização do cuidado."
    },
    {
      title: "Memória, Alzheimer e Parkinson",
      description: "Avaliação de queixas cognitivas e condições do envelhecimento."
    },
    {
      title: "Quedas e mobilidade",
      description: "Investigação de riscos, fragilidade e perda funcional."
    },
    {
      title: "Osteoporose e saúde óssea",
      description: "Avaliação clínica, densidade óssea e orientação de prevenção."
    },
    {
      title: "Emagrecimento com acompanhamento médico",
      description: "Condutas individualizadas, com análise de riscos e objetivos."
    },
    {
      title: "Reposição hormonal",
      description: "Avaliação criteriosa para homens e mulheres quando indicada."
    },
    {
      title: "Doenças reumáticas e dor articular",
      description: "Investigação de dor, rigidez, inflamação e limitação."
    },
    {
      title: "Fibromialgia, artrites, lúpus e gota",
      description: "Acompanhamento médico de condições reumáticas e autoimunes."
    },
    {
      title: "Atendimento domiciliar",
      description: "Opção para pacientes com limitação de locomoção."
    },
    {
      title: "Teleconsulta",
      description: "Consulta por vídeo quando adequada ao caso clínico."
    }
  ],
  homeCare: {
    price: "A partir de R$ 400",
    items: [
      "Avaliação médica no domicílio mediante disponibilidade.",
      "Pode ser útil para idosos frágeis e pacientes com mobilidade reduzida.",
      "Apoio a familiares que precisam de orientação sobre cuidado e rotina.",
      "Possível acompanhamento após alta hospitalar quando indicado."
    ],
    disclaimer:
      "Em situações de urgência ou emergência, procure atendimento emergencial."
  },
  metabolicCare: [
    {
      title: "Emagrecimento",
      description: "Avaliação clínica, metas realistas e seguimento médico."
    },
    {
      title: "Reposição hormonal",
      description: "Indicação individual para homens e mulheres, quando aplicável."
    },
    {
      title: "Sarcopenia",
      description: "Atenção à perda de massa muscular, força e funcionalidade."
    },
    {
      title: "Suplementação",
      description: "Vitaminas e minerais com base em avaliação e exames."
    },
    {
      title: "Sono, fadiga e qualidade de vida",
      description: "Investigação de sintomas que afetam energia e rotina."
    }
  ],
  metabolicDisclaimer:
    "As condutas dependem de avaliação médica individual. Nem todo paciente tem indicação para reposição hormonal ou tratamentos específicos.",
  doctors: [
    {
      id: "marcio-batista",
      name: "Dr. Márcio Batista",
      shortName: "Dr. Márcio",
      crm: "CRM RJ 129935-2",
      rqe: "TODO_CONFIRMAR_RQE",
      professionalTitle: "Médico | Cuidado do adulto e do idoso",
      displaySpecialty: "Cuidado do adulto e do idoso",
      legalReviewNeeded: true,
      postgraduateTraining: ["TODO_INSERIR_POS_GRADUACAO_DR_MARCIO"],
      doctoraliaUrl:
        "https://www.doctoralia.com.br/marcio-batista-2/medico-clinico-geral/rio-de-janeiro",
      reviewCount: 14,
      photo: "TODO_INSERIR_FOTO_MEDICO",
      whatsappPhoneKey: "main",
      summary:
        "Cuidado médico voltado à autonomia, longevidade e qualidade de vida, com atenção ao adulto e à pessoa idosa. Avaliação de memória, quedas, osteoporose, sono, emagrecimento, reposição hormonal, suplementação e acompanhamento domiciliar.",
      formats: ["Presencial", "Consulta por vídeo", "Atendimento domiciliar"],
      areas: [
        "Saúde do adulto e da pessoa idosa",
        "Medicina de estilo de vida",
        "Avaliação de memória",
        "Quedas em idosos",
        "Osteoporose",
        "Emagrecimento",
        "Reposição hormonal",
        "Sono e fadiga",
        "Atendimento domiciliar"
      ],
      conditions: [
        "demência",
        "doença de Alzheimer",
        "doença de Parkinson",
        "ansiedade",
        "quedas em idosos",
        "demência vascular",
        "depressão",
        "obesidade",
        "desmineralização óssea",
        "insônia",
        "osteoporose",
        "síndrome das pernas inquietas",
        "transtornos da memória",
        "transtorno cognitivo leve",
        "deficiência de vitamina D",
        "fadiga",
        "tontura",
        "incontinência urinária",
        "doenças do envelhecimento"
      ],
      prices: [
        { label: "Teleconsulta", value: "R$ 200 a R$ 300" },
        { label: "Análise de densidade óssea", value: "R$ 200" },
        { label: "Atendimento domiciliar", value: "A partir de R$ 400" },
        { label: "Consulta de emagrecimento", value: "R$ 300" },
        { label: "Primeira consulta clínica médica", value: "R$ 200" },
        { label: "Reposição hormonal", value: "R$ 300" },
        { label: "Suplementação de vitaminas e minerais", value: "R$ 200" },
        { label: "Tratamento da doença de Alzheimer", value: "R$ 200" },
        { label: "Tratamento da doença de Parkinson", value: "R$ 200" },
        { label: "Tratamento hormonal para sarcopenia", value: "R$ 200" },
        { label: "Tratamento para distúrbios do sono", value: "R$ 200" }
      ]
    },
    {
      id: "auxiliadora-souza-silva-lima",
      name: "Dra. Auxiliadora Souza Silva Lima",
      shortName: "Dra. Auxiliadora",
      crm: "CRM RJ 1342576",
      rqe: "TODO_CONFIRMAR_RQE",
      professionalTitle: "Médica | Atendimento em doenças reumáticas e dor",
      displaySpecialty: "Doenças reumáticas e dor",
      legalReviewNeeded: true,
      postgraduateTraining: ["TODO_INSERIR_POS_GRADUACAO_DRA_AUXILIADORA"],
      doctoraliaUrl:
        "https://www.doctoralia.com.br/auxiliadora-souza-silva-lima/reumatologista/rio-de-janeiro",
      reviewCount: 30,
      photo: "TODO_INSERIR_FOTO_MEDICO",
      whatsappPhoneKey: "main",
      summary:
        "Atendimento médico voltado à investigação e acompanhamento de dor articular, doenças reumáticas, artrite reumatoide, fibromialgia, gota, osteoporose, lúpus, tendinites e condições autoimunes.",
      formats: ["Presencial", "Consulta por vídeo"],
      languages: ["Português", "Espanhol"],
      areas: [
        "Dor articular",
        "Doenças reumáticas",
        "Artrite reumatoide",
        "Fibromialgia",
        "Gota",
        "Osteoporose",
        "Lúpus",
        "Tendinites",
        "Terapia imunobiológica"
      ],
      conditions: [
        "artralgia",
        "doenças autoimunes",
        "doenças reumáticas",
        "fibromialgia",
        "gota",
        "artrite gotosa",
        "artrite psoriásica",
        "artrite reativa",
        "artrite reumatoide",
        "osteoartrite",
        "osteoartrose",
        "osteoporose",
        "lúpus eritematoso sistêmico",
        "espondilite anquilosante",
        "espondiloartrite",
        "dermatomiosite",
        "esclerodermia",
        "dor cervical",
        "dor nas costas",
        "dor no ombro",
        "lombalgia",
        "tendinite",
        "síndrome de Behçet"
      ],
      prices: [
        { label: "Primeira consulta em doenças reumáticas", value: "A partir de R$ 200" },
        { label: "Consulta médica", value: "R$ 200" },
        { label: "Retorno de consulta", value: "Consultar valores" },
        { label: "Teleconsulta", value: "R$ 200" },
        { label: "Acompanhamento de terapia imunobiológica", value: "Consultar valores" },
        { label: "Tratamento com canabidiol", value: "Consultar valores" }
      ]
    }
  ],
  faqs: [
    {
      question: "Como faço para agendar?",
      answer:
        "Você pode agendar pelos perfis dos profissionais na Doctoralia ou falar diretamente com a clínica pelo WhatsApp."
    },
    {
      question: "A clínica atende por convênio?",
      answer:
        "Informação sob consulta. Confirme a modalidade de atendimento antes do agendamento."
    },
    {
      question: "Há teleconsulta?",
      answer:
        "Sim, há possibilidade de consulta por vídeo quando o formato for adequado ao caso e estiver disponível para o profissional escolhido."
    },
    {
      question: "Existe atendimento domiciliar?",
      answer:
        "Sim, o atendimento domiciliar pode ser realizado mediante disponibilidade, especialmente para pacientes com dificuldade de locomoção ou necessidade de avaliação no ambiente familiar."
    },
    {
      question: "A clínica atende urgência?",
      answer:
        "A Clínica Axis realiza atendimentos agendados. Em caso de dor intensa súbita, falta de ar, perda de consciência, sinais de AVC, queda grave, confusão aguda ou qualquer situação de urgência, procure emergência."
    },
    {
      question: "Como saber qual médico devo procurar?",
      answer:
        "Se a dúvida envolver saúde do adulto, pessoa idosa, memória, quedas, sono, metabolismo ou cuidado domiciliar, o Dr. Márcio pode ser uma opção. Para dor articular, doenças reumáticas e suspeita de condições autoimunes, a Dra. Auxiliadora pode ser uma opção. Em caso de dúvida, fale com a clínica."
    },
    {
      question: "Posso agendar pela Doctoralia?",
      answer:
        "Sim. Os perfis da Doctoralia permitem consultar disponibilidade, enviar mensagem e agendar com os profissionais."
    }
  ]
};
