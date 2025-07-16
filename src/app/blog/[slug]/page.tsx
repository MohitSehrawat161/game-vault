import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import blogData from '../blogData';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: any }) {
  const { slug } = await params
  const post = blogData.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: 'Not Found | GameVault',
      description: 'Blog post not found.',
    };
  }
  return {
    title: `${post.title} | GameVault Blog`,
    description: post.excerpt.length > 200 ? post.excerpt.slice(0, 197) + '...' : post.excerpt,
    keywords: post.category.concat([
      'gaming blog',
      'GameVault articles',
      'gaming news',
      'modding',
      'game updates',
      'cyberpunk',
      'shop announcements',
      'gamer tips',
      'e-sports',
    ]),
  };
}

export default async function Page({ params }: { params:any}) {
  const { slug } = await params
  const post = blogData.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-12 px-4 md:px-8 font-orbitron">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-neon-blue hover:text-neon-green font-bold mb-6 inline-block ">&larr; Back to Blogs</Link>
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden mb-6 border-2 border-neon-purple shadow-neon">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-contain object-center"
            sizes="(max-width: 768px) 100vw, 700px"
            priority
          />
        </div>
        <div className="mb-4 flex flex-wrap gap-2">
          {post.category.map((cat) => (
            <span
              key={cat}
              className="text-xs px-2 py-1 rounded-full font-semibold bg-neon-blue/20 text-neon-blue border border-neon-blue shadow-neon-green"
            >
              #{cat}
            </span>
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-neon-purple mb-4 ">{post.title}</h1>
        <article className="prose prose-invert prose-lg text-gray-200 max-w-none">
          {post.content.split('\n').map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </article>
      </div>
    </main>
  );
} 