// Tipo de post
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

// Array de posts
export const posts: Post[] = [
  {
    id: 1,
    slug: "primeiro-post",
    title: "Meu Primeiro Post",
    summary: "Introdução ao meu blog pessoal.",
    date: "2025-09-10",
    author: "Renata Rocha",
    content: "Esse é o conteúdo completo do meu primeiro post. Estou animada para compartilhar minha jornada no desenvolvimento front-end!",
  },
  {
    id: 2,
    slug: "nextjs-app-router",
    title: "Explorando o App Router do Next.js",
    summary: "Entendendo a nova estrutura de roteamento do Next.js.",
    date: "2025-09-11",
    author: "Renata Rocha",
    content: "O App Router traz várias melhorias, como layouts aninhados, simplificação do roteamento e suporte nativo a streaming e SSR. Estou explorando essas funcionalidades no meu projeto pessoal!",
  },
  {
    id: 3,
    slug: "organizadora-lar",
    title: "Organizadora do Lar",
    summary: "App de organização de tarefas com alarme, categorias, metas e sugestões automáticas.",
    date: "2025-09-12",
    author: "Renata Rocha",
    content: "Projeto completo da Organizadora do Lar. Inclui alarme, categorias, metas e sugestões automáticas para facilitar sua rotina. Funcionalidades desenvolvidas com HTML, CSS e JavaScript. Em breve melhorias e novas funcionalidades serão implementadas.",
    github: "https://github.com/RenataARocha/Organizadora-Do-Lar",
    site: "https://renataarocha.github.io/Organizadora-Do-Lar/pages/tela-inicial.html",
  },
  {
    id: 4,
    slug: "gerador-curriculo",
    title: "Gerador de Currículo Interativo",
    summary: "Projeto que cria currículos dinâmicos e interativos, com preview em tempo real.",
    date: "2025-09-13",
    author: "Renata Rocha",
    content: "Projeto pessoal que cria currículos interativos e bonitos rapidamente. Desenvolvido com HTML, CSS e JavaScript, inclui preview em tempo real. Estou pensando em adicionar vídeo demonstrativo em breve.",
    github: "https://github.com/RenataARocha/projeto-8-gerador-curriculo",
    site: "https://projeto-8-gerador-curriculo.vercel.app/",
  },
  {
    id: 5,
    slug: "To-Do-List-React",
    title: "To-Do List React",
    summary: "Projeto completo desenvolvido em HTML, CSS e JavaScript, com foco em interface agradável.",
    date: "2025-09-14",
    author: "Renata Rocha",
    content: "Projeto 7 - Sage, desenvolvido em grupo pelo programa Desenvolve, em parceria com o Grupo Boticário + Koru. Inclui funcionalidades de lista de tarefas com organização e responsividade. Tecnologias: HTML, CSS e JavaScript. Em breve melhorias e vídeos demonstrativos.",
    github: "https://github.com/RenataARocha/projeto-7",
    site: "https://projeto-7-sage.vercel.app/",
  },
  {
    id: 6,
    slug: "assistente-de-estudos-com-IA",
    title: "Assistente de Estudos com IA",
    summary: "Projeto desenvolvido durante o programa Koru, aplicando boas práticas de front-end.",
    date: "2025-09-15",
    author: "Renata Rocha",
    content: "Projeto 6 - Koru, desenvolvido em grupo pelo programa Desenvolve, em parceria com o Grupo Boticário + Koru. Aplicação de boas práticas de front-end com HTML, CSS e JavaScript. Futuras melhorias e vídeos demonstrativos serão adicionados.",
    github: "https://github.com/RenataARocha/koru-projeto-6",
    site: "https://koru-projeto-6.vercel.app/",
  },
];

// Funções auxiliares
export async function getAllPosts() {
  return posts;
}

export async function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
