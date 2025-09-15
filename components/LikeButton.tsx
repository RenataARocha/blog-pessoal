"use client";

import { useState, useEffect } from "react";

type LikeButtonProps = {
    slug: string; // cada post deve ter um slug único
};

export default function LikeButton({ slug }: LikeButtonProps) {
    const [likes, setLikes] = useState<number>(0);

    useEffect(() => {
        try {
            const saved = localStorage.getItem(`likes:${slug}`);
            if (saved) setLikes(Number(saved));
        } catch {
            // Ambiente sem localStorage
        }
    }, [slug]);

    useEffect(() => {
        try {
            localStorage.setItem(`likes:${slug}`, String(likes));
        } catch {
            // Segurança caso localStorage não disponível
        }
    }, [likes, slug]);

    return (
        <button
            onClick={() => setLikes((prev) => prev + 1)}
            className="bg-orange-600 text-white px-4 py-2 rounded-xl hover:bg-orange-700 transition transform hover:-translate-y-1 inline-block"
            aria-label={`Curtir post: ${likes} curtidas`}
        >
            🤍 Curtir {likes > 0 ? `(${likes})` : ""}
        </button>
    );
}
