"use client";

import { useState, useEffect } from "react";

type LikeButtonProps = {
    slug: string; // cada post deve ter um slug único
};

export default function LikeButton({ slug }: LikeButtonProps) {
    const [likes, setLikes] = useState<number>(0);

    // Carrega o valor salvo no localStorage ao montar o componente
    useEffect(() => {
        try {
            const saved = localStorage.getItem(`likes:${slug}`);
            if (saved) setLikes(Number(saved));
        } catch {
            // Ambiente sem localStorage (por exemplo, SSR)
        }
    }, [slug]);

    // Salva no localStorage sempre que os likes mudam
    useEffect(() => {
        try {
            localStorage.setItem(`likes:${slug}`, String(likes));
        } catch {
            // Segurança caso o localStorage não esteja disponível
        }
    }, [likes, slug]);

    return (
        <button
            onClick={() => setLikes((prev) => prev + 1)}
            className="bg-orange-600 text-white px-4 py-2 rounded-xl hover:bg-orange-700 transition"
        >
            🤍 Curtir {likes > 0 ? `(${likes})` : ""}
        </button>
    );
}
