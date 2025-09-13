import { getPostBySlug } from "../../../data/posts";
import { notFound } from "next/navigation";
import Image, { type StaticImageData } from "next/image";
import LikeButton from "../../../components/LikeButton";

import imgOrganizadora from "../../../public/assets/organizadora-lar.png";
import imgCurriculo from "../../../public/assets/gerador-curriculo.png";
import imgProjeto7 from "../../../public/assets/To-Do List React.png";
import imgKoru from "../../../public/assets/assistente-de-estudos-com-IA.png";

const imagesMap: Record<string, StaticImageData> = {
  "organizadora-lar": imgOrganizadora,
  "gerador-curriculo": imgCurriculo,
  "To-Do-List-React": imgProjeto7,
  "assistente-de-estudos-com-IA": imgKoru,
};

type Props = {
  params: { slug: string };
};

export default async function PostPage({ params }: Props) {
  // ✅ Aguarda o post ser carregado
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-playfair font-bold text-gray-800 mb-4">
        {post.title}
      </h1>
      <p className="text-gray-500 text-sm mb-6">
        {post.date} • {post.author}
      </p>

      {/* Se tiver imagem */}
      {imagesMap[post.slug] && (
        <Image
          src={imagesMap[post.slug]}
          alt={post.title}
          className="rounded-xl shadow-md mb-6"
        />
      )}

      <div className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
        {post.content}
      </div>

      {/* Botão de like precisa do slug */}
      <div className="mt-8">
        <LikeButton slug={post.slug} />
      </div>
    </div>
  );
}
