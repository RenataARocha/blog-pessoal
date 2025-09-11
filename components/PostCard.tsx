import Link from "next/link";

type PostCardProps = {
  title: string;
  content: string;
  date: string;
  slug: string;
};

export default function PostCard({ title, content, date, slug }: PostCardProps) {
  return (
    <article className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700 mt-2">{content}</p>
      <small className="text-gray-500">{date}</small>
      <div> <Link href={`/posts/${slug}`} className="text-pink-500 hover:underline">
        Leia mais →
      </Link>
      </div>
    </article>
  );
}
