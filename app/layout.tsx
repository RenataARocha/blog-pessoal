import "./globals.css";
import { Playfair_Display, Assistant } from "next/font/google";
import Navbar from "./Navbar";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import ScrollToTopButton from "../components/ScrollToTopButton"; // Importe o novo componente

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

export const metadata = {
  title: "Renata Rocha | Diário de uma Dev",
  description: "Um blog pessoal sobre minha jornada no front-end",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${assistant.variable}`}>
      <body className="bg-white text-black font-assistant">
        {/* ... (seu header) ... */}
        <header className="bg-white py-8 text-center relative">
          <span className="absolute bottom-0 left-0 w-full h-px bg-stone-400 shadow-sm shadow-stone-900/50"></span>
          <div className="max-w-4xl mx-auto">
            <h1 className="font-playfair text-6xl font-normal mb-2 tracking-wide text-black">
              Diário de uma Dev
            </h1>
            <h2 className="font-assistant text-lg font-normal text-pink-600 mb-1">
              Renata Rocha
            </h2>
            <p className="font-assistant text-sm text-gray-600 mb-6">
              Um blog pessoal sobre minha jornada no front-end
            </p>

            {/* Navbar Client */}
            <Navbar />
          </div>
        </header>

        <main className="mt-1">{children}</main>
        
        {/* Adicione o novo componente do botão aqui */}
        <ScrollToTopButton />

        {/* ... (seu footer) ... */}
        <footer id="contato" className="bg-black text-white py-8">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            {/* Título e Subtítulo */}
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-playfair font-normal">Diário de uma Dev</h3>
              <p className="text-sm text-gray-400">Um blog pessoal sobre minha jornada no front-end</p>
            </div>
            
            {/* Links da Navegação */}
            <nav className="mb-4 md:mb-0">
              <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-pink-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-pink-600 transition-colors">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="/posts" className="text-gray-300 hover:text-pink-600 transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Links de Contato */}
            <div className="flex space-x-4 mb-4 md:mb-0 text-gray-300">
              <a href="https://www.linkedin.com/in/renata-alexandre-rocha/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="h-6 w-6 hover:text-pink-600 transition-colors" />
              </a>
              <a href="https://github.com/RenataARocha" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="h-6 w-6 hover:text-pink-600 transition-colors" />
              </a>
              <a href="https://wa.me/5584986399847" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp className="h-6 w-6 hover:text-pink-600 transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Direitos Autorais */}
          <div className="mt-6 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Renata Rocha. Todos os direitos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}