import Link from "next/link";
import type { Post } from "../data/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="border rounded-xl p-4 shadow-sm bg-white hover:shadow-md transition">
      <h3 className="text-xl font-semibold">{post.title}</h3>
      <p className="text-sm text-gray-500">{post.date} — {post.author}</p>
      <p className="mt-2 text-gray-700">{post.summary}</p>
      <Link href={`/posts/${post.slug}`} className="text-pink-500 hover:underline mt-2 inline-block">
        Ler mais →
      </Link>
    </article>
  );
}
