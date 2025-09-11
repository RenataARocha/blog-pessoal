export type Post = {
  id: number;      
  slug: string;
  title: string;
  summary: string;
  date: string;     // ISO ou '2025-09-11'
  author: string;
  content: string;
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
];

export async function getAllPosts() {
  return posts;
}

export async function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
