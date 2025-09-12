import Link from "next/link";
import Image, { type StaticImageData } from "next/image";

type PostCardProps = {
  title: string;
  content: string;
  date: string;
  slug: string;
  image?: string | StaticImageData;
};

export default function PostCard({ title, content, date, slug, image }: PostCardProps) {
  return (
    <article className="flex flex-col md:flex-row border p-4 rounded-lg shadow-sm hover:shadow-md transition overflow-hidden">
      {image && (
        <div className="md:w-1/3 flex-shrink-0">
          <Image
            src={image}
            alt={title}
            className="object-cover w-full h-full rounded-md"
            width={300}
            height={200}
          />
        </div>
      )}
      <div className={`flex flex-col justify-between mt-4 md:mt-0 ${image ? "md:ml-6" : ""}`}>
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-700 mt-2">{content}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <small className="text-gray-500">{date}</small>
          <Link href={`/posts/${slug}`} className="text-pink-500 hover:underline">
            Leia mais →
          </Link>
        </div>
      </div>
    </article>
  );
}
