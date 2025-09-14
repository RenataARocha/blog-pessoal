import { notFound } from "next/navigation";
import { posts } from "../../../data/posts";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

// imagens
import imgOrganizadora from "../../../public/assets/organizadora-lar.png";
import imgCurriculo from "../../../public/assets/gerador-curriculo.png";
import imgProjeto7 from "../../../public/assets/to-do-list-react.png";
import imgKoru from "../../../public/assets/assistente-de-estudos-com-IA.png";

const imagesMap: Record<string, StaticImageData> = {
  "organizadora-lar": imgOrganizadora as StaticImageData,
  "gerador-curriculo": imgCurriculo as StaticImageData,
  "To-Do-List-React": imgProjeto7 as StaticImageData,
  "assistente-de-estudos-com-IA": imgKoru as StaticImageData,
};

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const imgSrc = imagesMap[post.slug];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-700">Home</Link> /{" "}
        <Link href="/posts" className="hover:text-gray-700">Blog</Link> /{" "}
        <span className="text-gray-800">{post.title}</span>
      </nav>

      <h1 className="text-3xl font-playfair font-bold text-gray-800 mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-6">{post.date}</p>

      {imgSrc && (
        <Image
          src={imgSrc}
          alt={post.title}
          className="mb-6 rounded-lg"
        />
      )}

      <div className="prose max-w-none text-gray-700">
        {post.content}
      </div>

      <Link
        href="/posts"
        className="inline-block mt-8 text-blue-600 hover:underline"
      >
        &larr; Voltar para o Blog
      </Link>
    </div>
  );
}
