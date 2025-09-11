import { getAllPosts } from "../data/posts";
import PostCard from "../components/PostCard";

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Últimos Posts</h2>
      <div className="grid gap-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
