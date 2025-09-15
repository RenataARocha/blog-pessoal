"use client";

import { useEffect, useState } from 'react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Mostra o botão quando o usuário rolar para baixo
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
  <button
    onClick={scrollToTop}
    className={`fixed bottom-8 right-8 bg-orange-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 ${
      isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
    aria-label="Voltar para o topo"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      />
    </svg>
  </button>
);

}