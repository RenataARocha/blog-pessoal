import { getPostBySlug } from "../../../data/posts";
import { notFound } from "next/navigation";
import LikeButton from "../../../components/LikeButton";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound(); // retorna 404 do Next.js
  }

  return (
    <article className="prose lg:prose-xl max-w-none">
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-500">{post.date} — {post.author}</p>
      <div className="mt-4">
        <p>{post.content}</p>
      </div>

      <div className="mt-6">
        <LikeButton slug={post.slug} />
      </div>
    </article>
  );
}
