// Server Component - PostPage.tsx
import { notFound } from "next/navigation";
import { posts } from "../../../data/posts";
import Link from "next/link";
import { PostContent } from "../../../components/PostContent"; // Client Component para animação
import ReactMarkdown from "react-markdown";

// Mapeamento de slugs para paths de imagens/vídeos
const mediaMap: Record<string, string> = {
  "organizadora-lar": "/assets/organizadora-lar.mp4",
  "gerador-curriculo": "/assets/gerador-curriculo.mp4",
  "to-do-list-react": "/assets/to-do-list-react.mp4",
  "assistente-de-estudos-com-ia": "/assets/assistente-de-estudos-com-ia.mp4",
  "explorando-app-router": "/assets/router.png",
};

interface PostPageProps {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: PostPageProps) {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug);

  if (!post) return notFound();

  const mediaSrc = mediaMap[post.slug];

  return (
    <PostContent>
      <div className="max-w-4xl mx-auto py-12 px-4">
        {/* Breadcrumb com acessibilidade */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="list-none flex gap-1">
            <li>
              <Link href="/" className="hover:text-gray-700">Home</Link>
              <span aria-hidden="true"> / </span>
            </li>
            <li>
              <Link href="/posts" className="hover:text-gray-700">Blog</Link>
              <span aria-hidden="true"> / </span>
            </li>
            <li className="text-gray-800" aria-current="page">{post.title}</li>
          </ol>
        </nav>

        {/* Título principal */}
        <h1 id="post-title" className="text-3xl font-playfair font-bold text-gray-800 mb-4">
          {post.title}
        </h1>

        {/* Data do post */}
        <p className="text-gray-500 mb-6">{post.date}</p>

        {/* Renderização de mídia: vídeo ou imagem com labels acessíveis */}
        {mediaSrc && mediaSrc.endsWith(".mp4") ? (
          <video
            src={mediaSrc}
            controls
            className="mb-6 rounded-lg w-full max-h-[500px] shadow-lg"
            aria-label={`Vídeo do post: ${post.title}`}
          />
        ) : mediaSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={mediaSrc}
            alt={`Imagem do post: ${post.title}`}
            className="mb-6 rounded-lg w-full max-h-[500px] object-cover shadow-lg"
          />
        ) : null}

        {/* Conteúdo do post */}
        <main aria-labelledby="post-title" className="prose max-w-none text-gray-700">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </main>

        {/* Link de voltar para o blog */}
        <Link
          href="/posts"
          className="inline-block mt-8 text-blue-600 hover:underline"
          aria-label="Voltar para a lista de posts do Blog"
        >
          &larr; Voltar para o Blog
        </Link>
      </div>
    </PostContent>
  );
}
