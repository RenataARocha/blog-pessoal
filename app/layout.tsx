import Link from "next/link";
import "./globals.css";
import { Playfair_Display, Assistant } from "next/font/google";

// Fonte do título
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

// Fonte do subtítulo e textos
const assistant = Assistant({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-assistant",
});

export const metadata = {
  title: "Renata Rocha | Diário de uma Dev",
  description: "Um blog pessoal sobre minha jornada no front-end",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      style={{
        "--font-title": `"${playfair.style.fontFamily}"`,
        "--font-sub": `"${assistant.style.fontFamily}"`,
      } as React.CSSProperties}
    >
      <body className="bg-[var(--background)] text-[var(--foreground)] font-[var(--font-sub)]">
        {/* Cabeçalho */}
        <header className="border-b border-gray-200 py-6 text-center">
          <h1 className="text-4xl title">Diário de uma Dev</h1>
          <h2 className="text-xl subtitle text-pink-600">Renata Rocha</h2>
          <p className="subtitle text-gray-500">
            Um blog pessoal sobre minha jornada no front-end
          </p>

          {/* Navbar */}
          <nav className="mt-4 flex justify-center space-x-8 text-sm uppercase" style={{ fontFamily: "var(--font-sub)" }}>
            <Link href="/" className="hover:text-pink-500">Home</Link>
            <Link href="/about" className="hover:text-pink-500">Sobre</Link>
            <Link href="/posts" className="hover:text-pink-500">Blog</Link>
            <Link href="/contact" className="hover:text-pink-500">Contato</Link>
          </nav>
        </header>

        {/* Conteúdo */}
        <main className="max-w-3xl mx-auto p-6">{children}</main>
      </body>
    </html>

  );
}
