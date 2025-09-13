import PostCard from "../../components/PostCard";
import FeaturedPostCard from "../../components/FeaturedPostCard";
import { posts } from "../../data/posts";
import { type StaticImageData } from "next/image";

// Import das imagens
import imgOrganizadora from "../../public/assets/organizadora-lar.png";
import imgCurriculo from "../../public/assets/gerador-curriculo.png";
import imgProjeto7 from "../../public/assets/to-do-list-react.png";
import imgKoru from "../../public/assets/assistente-de-estudos-com-IA.png";

// Mapeamento slug -> imagem
const imagesMap: Record<string, StaticImageData> = {
  "organizadora-lar": imgOrganizadora,
  "gerador-curriculo": imgCurriculo,
  "To-Do-List-React": imgProjeto7,
  "assistente-de-estudos-com-IA": imgKoru,
};

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-playfair font-bold text-gray-800 mb-12 text-center">
        Todos os Posts
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) =>
          post.slug in imagesMap ? (
            <FeaturedPostCard
              key={post.id}
              title={post.title}
              content={post.summary}
              date={post.date}
              slug={post.slug}
              image={imagesMap[post.slug]}
            />
          ) : (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.summary}
              date={post.date}
              slug={post.slug}
            />
          )
        )}
      </div>
    </div>
  );
}
