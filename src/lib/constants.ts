/* ========================================
   VAP APP — Constants & Data
   ======================================== */

export const APP_LINKS = {
  appStore: "https://apps.apple.com/br/app/vapapp/id6758860501",
  googlePlay:
    "https://play.google.com/store/apps/details?id=com.vapapp.aplicativo",
  instagram: "https://www.instagram.com/vapapp.oficial",
  email: "contato@vap-app.com.br",
} as const;

export const NAV_ITEMS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre o VAP", href: "#sobre" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Segurança", href: "#seguranca" },
  { label: "Equipe", href: "#equipe" },
  { label: "Perguntas frequentes", href: "#faq" },
] as const;

export const IDENTIFICATION_CARDS = [
  {
    icon: "BookOpen",
    title: "Informação em linguagem simples",
    description:
      "Conteúdos educativos para ajudar a família a compreender melhor os cuidados do dia a dia.",
  },
  {
    icon: "CalendarCheck",
    title: "Organização da rotina",
    description:
      "Ferramentas para registrar informações, acompanhar acontecimentos e levar dados importantes para a equipe de saúde.",
  },
  {
    icon: "Heart",
    title: "Acolhimento e comunidade",
    description:
      "Um espaço para aproximar famílias que vivem desafios semelhantes, com regras de segurança e respeito.",
  },
] as const;

export const FEATURES = [
  {
    icon: "Bot",
    title: "Dr. VAP",
    subtitle: "Agente educacional de inteligência artificial",
    description:
      "Ajuda a explicar dúvidas educativas de rotina em linguagem simples e acessível.",
    warning:
      "O Dr. VAP não realiza diagnóstico, não prescreve tratamentos e não substitui médicos ou serviços de emergência.",
  },
  {
    icon: "BookHeart",
    title: "Diário de Cuidados",
    subtitle: "",
    description:
      "Registre acontecimentos, mudanças, observações e informações importantes da rotina da criança.",
    warning: "",
  },
  {
    icon: "GraduationCap",
    title: "Conteúdos Educativos",
    subtitle: "",
    description:
      "Acesse aulas, checklists, infográficos, materiais de apoio e orientações para o dia a dia.",
    warning: "",
  },
  {
    icon: "Headphones",
    title: "Podcasts",
    subtitle: "",
    description:
      "Episódios educativos sobre rotina, cuidados, segurança, acolhimento e qualidade de vida.",
    warning: "",
  },
  {
    icon: "Users",
    title: "Comunidade VAP",
    subtitle: "",
    description:
      "Um ambiente moderado para acolhimento, troca de experiências e aproximação entre famílias.",
    warning: "",
  },
  {
    icon: "MapPin",
    title: "EU ESTOU AQUI",
    subtitle: "",
    description:
      "Uma iniciativa que ajuda a tornar visível a realidade das crianças traqueostomizadas e de suas famílias.",
    warning: "",
  },
  {
    icon: "HelpCircle",
    title: "Quiz Educativo",
    subtitle: "",
    description:
      "Teste seus conhecimentos e aprenda de maneira simples e interativa.",
    warning: "",
  },
  {
    icon: "UserCircle",
    title: "Perfil da Criança",
    subtitle: "",
    description:
      "Organize informações essenciais para facilitar o acompanhamento da rotina.",
    warning: "",
  },
  {
    icon: "PlayCircle",
    title: "Aulas",
    subtitle: "Em breve",
    description:
      "Acesso a videoaulas e treinamentos especializados para o cuidado diário.",
    warning: "",
  },
  {
    icon: "Stethoscope",
    title: "Encontre seu profissional",
    subtitle: "Em breve",
    description:
      "Busque por profissionais e especialistas de saúde próximos a você.",
    warning: "",
  },
] as const;

export const TEAM_MEMBERS = [
  {
    name: "Dr. Wander Mattos Cardoso",
    role: "Fundador e responsável clínico",
    description:
      "Cirurgião torácico com experiência em via aérea pediátrica.",
    initials: "WC",
  },
  {
    name: "Kauê Cavalcante",
    role: "CTO",
    description:
      "Responsável pelo desenvolvimento e pela estrutura tecnológica do aplicativo.",
    initials: "KC",
  },
  {
    name: "Fernando Araujo",
    role: "CIO/COO — Produto, tecnologia e automações",
    description:
      "Atua na construção dos processos, integrações e soluções tecnológicas do VAP App.",
    initials: "FA",
  },
  {
    name: "Kayo Vinicius",
    role: "Conteúdo e edição",
    description:
      "Participa da criação dos conteúdos a partir de uma história pessoal ligada à traqueostomia pediátrica.",
    initials: "KV",
  },
  {
    name: "Dra. Mirella Magalhães",
    role: "Revisão científica",
    description:
      "Participa da revisão clínica e científica dos conteúdos educativos.",
    initials: "MM",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "O VAP App é gratuito?",
    answer:
      "Sim. O aplicativo foi criado para ampliar o acesso das famílias à informação educativa e às ferramentas disponíveis na plataforma.",
  },
  {
    question: "Para quem é o VAP App?",
    answer:
      "Para pais, familiares, cuidadores, profissionais, escolas e redes de apoio relacionadas às crianças traqueostomizadas.",
  },
  {
    question: "O Dr. VAP substitui um médico?",
    answer:
      "Não. O Dr. VAP é um recurso educacional e não realiza diagnóstico, prescrição ou atendimento de emergência.",
  },
  {
    question: "Os conteúdos possuem revisão?",
    answer:
      "Os materiais passam por curadoria, padronização e revisão humana antes da publicação.",
  },
  {
    question: "O que é o 'EU ESTOU AQUI'?",
    answer:
      "É uma iniciativa para contribuir com a visibilidade da realidade das crianças traqueostomizadas e de suas famílias.",
  },
  {
    question: "O aplicativo funciona em Android e iPhone?",
    answer:
      "Sim. O VAP App está disponível na Google Play e na App Store.",
  },
  {
    question: "O que fazer em uma emergência?",
    answer:
      "Procure imediatamente um serviço de emergência. O aplicativo e a comunidade não substituem atendimento presencial.",
  },
] as const;

export const TIMELINE_STEPS = [
  {
    title: "O início",
    description:
      "Uma criança e uma família enfrentam a traqueostomia.",
    icon: "Baby",
  },
  {
    title: "O desafio",
    description: "A experiência revela a falta de orientação.",
    icon: "AlertTriangle",
  },
  {
    title: "A união",
    description: "Profissionais e tecnologia se unem.",
    icon: "Handshake",
  },
  {
    title: "O nascimento",
    description: "Surge o VAP App.",
    icon: "Sparkles",
  },
  {
    title: "O impacto",
    description:
      "A informação passa a alcançar famílias em diferentes lugares.",
    icon: "Globe",
  },
] as const;
