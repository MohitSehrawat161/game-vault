import Image from 'next/image';
import Link from 'next/link';
import blogData from './blogData';

export const metadata = {
  title: "Latest Gaming News & Updates | RobloxAvatarGear Blog",
  description: "Stay updated with the latest gaming news, modding tips, and shop announcements from RobloxAvatarGear. Explore articles, guides, and more.",
  keywords: [
    "gaming news",
    "game updates",
    "modding tips",
    "RobloxAvatarGear blog",
    "gaming articles",
    "e-sports",
    "game reviews",
    "cyberpunk news",
    "shop announcements",
    "gamer guides"
  ],
 
};

interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string[];
  content: string;
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-12 px-4 md:px-8 font-orbitron">
      <h1 className="text-2xl md:text-3xl font-bold text-neon-purple mb-10 text-center ">Latest News & Updates</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {(blogData as BlogPost[]).map((post) => (
          <div
            key={post.slug}
            className="bg-gray-900/80 border-2 border-neon-purple rounded-xl shadow-neon hover:shadow-neon-purple transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-60">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-contain object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <div className="mb-2 flex flex-wrap gap-2">
                {post.category.map((cat: string) => (
                  <span
                    key={cat}
                    className="text-xs px-2 py-1 rounded-full font-semibold bg-neon-blue/20 text-neon-blue border border-neon-blue shadow-neon-green"
                  >
                    #{cat}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-bold text-neon-purple mb-2 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-gray-300 mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="mt-auto">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block text-white font-bold hover:animate-pulse hover:text-neon-blue transition-colors duration-200"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 