import "./globals.css";
import { Playfair_Display, Assistant } from "next/font/google";
import Navbar from "./Navbar"; // componente client

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
        <header className="bg-white py-8 text-center relative">
          <span className="absolute bottom-0 left-0 w-full h-px bg-stone-400 shadow-sm shadow-stone-900/50"></span>
          <div className="max-w-4xl mx-auto">
            <h1 className="font-playfair text-5xl font-normal mb-2 tracking-wide text-black">
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

        <main className="max-w-3xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
