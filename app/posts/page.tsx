"use client";

import { posts } from "../../data/posts";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import LikeButton from "../../components/LikeButton";

// Import das imagens
import imgOrganizadora from "../../public/assets/organizadora-lar.png";
import imgCurriculo from "../../public/assets/gerador-curriculo.png";
import imgProjeto7 from "../../public/assets/to-do-list-react.png";
import imgKoru from "../../public/assets/assistente-de-estudos-com-IA.png";

// Mapeamento slug -> imagem
const imagesMap: Record<string, StaticImageData> = {
  "organizadora-lar": imgOrganizadora,
  "gerador-curriculo": imgCurriculo,
  "To-Do-List-React": imgProjeto7,
  "assistente-de-estudos-com-IA": imgKoru,
};

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 flex flex-col md:flex-row gap-8">
      {/* Menu lateral */}
      <aside className="w-full md:w-1/4 sticky top-20 self-start mb-8 md:mb-0">
        <h2 className="font-bold text-xl mb-4">Posts</h2>
        <ul className="space-y-2">
          {posts.map((post) => (
            <li key={post.id}>
              <a
                href={`#${post.slug}`}
                className="text-blue-600 hover:underline"
              >
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Conteúdo dos posts */}
      <main className="w-full md:w-3/4 space-y-16">
        {posts.map((post) => {
          const imgSrc = imagesMap[post.slug];
          return (
            <article
              key={post.id}
              id={post.slug}
              className="p-6 rounded-lg shadow-md hover:shadow-lg transition bg-white"
            >
              {/* Título e data */}
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <small className="text-gray-500">{post.date}</small>

              {/* Imagem do post */}
              {imgSrc && (
                <Image
                  src={imgSrc}
                  alt={post.title}
                  width={800}
                  height={450}
                  className="rounded-lg my-4 object-cover"
                />
              )}

              {/* Conteúdo */}
              <p className="text-gray-700 mb-4 whitespace-pre-line">{post.content}</p>

              {/* Botões e interações */}
              <div className="flex items-center gap-4 mb-4">
                <LikeButton slug={post.slug} />
                <Link
                  href={post.github ?? "#"}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Ver no GitHub
                </Link>
                {post.site && (
                  <Link
                    href={post.site}
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    Ver no Site
                  </Link>
                )}
              </div>

              {/* Campo de comentários */}
              <CommentSection postSlug={post.slug} />
            </article>
          );
        })}
      </main>
    </div>
  );
}

// Usar o postSlug para criar comentários únicos por post
function CommentSection({ postSlug }: { postSlug: string }) {
  const [comments, setComments] = useState<
    Record<string, { text: string; author: string; replyTo?: number; liked?: boolean }[]>
  >({});
  const [input, setInput] = useState("");
  const [author, setAuthor] = useState(""); 
  const [replyTo, setReplyTo] = useState<number | null>(null);

  const postComments = comments[postSlug] || [];

  const handleAddComment = () => {
    if (!input.trim() || !author.trim()) return;
    const newComment = { 
      text: input.trim(), 
      author: author.trim(), 
      replyTo: replyTo ?? undefined, 
      liked: false 
    };
    setComments((prev) => ({
      ...prev,
      [postSlug]: [...(prev[postSlug] || []), newComment],
    }));
    setInput("");
    setReplyTo(null);
  };

  const toggleLike = (idx: number) => {
    setComments((prev) => ({
      ...prev,
      [postSlug]: prev[postSlug].map((c, i) =>
        i === idx ? { ...c, liked: !c.liked } : c
      ),
    }));
  };

  const removeComment = (idx: number) => {
    setComments((prev) => ({
      ...prev,
      [postSlug]: prev[postSlug].filter((_, i) => i !== idx),
    }));
  };

  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-2">Comentários</h3>

      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Seu nome..."
          className="border p-2 rounded-lg w-full md:w-1/4"
        />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={replyTo !== null ? "Responder..." : "Escreva seu comentário..."}
          className="border p-2 rounded-lg flex-1"
        />
        <button
          onClick={handleAddComment}
          className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
        >
          {replyTo !== null ? "Responder" : "Comentar"}
        </button>
      </div>

      <ul className="space-y-3">
        {postComments.map((comment, idx) => (
          <li
            key={idx}
            className={`p-2 rounded-lg ${
              comment.replyTo !== undefined ? "ml-6 bg-gray-50" : "bg-gray-100"
            }`}
          >
            {/* Mostra nome + comentário */}
            <p className="font-semibold text-sm text-gray-700">{comment.author}</p>
            <p className="text-gray-700 break-words">{comment.text}</p>

            <div className="flex items-center gap-4 mt-2 text-sm">
              <button
                className={`${
                  comment.liked ? "text-pink-500 font-semibold" : "text-gray-500"
                } hover:text-pink-600`}
                onClick={() => toggleLike(idx)}
              >
                {comment.liked ? "Curtido" : "Curtir"}
              </button>

              {comment.replyTo === undefined && (
                <button
                  onClick={() => setReplyTo(idx)}
                  className="text-gray-500 hover:text-pink-500"
                >
                  Responder
                </button>
              )}

              <button
                onClick={() => removeComment(idx)}
                className="hover:text-red-500 ml-auto"
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

