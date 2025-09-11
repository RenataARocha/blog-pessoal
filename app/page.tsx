import PostCard from "../components/PostCard";
import { posts } from "../data/posts";

export default function Home() {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          content={post.summary}
          date={post.date}
          slug={post.slug}
        />
      ))}
    </div>
  );
}
