import PostCard from "../components/PostCard";
import { posts } from "../data/posts";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
// Import das imagens
import imgOrganizadora from "../public/assets/organizadora-lar.png";
import imgCurriculo from "../public/assets/gerador-curriculo.png";
import imgProjeto7 from "../public/assets/To-Do List React.png";
import imgKoru from "../public/assets/assistente-de-estudos-com-IA.png";

// Mapeamento do slug para a imagem correspondente
const imagesMap: Record<string, StaticImageData> = {
  "organizadora-lar": imgOrganizadora,
  "gerador-curriculo": imgCurriculo,
  "To-Do-List-React": imgProjeto7,
  "assistente-de-estudos-com-IA": imgKoru,
};

export default function Home() {
  return (
    <div className="space-y-16">

      {/* Hero / Apresentação com imagem de fundo */}
      <section className="relative w-screen h-screen">
        <Image
          src="/assets/codigo.jpg"
          alt="Código em tela"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-5xl font-playfair mb-6">Olá, eu sou Renata</h1>
          <p className="text-lg font-assistant mb-8">
            Desenvolvedora Front-End em transição de carreira, criando projetos intuitivos e bonitos.
          </p>
          <Link
            href="/posts"
            className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-500 transition transform hover:-translate-y-1 inline-block"
          >
            Ver Posts
          </Link>
        </div>
      </section>

      {/* Últimos Posts */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {posts.slice(0, 2).map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.summary}
              date={post.date}
              slug={post.slug}
              image={undefined} // sem imagem
            />
          ))}
        </div>

        {/* Demais posts com imagem */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(2).map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.summary}
              date={post.date}
              slug={post.slug}
              image={imagesMap[post.slug]}
            />
          ))}
        </div>
      </section>

      {/* Mini bio / Sobre você */}
      <section className="bg-gray-50 py-16 text-center max-w-3xl mx-auto px-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-playfair mb-4">Sobre mim</h2>
        <p className="text-gray-700 font-assistant mb-6">
          Sou Renata Rocha, designer gráfico em transição para Front-End. Crio projetos modernos, intuitivos e com foco em usabilidade. Amo transformar ideias em sites bonitos e funcionais.
        </p>
        <Link
          href="/about"
          className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-500 transition transform hover:-translate-y-1"
        >
          Saiba mais
        </Link>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16">
        <h2 className="text-2xl font-playfair mb-6">Quer ver mais?</h2>
        <Link
          href="/contact"
          className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-500 transition transform hover:-translate-y-1"
        >
          Entre em contato
        </Link>
      </section>

    </div>
  );
}
