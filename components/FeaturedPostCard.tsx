import Link from "next/link";
import Image, { type StaticImageData } from "next/image"

type FeaturedPostCardProps = {
  title: string;
  content: string;
  date: string;
  slug: string;
  image: string | StaticImageData;
};

export default function FeaturedPostCard({ title, content, date, slug, image }: FeaturedPostCardProps) {
  return (
    <article className="flex flex-col rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      {/* Imagem */}
      <div className="relative w-full h-auto">
        <Image
          src={image}
          alt={title}
          width={600} // Ajuste a largura para o tamanho ideal da imagem
          height={400} // Ajuste a altura para o tamanho ideal da imagem
          className="object-cover w-full rounded-t-lg"
        />
      </div>

      {/* Conteúdo ao lado */}
      <div className="p-6 flex flex-col justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-2">{date}</p>
          <h2 className="text-2xl font-playfair font-bold text-gray-800 mb-2 leading-tight">{title}</h2>
          <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">{content}</p>
        </div>
        <div className="mt-auto">
          <Link
            href={`/posts/${slug}`}
            className="text-orange-600 hover:underline"
          >
            Leia Mais →
          </Link>
        </div>
      </div>
    </article>
  );
}