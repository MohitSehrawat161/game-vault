'use client'
import Image from "next/image";
import Link from "next/link";
import { useCart } from '@/context/CartContext';
import { products } from '@/app/shop/products';
import { toast } from 'react-hot-toast';



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
      <section className="relative w-full  flex items-center justify-center overflow-hidden">
        
        <div className="relative z-10 mt-10 flex flex-col items-center text-center w-full px-4">
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
              {/* <div className={`p-4 text-center text-xl font-bold text-white group-hover:text-${cat.accent} font-rajdhani`}>{cat.title}</div> */}
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
        <h2 className="text-xl md:text-2xl font-bold text-center mb-10 text-neon-blue font-rajdhani">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: '⚡', text: 'Instant Access' },
            { icon: '💸', text: 'Best Prices' },
            { icon: '🛡️', text: 'Safe & Secure' },
            { icon: '🎁', text: 'Bonus Loot for Members' },
          ].map((feat) => (
            <div key={feat.text} className="bg-[#181840] rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-neon-purple transition">
              <div className="text-4xl mb-4 font-rajdhani">{feat.icon}</div>
              <div className="text-lg font-bold text-white font-rajdhani">{feat.text}</div>
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
