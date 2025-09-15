"use client";

import { posts } from "../../data/posts";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import LikeButton from "../../components/LikeButton";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

// Mapeamento slug -> caminho da imagem no /public
const mediaMap: Record<string, string> = {
  "organizadora-lar": "/assets/organizadora-lar.mp4",
  "gerador-curriculo": "/assets/gerador-curriculo.mp4",
  "to-do-list-react": "/assets/to-do-list-react.mp4",
  "assistente-de-estudos-com-ia": "/assets/assistente-de-estudos-com-ia.mp4",
};

export default function BlogPage() {
  return (
    <motion.div
      className="max-w-6xl mx-auto py-12 px-4 flex flex-col md:flex-row gap-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6 }}
    >
      {/* Menu lateral */}
      <aside className="w-full md:w-1/4 sticky top-20 self-start mb-8 md:mb-0" aria-label="Menu lateral de posts">
        <h2 className="font-bold text-xl mb-4">Posts</h2>
        <ul className="space-y-2">
          {posts.map((post) => (
            <li key={post.id}>
              <a
                href={`#${post.slug}`}
                className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-label={`Ir para o post: ${post.title}`}
              >
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Conteúdo dos posts */}
      <main className="w-full md:w-3/4 space-y-16">
        {posts
          .slice()
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((post) => {
            const mediaSrc = mediaMap[post.slug];
            return (
              <article
                key={post.id}
                id={post.slug}
                className="p-6 rounded-lg shadow-md hover:shadow-lg transition bg-white"
                aria-labelledby={`title-${post.id}`}
              >
                {/* Título e data */}
                <h2 id={`title-${post.id}`} className="text-2xl font-bold mb-2">
                  {post.title}
                </h2>
                <small className="text-gray-500">{post.date}</small>

                {/* Imagem / vídeo do post */}
                {mediaSrc && mediaSrc.endsWith(".mp4") ? (
                  <video
                    src={mediaSrc}
                    controls
                    className="rounded-lg my-4 w-full max-h-[450px] object-cover"
                    aria-label={`Vídeo do post: ${post.title}`}
                  />
                ) : mediaSrc ? (
                  <Image
                    src={mediaSrc}
                    alt={`Imagem do post: ${post.title}`}
                    width={800}
                    height={450}
                    className="rounded-lg my-4 w-full object-cover"
                  />
                ) : null}

                {/* Conteúdo com Markdown */}
                <div className="text-gray-700 mb-4 whitespace-pre-line">
                  <ReactMarkdown
                    components={{
                      a: ({ href, children }) => (
                        <a
                          href={href}
                          className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-orange-500"
                          target={href?.startsWith("http") ? "_blank" : undefined}
                          rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                          aria-label={typeof children === "string" ? `Abrir link: ${children}` : undefined}
                        >
                          {children}
                        </a>
                      ),
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>

                {/* Botões e interações */}
                <div className="flex items-center gap-4 mb-4">
                  <LikeButton slug={post.slug} />
                  {post.github && (
                    <Link
                      href={post.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-orange-500"
                      aria-label={`Ver projeto ${post.title} no GitHub`}
                    >
                      Ver no GitHub
                    </Link>
                  )}
                  {post.site && (
                    <Link
                      href={post.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-orange-500"
                      aria-label={`Visitar site do projeto ${post.title}`}
                    >
                      Ver no Site
                    </Link>
                  )}
                </div>

                {/* Comentários */}
                <CommentSection postSlug={post.slug} />
              </article>
            );
          })}
      </main>
    </motion.div>
  );
}

// Comentários únicos por post
function CommentSection({ postSlug }: { postSlug: string }) {
  const [comments, setComments] = useState<
    Record<string, { text: string; author: string; replyTo?: number; liked?: boolean }[]>
  >({});
  const [input, setInput] = useState("");
  const [author, setAuthor] = useState("");
  const [replyTo, setReplyTo] = useState<number | null>(null);

  const postComments = comments[postSlug] || [];

  const [errorMessage, setErrorMessage] = useState("");

  const handleAddComment = () => {
    if (!author.trim()) {
      setErrorMessage("Por favor, preencha o nome!");
      return;
    }
    if (!input.trim()) {
      setErrorMessage("Por favor, escreva seu comentário!");
      return;
    }

    const newComment = {
      text: input.trim(),
      author: author.trim(),
      replyTo: replyTo ?? undefined,
      liked: false,
    };
    setComments((prev) => ({
      ...prev,
      [postSlug]: [...(prev[postSlug] || []), newComment],
    }));
    setInput("");
    setReplyTo(null);
    setErrorMessage("");
  };

  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-2">Comentários</h3>

      {/* Inputs */}
      <div className="flex flex-col md:flex-row gap-2 mb-2">
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Seu nome..."
          className="border p-2 rounded-lg w-full md:w-1/4"
          aria-label="Digite seu nome"
        />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={replyTo !== null ? "Responder..." : "Escreva seu comentário..."}
          className="border p-2 rounded-lg flex-1"
          aria-label="Digite seu comentário"
        />
        <button
          onClick={handleAddComment}
          className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition transform hover:-translate-y-1 inline-block focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-label={replyTo !== null ? "Responder comentário" : "Adicionar comentário"}
        >
          {replyTo !== null ? "Responder" : "Comentar"}
        </button>
      </div>

      {/* Mensagem de erro */}
      {errorMessage && (
        <p className="text-red-600 text-sm mb-2" role="alert">{errorMessage}</p>
      )}

      {/* Lista de comentários */}
      <ul className="space-y-3" aria-label="Lista de comentários">
        {postComments.map((comment, idx) => (
          <li
            key={idx}
            className={`p-2 rounded-lg ${comment.replyTo !== undefined ? "ml-6 bg-gray-50" : "bg-gray-100"}`}
            aria-label={`Comentário de ${comment.author}`}
          >
            <p className="font-semibold text-sm text-gray-700">{comment.author}</p>
            <p className="text-gray-700 break-words">{comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
