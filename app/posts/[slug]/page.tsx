import { notFound } from "next/navigation";
import LikeButton from "../../../components/LikeButton";
import { getPostBySlug, Post } from "../../../data/posts";

type Params = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: Params) {
  const post: Post | undefined = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="prose lg:prose-xl max-w-none mx-auto p-6">
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
