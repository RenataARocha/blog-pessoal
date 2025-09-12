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
    content: "O App Router traz várias melhorias...",
  },
  {
    id: 3,
    slug: "organizadora-lar",
    title: "Organizadora do Lar",
    summary: "App de organização de tarefas com alarme, categorias, metas e sugestões automáticas.",
    date: "2025-09-11",
    author: "Renata Rocha",
    content: "Projeto completo da Organizadora do Lar. Inclui alarme, categorias e metas para facilitar sua rotina.",
  },
  {
    id: 4,
    slug: "gerador-curriculo",
    title: "Gerador de Currículo Interativo",
    summary: "Projeto que cria currículos dinâmicos e interativos, com preview em tempo real.",
    date: "2025-09-12",
    author: "Renata Rocha",
    content: "Gerador de Currículo Interativo com preview em tempo real. Ideal para criar currículos bonitos rapidamente.",
  },
  {
    id: 5,
    slug: "projeto-7-sage",
    title: "Projeto 7 - Sage",
    summary: "Projeto completo desenvolvido em HTML, CSS e JavaScript, com foco em interface agradável.",
    date: "2025-09-10",
    author: "Renata Rocha",
    content: "Projeto 7 - Sage, com interface estilizada e responsiva usando HTML, CSS e JavaScript.",
  },
  {
    id: 6,
    slug: "koru-projeto-6",
    title: "Projeto Koru - Projeto 6",
    summary: "Projeto desenvolvido durante o programa Koru, aplicando boas práticas de front-end.",
    date: "2025-09-09",
    author: "Renata Rocha",
    content: "Projeto Koru - Projeto 6, com boas práticas de front-end aplicadas durante o programa de desenvolvimento.",
  },
];

export async function getAllPosts() {
  return posts;
}

export async function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
