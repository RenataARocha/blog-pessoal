import PostCard from "../components/PostCard";
import FeaturedPostCard from "../components/FeaturedPostCard";
import { posts } from "../data/posts";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";

// Import das imagens
import imgOrganizadora from "../public/assets/organizadora-lar.png";
import imgCurriculo from "../public/assets/gerador-curriculo.png";
import imgProjeto7 from "../public/assets/to-do-list-react.png";
import imgKoru from "../public/assets/assistente-de-estudos-com-ia.png";

// Mapeamento do slug para a imagem correspondente
const imagesMap: Record<string, StaticImageData> = {
  "organizadora-lar": imgOrganizadora,
  "gerador-curriculo": imgCurriculo,
  "to-do-list-react": imgProjeto7,
  "assistente-de-estudos-com-ia": imgKoru,
};

export default function Home() {
  // Separa os primeiros 2 posts (sem imagem) dos demais (com imagem)
  const firstTwoPosts = posts.slice(0, 2);
  const remainingPosts = posts.slice(2);

  return (
    <div >

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

      {/* Últimos Posts (os 2 primeiros, sem imagem) */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-playfair font-bold text-gray-800 mb-8 text-center">Últimos Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {firstTwoPosts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.summary}
              date={post.date}
              slug={post.slug}
            />
          ))}
        </div>

        {/* Demais posts (com imagem, usando FeaturedPostCard) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {remainingPosts.map((post) => (
            <FeaturedPostCard
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
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Imagem */}
          <div className="md:w-1/2">
            <Image
              src="/assets/programando.jpg"
              alt="Renata Rocha programando"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Conteúdo (texto e botão) */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-playfair font-bold text-gray-800 mb-4">Sobre mim</h2>
            <p className="text-lg text-gray-700 font-assistant leading-relaxed mb-6">
              Sou <strong>Renata Rocha</strong>, designer gráfico em transição para o
              desenvolvimento <strong>Front-End</strong>. Apaixonada por criar projetos
              modernos, intuitivos e com foco em usabilidade, uno minha experiência em
              design à programação para transformar ideias em sites bonitos e funcionais.
              Atualmente, aprofundo meus estudos em <strong>React</strong>, desenvolvendo
              aplicações dinâmicas e escaláveis que garantem uma experiência de usuário
              excepcional.
            </p>

            <Link
              href="/about"
              className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-500 transition transform hover:-translate-y-1 inline-block"
            >
              Saiba mais
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}