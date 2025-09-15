import "./globals.css";
import { Playfair_Display, Assistant } from "next/font/google";
import Navbar from "./Navbar";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import ScrollToTopButton from "../components/ScrollToTopButton";
import Head from "next/head";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const assistant = Assistant({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-assistant",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${assistant.variable}`}>
      <Head>
        {/* Título e descrição */}
        <title>Renata Rocha | Blog Pessoal de Front-End</title>
        <meta name="description" content="Acompanhe a jornada de Renata Rocha na transição de designer gráfico para desenvolvedora Front-End, com estudos, projetos e reflexões sobre tecnologia." />

        {/* Open Graph */}
        <meta property="og:title" content="Renata Rocha | Blog Pessoal de Front-End" />
        <meta property="og:description" content="Acompanhe a jornada de Renata Rocha na transição de designer gráfico para desenvolvedora Front-End, com estudos, projetos e reflexões sobre tecnologia." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blog-pessoal-taupe.vercel.app/" />
        <meta property="og:image" content="https://blog-pessoal-taupe.vercel.app/assets/capa-blog.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Capa do Blog Pessoal de Renata Rocha" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Renata Rocha | Blog Pessoal de Front-End" />
        <meta name="twitter:description" content="Acompanhe a jornada de Renata Rocha na transição de designer gráfico para desenvolvedora Front-End, com estudos, projetos e reflexões sobre tecnologia." />
        <meta name="twitter:image" content="https://blog-pessoal-taupe.vercel.app/assets/capa-blog.png" />
      </Head>

      <body className="bg-white text-black font-assistant">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:block focus:absolute focus:p-4 focus:bg-gray-100 focus:text-black focus:border focus:border-gray-400 focus:rounded-md z-50">
          Pular para o conteúdo principal
        </a>

        <header className="bg-white py-8 text-center relative" role="banner">
          <span className="absolute bottom-0 left-0 w-full h-px bg-stone-400 shadow-sm shadow-stone-900/50"></span>
          <div className="max-w-4xl mx-auto">
            <h1 className="font-playfair text-6xl font-normal mb-2 tracking-wide text-black">
              Diário de uma Dev
            </h1>
            <h2 className="font-assistant text-lg font-normal text-orange-600 mb-1">
              Renata Rocha
            </h2>
            <p className="font-assistant text-sm text-gray-600 mb-6">
              Um blog pessoal sobre minha jornada no front-end
            </p>

            <Navbar />
          </div>
        </header>

        <main id="main-content" className="mt-1" role="main">{children}</main>

        <ScrollToTopButton aria-label="Voltar ao topo da página" />

        <footer id="contato" className="bg-black text-white py-8" role="contentinfo">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-playfair font-normal">Diário de uma Dev</h3>
              <p className="text-sm text-gray-400">Um blog pessoal sobre minha jornada no front-end</p>
            </div>

            <nav aria-label="Navegação do site" className="mb-4 md:mb-0">
              <ul className="flex flex-nowrap gap-4 md:flex-row items-center md:items-center justify-center md:justify-start md:gap-8 w-full">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-orange-600 transition-colors" aria-current="page">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-orange-600 transition-colors">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="/posts" className="text-gray-300 hover:text-orange-600 transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex space-x-4 mb-4 md:mb-0 text-gray-300">
              <a href="https://www.linkedin.com/in/renata-alexandre-rocha/" target="_blank" rel="noopener noreferrer" aria-label="Abrir LinkedIn em nova aba">
                <FaLinkedin className="h-6 w-6 hover:text-orange-600 transition-colors" aria-hidden="true" />
              </a>
              <a href="https://github.com/RenataARocha" target="_blank" rel="noopener noreferrer" aria-label="Abrir GitHub em nova aba">
                <FaGithub className="h-6 w-6 hover:text-orange-600 transition-colors" aria-hidden="true" />
              </a>
              <a href="https://wa.me/5584986399847" target="_blank" rel="noopener noreferrer" aria-label="Abrir WhatsApp em nova aba">
                <FaWhatsapp className="h-6 w-6 hover:text-orange-600 transition-colors" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Renata Rocha. Todos os direitos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
