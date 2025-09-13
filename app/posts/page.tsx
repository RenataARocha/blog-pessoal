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
    <div className="max-w-6xl mx-auto py-12 px-4 flex gap-8">
      {/* Menu lateral */}
      <aside className="w-1/4 sticky top-20 self-start">
        <h2 className="font-bold text-xl mb-4">Posts</h2>
        <ul className="space-y-2">
          {posts.map(post => (
            <li key={post.id}>
              <a
                href={`#${post.slug}`}
                className="text-blue-600 hover:underline"
              >
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Conteúdo dos posts */}
      <main className="w-3/4 space-y-16">
        {posts.map(post =>
          post.slug in imagesMap ? (
            <div id={post.slug} key={post.id}>
              <FeaturedPostCard
                title={post.title}
                content={post.content} 
                date={post.date}
                slug={post.slug}
                image={imagesMap[post.slug]}
              />
            </div>
          ) : (
            <div id={post.slug} key={post.id}>
              <PostCard
                title={post.title}
                content={post.content} 
                date={post.date}
                slug={post.slug}
              />
            </div>
          )
        )}
      </main>
    </div>
  );
}
