"use client";

import { useState, useEffect } from "react";

export default function LikeButton({ slug }: { slug: string }) {
  const [likes, setLikes] = useState<number>(0);

  // carrega valor salvo no localStorage ao montar
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`likes:${slug}`);
      if (saved) setLikes(Number(saved));
    } catch (e) {
      // ambiente sem localStorage (segurança)
    }
  }, [slug]);

  // salva no localStorage quando likes muda
  useEffect(() => {
    try {
      localStorage.setItem(`likes:${slug}`, String(likes));
    } catch (e) {}
  }, [likes, slug]);

  return (
    <button
      onClick={() => setLikes((prev) => prev + 1)}
      className="bg-pink-500 text-white px-4 py-2 rounded-xl hover:bg-pink-600 transition"
    >
      ❤️ Curtir {likes > 0 ? `(${likes})` : ""}
    </button>
  );
}
