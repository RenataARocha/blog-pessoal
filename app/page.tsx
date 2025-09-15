"use client";

import PostCard from "../components/PostCard";
import FeaturedPostCard from "../components/FeaturedPostCard";
import { posts } from "../data/posts";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Mapeamento slug -> caminho da imagem no /public
const imagesMap: Record<string, string> = {
  "organizadora-lar": "/assets/organizadora-lar1.png",
  "gerador-curriculo": "/assets/gerador-curriculo1.png",
  "to-do-list-react": "/assets/to-do-list-react1.png",
  "assistente-de-estudos-com-ia": "/assets/assistente-de-estudos-com-ia1.png",
};

export default function Home() {
  const firstTwoPosts = posts.slice(0, 2);
  const remainingPosts = posts.slice(2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero / Apresentação com imagem de fundo */}
      <section className="relative w-screen h-screen" aria-labelledby="hero-heading">
        <Image
          src="/assets/codigo.jpg"
          alt="Imagem de fundo, código de programação em uma tela escura."
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 id="hero-heading" className="text-5xl font-playfair mb-6">Eu sou Renata Rocha</h1>
          <p className="text-lg font-assistant mb-8">
            Desenvolvedora Front-End em transição, criando experiências digitais que combinam beleza e funcionalidade.
          </p>
          <Link
            href="/posts"
            className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition transform hover:-translate-y-1 inline-block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            role="button"
          >
            Ver Posts
          </Link>
        </div>
      </section>

      {/* Últimos Posts (os 2 primeiros, sem imagem) */}
      <section className="max-w-6xl mx-auto py-12 px-4" aria-labelledby="posts-heading">
        <h2 id="posts-heading" className="text-3xl font-playfair font-bold text-gray-800 mb-8 text-center">Últimos Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {firstTwoPosts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.summary}
              date={post.date}
              slug={post.slug}
            />
          ))}
        </div>

        {/* Demais posts (com imagem, usando FeaturedPostCard) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {remainingPosts.map((post) => (
            <FeaturedPostCard
              key={post.id}
              title={post.title}
              content={post.summary}
              date={post.date}
              slug={post.slug}
              image={imagesMap[post.slug]}
            />
          ))}
        </div>
      </section>

      {/* Mini bio / Sobre você */}
      <section className="max-w-6xl mx-auto py-16 px-4" aria-labelledby="about-heading">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/assets/programando.jpg"
              alt="Renata Rocha programando em um notebook, com café ao lado."
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>

          <div className="md:w-1/2 text-center md:text-left">
            <h2 id="about-heading" className="text-3xl font-playfair font-bold text-gray-800 mb-4">Sobre mim</h2>
            <p className="text-lg text-gray-700 font-assistant leading-relaxed mb-6">
              Sou <strong>Renata Rocha</strong>, designer gráfico em transição para o
              desenvolvimento <strong>Front-End</strong>. Apaixonada por criar projetos
              modernos, intuitivos e com foco em usabilidade, uno minha experiência em
              design à programação para transformar ideias em sites bonitos e funcionais.
              Atualmente, aprofundo meus estudos em <strong>React</strong>, desenvolvendo
              aplicações dinâmicas e escaláveis que garantem uma experiência de usuário
              excepcional.
            </p>

            <Link
              href="/about"
              className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition transform hover:-translate-y-1 inline-block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Saiba mais
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}