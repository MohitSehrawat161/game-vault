'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products, Product } from '../app/shop/products';
import { useCart } from '@/context/CartContext';
import { toast } from 'react-hot-toast';
import { useSearchParams, useRouter } from 'next/navigation';
import { Gamepad2, UserCog, Code2, Wrench, Gift } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

const categories = [
  { label: 'All', value: 'All', icon: <Gamepad2 size={20} /> },
  { label: 'Skins', value: 'Skins', icon: <UserCog size={20} /> },
  { label: 'Codes', value: 'Codes', icon: <Code2 size={20} /> },
  { label: 'Mods', value: 'Mods', icon: <Wrench size={20} /> },
  { label: 'Gift Cards', value: 'Gift Cards', icon: <Gift size={20} /> },
];

const PAGE_SIZE = 6;

export default function ShopPage() {
  const { addToCart } = useCart();
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get('category');

  // Set initial category from param, fallback to All
  const [selectedCategory, setSelectedCategory] = useState(categoryParam && categories.some(c => c.value === categoryParam) ? categoryParam : 'All');
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  // Sync category with URL param
  useEffect(() => {
    if (categoryParam && categories.some(c => c.value === categoryParam)) {
      setSelectedCategory(categoryParam);
      setPage(1);
    }
  }, [categoryParam]);

  // When user clicks a filter, update URL param
  const handleCategoryClick = (catValue: string) => {
    setSelectedCategory(catValue);
    setPage(1);
    if (catValue === 'All') {
      router.replace('/shop');
    } else {
      router.replace(`/shop?category=${encodeURIComponent(catValue)}`);
    }
  };

  // Filter by category and search
  const filtered = (selectedCategory === 'All'
    ? products
    : products.filter((p) => p.category === selectedCategory)
  ).filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
  const paginated = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = filtered.length > paginated.length;

  return (
    <div className="bg-[#0a0a23] min-h-screen text-white font-orbitron pb-16">
      {/* Search Input */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 mb-4">
        <input
          type="text"
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(1); }}
          placeholder="Search any items..."
          className="w-full sm:w-96 px-4 py-2 mt-8 rounded-lg bg-[#181840] border-2 border-[#22224a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue shadow-neon"
        />
      </div>
      {/* Category Filters */}
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-3 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat.value}
            className={`flex items-center gap-2  px-5 py-2 mt-4 rounded-full font-bold border-2 transition shadow-neon  cursor-pointer
              ${selectedCategory === cat.value
                ? 'bg-neon-blue border-neon-blue text-white drop-shadow-neon'
                : 'bg-[#181840] border-[#22224a] text-neon-blue hover:bg-neon-purple hover:text-white hover:border-neon-purple'}
            `}
            onClick={() => handleCategoryClick(cat.value)}
          >
            <span >{cat.icon}</span> {cat.label}
          </button>
        ))}
      </div>
      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {paginated.map((product) => (
          <Dialog key={product.id}>
            <div
              className="group pb-4 bg-[#181840] rounded-2xl shadow-lg border-2 border-transparent hover:border-neon-green transition relative overflow-hidden flex flex-col items-center hover:scale-105 duration-300"
            >
              <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                  className="transition group-hover:opacity-80"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Quick Details on Hover */}
                <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
                  <div className="text-neon-green font-bold mb-2">{product.name}</div>
                  <div className="text-sm text-white/80 mb-2 line-clamp-3">{product.description}</div>
                  <DialogTrigger asChild>
                    <button
                      className="mt-2 px-4 py-2 cursor-pointer rounded-lg bg-neon-blue text-white font-bold shadow-neon transition hover:bg-neon-green hover:shadow-neon-green focus:outline-none focus:ring-2 focus:ring-neon-blue text-sm"
                    >
                      Quick Review
                    </button>
                  </DialogTrigger>
                </div>
              </div>
              <div className="w-full flex-1 flex flex-col items-center justify-between">
                <div className="text-lg font-bold text-white text-center mb-2">{product.name}</div>
                <div className="text-neon-green font-extrabold text-xl mb-4">{product.price}</div>
                <button
                  onClick={() => {
                    const price = parseFloat(product.price.replace(/[^\d.]/g, ''));
                    addToCart({ id: product.id, name: product.name, image: product.image, price });
                    toast.custom((t) => (
                      <div
                        className={`px-6 py-3 rounded-xl shadow-neon border-2 border-neon-blue bg-[#181840] flex items-center gap-3 animate-fade-in ${t.visible ? 'opacity-100' : 'opacity-0'}`}
                        style={{ color: '#00eaff', fontFamily: 'Orbitron, sans-serif', fontWeight: 700 }}
                      >
                        <span className="text-neon-green text-2xl">🎮</span>
                        <span>Added <span className="text-neon-purple">{product.name}</span> to cart!</span>
                      </div>
                    ), { duration: 1800 });
                  }}
                  className="px-5 py-2 rounded-lg bg-neon-blue text-white font-bold shadow-neon transition hover:bg-neon-green hover:shadow-neon-green focus:outline-none focus:ring-2 focus:ring-neon-blue w-full cursor-pointer">
                  Add to Cart
                </button>
              </div>
              {/* Modal for Quick Review */}
              <DialogContent className="max-w-md w-full bg-[#181840] border-neon-blue text-white rounded-2xl shadow-neon">
                <DialogHeader>
                  <DialogTitle className="text-neon-blue text-xl font-bold mb-2">{product.name}</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center gap-4">
                  <div className="relative w-40 h-40">
                    <Image src={product.image} alt={product.name} layout="fill" objectFit="contain" className="rounded-xl" />
                  </div>
                  <div className="text-neon-green font-extrabold text-lg">{product.price}</div>
                  <DialogDescription className="text-white/90 text-base mt-2 mb-4 text-center">
                    {product.description}
                  </DialogDescription>
                  <button
                    className="px-5 py-2 cursor-pointer rounded-lg bg-neon-blue text-white font-bold shadow-neon transition hover:bg-neon-green hover:shadow-neon-green focus:outline-none focus:ring-2 focus:ring-neon-blue"
                    onClick={() => {
                      const price = parseFloat(product.price.replace(/[^\d.]/g, ''));
                      addToCart({ id: product.id, name: product.name, image: product.image, price });
                      toast.success(`${product.name} added to cart!`);
                    }}
                  >
                    Add to Cart
                  </button>
                  <DialogClose asChild>
                    <button className="mt-2 cursor-pointer text-sm text-neon-blue underline hover:text-neon-green">Close</button>
                  </DialogClose>
                </div>
              </DialogContent>
            </div>
          </Dialog>
        ))}
      </div>
      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center mt-12">
          <button
            className="px-8 py-3 rounded-lg bg-neon-purple text-white font-bold shadow-neon-purple transition hover:bg-neon-blue hover:shadow-neon focus:outline-none focus:ring-2 focus:ring-neon-purple cursor-pointer"
            onClick={() => setPage((p) => p + 1)}
          >
            Load More
          </button>
        </div>
      )}
      {/* Custom styles for neon and font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&display=swap');
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
      `}</style>
    </div>
  );
} 