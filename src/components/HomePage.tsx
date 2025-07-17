'use client'
import Image from "next/image";
import Link from "next/link";
import { useCart } from '@/context/CartContext';
import { products } from '@/app/shop/products';
import { toast } from 'react-hot-toast';
import { Zap, BadgeDollarSign, ShieldCheck, Gift } from 'lucide-react';
import blogData from '@/app/blog/blogData';


export default function HomePage() {
  const { addToCart } = useCart();

  // Featured product names as in the original array
  const featuredNames = [
    'Dragon Slayer Skin',
    'Pro Gamer Code',
    'Ultra Mod Pack',
    'Gift Card $25',
  ];
  // Find the full product objects from the products array
  const featuredProducts = featuredNames.map((name) =>
    products.find((p) => p.name === name)
  ).filter(Boolean);

  const categories = [
    { title: 'Skins', img: '/images/skins.png', accent: 'neon-blue' },
    { title: 'Codes', img: '/images/codes.png', accent: 'neon-green' },
    { title: 'Mods', img: '/images/mods.png', accent: 'neon-purple' },
    { title: 'Gift Cards', img: '/images/gift-cards.png', accent: 'neon-blue' },
  ];

  return (
    <div className="font-rajdhani">
      <main className="bg-[#0a0a23] text-white min-h-screen">
      {/* Hero Section */}
      <section style={{ backgroundImage: "url('/hero-image.png')", backgroundSize: 'cover', backgroundPosition: 'center' }} className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">n
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 mt-10 flex flex-col items-center text-center w-full px-4">
          <h1 className="text-2xl md:text-4xl font-extrabold text-neon-blue mb-4 animate-fade-in font-rajdhani">
            Level Up Your Game!
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 animate-fade-in delay-200 font-rajdhani">
            Buy Skins, Codes, Mods, and Gift Cards – All in One Place
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-2">
            <Link href="/shop" className="px-8 py-3 rounded-lg bg-neon-blue text-white font-bold shadow-neon transition hover:bg-neon-green hover:shadow-neon-green focus:outline-none focus:ring-2 focus:ring-neon-blue text-lg animate-fade-in delay-300">
              Shop Now
            </Link>
            <Link href="/register" className="px-8 py-3 rounded-lg bg-neon-purple text-white font-bold shadow-neon-purple transition hover:bg-neon-blue hover:shadow-neon focus:outline-none focus:ring-2 focus:ring-neon-purple text-lg animate-fade-in delay-400">
              Register Now to Get Bonus Loot
            </Link>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="max-w-7xl mx-auto py-8 px-4">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-10 text-neon-green font-rajdhani">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={{ pathname: '/shop', query: { category: cat.title } }}
              className={`group rounded-xl overflow-hidden shadow-lg bg-[#181840] hover:scale-105 transition transform duration-300 border-2 border-transparent hover:border-${cat.accent}`}
            >
              <div className="relative w-full h-64 md:h-72">
                <Image src={cat.img} alt={cat.title} layout="fill" objectFit="contain" className="group-hover:opacity-80 transition" />
              </div>
              <div className={`p-4 text-center text-xl font-bold text-white group-hover:text-${cat.accent} font-rajdhani`}>{cat.title}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-10 text-neon-purple font-rajdhani">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {featuredProducts.map((prod) => (
            <div key={prod!.id} className="bg-[#181840] rounded-xl pb-4 shadow-lg flex flex-col items-center  hover:scale-105 transition transform duration-300 border-2 border-transparent hover:border-neon-blue">
              <div className="relative w-full h-52 mb-4">
                <Image src={prod!.image} alt={prod!.name} layout="fill" objectFit="cover" objectPosition="top" className="rounded-lg" />
              </div>
              <div className="text-lg font-bold mb-2 text-white text-center font-rajdhani">{prod!.name}</div>
              <div className="text-neon-green font-extrabold text-xl mb-4 font-rajdhani">{prod!.price}</div>
              <button
                className="px-5 py-2 cursor-pointer rounded-lg bg-neon-blue text-white font-bold shadow-neon transition hover:bg-neon-green hover:shadow-neon-green focus:outline-none focus:ring-2 focus:ring-neon-blue"
                onClick={() => {
                  addToCart({ id: prod!.id, name: prod!.name, image: prod!.image, price: parseFloat(prod!.price.replace(/[^\d.]/g, '')) });
                  toast.custom((t) => (
                    <div
                      className={`px-6 py-3 rounded-xl shadow-neon border-2 border-neon-blue bg-[#181840] flex items-center gap-3 animate-fade-in ${t.visible ? 'opacity-100' : 'opacity-0'}`}
                      style={{ color: '#00eaff', fontFamily: 'Orbitron, sans-serif', fontWeight: 700 }}
                    >
                      <span className="text-neon-green text-2xl">🎮</span>
                      <span>Added <span className="text-neon-purple">{prod!.name}</span> to cart!</span>
                    </div>
                  ), { duration: 1800 });
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-4 text-neon-blue font-rajdhani">Why Choose Us?</h2>
        <p className="text-center text-white/80 mb-10 max-w-2xl mx-auto font-rajdhani text-base md:text-lg">
          Experience instant access, unbeatable prices, and a secure shopping environment. Join our community to unlock exclusive rewards and enjoy a seamless journey through the best in gaming, mods, and avatar gear.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: <Zap size={40} className="mx-auto text-neon-blue drop-shadow-neon" />, text: 'Instant Access' },
            { icon: <BadgeDollarSign size={40} className="mx-auto text-neon-green drop-shadow-neon-green" />, text: 'Best Prices' },
            { icon: <ShieldCheck size={40} className="mx-auto text-neon-purple drop-shadow-neon-purple" />, text: 'Safe & Secure' },
            { icon: <Gift size={40} className="mx-auto text-pink-500 drop-shadow-neon" />, text: 'Bonus Loot for Members' },
          ].map((feat) => (
            <div key={feat.text} className="bg-[#181840] rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-neon-purple transition">
              <div className="text-4xl mb-4 font-rajdhani">{feat.icon}</div>
              <div className="text-lg font-bold text-white font-rajdhani">{feat.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-4 text-neon-green font-rajdhani">Latest Blog Posts</h2>
        <p className="text-center text-white/80 mb-10 max-w-2xl mx-auto font-rajdhani text-base md:text-lg">
          Stay up to date with the latest news, guides, and tips from the world of gaming, Roblox, and avatar gear. Dive into our featured articles and discover something new every week!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogData.slice(0, 3).map((post) => (
            <div key={post.slug} className="bg-[#181840] rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition border-2 border-transparent hover:border-neon-green">
              <div className="relative w-full h-[20rem]">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="contain" className="rounded-t-xl" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-neon-green mb-2 font-rajdhani">{post.title}</h3>
                <p className="text-white/80 text-sm mb-4 font-rajdhani flex-1">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="mt-auto inline-block px-5 py-2 rounded-lg bg-neon-green text-[#181840] font-bold shadow-neon-green transition hover:bg-neon-blue hover:text-white hover:shadow-neon focus:outline-none focus:ring-2 focus:ring-neon-green text-sm font-rajdhani text-center">Read More</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/blog" className="px-8 py-3 rounded-lg bg-neon-blue text-white font-bold shadow-neon transition hover:bg-neon-green hover:text-[#181840] hover:shadow-neon-green focus:outline-none focus:ring-2 focus:ring-neon-blue text-lg font-rajdhani">View All Blog Posts</Link>
        </div>
      </section>

      {/* User Reviews Section */}
      <section className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-4 text-neon-purple font-rajdhani">User Reviews</h2>
        <p className="text-center text-white/80 mb-10 max-w-2xl mx-auto font-rajdhani text-base md:text-lg">
          See what our community is saying about RobloxAvatarGear! Real feedback from real gamers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              avatar: '/images/logo.png',
              name: 'PixelNinja',
              rating: 5,
              review: 'Absolutely love the selection and the neon vibe! My avatar has never looked better. Fast delivery and great support.'
            },
            {
              avatar: '/images/logo.png',
              name: 'GamerQueen',
              rating: 4,
              review: 'Found rare skins I couldn’t get anywhere else. Checkout was smooth and the blog tips are super helpful.'
            },
            {
              avatar: '/images/logo.png',
              name: 'CodeMaster',
              rating: 5,
              review: 'Safe, secure, and stylish! The mods and codes work perfectly. Highly recommend to all Roblox fans.'
            },
            {
              avatar: '/images/logo.png',
              name: 'ShadowStrike',
              rating: 5,
              review: 'Customer service is top-notch. Got a bonus loot code just for signing up! Will shop again.'
            },
          ].map((user, idx) => (
            <div key={idx} className="bg-[#181840] rounded-xl shadow-lg p-8 flex flex-col items-center border-2 border-transparent hover:border-neon-purple transition">
              <Image src={user.avatar} alt={user.name} width={64} height={64} className="rounded-full mb-4 drop-shadow-neon" />
              <div className="text-lg font-bold text-neon-purple mb-1 font-rajdhani">{user.name}</div>
              <div className="flex items-center mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < user.rating ? 'text-yellow-400 text-xl' : 'text-gray-600 text-xl'}>★</span>
                ))}
              </div>
              <p className="text-white/80 text-center font-rajdhani">{user.review}</p>
            </div>
          ))}
        </div>
      </section>

     

      {/* Custom styles for neon and font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&display=swap');
        .font-rajdhani { font-family: 'Rajdhani', Arial, sans-serif; }
        .font-orbitron { font-family: 'Orbitron', sans-serif; }
        .text-neon-blue { color: #00eaff; }
        .bg-neon-blue { background: #00eaff; }
        .text-neon-green { color: #00ffb7; }
        .bg-neon-green { background: #00ffb7; }
        .text-neon-purple { color: #a259ff; }
        .bg-neon-purple { background: #a259ff; }
        .shadow-neon { box-shadow: 0 0 8px #00eaff, 0 0 16px #00eaff44; }
        .shadow-neon-green { box-shadow: 0 0 8px #00ffb7, 0 0 16px #00ffb744; }
        .shadow-neon-purple { box-shadow: 0 0 8px #a259ff, 0 0 16px #a259ff44; }
        .drop-shadow-neon { filter: drop-shadow(0 0 6px #00eaff); }
        .drop-shadow-neon-green { filter: drop-shadow(0 0 6px #00ffb7); }
        .drop-shadow-neon-purple { filter: drop-shadow(0 0 6px #a259ff); }
        .animate-fade-in { animation: fadeIn 1s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }
      `}</style>
    </main>
    </div>
  );
}
