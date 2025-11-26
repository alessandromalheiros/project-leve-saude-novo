import { 
  ShieldCheck, MapPin, Hospital, Stethoscope, Truck, Ambulance, 
  Users, Smile, Smartphone
} from 'lucide-react';
import { Plan, Stat, Benefit, Pharmacy, FaqItem, Clinic, NetworkData, Testimonial } from './types';

export const WHATSAPP_NUMBER = "552137987776";
export const WHATSAPP_MESSAGE = "Olá! Vim pelo site da Leve e gostaria de mais informações.";
export const PABBLY_WEBHOOK_URL = "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTY0MDYzZjA0MzA1MjY1NTUzMjUxM2Ei_pc";

export const PLANS: Plan[] = [
  {
    id: 'top100',
    name: 'Leve Top 100',
    prices: {
      individual: {
        withCopay: [
          { label: '49 a 53 anos', value: '450,65' },
          { label: '54 a 58 anos', value: '585,84' },
          { label: '59 anos ou +', value: '878,76' }
        ],
        withoutCopay: [
          { label: '49 a 53 anos', value: '512,10' },
          { label: '54 a 58 anos', value: '665,73' },
          { label: '59 anos ou +', value: '998,59' }
        ]
      },
      pme: {
        withCopay: [
          { label: '49 a 53 anos', value: '355,54' },
          { label: '54 a 58 anos', value: '426,65' },
          { label: '59 anos ou +', value: '642,53' }
        ],
        withoutCopay: [
          { label: '49 a 53 anos', value: '402,94' },
          { label: '54 a 58 anos', value: '483,53' },
          { label: '59 anos ou +', value: '728,20' }
        ]
      }
    },
    audience: 'Individual / Familiar / Empresarial',
    features: [
      'Médico de Família e Equipe de Cuidado',
      'Pronto Atendimento Digital 24h',
      'Consultas, Exames e Internações',
      'Pronto-socorro 24h',
      'Rede Credenciada Essencial'
    ],
    highlight: false,
    color: 'bg-white'
  },
  {
    id: 'top200',
    name: 'Leve Top 200',
    prices: {
      individual: {
        withCopay: [
          { label: '49 a 53 anos', value: '716,25' },
          { label: '54 a 58 anos', value: '859,50' },
          { label: '59 anos ou +', value: '1.125,95' }
        ],
        withoutCopay: [
          { label: '49 a 53 anos', value: '753,95' },
          { label: '54 a 58 anos', value: '904,74' },
          { label: '59 anos ou +', value: '1.185,21' }
        ]
      },
      pme: {
        withCopay: [
          { label: '49 a 53 anos', value: '404,91' },
          { label: '54 a 58 anos', value: '483,53' },
          { label: '59 anos ou +', value: '728,84' }
        ],
        withoutCopay: [
          { label: '49 a 53 anos', value: '462,76' },
          { label: '54 a 58 anos', value: '555,31' },
          { label: '59 anos ou +', value: '832,96' }
        ]
      }
    },
    audience: 'Plano Completo e Acessível',
    features: [
      'Todos os benefícios do Top 100',
      'Rede Referenciada mais Ampla',
      'Seguro Viagem Nacional',
      'Acompanhamento de saúde constante',
      'Leve Dental I (6 meses grátis no PME)'
    ],
    highlight: true,
    color: 'bg-orange-50'
  },
  {
    id: 'top300',
    name: 'Leve Top 300',
    prices: {
      individual: {
        withCopay: [
          { label: '49 a 53 anos', value: '891,34' },
          { label: '54 a 58 anos', value: '1.069,61' },
          { label: '59 anos ou +', value: '1.401,19' }
        ],
        withoutCopay: [
          { label: '49 a 53 anos', value: '979,50' },
          { label: '54 a 58 anos', value: '1.175,40' } ,
          { label: '59 anos ou +', value: '1.539,77' }
        ]
      },
      pme: {
        withCopay: [
          { label: '49 a 53 anos', value: '519,21' },
          { label: '54 a 58 anos', value: '649,01' },
          { label: '59 anos ou +', value: '973,52' }
        ],
        withoutCopay: [
          { label: '49 a 53 anos', value: '642,75' },
          { label: '54 a 58 anos', value: '803,43' },
          { label: '59 anos ou +', value: '1.205,15' }
        ]
      }
    },
    audience: 'A Melhor Escolha (Qualidade)',
    features: [
      'Rede Credenciada Robusta',
      'APH Incluso: Médico em casa e Ambulância',
      'Orientação médica por telefone',
      'Programa de Cuidado Integral',
      'Acomodação Quarto Particular (QP)'
    ],
    highlight: false,
    color: 'bg-white'
  },
  {
    id: 'top400',
    name: 'Leve Top 400',
    prices: {
      individual: {
        withCopay: [
          { label: '49 a 53 anos', value: '1.075,79' },
          { label: '54 a 58 anos', value: '1.290,94' },
          { label: '59 anos ou +', value: '1.691,13' }
        ],
        withoutCopay: [
          { label: '49 a 53 anos', value: '1.181,88' },
          { label: '54 a 58 anos', value: '1.418,26' },
          { label: '59 anos ou +', value: '1.857,92' }
        ]
      },
      pme: {
        withCopay: [
          { label: '49 a 53 anos', value: '645,62' },
          { label: '54 a 58 anos', value: '807,02' },
          { label: '59 anos ou +', value: '1.210,53' }
        ],
        withoutCopay: [
          { label: '49 a 53 anos', value: '879,77' },
          { label: '54 a 58 anos', value: '1.099,71' },
          { label: '59 anos ou +', value: '1.649,57' }
        ]
      }
    },
    audience: 'Alto padrão de cuidado',
    features: [
      'O plano mais completo da Leve',
      'Rede Credenciada Premium',
      'Leve Dental I Grátis (Vitalício no Individual)',
      'APH Incluso: Médico em casa e Ambulância',
      'Assistência Viagem'
    ],
    highlight: false,
    color: 'bg-white'
  }
];

export const STATS: Stat[] = [
  { number: '40+', label: 'Hospitais Credenciados', icon: Hospital },
  { number: '300+', label: 'Consultórios Especializados', icon: Stethoscope },
  { number: '200+', label: 'Laboratórios', icon: ShieldCheck },
  { number: '12', label: 'Leve Clínicas', icon: MapPin }
];

export const BENEFITS: Benefit[] = [
  {
    title: 'Saúde na Palma da Mão',
    description: 'Tudo pelo App: Agende consultas, exames e fale com a assistente virtual 24h.',
    icon: Smartphone
  },
  {
    title: 'Rede Própria',
    description: '12 Clínicas Leve com atendimento personalizado, humanizado e resolutivo.',
    icon: Hospital
  },
  {
    title: 'Coleta Domiciliar',
    description: 'Realize seus exames sem precisar sair de casa e sem custo adicional (consulte planos).',
    icon: Truck
  },
  {
    title: 'Médico em Casa (APH)',
    description: 'Atendimento de urgência e emergência domiciliar com ambulância (Top 300/400).',
    icon: Ambulance
  },
  {
    title: 'Equipe de Cuidado',
    description: 'Médico de Família e equipe multidisciplinar para acompanhar sua saúde de perto.',
    icon: Users
  },
  {
    title: 'Plano Odontológico',
    description: 'Cobertura Leve Dental para manter seu sorriso em dia (consulte condições).',
    icon: Smile
  }
];

export const PHARMACIES: Pharmacy[] = [
  { name: "Drogasil", color: "text-red-600" },
  { name: "Droga Raia", color: "text-red-500" },
  { name: "Venâncio", color: "text-blue-600" }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Tenho um CNPJ ou MEI 'parado'. Posso usar?",
    answer: "Sim! Essa é uma dúvida muito comum. Mesmo que sua empresa não tenha funcionários ou faturamento ativo, se o CNPJ estiver com situação 'ATIVA' na Receita Federal, você pode contratar o plano Empresarial e economizar até 30%. Aceitamos MEI (com mais de 6 meses de abertura), EI, LTDA e outras naturezas jurídicas."
  },
  {
    question: "O plano empresarial é só para funcionários?",
    answer: "Não! Você pode usar seu CNPJ para fazer um plano familiar. A regra mínima são apenas 2 vidas. Exemplo: Você (Titular) + 1 Dependente (Esposa, Marido ou Filho). É a forma mais inteligente de garantir proteção para sua família pagando muito menos."
  },
  {
    question: "O plano possui coparticipação?",
    answer: "Sim. Oferecemos opções com coparticipação (mensalidade mais econômica) e sem coparticipação. O grande diferencial da Leve é que, mesmo nos planos COM coparticipação, você tem ISENÇÃO TOTAL de taxas (custo zero) ao realizar consultas e exames nas nossas Clínicas Próprias (Leve Clínicas). Você só paga coparticipação se optar por usar a rede externa."
  },
  {
    question: "O plano cobre internação e cirurgia? E parto?",
    answer: "Todos os planos cobrem urgência, emergência, internações clínicas e cirúrgicas. Sobre o PARTO (Obstetrícia): Esta cobertura está disponível exclusivamente nos planos EMPRESARIAIS (PME) a partir do plano Leve Top 200. Os planos Individuais/Familiares e o Top 100 PME não possuem cobertura para parto."
  },
  {
    question: "Qual a diferença de Acomodação (Enfermaria vs Apartamento)?",
    answer: "Nos planos Leve Top 100 e Top 200, a acomodação é em Enfermaria (quarto coletivo). Já nos planos Leve Top 300 e Top 400, você tem direito a Quarto Particular (Apartamento), garantindo mais privacidade para você e seu acompanhante."
  },
  {
    question: "Onde o plano é aceito (Abrangência)?",
    answer: "A rede da Leve Saúde é focada no Rio de Janeiro (Capital), Grande Rio (Niterói, São Gonçalo), Baixada Fluminense e Região Serrana. Para viagens nacionais, os planos Top 200, 300 e 400 contam com Seguro Viagem para urgências e emergências."
  },
  {
    question: "Existe carência para usar o plano?",
    answer: "Estamos com condições promocionais de REDUÇÃO DE CARÊNCIAS para novos contratos (compra de carência de planos anteriores). Para consultas e exames simples, o prazo costuma ser reduzido. Casos de Doenças Preexistentes (CPT) e Parto (onde houver cobertura) seguem as regras padrão da ANS."
  },
  {
    question: "É difícil marcar consultas? Preciso saber usar aplicativo?",
    answer: "De forma alguma! Sabemos que a tecnologia deve ajudar, não atrapalhar. Você pode agendar suas consultas pelo App, mas também temos atendimento telefônico e suporte humano. Nas Clínicas Leve, o agendamento é simples e rápido. E se precisar, a equipe Vortex te ajuda no primeiro acesso."
  },
  {
    question: "Preciso ir até um escritório físico para contratar?",
    answer: "Não! A Vortex facilita tudo para você. Todo o processo é 100% digital e seguro. Você envia a documentação pelo WhatsApp (foto legível), faz a assinatura eletrônica (super simples, basta um clique) e recebe sua carteirinha no celular. Atendemos todo o Rio de Janeiro sem você precisar sair do conforto de casa."
  }
];

export const OWN_CLINICS: Clinic[] = [
  { name: "Barra da Tijuca", address: "Av. Armando Lombardi, 333" },
  { name: "Botafogo", address: "Rua Voluntários da Pátria, 54" },
  { name: "Campo Grande", address: "Rua Augusto de Vasconcelos, 606" },
  { name: "Centro RJ", address: "Rua São José, 20 (Salas 602/603)" },
  { name: "Duque de Caxias", address: "Av. Gov. Leonel de Moura Brizola, 1203" },
  { name: "Madureira", address: "Rua Dagmar da Fonseca, 89" },
  { name: "Niterói", address: "Rua Aurelino Leal, 45" },
  { name: "Nova Iguaçu", address: "Rua Athaíde Pimenta de Moraes, 715" },
  { name: "Penha", address: "Rua José Maurício, 315" },
  { name: "Tijuca I", address: "R. Eng. Enaldo Cravo Peixoto, 215" },
  { name: "Tijuca II", address: "Rua Major Ávila, 260" },
  { name: "Taquara", address: "Estrada do Tindiba, 2695 (A partir Dez/25)" }
];

export const NETWORK_PARTNERS: NetworkData = {
  hospitals: [
    {
      region: "Rio de Janeiro (Capital)",
      list: [
        "Casa de Saúde São José",
        "Hospital Vitória",
        "Hospital Badim",
        "Hospital Pasteur",
        "Hospital São Lucas Copacabana",
        "Hospital Rio Barra",
        "Hospital Israelita",
        "Hospital São Matheus",
        "Prontobaby",
        "Criança 24h",
        "Hospital Nossa Sra. do Carmo",
        "Hospital São Francisco",
        "Hospital Irajá",
        "Hospital de Clínicas Jacarepaguá",
        "Hospital Procor",
        "Hospital Semiu",
        "Hospital Di Camp",
        "Clínica Cirúrgica Santa Bárbara",
        "Prosil",
        "Eye Center",
        "Centro Pediátrico da Barra",
        "Clínica da Gávea",
        "Centro Pediátrico da Lagoa",
        "U-Rio (Barra, Copacabana, Méier)"
      ]
    },
    {
      region: "Niterói e São Gonçalo",
      list: [
        "CHN (Complexo Hospitalar de Niterói)",
        "Hospital Santa Beatriz",
        "Hospital Alameda",
        "Hospital São Lucas Icaraí",
        "PROCEM (Pediátrico)",
        "Hospital Samcordis"
      ]
    },
    {
      region: "Baixada Fluminense",
      list: [
        "Hospital Daniel Lipp (Caxias)",
        "Hospital Mario Lioni (Caxias)",
        "Hospital EMCOR (Nova Iguaçu)",
        "Hospital Prontonil (Nova Iguaçu)",
        "Hospital Terezinha de Jesus (S. João de Meriti)"
      ]
    },
    {
      region: "Região Serrana",
      list: [
        "Hospital Santa Teresa (Petrópolis)",
        "Hospital SMH (Petrópolis)",
        "Hospital São José (Teresópolis)"
      ]
    }
  ],
  labs: [
    "Rio Labor",
    "Dimagem",
    "AnatoScan",
    "Centro de Medicina Nuclear da Guanabara",
    "Lafe",
    "Laboratório Morales",
    "ProEcho",
    "Labs A+",
    "Felippe Mattoso",
    "Sérgio Franco",
    "Bronstein",
    "Lâmina",
    "CDPI",
    "Multi Imagem",
    "Laboratório de Corrêas"
  ]
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Maria Lúcia, 62 anos",
    role: "Aposentada - Tijuca",
    text: "O Alessandro foi maravilhoso. Eu estava pagando um absurdo no meu plano antigo. Ele fez a cotação da Leve, me explicou tudo sobre a rede própria e agora pago metade do preço e sou super bem atendida na Tijuca.",
    stars: 5
  },
  {
    name: "Roberto Campos, 55 anos",
    role: "Autônomo - Campo Grande",
    text: "Fiquei impressionado com a agilidade. Mandei os documentos pelo WhatsApp e em pouco tempo já estava com a carteirinha. O plano cabe no bolso e a Vortex me deu todo o suporte.",
    stars: 5
  },
  {
    name: "Sônia Ferreira, 70 anos",
    role: "Pensionista - Niterói",
    text: "Dificil achar corretor que tenha paciência com idoso hoje em dia. O atendimento foi nota 10, muito claro e sem letras miúdas. Recomendo a todos os meus amigos.",
    stars: 5
  }
];