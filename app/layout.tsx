import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";

export const metadata = {
  title: "Blog Pessoal - Renata Rocha",
  description: "Um blog minimalista feito com Next.js e App Router",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="font-sans bg-white text-gray-800">
        <header className="bg-white shadow-mb p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2x1 font-serif">Meu Blog</h1>
            <nav>
              <ul className="flex space-x-6">
                <li><a href=" /" className="hover:text-pink-500">Home</a></li>
                <li><a href="/about" className="hover:text-pink-500">Sobre</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="container mx-auto mt-8">
          {children}
        </main>

        <footer className="bg-gray-100 mt-12 p-4 text-center text-sm text-gray-600">
          &copy; 2025 Renata Rocha
        </footer>
      </body>
    </html>
  );
}
