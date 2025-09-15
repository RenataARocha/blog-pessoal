import Link from "next/link";

type PostCardProps = {
  title: string;
  content: string;
  date: string;
  slug: string;
};

export default function PostCard({ title, content, date, slug }: PostCardProps) {
  return (
    <article className="border p-4 rounded-lg shadow-sm hover:shadow-md transition overflow-hidden bg-white">
      <small className="text-gray-500" aria-label={`Publicado em ${date}`}>
        {date}
      </small>
      <h2 className="text-xl font-semibold mt-2 mb-2">{title}</h2>
      <p className="text-gray-700 line-clamp-3">{content}</p>
      <div className="mt-4">
        <Link
          href={`/posts/${slug}`}
          className="text-orange-600 hover:underline"
          aria-label={`Leia mais sobre ${title}`}
        >
          Leia mais →
        </Link>
      </div>
    </article>
  );
}
