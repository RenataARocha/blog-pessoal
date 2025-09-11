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
      <body className="font-sans bg-gray-50 text-gray-900 min-h-screen">
        <header className="bg-pink-500 text-white p-4">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            <h1 className="font-bold text-lg">🌸 Blog da Renata</h1>
            <nav className="space-x-4">
              <Link href="/">Home</Link>
              <Link href="/about">Sobre</Link>
            </nav>
          </div>
        </header>

        <main className="max-w-3xl mx-auto p-4">{children}</main>

        <footer className="text-center p-4 text-sm text-gray-500">
          © {new Date().getFullYear()} Renata Rocha
        </footer>
      </body>
    </html>
  );
}
