export type Post = {
  id: number;
  slug: string;
  title: string;
  summary: string;
  date: string;
  author: string;
  content: string;
  github?: string;
  site?: string;
};



export const posts: Post[] = [
 {
    id: 1,
    slug: "primeiro-post",
    title: "Meu Primeiro Post",
    summary: "Introdução ao meu blog pessoal.",
    date: "2025-08-01",
    author: "Renata Rocha",
    content:
      "Hoje começa oficialmente minha jornada no desenvolvimento front-end! 🚀\n\n" +
      "Depois de muito estudo e dedicação, decidi compartilhar aqui minhas experiências, aprendizados e projetos. " +
      "Quero registrar cada passo dessa caminhada — desde os primeiros desafios com HTML, CSS e JavaScript até as conquistas maiores no futuro.\n\n" +
      "Vem comigo nessa jornada, porque aprendizado compartilhado é aprendizado multiplicado! 💡💻",
  },
  {
    id: 2,
    slug: "nextjs-app-router",
    title: "Explorando o App Router do Next.js",
    summary: "Entendendo a nova estrutura de roteamento do Next.js.",
    date: "2025-08-07",
    author: "Renata Rocha",
    content:
      "O **App Router** do Next.js chegou trazendo uma revolução na forma de estruturar aplicações. " +
      "Agora temos **layouts aninhados**, simplificação no roteamento e suporte nativo a **Streaming** e **SSR**.\n\n" +
      "Estou explorando essas novidades no meu projeto pessoal e já percebo como o desenvolvimento fica mais " +
      "organizado e poderoso. Em breve compartilho aqui exemplos práticos que podem ajudar quem também está aprendendo Next.js! ⚡",
  },
   {
    id: 3,
    slug: "organizadora-lar",
    title: "Organizadora do Lar",
    summary: "App de organização de tarefas com alarme, categorias, metas e sugestões automáticas.",
    date: "2025-08-15",
    author: "Renata Rocha",
    content:
      "Criar o **Organizadora do Lar** foi transformar uma necessidade pessoal em um projeto real. ✨\n\n" +
      "O app ajuda a gerenciar tarefas do dia a dia com **alarme**, **categorias**, **metas** e até **sugestões automáticas** " +
      "para facilitar a rotina. Tudo isso desenvolvido com **HTML, CSS e JavaScript**.\n\n" +
      "Ainda tenho várias ideias para evoluir essa aplicação — incluindo banco de dados e notificações. " +
      "Esse é um dos projetos que mais me orgulho, porque une tecnologia com solução prática para a vida real. 💖",
    github: "https://github.com/RenataARocha/Organizadora-Do-Lar",
    site: "https://renataarocha.github.io/Organizadora-Do-Lar/pages/tela-inicial.html",
  },
  {
    id: 4,
    slug: "gerador-curriculo",
    title: "Gerador de Currículo Interativo",
    summary: "Projeto que cria currículos dinâmicos e interativos, com preview em tempo real.",
    date: "2025-08-23",
    author: "Renata Rocha",
    content:
      "Sempre acreditei que um **currículo bem apresentado** pode abrir portas. Pensando nisso, criei o **Gerador de Currículo Interativo**. 💼\n\n" +
      "Ele permite montar currículos bonitos e dinâmicos rapidamente, com **preview em tempo real**. " +
      "Foi desenvolvido com **HTML, CSS e JavaScript**, e ainda quero incluir um **vídeo demonstrativo** mostrando o passo a passo.\n\n" +
      "É um projeto pessoal que une meu lado criativo de designer com minha nova fase como desenvolvedora. 🎨💻",
    github: "https://github.com/RenataARocha/projeto-8-gerador-curriculo",
    site: "https://projeto-8-gerador-curriculo.vercel.app/",
  },
  {
    id: 5,
    slug: "to-do-list-react",
    title: "To-Do List React",
    summary: "Projeto completo desenvolvido em HTML, CSS e JavaScript, com foco em interface agradável.",
    date: "2025-09-03",
    author: "Renata Rocha",
    content:
      "No programa **Desenvolve (Grupo Boticário + Koru)**, tive a oportunidade de trabalhar em equipe no projeto **To-Do List React**. ✅\n\n" +
      "O objetivo era criar uma lista de tarefas funcional, com foco em **organização**, **responsividade** e **interface amigável**. " +
      "Tecnologias utilizadas: **HTML, CSS e JavaScript**.\n\n" +
      "Foi um exercício incrível de colaboração, troca de ideias e aprendizado. Em breve trago melhorias e vídeos demonstrativos desse trabalho em equipe. 🤝",
    github: "https://github.com/RenataARocha/projeto-7",
    site: "https://projeto-7-sage.vercel.app/",
  },
  {
    id: 6,
    slug: "assistente-de-estudos-com-ia",
    title: "Assistente de Estudos com IA",
    summary: "Projeto desenvolvido durante o programa Koru, aplicando boas práticas de front-end.",
    date: "2025-09-10",
    author: "Renata Rocha",
    content:
      "Esse projeto foi especial: durante o **programa Desenvolve (Boticário + Koru)**, participei do desenvolvimento do **Assistente de Estudos com IA**. 🤖✨\n\n" +
      "Trabalhamos em grupo aplicando boas práticas de **front-end** com **HTML, CSS e JavaScript**, criando uma aplicação que auxilia estudantes na rotina de aprendizado.\n\n" +
      "Ainda quero incluir **melhorias** e **vídeos demonstrativos** para mostrar todo o potencial dessa aplicação. " +
      "Foi uma experiência incrível de colaboração e inovação em equipe! 🚀",
    github: "https://github.com/RenataARocha/koru-projeto-6",
    site: "https://koru-projeto-6.vercel.app/",
  },
];
